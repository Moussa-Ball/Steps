<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        .card {
            background-color: #fff;
            -webkit-box-shadow: 0 1px 5px rgba(55,72,74,.33);
                    box-shadow: 0 1px 5px rgba(55,72,74,.33);
            border-radius: 0;
        }

        .card .card-header {
            background-color: #F8F8F8;
            border-bottom: 1px solid #E0E0E0;
            line-height: 26px;
            font-size: 22px;
            font-weight: 400;
            padding: 28px;
        }

        .btn {
            padding: 11px 28px;
                font-size: 14px;
                line-height: 14px;
                border-radius: 0;
                -webkit-user-select: none;
                -moz-user-select: none;
                    -ms-user-select: none;
                        user-select: none;
                display: inline-block;
                border: 2px solid transparent;
                -webkit-font-smoothing: antialiased;
                margin: 0 20px 30px 0;
                font-weight: 500;
                text-align: center;
                vertical-align: middle;
                cursor: pointer;
                white-space: nowrap;
                background-image: none;
                -webkit-transition: all .14s;
                transition: all .14s;
                -webkit-box-shadow: 0 1px 6px rgba(55,72,77,.38) !important;
                        box-shadow: 0 1px 6px rgba(55,72,77,.38) !important;
            }

            .btn:focus {
                -webkit-box-shadow: 0 1px 6px rgba(55,72,77,.38) !important;
                        box-shadow: 0 1px 6px rgba(55,72,77,.38) !important;
            }
    </style>
</head>
<body>
    <div id="app">
        <nav class="navbar main border-bottom navbar-custom-style fixed-top navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="/images/Logo.png" alt="logo" />
                </a>
                <button class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a href="/website" class="nav-link">Website</a>
                    </li>
                    <li class="nav-item">
                        <a href="/logo" class="nav-link">Logo</a>
                    </li>
                    <li class="nav-item">
                        <a href="/name" class="nav-link">Name</a>
                    </li>
                    </ul>
                    <ul class="navbar-nav">
                    <li class="nav-item {{ Request::is('login') ? 'active' : '' }}">
                        <a href="/login" id="login" class="nav-link">Login</a>
                    </li>
                    <li class="nav-item {{ Request::is('register') ? 'active' : '' }}">
                        <a href="/register" id="register" class="nav-link">Register</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main class="py-4">
            <div class="mt-4 mb-5">
                @yield('content')
            </div>
        </main>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 mb-5">
                    <div class="ft-logo">
                        <img src="/images/Logo.png" alt="logo" />
                        <div class="footer-copyright">© 2019</div>
                    </div>
                    </div>
                    <div class="col-md-2">
                    <div class="footer-widget">
                        <div class="footer-title">Customers</div>
                        <ul class="list-unstyled">
                        <li>
                            <a href="#">Domains</a>
                        </li>
                        <li>
                            <a href="#">Website</a>
                        </li>
                        <li>
                            <a href="#">Logos</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div class="col-md-3">
                    <div class="footer-widget">
                        <div class="footer-title">Further Information</div>
                        <ul class="list-unstyled">
                        <li>
                            <a href="/privacy">Privacy</a>
                        </li>
                        <li>
                            <a href="/terms">Terms</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div class="col-md-2">
                    <div class="footer-widget">
                        <div class="footer-title">Follow us</div>
                        <ul class="list-unstyled d-flex">
                        <li>
                            <a href="#">
                            <img class="social-img" src="/images/twitter.png" alt="twitter" />
                            </a>
                        </li>
                        <li style="margin-left: 20px;">
                            <a href="#">
                            <img class="social-img" src="/images/facebook.png" alt="facebook" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
