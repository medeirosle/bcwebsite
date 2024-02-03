function Musica() {
  return (
    <section id="musica" className="musicaSection">
      <h1>Música</h1>
      <p>
      <iframe
        style={{ borderRadius: 12 }}
        src="https://open.spotify.com/embed/playlist/76EJgRvRWCc5AUJx3oyHaq?utm_source=generator&theme=0"
        className="spotifyPlayer"
        height={380}
        frameBorder={0}
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      </p>
    </section>
  );
}

export default Musica;
