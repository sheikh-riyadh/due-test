import { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useAddPhlebotomistMutation } from "../../../store/services/phlebotomistApi/phlebotomistApi";
import SubmitButton from "../../common/SubmitButton";
import PhlebotomistFormBody from "./PhlebotomistFormBody";

const PhlebotomistForm = ({ setIsModalOpen }) => {
  const [photo, setPhoto] = useState("");
  const { register, handleSubmit } = useForm();
  const [addPhle, { isLoading }] = useAddPhlebotomistMutation();

  const handleAddPhlebotomist = async (data) => {
    const result = await addPhle({ ...data, photo });
    if (result?.data?.acknowledged) {
      toast.success("successfully added", { id: "success" });
      setIsModalOpen(false);
    } else {
      toast.error(
        result?.error?.data?.message
          ? result?.error?.data?.message
          : "Something went wrong",
      );
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleAddPhlebotomist)}
        className="flex flex-col gap-5"
      >
        <PhlebotomistFormBody register={register} photo={photo} setPhoto={setPhoto} />
        <SubmitButton isLoading={isLoading}>Save</SubmitButton>
      </form>
    </div>
  );
};

PhlebotomistForm.propTypes = {
  setIsModalOpen: PropTypes.func,
};

export default PhlebotomistForm;
