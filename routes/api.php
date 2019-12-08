<?php

use Illuminate\Http\Request;

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
Route::post('/vue','TestVueController@index');
Route::get('/affich','Controller@getetud');
Route::get('/abs','Controller@getabs');
Route::get('/affichgroupe/{id_groupe}','Controller@listeetud');
Route::get('/nom','Controller@getnom');
Route::get('/groupes','Controller@getgroupes');
Route::get('/nomprof','Controller@getnomprof');

