import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { respuestasModelo } from "../services/app";
//import "./Formulario.css";
//import "./App.css";

const Formulario = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [editingQuestionIndex, setEditingQuestionIndex] = useState(null);
  const [totalQuestions] = useState(42); // Actualiza el número total de preguntas

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleEditAnswer = (questionIndex) => {
    setEditingQuestionIndex(questionIndex);
  };

  const renderQuestions = () => {
    const questions = [
      "Calificación general de la vivienda (OverallQual)",
      "Año de construcción (YearBuilt)",
      "Año de remodelación (YearRemodAdd)",
      "Área de revestimiento de mampostería (MasVnrArea)",
      "Área terminada del sótano (BsmtFinSF1)",
      "Área total del sótano (TotalBsmtSF)",
      "Área del primer piso (1stFlrSF)",
      "Área habitable sobre el nivel del suelo (GrLivArea)",
      "Baños completos (FullBath)",
      "Medio baño (HalfBath)",
      "Habitaciones totales por encima del nivel del suelo (TotRmsAbvGrd)",
      "Chimeneas (Fireplaces)",
      "Año de construcción del garaje (GarageYrBlt)",
      "Capacidad del garaje para autos (GarageCars)",
      "Área del garaje (GarageArea)",
      "Área de cubierta de madera (WoodDeckSF)",
      "Área de porche abierto (OpenPorchSF)",
      "Zonificación de la propiedad (MSZoning)",
      "Configuración del lote (LotConfig)",
      "Vecindario (Neighborhood)",
      "Condición de la ubicación principal (Condition1)",
      "Condición de la ubicación secundaria (Condition2)",
      "Tipo de construcción (BldgType)",
      "Estilo de la vivienda (HouseStyle)",
      "Estilo del techo (RoofStyle)",
      "Material del techo (RoofMatl)",
      "Material exterior principal (Exterior1st)",
      "Tipo de revestimiento de mampostería (MasVnrType)",
      "Calidad exterior (ExterQual)",
      "Calificación del sótano (BsmtQual)",
      "Exposición del sótano (BsmtExposure)",
      "Tipo de acabado del sótano (BsmtFinType1)",
      "Sistema de calefacción (Heating)",
      "Calidad de calefacción y aire acondicionado (HeatingQC)",
      "¿Tiene aire acondicionado central? (CentralAir)",
      "Calidad de la cocina (KitchenQual)",
      "Calidad de la chimenea (FireplaceQu)",
      "Condición del garaje (GarageCond)",
      "Calidad de la piscina (PoolQC)",
      "Condición de venta (SaleCondition)",
    ];

    const options = {
      q3: [
        { value: "conversion", label: "Sell things" },
        { value: "social", label: "Become famous" },
        { value: "mobile", label: "Mobile market" },
      ],
    };

    return (
      <CSSTransition
        key={currentQuestion}
        classNames="fade"
        timeout={500}
      >
        <div className="card">
          <div className="card-content">
            <label className="fs-field-label fs-anim-upper">
              {questions[currentQuestion]}
            </label>
            {currentQuestion === 3 ? (
              <select
                className="cs-select cs-skin-boxes fs-anim-lower"
                name={`answer${currentQuestion + 1}`}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled selected>
                  Pick a color
                </option>
                <option value="#588c75" data-class="color-588c75">
                  #588c75
                </option>
                <option value="#b0c47f" data-class="color-b0c47f">
                  #b0c47f
                </option>
              </select>
            ) : currentQuestion === 2 ? (
              <div className="fs-radio-group fs-radio-custom clearfix fs-anim-lower">
                {options.q3.map((option) => (
                  <span key={option.value}>
                    <input
                      id={`q3-${option.value}`}
                      name={`answer${currentQuestion + 1}`}
                      type="radio"
                      value={option.value}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor={`q3-${option.value}`} className={`radio-${option.value}`}>
                      {option.label}
                    </label>
                  </span>
                ))}
              </div>
            ) : (
              <input
                type={currentQuestion === 1 ? "email" : "text"}
                name={`answer${currentQuestion + 1}`}
                value={answers[`answer${currentQuestion + 1}`] || ""}
                onChange={handleInputChange}
                className="fs-anim-lower"
                required
              />
            )}
          </div>
          <button onClick={handleNextQuestion}>
            {currentQuestion < totalQuestions - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </CSSTransition>
    );
  };

  const renderSummary = () => {
    const questions = [
      "Calificación general de la vivienda (OverallQual)",
      "Año de construcción (YearBuilt)",
      "Año de remodelación (YearRemodAdd)",
      "Área de revestimiento de mampostería (MasVnrArea)",
      "Área terminada del sótano (BsmtFinSF1)",
      "Área total del sótano (TotalBsmtSF)",
      "Área del primer piso (1stFlrSF)",
      "Área habitable sobre el nivel del suelo (GrLivArea)",
      "Baños completos (FullBath)",
      "Medio baño (HalfBath)",
      "Habitaciones totales por encima del nivel del suelo (TotRmsAbvGrd)",
      "Chimeneas (Fireplaces)",
      "Año de construcción del garaje (GarageYrBlt)",
      "Capacidad del garaje para autos (GarageCars)",
      "Área del garaje (GarageArea)",
      "Área de cubierta de madera (WoodDeckSF)",
      "Área de porche abierto (OpenPorchSF)",
      "Zonificación de la propiedad (MSZoning)",
      "Configuración del lote (LotConfig)",
      "Vecindario (Neighborhood)",
      "Condición de la ubicación principal (Condition1)",
      "Condición de la ubicación secundaria (Condition2)",
      "Tipo de construcción (BldgType)",
      "Estilo de la vivienda (HouseStyle)",
      "Estilo del techo (RoofStyle)",
      "Material del techo (RoofMatl)",
      "Material exterior principal (Exterior1st)",
      "Tipo de revestimiento de mampostería (MasVnrType)",
      "Calidad exterior (ExterQual)",
      "Calificación del sótano (BsmtQual)",
      "Exposición del sótano (BsmtExposure)",
      "Tipo de acabado del sótano (BsmtFinType1)",
      "Sistema de calefacción (Heating)",
      "Calidad de calefacción y aire acondicionado (HeatingQC)",
      "¿Tiene aire acondicionado central? (CentralAir)",
      "Calidad de la cocina (KitchenQual)",
      "Calidad de la chimenea (FireplaceQu)",
      "Condición del garaje (GarageCond)",
      "Calidad de la piscina (PoolQC)",
      "Condición de venta (SaleCondition)",
    ];

    return (
      <div className="summary">
        <h2>Resumen de respuestas:</h2>
        <ul>
          {Object.keys(answers).map((key) => (
            <li key={key}>
              {questions[key.split("answer")[1] - 1]}:{" "}
              {editingQuestionIndex === key ? (
                <input
                  type="text"
                  name={key}
                  value={answers[key]}
                  onChange={handleInputChange}
                />
              ) : (
                answers[key]
              )}
              {editingQuestionIndex === key ? (
                <button onClick={() => setEditingQuestionIndex(null)}>Guardar</button>
              ) : (
                <button onClick={() => handleEditAnswer(key)}>Editar respuesta</button>
              )}
            </li>
          ))}
        </ul>
        <button onClick={enviarRespuestas}>Enviar Respuestas</button>
      </div>
    );
  };

  const enviarRespuestas = () => {
    respuestasModelo(answers)
    console.log("Respuestas enviadas a la base de datos:", answers);
  };

  return (
    <div className="container">
      <div className="fs-form-wrap" id="fs-form-wrap">
        <form
          id="myform"
          className="fs-form fs-form-full"
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <ol className="fs-fields">
            <TransitionGroup>
              {isFinished ? renderSummary() : renderQuestions()}
            </TransitionGroup>
          </ol>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
