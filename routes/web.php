<?php

Auth::routes(['verify' => true]);

Route::get('/', function () {
    return view('layouts.vue');
});

Route::get('/{any}', function () {
    return view('layouts.vue');
})->where('any', '[\/\w\.-]*');

Route::group(['prefix' => 'admin',  'middleware' => 'auth'], function () {
    Voyager::routes();
});
