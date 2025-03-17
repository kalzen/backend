<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use App\Http\Resources\PostResource;
use App\Http\Resources\PostCollection;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PostController extends ApiController
{
    /**
     * Display a listing of posts.
     * 
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $query = Post::with('categories')->where('is_published', true);
        
        // Filter by category
        if ($request->has('category')) {
            $query->whereHas('categories', function($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }
        
        // Search by title or content
        if ($request->has('search')) {
            $searchTerm = $request->search;
            $query->where(function($q) use ($searchTerm) {
                $q->where('title', 'like', "%{$searchTerm}%")
                  ->orWhere('content', 'like', "%{$searchTerm}%");
            });
        }
        
        // Sort posts
        $sortField = $request->input('sort_by', 'published_at');
        $sortDirection = $request->input('sort_direction', 'desc');
        $allowedSortFields = ['published_at', 'title', 'views'];
        
        if (in_array($sortField, $allowedSortFields)) {
            $query->orderBy($sortField, $sortDirection);
        } else {
            $query->orderBy('published_at', 'desc');
        }
        
        $perPage = $request->input('per_page', 10);
        $posts = $query->paginate($perPage);
        
        return $this->sendResponse(new PostCollection($posts));
    }
    
    /**
     * Display the specified post.
     * 
     * @param string $slug
     * @return JsonResponse
     */
    public function show(string $slug): JsonResponse
    {
        $post = Post::with('categories')
            ->where('slug', $slug)
            ->where('is_published', true)
            ->first();
            
        if (!$post) {
            return $this->sendError('Post not found', [], 404);
        }
        
        // Increment view count
        $post->incrementViews();
        
        return $this->sendResponse(new PostResource($post));
    }
    
    /**
     * Display the latest posts.
     * 
     * @param Request $request
     * @return JsonResponse
     */
    public function latest(Request $request): JsonResponse
    {
        $limit = $request->input('limit', 5);
        $posts = Post::where('is_published', true)
            ->orderBy('published_at', 'desc')
            ->limit($limit)
            ->get();
            
        return $this->sendResponse(PostResource::collection($posts));
    }
    
    /**
     * Display popular posts based on view count.
     * 
     * @param Request $request
     * @return JsonResponse
     */
    public function popular(Request $request): JsonResponse
    {
        $limit = $request->input('limit', 5);
        $posts = Post::mostViewed($limit)->get();
            
        return $this->sendResponse(PostResource::collection($posts));
    }
    
    /**
     * Display related posts.
     * 
     * @param string $slug
     * @param Request $request
     * @return JsonResponse
     */
    public function related(string $slug, Request $request): JsonResponse
    {
        $post = Post::where('slug', $slug)->first();
        
        if (!$post) {
            return $this->sendError('Post not found', [], 404);
        }
        
        $limit = $request->input('limit', 3);
        
        // Get category IDs of the current post
        $categoryIds = $post->categories->pluck('id')->toArray();
        
        // Find posts in the same categories
        $relatedPosts = Post::where('id', '!=', $post->id)
            ->where('is_published', true)
            ->whereHas('categories', function($query) use ($categoryIds) {
                $query->whereIn('categories.id', $categoryIds);
            })
            ->orderBy('published_at', 'desc')
            ->limit($limit)
            ->get();
            
        return $this->sendResponse(PostResource::collection($relatedPosts));
    }
}
