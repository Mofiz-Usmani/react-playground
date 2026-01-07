import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  function likeButton() {
    if (!liked) {
      setLiked(true);
      setCount(count + 1);
    } else {
      setLiked(false);
      setCount(count - 1);
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
