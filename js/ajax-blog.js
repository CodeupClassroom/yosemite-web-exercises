"use strict";
$(function() {


    var listPosts = function() {
        $.get("data/blog.json").done(function (data) {

            $("#posts").html("");
            data.forEach(function(post){
                var entry = "";
                entry += "<h3 class='title'>" + post.title + "</h3>"
                entry += "<h6 class='postDate'>" + post.date + "</h6>"
                entry += "<p class='content'>" + post.content + "</p>"

                $("#posts").append(entry);
            });

        });
    }

    // TODO: Create an ajax GET request for data/inventory.json

    listPosts();

    $("#refresh").click(function() {
        listPosts();
    })

    // {
    //     "title": "My First Blog Post",
    //     "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     "categories": [
    //     "greek"
    // ],
    //     "date": "January 25, 2015"
    // }, {


})
