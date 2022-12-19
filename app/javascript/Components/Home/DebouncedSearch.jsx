import React from "react";
import PropTypes from "prop-types";

import { MagnifyingGlass } from "phosphor-react";

function DebouncedSearch({ onChange }) {
  return (
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
  );
}

DebouncedSearch.propTypes = { onChange: PropTypes.func.isRequired };

export default DebouncedSearch;
