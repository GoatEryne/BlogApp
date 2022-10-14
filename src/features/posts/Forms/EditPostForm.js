import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { postUpdated, selectPostById } from '../postsSlice'

const EditPostForm = ({ match }) => {
    const { postId } = match.params

    const post = useSelector((state) => selectPostById(state, postId))

    const [title, setTitle] = useState(post.title)
    const [body, setBody] = useState(post.body)

    const dispatch = useDispatch()
    const history = useNavigate()

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onBodyChanged = (e) => setBody(e.target.value)

    const onSavePostClicked = () => {
        if (title && body) {
            dispatch(postUpdated({ id: postId, title, body }))
            history.push(`/posts/${postId}`)
        }
    }

    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="What's on your mind?"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postBody">Content:</label>
                <textarea
                    id="postBody"
                    name="postBody"
                    value={body}
                    onChange={onBodyChanged}
                />
            </form>
            <button type="button" onClick={onSavePostClicked}>
                Save Post
            </button>
        </section>
    )
}
export default EditPostForm