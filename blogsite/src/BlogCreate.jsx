import React, { useState } from 'react'
import styles from './BlogCreate.module.css'

export default function BlogCreate() {

    let [post, setPosted] = useState('Post');
    let [title, setTitle] = useState('');
    let [category, setCategory] = useState('');
    let [blog, setBlog] = useState('');

    const handleSubmit = async (event) => {

        event.preventDefault();

        const formData = {
            blog_title: title,
            blog_category: category,
            blog_content: blog
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/createblog', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if (response.ok) {
                console.log('Form Submitted')
                setPosted('Posted')
                setTimeout(() => {
                    setPosted('Post')
                }, 1000)
            } else {
                console.log('Posting Failed')
                setPosted('Failed')
                setTimeout(() => {
                    setPosted('Post')
                }, 1000);
            }
        } catch (error) {
            console.error('Error', error)
        }
    }
    return (
        <>
            <div className={styles.createheader}>
                <img className={styles.icon} src="/icons/create.svg" alt="Create Blog" />
                <div className={styles.title}>Create Blog</div>
            </div>

            <form className={styles.inputbox} onSubmit={handleSubmit}>
                <input className={styles.input}
                    type="text" id="blogTitle"
                    placeholder='Blog Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <input className={styles.input}
                    type="text"
                    id="blogCategory"
                    placeholder='Blog Category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)} />

                <textarea className={styles.inputblog}
                    id="blogContent"
                    placeholder='Blog Content'
                    value={blog}
                    onChange={(e) => setBlog(e.target.value)}></textarea>

                <button type='submit' className={styles.button}>{post}</button>
            </form>
        </>
    )
}
