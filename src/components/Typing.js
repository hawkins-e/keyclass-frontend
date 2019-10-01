// import React from "react"
// // require('./sass/app.scss');
// // require('font-awesome/css/font-awesome.css');
// const Excerpts = require('./Excerpts.js');

// class Typing extends React.Component {
//   constructor(){
//     super()

//   }

   
//   TextDisplay = (props) => ({
//   _getCompletedText: function() {
//     if (this.props.lineView) {
//       return '';
//     }
//     return this.props.children.slice(0, this.props.index);
//   },
//   _getCurrentText: function() {
//     const idx = this.props.index;
//     const text = this.props.children;
//     if (text.slice(idx).indexOf(' ') === -1) {
//       return text.slice(idx);
//     }
//     return text.slice(idx, idx + text.slice(idx).indexOf(' '));
//   },
//   _getRemainingText: function() {
//     const idx = this.props.index;
//     const text = this.props.children;
//     if (text.slice(idx).indexOf(' ') === -1) {
//       return '';
//     }
//     const wordEnd = idx + text.slice(idx).indexOf(' ');
//     if (this.props.lineView) {
//       return text.slice(wordEnd).split(' ').slice(0, 5).join(' ');
//     }
//     return text.slice(wordEnd);
//   },
//   render: function() {
//     return (
//       <div className={this.props.lineView ? "textDisplay lg" : "textDisplay"}>
//         {this._getCompletedText()}
//         <span className={this.props.error ? "error" : "success"}>
//           {this._getCurrentText()}
//         </span>
//         {this._getRemainingText()}
//       </div>
//     );
//   }
// });

//   Clock = (props) => ({
//   render: function() {
//     const elapsed = Math.round(this.props.elapsed  / 100);
//     const timer = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
//     return (
//       <span className="timer">
//         {timer}
//       </span>
//     );
//   },
// });

//   TextInput = (props) => ({
//   handleChange: function(e) {
//     if (!this.props.started) {
//       this.props.setupIntervals();
//     }
//     this.props.onInputChange(e);
//   },
//   render: function() {
//     return (
//       <div className="textInput">
//         <input
//           type="text"
//           placeholder="Start typing.."
//           className={this.props.error ? 'error' : ''}
//           ref="textInput"
//           value={this.props.value}
//           onChange={this.handleChange} />
//       </div>
//     );
//   }
// });

//   App = (props) => ({
//   componentWillMount: function() {
//     this.intervals = [];
//   },
//   setInterval: function() {
//     this.intervals.push(setInterval.apply(null, arguments));
//   },
//   getInitialState: function() {
//     return {
//       index: 0,
//       error: false,
//       errorCount: 0,
//       lineView: false,
//       timeElapsed: 0,
//       value: '',
//       startTime: null,
//       wpm: 0,
//       excerpt: this._randomElement(this.props.excerpts),
//       completed: false
//     };
//   },

//   _randomElement: function(array) {
//     return this.props.excerpts[Math.floor(Math.random()*this.props.excerpts.length)];
//   },

//   _handleInputChange: function(e) {
//     if (this.state.completed) {
//       return;
//     }
//     const inputVal = e.target.value;
//     const index = this.state.index;
//     if (this.state.excerpt.slice(index, index + inputVal.length) === inputVal) {
//       if (inputVal.slice(-1) === " " && !this.state.error) {
//         // handle a space after a correct word
//         this.setState({
//           index: this.state.index + inputVal.length,
//           value: ''
//         });
//       }
//       else if (index + inputVal.length == this.state.excerpt.length) {
//         // successfully completed
//         this.setState({
//           value: '',
//           completed: true
//         }, function() {
//           this._calculateWPM();
//         });
//         this.intervals.map(clearInterval);
//       }
//       else {
//         this.setState({
//           error: false,
//           value: inputVal
//         });
//       }
//     } else {
//       this.setState({
//         error: true,
//         value: inputVal,
//         errorCount: this.state.error ? this.state.errorCount : this.state.errorCount + 1
//       });
//     }
//   },

//   _changeView: function(e) {
//     this.setState({ lineView: !this.state.lineView });
//   },
//   _restartGame: function() {
//     // preserve lineView
//     const newState = this.getInitialState();
//     newState.lineView = this.state.lineView;
//     this.setState(newState);
//     this.intervals.map(clearInterval);
//   },

//   _setupIntervals: function() {
//     this.setState({
//       startTime: new Date().getTime(),
//     }, function() {
//       // timer
//       this.setInterval(function() {
//         this.setState({
//           timeElapsed: new Date().getTime() - this.state.startTime
//         });
//       }.bind(this), 50)
//       // WPM
//       this.setInterval(function() {
//         this._calculateWPM();
//       }.bind(this), 1000)
//     });
//   },

//   _calculateWPM: function() {
//     const elapsed = new Date().getTime() - this.state.startTime;
//     let wpm 
//     if (this.state.completed) {
//       wpm = this.state.excerpt.split(' ').length / (elapsed / 1000) * 60;
//     } else {
//       const words = this.state.excerpt.slice(0, this.state.index).split(' ').length;
//       wpm = words / (elapsed / 1000) * 60;
//     }
//     this.setState({
//       wpm: this.state.completed ? Math.round(wpm * 10) / 10 : Math.round(wpm)
//     });
//   },

//   render: function() {
//     return (
//       <div>
//         <div className="header">
//           <h1>typing speed test</h1>
//           <i
//             className="fa fa-lg fa-refresh"
//             onClick={this._restartGame}>
//           </i>
//           <i
//             className="fa fa-lg fa-bars"
//             onClick={this._changeView}>
//           </i>
//         </div>
//         <TextDisplay
//           index={this.state.index}
//           error={this.state.error}
//           lineView={this.state.lineView}>
//           {this.state.excerpt}
//         </TextDisplay>
//         <TextInput
//           onInputChange={this._handleInputChange}
//           setupIntervals={this._setupIntervals}
//           value={this.state.value}
//           started={!!this.state.startTime}
//           error={this.state.error} />
//         <div className={this.state.completed ? "stats completed" : "stats"} >
//           <Clock elapsed={this.state.timeElapsed} />
//           <span className="wpm">{this.state.wpm}</span>
//           <span className="errors">{this.state.errorCount}</span>
//         </div>
        
//       </div>
//     );
//   }
// });

// }

// export default Typing