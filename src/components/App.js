import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from 'react'

function App() {

  const [isDarkMode, setDarkMode] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"

  function handleDarkMode () {
    setDarkMode(!isDarkMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{isDarkMode? 'Dark Mode': 'Light Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
