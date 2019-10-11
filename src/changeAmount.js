import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const ChangeAmount = ({ onUpdateAmount, onGetPictures, amount }) => {
  return (
    <div>
      <p className="mt-5">Default is 50 pictures</p>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Change Amount
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type="number"
          onChange={event => onUpdateAmount(event.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <div id="button" onClick={() => onGetPictures(amount)}>
        Get Pictures
      </div>
    </div>
  );
};

export default ChangeAmount;
