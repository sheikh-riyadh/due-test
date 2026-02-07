import {useMemo,} from "react";
import cn from "../../utils/cn";
import PropTypes from "prop-types";
import NotFound from "./NotFound";

const Table = ({ columns, tableData, className }) => {

  const data = useMemo(() => {
  if (!tableData) return [];
  return tableData.map((item, index) => ({
    ...item,
    key: item.id ?? index,
  }));
}, [tableData]);


  return (
    <div className="overflow-x-auto">
      {data?.length ? (
        <table
          className={cn(`min-w-full bg-widget rounded-lg shadow-md`, className)}
        >
          <thead className="bg-widget">
            <tr>
              {columns?.map((column, index) => (
                <th key={index} className="p-4 text-left text-primary">
                  <div className="flex items-center justify-between">
                    <span className="whitespace-nowrap">{column.name}</span>{" "}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            className={cn(
              `text-primary text-sm font-light bg-widget`,
              className
            )}
          >
            {data?.map((item, index) => (
              <tr key={index} className="">
                {columns?.map((column, index) => (
                  <td key={index} className="p-4 border-t border-slate-300">
                    {column?.render ? (
                      <column.render item={item} />
                    ) : (
                      <span
                        className="whitespace-nowrap"
                        title={
                          item[column?.dataIndex]?.length > 30
                            ? item[column?.dataIndex]
                            : undefined
                        }
                      >
                        {item[column?.dataIndex]?.length > 30
                          ? item[column?.dataIndex]?.slice(0, 30) + "..."
                          : item[column?.dataIndex]
                          ? item[column?.dataIndex]
                          : "N/A"}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

Table.propTypes = {
  tableData: PropTypes.array,
  columns: PropTypes.array,
  className: PropTypes.string,
};

export default Table;
