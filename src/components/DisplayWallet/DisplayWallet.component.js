
import "./DisplayWallet.css";


const DisplayWallet = (props) => {
  const { data }  = props;
  return (
    <div className="display-padding">
      <div className="display-wallet-container">
        <h1>Display Wallet</h1>
        <table className="table-wallet">
          <tr>
            <td>Wallet Name</td>
            <td>:</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Amount</td>
            <td>:</td>
            <td>{data.amount}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default DisplayWallet;