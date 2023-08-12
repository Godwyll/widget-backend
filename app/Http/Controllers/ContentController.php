<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\View\View;
use App\Http\Requests\ContentRequest;
use App\Models\Content;

class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        $contents = Content::with(['user'])->get();;
        return view('contents.index', compact('contents'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        return view('contents.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ContentRequest $request): RedirectResponse
    {
        try {
            Content::create($request->validated());
            session()->flash('success', 'Content created successfully.');
        } catch (\Throwable $th) {
            session()->flash('error', 'Sorry, something went wrong.');
        }
        return redirect()->route('contents.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Content $content): View
    {
        return view('contents.show', compact('content'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Content $content): View
    {
        return view('contents.edit', compact(['content']));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ContentRequest $request, Content $content): RedirectResponse
    {
        try {
            $content->update($request->validated());
            session()->flash('success', 'Content updated successfully.');
        } catch (\Throwable $th) {
            session()->flash('error', 'Sorry, something went wrong.');
        }
        return redirect()->route('contents.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContentRequest $request, Content $content): RedirectResponse
    {
        try {
            $content->delete($request->validated());
            session()->flash('success', 'Content deleted successfully.');
        } catch (\Throwable $th) {
            session()->flash('error', 'Sorry, something went wrong.');
        }
        return redirect()->route('contents.index');
    }

}
