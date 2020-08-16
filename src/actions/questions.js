import { _saveQuestion } from "../util/_DATA";
import { showLoading, hideLoading } from 'react-redux-loading';

export const ADD_QUESTION = "ADD_QUESTION";
export const VOTE_QUESTION = "VOTE_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export const addQuestion = (question) => ({
    type: ADD_QUESTION,
    question
});

export const voteQuestion = ({ authedUser, qid, answer }) => ({
    type: VOTE_QUESTION,
    questionId: qid,
    option: answer,
    authedUser
});

export const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions
});

export const handleAddQuestion = (question) => {
    return (dispatch) => {
        dispatch(showLoading());
        return _saveQuestion(question).then((formattedQuestion) => {
            dispatch(addQuestion(formattedQuestion));
            dispatch(hideLoading());
        });
    }
}