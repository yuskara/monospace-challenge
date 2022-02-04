import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUsers, toggleUserStatus } from "../store/user-slice";

export const Users = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {store.users.map((user) => {
        return (
          <div key={user.id}>
            {user.name}
            <hr></hr>
            {user.active ? "aktif" : "pasif"}
            <hr></hr>
            <button
              onClick={() =>
                dispatch(toggleUserStatus({ id: user.id, value: !user.active }))
              }
            >
              toggle
            </button>
          </div>
        );
      })}
    </div>
  );
};
