import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../../modals/Modal";
import PropTypes from "prop-types";
import DueForm from "./DueForm";
import { clearTest } from "../../../store/features/dueAndCompleteTest/dueAndCompleteTestSlice";

const IsAdd = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearTest());
  }, [dispatch]);

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
