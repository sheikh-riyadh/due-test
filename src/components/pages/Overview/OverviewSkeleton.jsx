const OverviewSkeleton = () => {
  return (
    <div>
      <div className="mb-10 grid xl:grid-cols-12 gap-5 h-svh animate-pulse">
        {/* Left Analytics */}
        <div className="xl:col-span-9">
          <div className="w-full h-full  bg-[#1f2e2c] rounded" />
        </div>

        {/* Right Side Cards */}
        <div className="xl:col-span-3 grid grid-cols-2 xl:grid-cols-1 gap-5 h-full">
          {/* Card 1 */}
          <div className="shadow-md bg-[#1f2e2c] w-full h-full rounded-sm flex flex-col items-center justify-center gap-4 p-5">
            <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="w-32 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>

          {/* Card 2 */}
          <div className="shadow-md bg-[#1f2e2c] w-full h-full rounded-sm flex flex-col items-center justify-center gap-4 p-5">
            <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="w-32 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSkeleton;
