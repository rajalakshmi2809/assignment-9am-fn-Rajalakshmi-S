// function StatCard({ title, value }) {
//   return (
//     <div
//       style={{
//         padding: "15px",
//         border: "1px solid #ccc",
//         borderRadius: "5px",
//         width: "150px"
//       }}
//     >
//       <h4>{title}</h4>
//       <p>{value}</p>
//     </div>
//   );
// }

// export default StatCard;
function StatCard({ title, value }) {
  return (
    <div
      style={{
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "150px"
      }}
    >
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}

export default StatCard;

