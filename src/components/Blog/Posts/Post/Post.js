import React from 'react';
import Link from 'gatsby-link';

const Post = (props) => (
    <div className="Post">
        <h3>
            <Link style={{ boxShadow: 'none' }} to={props.node.fields.slug}>
                {props.title}
            </Link>
        </h3>
        <small>{props.node.frontmatter.date}</small>
        <p dangerouslySetInnerHTML={{ __html: props.node.excerpt }} />
    </div>
);

export default Post;
