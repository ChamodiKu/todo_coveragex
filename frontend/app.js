// app.js - vanilla JS frontend for the ToDo SPA
// This file communicates with the backend APIs:
// GET /api/tasks
// POST /api/tasks
// POST /api/tasks/{id}/complete
//
// The frontend expects the API to be available at http://localhost:8000/api/*
// If you run backend on a different host/port, update API_BASE.

const API_BASE = 'http://localhost:8005/api';

async function fetchTasks() {
  try {
    const res = await fetch(API_BASE + '/tasks');
    if (!res.ok) throw new Error('Failed to fetch tasks');
    const tasks = await res.json();
    return tasks;
  } catch (err) {
    console.error(err);
    return [];
  }
}

function renderTasks(tasks){
  const container = document.getElementById('tasks');
  container.innerHTML = '';
  if (!tasks.length){
    container.innerHTML = '<div class="card">No tasks yet</div>';
    return;
  }
  tasks.forEach(t => {
    const card = document.createElement('div');
    card.className = 'task-card card';
    const title = document.createElement('h3');
    title.textContent = t.title;
    const desc = document.createElement('div');
    desc.textContent = t.description || '';
    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = new Date(t.created_at).toLocaleString();
    const btn = document.createElement('button');
    btn.className = 'done-btn';
    btn.textContent = 'Done';
    btn.onclick = async () => {
      await completeTask(t.id);
      await reload();
    };
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(meta);
    card.appendChild(btn);
    container.appendChild(card);
  });
}

async function completeTask(id){
  await fetch(API_BASE + `/tasks/${id}/complete`, {
    method: 'POST'
  });
}

async function addTask(title, description){
  const res = await fetch(API_BASE + '/tasks', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({title, description})
  });
  return res.json();
}

async function reload(){
  const tasks = await fetchTasks();
  renderTasks(tasks);
}

document.getElementById('task-form').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  if (!title) return alert('Title required');
  await addTask(title, description);
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  await reload();
});

// initial load
reload();
