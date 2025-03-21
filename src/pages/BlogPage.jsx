// src/pages/BlogPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from '../styles/BlogPage.module.scss';
import { isAuthenticated } from '../utils/auth';
import {
  featuredPost,
  relatedPosts,
  marketingArticles,
} from '../data/blogData';

const FeaturedBlog = () => (
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
);

const RelatedBlog = () => (
  <section className={styles.relatedBlog}>
    <div className={styles.sectionHeader}>
      <h2>Related Blog</h2>
      <Link to="#" className={styles.seeAllLink}>
        See all
      </Link>
    </div>
    <div className={styles.relatedPosts}>
      {relatedPosts.map(post => (
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
);

const MarketingArticles = () => (
  <section className={styles.marketingArticles}>
    <div className={styles.sectionHeader}>
      <h2>Marketing Articles</h2>
      <Link to="#" className={styles.seeAllLink}>
        See all
      </Link>
    </div>
    <div className={styles.articleCards}>
      {marketingArticles.map(article => (
        <div key={article.id} className={styles.articleCard}>
          <img
            src={article.image}
            alt={article.title}
            className={styles.articleImage}
          />
          <h3>{article.title}</h3>
          <div className={styles.articleMeta}>
            <span>{article.author}</span>
            <span>${article.price}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const BlogPage = () => (
  <div className={styles.blogPage}>
    <Navbar isAuthenticated={isAuthenticated()} />
    <FeaturedBlog />
    <RelatedBlog />
    <MarketingArticles />
  </div>
);

export default BlogPage;
