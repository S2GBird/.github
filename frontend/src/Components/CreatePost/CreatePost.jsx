import { useRef, useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import CreatePoststyles from './CreatePost.module.css'

function Modal({ closeModal }) {
    const [image, setImage] = useState(false)
    const [preview, setPreview] = useState(false)
    const fileInputRef = useRef(false)

    const [caption, setCaption] = useState('')


    useEffect(() => {
        if (image) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(image)
        } else {
            setPreview(null)
        }
    }, [image])

    return (
         <div className={CreatePoststyles['overlay']}>
            <div className={CreatePoststyles['modalContainer']}>
                <div className={CreatePoststyles['closeBtn']}>
                    <button onClick={() => closeModal(false)}>x</button>
                </div>
                <div className={CreatePoststyles['title']}>
                    <h3>New Post</h3>
                </div>
                <div>
                    <form className={CreatePoststyles['login-form']} >
                        <div className={CreatePoststyles['img-holder']}>
                            { preview ? (
                                <img src={preview} onClick={() => {
                                    setImage(null)
                                }} /> 
                            ) : ( 
                                <button onClick={(event) => {
                                    event.preventDefault()
                                    fileInputRef.current.click()
                                }}>
                                    Upload Image
                                </button> 
                            )}
                            <input 
                                type='file' 
                                name='image-upload' 
                                id='input' 
                                accept='image/*' 
                                style={{ display: 'none' }} 
                                ref={fileInputRef}
                                onChange={(event) => {
                                    const file = event.target.files[0]
                                    if (file && file.type.substring(0, 5) == 'image') {
                                        setImage(file)
                                    } else {
                                        setImage(null)
                                    }
                                }} />
                        </div>
                        <p>Click image to deselect.</p>
                        <TextField 
                            style={{ width: '75%', height: '15%' }} 
                            id='filled-basic caption' 
                            label='Caption' 
                            variant='filled'
                            value={caption} onChange={(event) => setCaption(event.target.value)} />
                    </form>
                </div>
                <div className={CreatePoststyles['btnContainer']}>
                    <button className={CreatePoststyles['cancelBtn']} onClick={() => closeModal(false)}>Cancel</button>
                    <button className={CreatePoststyles['postBtn']}>Post</button>
                </div>
            </div>
        </div>         
    )
}

export default Modal;
