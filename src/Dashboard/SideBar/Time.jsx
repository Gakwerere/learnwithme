import ReactDOM from 'react-dom';
import React from 'react'

const Time = () => {
  return <div> Seconds: </div>;
};

// export default Time;

// class Time extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 };
//   }

//   tick() {
//     this.setState(state => ({
//       seconds: state.seconds + 1
//     }));
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div>
//         Seconds: {this.state.seconds}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Time />,
//   document.getElementById('timer-example')
// );

export default Time;
