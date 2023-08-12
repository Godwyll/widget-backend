<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\View\View;
// use App\Http\Requests\SessionRequest;
use App\Models\Session;

class SessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        $sessions = Session::all();
        return view('sessions.index', compact('sessions'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        try {
            Session::create($request->validated());
            session()->flash('success', 'Session created successfully.');
        } catch (\Throwable $th) {
            session()->flash('error', 'Sorry, something went wrong.');
        }
        return redirect()->route('sessions.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Session $session): View
    {
        return view('sessions.show', compact('session'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Session $session): RedirectResponse
    {
        try {
            $session->delete($request->validated());
            session()->flash('success', 'Session deleted successfully.');
        } catch (\Throwable $th) {
            session()->flash('error', 'Sorry, something went wrong.');
        }
        return redirect()->route('sessions.index');
    }

}
