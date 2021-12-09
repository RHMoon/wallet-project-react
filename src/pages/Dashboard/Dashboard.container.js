import React, { useState } from 'react';
// import React, { useCallback, useEffect, useState } from 'react';

import "./Dashboard.css"
// import DropDownSelect from '../../components/Button/DropDownSelect.component';
import DisplayWallet from '../../components/DisplayWallet/DisplayWallet.component';
import UserDetail from '../../components/UserDetail/UserDetail.component';


const Dashboard = () => {
    const [selects, setSelects] = useState(0);

    function onSelected(props) {
        setSelects(props.target.value)
    }

    const customer = [
        {
            "id": 1,
            "name": "Hary Pottah",
            "nik": 123456,
            "birthday": "12-2-12",
            "joinAt": "12-12-12",
            "walletList" : [
                {
                    "id" : 1,
                    "name" : "tabungan 1",
                    "amount" : 10000
                }
            ]
        },
        {
            "id": 2,
            "name": "Harry Minggu",
            "nik": 123426,
            "birthday": "12-2-12",
            "joinAt": "12-12-12",
            "walletList" : [
                {
                    "id" : 2,
                    "name" : "tabungan 2",
                    "amount" : 20000
                }
            ]
        },
        {
            "id": 3,
            "name": "Harry Potter vol 3",
            "nik": 123426,
            "birthday": "12-2-12",
            "joinAt": "12-12-12",
            "walletList" : [
                {
                    "id" : 3,
                    "name" : "tabungan 3",
                    "amount" : 30000
                }
            ]
        }
    ]

    return(
        <div className="dashboard">
            <h1>Dashboard</h1>
            <select id="dropdown" value={selects} onChange={onSelected}>
                <option value="0">user 1</option>
                <option value="1">user 2</option>
                <option value="2">user 3</option>
            </select>
            <UserDetail data={customer[parseInt(selects)]}/>  
            <DisplayWallet data={customer[parseInt(selects)].walletList[0]}/>
        </div>
    ) 
}

export default Dashboard;