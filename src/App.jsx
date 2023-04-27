import React from "react";
import Input from "./components/input";
import Hover from "./components/hover";
import List from "./components/list";
import Search from "./components/search";
import Request from "./components/request";

function App() {
  return (
    <div>
      <Input />
      <Search />
      <Hover />
      <Request />
      {/* <List /> */}
    </div>
  );
}

export default App;
