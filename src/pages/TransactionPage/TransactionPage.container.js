import { useEffect, useState } from 'react';
// import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import TransactionForm from '../../components/TransactionForm/TransactionForm.component';

import "./TransactionPage.css";

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

    const onSubmit = async (transaction) => {

        const json = JSON.stringify({
            "toWalletId": transaction.toWalletId,
            "amount": transaction.amount,
            "note": transaction.note,
        });
        // console.log(json)

        try {
            console.log(transaction.transactionType)
            if (transaction.transactionType === "Transfer") {
                const res = await axios.post(
                    ` http://localhost:8080/customers/1/transfer/${transaction.fromWalletId} `,
                    json
                    , {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                );
                console.log(res);
            }

            if (transaction.transactionType === "Top Up") {
                const res = await axios.post(
                    ` http://localhost:8080/customers/1/top-up/ `,
                    json
                    , {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                );
                // console.log('Top-Up');
                console.log(res);
            }

            fetchCustomer()
            alert('success')
        } catch (error) {
            alert(error.message)
            console.log(error);
        }
    }

    return (
        <div className="wallet">
            <h1>Transaction</h1>
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