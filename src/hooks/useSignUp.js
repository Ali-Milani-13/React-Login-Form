import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { UserContext } from "../App";
const useSignUp = () => {
  const Context = useContext(UserContext);
  const HandleSubmit = (e) => {
    e.preventDefault();

    Context.setError(true);
    if (
      Context.userName.length &&
      Context.password.length &&
      Context.email.length > 0
    ) {
      if (Context.users.length !== 0)
        !Object.values(...Context.users).includes(Context.email) &&
          Context.setUsers([
            ...Context.users,
            {
              id: uuid(),
              UserName: Context.userName,
              Password: Context.password,
              Email: Context.email,
            },
          ]);
      else {
        Context.setUsers([
          ...Context.users,
          {
            id: uuid(),
            UserName: Context.userName,
            Password: Context.password,
            Email: Context.email,
          },
        ]);
      }
    } else {
      Context.setUsers([...Context.users]);
    }
  };
  return { HandleSubmit };
};

export default useSignUp;
