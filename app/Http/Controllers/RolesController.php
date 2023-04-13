<?php

namespace App\Http\Controllers;

use App\Model\Roles;
use App\User;
use Illuminate\Http\Request;
use DB;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $roles = Roles::with('hasManyUser')->get();
            return response()->json($roles);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function getRolId($id)
    {
        try {
            $roles = Roles::where('id', $id)->with('hasManyUser')->first();
            return response()->json($roles);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function getPermisosRol(Request $request)
    {
        try {
            $rules = [];
            $user = $request->user();
            $role = Roles::where('id_user', $user->id)->first();
            if ($role) {
                for ($i = 0; $i < count(json_decode($role->habilidades)); $i++) {
                    $element = json_decode($role->habilidades)[$i];
                    $rules['can'][str_replace(":", "_", $element)] = $user->TokenCan("$element");
                }
            } else {
                return null;
            }
            return response()->json($rules);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function deleteHabilidad(Request $request)
    {
        try {
            $rol = Roles::find($request->rol);
            $habilidades = json_decode($rol->habilidades);
            for ($i = 0; $i < count($habilidades); $i++) {
                $elemento = $habilidades[$i];
                if ($elemento != $request->habilidad)
                    $r[] = $elemento;
            }
            $rol->update([
                'habilidades' => json_encode($r)
            ]);
            DB::table('personal_access_tokens')
                ->where('tokenable_id', $rol->id)
                ->update(['abilities' => $r]);
            return response()->json($rol);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function updateRol(Request $request, $id)
    {
        try {
            return DB::transaction(function () use ($request, $id) {

                $rol = Roles::find($id);
                $rol->update([
                    'nombre' => $request->nombre,
                    'habilidades' => $request->habilidades,
                    'id_user' => $request->id_user
                ]);

                return response()->json($rol);
            }, 5);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            return DB::transaction(function () use ($request) {

                $habilidades = collect($request['habilidades'])->map( function($item, $i) {
                    $element = '';
                    $itemRol = json_decode(collect($item)->toJson());
                    if(isset($item['habilidad_ver']) && $item['habilidad_ver'] ){
                        $element = trim("view:$itemRol->seccion");
                    }
                    return $element;
                })->filter()->values();
                    $role = new Roles();
                    $role->nombre = $request->name_rol;
                    $role->habilidades = stripslashes(json_encode($habilidades));
                    $role->save();

                $role->update([
                    'token' => $role->createToken('role_token',$habilidades->toArray())->plainTextToken,
                ]);

                return response()->json($role);
            }, 5);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Roles  $roles
     * @return \Illuminate\Http\Response
     */
    public function show(Roles $roles)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Roles  $roles
     * @return \Illuminate\Http\Response
     */
    public function edit(Roles $roles)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Roles  $roles
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Roles $roles)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Roles  $roles
     * @return \Illuminate\Http\Response
     */
    public function destroy(Roles $roles)
    {
        //
    }
}
