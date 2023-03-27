<?php

namespace App\Http\Controllers;

use App\Model\Proveedores;
use Illuminate\Http\Request;
use DB;

class ProveedorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $proveedores = Proveedores::with('cantidadDeProductos')->get();
            return response()->json($proveedores);

        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function indexProducto($id)
    {
        try {
            $proveedor = Proveedores::where('id', $id)->first();
            return response()->json($proveedor);

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
            return DB::transaction(function() use ($request){
                $proveedor = new Proveedores();
                $proveedor->razon_social = $request['razon_social'];
                $proveedor->nombre_comercial = $request['nombre_comercial'];
                $proveedor->nit = $request['nit'];
                $proveedor->state = $request['state'];
                $proveedor->save();

                return response(["mensaje"=>"Proveedor guardado con exito", "data" => $proveedor], 200);

            },5);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Proveedores  $proveedores
     * @return \Illuminate\Http\Response
     */
    public function show(Proveedores $proveedores)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Proveedores  $proveedores
     * @return \Illuminate\Http\Response
     */
    public function edit(Proveedores $proveedores)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Proveedores  $proveedores
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Proveedores $proveedor, $id)
    {
        try {
            return DB::transaction(function() use ($request, $proveedor, $id){
                $proveedor->find($id)->update([
                    'razon_social' => $request['razon_social'],
                    'nombre_comercial' => $request['nombre_comercial'],
                    'nit' => $request['nit'],
                    'state' => $request['state'],
                ]);

                return response(["mensaje"=>"Proveedor actualizado con exito", "data" => $proveedor], 200);

            },5);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Proveedores  $proveedores
     * @return \Illuminate\Http\Response
     */
    public function destroy(Proveedores $proveedor, $id)
    {
        try {
            $proveedor->find($id)->delete();
            return response(["mensaje"=>"Proveedor eliminado con exito"], 200);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
