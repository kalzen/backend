<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Settings\PasswordController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth'])->group(function () {
    Route::redirect('settings', 'settings/profile');

    Route::get('/settings/profile', function () {
        return Inertia::render('settings/profile', [
            'mustVerifyEmail' => config('auth.verify_emails', false) && auth()->user() instanceof \Illuminate\Contracts\Auth\MustVerifyEmail,
            'status' => session('status'),
        ]);
    })->name('profile.edit');

    // Chỉnh sửa route patch thành post cho việc upload ảnh
    Route::post('/settings/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/settings/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('settings/password', [PasswordController::class, 'edit'])->name('password.edit');
    Route::put('settings/password', [PasswordController::class, 'update'])->name('password.update');

    Route::get('settings/appearance', function () {
        return Inertia::render('settings/appearance');
    })->name('appearance');
});
