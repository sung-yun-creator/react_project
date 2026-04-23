import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

import axios from 'axios';
import { use } from 'react';

function App() {

  // node서버에 요청한 정보를 보관하는 state 생성
  const [users, setUsers] = useState();

  const getList = () => {
    console.log("목록 데이터 요청...");

    // 로컬테스트
    // const SEVER_URL = "http://localhost:3000/users/list";

    // 배포용
    const SEVER_URL = "/users/list";

    axios.get(SEVER_URL)
      .then(res => {
        console.log("응답받은 데이터:", res.data);

        // setUsers()함수로 state 변수에 저장
        setUsers(res.data);

      });
  }

  return (
    <>
      <Container>
        
      <h1>NCP 배포 서비스(CI/CD 자동배포)</h1>
      <button onClick={getList}>목록조회</button>

      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>PASSWORD</th>
            <th>NICKNAME</th>
          </tr>
        </thead>
        <tbody>
          {/* node서버로부터 받은 목록데이터를 map()로 출력 */}
          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}

          { users?.map((user, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>{user.pw}</td>
              <td>{user.nick}</td>
            </tr>
          )) }
        </tbody>      
      </Table>
    </Container>
  </>
  )
}


export default App
