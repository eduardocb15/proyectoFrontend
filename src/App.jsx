import NewsHome from "./NewsHome";
import Dropdown from "./Dropdown";
import User from "./User";
import "./styles.css";
import "./App.css";

function App() {
  const itemsMenu = [
    {
      slug: "/categorias/",
      anchor: "Categorias",
    },
    {
      slug: "/joyasdeldia/",
      anchor: "Joyas del día",
    },
    {
      slug: "/notifiltro/",
      anchor: "Noti Filtro TOP: Elige tema y saborea las novedades!",
    },
    {
      slug: "/likeornot/",
      anchor: "❤️⚖️💀",
    },
  ];

  const itemsUser = [
    {
      slug: "/userinfo/",
      anchor: "Información Usuario",
    },
    {
      slug: "/updateuser/",
      anchor: "Actualizar información usuario",
    },
    {
      slug: "/usernews/",
      anchor: "Obtener todas las noticias del usuario",
    },
    {
      slug: "/logout/",
      anchor: "Cerrar sesión",
    },
  ];

  return (
    <>
      <div className="App">
        <Dropdown dropdownTitle="🔎" items={itemsMenu} />
        <h1>HB NEWS</h1>
        <User dropdownTitle="👤" items={itemsUser} />
      </div>
      <NewsHome />
    </>
  );
}

export default App;
