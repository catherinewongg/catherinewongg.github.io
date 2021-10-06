import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.text }}>
        <LoaderLogo id="logo" theme={props.theme} />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadFinish: false,
      anotherState: 2
    };
  }

  // runs when this component is rendered
  componentDidMount() {
    this.id = setTimeout(
      () => this.setState({ loadFinish: true }), 
      5500);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.loadFinish ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
