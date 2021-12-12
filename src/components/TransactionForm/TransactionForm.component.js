import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import "./TransactionForm.css";

const TransactionForm = (props) => {
    const { handleOnSubmit, customers = {}, isLoading } = props;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [allCustomerWallets, setAllCustomerWallets] = useState([]);
    const [customerWallets, setCustomerWallets] = useState([]);
    const [selectWallets, setSelectWallets] = useState(0);
    const [maxBallance, setMaxBallance] = useState(1000);
    // const [walletAvailability, setwalletAvailability] = useState(true);
    // const [customer, setCustomer] = useState([]);

    const getWalletList = (id) => {
        let allWalletList = [];
        const filteredCustomer = customers.filter((item) => {
            let customerWalletList = item.walletList
            allWalletList = [...allWalletList, ...customerWalletList]
            return item.customerId === id;
        })
        if (filteredCustomer.length === 0) {

        } else {
            setAllCustomerWallets(allWalletList)
            console.log(allWalletList);
            return filteredCustomer[0].walletList
        }
    }

    const onSelectedWallet = (props) => {
        setSelectWallets(parseInt(props.target.value))

        setMaxBallance(checkAmount(selectWallets))
        // console.log(props.target.value)
    }

    const checkAmount = (id) => {
        const filteredWallet = customerWallets.filter((item) => {
            return item.walletId === id;
        })
        if (filteredWallet.length === 0) {

        } else {
            // console.log(filteredWallet)
            return filteredWallet[0].ballance
        }
    }

    const checkWalletByID = (id) => {
        const filteredWallet = allCustomerWallets.filter((item) => {
            console.log(item);
            return item.walletId === id;
        })
        if (filteredWallet.length === 0) {
            return false
        } else {
            // console.log(filteredWallet)
            return true
        }
    }

    useEffect(() => {
        return setCustomerWallets(getWalletList(1))
    }, [customers])

    useEffect(() => {
        setMaxBallance(checkAmount(selectWallets))
    }, [selectWallets])

    // useEffect(() => {
    //     setMaxBallance(checkAmount(selectWallets))
    // }, [handleOnSubmit])


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
                                    <select {...register("fromWalletId", { required: true })} value={selectWallets} onChange={onSelectedWallet}>
                                        <option value="" disabled>Select wallet</option>
                                        {
                                            customerWallets.map((item) => (
                                                <option value={`${item.walletId}`}>{item.walletId}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="form-row">
                                    <label>Transaction Type</label>
                                    <select {...register("transactionType", { required: true })}>
                                        <option value="Transfer">Transfer</option>
                                        <option value="Top Up">Top up</option>
                                    </select>
                                </div>

                                <div className="form-row">
                                    <label>To Wallet</label>
                                    <input type="number" placeholder="Wallet ID" {...register("toWalletId", {
                                        required: true, min: 1,
                                        validate: {
                                            checkWallet: v => checkWalletByID(parseInt(v))
                                        }
                                    })}></input>
                                </div>

                                <div className="error">
                                    {errors.toWalletId && errors.toWalletId.type === "required" && "Wallet ID is required"}

                                    {errors.toWalletId && errors.toWalletId.type === "min" && (
                                        <span>invalid input</span>
                                    )}

                                    {errors.toWalletId && errors.toWalletId.type === "checkWallet" && (
                                        <span>wallet doesn't exist</span>
                                    )}
                                </ div>

                                <div className="form-row">
                                    <label>Amount</label>
                                    <input type="number" placeholder="Amount"
                                        {...register("amount", {
                                            required: true, max: maxBallance, min: 0
                                        })}
                                    />
                                </div>

                                <div className="error">
                                    {errors.amount && errors.amount.type === "required" && "amount is required"}

                                    {errors.amount && errors.amount.type === "max" && (
                                        <span>balance insufficient</span>
                                    )}

                                    {errors.amount && errors.amount.type === "min" && (
                                        <span>invalid input</span>
                                    )}
                                </ div>

                                {/* <p>{maxBallance}</p> */}

                                <div className="form-row">
                                    <label>Description</label>
                                    <input type="text" placeholder="Note" {...register("note")}></input>
                                </div>
                                <div className="form-row">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )
        }</>

    )
}

export default TransactionForm;