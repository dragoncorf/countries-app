import React, { useState } from "react";
import ListCards from "./ListCards";
import SearchBar from "./SearchBar";

const App = () => {
  const [search, setSearch] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const [code, setCode] = useState("");
  const [currentCode, setCurrentCode] = useState("");
  
  return (
    <div style={{padding:"10px"}}>
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        code={code}
        onCodeChange={setCode}
        onSearch={() => {
          setCurrentSearch(search);
          setCurrentCode(code);
        }}
      />
      <ListCards search={currentSearch} code={currentCode}/>
    </div>
  );
};
export default App;
