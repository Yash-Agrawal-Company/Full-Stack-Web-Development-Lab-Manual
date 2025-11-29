import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>My Blog</h2>
      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "black",
    color: "white",
    alignItems: "center"
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "20px" },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  }
};

export default Navbar;
