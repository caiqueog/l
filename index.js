import Head from 'next/head';
import DiscordProfile from '../components/DiscordProfile';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const audio = document.getElementById('audio');
    if (audio) {
      audio.volume = 1;
      audio.currentTime = 30;
    }
  }, []);

  return (
    <div style={{ background: 'black', color: 'white', display: 'flex', flexDirection: 'column', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Head>
        <title>obscure</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="https://cdn.discordapp.com/emojis/1300596094761304116.png?v=1&size=48&quality=lossless" type="image/png" />
        <meta property="og:image" content="https://cdn.discordapp.com/emojis/1216831063574183996.png?v=1&size=48&quality=lossless" />
      </Head>

      <h1 id="text" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 'bold' }}>Bem-vindo!</h1>
      <h2 id="info" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 'semibold' }}>Informações aqui</h2>

      <button
        id="button"
        onClick={() => document.getElementById('text').style.display = 'block'}
        style={{ background: 'none', color: 'white', fontSize: '1.2em', border: '2px solid white', padding: '10px' }}
      >
        Clique aqui!
      </button>

      {/* Audio */}
      <audio loop preload="auto" id="audio">
        <source src="/src/audio/outlier.mp3" type="audio/mpeg" />
        Seu navegador não suporta o áudio.
      </audio>

      {/* Overlay */}
      <input type="checkbox" id="overlay-toggle" style={{ display: 'none' }} />
      <div className="overlay fullscreen">
        <label htmlFor="overlay-toggle" onClick={() => document.getElementById('audio').play()}>
          <span className="overlayno-hover hover" style={{ fontFamily: 'monospace', fontSize: '0.6em' }}>hylex me desbane</span>
          <span className="overlayhover hover" style={{ fontFamily: 'monospace', fontSize: '0.6em' }}>hylex me desbane</span>
        </label>
      </div>

      {/* Background video */}
      <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url(https://cdn.discordapp.com/attachments/959439874627346462/1242239321961136230/videoplayback_1.mp4?ex=67347c46&is=67332ac6&hm=60ac9619e6fd5aa5d4aa6580e9aa0389a539150734860a4375672ea45bc5052c&)', minHeight: '50vh', marginTop: '50px' }}>
        <video autoplay loop muted>
          <source src="/src/video/video.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>

      {/* Discord Profile */}
      <DiscordProfile />
    </div>
  );
}
