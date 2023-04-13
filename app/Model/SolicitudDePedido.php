<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SolicitudDePedido extends Model
{
    protected $guarded = [];

    public function hasManyitems()
    {
        return $this->hasMany(Producto_factura::class, 'solicitud_de_pedido_id');
    }
    
}
