import { useState } from 'react';
import Button from '../../common/Button';
import Modal from '../../modals/Modal';
import DueForm from './DueForm';

const AddTest = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen((prev) => !prev)} className="w-36">
        Add test
      </Button>

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

export default AddTest;