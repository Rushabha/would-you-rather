import React from 'react';
import './addQuestion.styles.scss';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Button } from '../../components/button/button.component';
import { handleAddQuestion } from '../../actions/questions';

class AddQuestion extends React.Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    onFirstOptionChange = (e) => {
        const value = e.target.value;
        this.setState((prevState) => {
            return {
                optionOne: value
            }
        })
    }

    onSecondOptionChange = (e) => {
        const value = e.target.value;
        this.setState((prevState) => {
            return {
                optionTwo: value
            }
        })
    }

    createNewQuestion = () => {
        this.props.dispatch(handleAddQuestion({
            author: this.props.authedUser,
            optionOneText: this.state.optionOne,
            optionTwoText: this.state.optionTwo
        })).then(() => {
            this.props.history.push('/');
        });
    }

    render() {
        if (!this.props.authedUser) {
            return <Redirect to="/login" />
        }
        return (
            <div className="create-new-question">
                <div className="create-new-question__heading">
                    Create New Question
                </div>
                <div className="create-new-question__data">
                    <h3 className="create-new-question__data__heading">Would you rather...</h3>
                    <div className="create-new-question__optionOne">
                        <input type="text" onChange={this.onFirstOptionChange} placeholder="Enter first option" />
                    </div>
                    <div className="create-new-question__or-heading">
                        OR
                    </div>
                    <div className="create-new-question__optionTwo">
                        <input type="text" onChange={this.onSecondOptionChange} placeholder="Enter second option" />
                    </div>
                </div>
                <Button size="lg" onButtonClick={this.createNewQuestion} disabled={this.state.optionOne === '' || this.state.optionTwo === ''}>Submit</Button>
            </div>
        )
    }
}

const mapStateToProps = (state, { history }) => {
    return {
        authedUser: state.authedUser,
        history
    }
}

export default withRouter(connect(mapStateToProps)(AddQuestion));