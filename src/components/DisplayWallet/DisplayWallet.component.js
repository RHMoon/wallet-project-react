
import "./DisplayWallet.css";


const DisplayWallet = (props) => {
  const data = props.data
    return(
        <div className="wallet-container">
          <table>
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
    )
}

export default DisplayWallet;