// function Card(props) {
//   return (
//     <div style={{ border: "2px solid black", padding: "10px" }}>
//       <h2>{props.title}</h2>
//       {props.children}
//     </div>
//   );
// }

// export default Card;
function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      width: "300px",
      marginBottom: "10px"
    }}>
      {children}
    </div>
  );
}

export default Card;

