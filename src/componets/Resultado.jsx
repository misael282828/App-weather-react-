import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();
  const { name, main } = resultado;

  console.log(resultado);

  return (
    <div className="contenedor clima">
      <h2>El Clima de {name} es: </h2>
      <p>
        {" "}
        {parseInt(main.temp)} <span>&#x2103;</span>
      </p>

        <div className="tem_min_max">

      <p >
        {" "}
        Minima {parseInt(main.temp_min)} <span>&#x2103;</span>
      </p>

      <p>
        {" "}
        Maxima {parseInt(main.temp_max)} <span>&#x2103;</span>
      </p>


        </div>


    </div>
  );
};
export default Resultado;
