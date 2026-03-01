import PropTypes from "prop-types";
import Input from "../../common/Input";
import Select from "../../common/Select";
import TextArea from "../../common/TextArea";
import moment from "moment";
import alltest from "../../../data/alltest";
import { FaCircleXmark } from "react-icons/fa6";

const DueFormBody = ({ register, test = [], setTest }) => {
  const afterTwoHalfHour = moment().add(2, "hours").add(30, "minutes");
  const classes = "";

  const handleRemoveItem = (removeItem) => {
    const restItem = test.filter((item) => item !== removeItem);
    setTest([...restItem]);
  };

  const filterTest = alltest.filter((item) => !test.includes(item));

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
        onChange={(e) => setTest([...test, e.target.value])} // update state
        required={test?.length === 0}
        className="focus:outline-none bg-[#1C2822] w-full py-2 px-2 rounded"
      >
        <option value="">Select Test</option>
        {filterTest?.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>

      <div className="flex items-center gap-3 flex-wrap">
        {test?.map((item) => (
          <div
            key={item}
            className="bg-[#abd006] font-bold text-sm px-2 rounded-full flex items-center gap-2"
          >
            <span className="text-black">{item}</span>
            <span className="text-red-500 cursor-pointer">
              <FaCircleXmark onClick={() => handleRemoveItem(item)} />
            </span>
          </div>
        ))}
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
  test: PropTypes.array,
  setTest: PropTypes.func,
};
export default DueFormBody;
