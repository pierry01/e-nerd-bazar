import React from "react";
import PropTypes from "prop-types";

import { UserCircle } from "phosphor-react";

import Logo from "../../Assets/logo-white-h.png";
import DebouncedSearch from "./DebouncedSearch";

function Header({ onChange }) {
  return (
    <div className="bg-palette1 p-4 mb-4">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap justify-between items-center gap-3">
          <img src={Logo} alt="Logo" className="w-40" />

          <DebouncedSearch onChange={onChange} />

          <UserCircle color="white" size={40} />
        </div>
      </div>
    </div>
  );
}

Header.propTypes = { onChange: PropTypes.func.isRequired };

export default Header;
