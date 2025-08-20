import { Component } from "react";

interface Props {
  name: string;
}

export default class ChildrenComp extends Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <div>
        <p>Ho va ten ben component con: {name}</p>
      </div>
    );
  }
}
