/*global kakao*/
import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options); //지도생성
    var markerPosition = new kakao.maps.LatLng(37.470285, 126.925622); //마커 위치

    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <div id='map' style={{ width: '970px', height: '400px' }}></div>
    </div>
  );
};

export default Map;
