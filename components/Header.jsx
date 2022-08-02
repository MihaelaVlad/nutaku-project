import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner container">
        <div className="logo">
          <picture>
            <img
              src="/images/logo/nutaku-logo.png"
              alt="Nutaku logo"
              title="Nutaku logo"
            ></img>
          </picture>
        </div>

        <div className="title">
          <h1>
            Golden week <span className="sale">sale</span>
          </h1>

          <h2>Gold deals for a limited time</h2>
        </div>

        <section>
          <Link href="https://www.nutaku.net/home/">
            <a className="button cta-button" title="Play for free">
              <span>Play for free</span>
              Limited time offers
            </a>
          </Link>
        </section>
      </div>
    </header>
  );
}
