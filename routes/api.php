<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// proveedores
Route::get('/get-proveedores', 'ProveedorController@index')->name('get.proveedores');
Route::get('/get-proveedor/{id}', 'ProveedorController@indexProducto')->name('get.proveedor');
Route::post('/add-proveedor', 'ProveedorController@store')->name('add.proveedor');
Route::put('/update-proveedor/{id}', 'ProveedorController@update')->name('update.proveedor');
Route::delete('/delete-proveedor/{id}', 'ProveedorController@destroy')->name('delete.proveedor');

// producto
Route::get('/get-productos', 'ProductoController@index')->name('get.productos');
Route::get('/get-producto/{id}', 'ProductoController@indexProducto')->name('get.producto');
Route::get('/get-producto-by-search/{palabraClave}', 'ProductoController@indexProductosBySearch')->name('search.productos');
Route::post('/add-producto-masivamente', 'ProductoController@storeMasivo')->name('add.producto.masivo');
Route::post('/add-producto', 'ProductoController@store')->name('add.producto');
Route::put('/update-producto/{id}', 'ProductoController@update')->name('update.producto');
Route::delete('/delete-producto/{id}', 'ProductoController@destroy')->name('delete.producto');