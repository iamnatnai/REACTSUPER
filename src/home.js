import React,{useState} from 'react'

const Home = () => {
    const [X,setX] = useState(1)
  return (
    <div>
        {X}
      Forhome
      <button onClick={()=>{
        setX(X+1)
      }}>
        KICK ME
      </button>
    </div>
  )
}

export default Home
