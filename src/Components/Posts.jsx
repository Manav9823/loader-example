import { useLoaderData, useNavigation, Link } from "react-router-dom";


const api = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
    const result = useLoaderData();
    const navigation = useNavigation();
    console.log(result)
    console.log(navigation)
    if (navigation.state === "loading") {
      return <h1>Loading!</h1>;
    }
  
    return (
      <div>
        {result?.map((res) => (
          <div key={res.id}>
            <Link to={`/posts/${res.id}`}>
              <h1>{res.title}</h1>
            </Link>
            <p>{res.body}</p>
          </div>
        ))}
      </div>
    );
  };

export default Posts;

export const dataLoader = async () => {
  const res = await fetch(api);
  const jsonResult = await res.json();
  console.log(res)
  console.log(jsonResult)
  return jsonResult;
};