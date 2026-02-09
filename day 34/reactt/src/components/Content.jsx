// import StatCard from "./StatCard";

// function Content() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h3>Overview</h3>

//       <div style={{ display: "flex", gap: "15px" }}>
//         <StatCard title="Users" value="1200" />
//         <StatCard title="Orders" value="320" />
//         <StatCard title="Revenue" value="₹45,000" />
//       </div>
//     </div>
//   );
// }

// export default Content;
import StatCard from "./StatCard";

function Content() {
  return (
    <div style={{ padding: "20px" }}>
      <h3>Overview</h3>

      <div style={{ display: "flex", gap: "15px" }}>
        <StatCard title="Users" value="1200" />
        <StatCard title="Orders" value="320" />
        <StatCard title="Revenue" value="₹45,000" />
      </div>
    </div>
  );
}

export default Content;

