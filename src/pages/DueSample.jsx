import { useState } from "react";
import { useSearchDelay } from "../hooks/useSearchDelay";
import Input from "../components/common/Input";
import AddTest from "../components/pages/DueSample/AddTest";
import DueSampleTable from "../components/pages/DueSample/DueSampleTable";


const DueSample = () => {
  const { handleChange, searchValue } = useSearchDelay();
  const [sampleStatus, setSampleStatus] = useState("Due");
  const [selectedDate, setSelectedDate] = useState();
  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <div className="grid xl:grid-cols-2">
          <div className="flex items-center xl:flex-nowrap flex-wrap gap-10">
            <div className="flex items-center justify-center xl:flex-nowrap flex-wrap gap-5 font-bold">
              <span
                onClick={() => setSampleStatus("Due")}
                className={`${sampleStatus == "Due" ? "bg-[#047857]" : "bg-[#1C2822]"} text-primary px-5 py-1 rounded-full cursor-pointer`}
              >
                Due
              </span>
              <span
                onClick={() => setSampleStatus("Collected")}
                className={`${sampleStatus == "Collected" ? "bg-[#047857]" : "bg-[#1C2822]"} text-primary px-5 py-1 rounded-full cursor-pointer`}
              >
                Collected
              </span>
              <Input
                onChange={(e) => setSelectedDate(e.target.value)}
                type="date"
                title="Due date"
                className={"bg-[#1C2822] py-1 rounded-full"}
              />
            </div>
          </div>
          <div className="flex items-center gap-5 justify-end mt-5 xl:mt-0">
            <Input
              maxLength="9"
              placeholder="Search..."
              className="bg-[#1C2822]"
              onChange={handleChange}
            />

            <AddTest />
          </div>
        </div>
        <div className="bg-[#1f2e2c] rounded-sm overflow-hidden">
          <DueSampleTable
            search={searchValue}
            selectedDate={selectedDate}
            sampleStatus={sampleStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default DueSample;
