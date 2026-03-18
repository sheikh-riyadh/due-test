import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Input from "../components/common/Input";
import AddTest from "../components/pages/DueSample/AddTest";
import DueSampleTable from "../components/pages/DueSample/DueSampleTable";
import { addInvoice } from "../store/features/invoice/invoiceSlice";

const DueSample = () => {
  const [status, setStatus] = useState("Due");
  const [date, setDate] = useState();
  const dispatch = useDispatch();

 const handleInvoice = (e) => {
  const value = e.target.value;
  if(value?.length > 9){
    toast.error('invoice number must be 9 digits', {id:'error'})
    return
  }
  dispatch(addInvoice(value));

  setTimeout(() => {
    e.target.value = "";
  }, 4000);
};

  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <div className="grid xl:grid-cols-2">
          <div className="flex items-center xl:flex-nowrap flex-wrap gap-10">
            <div className="flex items-center justify-center xl:flex-nowrap flex-wrap gap-5 font-bold">
              <span
                onClick={() => setStatus("Due")}
                className={`${status == "Due" ? "bg-[#047857]" : "bg-[#1C2822]"} text-primary px-5 py-1 rounded-full cursor-pointer`}
              >
                Due
              </span>
              <span
                onClick={() => setStatus("Completed")}
                className={`${status == "Completed" ? "bg-[#047857]" : "bg-[#1C2822]"} text-primary px-5 py-1 rounded-full cursor-pointer`}
              >
                Completed
              </span>
              <Input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                title="Due date"
                className={"bg-[#1C2822] py-1 rounded-full"}
              />
            </div>
          </div>
          <div className="flex items-center gap-5 justify-end mt-5 xl:mt-0">
            <Input
              onChange={handleInvoice}
              maxLength="9"
              placeholder="Search..."
              className="bg-[#1C2822]"
              autoFocus
              type="number"
            />

            <AddTest />
          </div>
        </div>
        <div className="bg-[#1f2e2c] rounded-sm overflow-hidden">
          <DueSampleTable date={date} status={status} />
        </div>
      </div>
    </div>
  );
};

export default DueSample;
