import React from "react";
import { Link } from "@reach/router";

function Home() {
  return (
    <main>
      <nav>
        <Link to="join">Join Game</Link>
        <Link to="new">New</Link>
      </nav>
    </main>
  );
}

export default Home;
