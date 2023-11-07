import MyList from "../components/MyList";
import useFetch from "../hooks/useFetch";

function Home() {
  const {
    data: blogs,
    ispending,
    error,
  } = useFetch("http://localhost:4000/blogs");
  return (
    <div className="home">
      {ispending && <p>loading...</p>}
      {error && <p>{error}</p>}
      {blogs && (
        <MyList blogs={blogs} title={"All blogs"}/>
      )}
    </div>
  );
}

export default Home;
