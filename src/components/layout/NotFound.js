import React from 'react'
import NotFoundImage from './NotFoundImage.png'
import AddFriend from './AddFriend'

function NotFound() {
    return (
        <div>
            <img src={NotFoundImage} alt='404' className="m-auto w-1/3" />
            <AddFriend name={'Ankit Jain'} favorite={true} />
        </div>
    )
}

export default NotFound

