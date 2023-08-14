<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    ContentController, QuestionController, SessionController,
    OptionController, AnswerController
};

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::middleware('auth')->group(function () {

    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

    Route::resources([
        'contents' => ContentController::class,
        'questions' => QuestionController::class,
        'sessions' => SessionController::class,
        'options' => OptionController::class,
        'answers' => AnswerController::class,
    ]);

});
