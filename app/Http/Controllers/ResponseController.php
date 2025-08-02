<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Http\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\View\View;
use App\Http\Requests\ResponseRequest;
use App\Models\Response;

class ResponseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        $responses = Response::with(['question', 'session', 'option'])->get();
        return view('responses.index', compact('responses'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        return view('responses.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ResponseRequest $request): RedirectResponse
    {
        try {
            Response::create($request->validated());
            session()->flash('success', 'Response created successfully.');
        } catch (\Throwable $th) {
            session()->flash('error', 'Sorry, something went wrong.');
        }
        return redirect()->route('responses.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Response $response): View
    {
        return view('responses.show', compact('response'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Response $response): View
    {
        return view('responses.edit', compact(['response']));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ResponseRequest $request, Response $response): RedirectResponse
    {
        try {
            $response->update($request->validated());
            session()->flash('success', 'Response updated successfully.');
        } catch (\Throwable $th) {
            session()->flash('error', 'Sorry, something went wrong.');
        }
        return redirect()->route('responses.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ResponseRequest $request, Response $response): RedirectResponse
    {
        try {
            $response->delete($request->validated());
            session()->flash('success', 'Response deleted successfully.');
        } catch (\Throwable $th) {
            session()->flash('error', 'Sorry, something went wrong.');
        }
        return redirect()->route('responses.index');
    }

}
