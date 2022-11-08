import React from 'react';
import PrivateHook from '../../PrivateHook/PrivateHook';

const Blog = () => {
  
     PrivateHook('blog')

    return (
        <div>
                 <h1> this blog page </h1>
        </div>
    );
};

export default Blog;