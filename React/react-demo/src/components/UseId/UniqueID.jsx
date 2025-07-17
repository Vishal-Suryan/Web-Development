import { useId } from "react";

function UniqueID() {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} placeholder="Enter Email:" />
      <br />
      <label htmlFor={`${id}-password`}>Password</label>
      <input type="email" id={`${id}-password`} placeholder="Enter Email:" />
    </div>
  );
}
export default UniqueID;
