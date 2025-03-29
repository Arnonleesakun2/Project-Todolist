<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodolistController;

Route::post('/createtodo', [TodolistController::class, 'CreateTodo']);
Route::get('/todo', [TodolistController::class, 'ListTodo']);
Route::get('/todos/{id}', [TodolistController::class, 'ReadTodo']);
Route::put('/updatetodo/{id}', [TodolistController::class, 'UpdateTodo']);
Route::patch('/updatestatus/{id}', [TodolistController::class, 'UpdateStatus']);
Route::delete('/deletetodo/{id}', [TodolistController::class, 'DeleteTodo']);