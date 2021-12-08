import "./WalletDetail.css";

const WalletDetail = (props) => {
  const { data } = props;
    return(
        <div className="wallet-container">
          <h1>Wallet Detail</h1>
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
            <tr>
              <td>Create At</td>
              <td>:</td>
              <td>{data.joinAt}</td>
            </tr>
          </table>
        </div>
    )
}

export default WalletDetail;