import React from 'react';
import styles from '../styles/BlogPage.module.scss';

const BlogPage = () => {
    // Данные для Featured Blog
    const featuredPost = {
        title: 'Why SwiftUI Should Be on the Radar of Every Mobile Developer',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h0YbDNAtpAuVFFeK4P~j0koWiFw2oB3fUoNnc0Et7OMEmmlKEP723SOcXdvtI57GeCZEvwp46DRdk6DhRRh5h7GrU832aV4iE2iWxp~xqZm8uwsAkNrky6bGWnBCoPBDCnoAlQQ-au2vXk9kszvI9~MJZ6kwiog6ZFsIBmII3Z7kCcOSitdk~HWuCjZTx9UYhjAmZ8REvTpb310DEHHWxEohgvRwq0CAMiXqm0rwMAPexzvZX2SZdLMMiEn~Z9I2fFfIZRsSIIFPthSKAIJ~oS11bcxULzRXUqen5LHgb7Njk3zzlcpOff08IbKdBJ2J8nyf8RVwDeNhdKDGLe5Bww__' +
            '' +
            '', // Замените на реальное изображение
    };

    // Данные для Related Blog
    const relatedPosts = [
        {
            id: 1,
            title: 'Class adds $30 million to its balance sheet for a Zoom-friendly...',
            description:
                'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
            author: 'Lina',
            date: '20 Jan 2022',
            views: 251,
            image: 'https://via.placeholder.com/300x200', // Замените на реальное изображение
        },
        {
            id: 2,
            title: 'Class adds $30 million to its balance sheet for a Zoom-friendly...',
            description:
                'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
            author: 'Lina',
            date: '20 Jan 2022',
            views: 251,
            image: 'https://via.placeholder.com/300x200', // Замените на реальное изображение
        },
    ];

    // Данные для Marketing Articles
    const marketingArticles = [
        {
            id: 1,
            title: 'AWS Certified Solutions Architect',
            author: 'Lina',
            price: 50,
            image: 'https://via.placeholder.com/150x150', // Замените на реальное изображение
        },
        {
            id: 2,
            title: 'AWS Certified Solutions Architect',
            author: 'Lina',
            price: 50,
            image: 'https://via.placeholder.com/150x150', // Замените на реальное изображение
        },
        {
            id: 3,
            title: 'AWS Certified Solutions Architect',
            author: 'Lina',
            price: 50,
            image: 'https://via.placeholder.com/150x150', // Замените на реальное изображение
        },
        {
            id: 4,
            title: 'AWS Certified Solutions Architect',
            author: 'Lina',
            price: 50,
            image: 'https://via.placeholder.com/150x150', // Замените на реальное изображение
        },
    ];

    return (
        <div className={styles.blogPage}>
            {/* Featured Blog */}
            <section className={styles.featuredBlog}>
                <div className={styles.featuredContent}>
                    <h1>{featuredPost.title}</h1>
                    <p>{featuredPost.description}</p>
                    <button className={styles.readNowButton}>Read now</button>
                </div>
                <div className={styles.featuredImage}>
                    <img src={featuredPost.image} alt={featuredPost.title} />
                </div>
            </section>

            {/* Related Blog */}
            <section className={styles.relatedBlog}>
                <div className={styles.sectionHeader}>
                    <h2>Related Blog</h2>
                    <a href="#" className={styles.seeAllLink}>
                        See all
                    </a>
                </div>
                <div className={styles.relatedPosts}>
                    {relatedPosts.map((post) => (
                        <div key={post.id} className={styles.relatedPostCard}>
                            <img src={post.image} alt={post.title} className={styles.postImage} />
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <div className={styles.postMeta}>
                                <span>{post.author}</span>
                                <span>{post.date}</span>
                                <span>{post.views} views</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Marketing Articles */}
            <section className={styles.marketingArticles}>
                <div className={styles.sectionHeader}>
                    <h2>Marketing Articles</h2>
                    <a href="#" className={styles.seeAllLink}>
                        See all
                    </a>
                </div>
                <div className={styles.articleCards}>
                    {marketingArticles.map((article) => (
                        <div key={article.id} className={styles.articleCard}>
                            <img src={article.image} alt={article.title} className={styles.articleImage} />
                            <h3>{article.title}</h3>
                            <div className={styles.articleMeta}>
                                <span>{article.author}</span>
                                <span>${article.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BlogPage;