import React, { useContext } from 'react'
import FriendContext from '../context/friendContext';
import { MdAdd } from 'react-icons/md'

function AddFriend({ name }) {

    const friendContext = useContext(FriendContext);

    const onClick = () => {
        friendContext.addFriend(name)
        friendContext.updateTotalPages();
    }

    return (
        <div className="border rounded-lg border-gray-300 p-1 mx-20 my-5" >
            <div className="flex flex-auto justify-center items-center my-2">
                <div className="text-left w-9/12">
                    <h3 className="capitalize font-medium">{name}</h3>
                    <h3 className="font-light">is not your friend.</h3>
                    <h3 className="font-light">Do you want to add ?</h3>
                </div>
                <span className="cursor-pointer" onClick={onClick}><MdAdd size='2em' /></span>
            </div>

        </div>
    )
}

export default AddFriend
