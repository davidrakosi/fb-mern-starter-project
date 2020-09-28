import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import axios from '../axios'

const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    useEffect(() => {
        axios.get('/api/retrieve/posts')
            .then((res) => {
                console.log(res.data)
                setPostsData(res.data)
            })

    }, [])


    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />

            {
                postsData.map(entry => (
                    <Post
                        message={entry.text}
                        timestamp={'this is a timestamp'}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))
            }

            {/* <Post
                porfilePic='https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4'
                message='test message'
                timestamp='this is a timestamp'
                username='Sonny Sangha'
                image='https://www-crazyfamilyadventure-com.exactdn.com/wp-content/uploads/2018/10/Big-Sur-feature-resized-image.jpg'
            />
            <Post
                porfilePic='https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4'
                message='test message'
                timestamp='this is a timestamp'
                username='Sonny Sangha'
                image='https://www-crazyfamilyadventure-com.exactdn.com/wp-content/uploads/2018/10/Big-Sur-feature-resized-image.jpg'
            />
            <Post
                porfilePic='https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4'
                message='test message'
                timestamp='this is a timestamp'
                username='Sonny Sangha'
                image='https://www-crazyfamilyadventure-com.exactdn.com/wp-content/uploads/2018/10/Big-Sur-feature-resized-image.jpg'
            /> */}

        </div>
    )
}

export default Feed
