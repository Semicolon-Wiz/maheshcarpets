'use client'
import Loader from '@/components/Loader/Loader'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Dashboard({ totalVisit, totalBlogs, blog, loading }) {
  const [uniqueVisits, setUniqueVisits] = useState({});
  const bufferToBase64 = (buffer) => {
    return `data:image/jpeg;base64,${Buffer.from(buffer).toString('base64')}`;
  };

  useEffect(() => {
    const fetchUniqueVisits = async () => {
      if (blog?.data?.length) {
        const visits = {};
        await Promise.all(
          blog.data.map(async (data) => {
            const response = await fetch("/api/get-unique-visits", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ blogId: data.blog_slug }),
            });
            const result = await response.json();
            visits[data.blog_id] = result.data;
          })
        );
        setUniqueVisits(visits);
      }
    };

    fetchUniqueVisits();
  }, [blog?.data]);

  return (
    <section className='admin-dashboard-page'>
      <div className="admin-dashboard-conatiner">

        <div className="admin-dashboard-card">
          <div className="admin-dashboard-card-body">
            <div className="admin-dashboard-card-icon">
              <i className="hgi hgi-stroke hgi-user-sharing"></i>
            </div>
            <div className="admin-dashboard-card-content">
              <h2>Total Visit</h2>
              <p>{loading ? "Loading..." : totalVisit}</p>
            </div>
          </div>
        </div>

        <div className="admin-dashboard-card">
          <div className="admin-dashboard-card-body">
            <div className="admin-dashboard-card-icon">
              <i className="hgi hgi-stroke hgi-file-01"></i>
            </div>
            <div className="admin-dashboard-card-content">
              <h2>Total Blogs</h2>
              <p>{loading ? "Loading..." : totalBlogs}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="admin-blogs-action">
        <div className="blogs-actions-container">
          <h2>All Blogs</h2>
          {loading ? (
            <Loader />
          ) : (
            <>
              {blog?.data?.map((data, index) => {
                const base64Image = data.blog_img?.data
                  ? bufferToBase64(data.blog_img.data)
                  : '/images/blogs/blog-image-01.jpeg';

                return (
                  <div className="blogs-actions" key={index}>
                    <div className="action-box blogs-action-image">
                      <div className="action-img-container">
                        <Image
                          src={base64Image}
                          width={200}
                          height={200}
                          alt='img'
                        />
                      </div>
                    </div>
                    <div className="action-box blog-action-title">
                      <div className="action-title-container">
                        <span>{data.blog_title}</span>
                      </div>
                    </div>
                    <div className="action-box blog-action-views">
                      <div className="action-views">
                        {/* Display unique visits from state */}
                        <span>
                          {uniqueVisits[data.blog_id] || 0}
                        </span>
                      </div>
                    </div>
                    <div className="action-box blog-action-btn">
                      <div className="action-btn">
                        <i className="hgi hgi-stroke hgi-pencil-edit-02"></i>
                      </div>
                    </div>
                    <div className="action-box blog-action-btn">
                      <div className="action-btn">
                        <i className="hgi hgi-stroke hgi-delete-02"></i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
