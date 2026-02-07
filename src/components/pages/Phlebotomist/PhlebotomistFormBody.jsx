import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import Input from "../../common/Input";
import { useUploadImageMutation } from "../../../store/services/imageUploadApi/imageUploadApi";

const PhlebotomistFormBody = ({ register, photo, setPhoto }) => {
  const [uploadImage, { isLoading }] = useUploadImageMutation();

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await uploadImage(formData).unwrap();
      setPhoto(response?.data?.display_url);
    } catch (error) {
      toast.error("Something went wrong 😓", { id: error });
    }
  };

  const classes = "w-full";
  return (
    <>
      <div className="rounded-full mx-auto">
        <label
          htmlFor="photo"
          className="mb-1 inline-block rounded-full h-32 w-32 relative z-0"
        >
          <div
            className="h-32 w-32 border-2 border-accent rounded-full relative flex flex-col items-center justify-center cursor-pointer"
            title="Select Phlebotomist Photo"
          >
            {photo ? (
              <img
                className="w-full h-full rounded-full object-fill"
                src={photo}
                alt="photo"
              />
            ) : (
              <FaUserAlt className="absolute w-full h-full p-2 rounded-full text-[#047857]" />
            )}
            {isLoading && (
              <div className="absolute h-full w-full bg-black opacity-100 rounded-full">
                <ImSpinner9 className="h-full w-full animate-spin text-accent" />
              </div>
            )}

            <div className="absolute h-full w-full rounded-full z-50">
              <FaUserAlt className="h-full w-full text-[#047857] rounded-full opacity-0 hover:opacity-100 bg-black duration-300 p-2" />
            </div>
          </div>
        </label>

        <Input
          {...register("photo")}
          onChange={handleImageUpload}
          className="hidden"
          id="photo"
          type="file"
          accept="image/*"
          required={false}
          label="Phlebotomist photo"
        />
      </div>
      <Input
        {...register("name")}
        required
        placeholder="Name"
        className={classes}
      />
      <Input
        {...register("phlebotomist_id")}
        maxLength="9"
        minLength="6"
        required
        placeholder="ID No"
        className={classes}
      />
    </>
  );
};
PhlebotomistFormBody.propTypes = {
  register: PropTypes.func,
  photo: PropTypes.string,
  setPhoto: PropTypes.func,
};
export default PhlebotomistFormBody;
