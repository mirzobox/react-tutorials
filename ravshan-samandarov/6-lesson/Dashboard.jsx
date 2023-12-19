import { Component, createRef } from "react";

export class Dashboard extends Component {
  state = {
    title: "Dashboard",
  };
  ref = createRef(null);
  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <button
          ref={ref}
          onClick={() => {
            console.log(this.ref.current);
            this.setState({ title: "Dashboard 2" });
          }}
        >
          Change title
        </button>
      </>
    );
  }
}
