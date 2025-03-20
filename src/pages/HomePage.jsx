import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.scss';

// Импортируем изображения (замените на реальные пути)
import studentImage from '../assets/student.png';
import playIcon from '../assets/play-icon.png';
import calendarIcon from '../assets/calendar-icon.png';
import checkIcon from '../assets/check-icon.png';
import userIcon from '../assets/user-icon.png';
import statsIcon from '../assets/students.png';
import billingIcon from '../assets/students.png';
import schedulingIcon from '../assets/students.png';
import customerIcon from '../assets/students.png';
import instructorImage from '../assets/instructor.png'; // Для "For Instructors"
import studentsImage from '../assets/students.png'; // Для "For Students"
import classroomImage from '../assets/students.png'; // Для "Everything you can do..."
import featureImage1 from '../assets/students.png'; // Для "A user interface designed..."
import featureImage2 from '../assets/students.png'; // Для "Tools For Teachers..."
import featureImage3 from '../assets/students.png'; // Для "Assessments, Quizzes, Tests"
import featureImage4 from '../assets/students.png'; // Для "Class Management Tools..."
import featureImage5 from '../assets/students.png'; // Для "One-on-One Discussions"
import courseImage1 from '../assets/students.png'; // Для курсов
import courseImage2 from '../assets/students.png';
import courseImage3 from '../assets/students.png';
import testimonialImage from '../assets/students.png'; // Для "What They Say?"
import newsImage1 from '../assets/students.png'; // Для новостей
import newsImage2 from '../assets/students.png';
import newsImage3 from '../assets/students.png';

const HomePage = () => {
    const softwareFeatures = [
        {
            icon: billingIcon,
            title: 'Online Billing, Invoicing, & Contracts',
            description:
                'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts',
        },
        {
            icon: schedulingIcon,
            title: 'Easy Scheduling & Attendance Tracking',
            description:
                'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance',
        },
        {
            icon: customerIcon,
            title: 'Customer Tracking',
            description:
                'Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization',
        },
    ];

    const features = [
        {
            title: 'A user interface designed for the classroom',
            description: '',
            image: featureImage1,
            items: [
                'Teachers don’t get lost in the grid view',
                'Have a dedicated Podium space',
                'Teachers can see all students and class data at one time',
            ],
        },
        {
            title: 'Tools For Teachers And Learners',
            description:
                'Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.',
            image: featureImage2,
        },
        {
            title: 'Assessments, Quizzes, Tests',
            description:
                'Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.',
            image: featureImage3,
        },
        {
            title: 'Class Management Tools for Educators',
            description:
                'Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.',
            image: featureImage4,
        },
        {
            title: 'One-on-One Discussions',
            description:
                'Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.',
            image: featureImage5,
        },
    ];

    const courses = [
        {
            title: 'Integer Id Orc Sed Ante Tincidunt',
            description: 'Cras convallis lacus orci, tristique tincidunt magna fringilla et faucibus vel.',
            price: 450,
            image: courseImage1,
        },
        {
            title: 'Aenean Facilisis',
            description: 'Cras convallis lacus orci, tristique tincidunt magna fringilla et faucibus vel.',
            price: 450,
            image: courseImage2,
        },
        {
            title: 'Quisque a Consequat',
            description: 'Cras convallis lacus orci, tristique tincidunt magna fringilla et faucibus vel.',
            price: 450,
            image: courseImage3,
        },
    ];

    const news = [
        {
            title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
            description:
                'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
            image: newsImage1,
        },
        {
            title: 'Class Technologies Inc. Closes $30M Series A Financing to Meet High Demand',
            description: 'Class Technologies Inc., the company that created Class,...',
            image: newsImage2,
        },
        {
            title: 'Zoom investors are betting millions on a better Zoom for schools',
            description: 'Zoom was a success story created to be a consumer product. Nonetheless, the...',
            image: newsImage3,
        },
    ];

    return (
        <div className={styles.homePage}>
            {/* Навигационное меню */}
            <nav className={styles.navbar}>
                <div className={styles.logo}>TOTC</div>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/" className={styles.navLink}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses" className={styles.navLink}>
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link to="/careers" className={styles.navLink}>
                            Careers
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className={styles.navLink}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={styles.navLink}>
                            About Us
                        </Link>
                    </li>
                </ul>
                <div className={styles.authButtons}>
                    <Link to="/login" className={styles.loginButton}>
                        Login
                    </Link>
                    <Link to="/register" className={styles.signUpButton}>
                        Sign Up
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>Studying Online is now much easier</h1>
                    <p>TOTC is an interesting platform that will teach you in more an interactive way</p>
                    <div className={styles.heroButtons}>
                        <button className={styles.joinButton}>Join for free</button>
                        <button className={styles.watchButton}>
                            <img src={playIcon} alt="Play" className={styles.playIcon} />
                            Watch how it works
                        </button>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <img src={studentImage} alt="Student" />
                    <div className={`${styles.floatingCard} ${styles.statsCard}`}>
                        <img src={statsIcon} alt="Stats" className={styles.cardIcon} />
                        <p>250K Assisted Student</p>
                    </div>
                    <div className={`${styles.floatingCard} ${styles.congratsCard}`}>
                        <img src={checkIcon} alt="Check" className={styles.cardIcon} />
                        <p>Congratulations Your admission completed</p>
                    </div>
                    <div className={`${styles.floatingCard} ${styles.userCard}`}>
                        <img src={userIcon} alt="User" className={styles.cardIcon} />
                        <p>User Experience Class Today at 12:00 PM</p>
                        <button className={styles.joinNowButton}>Join Now</button>
                    </div>
                    <div className={`${styles.floatingCard} ${styles.calendarCard}`}>
                        <img src={calendarIcon} alt="Calendar" className={styles.cardIcon} />
                    </div>
                </div>
            </section>

            {/* Our Success */}
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

            {/* All-In-One Cloud Software */}
            <section className={styles.softwareSection}>
                <h2>All-In-One Cloud Software.</h2>
                <p>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
                <div className={styles.featureCards}>
                    {softwareFeatures.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <img src={feature.icon} alt={feature.title} className={styles.featureIcon} />
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* What is TOTC? */}
            <section className={styles.whatIsTotcSection}>
                <h2>What is TOTC?</h2>
                <p>
                    TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                </p>
                <div className={styles.totcCards}>
                    <div className={styles.totcCard}>
                        <img src={instructorImage} alt="For Instructors" className={styles.totcImage} />
                        <h3>For Instructors</h3>
                        <button className={styles.totcButton}>Start a class today</button>
                    </div>
                    <div className={styles.totcCard}>
                        <img src={studentsImage} alt="For Students" className={styles.totcImage} />
                        <h3>For Students</h3>
                        <button className={styles.totcButton}>Enter access code</button>
                    </div>
                </div>
            </section>

            {/* Everything you can do in a physical classroom */}
            <section className={styles.classroomSection}>
                <div className={styles.classroomContent}>
                    <h2>Everything you can do in a physical classroom, you can do with TOTC</h2>
                    <p>
                        TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
                    </p>
                    <button className={styles.learnMoreButton}>Learn more</button>
                </div>
                <div className={styles.classroomImage}>
                    <img src={classroomImage} alt="Classroom" />
                </div>
            </section>

            {/* Our Features */}
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

            {/* Explore Course */}
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

            {/* What They Say? */}
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
                        <img src={testimonialImage} alt="Gloria Rose" />
                    </div>
                </div>
            </section>

            {/* Latest News and Resources */}
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

            {/* Footer */}
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
        </div>
    );
};

export default HomePage;