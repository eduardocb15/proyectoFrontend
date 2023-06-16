//import useFetch from "fetch-suspense";
import { useUser } from "../UserContext";
import useFetchPost from "./useFetchPost";

/* export const useQuestions = () =>
  useFetch("https://overflow.anxoso.com/questions");
export const useQuestion = (id) =>
  useFetch(`https://overflow.anxoso.com/questions/${id}`);
 */

export function useUserActions() {
  const fetchPost = useFetchPost();
  const [, setUser] = useUser();

  const signup = (name, email, password) =>
    fetchPost("http://localhost:5173/signup", {
      name,
      email,
      password,
    }).then((data) => setUser(data));

  const login = (email, password) =>
    fetchPost("http://localhost:5173/login", { email, password }).then((data) =>
      setUser(data)
    );

  const logout = () => setUser();

  return { signup, login, logout };
}
