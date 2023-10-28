import React from "react";
import { Card } from "flowbite-react";
import defaultpng from "../../../assets/default.png";

const UserProfile = () => {
  return (
    <Card>
      <div className="flex flex-col gap-y-3 items-center pb-10">
        <img src={defaultpng} alt="" className="w-48" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 ">Jane Doe</h5>
        <span className="text-sm text-gray-500 ">DevOps Engineer</span>
        <p>johndoe@gmail.com</p>
        <p>Phone No: +254712345678</p>
        <div className="mt-4 flex lg:mt-6">
          <a
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 "
            href="#"
          >
            <p>Edit</p>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;
