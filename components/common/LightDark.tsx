import React from "react";

//constants
import { lightDarkTypes } from "../constants/layout";

const LightDark: React.FC<lightDarkTypes> = ({
  layoutMode,
  onChangeLayoutMode,
}) => {
  const mode: typeof layoutMode = layoutMode === "dark" ? "light" : "dark";

  return (
    <div className="ms-1 header-item d-none d-sm-flex">
      <button
        onClick={() => onChangeLayoutMode(mode)}
        type="button"
        className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"
      >
        <i className="bx bx-moon fs-22"></i>
      </button>
    </div>
  );
};

export default LightDark;
