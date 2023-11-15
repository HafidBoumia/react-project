import React, {useState, useEffect} from 'react';
import axios from 'axios';

function ShowPosts() {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    const handlePosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
    };

    const handleComments = (postId) => {
        axios.get('https://jsonplaceholder.typicode.com/comments/?postId='+ postId)
            .then(response => {
                setComments(response.data);
            })
    };
    const hideComments = (postId) =>{
        setComments([])
    }
    useEffect(() => {
        handlePosts()
    });
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <div className='grid grid-cols-12 my-2 mx-5 bg-stone-400 py-7 px-4 rounded-lg shadow-xl shadow-zinc-700 hover:h-52 hover:my-5 hover:bg-sky-400'>
                        <img className='mt-1' src="https://cdn-icons-png.flaticon.com/128/3024/3024605.png" alt="User " width="47" height="52"/>
                        <div className='flex flex-col col-span-11'>
                            <p className='mb-1'><span className='text-lg font-medium text-blue-800'>Title : </span>{post.title}</p>
                            <p><span className='text-lg font-medium text-blue-800'>Content : </span>{post.body}</p>
                        </div>
                        <div className='flex flex-row space-x-3'>
                            <button className='border-2 border-sky hover:border-sky-700 py-2 px-4 rounded-lg ml-24 my-2 bg-slate-200' onClick={() => handleComments(post.id)}>Show_Comments</button>
                            <button className='border-2 border-sky hover:border-sky-700 py-2  px-4 rounded-lg ml-24 my-2 bg-slate-200' onClick={() => hideComments(post.id)}>Hide_Comments</button>
                        </div>
                    </div>
                    {comments.filter(result => result.postId === post.id)
                    .map(comment => (
                            <div key={comment.id}>
                                <div className='grid grid-cols-12 my-2 mx-5 bg-stone-400 py-7 px-4 rounded-lg shadow-xl shadow-zinc-700 hover:h-52 hover:my-5 hover:bg-sky-400'>
                                <img className='mt-1' src=" https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="User " width="37" height="52"/>
                                <div className='flex flex-col col-span-11'>
                                <p><span className='text-lg font-medium text-blue-800'>User name :</span>{comment.name}</p>
                                <p><span className='text-lg font-medium text-blue-800'>User email :</span>{comment.email}</p>
                                <p><span className='text-lg font-medium text-blue-800'>Comment :</span>{comment.body}</p>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            ))}
        </div>
    );
}
export default ShowPosts;
