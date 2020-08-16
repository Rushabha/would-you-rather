import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ScoreCard from '../../components/scorecard/scorecard.component';
class LeaderBoard extends React.Component {
    render() {
        if (!this.props.authedUser) {
            return <Redirect to="/login" />
        }
        return (
            <div className="page">
                {
                    this.props.users.map((userId) => {
                        return <ScoreCard userId={userId} />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: Object.keys(state.users).map(userId => state.users[userId]).sort((a, b) => {
            const totalScoreOf_a = a.questions.length + Object.keys(a.answers).length;
            const totalScoreOf_b = b.questions.length + Object.keys(b.answers).length;
            return totalScoreOf_b - totalScoreOf_a;
        }).map((user) => user.id),
        authedUser: state.authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard);