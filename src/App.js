import React, { Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Home from './pages/home/home.component';
import { Route, Switch } from 'react-router-dom';
import AddQuestion from './pages/addQuestion/addQuestion.component';
import LeaderBoard from './pages/leaderboard/leaderboard.component';
import Question from './pages/question/question.component';
import Login from './pages/login/login.component';
import Nav from './components/nav/nav.component';
import LoadingBar from 'react-redux-loading';
import { NotFound } from './pages/notFound/notFound.component';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <Nav />
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/question/:id" component={Question} />
            <Route path="/add" component={AddQuestion} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default connect()(App);
