import React from "react";
import PropTypes from "prop-types";

function TextLineClamp({ lineClamp, className, paragraph }) {
  return (
    <p
      className={className}
      style={{
        display: "-webkit-box",
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}
    >
      {paragraph}
    </p>
  );
}

TextLineClamp.propTypes = {
  lineClamp: PropTypes.number.isRequired,
  paragraph: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default TextLineClamp;
