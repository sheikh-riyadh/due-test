import { useState } from "react";
import { useDeleteDueTestMutation } from "../../../store/services/dueApi/dueApi";
import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";
import DeleteModal from "../../modals/DeleteModal";

const DeleteDueSample = ({ deleteId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletePopularTest, { isLoading }] = useDeleteDueTestMutation();
  return (
    <>
      <span
        className="text-danger cursor-pointer border border-danger text-center p-2 rounded-full bg-rose-500 duration-300"
        title="Delete"
        onClick={() => setIsModalOpen((prev) => !prev)}
      >
        <FaTrash className="text-white" />
      </span>

      {isModalOpen && (
        <DeleteModal
          deleteId={deleteId}
          handleDeleteFunction={deletePopularTest}
          isLoading={isLoading}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          key={"delete"}
        />
      )}
    </>
  );
};

DeleteDueSample.propTypes = {
  deleteId: PropTypes.string,
};

export default DeleteDueSample;
