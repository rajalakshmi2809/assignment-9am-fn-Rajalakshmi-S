function Product({ name, price }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "10px",
      marginBottom: "10px",
      width: "200px"
    }}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export default Product;

