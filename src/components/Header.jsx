import SearchPosts from "./SearchPosts";
import Results from "./Results";
import { usePost } from "../PostContext";

const Header = () => {
  const { onClearPost} = usePost();
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPost}>Clear posts</button>
      </div>
    </header>
  );
};
export default Header;
