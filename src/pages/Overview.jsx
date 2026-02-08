import moment from "moment";
import Analytics from "../components/pages/Overview/Analytics";
import CircleProgressbar from "../components/pages/Overview/CircleProgressbar";
import OverviewSkeleton from "../components/pages/Overview/OverviewSkeleton";
import { useGetOverviewQuery } from "../store/services/dueApi/dueApi";

const Overview = () => {
  const { data, isLoading } = useGetOverviewQuery();

  // console.log(data)

  const dueSampleData = data?.data?.filter(
    (sample) => sample?.status === "Due",
  );
  const completedData = data?.data?.filter((order) => order?.status !== "Due");

  const due = dueSampleData?.reduce((total, item) => {
    if (item?.date === moment().format("D")) {
      return total + 1;
    }
    return total;
  }, 0);

  const completed = completedData?.reduce((total, item) => {
    if (item?.updatedDate === moment().format("D")) {
      return total + 1;
    }
    return total;
  }, 0);

  const analytice = [
    { name: "Jan", uv: 0, pv: 0 },
    { name: "Feb", uv: 0, pv: 0 },
    { name: "Mar", uv: 0, pv: 0 },
    { name: "Apr", uv: 0, pv: 0 },
    { name: "May", uv: 0, pv: 0 },
    { name: "Jun", uv: 0, pv: 0 },
    { name: "Jul", uv: 0, pv: 0 },
    { name: "Aug", uv: 0, pv: 0 },
    { name: "Sep", uv: 0, pv: 0 },
    { name: "Oct", uv: 0, pv: 0 },
    { name: "Nov", uv: 0, pv: 0 },
    { name: "Dec", uv: 0, pv: 0 },
  ];

  data?.data?.forEach((order) => {
    const monthData = analytice.find(
      (month) =>
        month.name === order.month && order?.year === moment().format("YYYY"),
    );

    if (monthData) {
      if (order.status === "Due") {
        monthData.uv += 1;
      } else {
        monthData.pv += 1;
      }
    }
  });

  return (
    <div>
      {!isLoading ? (
        <div className="mb-10 grid xl:grid-cols-12 gap-5 h-full">
          <div className="xl:col-span-9">
            <Analytics analyticeData={analytice} />
          </div>
          <div className="xl:col-span-3 grid grid-cols-2 xl:grid-cols-1 gap-5 h-full">
            <div className="shadow-md bg-card w-full h-full rounded-sm flex flex-col items-center justify-center gap-3 p-5">
              <CircleProgressbar
                className={"text-4xl font-bold  text-white"}
                data={completed}
                color="#047857"
              />
              <p className="text-center font-medium text-sm text-white">
                {"Today Completed"}
              </p>
            </div>
            <div className="shadow-md bg-card w-full h-full rounded-sm flex flex-col items-center justify-center gap-3 p-5">
              <CircleProgressbar
                className={"text-4xl font-bold text-white"}
                data={due}
                color="#fcff66"
              />
              <p className="text-center font-medium text-sm text-white">
                {"Today Due"}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <OverviewSkeleton />
      )}
    </div>
  );
};

export default Overview;
