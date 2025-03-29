<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\BlockController;
use App\Http\Controllers\Api\SliderController;
use App\Http\Controllers\Api\ConfigController;
use App\Http\Controllers\Api\ImageUploadController;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Public API endpoints
Route::prefix('v1')->group(function () {
    // Posts
    Route::get('posts', [PostController::class, 'index']);
    Route::get('posts/latest', [PostController::class, 'latest']);
    Route::get('posts/popular', [PostController::class, 'popular']);
    Route::get('posts/{slug}', [PostController::class, 'show']);
    Route::get('posts/{slug}/related', [PostController::class, 'related']);
    
    // Categories
    Route::get('categories', [CategoryController::class, 'index']);
    Route::get('categories/{slug}', [CategoryController::class, 'show']);
    
    // Blocks
    Route::get('blocks', [BlockController::class, 'getByLocation']);
    Route::get('blocks/{slug}', [BlockController::class, 'getBySlug']);
    
    // Sliders
    Route::get('sliders', [SliderController::class, 'index']);
    Route::get('sliders/{slug}', [SliderController::class, 'getBySlug']);
    
    // Config
    Route::get('config', [ConfigController::class, 'index']);
    Route::get('site-settings', [ConfigController::class, 'siteSettings']);
});

// Update the image upload route with the correct name
Route::post('/upload-image', [ImageUploadController::class, 'upload'])->name('api.upload-image');

// Protected API endpoints (requires authentication)
Route::prefix('v1')->middleware('auth:sanctum')->group(function () {
    // Protected endpoints will go here
});
