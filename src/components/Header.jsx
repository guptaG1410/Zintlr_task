import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { BiNotification } from "react-icons/bi";
import img1 from "../assets/img1.jpg";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row  mt-2 items-center justify-between ml-5">
        <div className="flex items-center rounded-full py-2 pl-4 pr-20 mr-32">
          <form class="flex items-center">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <span>
                  <BsSearch />
                </span>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search (Eg.Rewards)"
              />
            </div>
          </form>
        </div>

        <div className="flex flex-row gap-4 ml-8">
          <FaSackDollar fontSize={30} />
          <AiTwotoneFolderOpen fontSize={30} />
          <BiNotification fontSize={30} />
          <FaRegBell fontSize={30} />
        </div>
        <div className="flex items-center border p-4 rounded-xl ml-8">
          <span className="text-orange font-semibold ">Gold</span>
          <div className="ml-2 mr-2">
            <p className="text-lime-500">0.34%</p>
          </div>
          <div className="ml-3">
            <p>Buy:$7300.00</p>
            <p>Sell:$7300.00</p>
          </div>
        </div>
        <div className="w-20 ml-8">
          <img className="rounded-full" src={img1} alt="1" />
        </div>
      </div>
    </div>
  );
};

export default Header;
