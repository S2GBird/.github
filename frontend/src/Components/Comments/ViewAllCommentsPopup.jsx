import Styles from './ViewAllCommentsPopup.module.css'
import Comment from './Comment.jsx'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

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
    const [open, setOpen] = useState(false)

    const popupContainer = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '35rem',
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: '0.5rem',
        padding: '2rem'
    }

    function handleToggle() {
        setOpen(!open)
    }

    return (
        <div>
            <button className={Styles['view-btn']} onClick={handleToggle}>View all comments</button>
            <Modal
                open={open}
                onClose={handleToggle}
            >
                <Box sx={popupContainer}>
                        <div className={Styles['text-center']}>123 comments</div>
                        {
                            comments.map((comment, i) =>
                                // key is temporary will replace with _id later
                                <Comment key={i} username={ comment.username } comment={ comment.comment } />
                            )
                        }
                        <Button onClick={handleToggle}>Close</Button>                 
                </Box>
            </Modal>
            {/* {
                open ? (
                    <div className={Styles['popup-container']}>
                        <div className={Styles['text-center']}>123 comments</div>
                        {
                            comments.map((comment, i) =>
                                // key is temporary will replace with _id later
                                <Comment key={i} username={ comment.username } comment={ comment.comment } />
                            )
                        }
                    </div>
                ) : ""
            } */}
        </div>
    )
};

export default ViewAllCommentsPopup