function Agenda () {

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
            <tr className="past">
              <td>16.12.2023</td>
              <td>Itapoá-SC</td>
              <td>Farol do Pontal (Som que Surge) - 17h</td>              
            </tr>
            <tr>
              <td>22.12.2023</td>
              <td>Itapoá-SC</td>
              <td>Na Oca Bar</td>              
            </tr>
            <tr>
              <td>28.12.2023</td>
              <td>Itapoá-SC</td>
              <td>Abertura de Verão com Jim Bass e Maskavo</td>              
            </tr>
            <tr>
              <td>06.01.2024</td>
              <td>Itapoá-SC</td>
              <td>Projeto Verão</td>              
            </tr>
            <tr>
              <td>20.01.2024</td>
              <td>Itapoá-SC</td>
              <td>Na Oca Bar</td>
            </tr>
            <tr>
              <td>27.01.2024</td>
              <td>Itapoá-SC</td>
              <td>Miradouro da Barra (Som que Surge) as 17h</td>
            </tr>
            <tr>
              <td>12.02.2024</td>
              <td>Itapoá-SC</td>
              <td>Na Oca Bar</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
}

export default Agenda;