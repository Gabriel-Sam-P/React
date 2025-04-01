import React from "react";
import Button from "@mui/material/Button";

const one = () => {
  return (
    <div>
      <h2>Material-UI Example</h2>
      <Button
        variant="outlined"
        color="primary"
        sx={{
          "&:hover": {
            backgroundColor: "blue", 
            color: "white",
          },
        }}
      >
        Click Me
      </Button>
    </div>
  );
};

export default one;
