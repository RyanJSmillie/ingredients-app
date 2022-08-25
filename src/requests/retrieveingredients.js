import axios from "axios";

function retrieveIngredients() {
  return axios
    .get("http://localhost:5001/ingredients")
    .then((response) => {
      const ingredientList = response.data.result[0];

      const fridgeInventory = [];
      const freezerInventory = [];
      const cupboardInventory = [];
      const spiceRackInventory = [];

      for (let i = 0; i < ingredientList.length; i += 1) {
        if (ingredientList[i].name != null) {
          if (ingredientList[i].storage === "fridge") {
            fridgeInventory.push(ingredientList[i]);
          } else if (ingredientList[i].storage === "freezer") {
            freezerInventory.push(ingredientList[i]);
          } else if (ingredientList[i].storage === "cupboard") {
            cupboardInventory.push(ingredientList[i]);
          } else if (ingredientList[i].storage === "spice-rack") {
            spiceRackInventory.push(ingredientList[i]);
          }
        }
      }

      const parsedList = [
        fridgeInventory,
        freezerInventory,
        cupboardInventory,
        spiceRackInventory,
        ingredientList,
      ];

      return parsedList;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default retrieveIngredients;
