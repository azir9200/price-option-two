import { AiFillCheckCircle } from "react-icons/ai";


const Feature = ({ feature }) => {
  console.log(feature);
  return (
    <div>
      <p className="flex items-center my-8 " >
        <AiFillCheckCircle className="text-green-600" ></AiFillCheckCircle>#{feature} </p>


    </div>
  );
};

export default Feature;