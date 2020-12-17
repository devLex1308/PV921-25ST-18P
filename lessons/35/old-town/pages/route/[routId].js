import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'next/router'
import { getRout } from "../../actions/rout.actions.js";
import Link from 'next/link'


class Stations extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {routId} = this.props.router.query;
    this.props.getRout(routId);
  }

  render() {
    const { routs } = this.props;
    const {routId} = this.props.router.query;

     return(
       <>
       <h1>Маршрут</h1>
       <p>
        {JSON.stringify(routs[routId])}
       </p>
      </>
      );

  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    routs: state.routs,
  }
}

const mapDispatchToProps = {
  getRout,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Stations));


