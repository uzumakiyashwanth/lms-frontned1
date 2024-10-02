import React from "react";
import './BlogResources.css';
import MainNavbar from "../components/MainNavbar";

const BlogResources = () => {
    return (
        <div>
<MainNavbar/>
       
        <div className="blog-resources">
            <h1>Blog and Resources</h1>
            <p>Welcome to our Blog and Resources section! Here, you will find articles, tutorials, and other helpful materials to enhance your learning experience.</p>
            <h2>Recent Articles</h2>
            <ul>
                <li><a href="#">10 Tips for Effective Online Learning</a></li>
                <li><a href="#">How to Stay Motivated While Studying Online</a></li>
                <li><a href="#">Understanding the Role of Instructors in Online Education</a></li>
            </ul>
            <h2>Resources</h2>
            <ul>
                <li><a href="#">Recommended Books on E-Learning</a></li>
                <li><a href="#">Free Online Courses</a></li>
                <li><a href="#">Useful Educational Tools and Apps</a></li>
            </ul>
        </div>
        </div>
    );
};

export default BlogResources;
