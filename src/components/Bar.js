import React, { useState, useContext, useEffect } from 'react'
import Body from './body/Body';
import FriendContext from '../context/friendContext';
import AddFriend from './AddFriend';
import { MdSort } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';

function Bar() {

    const [name, setName] = useState('')
    const friendContext = useContext(FriendContext);

    const { addOrSearchFriend, isFound, sortFriendsByFavourites, resetSearch, updateTotalPages } = friendContext;

    const onChange = e => {
        let value = e.target.value;
        if (value === '') {
            setName('')
            resetSearch();
            updateTotalPages();
        }
        else setName(value)
    }

    const capitalize = (string) => {
        if (typeof string !== 'string') return
        let subStrings = string.split(' ')
        subStrings = subStrings.map(string => string.charAt(0).toUpperCase() + string.slice(1))
        return subStrings.join(' ');
    }

    const onSubmit = e => {
        e.preventDefault();
        if (!!name) {
            let friendName = capitalize(name);
            addOrSearchFriend(friendName);
            updateTotalPages();
        }
    }

    useEffect(() => {
        updateTotalPages();
    }, [])

    return (
        <div className="mt-6">
            <div className="flex justify-center items-center">
                <form onSubmit={onSubmit}>
                    <input
                        className="border-2 rounded-3xl border-gray-300 px-4 py-1 w-auto focus:outline-none focus:border-red-300"
                        type='text'
                        value={name}
                        onChange={onChange}
                        placeholder='Enter your friends name' />
                </form>
                <span
                    className="ml-2 cursor-pointer"
                    onClick={() => sortFriendsByFavourites()}
                    data-tip="hello world"
                    place="bottom">
                    <MdSort size="2em" /></span>
            </div>
            <div>
                {(isFound === false) ? (<AddFriend name={name} />) : ('')}
                <Body />
            </div>
            <ReactTooltip />
        </div>
    )
}

export default Bar