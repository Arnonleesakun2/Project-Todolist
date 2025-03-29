<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Todilist extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description', 'time', 'status'];
}
