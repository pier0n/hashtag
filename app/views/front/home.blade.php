@extends('front.master')

@section('content')

{{ Form::open(array('url' => 'foo/bar')) }}
    <input type="text" name="query" id="">
    <input type="submit" value="Szukaj">
{{ Form::close() }}




@stop