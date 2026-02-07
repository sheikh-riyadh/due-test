import moment from "moment";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const CountDown = ({ data }) => {
  const [timeDiff, setTimeDiff] = useState(0);

  useEffect(() => {
    if (!data?.nextCollectionDate || !data?.nextCollectionTime) return;

    const targetTime = moment(
      `${data.nextCollectionDate} ${data.nextCollectionTime}`,
      "YYYY-MM-DD HH:mm",
    );

    const interval = setInterval(() => {
      const now = moment();
      setTimeDiff(targetTime.diff(now, "seconds"));
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  const formatDetailedTime = (seconds) => {
    const absSeconds = Math.abs(seconds);
    const duration = moment.duration(absSeconds, "seconds");

    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const secs = duration.seconds();

    return days > 0
      ? `${days}:D ${hours}:H ${minutes}:M ${secs}:SEC`
      : `${hours}H:${minutes}M:${secs}:SEC`;
  };

  return (
    <div className="font-bold">
      {timeDiff >= 0 ? (
        <span className="bg-green-600 text-white px-3 py-1 rounded-full">
          Time Left: {formatDetailedTime(timeDiff)}
        </span>
      ) : (
        <span className="bg-rose-500 text-white px-3 py-1 rounded-full">
          Overdue {formatDetailedTime(timeDiff)}
        </span>
      )}
    </div>
  );
};

CountDown.propTypes = {
  data: PropTypes.object,
};

export default CountDown;
