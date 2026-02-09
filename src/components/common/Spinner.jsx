const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-7xl font-medium text-[#047857]">L</p>
      <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-[#abd006]"></div>
      <p className="text-7xl font-medium text-[#047857]">ading...</p>
    </div>
  );
};

export default Spinner;