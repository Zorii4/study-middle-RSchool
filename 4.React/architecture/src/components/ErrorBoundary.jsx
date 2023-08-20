import { Component } from "react"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      asErroe: false
    }
  }

  static getDerivedStateFromError(error) {
    console.log(error.message)
    return {
      hasError: true
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error)
    console.log(errorInfo)
  }

  render() {
    if(this.state.hasError) {
      return <h4>Something went wrong...</h4>
    }

    return this.props.children
  }
}

export default ErrorBoundary