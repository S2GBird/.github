import Styles from './ViewAllCommentsPopup.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Comment from './Comment.jsx'

const comments = [
    {
        username: 'user1',
        comment: 'comment1'
    },
    {
        username: 'user2',
        comment: 'comment2'
    },
    {
        username: 'user3',
        comment: 'comment3'
    },
    {
        username: 'user4',
        comment: 'comment4'
    },
    {
        username: 'user5',
        comment: 'comment5'
    },
    {
        username: 'user1',
        comment: 'comment1'
    },
    {
        username: 'user2',
        comment: 'comment2'
    },
    {
        username: 'user3',
        comment: 'comment3'
    },
    {
        username: 'user4',
        comment: 'comment4'
    },
    {
        username: 'user5',
        comment: 'comment5'
    },
    {
        username: 'user1',
        comment: 'comment1'
    },
    {
        username: 'user2',
        comment: 'comment2'
    },
    {
        username: 'user3',
        comment: 'comment3'
    },
    {
        username: 'user4',
        comment: 'comment4'
    },
    {
        username: 'user5',
        comment: 'comment5'
    }
]

function ViewAllCommentsPopup ( { PostId } ) {

    return (
        <div>
            <div className={Styles['text-center']}>123 comments</div>
            {
                comments.map((comment) =>
                    // <div className={Styles['comments-container']} >
                    //     <div>{comment.username}</div>
                    //     <div>{comment.comment}</div>
                    // </div>
                    <Comment username={comment.username }comment={comment.comment} />
                )
            }
            
        </div>
    )
};

export default ViewAllCommentsPopup