import { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { FaBinoculars, FaUser } from "react-icons/fa";
import Modal from "../../modals/Modal";
import CountDown from "./CountDown";

const ViewDetails = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <span
        className="text-danger cursor-pointer border border-danger text-center p-2 rounded-full bg-[#171f12] duration-300"
        title="Delete"
        onClick={() => setIsModalOpen((prev) => !prev)}
      >
        <FaBinoculars className="text-white" />
      </span>
      {isModalOpen && (
        <Modal
          title={"Overview"}
          className="w-[350px] xl:w-[570px]"
          onClose={setIsModalOpen}
          isOpen={isModalOpen}
        >
          <div className="flex flex-col gap-5">
            <div className="bg-[#1C2822] p-3 rounded-md flex flex-col gap-2">
              <span
                className={`px-5 rounded-md -mt-6 ${item?.status == "Due" ? "bg-[#F2A65A] w-20 text-xl" : "bg-green-500 w-32 text-xl"}`}
              >
                {item?.status}
              </span>
              <p className="text-2xl">Invoice: {item?.invoice} </p>

              {item.status == "Collected" ? (
                <>
                  <div className="flex items-center gap-2">
                    <span>
                      Fasting time: {moment(item?.fastingDate).format("ll")}
                    </span>
                    <span>
                      {moment(item?.fastingTime, "HH:mm").format("hh:mm A")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      2Hrs time: {moment(item?.fastingDate).format("ll")}
                    </span>
                    <span>
                      {moment(item?.fastingTime, "HH:mm").format("hh:mm A")}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2">
                      <span>
                        Fasting time: {moment(item?.fastingDate).format("ll")}
                      </span>
                      <span>
                        {moment(item?.fastingTime, "HH:mm").format("hh:mm A")}
                      </span>
                    </div>
                    <div>
                      <CountDown data={item} />
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-[#1C2822] p-3 rounded-md flex flex-col gap-3">
                <span>Test: {item?.test}</span>
                <span>Drug: {item?.drug}</span>
                <div>
                  <span>Phlebotomist: </span>
                  <div>
                    {item?.phlebotomist ? (
                      <div className="flex items-center -space-x-2 overflow-hidden">
                        {item?.phlebotomist?.map((singlephle) => (
                          <div key={singlephle?._id}>
                            <img
                              className={`w-8 h-8 border rounded-full`}
                              src={singlephle?.photo}
                              alt=""
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <FaUser className="border text-xl rounded-full z-30" />
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-[#1C2822] p-3 rounded-md">
                <span>
                  {item?.note ? item?.note : "There is no patient note."}
                </span>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

ViewDetails.propTypes = {
  item: PropTypes.object,
};

export default ViewDetails;
