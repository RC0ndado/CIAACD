import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles/formulario.css";
//import "./App.css";

const Formulario = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [editingQuestionIndex, setEditingQuestionIndex] = useState(null);
  const [totalQuestions] = useState(40); // Actualiza el número total de preguntas
  const options = {
    q18: [
      { value: "RL", label: "Zonificación Residencial Baja Densidad" },
      { value: "RM", label: "Zonificación Residencial Media Densidad" },
      { value: "C (all)", label: "Zonificación Comercial" },
      { value: "FV", label: "Zonificación de Vencindario Planeado" },
      { value: "RH", label: "Zonificación Residencial de Casas Móviles" },
    ],
    q19: [
        { value: "Inside", label: "Dentro de la Manzana" },
        { value: "FR2", label: "Lote de Esquina" },
        { value: "Corner", label: "Lote en Esquina" },
        { value: "CulDSac", label: "Cul-de-Sac" },
        { value: "FR3", label: "Lote en Área de Frontera" },
      ],
      q20: [
        { value: "CollCr", label: "College Creek" },
        { value: "Veenker", label: "Veenker" },
        { value: "Crawfor", label: "Crawford" },
        { value: "NoRidge", label: "Northridge" },
        { value: "Mitchel", label: "Mitchell" },
        { value: "Somerst", label: "Somerst" },
        { value: "NWAmes", label: "Northwest Ames" },
        { value: "OldTown", label: "Old Town" },
        { value: "Brkside", label: "Brookside" },
        { value: "Sawyer", label: "Sawyer" },
        { value: "NridgHt", label: "Northridge Heights" },
        { value: "NAmes", label: "North Ames" },
        { value: "SawyerW", label: "Sawyer West" },
        { value: "IDOTRR", label: "lowa DOT and Rail Road" },
        { value: "MeadowV", label: "Meadow Village" },
        { value: "Edwards", label: "Edwards" },
        { value: "Timber", label: "Timber" },
        { value: "Gilbert", label: "Gilbert" },
        { value: "StoneBr", label: "Stone Brook" },
        { value: "ClearCr", label: "Clear Creek" },
        { value: "NPkVill", label: "Northpark Villa" },
        { value: "Blmngtn", label: "Bluestem" },
        { value: "BrDale", label: "Briardale" },
        { value: "SWISU", label: "lowa State University" },
        { value: "Blueste", label: "East Blue" },
      ],
      q21: [
        { value: "Norm", label: "Normal" },
        { value: "Feedr", label: "Feedr" },
        { value: "PosN", label: "Posición Norte" },
        { value: "Artery", label: "Arterial" },
        { value: "RRAe", label: "Ferrocarril RRAe" },
        { value: "RRNn", label: "Ferrocarril RR An & Bn" },
        { value: "PosA", label: "Posición A" },
        { value: "RRNe", label: "Ferrocarril RR Ne & Bn" },
      ],
      q22: [
        { value: "Norm", label: "Normal" },
        { value: "Artery", label: "Feedr" },
        { value: "RRNn", label: "Posición Norte" },
        { value: "Feedr", label: "Arterial" },
        { value: "PosN", label: "Ferrocarril RRAe" },
        { value: "PosA", label: "Ferrocarril RR An & Bn" },
        { value: "RRAn", label: "Posición A" },
        { value: "RRAe", label: "Ferrocarril RR Ne & Bn" },
      ],
      q23: [
        { value: "1Fam", label: "Unifamiliar" },
        { value: "2fmCon", label: "Dúplex normal" },
        { value: "Duplex", label: "Duplex" },
        { value: "TwnhsE", label: "Casa Adosadas" },
        { value: "Twnhs", label: "Casas Adosadas" },
      ],
      q24: [
        { value: "2Story", label: "Dos Pisos" },
        { value: "1Story", label: "Un Piso" },
        { value: "1.5Fin", label: "Un Piso y Medio" },
        { value: "1.5Unf", label: "Un Piso y Medio sin Terminar" },
        { value: "SFoyer", label: "Split Foyer" },
        { value: "SLvl", label: "Split Level" },
        { value: "2.5Unf", label: "Dos Pisos y Medio sin Terminar" },
        { value: "2.5Fin", label: "Dos Pisos y Medio Terminada" },
      ],
      q25: [
        { value: "Gable", label: "A Dos Aguas" },
        { value: "Hip", label: "A Cuatro Aguas" },
        { value: "Gambrel", label: "A Dos Aguas Irregulares" },
        { value: "Mansard", label: "A Cuatro Aguas Irregulares" },
        { value: "Flat", label: "Plano" },
        { value: "Shed", label: "Suelo" },
      ],
      q26: [
        { value: "CompShg", label: "Tejas Compuestas" },
        { value: "WdShngl", label: "Tejas de Madera" },
        { value: "Metal", label: "Metal" },
        { value: "WdShake", label: "Tejas de Sacudidad de Madera" },
        { value: "Membran", label: "Membrana" },
        { value: "Tar&Grv", label: "Alquitranado y Grava" },
        { value: "Roll", label: "Tejas de Arcilla" },
        { value: "ClyTile", label: "Tejas de Cemento" },
      ],
      q27: [
        { value: "VinylSd", label: "Vinilo" },
        { value: "MetalSd", label: "Metal" },
        { value: "Wd Sdng", label: "Revestimineto de Madera" },
        { value: "HdBoard", label: "Tablero y Listón de Madera" },
        { value: "BrkFace", label: "Revestimineto de Ladrillo" },
        { value: "WdShing", label: "Revestimiento de Madera Shingles" },
        { value: "CemntBd", label: "Tablero y Listón de Cemento" },
        { value: "Plywood", label: "Chapas de Contrachapado" },
        { value: "AsbShng", label: "Revestimiento de Asbesto" },
        { value: "Stucco", label: "Estuco" },
        { value: "BrkComm", label: "Revestimiento de Ladrillo Común" },
        { value: "AsphShn", label: "Revestimiento de Asfalto" },
        { value: "Stone", label: "Piedra" },
        { value: "ImStucc", label: "Estuco Im" },
        { value: "CBlock", label: "Bloque de Cemento" },
      ],
      q28: [
        { value: "BrkFace", label: "Revestimiento de Ladrillo" },
        { value: "None", label: "Ninguno" },
        { value: "Stone", label: "Piedra" },
        { value: "BrkCmn", label: "Revestimiento de Ladrillo Común" },
        { value: "N/A", label: "No Aplica" },
      ],
      q29: [
        { value: "Gd", label: "Buena" },
        { value: "TA", label: "Promedio" },
        { value: "Ex", label: "Excelente" },
        { value: "Fa", label: "Justo" },
      ],
      q30: [
        { value: "Gd", label: "Buena" },
        { value: "TA", label: "Promedio" },
        { value: "Ex", label: "Excelente" },
        { value: "N/A", label: "No Aplica" },
        { value: "Fa", label: "Justo" },
      ],
      q31: [
        { value: "No", label: "No" },
        { value: "Gd", label: "Buena" },
        { value: "Mn", label: "Media" },
        { value: "Av", label: "Aceptable" },
        { value: "N/A", label: "No Aplica" },
      ],
      q32: [
        { value: "GLQ", label: "Calidad Buena - Terminado" },
        { value: "ALQ", label: "Calidad Promedio - Terminado" },
        { value: "Unf", label: "Sin Terminar" },
        { value: "Rec", label: "Calidad Buena - Sin Terminar" },
        { value: "BLQ", label: "Calidad Media - Terminado" },
        { value: "N/A", label: "No Aplica" },
        { value: "LwQ", label: "Calidad Baja - Terminado" },
      ],
      q33: [
        { value: "GasA", label: "Aire Forzado" },
        { value: "GasW", label: "Agua Caliente" },
        { value: "Grav", label: "Grava" },
        { value: "Wall", label: "Pared" },
        { value: "OhtW", label: "Otro Calentador de Agua" },
        { value: "Floor", label: "Piso" },
      ],
      q34: [
        { value: "Ex", label: "Excelente" },
        { value: "Gd", label: "Buena" },
        { value: "TA", label: "Promedio" },
        { value: "Fa", label: "Justo" },
        { value: "Po", label: "Pobre" },
      ],
      q35: [
        { value: "Y", label: "Sí" },
        { value: "N", label: "No" },
      ],
      q36: [
        { value: "Gd", label: "Buena" },
        { value: "TA", label: "Promedio" },
        { value: "Ex", label: "Excelente" },
        { value: "Fa", label: "Justo" },
      ],
      q37: [
        { value: "N/A", label: "No Aplicable" },
        { value: "TA", label: "Promedio" },
        { value: "Gd", label: "Buena" },
        { value: "Fa", label: "Justo" },
        { value: "Ex", label: "Excelente" },
        { value: "Po", label: "Pobre" },
      ],
      q38: [
        { value: "TA", label: "Promedio" },
        { value: "Fa", label: "Justo" },
        { value: "N/A", label: "No Aplica" },
        { value: "Gd", label: "Buena" },
        { value: "Po", label: "Pobre" },
        { value: "Ex", label: "Excelente" },
      ],
      q39: [
        { value: "N/A", label: "No Aplicable" },
        { value: "Ex", label: "Excelente" },
        { value: "Fa", label: "Justo" },
        { value: "Gd", label: "Buena" },
      ],
      q40: [
        { value: "Normal", label: "Normal" },
        { value: "Abnorml", label: "Anormal" },
        { value: "Partial", label: "Parcial" },
        { value: "AdjLand", label: "Ajuste de Terreno" },
        { value: "Alloca", label: "Asignación" },
        { value: "Family", label: "Familiar" },
      ],
  };


  const handleNextQuestion = () => {
    const currentQuestionKey = `answer${currentQuestion + 1}`;
    const currentAnswer = answers[currentQuestionKey];
  
    if (currentAnswer || typeof currentAnswer === "number") {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsFinished(true);
      }
    } else {
      alert("Por favor, responde la pregunta antes de continuar.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  
    // Verificar si la pregunta actual no tiene opciones y validar que el valor sea numérico
    const currentQuestionKey = `answer${currentQuestion + 1}`;
    const isNumericQuestion = !options[`q${currentQuestion + 1}`];
    
    if (isNumericQuestion && isNaN(value)) {
      alert("Esta pregunta debe ser respondida con un valor numérico.");
    }
  }

  const handleEditAnswer = (questionIndex) => {
    setEditingQuestionIndex(questionIndex);
  };

  const renderQuestions = () => {
    const questions = [
      "1 Calificación general de la vivienda (OverallQual)",
      "2 Año de construcción (YearBuilt)",
      "3 Año de remodelación (YearRemodAdd)",
      "4 Área de revestimiento de mampostería (MasVnrArea)",
      "5 Área terminada del sótano (BsmtFinSF1)",
      "6 Área total del sótano (TotalBsmtSF)",
      "7 Área del primer piso (1stFlrSF)",
      "8 Área habitable sobre el nivel del suelo (GrLivArea)",
      "9 Baños completos (FullBath)",
      "10 Medio baño (HalfBath)",
      "11 Habitaciones totales por encima del nivel del suelo (TotRmsAbvGrd)",
      "12 Chimeneas (Fireplaces)",
      "13 Año de construcción del garaje (GarageYrBlt)",
      "14 Capacidad del garaje para autos (GarageCars)",
      "15 Área del garaje (GarageArea)",
      "16 Área de cubierta de madera (WoodDeckSF)",
      "17 Área de porche abierto (OpenPorchSF)",
      "18 Zonificación de la propiedad (MSZoning)",
      "19 Configuración del lote (LotConfig)",
      "20 Vecindario (Neighborhood)",
      "21 Condición de la ubicación principal (Condition1)",
      "22 Condición de la ubicación secundaria (Condition2)",
      "23 Tipo de construcción (BldgType)",
      "24 Estilo de la vivienda (HouseStyle)",
      "25 Estilo del techo (RoofStyle)",
      "26 Material del techo (RoofMatl)",
      "27 Material exterior principal (Exterior1st)",
      "28 Tipo de revestimiento de mampostería (MasVnrType)",
      "29 Calidad exterior (ExterQual)",
      "30 Calificación del sótano (BsmtQual)",
      "31 Exposición del sótano (BsmtExposure)",
      "32 Tipo de acabado del sótano (BsmtFinType1)",
      "33 Sistema de calefacción (Heating)",
      "34 Calidad de calefacción y aire acondicionado (HeatingQC)",
      "35 ¿Tiene aire acondicionado central? (CentralAir)",
      "36 Calidad de la cocina (KitchenQual)",
      "37 Calidad de la chimenea (FireplaceQu)",
      "38 Condición del garaje (GarageCond)",
      "39 Calidad de la piscina (PoolQC)",
      "40 Condición de venta (SaleCondition)",
    ];
    const currentQuestionText = questions[currentQuestion];

    return (
        <div className="questions">
        <CSSTransition key={currentQuestion} classNames="fade" timeout={500}>
          <div className="card">
            <div className="card-content">
              <label className="fs-field-label fs-anim-upper">
                {currentQuestionText}
              </label>
              {options[`q${currentQuestion + 1}`] ? ( // Verificar si hay opciones para la pregunta actual
                <div className="options">
                {options[`q${currentQuestion + 1}`].map((option) => (
                  <label className="option" key={option.value}>
                    <input
                      id={`q${currentQuestion + 1}-${option.value}`}
                      name={`answer${currentQuestion + 1}`}
                      type="radio"
                      value={option.value}
                      onChange={handleInputChange}
                      required
                    />
                    {option.label}
                  </label>
                ))}
              </div>
              ) : ( // Si no hay opciones, permitir entrada de texto
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
      </div>
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
                <button onClick={() => setEditingQuestionIndex(null)}>
                  Guardar
                </button>
              ) : (
                <button onClick={() => handleEditAnswer(key)}>
                  Editar respuesta
                </button>
              )}
            </li>
          ))}
        </ul>
        <button onClick={enviarRespuestas}>Enviar Respuestas</button>
      </div>
    );
  };

  const enviarRespuestas = () => {
    //logica del bankend
    console.log("Respuestas enviadas a la base de datos:", answers);
  };

  return (
    <div className="formulario">
      <div className="container-full">
        <div className="fs-form-wrap" id="fs-form-wrap">
          <form
            id="myform"
            className="fs-form fs-form-full"
            autoComplete="off"
            onSubmit={(e) => e.preventDefault()}
          >
            <ol className="fs-fields">
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${(currentQuestion / totalQuestions) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="question-counter">
                Pregunta {currentQuestion + 1} de {totalQuestions}
              </div>
              <TransitionGroup>
                {isFinished ? renderSummary() : renderQuestions()}
              </TransitionGroup>
            </ol>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
