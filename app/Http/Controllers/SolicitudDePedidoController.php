<?php

namespace App\Http\Controllers;

use App\Model\{SolicitudDePedido, Producto_factura};
use Illuminate\Http\Request;
use DB;

class SolicitudDePedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $pedidos = SolicitudDePedido::with('hasManyitems.belongsToProducto.belongsToProveedor')->get();
            return response()->json($pedidos);
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
                
                $solicitudDePedido = new SolicitudDePedido();
                // $solicitudDePedido->proveedor_id = 1;
                $solicitudDePedido->total_factura = $request['total_factura'];
                $solicitudDePedido->descuento = $request['descuento'];
                $solicitudDePedido->comentario = $request['comentario'];
                $solicitudDePedido->pais = $request['direccion']['pais'];
                $solicitudDePedido->estado = $request['direccion']['estado'];
                $solicitudDePedido->zip = $request['direccion']['zip'];
                $solicitudDePedido->direccion1 = $request['direccion']['direccion_1'];
                $solicitudDePedido->direccion2 = $request['direccion']['direccion_2'];
                $solicitudDePedido->nombre = $request['detalle_fatura']['nombre_completo'];
                $solicitudDePedido->correo = $request['detalle_fatura']['correo'];
                $solicitudDePedido->telefono = $request['detalle_fatura']['telefono'];
                $solicitudDePedido->save();


                for ($i=0; $i < count($request['items']) ; $i++) { 
                    $element = $request['items'][$i];

                    $productoFactura = new Producto_factura();
                    $productoFactura->producto_id = $element['id'];
                    $productoFactura->amount = $element['amount'];
                    $productoFactura->discount = $element['descuento'];
                    $productoFactura->price = $element['price'];
                    $productoFactura->qty = $element['qty'];
                    $productoFactura->solicitud_de_pedido_id = $solicitudDePedido['id'];
                    $productoFactura->save();

                }
                
                return ['mensaje' => "orden realizada con exito"];

            }, 5);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\SolicitudDePedido  $solicitudDePedido
     * @return \Illuminate\Http\Response
     */
    public function show(SolicitudDePedido $solicitudDePedido)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\SolicitudDePedido  $solicitudDePedido
     * @return \Illuminate\Http\Response
     */
    public function edit(SolicitudDePedido $solicitudDePedido)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\SolicitudDePedido  $solicitudDePedido
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SolicitudDePedido $solicitudDePedido)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\SolicitudDePedido  $solicitudDePedido
     * @return \Illuminate\Http\Response
     */
    public function destroy(SolicitudDePedido $solicitudDePedido)
    {
        //
    }
}
