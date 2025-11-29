import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.img} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    width: "260px",
    padding: "15px",
    borderRadius: "16px",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
    margin: "10px",
    textAlign: "center",
    background: "#fff",
  },
  img: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "12px",
  },
};

export default Card;
