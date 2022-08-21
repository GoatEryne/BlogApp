import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';

const PostsExcerpt = ({ post }) => {
    return (
        <article>
            <h2>{post.title}</h2>
            <p className="excerpt">{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
                <button className="Btn1">
                <Link to={`post/${post.id}`} style={{ textDecoration: 'none' }}>View Post</Link>
                </button>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}
export default PostsExcerpt