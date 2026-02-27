import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from "../../common/SubmitButton";
import DueFormBody from "./DueFormBody";
import { useAddDueTestMutation } from "../../../store/services/dueApi/dueApi";
import moment from "moment";

const DueForm = ({ setIsModalOpen, invoice }) => {
  const [addTest, { isLoading }] = useAddDueTestMutation();
  const now = moment();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      invoice,
    },
  });

  const handleAddTest = async (data) => {
    const finalData = {
      ...data,
      fastingDate: now.format("YYYY-MM-DD"),
      fastingTime: now.format("HH:mm"),
    };
    const result = await addTest({ data: finalData });
    if (result?.data?.acknowledged) {
      toast.success("Test added successfully", { id: "success" });
      setIsModalOpen(false);
    } else {
      toast.error(result?.error?.data?.message);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleAddTest)}
        className="flex flex-col gap-3"
      >
        <DueFormBody register={register} />
        <SubmitButton isLoading={isLoading}>Save</SubmitButton>
      </form>
    </div>
  );
};

DueForm.propTypes = {
  setIsModalOpen: PropTypes.func,
  invoice: PropTypes.string,
};

export default DueForm;
