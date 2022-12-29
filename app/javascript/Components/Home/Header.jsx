import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { UserCircle, MagnifyingGlass } from "phosphor-react";

import Logo from "../../Assets/logo-white-h.png";
import Auth from "../../Services/Auth";

function Header({ onChange }) {
  const navigate = useNavigate();

  const onClick = () =>
    navigate(Auth.isAuthenticated() ? "/profile" : "/login");

  return (
    <div className="bg-palette-1 p-4 mb-4">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap justify-between items-center gap-3">
          <button type="button" onClick={() => navigate("./")}>
            <img src={Logo} alt="Logo" className="w-40" />
          </button>

          <div className="flex flex-row items-center">
            <div className="bg-white p-3 border-r rounded-l-md">
              <MagnifyingGlass weight="bold" color="gray" />
            </div>

            <input
              type="search"
              name="searchTerm"
              onChange={onChange}
              placeholder="Digite o nome de um produto"
              className="w-96 outline-none text-gray-500 border-none p-2 focus:ring-0 rounded-r-md"
            />
          </div>

          <button type="button" onClick={onClick}>
            <UserCircle color="white" size={40} />
          </button>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = { onChange: PropTypes.func.isRequired };

export default Header;
