import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import "./Dashboard.container.css"
import DropDownSelect from '../../components/Button/DropDownSelect.component';
import DisplayWallet from '../../components/DisplayWallet/DisplayWallet.component';
import UserDetail from '../../components/UserDetail/UserDetail.component';


const Dashboard = () => {
    const [selects, setSelects] = useState(0);

    function onSelected(props) {
        setSelects(props.target.value)
    }

    const fetchData = async () => {
        const { customer } = await axios.get('http://localhost:8080/customers')
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        }) 
    }
    useEffect(()=>{
        fetchData();
    })

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <select id="dropdown" value={selects} onChange={onSelected}>
                <option value="0">user 1</option>
                <option value="1">user 2</option>
                <option value="2">user 3</option>
            </select>
            {/* <UserDetail data={customer[parseInt(selects)]} />
            <DisplayWallet data={customer[parseInt(selects)].walletList[0]} /> */}
            <UserDetail data={customer.customerId(selects)} />
            {/* <DisplayWallet data={customer[parseInt(selects)].walletList[0]} /> */}
        </div>
    )
}

export default Dashboard;