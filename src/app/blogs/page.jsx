import ContactUs from '@/components/Contact_us/ContactUs'
import Footer from '@/components/Footor/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import AllBlogList from './AllBlogList'

export default function page() {
    return (
        <>
            <Navbar />
            <section className='blog-header'>
                <div className="blog-header-container">
                    <h1>Blogs</h1>
                </div>
            </section>
            <section className='section'>
                <div className="blog-section">
                    <AllBlogList/>
                </div>
            </section>
            <ContactUs />
            <Footer />
        </>
    )
}

export const metadata = {
    title: 'Blogs - Mahesh Carpets | Explore the World of Luxury & Comfort',
    description: 'Explore the latest trends, tips, and insights about carpets and rugs. Find inspiration for your home and learn how to choose and care for the perfect carpet.',
}