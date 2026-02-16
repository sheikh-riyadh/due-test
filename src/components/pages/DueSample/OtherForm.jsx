import { useForm } from "react-hook-form";
import { useAddDueTestMutation } from "../../../store/services/dueApi/dueApi";
import toast from "react-hot-toast";
import SubmitButton from "../../common/SubmitButton";
import PropTypes from "prop-types";
import OtherFormBody from "./OtherFormBody";

const OtherForm = ({ setIsOtherOpen }) => {
  const [createPopularTest, { isLoading }] = useAddDueTestMutation();
  const { register, handleSubmit} = useForm();

  const handleCreatePopular = async (data) => {
    const result = await createPopularTest({ data });
    if (result?.data?.acknowledged) {
      toast.success("Test added successfully", { id: "success" });
      setIsOtherOpen(false);
    } else {
      toast.error(result?.error?.data?.message);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleCreatePopular)}
        className="flex flex-col gap-3"
      >
        <OtherFormBody register={register} />
        <SubmitButton isLoading={isLoading}>Save</SubmitButton>
      </form>
    </div>
  );
};

OtherForm.propTypes = {
  setIsOtherOpen: PropTypes.func,
};

export default OtherForm;
