<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Producto_factura extends Model
{
    protected $guarded  = [];

    public function belongsToManyFacturas()
    {
        return $this->belongsToMany(SolicitudDePedido::class, 'solicitud_de_pedido_id');
    }
    public function belongsToProducto()
    {
        return $this->belongsTo(Productos::class, 'producto_id');
    }
}
