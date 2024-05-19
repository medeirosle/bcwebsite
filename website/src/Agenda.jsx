import { useEffect, useState } from "react";
import { getAgenda } from './App.API';

function Agenda () {

  const [agenda, setAgenda] = useState([])
  
  useEffect(() => {
    getAgenda().then(response => {
       setAgenda(response)
    })  
  }, [])

    return (
        <section id="agenda" className="agendaSection">
        <h1>Agenda</h1>
        <table>
          <thead>
            <tr>
              <td>Data / Hora</td>
              <td>Cidade</td>
              <td>Local</td>              
            </tr>
          </thead>
          <tbody>
            { agenda.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{new Date(item.dateTime).toLocaleDateString()}</td>
                  <td>{item.place}</td>
                  <td>{item.title} - {item.comments}</td>              
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    )
}

export default Agenda;