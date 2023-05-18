import React from "react";
import "./input.css";
import PropTypes from "prop-types";

export const Props = ({ title, subtitle, name }) => {

  // if (!title) {
  //   throw new Error("No existe el título");
  // }
  // console.log(props);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen px-32 py-0 right-4">
        <h1 className="text-red-600 font-bold text-2xl">{title}</h1>
        <p>{subtitle}</p>
        <p>{name}</p>
      </div>
    </>
  );
};

Props.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Props.defaultProps = {
  title: 'No existe un titulo',
  subtitle: 'Aun no hay un subtitulo',
  name:'Cristian Palacio'
}