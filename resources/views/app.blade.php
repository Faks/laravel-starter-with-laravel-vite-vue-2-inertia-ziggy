<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel With Inertia.js and Vite</title>
    @routes
    @client
    @vite('main')
</head>
<body class="antialiased">
@inertia
</body>
</html>
