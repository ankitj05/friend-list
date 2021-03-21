import React, { useContext } from 'react'
import FriendContext from '../../context/friendContext';
import { MdAdd, MdClear } from 'react-icons/md'

function AddFriend({ name, clearName, favorite = false }) {

    const friendContext = useContext(FriendContext);
    const {
        addFriend,
        updateTotalPages,
        resetSearch
    } = friendContext;

    const onAdd = () => {
        addFriend(name, favorite)
        if (typeof clearName === 'function') clearName();
        updateTotalPages();
    }

    const onClear = () => {
        resetSearch();
        clearName();
        updateTotalPages();
    }

    return (
        <div className="flex justify-center items-center border border-black rounded-lg min-w-max max-w-max px-4 py-2 m-auto my-2">
            <div className="text-left w-52 md:w-64">
                <h3 className="capitalize font-medium">{name}</h3>
                <h3 className="font-light">is not on your friend list.</h3>
                <h3 className="font-light">Do you want to add ?</h3>
            </div>
            <span className="cursor-pointer" onClick={onAdd}><MdAdd size='2em' /></span>
            <span className="cursor-pointer" onClick={onClear}><MdClear size='2em' /></span>
        </div>
    )
}

export default AddFriend
