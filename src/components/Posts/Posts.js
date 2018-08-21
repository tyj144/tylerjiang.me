import React from 'react';
import Link from 'gatsby-link'
import get from 'lodash/get';

const Posts = (props) => (
    <div className="Posts">
        {props.posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
            <div key={node.fields.slug}>
                <h3
                style={{
                }}
                >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
            )
        })}
    </div>
);

export default Posts;
