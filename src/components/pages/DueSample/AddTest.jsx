import { useState } from "react";
import Button from "../../common/Button";
import Modal from "../../modals/Modal";
import DueForm from "./DueForm";
import OtherForm from "./OtherForm";

const AddTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOtherOpen, setIsOtherOpen]=useState(false)

  return (
    <>
      <div className="flex items-center gap-5">
        <Button
          onClick={() => setIsModalOpen((prev) => !prev)}
          className="w-36"
        >
          Add 2hrs
        </Button>
        <Button
          onClick={() => setIsOtherOpen((prev) => !prev)}
          className="w-36"
        >
          Add other test
        </Button>
      </div>

      {isModalOpen && (
        <Modal
          title={"Add Test"}
          className="w-[350px] xl:w-[500px]"
          onClose={setIsModalOpen}
          isOpen={isModalOpen}
        >
          <DueForm setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
      {isOtherOpen && (
        <Modal
          title={"Add Test"}
          className="w-[350px] xl:w-[500px]"
          onClose={setIsOtherOpen}
          isOpen={isOtherOpen}
        >
          <OtherForm setIsOtherOpen={setIsOtherOpen} />
        </Modal>
      )}
    </>
  );
};

export default AddTest;
