import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserInfoRequest } from "../../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUserInfoRequest: (user) => dispatch(getUserInfoRequest(user)),
  };
};

class UserInfo extends Component {
  componentDidMount() {
    const { login } = this.props.match.params;
    this.props.getUserInfoRequest(login);
  }

  render() {
    const { isLoading, currentUser } = this.props;
    const { login, name, company, email, followers, updated_at, avatar_url } = currentUser;
    const link = `/userInfo/${login}/repo`;

    if (isLoading) {
      return <span className="loader">LOADING</span>;
    }

    return (
        <div className="wrapper">
            <div className="user-info-block">
              <span className="name">{name}</span>
              <span className="company">{company}</span>
              <span className="email">{email}</span>
              <img src={avatar_url} alt={name}/>
              <span className="followers">{followers} followers</span>
              <span>{updated_at}</span>
              <Link to={link}>{name} repositories</Link>
            </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
