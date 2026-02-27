import PropTypes from "prop-types";
import Input from "../../common/Input";
import Select from "../../common/Select";
import TextArea from "../../common/TextArea";
import moment from "moment";

const DueFormBody = ({ register }) => {
const afterTwoHalfHour = moment().add(2, "hours").add(30, "minutes");


  const classes = "";
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
      <Input
        {...register("test")}
        required
        placeholder="Test Name"
        className={classes}
        defaultValue={"2hrs after breakfast"}
      />
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
