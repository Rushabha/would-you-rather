import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../button/button.component';
import './question-preview.styles.scss';
import { withRouter } from 'react-router-dom';
import { formatDate } from '../../util/_DATA';

class QuestionPreview extends React.Component {
    onViewPoll = () => {
        this.props.history.push(`/question/${this.props.question.id}`);
    }
    
    render() {
        const time = formatDate(this.props.question.timestamp);
        return (
            <div className="question-preview">
                <div className="question-preview__author">
                    <span>{this.props.user.name} asks: </span>
                    <span className="question-preview__timestamp">Created on: {time}</span>
                </div>
                <div className="question-preview__info">
                    <img className="question-preview__info__author-profile-image" src={require(`../../images/${this.props.user.avatarURL}`)} alt="" />
                    <div className="question-preview__info__data">
                        <h1 className="question-preview__info__heading">Would you rather</h1>
                        <p className="question-preview__info__text">...{this.props.question.optionOne.text}...</p>
                    </div>
                    <div className="question-preview__info__view-button">
                        <Button size="lg" onButtonClick={this.onViewPoll}>View Poll</Button>
                    </div>

                </div>
            </div>
        );
    };
}

const mapStateToProps = (state, { id, history }) => {
    const question = state.questions[id];
    console.dir(question);
    const user = state.users[question.author];
    return {
        user,
        question,
        history
    }
}
export default withRouter(connect(mapStateToProps)(QuestionPreview));