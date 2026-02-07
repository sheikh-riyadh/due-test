import no_data from "../../assets/not-found.svg";
const NotFound = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-20">
      <img className="w-72" src={no_data} alt="no_data" />
      <span className="text-primary font-bold text-xl">No Data found</span>
    </div>
  );
};

export default NotFound;
