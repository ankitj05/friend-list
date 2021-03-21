import React, { useState, useContext, useEffect } from 'react'
import Body from './Body';
import AddFriend from './layout/AddFriend';
import { HiSortAscending, HiSortDescending } from 'react-icons/hi';
import ReactTooltip from 'react-tooltip';
import FriendContext from '../context/friendContext';

function Bar() {

    const [name, setName] = useState('')
    const [timer, setTimer] = useState(true);

    const friendContext = useContext(FriendContext);
    const {
        searchFriend,
        isFound,
        sortFriendsByFavourites,
        resetSearch,
        updateTotalPages,
        isSorted
    } = friendContext;

    const onChange = e => {
        let value = e.target.value;
        if (value === '') {
            setName('')
            resetSearch();
            updateTotalPages();
        }
        else {
            setName(value)
            clearTimeout(timer)
            setTimer(setTimeout(() => {
                let friendName = capitalize(value);
                searchFriend(friendName);
                updateTotalPages();
            }, 100))
        }
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
            searchFriend(friendName);
            updateTotalPages();
        }
    }

    useEffect(() => {
        updateTotalPages();
    }, [])

    return (
        <>
            <div className="flex justify-center items-center mt-5 m-auto">
                <form onSubmit={onSubmit}>
                    <input
                        className="border border-gray-400 focus:border-red-300 rounded-2xl outline-none w-auto h-9 p-2 my-4 "
                        type='text'
                        value={name}
                        onChange={onChange}
                        placeholder='Enter your friends name' />
                </form>
                <span
                    className="cursor-pointer mx-2"
                    onClick={() => sortFriendsByFavourites()}
                    data-tip="sort by favorite"
                    data-place="bottom"
                    data-type="info"
                    data-delay-show="300">
                    {(isSorted) ? (
                        <HiSortAscending size="1.5em" color="black" />) : (
                            <HiSortDescending size="1.5em" color="black" />)}</span>
            </div>
            <>
                {(isFound === false) ? (<AddFriend name={name} clearName={() => setName('')} />) : ('')}
                <Body />
            </>
            <ReactTooltip />
        </>
    )
}

export default Bar