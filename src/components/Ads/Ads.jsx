'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Ads() {
    const [isAdsOpen, setIsAdsOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAdsOpen(true)
        }, 1700)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={`ads-container ${isAdsOpen ? "active-ads-container" : ""} `}>
            <div className={`ads-wraper ${isAdsOpen ? 'active-ads' : ''}`}>
                <Image src='/images/ads-2.jpeg' alt='Ads' width={400} height={500} />
                <div className="ads-close-btn" onClick={()=>setIsAdsOpen(false)}>
                    <i className="hgi hgi-stroke hgi-cancel-01"></i>
                </div>
            </div>
        </div>
    )
}
