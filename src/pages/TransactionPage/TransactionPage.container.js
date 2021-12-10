import React, { useCallback, useEffect, useState } from 'react';
import TransactionForm from '../../components/TransactionForm/TransactionForm.component';
import "./TransactionPage.container.css";

const TransactionPage = () => {
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
            "walletList": [
                {
                    "id": 1,
                    "name": "tabungan 1",
                    "amount": 10000,
                    "joinAt": "12-12-12",
                    "transactionHistory": [
                        {
                            "transactionId": 1,
                            "type": "Top Up",
                            "note": "Wallet Opening",
                            "walletFromId": "-",
                            "walletToId": 1,
                            "amount": 50000,
                            "createdAt": "12-12-12"
                        },
                        {
                            "transactionId": 2,
                            "type": "Top UUUp",
                            "note": "Wallet Opening",
                            "walletFromId": "-",
                            "walletToId": 1,
                            "amount": 50000,
                            "createdAt": "12-12-12",

                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "name": "Harry Minggu",
            "nik": 123426,
            "birthday": "12-2-12",
            "joinAt": "12-12-12",
            "walletList": [
                {
                    "id": 2,
                    "name": "tabungan 2",
                    "amount": 20000,
                    "joinAt": "12-12-12",
                    "transactionHistory": [
                        {
                            "transactionId": 1,
                            "type": "Top Up",
                            "note": "Wallet Opening",
                            "walletFromId": "-",
                            "walletToId": 1,
                            "amount": 50000,
                            "createdAt": "12-12-12"
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "name": "Harry Potter vol 3",
            "nik": 123426,
            "birthday": "12-2-12",
            "joinAt": "12-12-12",
            "walletList": [
                {
                    "id": 3,
                    "name": "tabungan 3",
                    "amount": 30000,
                    "joinAt": "12-12-12",
                    "transactionHistory": [

                    ]
                }
            ]
        }
    ]


    return (
        <div className="wallet">
            <h1>TransactionPage</h1>
            <select id="dropdown" value={selects} onChange={onSelected}>
                <option value="0">user 1</option>
                <option value="1">user 2</option>
                <option value="2">user 3</option>
            </select>
            <TransactionForm />
        </div>
    )
}

export default TransactionPage;