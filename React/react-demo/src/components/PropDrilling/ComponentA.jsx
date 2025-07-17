import ComponentB from "./ComponentB";

const ComponentA = () => {
    const name = "Rock";
  return (
    <div>
        <ComponentB name={name} />
    </div>
  )
}

export default ComponentA