/*global kakao*/
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const Map = (props) => {
  console.log(defaultAddress);
  const [defaultAddress, setDefaultAddress] = useState("");

  useEffect(() => {
    // axios로 매장명, 매장 주소 값을 받아옴
    let jsonData = {
      data: [
        {
          id: 1,
          store_name: "열정닭꼬지",
          address: "서울 금천구 독산동 297-11",
          category: "닭꼬치",
        },
        {
          id: 2,
          store_name: "붕어빵먹신",
          address: "서울 금천구 독산동 152-12",
          category: "디저트",
        },
        {
          id: 3,
          store_name: "대박햄버거집",
          address: "서울 금천구 독산동 148-30",
          category: "햄버거",
        },
        {
          id: 4,
          store_name: "피자엔트럭",
          address: "서울 마포구 서교동 406",
          category: "피지",
        },
      ],
    };

    props.setMyAdrress(defaultAddress);

    var position = [];

    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(props.mylat, props.mylng),
      level: 3,
    };

    //지도생성
    var map = new kakao.maps.Map(container, options);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    function displayDetailCenterInfo(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result[0].address.address_name);
        console.log(result);
        setDefaultAddress(result[0].address.address_name);
      }
    }

    function searchDetailAddrFromCoords(coords, callback) {
      // 좌표로 법정동 상세 주소 정보를 요청합니다
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    searchDetailAddrFromCoords(map.getCenter(), displayDetailCenterInfo);

    // 검색을 하면 받아오는
    geocoder.addressSearch(defaultAddress, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result);
      }
    });

    //디폴트 주소: 주소가 안찍혀있을 때 보여지는 지도
    var address = props.address ? props.address : defaultAddress;

    // 가게들을 찍어줌
    for (var i = 0; i < jsonData.data.length; i++) {
      let storeName = jsonData.data[i].store_name;
      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(
        jsonData.data[i].address,
        function (result, status) {
          console.log("검색된 내용");

          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            // 결과값으로 받은 위치를 마커로 표시합니다
            let marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            let infowindow = new kakao.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;padding:6px 0;">${storeName}</div>`,
            });
            infowindow.open(map, marker);
          }
        }
      );
    }

    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      console.log(result);
      console.log(status);
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        let infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">검색 위치</div>`,
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  });

  // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
  // map.setCenter(coords);
  /* 
  매장 주소를 모두 위도와 경도로 바꿈 (반복문)
  geocoderD.addressSearch(result[0][1], function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      console.log("바뀐 위도 경도");
      console.log(result);
    }
  });
  */

  return (
    <Container className="d-flex justify-content-center p-0">
      <div id="map" style={{ width: "730px", height: "400px" }}></div>
    </Container>
  );
};

export default Map;
