import DisplayTransaction from "../DisplayTransaction/DisplayTransaction.component";

import "./WalletDetail.css";


const WalletDetail = (props) => {
  const { data = {}, isLoading } = props;
  
  return (
    <>
      {
        isLoading ? (<p>Loading</p>) : (
          <>
            {/* {let customerWallet = data.walletList[0]} */}
            <div className="wallet-container">
              <h1>Wallet Detail</h1>
              <table>
                <tr>
                  <td>Wallet Name</td>
                  <td>:</td>
                  <td>{customerWallet.walletName}</td>
                </tr>
                <tr>
                  <td>Amount</td>
                  <td>:</td>
                  <td>{customerWallet.ballance}</td>
                </tr>
                <tr>
                  <td>Create At</td>
                  <td>:</td>
                  <td>{customerWallet.createdAt}</td>
                </tr>
              </table>
            </div>

            {
                Object.keys(customerWallet.transactionHistory).length === 0
                    ? <p className="no-trans">NO TRANSACTION HISTORY</p>
                    : <DisplayTransaction data ={customerWallet.transactionHistory} />
            }

          </>
        )
      }
    </>

  )
}

export default WalletDetail;