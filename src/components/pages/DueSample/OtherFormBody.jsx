import PropTypes from "prop-types";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import Select from "../../common/Select";
import moment from "moment";

const OtherFormBody = ({ register}) => {
  const classes = "";
  const now = moment()
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
        <span className="text-primary">Remaining Time</span>
        <div className="grid grid-cols-2 gap-3">
          <Input
            {...register("nextCollectionDate")}
            required
            type="date"
            className={classes}
            title="Remaining"
            defaultValue={now.format("YYYY-MM-DD")}
          />
          <Input
            {...register("nextCollectionTime")}
            required
            type="time"
            className={classes}
            title="Remaining time"
            defaultValue={now.format("HH:mm")}
          />
        </div>
      </div>

      <Select
        {...register("status")}
        defaultValue="Due"
        options={["Due", "Collected"]}
        label="Sample Status"
        required
      />

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

OtherFormBody.propTypes = {
  register: PropTypes.func,
  watch: PropTypes.func,
};
export default OtherFormBody;
