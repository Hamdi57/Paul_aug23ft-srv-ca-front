import PropTypes from "prop-types";
import "./ButtonRow.css";
const ButtonRow = (props) => {
  const buttonClickHandler = (event) => {
    props.buttonHandlerTest(event.target.getAttribute("data-type"));
  };
  return (
    <div className="button-row">
      <div className="button-group">
        <div className="button" data-type="fetch" onClick={buttonClickHandler}>
          Fetch Data
        </div>
        <div className="button" data-type="add" onClick={buttonClickHandler}>
          Add Participant
        </div>
      </div>
      <div className="button-group">
        <div className="button" data-type="dummy" onClick={buttonClickHandler}>
          Add Dummy Data
        </div>
      </div>
    </div>
  );
};

ButtonRow.propTypes = {
  buttonHandlerTest: PropTypes.func.isRequired,
};

export default ButtonRow;
