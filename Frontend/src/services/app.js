import { API_FLASK_URL } from "../config";

export async function createUser(user) {
    const response = await fetch(`${API_FLASK_URL}/auth/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(async (response) => {
      const data = await response.json();
      return data;
    });
    return response;
  }

  export async function loginUser(user) {
    const response = await fetch(`${API_FLASK_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(async (response) => {
      const data = await response.json();
      return ("Esto es en fetch service\n",data);
    });
    return ("Esto es en fetch service\n",response);
  }

  export async function respuestasModelo(answers){
    //console.log("Estos es answers[0]", answers.answer2);
    const response = await fetch(`${API_FLASK_URL}/predict_price`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          "MSZoning": answers.answer18,
          "LotConfig": answers.answer19,
          "Neighborhood": answers.answer20,
          "Condition1": answers.answer21,
          "Condition2": answers.answer22,
          "BldgType": answers.answer23,
          "HouseStyle": answers.answer24,
          "RoofStyle": answers.answer25,
          "RoofMatl": answers.answer26,
          "Exterior1st": answers.answer27,
          "MasVnrType": answers.answer28,
          "ExterQual": answers.answer29,
          "BsmtQual": answers.answer30,
          "BsmtExposure": answers.answer31,
          "BsmtFinType1": answers.answer32,
          "Heating": answers.answer33,
          "HeatingQC": answers.answer34,
          "CentralAir": answers.answer35,
          "KitchenQual": answers.answer36,
          "FireplaceQu": answers.answer37,
          "GarageCond": answers.answer38,
          "PoolQC": answers.answer39,
          "SaleCondition": answers.answer40,
          "OverallQual": answers.answer, // Falta esta
          "YearBuilt": answers.answer2,
          "YearRemodAdd": answers.answer3,
          "MasVnrArea": answers.answer4,
          "BsmtFinSF1": answers.answer5,
          "TotalBsmtSF": answers.answer6,
          "1stFlrSF": answers.answer7,
          "GrLivArea": answers.answer8,
          "FullBath": answers.answer9,
          "HalfBath": answers.answer10,
          "TotRmsAbvGrd": answers.answer11,
          "Fireplaces": answers.answer12,
          "GarageYrBlt": answers.answer13,
          "GarageCars": answers.answer14,
          "GarageArea": answers.answer15,
          "WoodDeckSF": answers.answer16,
          "OpenPorchSF": answers.answer17
      }),
    }).then(async (response) => {
      const data = await response.json();
      console.log(("Esto es en fetch service\n",data));
      return data;
    });
    return response;
  }