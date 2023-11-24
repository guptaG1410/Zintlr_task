import React from "react";
import logo from "../assets/zintlr.jpg";
import { FiSettings } from "react-icons/fi";
import { GrHomeRounded, GrTransaction } from "react-icons/gr";
import { BsBank2 } from "react-icons/bs";
import { BiArch } from "react-icons/bi";
import { CgTemplate } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { LuNetwork } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";

const Sidebar = () => {
  const Menus = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <GrHomeRounded />,
    },
    {
      key: "bullion operations",
      label: "Bullion Operations",
      icon: <BiArch />,
    },
    {
      key: "transactions",
      label: "Transactions",
      icon: <GrTransaction />,
    },
    {
      key: "your_network",
      label: "Your Network",
      icon: <LuNetwork />,
    },
    {
      key: "consumers",
      label: "Consumers",
      icon: <IoIosPeople />,
    },
    {
      key: "other_operations",
      label: "Other Operations",
      icon: <CgTemplate />,
    },
    {
      key: "manage_bank",
      label: "Manage Bank Accounts",
      icon: <BsBank2 />,
    },
    {
      key: "faq",
      label: "FAQ",
      icon: <FaRegNewspaper />,
    },
    {
      key: "customize_dashboard",
      label: "Customize Dashboard",
      icon: <FiSettings />,
    },
  ];

  return (
    <div className="h-full flex flex-col fixed">
      <div className="flex items-center mt-5 ml-7 mb-8 cursor-pointer">
        <img src={logo} className="w-8" alt="logo" />
        <span className="text-xl text-purple">ZINTLR</span>
      </div>
      {Menus.map((menu) => {
        return (
          <div key={menu.key} className="ml-2 mr-2">
            {menu.key === "consumers" ? (
              <div className="text-base h-12 flex gap-2 items-center pl-4  rounded-full text-white bg-blue rounded-full cursor-pointer">
                {menu.icon}
                <span>{menu.label}</span>
              </div>
            ) : (
              <div className="text-base h-12 flex gap-2 items-center pl-4 rounded-full hover:text-white hover:bg-blue rounded-full cursor-pointer">
                {menu.icon}
                <span>{menu.label}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
