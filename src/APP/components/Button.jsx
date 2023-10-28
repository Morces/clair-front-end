import React from "react";
import { Button } from "../../../@/components/ui/button";

const ButtonComponent = ({ children, label = "button" }) => {
  return (
    <div className="p-4">
      <Button>{label}</Button>
    </div>
  );
};

export default ButtonComponent;
