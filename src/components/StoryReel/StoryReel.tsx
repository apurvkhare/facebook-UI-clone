import React from 'react'
import Story from './Story/Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                image='https://picsum.photos/200/300'
                profileSrc='https://picsum.photos/200/300'
                title='Ross'
            />

            <Story
                image='https://picsum.photos/200/300'
                profileSrc='https://picsum.photos/200/300'
                title='Joey'
            />

            <Story
                image='https://picsum.photos/200/300'
                profileSrc='https://picsum.photos/200/300'
                title='Chandler'
            />

            <Story
                image='https://picsum.photos/200/300'
                profileSrc='https://picsum.photos/200/300'
                title='Monica'
            />
            <Story
                image='https://picsum.photos/200/300'
                profileSrc='https://picsum.photos/200/300'
                title='Phoebe'
            />
        </div>
    )
}

export default StoryReel
