import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import Modal from "../../modals/Modal";
import SubmitButton from "../../common/SubmitButton";
import DueFormBody from "./DueFormBody";
import { useUpdateDueTestMutation } from "../../../store/services/dueApi/dueApi";

const UpdateDueSample = ({ item, isUpdated}) => {
  const { register, setValue, handleSubmit } = useForm();
  const [isFormOpen, setIsFormOpen] = useState(isUpdated);

  const [updatePopular, { isLoading }] = useUpdateDueTestMutation();

  const handleUpdatePopular = async (data) => {
    const query = {
      id: item?._id,
      data,
    };
    try {
      const result = await updatePopular(query);
      if (result?.data?.acknowledged) {
        toast.success("Update test successfully 😀", { id: "success" });
      } else {
        toast.error(
          result?.error?.data?.message
            ? result?.error?.data?.message
            : "Something went wrong",
        );
      }
    } catch (error) {
      toast.error("Something went wrong 😥", { id: error });
    }
  };

  useEffect(() => {
    for (const key in item) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        if (
          key === "_id" ||
          key === "secret" ||
          key === "phlebotomist"
        ) {
          continue;
        } else {
          setValue(key, item[key]);
        }
      }
    }
  }, [setValue, item]);

  return (
    <>
      <span
        className="text-danger cursor-pointer border border-danger text-center p-2 rounded-full bg-[#171f12] duration-300"
        title="Delete"
        onClick={() => setIsFormOpen((prev) => !prev)}
      >
        <FaEdit className="text-white" />
      </span>
      {isFormOpen && (
        <Modal
          title={"Update"}
          className="w-[350px] xl:w-[500px]"
          onClose={setIsFormOpen}
          isOpen={isFormOpen}
        >
          <form
            onSubmit={handleSubmit(handleUpdatePopular)}
            className="flex flex-col gap-5"
          >
            <DueFormBody register={register} />
            <SubmitButton isLoading={isLoading}>Update</SubmitButton>
          </form>
        </Modal>
      )}
    </>
  );
};

UpdateDueSample.propTypes = {
  item: PropTypes.object,
  isOpen: PropTypes.bool,
  isAdd:PropTypes.bool,
  invoice:PropTypes.string
};

export default UpdateDueSample;
