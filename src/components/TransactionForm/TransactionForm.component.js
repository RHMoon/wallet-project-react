import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import "./TransactionForm.css";

const TransactionForm = (props) => {
    const { handleOnSubmit, customers = {}, isLoading } = props;
    const { register, handleSubmit, formState: { errors } } = useForm();
    // let i = 0;
    const [customerWallets, setCustomerWallets] = useState([]);
    // const [customer, setCustomer] = useState([]);

    const getWalletList = (id) => {
        const filteredCustomer = customers.filter((item) => {
            return item.customerId === id;
        })
        if (filteredCustomer.length === 0) {

        } else {
            return filteredCustomer[0].walletList
        }
    }

    useEffect(() => {
        return setCustomerWallets(getWalletList(1))
    }, [customers])


    // const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <>{
            isLoading ? (<p>Loading</p>) : (
                <>
                    <div className="transaction-container">
                        <h1>Transaction</h1>
                        <div className="table-user">
                            <form className="form" onSubmit={handleSubmit(handleOnSubmit)}>
                                <div className="form-row">
                                    <label>Wallet</label>
                                    <select {...register("fromWalletId")}>
                                        {
                                            customerWallets.map((item) => (
                                                <option value={`${item.walletId}`}>{item.walletId}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-row">
                                    <label>Transaction Type</label>
                                    <select {...register("transactionType")}>
                                        <option value="Transfer">Transfer</option>
                                        <option value="Top up">Top up</option>
                                    </select>
                                </div>
                                <div className="form-row">
                                    <label>To Wallet</label>
                                    <input type="number" {...register("toWalletId")}></input>
                                </div>
                                <div className="form-row">
                                    <label>Amount</label>
                                    <input type="number" {...register("amount")}></input>
                                </div>
                                <div className="form-row">
                                    <label>Description</label>
                                    <input type="text" {...register("note")}></input>
                                </div>
                                <div className="form-row">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>

                            {/* <button onClick={() => handleOnSubmit(dummy)}>Next</button> */}
                        </div>
                    </div>
                </>
            )
        }</>

    )
}

export default TransactionForm;