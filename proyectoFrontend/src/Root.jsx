import { Link, Outlet } from "react-router-dom";
import { useUser } from "./UserContext";
import "./Root.css";
import { useUserActions } from "./hooks/api";

function Root() {
  const [user] = useUser();
  const { logout } = useUserActions();

  return (
    <>
      <header>
        <div className="content">
          <Link to="/">
            <h1>HACK A BOSS NEWS</h1>
          </Link>
          {user ? (
            <span>
              {user.name} <span onClick={() => logout()}>⏻</span>
            </span>
          ) : (
            <Link to="/login">Iniciar sesión</Link>
          )}
        </div>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
