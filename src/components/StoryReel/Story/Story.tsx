import { Avatar } from '@material-ui/core'
import { url } from 'inspector'
import React from 'react'
import './Story.css'

export interface StoryProps {
    image: string
    profileSrc: string
    title: string
}

const Story: React.FC<StoryProps> = ({ image, profileSrc, title }) => {
    return (
        <div className='story' style={{ backgroundImage: `url(${image})` }}>
            <Avatar className="story__avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
