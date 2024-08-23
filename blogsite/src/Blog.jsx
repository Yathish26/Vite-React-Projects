import React, { useEffect, useState } from 'react';
import styles from './Blog.module.css';
import { Link } from 'react-router-dom';

export default function Blog() {
    const [isMoved, setisMoved] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [editingBlog, setEditingBlog] = useState(null);
    const [editedData, setEditedData] = useState({
        blog_title: '',
        blog_category: '',
        blog_content: '',
    });

    const handleClick = () => {
        setisMoved(!isMoved);
    };

    /* Fetching Section */
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/createblog');
                if (response.ok) {
                    const data = await response.json();
                    setBlogs(data);
                } else {
                    console.log('Failed to Fetch Blogs');
                }
            } catch (error) {
                console.error('Error', error);
            }
        };
        fetchBlogs();
    }, []);

    /* Deleting Section */
    const handleDelete = async (blogID) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/createblog/${blogID}/`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setBlogs(blogs.filter((blog) => blog.id !== blogID));
            } else {
                console.log('Failed to delete blog');
            }
        } catch (error) {
            console.log('Error', error);
        }
    };

    /* Update/Edit Section */
    const handleEdit = (blog) => {
        setEditingBlog(blog.id);
        setEditedData({
            blog_title: blog.blog_title,
            blog_category: blog.blog_category,
            blog_content: blog.blog_content,
        });
    };

    const handleEditChange = (e) => {
        setEditedData({ ...editedData, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = async (blogId) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/createblog/${blogId}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedData),
            });

            if (response.ok) {
                setBlogs(blogs.map((blog) => (blog.id === blogId ? { ...blog, ...editedData } : blog)));
                setEditingBlog(null);
            } else {
                console.log('Failed to Update the Blog');
            }
        } catch (error) {
            console.log('Error', error);
        }
    };

    const truncateContent = (content, maxLength) => {
        if (content.length > maxLength) {
            return content.slice(0, maxLength) + '...';
        }
        return content;
    };


    return (
        <>
            <div className={styles.blogheader}>
                <div className={styles.title}>Latest Blogs</div>
                <Link to={'/blogs/create'}>
                    <img
                        onClick={handleClick}
                        className={styles.icon}
                        src="/icons/create.svg"
                        alt="Create Blog"
                    />
                </Link>
            </div>

            {blogs.map((blog) => (
                <div className={styles.blogcontainer} key={blog.id}>
                    {editingBlog === blog.id ? (
                        <>
                            <input
                                type="text"
                                name="blog_title"
                                value={editedData.blog_title}
                                onChange={handleEditChange}
                                className={styles.editInput}
                            />
                            <input
                                type="text"
                                name="blog_category"
                                value={editedData.blog_category}
                                onChange={handleEditChange}
                                className={styles.editInput}
                            />
                            <textarea
                                name="blog_content"
                                value={editedData.blog_content}
                                onChange={handleEditChange}
                                className={styles.editTextarea}
                            />
                            <button
                                className={styles.saveButton}
                                onClick={() => handleEditSubmit(blog.id)}
                            >
                                Save
                            </button>
                            <button
                                className={styles.cancelButton}
                                onClick={() => setEditingBlog(null)}
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            <div className={styles.titleAndCategory}>
                                <div className={styles.blogtitle}>{blog.blog_title}</div>
                                <div className={styles.blogcategory}>{blog.blog_category}</div>
                            </div>
                            <div className={styles.blogcontent}>
                                {truncateContent(blog.blog_content, 20)}
                            </div>
                            <img
                                className={styles.delete}
                                src="/icons/delete.svg"
                                alt="delete"
                                onClick={() => handleDelete(blog.id)}
                            />
                            <img
                                className={styles.edit}
                                src="/icons/edit.svg"
                                alt="edit"
                                onClick={() => handleEdit(blog)}
                            />
                        </>
                    )}
                </div>
            ))}
        </>
    );
}
