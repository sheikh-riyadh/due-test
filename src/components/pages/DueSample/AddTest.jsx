import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../common/Button";
import Modal from "../../modals/Modal";
import DueForm from "./DueForm";
import { clearTest } from "../../../store/features/dueAndCompleteTest/dueAndCompleteTestSlice";

const AddTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  if (isModalOpen) {
    dispatch(clearTest());
  }

  return (
    <>
      <Button onClick={() => setIsModalOpen((prev) => !prev)} className="w-36">
        Add 2hrs
      </Button>

      {isModalOpen && (
        <Modal
          title={"Add Test"}
          className="w-[350px] xl:w-[550px]"
          onClose={setIsModalOpen}
          isOpen={isModalOpen}
        >
          <DueForm setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </>
  );
};

export default AddTest;
