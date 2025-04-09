'use client'
import ContactUs from '@/components/Contact_us/ContactUs'
import Footer from '@/components/Footor/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React, { useState } from 'react'

export default function Faq() {
    const faqData = [
        {
            name: "Who owns Mahesh Carpets?",
            content: "Mahesh Carpets was established by the visionary Late Ram Kumar Maheshwari, whose passion for fine craftsmanship and dedication to quality laid the foundation for the brands enduring legacy. Today, the company remains a proudly family-owned and operated enterprise, guided by the leadership of Maniessh Maheshwari and the third-generation steward, Ssanidhya Mahesshwari. Together, they blend decades of experience with a forward-looking approach, ensuring that the timeless art of handmade carpets continues to thrive while embracing modern design sensibilities and global standards. Their shared commitment to excellence and innovation keeps the legacy of Mahesh Carpets alive, evolving, and deeply rooted in heritage."
        },
        {
            name: "Do you offer custom sizes, colors, or designs?",
            content: "Yes, at Mahesh Carpets, customization lies at the heart of what we do. We take pride in offering fully bespoke carpets and home accessories that are thoughtfully tailored to reflect your individual style and spatial needs. Whether youre envisioning a rug in a non-standard size to complement a unique room layout, a custom color palette that harmonizes with your interiors, or a one-of-a-kind design that tells your story we work closely with you to bring that vision to life. Our team collaborates with interior designers, architects, and discerning homeowners to transform inspiration into handcrafted reality. From initial sketches to the final weave, every detail is carefully considered to ensure your custom piece is not just a carpet, but a meaningful expression of your personal aesthetic.With Mahesh Carpets, your imagination sets the boundaries and we take care of the rest."
        },
        {
            name: "Can I create an exclusive collection with Mahesh Carpets?",
            content: "We specialize in partnering with carpet importers, retailers, and design-focused businesses to create exclusive collections that are truly distinctive and market-ready.From concept development to final production, we collaborate closely with you to design collections that reflect your brand's identity, resonate with your target customers, and meet the specific demands of your market. Each collaboration is built on mutual trust, design integrity, and a deep understanding of global trends combined with traditional craftsmanship. With flexible production capabilities and a strong emphasis on quality control, we ensure that your private-label or co-branded collection not only stands out but also delivers lasting value.If you're looking to differentiate your product offering and build a long-term sourcing partnership, Mahesh Carpets would be honored to be your trusted manufacturing partner."
        },
        {
            name: "What materials do you use in your carpets?",
            content: "At Mahesh Carpets, we use a wide range of premium materials to suit various styles, budgets, and performance needs. Our collections feature pure wool, New Zealand wool, natural silk, bamboo silk, cotton, viscose, TENCEL™, polyester, jute, recycled PET, and other innovative blends.All our materials are ethically sourced, with a strong focus on sustainability and traceability. We work with both natural and man-made fibers including plant-based and recycled options to create carpets that are not only beautiful and durable, but also environmentally responsible. Whether youre looking for luxurious softness, vibrant sheen, or everyday practicality, we offer material choices tailored to every space and purpose."
        },
        {
            name: "What are your lead times, and do you ship internationally?",
            content: "Yes, we proudly ship our carpets worldwide, delivering to homes, offices, showrooms, and retail spaces across the globe. Lead times vary depending on the nature and scale of your order. For standard designs and sizes, production typically takes 6-8 weeks. Custom and large-scale projects may require additional time based on design complexity, material availability, and quantity. We take great care in packaging and logistics to ensure each piece arrives safely and on time, no matter where you are in the world. Our team is happy to provide a detailed timeline and shipping estimate once your order specifications are finalized."
        },
        {
            name: "What makes Mahesh Carpets unique?",
            content: "What truly sets Mahesh Carpets apart is our rare ability to blend heritage craftsmanship with design flexibility at scale, something not often seen in the handmade carpet industry. With over 50 years of expertise, we dont just manufacture rugs, we co-create stories woven with purpose, identity, and soul. Our uniqueness lies in the seamless collaboration between generations of artisans and our in-house design team, allowing us to bring bespoke concepts to life whether its for a single home, a boutique hotel, or a global retail brand. Few manufacturers offer the ability to combine such deep artisanal knowledge with modern design responsiveness and global client servicing. We also take pride in working with a wide variety of materials, offering sustainable and innovative fibers, and crafting asymmetrical, irregular, and freeform designs, something most producers shy away from due to complexity. At Mahesh Carpets, creativity isnt just welcomed its woven into every knot."
        },
        {
            name: "Do you have a showroom I can visit?",
            content: "You can explore our collections in person at our showroom in Varanasi, where youll experience the artistry, textures, and craftsmanship up close."
        },
        {
            name: "How can I place an order?",
            content: "Ordering is easy. Simply contact us through our website, email or visit our showroom to discuss your requirements, and we will guide you through the process."
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <>
            <Navbar />
            <section className='blog-header' style={{ backgroundImage: "url('/images/faq/01.jpg')", height: "13rem" }}>
                <div className="blog-header-container">
                    <h1>FAQ's</h1>
                </div>
            </section>

            <section className='section'>
                <div className="faq-section">
                    <div className="faq-heading">
                        <h2>Frequently Asked Questions – Mahesh Carpets</h2>
                    </div>

                    <div className="faq-content-contain">
                        {faqData.map((faq, index) => (
                            <div className="faq-wraper" key={index}>
                                <div className="faq-name" onClick={() => toggleFAQ(index)}>
                                    <h3>{index + 1}. {faq.name}</h3>
                                    <i className={`hgi hgi-stroke hgi-arrow-down-01 ${activeIndex === index ? 'active-i' : ""}`} />
                                </div>
                                <div className={`faq-content ${activeIndex === index ? 'active-content' : ""}`}>
                                    <p>{faq.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="faq-bottom">
                        <h3>Do you hold certifications and compliances for manufacturing and exporting? </h3>
                        <br />
                        <p>
                            Yes, Mahesh Carpets operates in full compliance with national and international standards for ethical manufacturing and global trade. Our practices align with key industry norms regarding labor welfare, sustainability, and export documentation. You can check our complainces here.
                        </p>
                    </div>

                </div>
            </section>

            <ContactUs />
            <Footer />
        </>
    );
}
