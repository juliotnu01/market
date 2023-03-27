<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Proveedores extends Model
{
    protected $guarded = [];

    public function cantidadDeProductos()
    {
        return $this->hasMany(Productos::class, 'proveedor_id');
    }
}
