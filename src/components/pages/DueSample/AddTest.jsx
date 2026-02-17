import { useState } from "react";
import Button from "../../common/Button";
import Modal from "../../modals/Modal";
import DueForm from "./DueForm";
import Input from "../../common/Input";

const AddTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invoice, setInvoice] = useState();

  return (
    <>
      <div className="flex items-center gap-5">
        <Input
          maxLength={9}
          minLength={9}
          placeholder="Add..."
          onChange={(e) => {
            const value = e.target.value;
            setInvoice(value);
            if (value.length === 9) {
              setIsModalOpen(true);
            } else {
              setIsModalOpen(false);
            }
          }}
        />

        <Button
          onClick={() => setIsModalOpen((prev) => !prev)}
          className="w-36"
        >
          Add 2hrs
        </Button>
      </div>

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
