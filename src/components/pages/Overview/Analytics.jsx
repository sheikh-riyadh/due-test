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
import { orgName } from "../../../data/sidebar_data";

const Analytics = ({ analyticeData }) => {
  const color_1 = "#1E90FF",
    color_2 = "#2ECC71",
    color_3 = "#9B59B6",
    color_4 = "#E67E22";

  return (
    <div className="w-full bg-card text-card md:h-[550px]  col-span-9 gap-5 border border-border-primary md:pb-28 lg:pb-36 rounded-sm">
      <div className="flex gap-5 p-5 justify-between flex-wrap">
        <div className="flex flex-col gap-2 text-primary">
          <span className="font-bold text-2xl">Welcome back</span>
          <span className="">Updated overview of your external test</span>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          {[color_1, color_2, color_3, color_4].map((color, index) => (
            <div key={color} className="flex items-center gap-2">
              <FaCircle
                className={`text-md rounded-full`}
                style={{
                  color: color,
                }}
              />
              <span className="text-primary">{orgName[index]}</span>
            </div>
          ))}
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
                border: "rgba(var(--border))",
                color: "rgba(var(--copy-secondary))",
              }}
            />
            <Bar
              name="Popular total test"
              dataKey="p"
              fill={`${color_2}`}
              barSize={10}
            />
            <Bar
              name="Ibn sina total test"
              dataKey="i"
              fill={`${color_1}`}
              barSize={10}
            />
            <Bar
              name="Asgar-ali total test"
              dataKey="a"
              fill={`${color_3}`}
              barSize={10}
            />
            <Bar
              name="Medinova total test"
              dataKey="m"
              fill={`${color_4}`}
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
