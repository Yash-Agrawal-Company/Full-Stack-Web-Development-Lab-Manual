import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" placeholder="Name"
          value={name} onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <textarea placeholder="Message"
          value={message} onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.btn}>Submit</button>
      </form>

      {submitted && (
        <div style={styles.output}>
          <h3>Submitted Details</h3>
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Message:</b> {message}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    gap: "10px",
    margin: "auto"
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #aaa"
  },
  textarea: {
    padding: "10px",
    height: "80px",
    borderRadius: "8px",
    border: "1px solid #aaa"
  },
  btn: {
    padding: "10px",
    background: "black",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer"
  },
  output: {
    marginTop: "20px",
    padding: "15px",
    background: "#f3f3f3",
    borderRadius: "12px",
    width: "350px",
    marginInline: "auto"
  }
};

export default Form;
