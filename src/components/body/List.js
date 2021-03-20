import React, { useContext } from 'react'
import FriendContext from '../../context/friendContext';
import ListItem from './ListItem';
import NotFound from './NotFound';
function List() {

    const friendContext = useContext(FriendContext);

    const { friends, isFound, searchedFriends, currentPage } = friendContext;
    let lastIndex = currentPage * 4;
    let startIndex = lastIndex - 4;
    const currentList = isFound ? searchedFriends.slice(startIndex, lastIndex) : friends.slice(startIndex, lastIndex);

    return (
        <div>
            {(friends.length > 0) ? (
                <div className="border rounded-lg border-gray-300 p-1 w-auto mx-20 my-10">
                    {currentList.map(friend => (
                        <ListItem key={friend.id} friend={friend} />
                    ))}
                </div>) : (<NotFound />)}
        </div>
    )
}

export default List
