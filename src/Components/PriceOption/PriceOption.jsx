import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  console.log(option);

  const { id, name, price, billing_period, features } = option || {}
  console.log(features);
  return (
    <div className="bg-blue-200 rounded-xl p-4  " >
      {/* <p> {features} </p> */}

      <h6 className="text-center" > {id} </h6>
      <h2 className="bg-blue-500 rounded-md p-6 text-white " >
        <h5> {billing_period} </h5>
        <span className="text-7xl" > {price} </span>
        <span className="text-3xl" >/mon</span>
      </h2>
      <h4 className="text-3xl" >  {name} </h4>
      <div className="pl-8" >

        {
          features && features.map((feature, index) => <Feature key={index} feature={feature} ></Feature>)
        }

      </div>
      <button className="mt-12    bg-green-800  w-full  font-bold rounded-md  hover:bg-yellow-500" >Buy Now</button>
    </div>
  );
};

export default PriceOption;