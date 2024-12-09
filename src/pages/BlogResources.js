import React, { useState } from "react";
import './BlogResources.css';
import MainNavbar from "../components/MainNavbar";

// Define the sample data within the component or import from another file
const articles = [
    { id: 1, title: "10 Tips for Effective Online Learning", link: "https://www.educations.com/study-guides/study-online", description: "Learn how to maximize your online learning experience with these 10 essential tips." },
    { id: 2, title: "How to Stay Motivated While Studying Online", link: "https://professionalprograms.pearson.com/blogs/5-tips-to-keep-motivated-when-learning-online.html", description: "Stay motivated and focused during your online learning journey." },
    { id: 3, title: "Understanding the Role of Instructors in Online Education", link: "https://www.ou.edu/digitallearning/resources/Webinars/role-of-the-instructor-online-learning", description: "Discover how instructors play a key role in the success of online education." }
];

const resources = [
    { id: 1, title: "Recommended Books on E-Learning", link: "https://www.ou.edu/digitallearning/resources/Webinars/role-of-the-instructor-online-learning", description: "Explore top books that will expand your understanding of online education." },
    { id: 2, title: "Free Online Courses", link: "https://www.ou.edu/digitallearning/resources/Webinars/role-of-the-instructor-online-learning", description: "Access high-quality free online courses to enhance your skills." },
    { id: 3, title: "Useful Educational Tools and Apps", link: "https://www.ou.edu/digitallearning/resources/Webinars/role-of-the-instructor-online-learning", description: "Discover apps and tools that can help streamline your learning process." }
];

const BlogResources = () => {
    const [search, setSearch] = useState('');

    const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(search.toLowerCase()));
    const filteredResources = resources.filter(resource => resource.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <MainNavbar />
            <div className="layout">
                <aside className="sidebar">
                    <h2>Categories</h2>
                    <ul>
                        <li>Articles</li>
                        <li>Resources</li>
                        <li>Blogs</li>
                    </ul>
                </aside>
                <main className="content">
                    <div className="header">
                        <h1>Discover Knowledge</h1>
                        <p>Your gateway to the latest articles and resources</p>
                    </div>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <section>
                        <h2>Articles</h2>
                        <div className="grid">
                            {filteredArticles.map(article => (
                                <div key={article.id} className="tile">
                                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                                        <h3>{article.title}</h3>
                                        <p>{article.description}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h2>Resources</h2>
                        <div className="grid">
                            {filteredResources.map(resource => (
                                <div key={resource.id} className="tile">
                                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                        <h3>{resource.title}</h3>
                                        <p>{resource.description}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default BlogResources;
