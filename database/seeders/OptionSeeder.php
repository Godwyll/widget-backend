<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Option;

class OptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $options = [
            // Have you ever experienced a cyber attack?
            ['user_id' => 1, 'question_id' => 1, 'label' => 'Yes'],
            ['user_id' => 1, 'question_id' => 1, 'label' => 'No'],

            // Do you save your passwords on your web browser?
            ['user_id' => 1, 'question_id' => 2, 'label' => 'Yes'],
            ['user_id' => 1, 'question_id' => 2, 'label' => 'No'],

            // What do you do when you receive an email with a link or document?
            ['user_id' => 1, 'question_id' => 4, 'label' => 'I open the link to find out'],
            ['user_id' => 1, 'question_id' => 4, 'label' => 'If it is not an expected e-mail, I won\'t click it'],

            // What would be your first approach if you sense a security breach?
            ['user_id' => 1, 'question_id' => 5, 'label' => 'Inform IT security'],
            ['user_id' => 1, 'question_id' => 5, 'label' => 'Attempt to solve the issue by myself'],
            ['user_id' => 1, 'question_id' => 5, 'label' => 'Nothing'],


            // Who is responsible for installing and maintaining security software on your computer?
            ['user_id' => 1, 'question_id' => 6, 'label' => 'Employees'],
            ['user_id' => 1, 'question_id' => 6, 'label' => 'Administrator'],
            ['user_id' => 1, 'question_id' => 6, 'label' => 'IT Person'],

            // How often do you use Windows Update?
            ['user_id' => 1, 'question_id' => 7, 'label' => 'I don’t know what Windows Update is'],
            ['user_id' => 1, 'question_id' => 7, 'label' => 'Occasionally, when I remember'],
            ['user_id' => 1, 'question_id' => 7, 'label' => 'It is set to update automatically'],
            ['user_id' => 1, 'question_id' => 7, 'label' => 'At least once a week'],

            // Do you have anti-virus software installed on your computer?
            ['user_id' => 1, 'question_id' => 8, 'label' => 'Yes'],
            ['user_id' => 1, 'question_id' => 8, 'label' => 'No'],
            ['user_id' => 1, 'question_id' => 8, 'label' => 'Don\'t know'],

            // Do you use firewall software on your computer?
            ['user_id' => 1, 'question_id' => 10, 'label' => 'Yes'],
            ['user_id' => 1, 'question_id' => 10, 'label' => 'No'],
            ['user_id' => 1, 'question_id' => 10, 'label' => 'Don\'t know'],
        ];

        foreach ($options as $option) {
            Option::create($option);
        }
    }
}
