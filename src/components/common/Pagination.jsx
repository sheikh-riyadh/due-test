import PropTypes from "prop-types";
import Select from "./Select";

const Pagination = ({ pages, setCurrentPage, setLimit, currentPage }) => {
  return (
    <div className="flex gap-3 items-center justify-end p-5 bg-widget">
      {[...Array(pages ? pages : 0).keys()]?.map((page) => (
        <div key={page}>
          <div
            onClick={() => setCurrentPage(page)}
            key={page}
            className={`px-3 py-1 cursor-pointer rounded-md ${
              currentPage == page ? "bg-[#abd006] text-white" : "bg-[#047857] text-white"
            }`}
          >
            <span className="font-bold">{page + 1}</span>
          </div>
        </div>
      ))}
      <div>
        <Select
          onChange={(event) => {
            setLimit(event.target.value), setCurrentPage(0);
          }}
          className="text-primary p-1.5 rounded-md"
          defaultValue="10"
          options={[10,20,30,50]}
        />
      </div>
    </div>
  );
};

Pagination.propTypes = {
  pages: PropTypes.number,
  setCurrentPage: PropTypes.func,
  setLimit: PropTypes.func,
  currentPage: PropTypes.number,
};
export default Pagination;