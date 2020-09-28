import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import axios from '../axios'
import FormData from 'form-data'

const MessageSender = () => {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (image) {
            const imgForm = new FormData()
            imgForm.append('file', image, image.name)

            axios.post('/api/upload/image', imgForm, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`,
                }
            }).then((res) => {
                console.log(res.data)

                const postData = {
                    text: input,
                    imgName: res.data.filename,
                    user: 'Sonny Sangha'
                }

                console.log(postData)

                savePost(postData)
            })
        } else {
            const postData = {
                text: input,
                user: 'Sonny Sangha'
            }

            console.log(postData)

            savePost(postData)
        }



        setImageUrl('')
        setInput('')
    }

    const savePost = async (postData) => {
        await axios.post('/api/upload/post', postData)
            .then((resp) => {
                console.log(resp)
            })
    }

    return (
        <div className='messageSender' >
            <div className="messageSender__top">
                <Avatar src='https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4' />
                <form >
                    <input type="text" className='messageSender__input' placeholder="What's on your mind?" value={input} onChange={(e) => setInput(e.target.value)} />
                    {/* <input type="text" placeholder='image URL (Optinal)' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} /> */}
                    <input type="file" onChange={handleChange} />
                    <button onClick={handleSubmit} type='submit' >Hidden Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
