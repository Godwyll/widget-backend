<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id', 'type', 'title', 'body', 'is_active'
    ];

    /**
     * Model Relationships.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

}
