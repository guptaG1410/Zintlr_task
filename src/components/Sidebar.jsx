import React from "react";
import logo from "../assets/zintlr.jpg";
import {FiSettings} from 'react-icons/fi'
import {GrHomeRounded,GrTransaction} from 'react-icons/gr'
import {BsBucket,BsBank2} from 'react-icons/bs'
import {CgTemplate} from 'react-icons/cg'
import {FaRegNewspaper} from 'react-icons/fa'
import {LuNetwork} from 'react-icons/lu'
import {IoIosPeople} from 'react-icons/io'


const Sidebar = () => {
  const DASHBOARD = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <GrHomeRounded />,
    },
    {
      key: "build_operations",
      label: "Build Operations",
      icon: <BsBucket />,
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
    <div className="bg-slate-100  h-full text-neutral-500  flex flex-col fixed">
      <div className="flex items-center mt-8 mr-8 ml-7 mb-12 gap-2">
        <img src={logo} className="w-8 h-8" alt="logo" />
        <span className="text-xl text-blue-500">ZINTLR</span>
      </div>
      {DASHBOARD.map((item) => {
        return (
          <>
            {item.label === "Consumers" ? (
              <div className="text-xl flex gap-2 items-center p-3 pb-3 ml-2 bg-sky-400 rounded-3xl text-white">
                {item.icon}
                <span>{item.label}</span>
              </div>
            ) : (
              <div className="text-xl h-20 flex gap-2 items-center p-3 pb-4 ml-2 hover:bg-sky-400 rounded-3xl hover:text-white">
                {item.icon}
                <span>{item.label}</span>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Sidebar;
