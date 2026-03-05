import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Input from "../../common/Input";
import Select from "../../common/Select";
import TextArea from "../../common/TextArea";
import moment from "moment";
import alltest from "../../../data/alltest";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import {
  addCompleteTest,
  addDueTest,
  removeCompleteTest,
  removeDueTest,
} from "../../../store/features/dueAndCompleteTest/dueAndCompleteTestSlice";
import { useGetDueAndCompleteTest } from "../../../hooks/useGetDueAndCompleteTest";

const DueFormBody = ({ register }) => {
  const afterTwoHalfHour = moment().add(2, "hours").add(30, "minutes");
  const classes = "";
  const dispatch = useDispatch();

  const { due, completed } = useGetDueAndCompleteTest();

  const filterTest = alltest?.filter(
    (item) => !due?.includes(item) && !completed?.includes(item),
  );

  return (
    <>
      <Input
        {...register("invoice")}
        maxLength="9"
        minLength="9"
        required
        placeholder="Invoice"
        className={classes}
      />
      <select
        onChange={(e) => dispatch(addDueTest(e.target.value))}
        required={false}
        className="focus:outline-none bg-[#1C2822] w-full py-2 px-2 rounded"
      >
        <option value="">Select Test</option>
        {filterTest?.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-2 gap-5">
        {/* Due section */}
        <div className="bg-[#1C2822] p-2 flex flex-col gap-3 rounded-md">
          <p className="text-center text-lg font-bold">Due</p>
          <div className="flex items-center gap-3 flex-wrap ">
            {due?.map((item) => (
              <div
                key={item}
                className="bg-[#abd006] font-bold text-sm px-2 py-1 rounded-full flex items-center gap-2"
              >
                <FaCircleXmark
                  className="text-red-500 text-lg cursor-pointer"
                  onClick={() => dispatch(removeDueTest(item))}
                  title="Remove"
                />
                <span className="text-black">{item}</span>

                <FaCheckCircle
                  className="text-[#1C2822] text-lg cursor-pointer"
                  onClick={() => dispatch(addCompleteTest(item))}
                  title="Complete"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Completed section */}
        <div className="bg-[#1C2822] p-2 flex flex-col gap-3 rounded-md">
          <p className="text-center text-lg font-bold">Completed</p>
          <div className="flex items-center gap-3 flex-wrap">
            {completed?.map((item) => (
              <div
                key={item}
                className="bg-[#abd006] font-bold text-sm px-2 py-1 rounded-full flex items-center gap-2"
              >
                <span className="text-black">{item}</span>
                <FaCircleXmark
                  className="text-red-500 text-lg cursor-pointer"
                  onClick={() => dispatch(removeCompleteTest(item))}
                  title="Remove"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-primary">Remaining Time</span>
        <div className="grid grid-cols-2 gap-3">
          <Input
            {...register("nextCollectionDate")}
            required
            type="date"
            className={classes}
            title="Remaining"
            defaultValue={afterTwoHalfHour.format("YYYY-MM-DD")}
          />
          <Input
            {...register("nextCollectionTime")}
            required
            type="time"
            className={classes}
            title="Remaining time"
            defaultValue={afterTwoHalfHour.format("HH:mm")}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 items-center">
        <Select
          {...register("drug")}
          defaultValue="No"
          options={["No", "Medicine", "Insulin", "Insulin + Medicine"]}
          label="Any diabetic drug?"
        />

        <Select
          {...register("status")}
          defaultValue="Due"
          options={["Due", "Collected"]}
          label="Sample Status"
          required
        />
      </div>

      <TextArea {...register("note")} placeholder="Note:" />

      <Input
        {...register("secret")}
        type="password"
        required
        placeholder="Phlebotomist code"
        className={classes}
        maxLength="9"
        minLength="6"
      />
    </>
  );
};

DueFormBody.propTypes = {
  register: PropTypes.func,
};
export default DueFormBody;
