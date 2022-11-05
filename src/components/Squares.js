import '../App.css';

import { connect } from "react-redux";

import { startAction } from "../actions/startAction";
import { endAction } from "../actions/endAction";

function Squares(props) {
  let componentClassName = () => {
    return props.rotating?"":" Square-paused"
  }
  return (
        <div 
            className={"Square" + componentClassName()} 
            onClick={props.rotating?props.stopAction : props.startAction}
        >
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

export default connect(mapStateToProps, mapDispatchToProps)(Squares);
