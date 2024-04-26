import { useContext } from "react";
import { PostContext } from "../App";
import SearchPosts from "./SearchPosts";
import Results from "./Results";

const Header = () => {
  const { onClearPost} = useContext(PostContext);
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
