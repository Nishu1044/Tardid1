import { useState } from 'react'

let arr =[]
let tracker = -1
function App() {
  const [data, setData] = useState({
    name:"",
    password:""
  })

  const [dummyState, setDummyState] = useState(0); 

 function HandleChange(e){
  const {name,value} = e.target;

  setData(prev=>({
    ...prev,
    [name]:value
  }))

  // console.log(data);
 }

function HandleSubmit(e){
e.preventDefault()

let obj = {
  Name:data.name,
  Password:data.password
}
// console.log(obj);
// // arr.push(obj)
// console.log(arr);

if(tracker === -1){
  arr.push(obj)
}else{
  arr[tracker] = obj
}

tracker = -1

setData(prev=>({
  ...prev,
  name:"",
  password:""
}))

}

function HandleEdit(ind){
  // console.log(ind);

  setData(prev=>({
    ...prev,
    name:arr[ind].Name,
    password:arr[ind].Password
  }))

  tracker = ind
  
}


function HandleDelete(ind){
arr = arr.filter((ele,i)=> i !== ind)
setDummyState((prev) => prev + 1);
}

  return (
  <>
  <form onSubmit={HandleSubmit}>
  <input type='name' placeholder='name here' value={data.name} name='name' onChange={HandleChange}/>
  <input type='password' placeholder='password here' value={data.password} name='password'onChange={HandleChange}/>
  <input type="submit"/>
  </form>

  <table>
    <thead>
         <tr>
          <th>Name</th>
          <th>Password</th>
          <th>edit</th>
          <th>delete</th>
         </tr>
    </thead>


    <tbody>
        {
          arr.length > 0 ? (
          arr.map((ele,ind)=>{
          return(
            <tr key={ind}>
              <td>{ele.Name}</td>
              <td>{ele.Password}</td>
              <td>
                  <button onClick={() => HandleEdit(ind)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => HandleDelete(ind)}>Delete</button>
                </td>
            </tr>
          )
          })
          ):(
            <p>black arr</p>
          )
        }
    </tbody>
  </table>
  </>
  )
}

export default App
