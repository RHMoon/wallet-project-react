import "./TransactionForm.css";

const TransactionForm = (props) => {
    const { handleOnSubmit, dummy, isLoading } = props;
    console.log(dummy);

    return (
        <>{
            isLoading ? (<p>Loading</p>) : (
                <>
                    <div className="transaction-container">
                        <h1>Transaction</h1>
                        <div className="table-user">
                            <table>
                                <tr>
                                    <td>Transaction Type</td>
                                    <td> : </td>
                                    <td>
                                        <select>
                                            <option value="0">Transfer</option>
                                            <option value="1">Top up</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td> : </td>
                                    <td>
                                        <input type="text"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>To Wallet</td>
                                    <td> : </td>
                                    <td>
                                        <input type="number"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Amount</td>
                                    <td> : </td>
                                    <td>
                                        <input type="number"></input>
                                    </td>
                                </tr>
                            </table>
                            <button onClick={() => handleOnSubmit({dummy})}>Next</button>
                        </div>
                    </div>
                </>
            )
        }</>

    )
}

export default TransactionForm;