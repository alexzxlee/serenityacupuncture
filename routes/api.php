<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

/*
    JSON, RESTful APIs, CORS, OAuth, token, /api, backend, mobile, stateless, non-CSRF
    
  - This file is used for defining routes that are intended to be accessed by API clients.
  - Routes defined in api.php are typically used for building APIs or providing a backend for mobile applications or other clients that communicate with your application through an API.
  - These routes often return JSON responses, handle authentication using tokens or OAuth, and provide RESTful endpoints for data retrieval, creation, updating, and deletion.
  - Middleware for handling API-related features, such as API throttling, CORS (Cross-Origin Resource Sharing), and token authentication, is automatically applied to routes defined in api.php.
  - Laravel automatically applies a prefix, typically /api, to routes defined in the api.php file. 
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
