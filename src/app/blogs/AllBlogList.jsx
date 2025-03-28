'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Loader from "@/components/Loader/Loader";
import axios from 'axios';
export default function AllBlogList() {
    const [blog, setBlog] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchBlogs() {
            setLoading(true)
            try {
                const res = await axios.get('/api/get-blogs')
                setBlog(res.data)
            } catch (error) {
                console.error("Error fetching blogs:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchBlogs()
    }, [])
    return (
        <>
            {loading ? <Loader /> : (
                <div className="blog-container">
                    {blog?.data?.map((data, index) => {
                        return (
                            <div className="blog-cards-container" key={index}>
                                <div className="blog-card-body">
                                    <div className="blog-card-img">
                                        <Image
                                            src={data.blog_img}
                                            width={400}
                                            height={163}
                                            alt='blog'
                                            priority
                                            unoptimized
                                        />
                                    </div>
                                    <div className="blog-title">
                                        <h2>
                                            <Link href={`/blogs/${data.blog_slug}`}>
                                                {data.blog_title}
                                            </Link>
                                        </h2>
                                    </div>
                                    <div className="blog-description" dangerouslySetInnerHTML={{ __html: data.blog_content }}>
                                    </div>
                                    <div className="blog-btn">
                                        <Link href={`/blogs/${data.blog_slug}`}>
                                            <button>Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    )
}
