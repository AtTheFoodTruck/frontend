import React from "react";
import DaumPostcode from "react-daum-postcode";

//우편번호 조회 컴포넌트

const postCodeStyle = {
  display: "block",
  position: "absolute",
  top: "100%",
  width: "100%",
  height: "700px",
  padding: "10px",
  zIndex: 100,
};

const Post = (props) => {
  const onComplete = (data) => {
    console.log("입력창을 누루면 나옴");
    props.selectedAddress(data);
  };

  return (
    <>
      <DaumPostcode style={postCodeStyle} autoClose onComplete={onComplete} />
    </>
  );
};

export default Post;
