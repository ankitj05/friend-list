import React, { useContext } from 'react'
import { MdStarBorder, MdDelete, MdStar } from 'react-icons/md'
import FriendContext from '../../context/friendContext';

function ListItem({ friend }) {

    const friendContext = useContext(FriendContext);

    const { toggleFavouriteFriend, deleteFriend, isSorted, sortFriendsByFavourites, updateTotalPages } = friendContext;

    const favorite = () => {
        toggleFavouriteFriend(friend.id);
        if (isSorted) sortFriendsByFavourites();
    }

    const toDeleteFriend = () => {
        deleteFriend(friend.id)
        if (isSorted) sortFriendsByFavourites();
        updateTotalPages();
    }

    return (
        <div className="flex flex-auto justify-center items-center space-x-4 my-4">
            <div className="">
                <h3 className="capitalize font-medium w-36">{friend.name}</h3>
                <h3 className="font-light w-24">is your friend</h3>
            </div>
            <span className="cursor-pointer" onClick={favorite}>{(friend.favorite) ? (<MdStar size='2em' />) : (<MdStarBorder size='2em' />)}</span>
            <span className="cursor-pointer" onClick={toDeleteFriend}><MdDelete size='2em' /></span>
        </div>
    )
}

export default ListItem
