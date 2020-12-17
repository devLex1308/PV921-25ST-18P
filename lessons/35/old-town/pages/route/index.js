import React from "react";
import { connect } from 'react-redux';
import { getRouts } from "../../actions/rout.actions.js";
import Link from 'next/link'


class Stations extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRouts();
  }

  render() {
    const { routs } = this.props;

     return(
       <>
       <h1>Маршрути</h1>
       <ul>
       {
        Object.keys(routs).map(key => (
          <li key={key} >
            <Link href={`route/${key}`}>
              <span>{key} {routs[key].name}</span>
            </Link>
          </li>
        ))
       }
       </ul>
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
  getRouts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);


