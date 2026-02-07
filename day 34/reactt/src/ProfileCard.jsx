
function ProfileCard({ name, role }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      width: "250px",
      borderRadius: "8px"
    }}>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default ProfileCard;
