import PropTypes from "prop-types";
import Input from "../../common/Input";
import Select from "../../common/Select";
import TextArea from "../../common/TextArea";

const DueFormBody = ({ register }) => {
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
      />
      <div className="flex flex-col gap-2">
        <span className="text-primary">Collected time</span>
        <div className="grid grid-cols-2 gap-3">
          <Input
            {...register("collectedDate")}
            required
            type="date"
            className={classes}
            title="Collected"
          />
          <Input
            {...register("collectedTime")}
            required
            type="time"
            className={classes}
            title="Collected time"
          />
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
          />
          <Input
            {...register("nextCollectionTime")}
            required
            type="time"
            className={classes}
            title="Remaining time"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 items-center">
        <Select
          {...register("drug")}
          defaultValue="No"
          options={["No", "Yes"]}
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
        {...register("phlebotomist_id")}
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
