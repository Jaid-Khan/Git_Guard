import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Analytics",
      path: "/analytics",
    },
    {
      name: "Reviews",
      path: "/reviews",
    },
    {
      name: "Repositories",
      path: "/repositories",
    },
    {
      name: "Setup Guide",
      path: "/setup",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white shadow">
      <div className="p-5 border-b">
        <h2 className="font-bold text-xl">GitGuard AI</h2>
      </div>

      <nav className="p-4">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-3 rounded mb-2 ${
                isActive ? "bg-black text-white" : "hover:bg-gray-100"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
