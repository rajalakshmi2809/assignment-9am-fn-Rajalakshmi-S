// define react component

// A React component is a function or class that returns JSX and controls a part of the user interface
//  Components start with a capital letter

// They are reusable

// They can accept props (inputs)

// They return JSX

// They help break UI into small, manageable


// import Name from "./Name";

// function App() {
//   return (
//     <div>
//       <Name />
//     </div>
//   );
// }

// export default App;

// import Name from "./Name";

// function App() {
//   return (
//     <div>
//       <Name age={22} />
//     </div>
//   );
// }

// export default App;

// import Card from "./Card";

// function App() {
//   return (
//     <Card title="Student Details">
//       <p>Name: Rajalakshmi</p>
//       <p>Age: 22</p>
//     </Card>
//   );
// }

// export default App;

// 5 explain why proprs are read only
// A component CANNOT change its own props
// Props are given by the parent, so only the parent can change them.


// import ProfileCard from "./ProfileCard";

// function App() {
//   return (
//     <div>
//       <ProfileCard name="Rajalakshmi" role="Frontend Developer" />
//       <ProfileCard name="Anita" role="UI Designer" />
//     </div>
//   );
// }

// export default App;

// import Product from "./Product";

// function App() {
//   return (
//     <div>
//       <h1>Product List</h1>

//       <Product name="Laptop" price={55000} />
//       <Product name="Mobile" price={25000} />
//       <Product name="Headphones" price={3000} />
//     </div>
//   );
// }

// export default App;
// import Card from "./Card";

// function App() {
//   return (
//     <div>
//       <Card>
//         <h2>Profile</h2>
//         <p>Name: Rajalakshmi</p>
//         <p>Role: Frontend Developer</p>
//       </Card>

//       <Card>
//         <h2>Product</h2>
//         <p>Laptop</p>
//         <p>Price: ₹55,000</p>
//       </Card>
//     </div>
//   );
// }

// export default App;

// Blogpost
import BlogPost from "./BlogPost";

function App() {
  return (
    <div>
      <BlogPost />
    </div>
  );
}

export default App;


