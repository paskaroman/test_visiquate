import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUsersRequest } from "../../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersRequest: () => dispatch(getUsersRequest()),
  };
};

class UserList extends Component {
  componentDidMount() {
    this.props.getUsersRequest();
  }

  renderUsers = () => {
    const link = "/userInfo";
    const { users } = this.props;
    const sortedUsers = users.sort((a, b) => {
      const loginA = a.login.toLowerCase();
      const loginB = b.login.toLowerCase();

      if (loginA < loginB) {
        return -1;
      }
      if (loginA > loginB) {
        return 1;
      }
      return 0;
    });

    return sortedUsers.map((el, i) => (
      <li key={i}>
        <Link to={`${link}/${el.login}`}>{el.login}</Link>
      </li>
    ));
  };

  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return <span className="loader">LOADING</span>;
    }

    return (
      <ul className="wrapper">
        {this.renderUsers()}
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
