import Styles from './Comment.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from 'react'

function Comment ( { username, comment } ) {
    const [like, setLike] = useState(false)

    function handleLike() {
        setLike(!like)
        // add/remove like from comment
    }

    return (
        <div>
            <div className={Styles['comments-container']}>
                <div>
                    <span><b>{username}</b> {comment}</span>
                </div>
                <div onClick={handleLike}>
                    {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </div>
            </div>
        </div>
    )
};

export default Comment