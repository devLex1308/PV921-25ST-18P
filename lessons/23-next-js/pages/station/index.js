import React from "react";


export default class Toggle extends React.Component {
  constructor(props) {
    super(props);

  }

  getData = async () => {

    const response = await fetch('http://localhost:3001/api/station/1');

    let data = await response.json();
    console.log(data);
  }

  render() {

     return(
       <>
       <h1>Зупинки</h1>
 <button onClick={() => this.getData() }>ок</button>
      </>
      );

  }
}

