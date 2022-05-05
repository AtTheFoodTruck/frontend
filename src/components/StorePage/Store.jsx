import React, { useState } from "react";
import Post from "./Post";

import { BiTargetLock } from "react-icons/bi";
import { InputGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";
import KakaoMap from "./KakaoMap";
import Title from "./Title";
import StoreList from "./StoreList";

// 각 컴포넌트의 위치를 조절 해주는 코드
const StoreContainer = styled.div`
  padding-top: 110px;
  width: 50%;
  margin: auto;

  .container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;

    grid-template-areas:
      "title"
      "map_search"
      "map";
  }

  .title {
    grid-area: head;
    margin-top: 0.5em;
    text-align-last: center;
  }

  .map_search {
    grid-area: map_search;
    margin-top: 0.5em;
    text-align-last: center;
  }
  .map {
    grid-area: map;
  }

  #address_search {
    text-align-last: center;
  }
`;

const Store = () => {
  // 검색 결과 관련 상태값
  const [address, setAddress] = useState("");
  const [popup, setPopup] = useState(false);

  // 현재 위치 관련 상태값
  const [myAdrress, setMyAdrress] = useState("");

  // 픽커에서 받아오는 주소
  const [listAddress, setListAddress] = useState("");

  // 검색 결과를 address로 업데이트
  const selectedAddress = (data) => {
    console.log("검색해서 받아온 데이터");
    console.log(data);
    // 검색 팝업을 끄기
    setPopup(!popup);
    // 검색해온 데이터를 input창에 대입
    setAddress(data.address);
  };

  // 현재위치 아이콘을 클릭하면 실행되는 함수
  const mylocation = () => {
    if (document.getElementById("address_search").value === myAdrress) {
      console.log("현재위치 입니다.");
    } else {
      setAddress(myAdrress);
    }
  };

  return (
    <StoreContainer>
      <Title className="title" />

      {/* 검색창 */}
      <InputGroup>
        {/* 검색창 클릭 시 우편번호 입력 창 창 생성 */}
        <FormControl
          onClick={() => setPopup(!popup)}
          size="lg"
          id="address_search"
          value={address === "" ? myAdrress : address}
        />
        {popup && <Post selectedAddress={selectedAddress}></Post>}

        {/* 아이콘 클릭 시 현재 위치 지도에 표시 */}
        <BiTargetLock
          style={{ width: 40, height: "auto" }}
          id="basic-addon2"
          onClick={() => mylocation()}
        />
      </InputGroup>

      <KakaoMap
        className="map"
        setMyAdrress={setMyAdrress}
        address={address}
        listAddress={listAddress}
        setListAddress={setListAddress}
      />
      <StoreList listAddress={listAddress} />
    </StoreContainer>
  );
};

export default Store;
