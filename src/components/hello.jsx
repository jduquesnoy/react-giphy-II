
// class Hello extends Component { // A stateful component needs to
//   constructor(props) { // be promoted into a class
//     super(props);
//     this.state = {
//       clicked: false,
//       counter: 0

//     }; // defines initial state
//   }

//   update = () => {
//     this.setState({
//       clicked: !this.state.clicked,
//       counter: this.state.counter + 1
//     }); 
//   }
  
//   render() {
//     return (
//       <h1 className={this.state.clicked ? "clicked" : ""}
//           onClick={this.update}>
//         Hello, {this.props.name}, {this.state.counter}
//       </h1>
//     );
//     }
//  }

// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<Hello name="World" />, root);
// }
