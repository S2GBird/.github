import Styles from './ViewAllCommentsPopup.module.css'
import Comment from './Comment.jsx'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'
import apiClient from '../../Services/apiClient'

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

function ViewAllCommentsPopup ( { postId } ) {
  const [open, setOpen] = useState(false)
  // const [comments, setComments] = useState([])
  
  // function getPostComments(postId) {
  //   apiClient.getPostComments(postId).then(res => {
  //     setComments(res.data)
  //   });
  // }

  // getPostComments(user.userId)

  const popupContainer = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '35rem',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '0.5rem',
    padding: '1.5rem'
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
        aria-labelledby="view-all-comments-popup"
      >
        <Box sx={popupContainer}>
          <CloseIcon className={Styles['close-modal-btn']} onClick={handleToggle}/>
          <div className={Styles['total-comments']}>123 comments</div>
          {
            comments.map((comment, i) =>
              // key is temporary will replace with _id later
              <Comment key={i} username={ comment.username } comment={ comment.comment } />
            )
          }
        </Box>
      </Modal>
    </div>
  )
};

export default ViewAllCommentsPopup