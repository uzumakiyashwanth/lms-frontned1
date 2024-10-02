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
                <li><a href="https://www.educations.com/study-guides/study-online">10 Tips for Effective Online Learning</a></li>
                <li><a href="https://professionalprograms.pearson.com/blogs/5-tips-to-keep-motivated-when-learning-online.html">How to Stay Motivated While Studying Online</a></li>
                <li><a href="https://www.ou.edu/digitallearning/resources/Webinars/role-of-the-instructor-online-learning">Understanding the Role of Instructors in Online Education</a></li>
            </ul>
            <h2>Resources</h2>
            <ul>
                <li><a href="https://www.ou.edu/digitallearning/resources/Webinars/role-of-the-instructor-online-learning">Recommended Books on E-Learning</a></li>
                <li><a href="https://www.ou.edu/digitallearning/resources/Webinars/role-of-the-instructor-online-learning">Free Online Courses</a></li>
                <li><a href="https://www.ou.edu/digitallearning/resources/Webinars/role-of-the-instructor-online-learning">Useful Educational Tools and Apps</a></li>
            </ul>
        </div>
        </div>
    );
};

export default BlogResources;
