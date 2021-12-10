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
              <td>{data.walletName}</td>
            </tr>
            <tr>
              <td>Amount</td>
              <td>:</td>
              <td>{data.ballance}</td>
            </tr>
            <tr>
              <td>Create At</td>
              <td>:</td>
              <td>{data.createdAt}</td>
            </tr>
          </table>
        </div>
    )
}

export default WalletDetail;