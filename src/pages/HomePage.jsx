// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from '../styles/HomePage.module.scss';
import { isAuthenticated } from '../utils/auth';
import { softwareFeatures, features, courses, news } from '../data/homeData';
import { FaPlay, FaCalendarAlt, FaFileInvoiceDollar, FaCalendarCheck, FaUsers } from 'react-icons/fa';

// Компонент для Hero Section
const HeroSection = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleWatchClick = () => {
        setShowVideo(true);
    };

    const handleCloseVideo = () => {
        setShowVideo(false);
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <h1>
                    Studying <span className={styles.highlight}>Online</span> is now much easier
                </h1>
                <p>TOTC is an interesting platform that will teach you in more an interactive way</p>
                <div className={styles.heroButtons}>
                    <button className={styles.joinButton}>Join for free</button>
                    <button className={styles.watchButton} onClick={handleWatchClick}>
                        <FaPlay className={styles.playIcon} />
                        <span>Watch how it works</span>
                    </button>
                </div>
            </div>
            <div className={styles.heroImage}>
                <img src="https://via.placeholder.com/500" alt="Student" />
                <div className={`${styles.floatingCard} ${styles.statsCard}`}>
                    <span>250K Assisted Student</span>
                </div>
                <div className={`${styles.floatingCard} ${styles.congratsCard}`}>
                    <span>Congratulations Your admission completed</span>
                </div>
                <div className={`${styles.floatingCard} ${styles.userCard}`}>
                    <span>User Experience Class Today at 12:00 PM</span>
                    <button className={styles.joinNowButton}>Join Now</button>
                </div>
                <div className={`${styles.floatingCard} ${styles.calendarCard}`}>
                    <FaCalendarAlt />
                </div>
            </div>
            {showVideo && (
                <div className={styles.videoModal}>
                    <div className={styles.videoModalContent}>
                        <button className={styles.closeButton} onClick={handleCloseVideo}>
                            ×
                        </button>
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Замените на реальное видео
                            title="How it works"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

// Компонент для Success Section
const SuccessSection = () => (
    <section className={styles.successSection}>
        <h2>Our Success</h2>
        <p>
            Omare id fames interdum porttitor nulla sit adipiscing. Diam vitae sollicitudin at nec nam pharetra gravida.
            Adipiscing a quis ultricies eu ornare tristique vel nisl orci.
        </p>
        <div className={styles.stats}>
            <div className={styles.statItem}>
                <h3>15K+</h3>
                <p>Students</p>
            </div>
            <div className={styles.statItem}>
                <h3>75%</h3>
                <p>Total success</p>
            </div>
            <div className={styles.statItem}>
                <h3>35</h3>
                <p>Main questions</p>
                <span>1527 x 375</span>
            </div>
            <div className={styles.statItem}>
                <h3>26</h3>
                <p>Chief experts</p>
            </div>
            <div className={styles.statItem}>
                <h3>16</h3>
                <p>Years of experience</p>
            </div>
        </div>
    </section>
);

// Компонент для Software Section
const SoftwareSection = () => {
    const icons = {
        "Online Billing, Invoicing, & Contracts": <FaFileInvoiceDollar />,
        "Easy Scheduling & Attendance Tracking": <FaCalendarCheck />,
        "Customer Tracking": <FaUsers />,
    };

    return (
        <section className={styles.softwareSection}>
            <h2>All-In-One Cloud Software.</h2>
            <p>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
            <div className={styles.featureCards}>
                {softwareFeatures.map((feature, index) => (
                    <div key={index} className={styles.featureCard}>
                        <div className={styles.featureIcon}>{icons[feature.title]}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Компонент для What is TOTC Section
const WhatIsTotcSection = () => (
    <section className={styles.whatIsTotcSection}>
        <h2>What is TOTC?</h2>
        <p>
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
        </p>
        <div className={styles.totcCards}>
            <div className={styles.totcCard}>
                <img src="https://via.placeholder.com/300x200" alt="For Instructors" className={styles.totcImage} />
                <h3>For Instructors</h3>
                <button className={styles.totcButton}>Start a class today</button>
            </div>
            <div className={styles.totcCard}>
                <img src="https://via.placeholder.com/300x200" alt="For Students" className={styles.totcImage} />
                <h3>For Students</h3>
                <button className={styles.totcButton}>Enter access code</button>
            </div>
        </div>
    </section>
);

// Компонент для Classroom Section
const ClassroomSection = () => (
    <section className={styles.classroomSection}>
        <div className={styles.classroomContent}>
            <h2>Everything you can do in a physical classroom, you can do with TOTC</h2>
            <p>
                TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
            </p>
            <button className={styles.learnMoreButton}>Learn more</button>
        </div>
        <div className={styles.classroomImage}>
            <img src="https://via.placeholder.com/500" alt="Classroom" />
        </div>
    </section>
);

// Компонент для Features Section
const FeaturesSection = () => (
    <section className={styles.featuresSection}>
        <h2>Our Features</h2>
        <p>This very extraordinary feature, can make learning activities more efficient</p>
        {features.map((feature, index) => (
            <div key={index} className={`${styles.featureItem} ${index % 2 === 0 ? styles.featureLeft : styles.featureRight}`}>
                <div className={styles.featureContent}>
                    <h3>{feature.title}</h3>
                    {feature.description && <p>{feature.description}</p>}
                    {feature.items && (
                        <ul className={styles.featureList}>
                            {feature.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className={styles.featureImage}>
                    <img src={feature.image} alt={feature.title} />
                </div>
            </div>
        ))}
    </section>
);

// Компонент для Course Section
const CourseSection = () => (
    <section className={styles.courseSection}>
        <h2>Explore Course</h2>
        <p>Ut eros finibus, placerat orci id, dapibus.</p>
        <div className={styles.courseCards}>
            {courses.map((course, index) => (
                <div key={index} className={styles.courseCard}>
                    <img src={course.image} alt={course.title} className={styles.courseImage} />
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <div className={styles.courseMeta}>
                        <span>★★★★★</span>
                        <span>${course.price}</span>
                    </div>
                    <button className={styles.exploreButton}>Explore</button>
                </div>
            ))}
        </div>
        <div className={styles.seeAll}>
            <Link to="/courses">See all →</Link>
        </div>
    </section>
);

// Компонент для Testimonial Section
const TestimonialSection = () => (
    <section className={styles.testimonialSection}>
        <h2>What They Say?</h2>
        <p>
            TOTC has got more than 100k positive ratings from our users around the world. Some of the students and teachers were greatly helped by the Skilline. Are you too? Please give your assessment
        </p>
        <button className={styles.assessmentButton}>Write your assessment →</button>
        <div className={styles.testimonialContent}>
            <div className={styles.testimonialText}>
                <p>
                    “Thank you so much for your help. It’s exactly what I’ve been looking for. You won’t regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.”
                </p>
                <p className={styles.testimonialAuthor}>Gloria Rose</p>
                <p className={styles.testimonialMeta}>12 reviews at Yelp</p>
            </div>
            <div className={styles.testimonialImage}>
                <img src="https://via.placeholder.com/500" alt="Gloria Rose" />
            </div>
        </div>
    </section>
);

// Компонент для News Section
const NewsSection = () => (
    <section className={styles.newsSection}>
        <h2>Latest News and Resources</h2>
        <p>See the developments that have occurred to TOTC in the world</p>
        <div className={styles.newsCards}>
            {news.map((item, index) => (
                <div key={index} className={styles.newsCard}>
                    <img src={item.image} alt={item.title} className={styles.newsImage} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button className={styles.readMoreButton}>Read more</button>
                </div>
            ))}
        </div>
    </section>
);

// Компонент для Footer
const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
                <div className={styles.logo}>TOTC</div>
                <p>Virtual Class for Zoom</p>
            </div>
            <div className={styles.footerRight}>
                <p>Subscribe to get our Newsletter</p>
                <form className={styles.newsletterForm}>
                    <input type="email" placeholder="Your Email" className={styles.newsletterInput} />
                    <button type="submit" className={styles.subscribeButton}>Subscribe</button>
                </form>
                <div className={styles.footerLinks}>
                    <Link to="/careers">Careers</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms & Conditions</Link>
                </div>
                <p className={styles.copyright}>© 2021 Class Technologies Inc.</p>
            </div>
        </div>
    </footer>
);

const HomePage = () => (
    <div className={styles.homePage}>
        <Navbar isAuthenticated={isAuthenticated()} />
        <HeroSection />
        <SuccessSection />
        <SoftwareSection />
        <WhatIsTotcSection />
        <ClassroomSection />
        <FeaturesSection />
        <CourseSection />
        <TestimonialSection />
        <NewsSection />
        <Footer />
    </div>
);

export default HomePage;