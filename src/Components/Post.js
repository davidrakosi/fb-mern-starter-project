import { Avatar } from '@material-ui/core'
import React, { Profiler, useEffect, useState } from 'react'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import AccountCircleIclon from '@material-ui/icons/AccountCircle'
import axios from '../axios'

const Post = ({ porfilePic, imgName, username, timestamp, message }) => {
    const [image, setImage] = useState(null)
    
    return (
        <div className='post' >
            <div className="post__top">
                <Avatar src={porfilePic} className='post__avatar' />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                    <p>timestamp</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>

            {
                imgName ? (
                    <div className="post__image">
                        <img src={`http://localhost:9000/api/retrieve/images/single?name=${imgName}`} />
                    </div>
                ) : (
                        console.log('DEBUG >>> no image here')
                    )
            }

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIclon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post
