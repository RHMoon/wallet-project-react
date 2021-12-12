import { useEffect, useState } from 'react';
// import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import TransactionForm from '../../components/TransactionForm/TransactionForm.component';

import "./TransactionPage.container.css";

const TransactionPage = () => {
    const [selects, setSelects] = useState(0);
    const [customer, setCustomer] = useState([]);
    // const [customerWallets, setCustomerWallets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function onSelected(props) {
        setSelects(props.target.value)
    }

    const fetchCustomer = async () => {
        const { data } = await axios.get('http://localhost:8080/customers')

        setCustomer(data);
        setIsLoading(false);
        // setCustomerWallets(getWalletList(1))
    }

    useEffect(() => {
        fetchCustomer()
    }, [])

    // const transaction = (
    //     {
    //         "customerId": 1,
    //         "transactionType": "transfer",
    //         "fromWalletId": 1,
    //         "toWalletId": 20,
    //         "amount": 1000,
    //         "note": "Utang Brok"
    //     }
    // )
    // const getWalletList = (id) => {
    //     const filteredCustomer = customer.filter((item) => {
    //         return item.customerId === id;
    //     })
    //     return filteredCustomer[0].walletList
    // }

    // const onSubmit = (transaction) => {
    //     console.log(transaction)
    // }
    const onSubmit = async (transaction) => {

        const json = JSON.stringify({
            "toWalletId": transaction.toWalletId,
            "amount": transaction.amount,
            "note": transaction.note,
        });
        // console.log(json)

        try {
            const res = await axios.post(
                ` http://localhost:8080/customers/1/transfer/${transaction.fromWalletId} `,
                // ` http://localhost:8080/customers/${transaction.customerId}/transfer/${transaction.fromWalletId} `,
                json
                , {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
            fetchCustomer()
            console.log(res);
            alert('success')
        } catch (error) {
            alert(error.message)
            console.log(error);
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
            <TransactionForm
                handleOnSubmit={onSubmit}
                customers={customer}
                // customerWallets = {customerWallets}
                isLoading={isLoading}
            />
        </div>
    )
}

export default TransactionPage;