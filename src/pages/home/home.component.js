import React from 'react';
import QuestionPreview from '../../components/question-preview/question-preview.component';
import { connect } from 'react-redux';
import { Tabs } from '../../components/tabs/tabs.component';
import { Redirect } from 'react-router-dom';
class Home extends React.Component {

  state = {
    tabs: ['Unanswered', 'Answered'],
    questions: []
  };

  setUnansweredQuestion = () => {
    const unasweredQuestions = this.props.questions.filter((question) => Object.keys(this.props.user.answers).indexOf(question) === -1);
    this.setState((prevState) => ({
      questions: unasweredQuestions
    }));
  }

  setAnsweredQuestion = () => {
    const asweredQuestions = this.props.questions.filter((question) => Object.keys(this.props.user.answers).indexOf(question) !== -1);
    console.dir(`Answered Questions: ${asweredQuestions}`);
    this.setState((prevState) => ({
      questions: asweredQuestions
    }));
  }

  onTabChange = (content) => {
    switch (content) {
      case this.state.tabs[0]:
        this.setUnansweredQuestion();
        break;
      case this.state.tabs[1]:
        this.setAnsweredQuestion();
        break;
      default:
        break;
    }
  }

  render() {
    const { loading, user } = this.props;
    if (!user) {
      return (<Redirect to="/login" />)
    }
    return (
      <div className="page">
        {
          loading === true ? null : (
            <div>
              <Tabs onTabChange={this.onTabChange} tabs={this.state.tabs}></Tabs>
              <div>
                {
                  this.state.questions.map((id) => (
                    <QuestionPreview key={id} id={id}></QuestionPreview>
                  ))
                }
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const authedUser = state.authedUser;

  return {
    questions: Object.keys(state.questions).map((qid) => {
      return state.questions[qid]
    }).sort((a, b) => {
      return b.timestamp - a.timestamp;
    }).map((question) => question.id),
    user: (authedUser) ? state.users[authedUser] : authedUser,
    loading: (Object.keys(state.questions).length === 0 && state.questions.constructor === Object)
  }
}

export default connect(mapStateToProps)(Home);
