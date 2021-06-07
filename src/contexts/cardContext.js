import React, { useState } from 'react';

export const CardContext = React.createContext();

// export const useCard = useContext(cardContext);

export default function CardContextProvider(props) {
    const [posts, setPosts] = useState([]);

    const deletePost = (postId = '') => {
        let tempArr = [];
        tempArr = posts.filter((post) => post.id !== postId);
        setPosts(tempArr);
        tempArr = null; //unsetting variable for performance
    }

    const addPost = (data) => {
        setPosts([...posts, data])
    }

    const updatePost = (postId, data) => {
        let tempArr = posts;
        tempArr.forEach((post, index) => {
            if (post.id === postId) {
                tempArr.splice(index, 1, data);
            }
        })
        setPosts(tempArr);
        tempArr = null;
    }

    const initializeState = (initialValue = []) => {
        setPosts(initialValue)
    }

    const values = {
        posts,
        addPost,
        updatePost,
        deletePost,
        initializeState
    }

    return (<CardContext.Provider value={values}>
        {props.children}
    </CardContext.Provider>)
}