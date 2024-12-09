import React from "react";
import MainNavbar from "../components/MainNavbar";
import './HomePage.css';
import image from '../images/image.png';

const HomePage = () => {
    const staticCourses = [
        {
            id: 1,
            title: 'Introduction to AI',
            description: 'Explore the basics of Artificial Intelligence and its real-world applications.',
            url: 'https://www.youtube.com/embed/2ePf9rue1Ao'
        },
        {
            id: 2,
            title: 'Mastering Python',
            description: 'Learn Python from beginner to advanced level with hands-on projects.',
            url: 'https://www.youtube.com/embed/rfscVS0vtbw'
        },
        {
            id: 3,
            title: 'Web Development Crash Course',
            description: 'Build stunning websites with HTML, CSS, and JavaScript.',
            url: 'https://www.youtube.com/embed/pQN-pnXPaVg'
        },
        {
            id: 4,
            title: 'Cloud Computing with AWS',
            description: 'Understand cloud computing and get started with AWS essentials.',
            url: 'https://www.youtube.com/embed/ulprqHHWlng'
        },
        {
            id: 5,
            title: 'Cybersecurity Basics',
            description: 'Learn the fundamentals of securing online systems and networks.',
            url: 'https://www.youtube.com/embed/1uBwtkqkJ2Q'
        },
        {
            id: 6,
            title: 'Web Development Crash Course',
            description: 'Build stunning websites with HTML, CSS, and JavaScript.',
            url: 'https://www.youtube.com/embed/pQN-pnXPaVg'
        },
    ];

    const testimonialsData = [
        {
            id: 1,
            text: "This platform has transformed how I learn and upskill for my career.",
            name: "Sneha, Data Scientist",
            avatar: "https://via.placeholder.com/60" // Replace with actual avatar URL
        },
        {
            id: 2,
            text: "Amazing courses and great instructors! Highly recommend this LMS.",
            name: "Arjun, Software Engineer",
            avatar: "https://via.placeholder.com/60" // Replace with actual avatar URL
        },
        {
            id: 3,
            text: "The community and mentorship here are top-notch. I've learned so much!",
            name: "Priya, UX Designer",
            avatar: "https://via.placeholder.com/60" // Replace with actual avatar URL
        }
    ];

    return (
        <div>
            <MainNavbar />
            <div className="hero-section">
                <div className="hero-text">
                    <h1>Welcome to the Future of Learning</h1>
                    <p>Discover innovative courses and tools to boost your skills and career.</p>
                    <a href="https://learningmanagementsystem1.netlify.app/login" className="cta-button">Join Now</a>
                </div>
                <div className="hero-image">
                    <img src={image} alt="Learning Platform" />
                </div>
            </div>

            <div className="features-section">
                <h2>Why Our Platform?</h2>
                <div className="features">
                    <div className="feature-card">
                        <h3>Comprehensive Courses</h3>
                        <p>Access in-depth courses designed by industry experts.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Flexible Learning</h3>
                        <p>Learn at your own pace with 24/7 access to resources.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Community Support</h3>
                        <p>Join a community of learners and mentors to enhance your journey.</p>
                    </div>
                </div>
            </div>

            <div className="course-cards-section">
                <h2>Popular Courses</h2>
                <div className="course-cards">
                    {staticCourses.map(course => (
                        <div className="course-card" key={course.id}>
                            <h3>{course.title}</h3>
                            <iframe
                                width="560"
                                height="315"
                                src={course.url}
                                title={course.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <p>{course.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="testimonials-section">
                <h2>What Our Users Say</h2>
                <div className="testimonials">
                    {testimonialsData.map((testimonial) => (
                        <div className="testimonial" key={testimonial.id}>
                            <img src={testimonial.avatar} alt={testimonial.name} />
                            <p>"{testimonial.text}"</p>
                            <h4>- {testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </div>

            <center>
                <h3>
                    <a href="/login" style={{ color: 'grey' }}>Login to Access Exclusive Content</a>
                </h3>
            </center>
        </div>
    );
};

export default HomePage;
