import React from 'react';
import './scorecard.styles.scss';
import { connect } from 'react-redux';

class Scorecard extends React.Component {
    render() {
        return (
            <div className="score-card">
                <div className="score-card__user-name">
                    <span>{this.props.user.name}</span>
                </div>
                <div className="score-card__info">
                    <img className="score-card__user-profile-image" src={require(`../../images/${this.props.user.avatarURL}`)} alt="" />
                    <div className="score-card__info__data">
                        <div className="score-card__info__question-asked">
                            <h3>Questions asked:</h3>
                            <p>{this.props.user.questions.length}</p>
                        </div>
                        <div className="score-card__info__question-answered">
                            <h3>Questions answered:</h3>
                            <p> {Object.keys(this.props.user.answers).length}</p>
                        </div>
                    </div>
                    <div className="score-card__info__total-score">
                        <h3>Total Score:</h3>
                        <p> {this.props.user.questions.length + Object.keys(this.props.user.answers).length}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, { userId }) => {
    return {
        user: state.users[userId]
    }
}

export default connect(mapStateToProps)(Scorecard);