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
        type="number"
      />
      <select
        onChange={(e) => dispatch(addDueTest(e.target.value))}
        required={!due?.length && !completed?.length}
        className="focus:outline-none bg-[#1C2822] w-full py-2 px-2 rounded"
      >
        <option value="">Select Test</option>
        {filterTest?.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-2 gap-3 mt-3">
        {/* Due section */}
        <div className="bg-[#1C2822] p-2 flex flex-col gap-3 rounded-md relative">
          <p className="text-center text-sm font-bold absolute -top-3 bg-rose-500 px-5 rounded-full text-white">
            Due
          </p>
          <div className="flex items-center gap-3 flex-wrap mt-5">
            {due?.length ? (
              due?.map((item) => (
                <div
                  key={item}
                  className="border border-rose-500 font-bold text-sm px-2 py-1 rounded-full flex items-center gap-2"
                >
                  <FaCircleXmark
                    className="text-rose-500 text-lg cursor-pointer"
                    onClick={() => dispatch(removeDueTest(item))}
                    title="Remove"
                  />
                  <span className="text-white">{item}</span>

                  <FaCheckCircle
                    className="text-[#047857] text-lg cursor-pointer"
                    onClick={() => dispatch(addCompleteTest(item))}
                    title="Complete"
                  />
                </div>
              ))
            ) : (
              <span className="text-white font-bold text-center">
                No Due 😊
              </span>
            )}
          </div>
        </div>

        {/* Completed section */}
        <div className="bg-[#1C2822] p-2 flex flex-col gap-3 rounded-md relative">
          <p className="text-center text-sm font-bold absolute -top-3 bg-[#047857] px-5 rounded-full text-white">
            Completed
          </p>
          <div className="flex items-center gap-3 flex-wrap mt-5">
            {completed?.length ? (
              completed?.map((item) => (
                <div
                  key={item}
                  className="border-2 border-[#047857] font-bold text-sm px-2 py-1 rounded-full flex items-center gap-2"
                >
                  <span className="text-white">{item}</span>
                  <FaCircleXmark
                    className="text-red-500 text-lg cursor-pointer"
                    onClick={() => dispatch(removeCompleteTest(item))}
                    title="Remove"
                  />
                </div>
              ))
            ) : (
              <span className="text-white font-bold text-center">
                Sample Not Collected Yet 🙂
              </span>
            )}
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
          defaultValue={"Due"}
          options={["Due", "Completed"]}
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
