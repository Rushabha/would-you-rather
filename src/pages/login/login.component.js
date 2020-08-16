import './login.styles.scss';
import React from 'react';
import { Button } from '../../components/button/button.component';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import { SelectBox } from '../../components/selectbox/selectbox.component';
class Login extends React.Component {

    state = {
        authedUser: undefined
    }

    onSelectOptionChange = (userId) => {
        this.setState((prevState) => ({
            authedUser: userId
        }))
    }

    play = () => {
        this.props.dispatch(setAuthedUser(this.state.authedUser));
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="login-wrapper">
                <h1 className="login-heading">Welcome to Would You Rather App</h1>
                <p>Please sign in to continue</p>
                {
                    this.props.users.length > 0 && <SelectBox label="Select user" values={this.props.users.map((user) => ({text: user.name, value: user.id}))} onSelectOptionChange={this.onSelectOptionChange}/>
                }
                <Button size="lg" onButtonClick={this.play}>Let's play</Button>
            </div>
        )
    }
}

const mapStateToProps = (state, { history }) => {
    return {
        users: Object.keys(state.users).map((userId) => ({ name: state.users[userId].name,
        id: userId})),
        history
    }
}

export default connect(mapStateToProps)(Login);

