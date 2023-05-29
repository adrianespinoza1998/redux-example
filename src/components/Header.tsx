import { useSelector } from "react-redux";

export const Header = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <div>
      <h1>Ejemplo de redux toolkit</h1>
      <ul>
        <li>Username: {user.username}</li>
        <li>Password: {user.password}</li>
        <li>Email: {user.email}</li>
      </ul>
    </div>
  );
};
