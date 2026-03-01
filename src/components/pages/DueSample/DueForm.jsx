import { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import SubmitButton from "../../common/SubmitButton";
import DueFormBody from "./DueFormBody";
import { useAddDueTestMutation } from "../../../store/services/dueApi/dueApi";
import moment from "moment";
import { useGetInvoice } from "../../../hooks/useGetInvoice";
import { removeInvoice } from "../../../store/features/invoice/invoiceSlice";

const DueForm = ({ setIsModalOpen }) => {
  const [addTest, { isLoading }] = useAddDueTestMutation();
  const now = moment();

  const [test, setTest] = useState(["2hrs after breakfast"]);
  const { invoice } = useGetInvoice();

  const dispatch = useDispatch();
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
      dispatch(removeInvoice());
    } else {
      toast.error(result?.error?.data?.message);
      dispatch(removeInvoice());
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleAddTest)}
        className="flex flex-col gap-3"
      >
        <DueFormBody register={register} test={test} setTest={setTest} />
        <SubmitButton isLoading={isLoading}>Save</SubmitButton>
      </form>
    </div>
  );
};

DueForm.propTypes = {
  setIsModalOpen: PropTypes.func,
};

export default DueForm;
