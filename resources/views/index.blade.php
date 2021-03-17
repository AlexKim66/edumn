<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{!! csrf_token() !!}">
    <title>Example Laravel App</title>
    <link rel="stylesheet" href="{{ asset('assets/web/css/animate.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/web/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/web/css/boxicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/web/css/flaticon.css') }}">
    <link rel="stylesheet" href="{{ mix('assets/web/css/app.css') }}">
</head>
<body>

<div id="app"></div>

<script src="{{ mix('assets/web/js/manifest.js') }}"></script>
<script src="{{ mix('assets/web/js/vendor.js') }}"></script>
<script src="{{ mix('assets/web/js/app.js') }}"></script>
</body>
</html>
