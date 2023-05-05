export function Gretting({ title, name = "User not defined" }) {
  return (
    <h1>
      {title} dice {name}
    </h1>
  );
}
export function UserCard({ name, amount, married, address, green }) {
  console.log(name, amount, married, address, green);
  return (
    <div>
      <h1>{name}</h1>
      <p>{amount}</p>
      <p>{married ? "Married" : "Single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
    </div>
  );
}
