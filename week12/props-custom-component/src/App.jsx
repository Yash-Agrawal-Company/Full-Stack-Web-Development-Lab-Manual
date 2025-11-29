import React from "react";
import Card from "./Card";
import products from "./ProductData";
import Form from "./Form";

const App = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>E-Commerce Product Catalog</h1>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {products.map((p, index) => (
          <Card
            key={index}
            image={p.image}
            title={p.title}
            description={p.description}
          />
        ))}
      </div>

      <Form />
    </div>
  );
};

export default App;
