import { useState } from "react";
import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import moment from "moment";
import Table from "../../common/Table";
import UpdateDueSample from "./UpdateDueSample";
import ViewDetails from "./ViewDetails";
import { useGetDueTestQuery } from "../../../store/services/dueApi/dueApi";
import DeleteDueSample from "./DeleteDueSample";
import CountDown from "./CountDown";
import Pagination from "../../common/Pagination";
import Spinner from "../../common/Spinner";

const DueSampleTable = ({ search, selectedDate, sampleStatus }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const query = new URLSearchParams({
    search,
    limit,
    page: currentPage,
    selectedDate: selectedDate ? selectedDate : "",
    sampleStatus,
  }).toString();

  const { data, isLoading } = useGetDueTestQuery(query);
  const pages = Math.ceil(Math.abs(data?.total ?? 0) / parseInt(limit));

  return (
    <div className="rounded-md shadow-md">
      {!isLoading ? (
        <div>
          <Table
            className="font-bold"
            tableData={data?.data}
            columns={[
              {
                name: "Invoice",
                dataIndex: "invoice",
                key: "invoice",
              },
              {
                name: "Test Name",
                dataIndex: "test",
                key: "test",
              },
              {
                name: "Status",
                render: ({ item }) => {
                  return (
                    <span
                      className={`capitalize ${
                        item?.status == "Collected"
                          ? "bg-[#047857] px-5 rounded-full py-1"
                          : "bg-[#F2A65A] px-5 rounded-full py-1 text-white"
                      }`}
                    >
                      {item?.status}
                    </span>
                  );
                },
              },
              {
                name: "Drug Status",
                render: ({ item }) => {
                  return <span>{item?.drug}</span>;
                },
              },
              {
                render: ({ item }) => {
                  return item.status !== "Collected" ? (
                    <CountDown data={item} />
                  ) : (
                    <span>{moment(item?.updatedAtt).format("ll")}</span>
                  );
                },
              },
              {
                name: "Collected By",
                render: ({ item }) => {
                  return (
                    <div>
                      {item?.phlebotomist ? (
                        <div className="flex items-center -space-x-2 overflow-hidden">
                          {item?.phlebotomist?.map((singlephle) => (
                            <div key={singlephle?._id}>
                              <img
                                className={`w-8 h-8 border rounded-full`}
                                src={singlephle?.photo}
                                alt="phlebotomist"
                                title={singlephle.name}
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <FaUser className="border text-xl rounded-full z-30" />
                      )}
                    </div>
                  );
                },
              },

              {
                name: "Actions",
                render: ({ item }) => {
                  return (
                    <div className="flex items-center gap-2">
                      <ViewDetails item={item} />
                      <UpdateDueSample item={item} />
                      <DeleteDueSample deleteId={item?._id} />
                    </div>
                  );
                },
              },
            ]}
          />

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setLimit={setLimit}
            pages={pages}
            key={"due"}
          />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
DueSampleTable.propTypes = {
  search: PropTypes.string,
  sampleStatus: PropTypes.string,
  selectedDate: PropTypes.string,
};
export default DueSampleTable;
