import useGithubUser from "../utilis/useGithubUSer";
import { Link } from "react-router-dom";

export default function GithubUser() {
  const { users, isLoading, error, onRefresh } = useGithubUser("simone");
  return (
    <div>
      <button onClick={onRefresh}>Refresh</button>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>{user.login}</li>
          ))}
        </ul>
      )}
      <Link to="/">home</Link>
    </div>
  );
}
