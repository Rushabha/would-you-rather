import { _getUsers, _getQuestions } from "../util/_DATA";
import { receiveUsers, addUserAnswer } from "./users";
import { receiveQuestions, voteQuestion } from "./questions";
import { _saveQuestionAnswer } from "../util/_DATA";
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return Promise.all([_getUsers(), _getQuestions()]).then(([ users, questions ]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        });
    };
}

export const handleSaveQuestionsAnswer = (authedUser, qid, answer) => {
    return (dispatch) => {
        dispatch(showLoading());
        return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
            dispatch(voteQuestion({ authedUser, qid, answer }));
            dispatch(addUserAnswer({ authedUser, qid, answer }));
            dispatch(hideLoading());
        });
    };
};