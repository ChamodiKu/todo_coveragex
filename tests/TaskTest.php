<?php
// tests/TaskTest.php - PHPUnit skeleton
// These tests are illustrative. To run them, set up PHPUnit and point to a testing DB.

use PHPUnit\Framework\TestCase;

final class TaskTest extends TestCase
{
    public function testCreateTask()
    {
        // Example test: use the local JSON storage to create a task and assert result fields.
        require __DIR__ . '/../backend/app/Models/Task.php';
        $task = \App\Models\Task::create('test title', 'test desc');
        $this->assertEquals('test title', $task['title']);
        $this->assertArrayHasKey('id', $task);
    }

    public function testMarkComplete()
    {
        require __DIR__ . '/../backend/app/Models/Task.php';
        $task = \App\Models\Task::create('complete me', '');
        $updated = \App\Models\Task::markComplete($task['id']);
        $this->assertTrue($updated);
    }
}
