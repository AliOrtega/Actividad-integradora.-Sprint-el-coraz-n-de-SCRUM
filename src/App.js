
import './App.css';

const acuerdosconelclientedata = [
  { name: "1.1	Definir los objetivos del proyecto"},
  { name: "1.2	Definir el presupuesto de todo el proyecto"},
  { name: "1.3	Requisitos del cliente"},
  { name: "1.4	Cronograma"},
]

const interfazdata = [
  { name: "2.1	Gráficos y colores"},
  { name: "2.2	Menús y ventanas"},
  { name: "2.3	Interacciones"},
  { name: "2.4	Avatares"},
]

const uxuidata = [
  { name: "3.1	Que la pagina sea fácil de usar"},
  { name: "3.2	Intuitivo para los usuarios"},
  { name: "3.3	Personalizable"},
  { name: "3.4	Atractivo para los usuarios"},
]

const analisisinicialdelospuestosdetrabajodata = [
  { name: "4.1	Análisis de herramientas de trabajo"},
  { name: "4.2	Análisis de factores psicosociales"},
  { name: "4.3	Análisis de factores ambientales"},
  { name: "4.4	Análisis de organización de tiempos"},
]

const pruebasdata = [
  { name: "5.1	Mejoras"},
  { name: "5.2	Pruebas finales"},
  { name: "5.3	Iteraciones"},
  { name: "5.4	Mejoras"},
]

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>ID</th>
          <th>Requerimiento/Tarea</th>
          <th>Responsable</th>
          <th>Estado</th>
          <th>Estimación de esfuerzo</th>
        </tr>
        <tr>
          <td>1. Acuerdos con el cliente</td>
          {
            acuerdosconelclientedata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
          <td>Alicia Ortega</td>
          <td>Terminado</td>
          <td>8 horas</td>
        </tr>
        <tr>
          <td>2. Interfaz</td>
          {
            interfazdata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
          <td>Julia Rodríguez</td>
          <td>En curso</td>
          <td>80 horas</td>
        </tr>
        <tr>
          <td>3. UX/UI</td>
          {
            uxuidata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
          <td>José Rentería</td>
          <td>En curso</td>
          <td>60 horas</td>
        </tr>
        <tr>
          <td>4. Análisis inicial de los puestos de trabajo</td>
          {
            analisisinicialdelospuestosdetrabajodata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
          <td>Carlos Marques</td>
          <td>En curso</td>
          <td>40 horas</td>
        </tr>
        <tr>
          <td>5. Pruebas</td>
          {
            pruebasdata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
          <td>Lucia Suarez</td>
          <td>Pendiente</td>
          <td>20 horas</td>
        </tr>
      </table>
    </div>
  );
}

export default App;

