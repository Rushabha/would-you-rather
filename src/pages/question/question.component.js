import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../components/button/button.component';
import './question.styles.scss';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { RadioGroup } from '../../components/radio-group/radio-group.component';
import { handleSaveQuestionsAnswer } from '../../actions/shared';
import { TiTick } from 'react-icons/ti/index';
class Question extends React.Component {

    state = {
        selectedOption: '',
        isVoted: false
    }

    onRadioOptionChange = (option) => {
        this.setState((prevState) => ({
            selectedOption: option
        }));
    }

    submitVote = () => {
        this.props.dispatch(handleSaveQuestionsAnswer(this.props.user.id, this.props.question.id, this.state.selectedOption));
    }

    componentDidUpdate = () => {
        console.log(`:: Question Did Update ::`);
        if (!this.state.isVoted && this.props.question !== undefined &&
            (Object.keys(this.props.user.answers).indexOf(this.props.question.id) !== -1)) {
            this.setState((prevState) => ({
                selectedOption: this.props.user.answers[this.props.question.id],
                isVoted: true
            }));
        }
    }

    render() {
        if (!this.props.user) {
            return (<Redirect to="/login" />)
        }
        if (!this.props.question) {
            return (
                <div className="question">
                    <div className="question__not-exists">
                        {`Question with id '${this.props.questionId}' doesn't exist!`}
                    </div>
                </div>);
        }
        if (this.state.isVoted) {
            const totalVotes = this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length;
            const optionOneVoteCount = this.props.question.optionOne.votes.length;
            const optionTwoVoteCount = this.props.question.optionTwo.votes.length;
            return (
                <div className="question">
                    <div className="question__author">
                        <span>{this.props.questionAuthor.name} asks:</span>
                    </div>
                    <div className="question__info">
                        <img className="question__info__author-profile-image" src={require(`../../images/${this.props.questionAuthor.avatarURL}`)} alt="" />
                        <div className="question__info__data">
                            <h1 className="question__info__heading">Would you rather</h1>
                            <div className="question__options">
                                <div className="question__option">
                                    <div className="question__option-text">
                                        {
                                            this.state.selectedOption === 'optionOne' ? <TiTick className="question__selected-option"></TiTick> : null
                                        }
                                        {this.props.question.optionOne.text}
                                    </div>
                                    <div className="question__option-summary">
                                        <div className="question__option-summary__votePercentage">
                                            {(optionOneVoteCount / totalVotes * 100).toFixed(2)}%
                                        </div>
                                        <div className="question__option-summary__votePercentage-indicator">
                                            <div className="total-percentage"></div>
                                            <div className="actual-percentage" style={{
                                                width: (optionOneVoteCount / totalVotes * 100)
                                            }}></div>
                                        </div>
                                        <div>
                                            {optionOneVoteCount} / {totalVotes}
                                        </div>
                                    </div>
                                </div>
                                <div className="question__option">
                                    <div className="question__option-text">
                                        {
                                            this.state.selectedOption === 'optionTwo' ? <TiTick className="question__selected-option"></TiTick> : null
                                        }
                                        {this.props.question.optionTwo.text}
                                    </div>
                                    <div className="question__option-summary">
                                        <div className="question__option-summary__votePercentage">
                                            {(optionTwoVoteCount / totalVotes * 100).toFixed(2)}%
                                        </div>
                                        <div className="question__option-summary__votePercentage-indicator">
                                            <div className="total-percentage"></div>
                                            <div className="actual-percentage" style={{
                                                width: (optionTwoVoteCount / totalVotes * 100)
                                            }}></div>
                                        </div>
                                        <div>
                                            {optionTwoVoteCount} / {totalVotes}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/">Go back to home</Link>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="question">
                    <div className="question__author">
                        <span>{this.props.questionAuthor.name} asks:</span>
                    </div>
                    <div className="question__info">
                        <img className="question__info__author-profile-image" src={require(`../../images/${this.props.questionAuthor.avatarURL}`)} alt="" />
                        <div className="question__info__data">
                            <h1 className="question__info__heading">Would you rather</h1>
                            <div className="question__options">
                                <RadioGroup onRadioOptionChange={this.onRadioOptionChange} name="vote" values={[{ value: 'optionOne', text: this.props.question.optionOne.text }, { value: "optionTwo", text: this.props.question.optionTwo.text }]} />
                            </div>
                            <Button size="lg" onButtonClick={this.submitVote}>Submit</Button>
                        </div>
                    </div>
                </div>
            );
        }

    };
}

const mapStateToProps = (state, { match }) => {
    const question = state.questions[match.params.id];
    const user = (question) ? state.users[state.authedUser] : undefined;
    const questionAuthor = (question) ? state.users[question.author] : undefined;
    return {
        user,
        question,
        questionAuthor
    }
}

export default withRouter(connect(mapStateToProps)(Question));