import React, { useContext, useState, useEffect } from 'react'
import FriendContext from '../../context/friendContext';
import ListItem from './ListItem';
import NotFound from './NotFound';
function List() {

    const [opaqueState, setOpaqueState] = useState('')
    const [currentList, setCurrentList] = useState([]);

    const friendContext = useContext(FriendContext);
    const {
        friends,
        isFound,
        searchedFriends,
        currentPage
    } = friendContext;

    useEffect(() => {
        let lastIndex = currentPage * 4;
        let startIndex = lastIndex - 4;
        setCurrentList(isFound ? searchedFriends.slice(startIndex, lastIndex) : friends.slice(startIndex, lastIndex));
    }, [currentPage])

    useEffect(() => {
        if (isFound === false) setOpaqueState('opacity-50 transition duration-500 ease-in')
        else setOpaqueState('')
    }, [isFound])

    return (
        <div className={`border rounded-2xl border-gray-500 divide-y divide-gray-300 min-w-max max-w-max m-auto my-10 ${opaqueState}`}>
            {(friends.length > 0) ? (
                <>
                    {currentList.map(friend => (
                        <ListItem key={friend.id} friend={friend} />
                    ))}
                </>) : (<NotFound />)}
        </div>
    )
}

export default List