import { useState } from "react";
import Table from "../../common/Table";
import Pagination from "../../common/Pagination";
import Spinner from "../../common/Spinner";
import PropTypes from "prop-types";
import { useGetPhlebotomistQuery } from "../../../store/services/phlebotomistApi/phlebotomistApi";
import DeletePhlebotomist from "./DeletePhlebotomist";
import UpdatePhlebotomist from "./UpdatePhlebotomist";

const PhlebotomistTable = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const query = new URLSearchParams({
    search,
    limit,
    page: currentPage,
  }).toString();

  const { data, isLoading } = useGetPhlebotomistQuery(query);

  const pages = Math.ceil(Math.abs(data?.total ?? 0) / parseInt(limit));

  return (
    <div className="rounded-md shadow-md">
      {!isLoading ? (
        <div>
          <Table
            className="font-normal"
            tableData={data?.data}
            columns={[
              {
                name: "Phlebotomist Name",
                dataIndex: "name",
                key: "name",
              },
              {
                name: "Phlebotomist ID",
                dataIndex: "phlebotomist_id",
                key: "phlebotomist_id",
              },
              {
                name: "Phlebotomist Photo",
                render: ({ item }) => {
                  return (
                    <div className="w-10 h-10 rounded-full">
                      <img className="w-full h-full rounded-full"  src={item?.photo} alt="phlebotomist photo"/>
                    </div>
                  );
                },
              },
              {
                name: "Actions",
                render: ({ item }) => {
                  return (
                    <div className="flex items-center gap-2">
                      <DeletePhlebotomist deleteId={item?._id} />
                      <UpdatePhlebotomist item={item} />
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
            key={"phlebotomist"}
          />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
PhlebotomistTable.propTypes = {
  search: PropTypes.string,
};
export default PhlebotomistTable;
