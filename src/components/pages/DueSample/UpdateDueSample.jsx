import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import Modal from "../../modals/Modal";
import SubmitButton from "../../common/SubmitButton";
import DueFormBody from "./DueFormBody";
import { useUpdateDueTestMutation } from "../../../store/services/dueApi/dueApi";
import { useDispatch } from "react-redux";
import { removeInvoice } from "../../../store/features/invoice/invoiceSlice";
import {
  clearTest,
  setCompletedTest,
  setDueTest,
} from "../../../store/features/dueAndCompleteTest/dueAndCompleteTestSlice";
import { useGetDueAndCompleteTest } from "../../../hooks/useGetDueAndCompleteTest";

const UpdateDueSample = ({ item, isUpdated = false }) => {
  const { register, setValue, handleSubmit } = useForm();
  const [isFormOpen, setIsFormOpen] = useState(isUpdated);
  const { due, completed } = useGetDueAndCompleteTest();

  const dispatch = useDispatch();
  const [updatePopular, { isLoading }] = useUpdateDueTestMutation();

  const handleUpdatePopular = async (data) => {
    const query = {
      id: item?._id,
      data: { ...data, due, completed },
    };
    try {
      const result = await updatePopular(query);
      if (result?.data?.acknowledged) {
        toast.success("Update test successfully 😀", { id: "success" });
        dispatch(removeInvoice());
        dispatch(clearTest());
      } else {
        toast.error(
          result?.error?.data?.message
            ? result?.error?.data?.message
            : "Something went wrong",
        );
      }
      dispatch(removeInvoice());
      dispatch(clearTest());
    } catch (error) {
      toast.error("Something went wrong 😥", { id: error });
      dispatch(removeInvoice());
      dispatch(clearTest());
    }
  };

  useEffect(() => {
    for (const key in item) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        if (key === "_id" || key === "secret" || key === "phlebotomist") {
          continue;
        } else {
          setValue(key, item[key]);
        }
      }
    }
    if (isUpdated) {
      dispatch(setDueTest(item?.due));
      dispatch(setCompletedTest(item?.completed));
    }
  }, [setValue, item, dispatch, isUpdated]);

  if (!due?.length && completed?.length) {
    setValue("status", "Completed");
  } else {
    setValue("status", "Due");
  }

  return (
    <>
      {isFormOpen && (
        <Modal
          title={"Update"}
          className="w-[350px] xl:w-[550px]"
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
  isUpdated: PropTypes.bool,
};

export default UpdateDueSample;
