import Styles from './Comment.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useEffect, useState } from 'react'

function Comment ( { username, comment, likes } ) {
  const [like, setLike] = useState(false)
  const [commentLikes, setCommentLikes] = useState(likes)

  function handleLike() {
    updateLikes(!like)
    setLike(!like)
  }

  function updateLikes (like) {
    // make call to backend to add or remove like from comment
    // likes dont persist currently so that will have to be fixed later on
    // need something to check if the comment is liked by the current user already
    if (like) {
      setCommentLikes(commentLikes + 1)
    }
    else {
      setCommentLikes(commentLikes - 1)
    }
    console.log(commentLikes)
  }

  return (
    <div>
      <div className={Styles['comments-container']}>
        <div>
          <span><b>{username}</b> {comment}</span>
        </div>
        <div className={Styles['likes-container']}>
          <div className={Styles['likes']}>{commentLikes === 0 ? '' : commentLikes}</div>
          <div onClick={handleLike}>
            {like === true ? <FavoriteIcon style={{color: 'red'}} /> : <FavoriteBorderIcon />}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Comment