import axios from 'axios';
import BlogContent from './BlogContent';

export default async function page({ params }) {
  const { blogId } = await params;

  return (
    <BlogContent blogId={blogId} />
  )
}

export async function generateMetadata({ params }) {
  const { blogId } = await params;

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/single-blog/${blogId}`);
    const blog = response.data.data;
    
    return {
      title: `${blog.metaTitle}`,
      description:`${blog.metaDesc}`
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);

    return {
      title: 'Blog Not Found',
    };
  }
}