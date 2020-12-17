import React from "react";
import { connect } from 'react-redux';
import { getStations } from "../../actions/station.actions.js";


class Stations extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getStations("Test");
  }

  render() {
    const { stations } = this.props;

     return(
       <>
       <h1>Зупинки</h1>
       <ul>
       {
        Object.keys(stations).map(key => (
          <li>{stations[key].name}</li>
        ))
       }
       </ul>
      </>
      );

  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    stations: state.stations,
  }
}

const mapDispatchToProps = {
  getStations,
}


export default connect(mapStateToProps, mapDispatchToProps)(Stations);


