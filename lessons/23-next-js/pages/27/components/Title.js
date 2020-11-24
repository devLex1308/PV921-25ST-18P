import React from 'react';
import { connect } from 'react-redux'

class Title extends React.Component{
  render() {

    console.log(this.props);

    return (
      <h2>Привіт</h2>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  console.log({state});
  return {
    todos: state.todos,
    name: "Ivan"
  }
}

export default connect(mapStateToProps)(Title);