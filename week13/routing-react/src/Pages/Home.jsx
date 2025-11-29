import React from "react";

const Home = () => {
  return (
    <div style={styles.page}>
      <h1>Welcome to the Blogging App</h1>
      <p>This is the Home Page. Explore blogs and learn more about us!</p>
    </div>
  );
};

const styles = {
  page: { padding: "30px", textAlign: "center" }
};

export default Home;
