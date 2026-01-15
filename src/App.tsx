import './App.css'
import {useFetch} from "./hooks/useFetch.tsx";
import type IUserModel from "./model/IUserModel.ts";

function App() {
  const users = useFetch<IUserModel[]>("https://jsonplaceholder.typicode.com/users", [])
  return (
    <>

      {users.map((user) => (
          <div key={user.id}>
            Users username and id {user.username} , {user.id}
          </div>

      ))}
    </>
  )
}

export default App