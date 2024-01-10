import React, { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    sessionStorage.clear();
    localStorage.removeItem("User Information");
    window.location.href = "/home";
  };
  return (
    <div className="h-[9vh] relative px-5">
      <button
        className="border px-2 py-2 text-2xl my-2 shadow-md hover:shadow-xl hover:scale-[1.03] transition duration-150"
        style={{ borderRadius: "50%" }}
        onClick={() => setShow(!show)}
      >
        ⚙️
      </button>
      {show ? (
        <div className="bg-white border p-4 absolute z-200">
          <button onClick={handleClick}>Logout</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
