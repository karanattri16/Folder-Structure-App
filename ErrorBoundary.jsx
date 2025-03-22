import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props){
    super(props);
    this.state={
      hasError: false
    }
  }
 
  static getDerivedStateFromError(error){
    return {hasError:true}
  }

  componentDidCatch(error,info){
    console.error("Caught an error:", error, info);
  }

  render() {
    if(this.state.hasError){
      return <h3> Something went wrong please check the console.</h3>
    }
    return this.props.children;
  }
}
