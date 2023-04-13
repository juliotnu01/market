<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSolicitudDePedidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // factura: {
        //     items: [],
        //     total_factura: 0,
        //     iva: '',
        //     descuento: '',
        //     comentario: '',
        //     codigo_promocional: '', // TODO
        //     direccion:{
        //         pais: '',
        //         estado:'',
        //         zip: '',
        //         direccion_1: '',
        //         direccion_2: '',
        //     },
        //     detalle_fatura: {
        //         nombre_completo: '',
        //         correo: '',
        //         telefono: '',
        //     }
        Schema::create('solicitud_de_pedidos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('proveedor_id')->nullable()->constrained('proveedores');
            $table->bigInteger('total_factura')->nullable();
            $table->bigInteger('descuento')->nullable();
            $table->text('comentario')->nullable();
            $table->string('pais')->nullable();
            $table->string('estado')->nullable();
            $table->string('zip')->nullable();
            $table->string('direccion1')->nullable();
            $table->string('direccion2')->nullable();
            $table->string('nombre')->nullable();
            $table->string('correo')->nullable();
            $table->string('telefono')->nullable();
            // $table->text('codigo_promocional')->nullable();
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
        Schema::dropIfExists('solicitud_de_pedidos');
    }
}
