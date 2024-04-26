import { createContext } from "react";

const PostContext = createContext();

function PostProvider({children}){
    return (
        <PostContext.Provider>{children}</PostContext.Provider>
    )
}