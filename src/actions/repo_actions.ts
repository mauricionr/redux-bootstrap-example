import { makeActionCreator } from "../utils/utils";
import ACTION_TYPES from "../constants/action_types";

let addRepoBegin = makeActionCreator(ACTION_TYPES.ADD_REPO_BEGIN);
let addRepoSuccess = makeActionCreator(ACTION_TYPES.ADD_REPO_SUCCESS);

let addRepoAsync =  () => {
    let random = Math.floor(Math.random() * 31) + 50;
    return (dispatch: Redux.Dispatch) => {
        dispatch(addRepoBegin());
        setTimeout(() => { dispatch(addRepoSuccess()); }, random); // fake delay
    };
};

let repoActions = {
    addRepoAsync
};

export default repoActions;
