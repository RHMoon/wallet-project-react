import "./UserDetail.css";
import DisplayWallet from "../DisplayWallet/DisplayWallet.component";

const UserDetail = (props) => {
  const { data = {}, isLoading, selects, onSelected } = props;
  // console.log(props);
  return (
    <>
      {
        isLoading ? (<p>Loading</p>) : (
          <>
            <select id="dropdown" value={selects} onChange={onSelected}>
              {
                data.map((item) => (
                  <option value={`${item.customerId-1}`}>Customer {item.customerId}</option>
                ))
              }
            </select>
            <div className="user-container wallet-container w3-container w3-white w3-round-xlarge">
              <h1>User Detail</h1>
              <div className="table-user">
                <table>
                  <tr>
                    <td>Name</td>
                    <td>:</td>
                    <td>{data[parseInt(selects)].name}</td>
                  </tr>
                  <tr>
                    <td>Nik</td>
                    <td>:</td>
                    <td>{data[parseInt(selects)].nik}</td>
                  </tr>
                  <tr>
                    <td>Birthday</td>
                    <td>:</td>
                    <td>{data[parseInt(selects)].dateOfBirth}</td>
                  </tr>
                  <tr>
                    <td>Join at</td>
                    <td>:</td>
                    <td>{data[parseInt(selects)].registerAt}</td>
                  </tr>
                </table>
              </div>
            </div>

            <DisplayWallet data={data[parseInt(selects)].walletList} isLoading={isLoading} />
          </>
        )
      }
    </>

  )
}

export default UserDetail;