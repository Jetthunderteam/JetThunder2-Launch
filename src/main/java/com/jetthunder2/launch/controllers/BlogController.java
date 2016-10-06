package com.jetthunder2.launch.controllers;

import com.jetthunder2.launch.repository.BlogRepository;
import com.jetthunder2.launch.representation.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class BlogController {
    @Autowired
    private BlogRepository repo;

    @RequestMapping(method = RequestMethod.GET)
    public List<Blog> findPosts() {
        return repo.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Blog addPost(@RequestBody Blog post) {
        post.setId(null);
        return repo.save(post);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Blog updatePost(@RequestBody Blog updatedPost, @PathVariable String id) {
        updatedPost.setId(id);
        return repo.save(updatedPost);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deletePost(@PathVariable Integer id) {
        repo.delete(id);
    }
}
