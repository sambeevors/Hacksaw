@extends('_layouts.master')

@section('content')

<main class="bg-blue-100 min-h-screen flex justify-center flex-col items-center">
    <h1 class="font-light text-6xl text-blue-900 leading-none"><span class="font-medium">Hack</span><span class="italic">saw</span></h1>
    <p class="text-blue-800 mt-2">Thank <em>f#&k</em> for the JAMstack</p>
    <ul class="flex flex-wrap justify-center items-center -mx-2 mt-6">
        @include('_partials.logo', [
            'src' => '/assets/img/svg/tailwind.svg',
            'href' => 'https://tailwindcss.com/docs/installation/',
            'alt' => 'Tailwind',
            'width' => 150
        ])
        @include('_partials.logo', [
            'src' => '/assets/img/svg/jigsaw.svg',
            'href' => 'https://jigsaw.tighten.co/docs/installation/',
            'alt' => 'Jigsaw',
            'width' => 40
        ])
        @include('_partials.logo', [
            'src' => '/assets/img/svg/babel.svg',
            'href' => 'https://babeljs.io/docs/en/',
            'alt' => 'Babel',
            'width' => 100
        ])
    </ul>
</main>

@endsection
