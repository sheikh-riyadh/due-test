import {
  FaThLarge,
  FaUserNurse
} from "react-icons/fa";


import { MdBloodtype } from "react-icons/md";


export const sidebar_data = [
  {
    path: "/overview",
    name: "Overview",
    icon: <FaThLarge />,
  },
  {
    path: "/due-sample",
    name: "Due Sample",
    icon: <MdBloodtype />,
  },
  {
    path: "/phlebotomist",
    name: "Phlebotomist",
    icon: <FaUserNurse />,
  }
];

export const orgName=["Due","Completed"]
