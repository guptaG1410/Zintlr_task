import React from "react";
import { Card, Button, Flex } from "antd";
import {
  UserAddOutlined,
  CarryOutOutlined,
  ExclamationCircleOutlined,
  ThunderboltOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import consumerIcon from "../assets/Consumers.jpg";

const Actions = () => {
  const tableData = [
    {
      id: 1,
      name: "Raghuvendra Raga",
      assests: "$2000",
      revenue: "$2000",
      kyc: "Done",
      facilitator1: "Arun Jha",
      facilitator2: "Anika Singh",
      zone: "South",
      account: "Business",
      tpa: "1234567890@trucard",
    },
    {
      id: 2,
      name: "Raghuvendra Raga",
      assests: "$2000",
      revenue: "$2000",
      kyc: "Done",
      facilitator1: "Arun Jha",
      facilitator2: "Anika Singh",
      zone: "South",
      account: "Business",
      tpa: "1234567890@trucard",
    },
    {
      id: 3,
      name: "Raghuvendra Raga",
      assests: "$2000",
      revenue: "$2000",
      kyc: "Done",
      facilitator1: "Arun Jha",
      facilitator2: "Anika Singh",
      zone: "South",
      account: "Business",
      tpa: "1234567890@trucard",
    },
    {
      id: 4,
      name: "Raghuvendra Raga",
      assests: "$2000",
      revenue: "$2000",
      kyc: "Done",
      facilitator1: "Arun Jha",
      facilitator2: "Anika Singh",
      zone: "South",
      account: "Business",
      tpa: "1234567890@trucard",
    },
    {
      id: 5,
      name: "Raghuvendra Raga",
      assests: "$2000",
      revenue: "$2000",
      kyc: "Done",
      facilitator1: "Arun Jha",
      facilitator2: "Anika Singh",
      zone: "South",
      account: "Business",
      tpa: "1234567890@trucard",
    },
    {
      id: 6,
      name: "Raghuvendra Raga",
      assests: "$2000",
      revenue: "$2000",
      kyc: "Done",
      facilitator1: "Arun Jha",
      facilitator2: "Anika Singh",
      zone: "South",
      account: "Business",
      tpa: "1234567890@trucard",
    },
    {
      id: 7,
      name: "Raghuvendra Raga",
      assests: "$2000",
      revenue: "$2000",
      kyc: "Done",
      facilitator1: "Arun Jha",
      facilitator2: "Anika Singh",
      zone: "South",
      account: "Business",
      tpa: "1234567890@trucard",
    },
    {
      id: 8,
      name: "Raghuvendra Raga",
      assests: "$2000",
      revenue: "$2000",
      kyc: "Done",
      facilitator1: "Arun Jha",
      facilitator2: "Anika Singh",
      zone: "South",
      account: "Business",
      tpa: "1234567890@trucard",
    },
  ];

  return (
    <>
      <div className="flex justify-between mt-10">
        <Card
          className="w-2/5 mr-1"
          style={{ background: "rgb(233, 244, 247) " }}
        >
          <Flex justify="space-between">
            <div className="flex justify-between flex-col">
              <Link to="/">
                <p className="text-sky-500 text-sm">
                  Consumer {">"} Manage Consumers
                </p>
              </Link>
              <p className="text-neutral-950 text-xl">Actions</p>
              <div className=" flex justify-between">
                <Button type="primary" style={{ background: "#000" }}>
                  <UserAddOutlined />
                  Add Consumers{" "}
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center h-24 w-24 mr-4">
              <img src={consumerIcon} alt="consumers-icon" />
            </div>
          </Flex>
        </Card>

        <Card className="w-1/5 mr-1" style={{ backgroundColor: "#f2b50d52" }}>
          <div className="flex items-center justify-center">
            <p className="font-bold">
              <CarryOutOutlined style={{ fontSize: "32px", color: "orange" }} />{" "}
              You have <span className="text-lg text-gray-500">276</span> KYC
              Approval Pending
            </p>
          </div>
          <Button
            className="mt-4 p-3 flex items-center justify-center"
            style={{ width: "60%", background: "#000" }}
            type="primary"
            block
          >
            View List
          </Button>
        </Card>

        <Card className="w-1/5 mr-1" style={{ backgroundColor: "#ff2c0221" }}>
          <div className="flex items-center justify-center">
            <p className="font-bold">
              <ExclamationCircleOutlined
                style={{ fontSize: "32px", color: "red" }}
              />{" "}
              There are<span className="text-lg text-gray-500 p-1">182</span>{" "}
              <span>high risk consumers</span>
            </p>
          </div>
          <Button
            className="mt-4 p-3 flex items-center justify-center"
            style={{ width: "60%", background: "#000" }}
            type="primary"
            block
          >
            View List
          </Button>
        </Card>

        <Card className="w-1/5" style={{ backgroundColor: "#105cad21" }}>
          <div className="flex items-center justify-center">
            <p className="font-bold">
              <ThunderboltOutlined
                style={{ fontSize: "32px", color: "cyan" }}
              />{" "}
              There are<span className="text-lg text-gray-500 p-1">32</span>
              <span className="block">tickets open</span>
            </p>
          </div>
          <Button
            className="mt-4 ml-2 p-3 flex items-center justify-center"
            style={{ width: "60%", background: "#000" }}
            type="primary"
            block
          >
            View List
          </Button>
        </Card>
      </div>
      <div className="pl-12 mt-2">
        <p className="text-neutral-950 text-xl">Customer Overview</p>
        <div className="flex items-center bg-slate-100 rounded-md border border-sky-500 py-2 pl-4 pr-10 h-9 w-72 mt-2 ">
          <input
            className="focus:outline-none bg-slate-100 w-64"
            type="text"
            placeholder="Search Consumers"
          ></input>
          <span>
            <SearchOutlined />
          </span>
        </div>
        <div className="mt-2">
          <table>
            <thead>
              <tr className="bg-sky-300  h-12 ">
                <th className="pl-9">Consumer Name</th>
                <th className="pl-9">Assests</th>
                <th className="pl-9">Revenue</th>
                <th className="pl-9">KYC Status</th>
                <th className="pl-9">Facilitator</th>
                <th className="pl-9">Zone</th>
                <th className="pl-15">Account Type</th>
                <th className="pl-20 pr-3">TPA</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => {
                return (
                  <>
                    <tr
                      key={item.id}
                      className={
                        index % 2 !== 0 ? "bg-slate-100 h-20 pl-3" : "h-20 pl-3"
                      }
                    >
                      <td>{item.name}</td>
                      <td>{item.assests}</td>
                      <td>{item.revenue}</td>
                      <td>{item.kyc}</td>
                      <td>{item.facilitator1}</td>
                      <td>{item.facilitator2}</td>
                      <td>{item.zone}</td>
                      <td>{item.account}</td>
                      <td>{item.tpa}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Actions;
