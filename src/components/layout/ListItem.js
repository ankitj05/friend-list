import React, { useContext, useState } from 'react'
import { MdStarBorder, MdDelete, MdStar } from 'react-icons/md'
import FriendContext from '../../context/friendContext';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function ListItem({ friend }) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const friendContext = useContext(FriendContext);
    const {
        toggleFavouriteFriend,
        deleteFriend,
        isSorted,
        sortFriendsByFavourites,
        updateTotalPages
    } = friendContext;


    const { name, favorite, id } = friend;

    const toggleFavorite = () => {
        toggleFavouriteFriend(id);
        if (isSorted) sortFriendsByFavourites();
    }

    const toDeleteFriend = () => {
        deleteFriend(id)
        setIsModalOpen(false)
        if (isSorted) sortFriendsByFavourites();
        updateTotalPages();
    }

    return (
        <div className="flex justify-center items-center space-x-5 px-1 my-4">
            <div>
                <h3 className="capitalize text-2xl font-normal w-52 md:w-64">{name ? name : 'Gum-naam'}</h3>
                <h3 className="font-light w-24">is your friend</h3>
            </div>
            <span className="cursor-pointer" onClick={toggleFavorite}>{(favorite) ? (<MdStar size='2em' color="#FFFF00" />) : (<MdStarBorder size='2em' />)}</span>
            <span className="cursor-pointer text-gray-400" onClick={() => setIsModalOpen(true)}><MdDelete size='2em' /></span>

            <Modal
                isOpen={isModalOpen}
                className="border rounded-3xl border-gray-600 outline-none text-center w-52 md:w-64 h-auto m-auto mt-44"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(229, 231, 235)'
                    }
                }}>
                <h3 className="font-normal text-xl w-auto p-3">Do you want to remove "{name ? name : 'Gum-naam'}" from your list ?</h3>
                <div className="w-auto mx-1 my-2">
                    <button
                        type="button"
                        onClick={toDeleteFriend}
                        className="border rounded-3xl border-gray-600 focus:outline-none bg-green-600 px-4 mx-1"
                    >Yes</button>
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="border rounded-3xl border-gray-600 focus:outline-none bg-red-500 px-4 mx-1"
                    >Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default ListItem
