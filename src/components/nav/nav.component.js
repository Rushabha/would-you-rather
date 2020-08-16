import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import './nav.styles.scss';
import { setAuthedUser } from '../../actions/authedUser';

class Nav extends React.Component {

    logOut = (e) => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(""));
        this.props.history.push('/login');
    } 

    render() {
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink className="navLink" to='/' exact activeClassName='active'>
                            Home
                  </NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to='/add' activeClassName='active'>
                            New Question
                  </NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to='/leaderboard' activeClassName='active'>
                            Leader Board
                  </NavLink>
                    </li>
                </ul>
                <ul>
                    {
                        this.props.authedUser ? <li>
                            <div className="user-profile-info">
                                <img className="user-profile-image" src={require(`../../images/${this.props.authedUser.avatarURL}`)} alt="" />
                                <span>
                                    Welcome, {this.props.authedUser.name}
                                </span>
                            </div>
                        </li> : null
                    }
                    <li >
                        {
                            this.props.authedUser ? <span className="navLink" onClick={this.logOut}>Log Out</span>
                                : <NavLink to='/login' activeClassName='active'> Log In </NavLink>
                        }
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state, { history } ) => {
    return {
        authedUser: state.authedUser ? state.users[state.authedUser] : undefined,
        history
    }
}

export default withRouter(connect(mapStateToProps)(Nav));