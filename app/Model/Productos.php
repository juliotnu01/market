<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Productos extends Model
{
    protected $guarded = [];

    public function belongsToProveedor()
    {
        return $this->belongsTo(Proveedores::class, 'proveedor_id');
    }
}
