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
    const response = await fetch(`${API_FLASK_URL}/predict_price`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answers),
    }).then(async (response) => {
      const data = await response.json();
      console.log(("Esto es en fetch service\n",data));
      return data;
    });
    return response;
  }