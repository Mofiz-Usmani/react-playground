import { useState, useEffect } from "react";
import axios from "axios";

const APIDataFetcher = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  useEffect(() => {
    if (fetchTrigger === 0) return;

    const getData = async () => {
      try {
        setLoading(true);
        setCount((prev) => prev + 1);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );

        setUsers(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [fetchTrigger]);

  useEffect(() => {
    console.log("API called count:", count);
  }, [count]);

  // store users in localStorage
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  return (
    <>
      <div className="flex flex-row">
        <div className="p-5 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Id : </h3>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.id}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-5 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Name : </h3>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-5 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Username : </h3>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.username}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-5 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Username</h3>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.username}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-5 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Email : </h3>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.email}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="ml-90">
        <button
          className="h-10 w-32 rounded-md border-2 border-amber-400 bg-amber-300"
          onClick={() => setFetchTrigger((prev) => prev + 1)}
        >
          Fetch Users
        </button>
      </div>
    </>
  );
};

export default APIDataFetcher;
