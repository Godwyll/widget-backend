@extends('layouts.app')

@push('nav') @include('layouts.nav') @endpush

@section('title', 'Dashboard')

@section('content')

<!--begin::Entry-->
<div class="d-flex flex-column-fluid">
    <!--begin::Container-->
    <div class="container">

        <!--begin::Row-->
        <div class="row">
            <div class="col-xl-12">
                <!--begin::Welcome Widget-->
                <div class="card card-custom card-stretch gutter-b">
                    <div class="card-body d-flex p-0">
                        <div class="flex-grow-1 p-12 card-rounded bgi-no-repeat d-flex flex-column justify-content-center align-items-start" style="background-position: right bottom; background-size: auto 100%; background-image: url({{ asset('assets/media/svg/patterns/taieri.svg')}})">
                            <h2 class="text-primary font-weight-bolder m-0">WELCOME!</h2>
                            <p class="text-dark-50 my-5 font-size-h6 font-weight-bold">
                                Welcome to Data Sharing Portal
                            </p>
                        </div>
                    </div>
                </div>
                <!--end::Welcome Widget-->
            </div>
        </div>
        <!--end::Row-->

    </div>
    <!-- end::Container -->
</div>
<!-- end::Entry -->

@endsection
