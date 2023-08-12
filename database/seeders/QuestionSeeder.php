<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Question;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $questions = [
            ['user_id' => 1, 'content_id' => 7, 'body' => 'Have you ever experienced a cyber attack?', 'answer_type' => 'option', 'sort_order' => 1],
            ['user_id' => 1, 'content_id' => 7, 'body' => 'Do you save your passwords on your web browser?', 'answer_type' => 'option', 'sort_order' => 2],
            ['user_id' => 1, 'content_id' => 7, 'body' => 'Are you familiar with the authenticators and 2-step verifications? If so, do you use them?', 'answer_type' => 'text', 'sort_order' => 3],
            ['user_id' => 1, 'content_id' => 7, 'body' => 'What do you do when you receive an email with a link or document?', 'answer_type' => 'option', 'sort_order' => 4],
            ['user_id' => 1, 'content_id' => 7, 'body' => 'What would be your first approach if you sense a security breach?', 'answer_type' => 'option', 'sort_order' => 5],

            ['user_id' => 1, 'content_id' => 8, 'body' => 'Who is responsible for installing and maintaining security software on your computer?', 'answer_type' => 'option', 'sort_order' => 1],
            ['user_id' => 1, 'content_id' => 8, 'body' => 'How often do you use Windows Update?', 'answer_type' => 'option', 'sort_order' => 2],
            ['user_id' => 1, 'content_id' => 8, 'body' => 'Do you have anti-virus software installed on your computer?', 'answer_type' => 'option', 'sort_order' => 3],
            ['user_id' => 1, 'content_id' => 8, 'body' => 'Which version of Windows or any other OS is installed on the computer?', 'answer_type' => 'text', 'sort_order' => 4],
            ['user_id' => 1, 'content_id' => 8, 'body' => 'Do you use firewall software on your computer?', 'answer_type' => 'option', 'sort_order' => 5],
        ];

        foreach ($questions as $question) {
            Question::create($question);
        }
    }
}
