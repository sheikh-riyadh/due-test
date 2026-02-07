import { useState } from "react";
import Button from "../../common/Button";
import Modal from "../../modals/Modal";
import PhlebotomistForm from "./PhlebotomistForm";

const AddPhlebotomist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen((prev) => !prev)} className="w-40">
        Add Phlebotomist
      </Button>

      {isModalOpen && (
        <Modal
          title={"Add Test"}
          className="w-[350px]"
          onClose={setIsModalOpen}
          isOpen={isModalOpen}
        >
          <PhlebotomistForm setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </>
  );
};

export default AddPhlebotomist;
