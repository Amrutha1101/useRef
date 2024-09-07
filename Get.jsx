import { useEffect, useRef, useState } from "react";

export const Get = () => {
  const userRef = useRef(null);
  const postsRef = useRef(null);
  const [dataType, setDatatype] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const handleUserClick = () => setDatatype("users");
    const handlePostsClick = () => setDatatype("posts");

    const userBtn = userRef.current;
    const postsBtn = postsRef.current;

    if (userBtn && postsBtn) {
      userBtn.addEventListener("click", handleUserClick);
      postsBtn.addEventListener("click", handlePostsClick);
    }

    return () => {
      if (userBtn && postsBtn) {
        userBtn.removeEventListener("click", handleUserClick);
        postsBtn.removeEventListener("click", handlePostsClick);
      }
    };
  }, []);
  useEffect(() => {
    if (!dataType) return;
    const fetchData = async () => {
      let url = "";
      if (dataType === "users") {
        url = "https://jsonplaceholder.typicode.com/users";
      } else if (dataType === "posts") {
        url = "https://jsonplaceholder.typicode.com/photos";
      }

      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [dataType]);
  return (
    <>
      <p>hi</p>
      <button ref={postsRef}>Get posts</button>
      <button ref={userRef}>Get users</button>

      <div>
        {" "}
        {data.length > 0 &&
          data.map((item) =>
            dataType === "users" ? (
              <p key={item.id}>{item.name}</p>
            ) : (
              <p key={item.id}>{item.title}</p>
            )
          )}
      </div>
    </>
  );
};
