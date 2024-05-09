import PropTypes from "prop-types";
import "./ButtonRow.css";
const ButtonRow = (props) => {
  const buttonClickHandler = (event) => {
    props.buttonHandlerTest(event);
  };
  return (
    <div className="button-row">
      <div className="button-group">
        <div className="button" onClick={buttonClickHandler}>
          Fetch Data
        </div>
        <div className="button">Add Participant</div>
      </div>
      <div className="button-group">
        <div className="button">Add Dummy Data</div>
      </div>
    </div>
  );
};

ButtonRow.propTypes = {
  buttonHandlerTest: PropTypes.func.isRequired,
};

export default ButtonRow;
