<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('/tasks',[TaskController::class,'index']);
Route::post('/tasks',[TaskController::class,'store']);
Route::post('/tasks/{id}/complete',[TaskController::class,'complete']);
