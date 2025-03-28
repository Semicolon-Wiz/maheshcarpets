'use client'
import Image from 'next/image'
import Link from 'next/link'
import Loader from "@/components/Loader/Loader";

export default function Blogs({ loading, blog }) {

  return (
    <section className='admin-blogs-page'>
      {loading ? <Loader /> : (
        <div className="admin-blogs-container">
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
    </section>
  );
}
