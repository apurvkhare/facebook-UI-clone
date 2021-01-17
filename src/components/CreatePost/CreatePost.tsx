import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './CreatePost.css'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from '../../StateProvider'
import db from '../../firebase'
import firebase from 'firebase'

const CreatePost = () => {
    const [{ user }] = useStateValue()

    const [input, setInput] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imgUrl,
        })

        setImgUrl('')
        setInput('')
    }

    return (
        <div className='createPost'>
            <div className='createPost__top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type='text'
                        placeholder={`What's on your mind, ${user.displayName}?`}
                        className='createPost__input'
                    />
                    <input
                        value={imgUrl}
                        onChange={e => setImgUrl(e.target.value)}
                        type='text'
                        placeholder='Image URL (optional)'
                    />
                    <button onClick={handleSubmit} type='submit'>
                        Hidden button
                    </button>
                </form>
            </div>
            <div className='createPost__bottom'>
                <div className='createPost__option'>
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>

                <div className='createPost__option'>
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className='createPost__option'>
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
