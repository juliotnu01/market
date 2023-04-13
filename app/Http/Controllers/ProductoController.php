<?php

namespace App\Http\Controllers;

use App\Model\Productos;
use Illuminate\Http\Request;
use DB;
use Carbon\Carbon;
use Storage;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $productos = Productos::orderBy('id', 'desc')->take(10)->get();
            return response()->json($productos);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function indexProducto($id)
    {
        try {
            $producto = Productos::where('id', $id)->first();
            return response()->json($producto);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function indexProductosBySearch($palabraClave)
    {
        try {
            if($palabraClave == '' || $palabraClave == null ){
                $productos = Productos::all();
            }else{
                $productos = Productos::where('nombre',"LIKE","%$palabraClave%")->get();
            }
            return response()->json($productos);
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
    public function storeMasivo(Request $request)
    {
        try {
            return DB::transaction(function () use ($request) {
                foreach ($request['productos'] as $key => $element) {
                    $producto = new Productos();
                    $producto->create([
                        'categoria' => $element["categoria"],
                        'descripcion_corta' => $element["descripcion_corta"],
                        'descripcion' => $element["descripcion"],
                        'destacaado' => $element["destacado"],
                        'imagen' => $element['imagenes'],
                        'nombre' => $element["nombre"],
                        'precio_normal' => $element["precio_normal"],
                        'sku' => $element["sku"],
                        'tipo' => $element["tipo"],
                        'proveedor_id' => $request['proveedor']
                    ]);
                }
                return response(["mensaje" => "Productos guardados con exito"], 200);
            }, 5);
        } catch (\Throwable $th) {
            throw $th;
        }
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
                Storage::disk('public')->putFileAs(Carbon::now()->format('Y-m-d'), $request->file('imagen'), $request->file("imagen")->getClientOriginalName());
                $url = Storage::disk('public')->url(Carbon::now()->format('Y-m-d') . "/" . $request->file("imagen")->getClientOriginalName());
                $producto = new Productos();
                $producto->create([
                    'categoria' => $request["categoria"],
                    'descripcion_corta' => $request["descripcion_corta"],
                    'descripcion' => $request["descripcion"],
                    'destacaado' => $request["destacado"],
                    'imagen' => asset($url),
                    'nombre' => $request["nombre"],
                    'precio_normal' => $request["precio_normal"],
                    'sku' => $request["sku"],
                    'tipo' => $request["tipo"],
                    'proveedor_id' => $request['proveedor']
                ]);

                return response(["mensaje" => "Productos guardados con exito"], 200);
            }, 5);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Productos  $productos
     * @return \Illuminate\Http\Response
     */
    public function show(Productos $productos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Productos  $productos
     * @return \Illuminate\Http\Response
     */
    public function edit(Productos $productos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Productos  $productos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Productos $producto, $id)
    {
        try {

            return DB::transaction(function () use ($request, $producto, $id) {
                // Storage::disk('public')->putFileAs(Carbon::now()->format('Y-m-d'), $request->file('imagen'), $request->file("imagen")->getClientOriginalName());
                // $url = Storage::disk('public')->url(Carbon::now()->format('Y-m-d')."/".$request->file("imagen")->getClientOriginalName());

                $producto->find($id)->update([
                    'categoria' => $request["categoria"],
                    'descripcion_corta' => $request["descripcion_corta"],
                    'descripcion' => $request["descripcion"],
                    'destacaado' => $request["destacado"],
                    // 'imagen' => asset($url),
                    'nombre' => $request["nombre"],
                    'precio_normal' => $request["precio_normal"],
                    'sku' => $request["sku"],
                    'tipo' => $request["tipo"],
                ]);

                return response(["mensaje" => "Producto actualizado con exito"], 200);
            }, 5);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Productos  $productos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Productos $producto, $id)
    {
        try {
            $producto->find($id)->delete();
            return response(["mensaje" => "Producto eliminado con exito"], 200);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
