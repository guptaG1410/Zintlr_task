import React from "react";
import { Card, Button, Flex } from "antd";
import {
  UserAddOutlined,
  SettingOutlined,
  CarryOutOutlined,
  ExclamationCircleOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import consumerIcon from "../assets/Consumers.jpg";

const Consumer = () => {
  return (
    <>
      <div className="flex justify-between mt-10">
        <Card
          className="w-2/5 mr-1"
          style={{ background: "rgb(233, 244, 247) " }}
        >
          <Flex justify="space-between">
            <div className="flex justify-between flex-col">
              <span className="text-xl mb-5 font-bold font-serif">
                Hello Shakir !<br />
                <p className="text-xs font-thin">
                  You have 12 consumers this week
                </p>
              </span>
              <div className=" flex justify-between">
                <Button type="primary" style={{ background: "#000" }}>
                  <UserAddOutlined />
                  Add{" "}
                </Button>

                <Link to='/manage-consumers'>
                  <Button type="default" className="bg-white mr-2 ml-2">
                    <SettingOutlined /> Manage Consumers
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
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
    </>
  );
};

export default Consumer;
