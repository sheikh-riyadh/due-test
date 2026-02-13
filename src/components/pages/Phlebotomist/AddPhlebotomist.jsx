import { useState } from "react";
import Button from "../../common/Button";
import Modal from "../../modals/Modal";
import PhlebotomistForm from "./PhlebotomistForm";
import { useGetUser } from "../../../hooks/useGetUser";

const AddPhlebotomist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useGetUser();

  return (
    <>
      <Button
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="w-40 disabled:bg-gray-700 disabled:cursor-not-allowed"
        disabled={user?.role !== "admin" && true}
      >
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
