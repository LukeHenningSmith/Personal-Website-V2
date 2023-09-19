function WebDev() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {/* First column */}
        <div className="w-1/2 p-4 flex flex-col justify-center items-center">
          {/* Content for the first column */}
          <h2 className="text-2xl font-semibold">Column 1</h2>
          <p className="text-center">
            This is the content of the first column.
          </p>
        </div>

        {/* Second column */}
        <div className="w-1/2 p-4 flex flex-col justify-center items-center">
          {/* Content for the second column */}
          <h2 className="text-2xl font-semibold">Column 2</h2>
          <p className="text-center">
            This is the content of the second column.
          </p>
        </div>
      </div>
    </>
  );
}

export default WebDev;
