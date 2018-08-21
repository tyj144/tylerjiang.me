import React from 'react';
import get from 'lodash/get';
import Post from './Post/Post';

const Posts = (props) => (
    <div className="Posts">
        {props.posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
                <Post title={title} node={node} key={node.fields.slug} />
            )
        })}
    </div>
);

export default Posts;
