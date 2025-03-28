'use client'
import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import Blogs from './Blogs'
import AddBlog from './AddBlog'
import Image from 'next/image'
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";


export default function Tabs() {
    const tabConfig = [
        {
            tabName: "Dashboard",
            tabComponent: Dashboard,
            tabIcon: "hgi hgi-stroke hgi-dashboard-square-03",
        },
        {
            tabName: "Blogs",
            tabComponent: Blogs,
            tabIcon: "hgi hgi-stroke hgi-file-01",
        },
        {
            tabName: "Add Blog",
            tabComponent: AddBlog,
            tabIcon: "hgi hgi-stroke hgi-license-draft",
        }
    ]
    const [selectedTab, setSelectedTab] = useState(0)
    const ActiveTab = tabConfig[selectedTab].tabComponent
    const [collapseMenu, setCollapseMenu] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [disableBtn, setDisableBtn] = useState(true)
    const [blogData, setBlogData] = useState({
        blogId:"",
        title: "",
        content: "",
        image: "",
        metaTitle: "",
        metaDescription: "",
    })
    const [blog, setBlog] = useState([])
    const [totalVisit, setTotalVisit] = useState(0);
    const [totalBlogs, setTotalBlogs] = useState(0);
    const [updateBtnClicked, setUpdateBtnClicked] = useState(null)

    async function handleLogOut() {
        toast.promise(
            axios
                .post("/api/logout", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    // console.log("Admin Login Successfully", response);
                    window.location.reload();
                })
                .catch((error) => {
                    console.log("Login Failed :- ", error.response.data.message);
                    throw error;
                }),
            {
                loading: "Logging Out...",
                success: "Admin Log-Out Successful",
                error: "Error while login. Please try again.",
            }
        );
    }

    async function fetchBlogs() {
        setLoading(true)
        try {
            const res = await axios.get('/api/get-blogs')
            setBlog(res.data)
            setTotalBlogs(res.data.length)
        } catch (error) {
            console.error("Error fetching blogs:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBlogs()
    }, [selectedTab === 1])

    useEffect(() => {
        setLoading(true)
        async function fetchTotalVisit() {
            try {
                const res = await axios.get('/api/total-visits')
                setTotalVisit(res.data.totalVisits)
                const ress = await axios.get('/api/get-blogs')
                setTotalBlogs(ress.data.data.length)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching total visit:", error)
                setLoading(false)
            }
        }
        fetchTotalVisit()
    }, [])

    async function handleDelete(blogId) {
        toast.promise(
            axios
                .delete(`/api/delete-blog?id=${blogId}`)
                .then((response) => {
                    fetchBlogs()
                })
                .catch((error) => {
                    console.log("Error while deleting this blog :- ", error.response.data.message);
                    throw error;
                }),
            {
                loading: "Deleting Blog Please wait...",
                success: "Blog deleted successfully",
                error: "Error while deleting this blog. Please try again.",
            }
        );
    }

    async function handleUpdateBlog(blogId, idx) {
        setUpdateBtnClicked(idx)
        try {
            const res = await axios.get(`/api/single-blog/${blogId}`);
            const updBlogData = res.data.data
            
            setBlogData({
                blogId:updBlogData.blog_id,
                title:updBlogData.blog_title,
                image:updBlogData.blog_img,
                content:updBlogData.blog_content,
                metaTitle:updBlogData.blog_title,
                metaDescription:updBlogData.blog_title,
            })
            setUpdateBtnClicked(false)
            setSelectedTab(2)
        } catch (err) {
            console.error("Error fetching blog:", err);
            setError(err.response?.data?.message || "Failed to load blog");
        } finally {
            setUpdateBtnClicked(false);
        }
    }

    return (
        <div className="dashboard-wraper">
            <aside className={`aside-bar ${collapseMenu ? 'collapse-menu' : "opn-menu"} `}>
                <div className="aside-bar-container">
                    <div className="aside-logo-container">
                        {/* <span>Mahesh Carpets</span> */}
                        <Image src='/images/logo/logo-01.jpeg' width={200} height={100} alt='logo' />
                    </div>
                    <div className="aside-tabs-container">
                        {
                            tabConfig.map((tabs, idx) => (
                                <div
                                    className={`aside-tabs ${selectedTab === idx ? 'active-tab' : ""}`}
                                    key={idx}
                                    onClick={() => setSelectedTab(idx)}
                                >
                                    <i className={tabs.tabIcon}></i>
                                    <span>
                                        {tabs.tabName}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="aside-collapse-btn-container" onClick={() => setCollapseMenu(!collapseMenu)}>
                        <i className="hgi hgi-stroke hgi-arrow-left-01"></i>
                    </div>
                </div>
            </aside>
            <section className='main-content'>
                <div className="main-wraper">
                    <div className="main-content-header">
                        <div className="main-content-header-wraper">
                            <div className="content-tab-name">
                                <h1>{tabConfig[selectedTab].tabName}</h1>
                            </div>
                            <div className="content-other-icons">
                                <div className="content-icon-wraper">
                                    <div className="content-icons">
                                        <i className="hgi hgi-stroke hgi-user"></i>
                                        <span>Mahesh Carpets</span>
                                    </div>
                                    <div className="content-icons" onClick={handleLogOut}>
                                        <i className="hgi hgi-stroke hgi-logout-03"></i>
                                        <span>Logout</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-content-body">
                        <ActiveTab
                            blogData={blogData}
                            setBlogData={setBlogData}
                            loading={loading}
                            setLoading={setLoading}
                            error={error}
                            setError={setError}
                            disableBtn={disableBtn}
                            setDisableBtn={setDisableBtn}
                            blog={blog}
                            setBlog={setBlog}
                            totalBlogs={totalBlogs}
                            totalVisit={totalVisit}
                            deleteBlog={handleDelete}
                            updateBlog={handleUpdateBlog}
                            updateBtnClicked={updateBtnClicked}
                        />
                    </div>
                </div>
            </section>
            <Toaster />
        </div>
    )
}
