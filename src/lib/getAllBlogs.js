import axios from "axios";

export async function getAllBlogs() {
  const res = await axios.get("/api/get-blogs");
    if (res.status !== 200) {
        throw new Error("Failed to fetch blogs");
    }
    console.log(res.data);
  return res.data;
}
