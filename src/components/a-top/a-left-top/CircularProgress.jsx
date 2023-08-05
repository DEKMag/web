import './CircularProgress.module.css';
import React from 'react';
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progress: 5 };
  }

  render() {
    const progressFillStyle = {
      transform: `rotate(${(this.state.progress / 100) * 360 + 90}deg)`,
      clipPath: `circle(${this.state.progress}% at center)`,
    };
    return (
      <div className="progress-bar">
        <div className="progress-bar-fill" style={progressFillStyle}></div>
        <div className="progress-bar-text">{`${this.state.progress}%`}</div>
      </div>
    );
  }
}
