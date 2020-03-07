import React from "react";
import Button from "./button";
import { FaArrowLeft } from "react-icons/fa";

function BackButton() {
  return (
    <Button type="tertiary">
      <FaArrowLeft />
    </Button>
  );
}

export default BackButton;
