import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  
  function likeButton() {
    if (!liked) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }


  return (
    <div className='heart'>
      <Heart
        id='heart'
        size={200}
        onClick={likeButton}
        color={liked ? '#ff0000' : '#ffffff'}
        style={{ cursor: 'pointer' }}
      />

    </div>
  );
};

export default LikeButton;
