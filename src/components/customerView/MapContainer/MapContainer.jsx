import React, { useState, useEffect } from 'react';

const { kakao } = window;

const MapContainer = ({locate}) => {
    useEffect(() => {
        const container = document.getElementById('myMap')
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        const map = new kakao.maps.Map(container, options);
    },[]);

    // useEffect(()=>{
    //     if(!locate){
    //         locate = "kakao";
    //     }
    //     const places = new kakao.maps.services.Places();
    //     var callback = function(result, status) {
    //     if (status === kakao.maps.services.Status.OK) {
    //         console.log(result);
    //     }
    // };
    //     places.keywordSearch(locate, callback);
    // },[locate])
    
    return (
        <div id='myMap' style={{
            width: '500px', 
            height: '500px'
        }}></div>
    );
}
export default MapContainer; 