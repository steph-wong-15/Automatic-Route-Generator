import { useState } from "react";

function SidePanel() {
  const [currentClickedHex, setCurrentClickedHex] = useState(1);

  return (
    <div>
      <div className="d-flex flex-column">
        <button type="button" class="btn btn-dark m-1">
          1-hex
        </button>
        <button type="button" class="btn btn-dark m-1">
          2-hex
        </button>
        <button type="button" class="btn btn-dark m-1">
          3-hex
        </button>
        <button type="button" class="btn btn-dark m-1">
          4-hex
        </button>
        <button type="button" class="btn btn-dark m-1">
          5-hex
        </button>
        <button type="button" class="btn btn-primary m-1">
          Generate
        </button>
      </div>
    </div>
  );
}

export default SidePanel;
