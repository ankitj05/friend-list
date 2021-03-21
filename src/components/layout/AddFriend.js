import React, { useContext } from 'react'
import FriendContext from '../../context/friendContext';
import { CgAdd, CgCloseO } from 'react-icons/cg'

function AddFriend({ name, clearName, favorite = false }) {

    const friendContext = useContext(FriendContext);
    const {
        addFriend,
        updateTotalPages,
        resetSearch
    } = friendContext;

    const onAddHandler = () => {
        addFriend(name, favorite)
        if (typeof clearName === 'function') clearName();
        updateTotalPages();
    }

    const onClearHandler = () => {
        resetSearch();
        if (typeof clearName === 'function') clearName();
        updateTotalPages();
    }

    return (
        <div className="flex justify-center items-center border border-black rounded-lg min-w-max max-w-max px-4 py-2 m-auto my-2">
            <div className="text-left w-52 md:w-64">
                <h3 className="capitalize font-medium">{name}</h3>
                <h3 className="font-light">is not on your friend list.</h3>
                <h3 className="font-light">Do you want to add ?</h3>
            </div>
            <div className="flex space-x-3">
                <span className="cursor-pointer" onClick={onAddHandler}><CgAdd size='2.1em' /></span>
                <span className="cursor-pointer" onClick={onClearHandler}><CgCloseO size='2em' /></span>
            </div>
        </div>
    )
}

export default AddFriend