import logo from './disco.png';
import segundaLogo from './disco2.png';

import './App.css';

import { connect } from "react-redux";

import { startAction } from "./actions/startAction";
import { endAction } from "./actions/endAction";

// quadrado
import Squares from './components/Squares';

function App(props) {
  let componentClassName = () => {
    return props.rotating?"":" App-logo-paused"
  }
  return (
    <div className="App">
      <Squares/>
      <div className="App-logo-container">
        <img 
          src={props.rotating?logo : segundaLogo} 
          className={"App-logo" + componentClassName()} 
          alt="logo" 
          onClick={props.rotating?props.stopAction : props.startAction}
        />
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(endAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
