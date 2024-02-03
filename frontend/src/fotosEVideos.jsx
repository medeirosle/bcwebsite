function FotosEVideos() {
    return (
        <section id="fotosEvideos" className="fotosEvideosSection">        
        <h1>Fotos & Vídeos</h1>
        <iframe
          className="ytVideo"
          src="https://www.youtube.com/embed/5N6ffmBLdgU"
          title="Bruxaria Caiçara - Mano Velho"          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"          
        ></iframe>
        <br />
        <iframe
          className="ytVideo"
          src="https://www.youtube.com/embed/3fWkr4M1H3U"
          title="Bruxaria Caiçara - O Farol de Itapoá"          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"          
        ></iframe>        
      </section>
    )
}

export default FotosEVideos;