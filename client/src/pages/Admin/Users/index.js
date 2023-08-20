import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UserList,
  UnBlockUser,
  BlockUser,
} from "../../../actions/adminactions";
import User from "../../../components/Admin/User";

export default function Users() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.adminreducer?.data);
  useEffect(() => {
    dispatch(UserList());
  }, []);

  const handleBlock = (id) => {
    dispatch(BlockUser(id));
  };

  const handleUnBlock = (id) => {
    dispatch(UnBlockUser(id));
  };

  return (
    <>
      <div className="container h-100 w-100 py-5">
        <div className="row d-flex p-5 h-100">
          <div className="col-8">
            <div>
              <h3 className="display-5 mb-4 text-black">Users</h3>
            </div>
            {!data?.length ? (
              <p>No users registered</p>
            ) : (
              <table className="table table-hover fs-md-3 fs-4">
                <thead>
                  <tr>
                    <th scope="col">Sno.</th>
                    <th scope="col">Name</th>
                    <th scope="col">email</th>
                    <th scope="col">Block/Unblock</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((ele, index) => {
                    return (
                      <User
                        index={index}
                        user={ele}
                        handleBlock={handleBlock}
                        handleUnBlock={handleUnBlock}
                      />
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
