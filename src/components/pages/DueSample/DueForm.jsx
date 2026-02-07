import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from "../../common/SubmitButton";
import DueFormBody from "./DueFormBody";
import { useAddDueTestMutation } from "../../../store/services/dueApi/dueApi";

const DueForm = ({ setIsModalOpen }) => {
  const [createPopularTest, { isLoading }] = useAddDueTestMutation()
  const { register, handleSubmit } = useForm();

  const handleCreatePopular = async (data) => {
    const result = await createPopularTest(data);
    if (result?.data?.acknowledged) {
      toast.success("Test added successfully", { id: "success" });
      setIsModalOpen(false);
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleCreatePopular)}
        className="flex flex-col gap-3"
      >
        <DueFormBody register={register}/>
        <SubmitButton isLoading={isLoading}>Save</SubmitButton>
      </form>
    </div>
  );
};

DueForm.propTypes = {
  setIsModalOpen: PropTypes.func,
};

export default DueForm;
