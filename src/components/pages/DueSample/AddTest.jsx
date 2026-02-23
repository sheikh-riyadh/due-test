import { useState } from "react";
import Button from "../../common/Button";
import Modal from "../../modals/Modal";
import DueForm from "./DueForm";
import Input from "../../common/Input";

const AddTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
        <Button
          onClick={() => setIsModalOpen((prev) => !prev)}
          className="w-36"
        >
          Add 2hrs
        </Button>

      {isModalOpen && (
        <Modal
          title={"Add Test"}
          className="w-[350px] xl:w-[500px]"
          onClose={setIsModalOpen}
          isOpen={isModalOpen}
        >
          <DueForm invoice={invoice} setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </>
  );
};

export default AddTest;
