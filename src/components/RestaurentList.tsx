import restaurents from "../data/RestaurentData.js";
import { RestaurantType } from "../types/RestaurentTypes.js";

const RestaurentList = () => {
  return (
    <>
      List
      {restaurents.map((restaurent: RestaurantType) => (
        <li key={restaurent.id}>{restaurent.name}</li>
      ))}
    </>
  );
};

export default RestaurentList;
