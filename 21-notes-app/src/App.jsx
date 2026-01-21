import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const colors = ["bg-white", "bg-green-200", "bg-blue-200"];

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title)
    // console.log(details)

    const copyTask = [...task];

    copyTask.push({ title, details, colorIndex: 0 });

    setTask(copyTask);

    copyTask.map(() => {
      console.log(title, details);
    });

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);

    setTask(copyTask);
  };

  const setColor = (idx, colorIndex) => {
    const copyTask = [...task];
    copyTask[idx].colorIndex = colorIndex;
    setTask(copyTask);
  };

  return (
    <>
      <div className="flex justify-center mb-0">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="p-10 gap-4 lg:w-1/2"
        >
          <h1 className="text-4xl font-bold mb-5 mt-2">Add Notes</h1>

          {/* For Notes Heading */}
          <input
            className="px-5 py-2 border-2 rounded w-full mb-4"
            type="text"
            placeholder="Enter Notes Heading"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          {/* For Notes Description */}
          <textarea
            className="px-5 py-2 border-2 h-20 rounded w-full mb-4"
            placeholder="Enter Details"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />

          <button className="bg-black active:scale-95 text-white border hover:border-black px-5 py-2 rounded w-full">
            Add Note
          </button>
        </form>
      </div>

      {/* Data Div */}
      <div className="p-10 lg:w-full ml-6">
        <div className="flex flex-wrap items-start justify-start gap-5 mt-10 h-full overflow-auto">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className={`flex justify-between flex-col relative h-70 w-65 rounded-xl pt-5 pb-4 px-4 inset-shadow-sm inset-shadow-gray-500/50
              ${colors[elem.colorIndex]} text-black`}
              >
                <div>
                  <h3 className="leading-tight font-semibold border-b-2 border-gray-400 pb-1">
                    {elem.title}
                  </h3>
                  <p className="mt-5 leading-tight font-medium text-gray-500">
                    {elem.details}
                  </p>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      deleteNote(idx);
                    }}
                    className="w-20 cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
                  >
                    Delete
                  </button>

                  {/* Color Change Buttons */}

                  <div className="flex gap-2.5">
                    <button
                      onClick={() => setColor(idx, 0)}
                      className="h-4 w-4 rounded-full bg-white border border-gray-800"
                    />

                    <button
                      onClick={() => setColor(idx, 1)}
                      className="h-4 w-4 rounded-full bg-green-300 border border-gray-800"
                    />

                    <button
                      onClick={() => setColor(idx, 2)}
                      className="h-4 w-4 rounded-full bg-blue-300 border border-gray-800"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
