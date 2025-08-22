<?php

namespace App\Http\Middleware;

use Illuminate\Http\Middleware\HandleCors as Middleware;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HandleCors extends Middleware
{
    protected $allowedOrigins = ['http://localhost:8000'];
    protected $allowedOriginsPatterns = [];
    protected $allowedMethods = ['*'];
    protected $allowedHeaders = ['*'];
    protected $exposedHeaders = [];
    protected $maxAge = 0;
    protected $supportsCredentials = true;
}