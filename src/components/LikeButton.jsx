import React, { useState } from 'react';

function LikeButton(){
    const [likes, setLikes] = useState(0);

    const incrementLikes = () => {
        setLikes(likes + 1)
    }
     

    return(
        <div className='Likes'>

            <button type='button' onClick={incrementLikes}> 
            {likes} Likes 
            </button>

        </div>
    );
}

export default LikeButton;