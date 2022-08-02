import Link from 'next/link';

export default function GamesPreview() {
  return (
    <section className="games-preview">
      <div className="games-preview-inner">
        <div className="card-game-container">
          <article className="card-game">
            <Link href="https://www.nutaku.net/games/kamihime-r/">
              <a>
                <img
                  src="/images/games/kamihime-w320.jpg"
                  alt="Kamihime Project"
                  title="Kamihime Project"
                  className="image-w320"
                ></img>

                <img
                  src="/images/games/kamihime.jpg"
                  alt="Kamihime Project"
                  title="Kamihime Project"
                  className="image-w768"
                ></img>
              </a>
            </Link>

            <header className="card-game-header">
              <Link href="https://www.nutaku.net/games/kamihime-r/">
                <a>Kamihime Project</a>
              </Link>

              <span>Elaborate Turn-Based Strategy</span>
            </header>

            <footer className="card-game-footer">
              <Link href="https://www.nutaku.net/games/kamihime-r/">
                <a className="button-small" title="Play free now!">
                  Play free now!
                </a>
              </Link>
            </footer>
          </article>
        </div>

        <div className="card-game-container">
          <article className="card-game">
            <Link href="https://www.nutaku.net/games/crystal-maidens/">
              <a>
                <img
                  src="/images/games/crystal-maidens-w320.jpg"
                  alt="Crystal Maidens Project"
                  title="Crystal Maidens Project"
                  className="image-w320"
                ></img>

                <img
                  src="/images/games/crystal-maidens.jpg"
                  alt="Crystal Maidens Project"
                  title="Crystal Maidens Project"
                  className="image-w768"
                ></img>
              </a>
            </Link>

            <header className="card-game-header">
              <Link href="https://www.nutaku.net/games/crystal-maidens/">
                <a>Crystal Maidens</a>
              </Link>

              <span>Thrilling Real-Time Action</span>
            </header>

            <footer className="card-game-footer">
              <Link href="https://www.nutaku.net/games/crystal-maidens/">
                <a className="button-small" title="Play free now!">
                  Play free now!
                </a>
              </Link>
            </footer>
          </article>
        </div>

        <div className="card-game-container">
          <article className="card-game">
            <Link href="https://www.nutaku.net/games/pocket-waifu/">
              <a>
                <img
                  src="/images/games/pocket-waifu-w320.jpg"
                  alt="Pocket Waifu"
                  title="Pocket Waifu"
                  className="image-w320"
                ></img>

                <img
                  src="/images/games/pocket-waifu.jpg"
                  alt="Pocket Waifu"
                  title="Pocket Waifu"
                  className="image-w768"
                ></img>
              </a>
            </Link>

            <header className="card-game-header">
              <Link href="https://www.nutaku.net/games/pocket-waifu/">
                <a>Pocket Waifu</a>
              </Link>

              <span>Sexy Dating Sim</span>
            </header>

            <footer className="card-game-footer">
              <Link href="https://www.nutaku.net/games/pocket-waifu/">
                <a className="button-small" title="Play free now!">
                  Play free now!
                </a>
              </Link>
            </footer>
          </article>
        </div>

        <div className="card-game-container">
          <article className="card-game">
            <Link href="https://www.nutaku.net/games/attack-on-moe-h/">
              <a>
                <img
                  src="/images/games/attack-on-moe-w320.jpg"
                  alt="Attack on Moe H"
                  title="Attack on Moe H"
                  className="image-w320"
                ></img>

                <img
                  src="/images/games/attack-on-moe.jpg"
                  alt="Attack on Moe H"
                  title="Attack on Moe H"
                  className="image-w768"
                ></img>
              </a>
            </Link>

            <header className="card-game-header">
              <Link href="https://www.nutaku.net/games/attack-on-moe-h/">
                <a>Attack on moe h</a>
              </Link>

              <span>One-Handed Action Gam</span>
            </header>

            <footer className="card-game-footer">
              <Link href="https://www.nutaku.net/games/attack-on-moe-h/">
                <a className="button-small" title="Play free now!">
                  Play free now!
                </a>
              </Link>
            </footer>
          </article>
        </div>
      </div>

      <footer className="games-preview-footer">
        <Link href="https://www.nutaku.net/home/">
          <a className="button cta-button" title="More free games">
            <span>More free games</span>
          </a>
        </Link>
      </footer>
    </section>
  );
}
