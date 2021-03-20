import React, { useContext } from 'react'
import FriendContext from '../../context/friendContext';

function Pagination() {

    const friendContext = useContext(FriendContext);

    const { setCurrentPage, totalPages, friends } = friendContext;

    const pageNumber = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumber.push(i);
    }

    const onClick = (e) => {
        let elementId = e.target.id
        setCurrentPage(elementId)
    }

    return (
        <div>
            {(friends.length > 0) ? (
                <div className="flex flex-auto justify-center items-center divide-x divide-black border rounded-lg border-gray-300 p-1 mx-48 my-10 bg-gray-400">
                    {pageNumber.map(page => {
                        return <span key={page} id={page} className="cursor-pointer font-medium w-36 text-center" onClick={onClick}>{page}</span>
                    })}
                </div >
            ) : (' ')}
        </div>
    )
}

export default Pagination
