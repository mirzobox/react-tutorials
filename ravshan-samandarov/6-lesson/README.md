Function and class components

Props, states and ref

From function component to class component

- Function component
  export const Dashboard = () => {
  return <h1>Dashboard</h1>
  }

- Class component
  <!-- import { Component } from "react" -->

  import React from "react"
  <!-- export class Dashboard extends React.Component {} -->

  export class Dashboard extends Component {
  render() {
  return <h1>Dashboard</h1>
  }
  }

- Props
  Reactda proplar tepadan pastga beriladigan ma'lumot, pastda uni qabul qilib olgan component uni readonly yoki immutable sifatida ko'radi

export const App = (props) => <h1>{props.title}</h1>

export class App extends Component {
render() {
return <h1>this.props.title</h1>
}
}

<App title="Prosta title"/>

State

- Terminalogiya, reactda useState ishlashi
  Rendering,
  Reconciliation/Diffing => [Solishtirib farqini topish]
  Patching => [Kichkinagina joyini o'zgartirish]
