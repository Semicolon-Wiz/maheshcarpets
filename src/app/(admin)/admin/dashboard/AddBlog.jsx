'use client';

import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('@toast-ui/react-editor').then((mod) => mod.Editor), { ssr: false });
import '@toast-ui/editor/dist/toastui-editor.css';
import { useEffect, useRef } from 'react';
import FormLoader from '@/components/FormLoader/FormLoader';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';

export default function AddBlog({ blogData, setBlogData, disableBtn, setDisableBtn, error, setError, loading, setLoading }) {
  const editorRef = useRef();
  const imageref = useRef();
  const titleRef = useRef();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBlogData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  useEffect(() => {
    if (blogData.title && blogData.metaTitle && blogData.metaDescription && blogData.image) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [blogData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const content = editorRef.current?.getInstance().getHTML();
    const markdownContent = editorRef.current?.getInstance().getMarkdown();

    const formData = new FormData();
    formData.append("blogId", blogData?.blogId || null)
    formData.append('title', blogData.title);
    formData.append('metaTitle', blogData.metaTitle);
    formData.append('metaDescription', blogData.metaDescription);
    formData.append('content', content);
    formData.append('markdownContent', markdownContent);
    if (blogData.image) {
      formData.append('image', blogData.image);
    }

    await toast.promise(
      axios.post("/api/post-blogs", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
        .then((response) => {
          console.log("Blog Posted Successfully", response.data);
          if (response.data.success) {
            setBlogData({
              title: "",
              metaTitle: "",
              metaDescription: "",
              image: null,
            });
            imageref.current.value = '';
            editorRef.current?.getInstance().setMarkdown("");
            titleRef.current.focus(); 
            setError('');
          }
        }),
      {
        loading: "Publishing Blog...",
        success: "Blog Posted Successfully!",
        error: "Failed to Post Blog.",
      }
    );

    setLoading(false);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setBlogData({
      title: "",
      metaTitle: "",
      metaDescription: "",
      image: null,
    });
    imageref.current.value = '';
    editorRef.current?.getInstance().setMarkdown("");
    titleRef.current.focus(); // Focus back on title input
  };

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section className='write-blog-container'>
      <h2>Start Writing Your Blogs.👇</h2>
      <div className="write-blog-header">
        <div className="write-blog-input-container">
          <label htmlFor="title">Blog Title <span>*</span></label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Your blog title"
            value={blogData.title}
            onChange={handleChange}
            ref={titleRef}
          />
        </div>
        <div className="write-blog-input-container">
          <label htmlFor="blogImg">Blog Image<span>*</span></label>
          <input
            type="file"
            name="image"
            id="blogImg"
            ref={imageref}
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <div className="write-blog-input-container">
          <label htmlFor="metaTitle">Meta Title <span>*</span></label>
          <input
            type="text"
            name="metaTitle"
            id="metaTitle"
            placeholder="Blog Meta Title"
            value={blogData.metaTitle}
            onChange={handleChange}
          />
        </div>
        <div className="write-blog-input-container">
          <label htmlFor="metaDesc">Meta Description <span>*</span></label>
          <textarea
            name="metaDescription"
            id="metaDesc"
            placeholder="Meta Description..."
            rows={5}
            value={blogData.metaDescription}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="write-blog-content">
        {typeof window !== 'undefined' && (
          <Editor
            previewStyle="vertical"
            height="500px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            ref={editorRef}
            initialValue={blogData?.content ? blogData?.content : ('Start Writing Your Blog Here...')}
            placeholder='Start Writing Your Blog Here...'
          />
        )}
      </div>
      <div className="write-blog-footer">
        <button
          type="reset"
          onClick={handleReset}
          disabled={loading}
        >
          Reset
        </button>
        <button
          onClick={handleSubmit}
          disabled={disableBtn || loading}
          style={{ cursor: disableBtn ? 'not-allowed' : 'pointer' }}
        >
          {loading ? <FormLoader /> : "Submit"}
        </button>
      </div>
      <Toaster />
    </section>
  );
}
