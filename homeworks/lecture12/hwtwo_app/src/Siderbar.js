import React from "react";

function Sidebar() {
  return (
    <aside
      className="siderbar"
      style={{
        flex: "1",
        border: "5px solid black",
        padding: "20px",
        margin: "10px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Sidebar</h2>
    </aside>
  );
}

export default Sidebar;
