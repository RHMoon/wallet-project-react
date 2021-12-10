import React, { useCallback, useEffect, useState } from 'react';

import "./Dashboard.container.css"
import DropDownSelect from '../../components/Button/DropDownSelect.component';
import DisplayWallet from '../../components/DisplayWallet/DisplayWallet.component';
import UserDetail from '../../components/UserDetail/UserDetail.component';


const Dashboard = () => {
    const [selects, setSelects] = useState(0);

    function onSelected(props) {
        setSelects(props.target.value)
    }

    const customer = [
        {
            customerId: 1,
            name: "Seno Aji",
            nik: 33257,
            dateOfBirth: "1998-10-02",
            registerAt: "2021-12-10T15:35:00.95194",
            walletList: [
                {
                    walletId: 3,
                    walletName: "Gojek",
                    ballance: 70000,
                    createdAt: "2021-12-10T15:35:39.104097",
                    transactionHistory: [
                        {
                            transactionId: 3,
                            type: "Top Up",
                            note: "Wallet Opening",
                            walletFromId: "-",
                            walletToId: 3,
                            amount: 70000,
                            createdAt: "2021-12-10T15:35:39.104097"
                        }
                    ]
                },
                {
                    walletId: 1,
                    walletName: "Main",
                    ballance: 90000,
                    createdAt: "2021-12-10T15:35:02.192915",
                    transactionHistory: [
                        {
                            transactionId: 1,
                            type: "Top Up",
                            note: "Wallet Opening",
                            walletFromId: "-",
                            walletToId: 1,
                            amount: 50000,
                            createdAt: "2021-12-10T15:35:02.192915"
                        },
                        {
                            transactionId: 4,
                            type: "Top Up",
                            note: "Buat Jajan",
                            walletFromId: "-",
                            walletToId: 1,
                            amount: 70000,
                            createdAt: "2021-12-10T15:35:45.961601"
                        },
                        {
                            transactionId: 5,
                            type: "Transfer",
                            note: "Utang Brok",
                            walletFromId: 1,
                            walletToId: 2,
                            amount: 30000,
                            createdAt: "2021-12-10T15:36:00.675443"
                        }
                    ]
                }
            ]
        },
        {
            customerId: 2,
            name: "Bayu Ridho",
            nik: 33253,
            dateOfBirth: "1998-01-08",
            registerAt: "2021-12-10T15:35:29.642258",
            walletList: [
                {
                    walletId: 2,
                    walletName: "Main",
                    ballance: 80000,
                    createdAt: "2021-12-10T15:35:29.69138",
                    transactionHistory: [
                        {
                            transactionId: 2,
                            type: "Top Up",
                            note: "Wallet Opening",
                            walletFromId: "-",
                            walletToId: 2,
                            amount: 50000,
                            createdAt: "2021-12-10T15:35:29.69138"
                        },
                        {
                            transactionId: 5,
                            type: "Transfer",
                            note: "Utang Brok",
                            walletFromId: 1,
                            walletToId: 2,
                            amount: 30000,
                            createdAt: "2021-12-10T15:36:00.675443"
                        }
                    ]
                }
            ]
        },
        {
            customerId: 3,
            name: "Sentana Adi",
            nik: 33351,
            dateOfBirth: "2000-09-12",
            registerAt: "2021-12-10T15:37:04.541927",
            walletList: [
                {
                    walletId: 4,
                    walletName: "Main",
                    ballance: 50000,
                    createdAt: "2021-12-10T15:37:04.660539",
                    transactionHistory: [
                        {
                            transactionId: 6,
                            type: "Top Up",
                            note: "Wallet Opening",
                            walletFromId: "-",
                            walletToId: 4,
                            amount: 50000,
                            createdAt: "2021-12-10T15:37:04.660539"
                        }
                    ]
                }
            ]
        }
    ]

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <select id="dropdown" value={selects} onChange={onSelected}>
                <option value="0">user 1</option>
                <option value="1">user 2</option>
                <option value="2">user 3</option>
            </select>
            <UserDetail data={customer[parseInt(selects)]} />
            <DisplayWallet data={customer[parseInt(selects)].walletList[0]} />
        </div>
    )
}

export default Dashboard;