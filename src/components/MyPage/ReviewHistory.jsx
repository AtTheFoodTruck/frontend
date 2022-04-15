import axios from "axios";
import React, { useState, useEffect } from "react";

const ReviewHistory = () => {
  const [test, setTest] = useState([]);

  const testList = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setTest(res.data);
    });
  };

  useEffect(() => {
    testList();
  }, []);

  return (
    <>
      <div>리뷰 관리 페이지 입니다</div>;<br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>{test.length}개 </div>
      <div>
        {test.map((it) => (
          <div>
            <div>Id : {it.id}</div>
            <div>postId : {it.postId}</div>
            <div>name : {it.name}</div>
            <div>email : {it.email}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewHistory;
