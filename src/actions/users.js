export const ADD_USER = "ADD_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export const addUser = (user) => ({
    type: ADD_USER,
    user
});

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
});

export const addUserQuestion = ({ questionId, authedUser }) => ({
    type: ADD_USER_QUESTION,
    questionId,
    authedUser
});

export const addUserAnswer = ({ authedUser, qid, answer }) => ({
    type: ADD_USER_ANSWER,
    questionId: qid,
    option: answer,
    authedUser
});