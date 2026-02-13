import { useState } from "react";
import { useDeleteDueTestMutation } from "../../../store/services/dueApi/dueApi";
import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";
import DeleteModal from "../../modals/DeleteModal";
import Button from "../../common/Button";
import { useGetUser } from "../../../hooks/useGetUser";

const DeleteDueSample = ({ deleteId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletePopularTest, { isLoading }] = useDeleteDueTestMutation();
  const { user } = useGetUser();

  const query = new URLSearchParams({
    id: deleteId,
  }).toString();

  return (
    <>
      <Button
        className="text-danger cursor-pointer border border-danger text-center p-2 rounded-full bg-rose-500 duration-300 w-8 disabled:bg-gray-700 disabled:cursor-not-allowed"
        title="Delete"
        disabled={user?.role !== "admin" && true}
        onClick={() => setIsModalOpen((prev) => !prev)}
      >
        <FaTrash className="text-white" />
      </Button>

      {isModalOpen && (
        <DeleteModal
          deleteId={query}
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
