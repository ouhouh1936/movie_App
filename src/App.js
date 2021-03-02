import React from "react";

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="1" />
      <Food fav="2imchi" />
      <Food fav="3 imchi" />
    </div>
  );
}

export default App;
