import { useSelector } from 'react-redux'
import Content from './Content'

export default function Show() {
  const storedValue = useSelector((state) => state.allDetail.value)
  return (
    <div className='show'>
      <h1>All Details</h1>
      <div className='allUserContainer'>
        {storedValue.map((user, index = 0) => {
          console.log(user)
          return <Content key={index} user={user} />
        })}
      </div>
    </div>
  )
}
