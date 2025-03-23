<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BlockController;
use App\Http\Controllers\Api\ConfigController;
use App\Http\Controllers\Api\MemberController;
use App\Http\Controllers\Api\DiagnosticController;

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

// Diagnostic routes to help with troubleshooting
Route::get('ping', [DiagnosticController::class, 'ping']);
Route::get('routes', [DiagnosticController::class, 'routes']);

// Public API routes - no authentication required
Route::prefix('v1')->group(function () {
    // Authentication routes
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);

    // Posts
    Route::get('posts', [PostController::class, 'index']);
    Route::get('posts/{slug}', [PostController::class, 'show']);
    Route::get('posts/category/{slug}', [PostController::class, 'getByCategory']);
    
    // Categories
    Route::get('categories', [CategoryController::class, 'index']);
    Route::get('categories/{slug}', [CategoryController::class, 'show']);
    
    // Blocks
    Route::get('blocks', [BlockController::class, 'index']);
    Route::get('blocks/{slug}', [BlockController::class, 'show']);
    Route::get('blocks/location/{location}', [BlockController::class, 'getByLocation']);
    
    // Configs
    Route::get('configs', [ConfigController::class, 'index']);
    Route::get('configs/{name}', [ConfigController::class, 'show']);
    
    // Members
    Route::get('members', [MemberController::class, 'index']);
    Route::get('members/{id}', [MemberController::class, 'show']);
});

// Protected API routes - require authentication
Route::prefix('v1')->middleware('auth:sanctum')->group(function () {
    // User info
    Route::get('user', function (Request $request) {
        return $request->user();
    });
    Route::post('logout', [AuthController::class, 'logout']);
    
    // Posts management
    Route::post('posts', [PostController::class, 'store']);
    Route::put('posts/{id}', [PostController::class, 'update']);
    Route::delete('posts/{id}', [PostController::class, 'destroy']);
    
    // Categories management
    Route::post('categories', [CategoryController::class, 'store']);
    Route::put('categories/{id}', [CategoryController::class, 'update']);
    Route::delete('categories/{id}', [CategoryController::class, 'destroy']);
    
    // Blocks management
    Route::post('blocks', [BlockController::class, 'store']);
    Route::put('blocks/{id}', [BlockController::class, 'update']);
    Route::delete('blocks/{id}', [BlockController::class, 'destroy']);
    Route::post('blocks/{blockId}/items', [BlockController::class, 'storeItem']);
    Route::put('blocks/items/{itemId}', [BlockController::class, 'updateItem']);
    Route::delete('blocks/items/{itemId}', [BlockController::class, 'destroyItem']);
});

// Admin-only routes
Route::prefix('v1/admin')->middleware(['auth:sanctum', 'role:admin'])->group(function () {
    // Config management
    Route::post('configs', [ConfigController::class, 'store']);
    Route::put('configs/{id}', [ConfigController::class, 'update']);
    Route::delete('configs/{id}', [ConfigController::class, 'destroy']);
    
    // Members management
    Route::post('members', [MemberController::class, 'store']);
    Route::put('members/{id}', [MemberController::class, 'update']);
    Route::delete('members/{id}', [MemberController::class, 'destroy']);
});
