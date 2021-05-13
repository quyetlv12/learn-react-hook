import React from 'react';
import PropTypes from 'prop-types';

PostsList.propTypes = {
    posts : PropTypes.array,
};
PostsList.defaultProps = {
    posts : []
}
function PostsList(props) {
    const {posts} = props
    return (
        <div>
            <ul>
                {posts.map(post=>(
                    <li key={post._id} data-id={post._id}>{post.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostsList;