import React, { useReducer } from 'react'
import FriendContext from './friendContext'
import FriendReducer from './friendReducer'
import { v4 as uuidv4 } from 'uuid';
import {
    SET_LOADING,
    ADD_FRIEND,
    DELETE_FRIEND,
    SEARCH_FRIEND,
    TOGGLE_FAVORITE,
    SORT_BY_FAVORITES,
    RESET_SEARCH,
    SET_CURRENT_PAGE,
    UPDATE_TOTAL_PAGES
} from '../types'

const FriendState = (props) => {

    const initialState = {
        friends: [
            // {
            //     name: 'Jake Paralta',
            //     favorite: true,
            //     id: uuidv4(),
            // },
            // {
            //     name: 'Amy Santiago',
            //     favorite: false,
            //     id: uuidv4(),
            // },
            // {
            //     name: 'Rosa',
            //     favorite: true,
            //     id: uuidv4(),
            // },
            // {
            //     name: 'Charles Boyle',
            //     favorite: true,
            //     id: uuidv4(),
            // },
            // {
            //     name: 'Cpt. Ray Holt',
            //     favorite: false,
            //     id: uuidv4(),
            // },
            // {
            //     name: 'Terry Jeffords',
            //     favorite: false,
            //     id: uuidv4(),
            // },
            // {
            //     name: '',
            //     favorite: false,
            //     id: uuidv4(),
            // },
            // {
            //     name: 'The Vulture',
            //     favorite: true,
            //     id: uuidv4(),
            // },
            // {
            //     name: 'Jason Stanley',
            //     favorite: false,
            //     id: uuidv4(),
            // }
        ],
        isFound: null,
        isSorted: false,
        searchedFriends: [],
        loading: false,
        currentPage: 1,
        totalPages: 1,
        friendsPerPage: 4,
    }

    const [state, dispatch] = useReducer(FriendReducer, initialState)

    const addFriend = (name, favorite) => {
        dispatch({
            type: ADD_FRIEND,
            payload: {
                name,
                favorite: favorite,
                id: uuidv4()
            }
        })
    }

    const deleteFriend = id => {
        dispatch({
            type: DELETE_FRIEND,
            payload: id
        })
    }

    const toggleFavouriteFriend = id => {
        dispatch({
            type: TOGGLE_FAVORITE,
            payload: id
        })
    }

    const searchFriend = name => {
        dispatch({
            type: SEARCH_FRIEND,
            payload: name.toLowerCase()
        })
    }

    const setCurrentPage = (pageNo) => {
        dispatch({
            type: SET_CURRENT_PAGE,
            payload: pageNo
        })
    }

    const updateTotalPages = () => dispatch({ type: UPDATE_TOTAL_PAGES })

    const resetSearch = () => dispatch({ type: RESET_SEARCH })

    const sortFriendsByFavourites = () => dispatch({ type: SORT_BY_FAVORITES })

    const setLoading = () => dispatch({ type: SET_LOADING })

    return <FriendContext.Provider
        value={
            {
                friends: state.friends,
                loading: state.loading,
                isFound: state.isFound,
                searchedFriends: state.searchedFriends,
                isSorted: state.isSorted,
                currentPage: state.currentPage,
                friendsPerPage: state.friendsPerPage,
                totalPages: state.totalPages,
                addFriend,
                setLoading,
                toggleFavouriteFriend,
                deleteFriend,
                searchFriend,
                sortFriendsByFavourites,
                resetSearch,
                setCurrentPage,
                updateTotalPages
            }
        }>
        {props.children}
    </FriendContext.Provider>
}

export default FriendState;