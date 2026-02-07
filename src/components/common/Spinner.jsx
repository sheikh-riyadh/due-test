const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-7xl font-medium">L</p>
      <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-primary"></div>
      <p className="text-7xl font-medium">ading...</p>
    </div>
  );
};

export default Spinner;