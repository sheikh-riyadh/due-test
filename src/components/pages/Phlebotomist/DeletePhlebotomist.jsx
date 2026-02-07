import { useState } from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import DeleteModal from "../../modals/DeleteModal";
import { useDeletePhlebotomistMutation } from "../../../store/services/phlebotomistApi/phlebotomistApi";

const DeletePhlebotomist = ({ deleteId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletePhle, { isLoading }] = useDeletePhlebotomistMutation();

  return (
    <>
      <span
        className="text-danger cursor-pointer border border-danger text-center p-2 rounded-full bg-rose-500 duration-300"
        title="Delete"
        onClick={()=>setIsModalOpen(prev=>!prev)}
      >
        <FaTrash className="text-white" />
      </span>

      {isModalOpen && (
        <DeleteModal
          deleteId={deleteId}
          handleDeleteFunction={deletePhle}
          isLoading={isLoading}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          key={"delete"}
        />
      )}
    </>
  );
};

DeletePhlebotomist.propTypes = {
  deleteId: PropTypes.string,
};

export default DeletePhlebotomist;
