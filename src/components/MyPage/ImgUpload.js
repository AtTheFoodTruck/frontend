import React, { useState } from "react";
import AWS from "aws-sdk";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Card = styled.div`
  img {
    width: 230px;
    height: 200px;
    margin-bottom: 15px;
  }
`;
AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_REGION,
});

export default function ImgUpload(setState) {
  //이미지 업로드 진행
  const [loaded, setLoaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [fileURL, setFileURL] = useState();

  //AWS 설정
  console.log(`env : ` + process.env.AWS_CONFIG);
  const handleImgInput = (e) => {
    const file = e.target.files[0];
    const fileExt = file.name.split(".").pop();
    if (file !== "image/jpg" || fileExt !== "jpg") {
      alert("해당 파일 형식을 지원하지 않습니다");
      return;
    } else if (file !== "image/jpeg" || fileExt !== "jpeg") {
      alert("해당 파일 형식을 지원하지 않습니다");
      return;
    }
    setLoaded("loading");
    setSelectedFile(file);
  };

  const handleImgUpload = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];

    const upload = new AWS.S3.ManagedUpload({
      params: {
        ACL: "public-read",
        Body: file,
        Bucket: "test-img-jh",
        Key: "upload/" + file.name,
      },
    });

    const promise = upload.promise();

    promise.then(
      function (data) {
        console.log("이미지 업로드에 성공했습니다.");
      },
      function (err) {
        console.log(err);
        return alert("오류가 발생했습니다");
      }
    );
  };

  return (
    <>
      <Form.Group controlId="formFile" className="mb-3 ">
        <Card class="card">
          {loaded === false || loaded === true ? (
            <img src={"img/default_image.png"}></img>
          ) : (
            <span>이미지 불러오는 중</span>
          )}
        </Card>
        <Form.Control
          type="file"
          accept="image/jpg,image/jpeg"
          name="img_url"
          onChange={handleImgUpload}
        />
      </Form.Group>
    </>
  );
}
