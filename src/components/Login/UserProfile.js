import React from "react";

function UserProfile({ user }) {
  return (
    <>
      <div className="container d-flex flex-column my-5">
        <h1 className="text-center ">User Profile</h1>
        <br />
        <div className="firstname">
          <h2>First Name : {user.firstName}</h2>{" "}
        </div>
        <div className="firstname">
          <h2>Last Name : {user.lastName}</h2>{" "}
        </div>
        <div className="firstname">
          <h2>Email : {user.email}</h2>{" "}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
