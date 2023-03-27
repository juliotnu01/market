<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('categoría')->nullable();
            $table->text('descripcion_corta')->nullable();
            $table->text('descripcion')->nullable();
            $table->string('destacaado')->nullable();
            $table->string('imagen')->nullable();
            $table->string('nombre')->nullable();
            $table->string('precio_normal')->nullable();
            $table->string('sku')->nullable();
            $table->string('tipo')->nullable();
            $table->foreignId('proveedor_id')->nullable()->constrained('proveedores');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
}
