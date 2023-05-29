import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import { Header } from "./components/Header";
import { Email } from "./components/Email";

const App = () => {
  useEffect(() => {
    dispatch(addUser({ username: "test", password: "test", email: "test" }));
  }, []);

  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <Email />
    </div>
  );
};

export default App;
