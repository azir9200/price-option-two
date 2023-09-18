import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
  const planOptions = [

    {
      "id": 1,
      "name": "Basic Membership",
      "price": 29.99,
      "billing_period": "monthly",
      "features": [
        "Access to cardio equipment",
        "Strength training area",
        "Locker room access",
        "Personal trainer available (additional cost)",
        "Open 7 days a week"
      ]
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "price": 49.99,
      "billing_period": "monthly",
      "features": [
        "Access to cardio equipment",
        "Strength training area",
        "Locker room access with towel service",
        "Unlimited fitness classes",
        "Personal trainer available (2 sessions/month included)",
        "Sauna and spa access",
        "Open 7 days a week"
      ]
    },
    {
      "id": 3,
      "name": "Annual Membership",
      "price": 499.99,
      "billing_period": "yearly",
      "features": [
        "Access to cardio equipment",
        "Strength training area",
        "Locker room access with towel service",
        "Unlimited fitness classes",
        "Personal trainer available (4 sessions/year included)",
        "Priority booking for classes",
        "Sauna and spa access",
        "Open 7 days a week"
      ]
    }
  ]



  return (
    <div className=" m-12 text-2xl">
      <h2 className="text-5xl" >Best Option in the town</h2>
      <div className="grid grid-cols-3 gap-8" >
        {
          planOptions.map(option => <PriceOption key={option.id} option={option} ></PriceOption>)
        }
      </div>


    </div>
  );
};

export default PriceOptions;