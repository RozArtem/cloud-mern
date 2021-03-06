const SET_FILES = "SET_FILES"
const SET_CURRENT_DIR = "SET_CURRENT_DIR"

const defaultState = {
    files: [],
    curentDir: null
}

export default function fileReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FILES: return {...state, files: action.payload}
        case SET_CURRENT_DIR: return { ...state, curentDir: action.payload}
        default:
            return state
    }
}

export const setFiles = files => ({type: SET_FILES, payload: files})
export const setCurentDir = dir => ({type: SET_CURRENT_DIR, payload: dir})