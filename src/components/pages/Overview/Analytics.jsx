import React from "react";
import { FaCircle } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const Analytics = ({ analyticeData }) => {
  const color_1 = "#F2A65A",
    color_2 = "#22c55e";

  return (
    <div className="w-full bg-card text-white md:h-[550px]  col-span-9 gap-5 shadow-md md:pb-28 lg:pb-36 rounded-sm">
      <div className="flex gap-5 p-5 justify-between flex-wrap">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-2xl">Welcome back</span>
          <span className="">Take a look at the updated overview</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FaCircle className="text-md rounded-full text-[#F2A65A]" />
            <span>Due</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCircle className="text-md rounded-full text-green-600" />
            <h1>Complete</h1>
          </div>
        </div>
      </div>

      <React.Fragment>
        <ResponsiveContainer>
          <BarChart width={750} height={600} data={analyticeData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} />
            <YAxis axisLine={false} />
            <Tooltip
              contentStyle={{
                background: "rgba(var(--background))",
                borderRadius: "10px",
                border: "rgba(var(--white))",
                color: "rgba(var(--secondary))",
              }}
            />

            <Bar name="Due" dataKey="uv" fill={`${color_1}`} barSize={10} />
            <Bar
              name="Completed"
              dataKey="pv"
              fill={`${color_2}`}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </React.Fragment>
    </div>
  );
};

Analytics.propTypes = {
  analyticeData: PropTypes.array,
};

export default Analytics;
