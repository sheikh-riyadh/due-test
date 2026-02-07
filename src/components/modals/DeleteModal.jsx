import { FaQuestionCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import Modal from "./Modal";
import toast from "react-hot-toast";
import Button from "../common/Button";
import SubmitButton from "../common/SubmitButton";

const DeleteModal = ({
  setIsModalOpen,
  isModalOpen,
  isLoading,
  handleDeleteFunction,
  deleteId,
}) => {
  const handleDelete = async () => {
    try {
      const result = await handleDeleteFunction(deleteId);

      if (result.error) {
        toast.error(result?.error?.data?.message, { id: "delete_error" });
      } else {
        toast.success("Deleted successfully 😀", { id: "delete_success" });
      }
    } catch (error) {
      toast.error("Something went wrong 😓", { id: error });
    }
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
        isOutsideClick={false}
        className="w-[330px]"
      >
        <div className="flex flex-col items-center justify-center gap-5 w-full">
          <div className="flex flex-col gap-5 items-center justify-center">
            <FaQuestionCircle className="text-7xl text-yellow-300" />
            <h1 className="text-lg text-center font-bold">
              Are your sure you want to delete?
            </h1>
          </div>

          <div className="flex items-center justify-center w-full gap-2">
            <Button onClick={() => setIsModalOpen((prev) => !prev)}>
              Cancel
            </Button>
            <SubmitButton
              onClick={handleDelete}
              isLoading={isLoading}
              loadingText="Deleting..."
              className={"bg-rose-500"}
            >
              Sure
            </SubmitButton>
          </div>
        </div>
      </Modal>
    </div>
  );
};

DeleteModal.propTypes = {
  setIsModalOpen: PropTypes.func,
  handleDeleteFunction: PropTypes.func,
  isModalOpen: PropTypes.bool,
  isLoading: PropTypes.bool,
  deleteId: PropTypes.string,
};

export default DeleteModal;
