
import "./DisplayWallet.css";


const DisplayWallet = (props) => {
  const { data = {}, isLoading } = props;

  const renderWalletList = () => {
    return (
      <div className="grid-container w3-round-xlarge">
        {
          data.map((item) => (
            <div key={item.walletId} className="grid-item w3-round-large">
                  <p>{item.walletName}</p>
                  <p>{item.ballance}</p>
            </div>
          ))
        }
      </div>
    )
  }

  return (
    <>
      {
        isLoading ? (<p>Loading</p>) : (
          <>
            {/* {console.log(data)} */}
            <div className="display-padding">
              <div className="display-wallet-container">
                <h1>Display Wallet</h1>
                {renderWalletList()}
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default DisplayWallet;