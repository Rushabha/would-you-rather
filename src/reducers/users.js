import { RECEIVE_USERS, ADD_USER, ADD_USER_QUESTION, ADD_USER_ANSWER } from "../actions/users";

export const usersReducer = function (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users;
        case ADD_USER:
            return {
                ...state,
                [action.user.id]: {
                    ...action.user
                }
            };
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.questionId])
                }
            };
        case ADD_USER_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.questionId]: action.option
                    }
                }
            };
        default:
            return state;
    }
}