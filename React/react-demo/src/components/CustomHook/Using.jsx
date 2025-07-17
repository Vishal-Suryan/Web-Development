import useFetch from "./useFetch";

function Using() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title} </p>;
        })}
    </div>
  );
}
export default Using;
