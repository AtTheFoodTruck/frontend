import React, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const Post = (props) => {
  const address = props.address;
  const setAddress = props.setAddress;

  const onCompletePost = (data) => {
    console.log(data.address);
    setAddress(data.address);
  };

  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    top: '20%',
    width: '700px',
    height: '700px',
    padding: '10px',
    zIndex: 100,
  };

  return (
    <>
      <DaumPostcode
        style={postCodeStyle}
        autoClose
        onComplete={onCompletePost}
      />
    </>
  );
};

export default Post;
