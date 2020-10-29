import React, { useEffect, useState } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = 'Hello '+ title;
  }, [title]);
};

const CustomHook = () => {
  const [count, setCount] = useState(0);
  const title = `${count} notifications`;

  useDocumentTitle(title);

  return (
    <div>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default CustomHook;
