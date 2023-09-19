function JavaDev() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {/* First column */}
        <div className="w-1/2 p-4 flex flex-col justify-center items-center">
          {/* Content for the first column */}
          <h1>
            Hi, <br />
            I'm Luke Henning-Smith <br />
            Software Engineering & Chemistry Student
          </h1>
          <h2>Web Dev | Machine Learning | Computational Chemistry</h2>
          <h3>lhen4176@uni.sydney.edu.au</h3>
        </div>

        {/* Second column */}
        <div className="w-1/2 p-4 flex flex-col justify-center items-center">
          {/* Content for the second column */}
          <div className="flex-col">
            <div>
              <h2 className="text-2xl font-semibold">Column 2</h2>
              <p>This is the content of the second column.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Column 2-A</h2>
              <p>This is the content of the second column.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JavaDev;
