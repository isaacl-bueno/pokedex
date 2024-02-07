import React, { useEffect } from "react";

// @ Hooks 
import TemplatePage from "./template/TemplatePage";

const CustomTable = ({ ...sharedProps }) => {

  return (<TemplatePage {...sharedProps} />);
};

export default CustomTable;
