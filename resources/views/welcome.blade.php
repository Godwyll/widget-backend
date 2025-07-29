@extends('layouts.site')

@push('styles')
<link href="{{ asset('assets/css/themes/layout/brand/dark.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ asset('assets/css/themes/layout/aside/dark.css') }}" rel="stylesheet" type="text/css" />
@endpush

@section('title', 'Home')

@section('content')
<!--begin::Login-->
<div class="login login-3 login-signin-on d-flex flex-row-fluid" id="kt_login">
	<div class="d-flex flex-center bgi-size-cover bgi-no-repeat flex-row-fluid" style="background-image: url(assets/media/bg/bg-1.jpg);">
		<div class="login-form text-center text-white p-7 position-relative overflow-hidden">
			<!--begin::Login Header-->
			<div class="d-flex flex-center mb-15">
				{{-- <a href="#">
					<img src="assets/media/logos/logo-letter-9.png" class="max-h-100px" alt="" />
				</a> --}}
				<a href="{{ route('home') }}" class="brand-logo">
					<img alt="Logo" src="{{ asset('assets/media/logos/bmga-logo.png') }}" />
				</a>

			</div>
			<!--end::Login Header-->
			<!--begin::Login Sign in form-->
			<div class="login-signin">
				<div class="mb-20">
					<h2>{{ config('app.name') }}</h2>
					<h5 class="opacity-60 font-weight-bold">Dashboard</h5>
				</div>
				<div class="form-group text-center mt-10">
					<a href="{{ route('login') }}" class="btn btn-pill btn-outline-white font-weight-bold opacity-90 px-15 py-3">Get Started</a>
				</div>
			</div>
			<!--end::Login Sign in form-->
		</div>
	</div>
</div>
<!--end::Login-->
@endsection
