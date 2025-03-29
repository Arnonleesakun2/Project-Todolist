<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('todilists', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // ชื่องาน
            $table->text('description'); // รายละเอียดงาน
            $table->timestamp('time'); // เวลาที่ต้องทำงาน
            $table->boolean('status')->default(false); // สถานะเริ่มต้นเป็น false
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('todilists');
    }
};
