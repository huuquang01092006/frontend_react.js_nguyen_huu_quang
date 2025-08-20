import { Component } from "react";
import ChildrenComp from "./Children_Comp";

type ParentCompState = {
  fullName: string;
};

export default class ParentComp extends Component<object, ParentCompState> {
  constructor(props: object) {
    super(props);
    this.state = {
      fullName: "Nguyen Huu Quang",
    };
  }

  render() {
    return (
      <div>
        <p>Ho va ten ben component cha: {this.state.fullName}</p>
        <ChildrenComp name={this.state.fullName} />
      </div>
    );
  }
}
