import React from 'react'
import { useState } from 'react'
import Modal from '../CreatePost/CreatePost'
import CreatePoststyles from '../CreatePost/CreatePost.module.css'

function Post() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className={CreatePoststyles['text-center']}>
            <h3>Click to create new post.</h3>
            <button
                className={CreatePoststyles['modalBtn']}
                onClick={() => {
                    setOpenModal(true)
                }}
            >New Post
            </button>
            {openModal && <Modal closeModal={setOpenModal} />}
        </div>
    )
}

export default Post
