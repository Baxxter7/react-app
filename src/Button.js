import PropTypes from 'prop-types';

export function Button({ text, name }) {

  console.log({ text });

  if(!text){
    console.error("Texto Requerido")
  }

  return <button onClick = { () =>{ console.log('Hemos vuelto Hijos de puta')} }>{text} - {name}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired
};

//Para asignar valores por defecto a parametros
Button.defaultProps = {
  name: "Some User"
}