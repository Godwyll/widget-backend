<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ResponseController;
use App\Http\Controllers\SessionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Home route
Route::get('/', fn () =>
    Inertia::render('Welcome', [
        'canLogin'      => Route::has('login'),
        'canRegister'   => Route::has('register'),
        'laravelVersion'=> Application::VERSION,
        'phpVersion'    => PHP_VERSION,
    ])
);

// Dashboard route
Route::get('dashboard', fn () =>
    Inertia::render('Dashboard')
)->name('dashboard');

// Authenticated and verified routes
Route::middleware(['auth', 'verified'])->group(function () {
    // Profile routes
    Route::controller(ProfileController::class)->group(function () {
        Route::get('profile', 'edit')->name('profile.edit');
        Route::patch('profile', 'update')->name('profile.update');
        Route::delete('profile', 'destroy')->name('profile.destroy');
    });

    // User management routes
    Route::resource('users', UserController::class);
    Route::resource('contents', ContentController::class);
    Route::resource('responses', ResponseController::class)->only(['index', 'destroy']);
    Route::delete('sessions/{session}', [SessionController::class, 'destroy'])->name('sessions.destroy');
});

require __DIR__.'/auth.php';
