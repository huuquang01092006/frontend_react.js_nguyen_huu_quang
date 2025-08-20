import { Component } from "react";

interface State {
  name: string;
}

class Exercises01 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "Nguyen Huu Quang",
    };
  }

  render() {
    return (
      <div>
        <h1>Ho va ten: {this.state.name}</h1>
      </div>
    );
  }
}

export default Exercises01;
