import { usePost } from "../PostContext";

const Results = () => {
    const { posts } = usePost();
    return <p>🚀 {posts.length} atomic posts found</p>;
}
export default Results