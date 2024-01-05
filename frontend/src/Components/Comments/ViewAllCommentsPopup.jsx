import Styles from './ViewAllCommentsPopup.module.css'

function ViewAllCommentsPopup ( { PostId } ) {
    return (
        <div>
            <div className={Styles['text-center']}>123 comments</div>
            <div className={Styles['comments-container']} >
                <div>Username</div>
                <div>Comment</div>
            </div>
        </div>
    )
};

export default ViewAllCommentsPopup