import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './BlogRead.module.css';

export default function BlogRead() {
  const { slug, id } = useParams(); // Handles both slug and id
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      let url = 'http://127.0.0.1:8000/api/createblog/';
      if (slug) {
        url += `slug/${slug}/`;
      } else if (id) {
        url += `${id}/`;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [slug, id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.titlencategory}>
        <div className={styles.title}>{blog.blog_title}</div>
        <div className={styles.category}>{blog.blog_category}</div>
      </div>
      <div className={styles.content}>{blog.blog_content}</div>
    </>
  );
}
