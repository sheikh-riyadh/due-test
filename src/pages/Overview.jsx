import Spinner from "../components/common/Spinner";
import Analytics from "../components/pages/Overview/Analytics";

const Overview = () => {
//   const { data, isLoading } = useGetOverviewQuery();
const data=[], isLoading=false

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const analytics = months.map((month) => ({
    name: month,
    i: 0,
    p: 0,
    a: 0,
    m: 0,
  }));

  data?.forEach((entry) => {
    const monthObj = analytics?.find((m) => m?.name === entry?.month);
    if (monthObj) {
      if (entry?.name === "ibnsina") monthObj.i++;
      if (entry?.name === "popular") monthObj.p++;
      if (entry?.name === "asgarali") monthObj.a++;
      if (entry?.name === "medinova") monthObj.m++;
    }
  });

  return (
    <div className="flex flex-col gap-10">
      <span className="font-bold text-xl text-primary">Overview</span>
      {!isLoading ? <Analytics analyticeData={analytics} /> : <Spinner />}
    </div>
  );
};

export default Overview;