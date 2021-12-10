import "./UserDetail.css";


const UserDetail = (props) => {
  const { data } = props;
  return (
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
  )
}

export default UserDetail;