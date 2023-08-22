<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Session;

class SessionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sessions = [
            ['ip_address' => '127.0.0.1'],
            ['ip_address' => '127.0.0.1'],
        ];

        foreach ($sessions as $session) {
            session::create($session);
        }

    }
}
