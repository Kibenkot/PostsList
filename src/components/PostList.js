import React, { useEffect } from 'react'
import s from './PostList.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { addComment, addNewPost, removeComment, removePost } from '../store/postlistSlice';
import {AiOutlineCloseSquare} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'



function PostList() {
    const dispatch = useDispatch()
    const posts = useSelector(store => store.posts)
    const post = useSelector(store => store.posts.postList);
    const comment = useSelector(store => store.posts.commentList);
    console.log('post---', post);
    console.log('comment----', comment);


    const handelComments =(e, postId) =>{
        if(e.key === 'Enter'){
            dispatch(addComment({postId, message:e.target.value}))
            e.target.value = ''
        }
    }
    
    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
    }, [posts])


  return (
    <div className='container'>
        <div className={s.container_title_post}>
            <h1>List of the posts:</h1>
            <button 
                className={s.button}
                onClick={() => dispatch(addNewPost(prompt()))}
            >
                Add a new post topic
            </button>
        </div>
        {post.map(el =>
           <div 
                className={s.container_post_comments}
                key={el.id}>
            <div className={s.title_close}>
                <h2>{el.title}</h2>
                <AiOutlineCloseCircle 
                    className={s.close_all_post}
                    onClick={() => dispatch(removePost(el.postId))}
                />
            </div>
            <input 
                className={s.input}
                onKeyDown={(e) => handelComments(e, el.postId)}
                placeholder='Enter a comment'
            />
            {
                comment
                    .filter(elem => elem.postId === el.postId)
                    .map(elem =>
                        <div 
                            className={s.comment}
                            key={elem.id}>
                            <p>{elem.message}</p>    
                            <div>
                                <AiOutlineCloseSquare 
                                    onClick={() => dispatch(removeComment(elem.commentId))} 
                                    className={s.close}
                                    />
                            </div>
                        </div>
                        )
            }
           </div> 
            )}
    </div>
  )
}

export default PostList