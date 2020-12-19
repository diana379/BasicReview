import React from "react";

function Home({ handleLogOut }) {
  return (
    <div className="home">
      <div className="login-divider">
        <button className="logout-button" onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
