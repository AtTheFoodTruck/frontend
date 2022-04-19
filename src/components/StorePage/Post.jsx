import React, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const postCodeStyle = {
  display: 'block',
  position: 'absolute',
  top: '80%',
  width: '700px',
  height: '700px',
  padding: '10px',
  zIndex: 100,
};

const Post = (props) => {
  const onComplete = (data) => {
    console.log(data);
    props.selectedAddress(data);
  };

  return (
    <>
      <DaumPostcode style={postCodeStyle} autoClose onComplete={onComplete} />
    </>
  );
};

export default Post;
