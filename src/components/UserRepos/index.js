import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserRepoRequest } from "../../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    repos: state.currentUser.repos || [],
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUserRepoRequest: (user) => dispatch(getUserRepoRequest(user)),
  };
};

class UserRepos extends Component {
  componentDidMount() {
    const { login } = this.props.match.params;
    this.props.getUserRepoRequest(login);
  }

  renderTableRow = () => {
    
      const { repos } = this.props;

      return repos.map((el, i) => (
          <tr key={i}>
                <td>{el.name}</td>
                <td>{el.description}</td>
                <td><a href={el.html_url} target="_blank" rel="noopener noreferrer">{el.html_url}</a></td>
                <td>{el.forks_count}</td>
                <td>{el.watchers_count}</td>
          </tr>
      ));
      
  }

  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return <span className="loader">LOADING</span>;
    }
    

    
    return (
        <div className="wrapper">
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td>URL</td>
                        <td>Forks count</td>
                        <td>Watchers count</td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRow()}
                </tbody>
            </table>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRepos);
