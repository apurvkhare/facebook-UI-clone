import React, { useEffect, useState } from 'react'
import db from '../../firebase'
import CreatePost from '../CreatePost/CreatePost'
import StoryReel from '../StoryReel/StoryReel'
import ViewPost from '../ViewPost/ViewPost'
import './Feed.css'

const Feed = () => {
    const [posts, setPosts] = useState<any[]>([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot =>
            setPosts(
                snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))
            )
        )
    }, [])

    return (
        <div className='feed'>
            <StoryReel />
            <CreatePost />
            {posts &&
                posts.map(post => (
                    <ViewPost
                        key={post.data.id}
                        profilePic={post.data.profilePic}
                        username={post.data.username}
                        timestamp={post.data.timestamp}
                        image={post.data.image}
                        message={post.data.message}
                    />
                ))}
        </div>
    )
}

export default Feed
