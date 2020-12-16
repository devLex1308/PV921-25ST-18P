import React from "react";
import { withRouter } from 'next/router'


class Toggle extends React.Component {
  constructor(props) {
    super(props);

  }

  getData = async () => {

    const response = await fetch('http://localhost:3001/api/station/1');

    let data = await response.json();
    console.log(data);
  }

  render() {
    console.log(this.props);
    console.log(this.props.router.query);
     return(
       <>
       <h1>Зупинка</h1>
 <button onClick={() => this.getData() }>ок</button>
      </>
      );

  }
}

export default withRouter(Toggle)