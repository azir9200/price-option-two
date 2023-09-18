import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  console.log(option);

  const { id, name, price, billing_period, features } = option || {}
  console.log(features);
  return (
    <div>
      {/* <p> {features} </p> */}

      <h6 className="text-center" > {id} </h6>
      <h2 className="bg-blue-500 rounded-md p-6 text-white " >
        <h5> {billing_period} </h5>
        <span className="text-7xl" > {price} </span>
        <span className="text-3xl" >/mon</span>
      </h2>
      <h4 className="text-3xl" >  {name} </h4>



    </div>
  );
};

export default PriceOption;