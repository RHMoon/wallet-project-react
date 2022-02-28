import "./UserDetail.css";
import DisplayWallet from "../DisplayWallet/DisplayWallet.component";

const UserDetail = (props) => {
  const { data = {}, isLoading } = props;
  console.log(props);
  return (
    <>
      {
        isLoading ? (<p>Loading</p>) : (
          <>
            <div className="user-container">
              <h1>User Detail</h1>
              <div className="table-user">
                <table>
                  <tr>
                    <td>Name</td>
                    <td>:</td>
                    <td>{data.name}</td>
                  </tr>
                  <tr>
                    <td>Nik</td>
                    <td>:</td>
                    <td>{data.nik}</td>
                  </tr>
                  <tr>
                    <td>Birthday</td>
                    <td>:</td>
                    <td>{data.dateOfBirth}</td>
                  </tr>
                  <tr>
                    <td>Join at</td>
                    <td>:</td>
                    <td>{data.registerAt}</td>
                  </tr>
                </table>
              </div>  
            </div>

            <DisplayWallet data={data.walletList[0]} isLoading={isLoading} />
          </>
        )
      }
    </>

  )
}

export default UserDetail;