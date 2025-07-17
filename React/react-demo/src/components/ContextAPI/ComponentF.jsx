import { Data } from "./ComponentD";


const ComponentF = () => {
  return (
    <div>
        <Data.Consumer>
          {(name)=>{
            return <h1>{name}</h1>
          }}
        </Data.Consumer>
    </div>
  )
}

export default ComponentF;