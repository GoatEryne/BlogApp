import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Loading from '../Spinner/Loading'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import { selectAllPosts, fetchPosts } from './postsSlice'

const PostExcerpt = ({ post }) => {
    return (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <div>
                <PostAuthor userId={post.user} />
                <TimeAgo timestamp={post.date} />
            </div>
            <p className="post-body">{post.body.substring(0, 100)}</p>
            <Link to={`${post.id}`} className="button muted-button">
                View Post
            </Link>
        </article>
    )
}

const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)

    const postStatus = useSelector((state) => state.posts.status)
    const error = useSelector((state) => state.posts.error)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let body

    if (postStatus === 'loading') {
        body = <Loading text="Loading..." />
    } else if (postStatus === 'succeeded') {
        let orderedPosts = posts
        body = orderedPosts.map((post) => (
            <PostExcerpt key={post.id} post={post} />
        ))
    } else if (postStatus === 'failed') {
        body = <div>{error}</div>
    }

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {body}
        </section>
    )
}
export default PostsList