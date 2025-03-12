import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <section className='blog-header'>
                <div className="blog-header-container">
                    <h1>Blogs</h1>
                </div>
            </section>
            <section className='section'>
                <div className="blog-section">
                    <div className="blog-container">
                        <div className="blog-cards-container">
                            <div className="blog-card-body">
                                <div className="blog-card-img">
                                    <Image src='/images/blogs/blog-image-01.jpeg' width={400} height={163} alt='blog' />
                                </div>
                                <div className="blog-badge">
                                    <span>Guide</span>
                                </div>
                                <div className="blog-title">
                                    <h2>
                                        <Link href='/blogs/how-to-identify-a-genuine-handmade-carpet' >
                                            How to Identify a Genuine Handmade Carpet: A Buyer's Guide
                                        </Link>
                                    </h2>
                                </div>
                                <div className="blog-description">
                                    <p>
                                        When it comes to adding elegance, warmth, and personality to your living space, nothing compares to a handmade carpet. These timeless pieces are more than just floor coverings—they are works of art that tell a story of craftsmanship, tradition, and creativity. However, with so many options available in the market, identifying a genuine handmade carpet can be challenging. This guide will help you navigate the process and ensure you invest in a piece that is truly authentic and worth every penny.
                                    </p>
                                </div>

                                <div className="blog-btn">
                                    <Link href='/blogs/how-to-identify-a-genuine-handmade-carpet'>
                                        <button>Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="blog-cards-container">
                            <div className="blog-card-body">
                                <div className="blog-card-img">
                                    <Image src='/images/blogs/blog-image-02.jpeg' width={400} height={163} alt='blog' />
                                </div>
                                <div className="blog-badge">
                                    <span>Guide</span>
                                    <span>Carpets</span>
                                </div>
                                <div className="blog-title">
                                    <h2>
                                        <Link href='/blogs/how-to-clean-carpets-without-professional-help' >
                                            How to Clean Carpets Without Professional Help
                                        </Link>
                                    </h2>
                                </div>
                                <div className="blog-description">
                                    <p>
                                        You know that feeling when you step onto a soft, handmade carpet—pure comfort, a touch of luxury, and a piece of art right under your feet? That’s what a handmade carpet does. But as much as we love them, they go through a lot—dust, spills, and everyday wear. And before you know it, that once beautiful carpet starts looking a little dull.
                                    </p>
                                </div>

                                <div className="blog-btn">
                                    <Link href='/blogs/how-to-clean-carpets-without-professional-help'>
                                        <button>Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="blog-cards-container">
                            <div className="blog-card-body">
                                <div className="blog-card-img">
                                    <Image src='/images/blogs/blog-image-03.jpeg' width={400} height={163} alt='blog' />
                                </div>
                                <div className="blog-badge">
                                    <span>Carpets</span>
                                    <span>Pets</span>
                                </div>
                                <div className="blog-title">
                                    <h2>
                                        <Link href='/blogs/how-to-choose-the-best-pet-friendly-carpets' >
                                            How to Choose the Best Pet-Friendly Carpets: Durable, Safe, and Easy to Clean
                                        </Link>
                                    </h2>
                                </div>
                                <div className="blog-description">
                                    <p>
                                        If you’re a pet parent, you know that our furry companions bring so much joy, love, and, let’s be honest – mess! From muddy paws to accidental spills, choosing the right flooring can be a challenge. That’s where pet-friendly carpets come in. The right carpet can keep your home looking stylish while ensuring comfort, safety, and easy maintenance.
                                    </p>
                                </div>

                                <div className="blog-btn">
                                    <Link href='/blogs/how-to-choose-the-best-pet-friendly-carpets'>
                                        <button>Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export const metadata = {
    title: 'Blogs - Mahesh Carpets | Explore the World of Luxury & Comfort',
    description: 'Explore the latest trends, tips, and insights about carpets and rugs. Find inspiration for your home and learn how to choose and care for the perfect carpet.',
}