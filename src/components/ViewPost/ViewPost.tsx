import { Avatar } from '@material-ui/core'
import './ViewPost.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { ExpandMoreOutlined } from '@material-ui/icons'

export interface ViewPostProps {
    profilePic: string
    image: string
    username: string
    timestamp: any
    message: string
}

const ViewPost: React.FC<ViewPostProps> = ({
    profilePic,
    image,
    username,
    timestamp,
    message,
}) => {

    return (
        <div className='viewPost'>
            <div className='viewPost__top'>
                <Avatar src={profilePic} className='viewPost__avatar' />
                <div className='viewPost__topInfo'>
                    <h3> {username} </h3>
                    <p>
                        {' '}
                        {new Date(
                            timestamp?.toDate()
                        ).toLocaleTimeString()}{' '}
                    </p>
                </div>
            </div>
            <div className='viewPost__bottom'>
                <p> {message} </p>
            </div>

            <div className='viewPost__image'>
                <img src={image} alt='' />
            </div>

            <div className='viewPost__options'>
                <div className='viewPost__option'>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>

                <div className='viewPost__option'>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>

                <div className='viewPost__option'>
                    <NearMeIcon />
                    <p>Share</p>
                </div>

                <div className='viewPost__option'>
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default ViewPost
