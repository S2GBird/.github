import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { TextField } from '@mui/material'
import CreatePoststyles from '../CreatePost/CreatePost.module.css'

function CreatePost(props) {
    const [caption, setCaption] = useState('')
    const [img, setImg] = useState('')
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='xl'
            >
                <Modal.Header closeButton>
                    <Modal.Title>New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                        id='editmodal'

                    >
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-2/3">
                            <TextField style={{ width: '75%', height: '15%' }}
                             label='Caption' variant='filled' value={caption} onChange={(event) => setCaption(event.target.value)} />
                            </div>
                        </div>
                        <br />
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label>Image</label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    type="file" value={img} onChange={(e) => setImg(e.target.files[0])}                                
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="bg-slate-400 text-black font-bold py-2 px-4 rounded" onClick={handleClose}>
                        Cancel
                    </button>
                    <button 
                        className="bg-slate-400 text-black font-bold py-2 px-4 rounded" 
                        onClick={handleClose}
                        form='editmodal'
                    >
                            Post        
                    </button>
                </Modal.Footer>
            </Modal>
        </>
  );
}

export default CreatePost;
