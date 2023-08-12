<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\View\View;
use App\Http\Requests\AnswerRequest;
use App\Models\Answer;

class AnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        $answers = Answer::with(['question', 'session', 'option'])->get();
        return view('answers.index', compact('answers'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        return view('answers.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AnswerRequest $request): RedirectResponse
    {
        try {
            Answer::create($request->validated());
            session()->flash('success', 'Answer created successfully.');
        } catch (\Throwable $th) {
            session()->flash('error', 'Sorry, something went wrong.');
        }
        return redirect()->route('answers.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Answer $answer): View
    {
        return view('answers.show', compact('answer'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Answer $answer): View
    {
        return view('answers.edit', compact(['answer']));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AnswerRequest $request, Answer $answer): RedirectResponse
    {
        try {
            $answer->update($request->validated());
            session()->flash('success', 'Answer updated successfully.');
        } catch (\Throwable $th) {
            session()->flash('error', 'Sorry, something went wrong.');
        }
        return redirect()->route('answers.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AnswerRequest $request, Answer $answer): RedirectResponse
    {
        try {
            $answer->delete($request->validated());
            session()->flash('success', 'Answer deleted successfully.');
        } catch (\Throwable $th) {
            session()->flash('error', 'Sorry, something went wrong.');
        }
        return redirect()->route('answers.index');
    }

}
