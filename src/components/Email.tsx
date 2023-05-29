import { useSelector, useDispatch } from "react-redux";
import { changeEmail } from "../redux/userSlice";

export const Email = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    dispatch(changeEmail(e.target.value));
  };

  return (
    <div>
      <input value={user.email} onChange={handleChange} />
    </div>
  );
};
