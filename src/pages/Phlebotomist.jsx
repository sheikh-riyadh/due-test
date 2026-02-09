import PhlebotomistTable from "../components/pages/Phlebotomist/PhlebotomistTable";
import { useSearchDelay } from "../hooks/useSearchDelay";
import AddPhlebotomist from "../components/pages/Phlebotomist/AddPhlebotomist";
import Input from "../components/common/Input";

const Phlebotomist = () => {
  const { handleChange, searchValue } = useSearchDelay();

  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <div className="grid xl:grid-cols-2">
          <span className="font-bold text-xl text-primary uppercase">{`All Phlebotomist`}</span>
          <div className="flex items-center gap-3 justify-end mt-5 xl:mt-0">
            <Input
              placeholder="Search..."
              className="bg-[#1C2822]"
              onChange={handleChange}
            />
            <AddPhlebotomist />
          </div>
        </div>
        <div className="bg-[#1f2e2c] rounded-sm overflow-hidden">
          <PhlebotomistTable search={searchValue} />
        </div>
      </div>
    </div>
  );
};

export default Phlebotomist;
