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
            {(friends.length > 4) ? (
                <div className="flex justify-center items-center border rounded-lg divide-x divide-black bg-gray-400 w-40 md:w-auto max-w-max p-1 m-auto my-10">
                    {pageNumber.map(page => {
                        return <span
                            key={page}
                            id={page}
                            className="cursor-pointer font-medium text-center w-20 "
                            onClick={onClick}>{page}</span>
                    })}
                </div >
            ) : (' ')}
        </div>
    )
}

export default Pagination
