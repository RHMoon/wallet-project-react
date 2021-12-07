import "./UserDetail.css";


const UserDetail = (props) => {
    const data = props.data
    return(
        <div className="user-container">
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
              <td>{data.birthday}</td>
            </tr>
            <tr>
              <td>Join at</td>
              <td>:</td>
              <td>{data.joinAt}</td>
            </tr>
          </table>
        </div>
    )
}

export default UserDetail;