import React from "react";
import { connect } from 'react-redux';
import { getStations } from "../../actions/station.actions.js";


class Stations extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getStationLocal();
  }

  getStationLocal = () => {
    this.props.getStations("Test");
  }

  render() {
     return(
       <>
       <h1>Зупинки</h1>
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


