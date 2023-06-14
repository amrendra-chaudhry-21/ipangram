import React from "react";
import CreateEventButton from "./CreateEventButton";

import timeZone from "./timeZone";

export default function Sidebar() {
  return (
    <aside className="border p-4">
      <CreateEventButton />
      <timeZone/>
      
    </aside>
  );
}
