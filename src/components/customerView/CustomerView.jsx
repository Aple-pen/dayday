import React,{useRef, useState,useCallback} from 'react';
import styles from './customerView.module.css'
import MapContainer from './MapContainer/MapContainer';

const CustomerView = (props) => {
    const [change,setChange]=useState('');
    const [locate,setLocate]=useState('');

    const onChange = useCallback(e=>{
        setChange(e.target.value)
    },[]);

    const onSubmit = e=>{
        // console.log(change);
        setLocate(change)
        setChange('');
        e.preventDefault();
    }

    return(
        <div> 
            <h1>customerView</h1>
            <form onSubmit={onSubmit}>
                <input
                    placeholder="주소검색"
                    value={change}
                    onChange={onChange} />
                <button type="submit">확인</button>
                </form>
            <MapContainer locate={locate} />
        </div>
    )
}

export default CustomerView;