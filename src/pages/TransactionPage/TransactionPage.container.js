import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import TransactionForm from '../../components/TransactionForm/TransactionForm.component';

import "./TransactionPage.container.css";

const TransactionPage = () => {
    const [selects, setSelects] = useState(0);
    const [customer, setCustomer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function onSelected(props) {
        setSelects(props.target.value)
    }

    const fetchData = async () => {
        const { data } = await axios.get('http://localhost:8080/customers')

        // .catch((error)=>{
        //     console.log(error);
        // })
        setCustomer(data);
        setIsLoading(false);
        console.log(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const transaction = [
        {
            "customerId": 1,
            "transactionType": "transfer",
            "fromWalletId": 1,
            "toWalletId": 2,
            "amount": 30000,
            "note": "Utang Brok"
        }
    ]

    const onSubmit = async (transaction) => {
        // const post = await axios.post(`http://localhost:8080/customers/1/top-up/`,transaction)
        const json = JSON.stringify({
            "toWalletId": transaction.toWalletId,
            "amount": transaction.amount,
            "note": transaction.note
        });
        try {
            const res = await axios.post(
                `http://localhost:8080/customers/${transaction.customerId}/transfer/${transaction.fromWalletId}`, json, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
                },
                statusText: 'OK',
                status: 200,
            }
        );
            fetchData()
            console.log(res);
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="wallet">
            <h1>TransactionPage</h1>
            <select id="dropdown" value={selects} onChange={onSelected}>
                <option value="0">user 1</option>
                <option value="1">user 2</option>
                <option value="2">user 3</option>
            </select>
            <TransactionForm handleOnSubmit={onSubmit} dummy={transaction} isLoading={isLoading} />
        </div>
    )
}

export default TransactionPage;