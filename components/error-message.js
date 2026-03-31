import React from "react";

import Blockquote from "./blockquote";

const ErrorMessage = () => (
  <Blockquote text="Sorry. We are having trouble getting your quotes right now." author="Quotes for Future Me" />
);

ErrorMessage.propTypes = {};

export default ErrorMessage;
