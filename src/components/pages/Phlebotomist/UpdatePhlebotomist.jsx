import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { useUpdatePhlebotomistMutation } from "../../../store/services/phlebotomistApi/phlebotomistApi";
import Modal from "../../modals/Modal";
import PhlebotomistFormBody from "./PhlebotomistFormBody";
import SubmitButton from "../../common/SubmitButton";
import Button from "../../common/Button";
import { useGetUser } from "../../../hooks/useGetUser";

const UpdatePhlebotomist = ({ item }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const [photo, setPhoto] = useState(item?.photo || "");

  const { user } = useGetUser();
  const [updatePhle, { isLoading }] = useUpdatePhlebotomistMutation();

  useEffect(() => {
    if (!item) return;

    Object.entries(item).forEach(([key, value]) => {
      if (key === "_id" || key === "photo") return;
      setValue(key, value);
    });
  }, [item, setValue]);

  const handleUpdatePhlebotomist = async (data) => {
    const query = {
      id: item?._id,
      data: { ...data, photo },
    };

    const result = await updatePhle(query);
    if (result?.data?.acknowledged) {
      toast.success("Updated test successfully 😀");
    } else {
      toast.error(
        result?.error?.data?.message
          ? result?.error?.data?.message
          : "Something went wrong",
      );
    }
  };

  return (
    <>
      <Button
        className="text-danger cursor-pointer border border-danger text-center p-2 rounded-full bg-[#171f12] duration-300 w-8 disabled:bg-gray-700 disabled:cursor-not-allowed"
        title="Edit"
        disabled={user?.role !== "admin" && true}
        onClick={() => setIsFormOpen((prev) => !prev)}
      >
        <FaEdit className="text-white" />
      </Button>

      {isFormOpen && (
        <Modal
          title="Update"
          className="w-[350px]"
          onClose={setIsFormOpen}
          isOpen={isFormOpen}
        >
          <form
            onSubmit={handleSubmit(handleUpdatePhlebotomist)}
            className="flex flex-col gap-5"
          >
            <PhlebotomistFormBody
              register={register}
              photo={photo}
              setPhoto={setPhoto}
            />
            <SubmitButton isLoading={isLoading}>Update</SubmitButton>
          </form>
        </Modal>
      )}
    </>
  );
};

UpdatePhlebotomist.propTypes = {
  item: PropTypes.object,
};

export default UpdatePhlebotomist;
