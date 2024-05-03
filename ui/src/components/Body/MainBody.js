import SidePanel from "./SidePanel";
import Wall from "./Wall";

function MainBody() {
  return (
    <div className="d-inline-flex">
      <Wall />
      <SidePanel />
    </div>
  );
}

export default MainBody;
