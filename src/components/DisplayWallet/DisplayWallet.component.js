
import "./DisplayWallet.css";


const DisplayWallet = (props) => {
  const { data = {}, isLoading } = props;
  return (
    <>
      {
        isLoading ? (<p>Loading</p>) : (
          <div className="display-padding">
            <div className="display-wallet-container">
              <h1>Display Wallet</h1>
              <table className="table-wallet">
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
              </table>
            </div>
          </div>
        )
      }
    </>
  )
}

export default DisplayWallet;