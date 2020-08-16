import { RECEIVE_QUESTIONS, ADD_QUESTION, VOTE_QUESTION } from "../actions/questions";

export const questionsReducer = function (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...action.questions
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: {
                    ...action.question
                }
            };
        case VOTE_QUESTION:
            return {
                ...state,
                [action.questionId]: {
                    ...state[action.questionId],
                    [action.option]: {
                        ...state[action.questionId][action.option],
                        votes: state[action.questionId][action.option].votes.concat([action.authedUser])
                    }
                }
            };
        default:
            return state;
    }
}