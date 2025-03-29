<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todilist;

class TodolistController extends Controller

{
    public function ListTodo(Request $request)
    {
        try {
            $todo = Todilist::all();
            if ($todo) {
                return response()->json([
                    'result' => $todo // แสดงข้อมูลทั้งหมด
                ], 201);
            }
        } catch (\Exception  $e) {
            return response()->json([
                'message' =>  $e->getMessage(),
            ], 500);
        }
    }

    public  function CreateTodo(Request $request)
    {
        try {
            $todo = Todilist::create([
                'title' => $request->title,
                'description' => $request->description,
                'time' => $request->time,
                'status' => false,
            ]);
            return response()->json([
                'message' => 'Todolist created successfully',
                'result' => $todo // แสดงข้อมูลทั้งหมด
            ], 201);
        } catch (\Exception  $e) {
            return response()->json([
                'message' =>  $e->getMessage(),
            ], 500);
        }
    }
    public function ReadTodo($id)
    {
        try {
            $todo = Todilist::find($id);
            return response()->json([
                'message' => 'ReadTodolist successfully',
                'result' => $todo // แสดงข้อมูลทั้งหมด
            ], 201);
        } catch (\Exception  $e) {
            return response()->json([
                'message' =>  $e->getMessage(),
            ], 500);
        }
    }
    public function UpdateTodo(Request $request, $id)
    {
        try {
            $todo = Todilist::find($id);
            if (!$todo) {
                return response()->json([
                    'message' => 'Todolist not found'
                ], 404);
            }
            $todo->title = $request->title;
            $todo->description = $request->description;
            $todo->time = $request->time;
            $todo->save();

            return response()->json([
                'message' => 'Todolist updated successfully',
                'result' => $todo 
            ], 200);
        } catch (\Exception  $e) {
            return response()->json([
                'message' =>  $e->getMessage(),
            ], 500);
        }
    }
    public function UpdateStatus (Request $request, $id){
        try {
            $todo = Todilist::find($id);
            if (!$todo) {
                return response()->json([
                    'message' => 'Status not found'
                ], 404);
            }
            $todo->status = $request->status;
            $todo->save();
            return response()->json([
                'message' => 'Status updated successfully',
                'result' => $todo
            ], 200);
        } catch (\Exception  $e) {
            return response()->json([
                'message' =>  $e->getMessage(),
            ], 500);
        }
        
    }
    public function deletetodo($id)
    {
        try {
            $todo = Todilist::find($id);
            if ($todo) {
                $todo->delete();
                return response()->json([
                    'message' => 'Todolist Delete successfully',
                    'result' => $todo // แสดงข้อมูลทั้งหมด
                ], 201);
            }
            return response()->json([
                'message' => "Don't Have Todolist"
            ]);
        } catch (\Exception  $e) {
            return response()->json([
                'message' =>  $e->getMessage(),
            ], 500);
        }
    }
}
