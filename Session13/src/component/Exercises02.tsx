import { Component } from "react";

interface Exercise02State {
  id: number;
  name: string;
  dob: string;
  address: string;
}

export default class Exercises02 extends Component<object, Exercise02State> {
  constructor(props: object) {
    super(props);
    this.state = {
      id: 1,
      name: "Nguyen Huu Quang",
      dob: "01/10/2020",
      address: "Ha Noi",
    };
  }

  render() {
    return (
      <div>
        <h2>Thong tin ca nhan</h2>
        <div>
          <p>Id: {this.state.id}</p>
          <p>Ten: {this.state.name}</p>
          <p>Ngay sinh: {this.state.dob}</p>
          <p>Dia chi: {this.state.address}</p>
        </div>
      </div>
    );
  }
}
