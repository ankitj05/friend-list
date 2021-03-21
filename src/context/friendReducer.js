import {
    ADD_FRIEND,
    TOGGLE_FAVORITE,
    DELETE_FRIEND,
    SET_LOADING,
    SEARCH_FRIEND,
    SORT_BY_FAVORITES,
    RESET_SEARCH,
    SET_CURRENT_PAGE,
    UPDATE_TOTAL_PAGES
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                friends: state.isSorted ? [...state.friends, action.payload] : [action.payload, ...state.friends],
                isFound: null
            }

        case TOGGLE_FAVORITE:
            let updatedFriends = state.friends.map(friend =>
                (friend.id === action.payload) ?
                    { ...friend, favorite: !friend.favorite } : friend
            )

            return {
                ...state,
                friends: [...updatedFriends]
            }

        case DELETE_FRIEND:
            let index = state.friends.findIndex(friend => friend.id === action.payload);
            if (index !== -1) state.friends.splice(index, 1);
            return {
                ...state
            }

        case SEARCH_FRIEND:
            let filteredFriends = state.friends.filter(friend => friend.name.toLowerCase().includes(action.payload))
            return {
                ...state,
                searchedFriends: (filteredFriends.length > 0) ? [...filteredFriends] : [],
                isFound: (filteredFriends.length > 0) ? true : false
            }

        case SORT_BY_FAVORITES:
            let sortedList = []
            if (state.isSorted) {
                sortedList = state.friends.sort((a, b) => a.favorite - b.favorite);
            }
            else {
                sortedList = state.friends.sort((a, b) => b.favorite - a.favorite);
            }
            return {
                ...state,
                friends: [...sortedList],
                isSorted: !state.isSorted,
                currentPage: 1
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        case UPDATE_TOTAL_PAGES:
            let totalPagesFound = state.isFound ? Math.ceil(state.searchedFriends.length / state.friendsPerPage) : Math.ceil(state.friends.length / state.friendsPerPage)
            totalPagesFound = totalPagesFound ? totalPagesFound : 1;
            return {
                ...state,
                totalPages: totalPagesFound,
                currentPage: (state.currentPage > totalPagesFound) ? totalPagesFound : state.currentPage
            }

        case RESET_SEARCH:
            return {
                ...state,
                isFound: null,
                searchedFriends: []
            }

        case SET_LOADING:
            return {
                ...state,
                loading: false
            }

        default:
            return {
                ...state
            }
    }
}