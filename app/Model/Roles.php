<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use App\User;

class Roles extends Model
{

    use HasApiTokens;
    protected $guarded = [];

    public function belongToUser()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
    public function hasManyUser()
    {
        return $this->hasMany(User::class,  'id_rol');
    }
}
