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
import { useGetInvoice } from "../../../hooks/useGetInvoice";
import IsAdd from "./IsAdd";

const DueSampleTable = ({ date, status }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const { invoice } = useGetInvoice();

  const query = new URLSearchParams({
    invoice: invoice?.length === 9 ? invoice : "",
    limit,
    page: currentPage,
    date: date ? date : "",
    status,
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
                  return <span>{item?.drug ? item?.drug : "N/A"}</span>;
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
                      <UpdateDueSample
                        item={item}
                        isUpdated={
                          invoice?.length === 9 &&
                          invoice === item?.invoice &&
                          data?.data?.length === 1
                        }
                      />
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

      {invoice?.length === 9 && data?.data?.length === 0 && <IsAdd />}
    </div>
  );
};
DueSampleTable.propTypes = {
  invoice: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string,
  setValue: PropTypes.func,
};
export default DueSampleTable;
