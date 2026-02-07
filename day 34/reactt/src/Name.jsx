// function Name() {
//   return <h1>My Name is Rajalakshmi</h1>;
// }

// export default Name;
function Name(props) {
  return (
    <div>
      <h1>My Name is Rajalakshmi</h1>
      <h2>My Age is {props.age}</h2>
    </div>
  );
}

export default Name;

