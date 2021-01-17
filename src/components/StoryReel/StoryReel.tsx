import React from 'react'
import Story from './Story/Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                image='https://images.immediate.co.uk/production/volatile/sites/3/2018/05/IRON-2008-d7a2706.jpg?quality=90&resize=768,574'
                profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlicYORGJkOifbgyqpA5uweR31pG13Aqh-Pw&usqp=CAU'
                title='Tony Stark'
            />

            <Story
                image='https://timesofindia.indiatimes.com/thumb/msid-71273471,width-1200,height-900,resizemode-4/.jpg'
                profileSrc='https://d2j1wkp1bavyfs.cloudfront.net/wp-content/legacy/posts/67428683-c017-41ac-8fdf-c41fdcb39a0c.jpg'
                title='Steve Rogers'
            />

            <Story
                image='https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/05/14/Pictures/_eac2484e-95c6-11ea-a968-2ed746e9a968.jpg'
                profileSrc='https://i.pinimg.com/originals/a3/f2/a3/a3f2a3112b94c39e4fb6a50d2295963c.jpg'
                title='Bruce Banner'
            />

            <Story
                image='https://static.toiimg.com/photo/msid-75390440/75390440.jpg?344550'
                profileSrc='https://www.screengeek.net/wp-content/uploads/2019/10/thanos.jpg'
                title='Thanos'
            />
            <Story
                image='https://newsorb360.com/wp-content/uploads/2020/04/Thor-Marvel-NewsORB360-822x1024.jpg'
                profileSrc='https://image.cnbcfm.com/api/v1/image/104819285-thor.jpg?v=1529476684'
                title='Thor'
            />
        </div>
    )
}

export default StoryReel
