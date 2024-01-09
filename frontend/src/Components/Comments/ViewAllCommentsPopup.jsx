import Styles from './ViewAllCommentsPopup.module.css'
import Comment from './Comment.jsx'
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close'
// import apiClient from '../../Services/apiClient'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { Input } from '@mui/material';
import { useAuthContext } from '../../Services/authProvider'

const comments = [
  {
    username: 'user1',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    username: 'user2',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
  const [newComment, setNewComment] = useState('')
  const { userId } = useAuthContext()
  // const [comments, setComments] = useState([])
  
  // function getPostComments(postId) {
  //   apiClient.getPostComments(postId).then(res => {
  //     setComments(res.data)
  //   });
  // }

  // getPostComments(postId)

  function handleToggle() {
    setOpen(!open)
  }

  function handleAddNewComment(event) {
    if(event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault()
      console.log('Comment ', newComment)
      // // call api to add comment
      // apiClient.addComment(userId, postId, newComment)
      setNewComment('')
    }
  }

  return (
    <div>
      <button className={Styles['view-btn']} onClick={handleToggle}>View all comments</button>
      <Dialog
        open={open}
        onClose={handleToggle}
        scroll={'paper'}
        aria-labelledby='view-all-comments-popup'
        maxWidth='md'
      >
        <DialogTitle id='view-all-comments-popup' className={Styles['dialog-text']}>
          <CloseIcon className={Styles['close-btn']} onClick={handleToggle}/>
          <div className={Styles['total-comments']}>{`${comments.length} comments`}</div>
          {/* <div className={Styles['total-comments']}>123 comments</div> */}
        </DialogTitle>
        <DialogContent className={Styles['dialog-container']}>
          {
            comments.map((comment, i) =>
              // key is temporary will replace with _id later
              <Comment key={i} username={ comment.username } comment={ comment.comment } />
            )
          }
        </DialogContent>
        <DialogActions className={Styles['add-comment-container']}>
          <Input
            className={Styles['add-comment-field']}
            placeholder='Add a comment'
            fullWidth
            multiline
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            onKeyDown={handleAddNewComment}
          />
        </DialogActions>
      </Dialog>
    </div>
  )
};

export default ViewAllCommentsPopup