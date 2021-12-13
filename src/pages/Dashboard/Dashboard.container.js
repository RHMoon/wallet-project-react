import React, { useEffect, useState } from 'react';
// import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import "./Dashboard.css"
// import DropDownSelect from '../../components/Button/DropDownSelect.component';
// import DisplayWallet from '../../components/DisplayWallet/DisplayWallet.component';
import UserDetail from '../../components/UserDetail/UserDetail.component';


const Dashboard = () => {
    const [selects, setSelects] = useState(0);
    const [customer, setCustomer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function onSelected(props) {
        setSelects(props.target.value)
        // console.log(props.target.value)
    }

    const fetchData = async () => {
        const { data } = await axios.get('http://localhost:8080/customers')

        setCustomer(data);
        setIsLoading(false);
        console.log(data);
    }
    useEffect(() => {
        fetchData();

    }, [])

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            {/* <UserDetail data = { customer[parseInt(selects)] } isLoading = {isLoading}/> */}
            <UserDetail
                data={customer}
                isLoading={isLoading}
                selects={selects}
                onSelected={onSelected}
            />
        </div>
    )
}

export default Dashboard;