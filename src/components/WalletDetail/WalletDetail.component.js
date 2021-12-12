import DisplayTransaction from "../DisplayTransaction/DisplayTransaction.component";

import "./WalletDetail.css";


const WalletDetail = (props) => {
  const { data = {}, isLoading } = props;

  // const [customer, setCustomer] = useState([]);



  // const loadCustomerWallet = () =>{
  //   return let customerWallet = data.walletList[0]}
  // }
  
  return (
    <>
      {
        isLoading ? (<p>Loading</p>) : (
          <>
            
            <div className="wallet-container">
              <h1>Wallet Detail</h1>
              <table>
                <tr>
                  <td>Wallet Name</td>
                  <td>:</td>
                  <td>{data.walletList[0].walletName}</td>
                </tr>
                <tr>
                  <td>Amount</td>
                  <td>:</td>
                  <td>{data.walletList[0].ballance}</td>
                </tr>
                <tr>
                  <td>Create At</td>
                  <td>:</td>
                  <td>{data.walletList[0].createdAt}</td>
                </tr>
              </table>
            </div>

            {
                Object.keys(data.walletList[0].transactionHistory).length === 0
                    ? <p className="no-trans">NO TRANSACTION HISTORY</p>
                    : <DisplayTransaction data ={data.walletList[0].transactionHistory} />
            }

          </>
        )
      }
    </>

  )
}

export default WalletDetail;