import React from 'react';

const PostDetailsDisplay = (props) => {
    const {name,body}=props.commemts;
    return ( 
        <>
          <h4>{name}</h4>
            <h5>{body}</h5>  
        </>
    );
};

export default PostDetailsDisplay;