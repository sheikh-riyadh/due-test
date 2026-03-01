import { useState } from "react";
import Modal from "../../modals/Modal";
import PropTypes from "prop-types";
import DueForm from "./DueForm";

const IsAdd = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
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
    </>
  );
};

IsAdd.propTypes = {
  invoice: PropTypes.string,
  isOpen: PropTypes.bool,
  item: PropTypes.object,
};

export default IsAdd;
