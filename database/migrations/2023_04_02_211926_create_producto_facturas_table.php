<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductoFacturasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('producto_facturas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('producto_id')->nullable()->constrained('productos');
            $table->bigInteger('amount')->nullable();
            $table->bigInteger('discount')->nullable();
            $table->bigInteger('price')->nullable();
            $table->bigInteger('qty')->nullable();
            $table->foreignId('solicitud_de_pedido_id')->nullable()->constrained('solicitud_de_pedidos');
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
        Schema::dropIfExists('producto_facturas');
    }
}
