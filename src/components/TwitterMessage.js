import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.value} type="text" />
        <p>Characters Left: {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

}

export default TwitterMessage;
