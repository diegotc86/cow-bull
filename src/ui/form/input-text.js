import React from "react";
import styled from "styled-components";
import { radius, weight, color } from "variables";

const Label = styled.label`
  font-weight: ${weight.bold};
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  text-align: ${props => (props.center ? "center" : "left")};
`;
const Input = styled.input`
  padding: 0 24px;
  border: 2px solid ${color.dark};
  border-radius: ${radius.normal};
  height: 54px;
  width: 100%;
  box-sizing: border-box;
  font-size: 18px;
  text-align: ${props => (props.center ? "center" : "left")};
`;

function InputText({
  label,
  placeholder,
  id,
  name,
  center,
  className,
  onChange,
  value,
}) {
  return (
    <>
      <div className={className}>
        {label && (
          <Label htmlFor={id} center={center}>
            {label}
          </Label>
        )}
        <Input
          center={center}
          type="text"
          id={id}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  );
}

export default InputText;
