import Link from 'next/link';

export default function SignUp() {
  return (
    <section className="sign-up container">
      <div
        className="modal fade"
        id="signUp"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="week-offer">
              <picture>
                <source
                  media="(min-width: 769px)"
                  srcSet="/images/golden-week.png"
                  alt="Golden Week"
                  className="image-offer"
                ></source>

                <img
                  src="/images/golden-week-w320.png"
                  alt="Golden Week"
                  className="image-offer"
                ></img>
              </picture>
            </div>

            <header className="modal-header">
              <h1 className="modal-title sale">Sale</h1>

              <h1 className="modal-title sale-on">On now!</h1>
              <div>
                <img
                  src="/images/logo/nutaku-logo.png"
                  alt="Nutaku"
                  title="Nutaku"
                ></img>
              </div>

              <h2 className="modal-subtitle free-games">
                Over 100 games free to play
              </h2>

              <h2 className="modal-subtitle offers">Limited time offers!</h2>
            </header>

            <section className="modal-body">
              <form method="POST">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    className="input-style"
                    required
                  ></input>

                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="input-style"
                    required
                  ></input>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="input-style"
                    required
                  ></input>
                </div>

                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  title="Start playing"
                  className="button play-button"
                >
                  Start playing
                </button>

                <div className="account">
                  <span>Already have an account?</span>
                  <Link href="https://www.nutaku.net/home/">
                    <a title="Log In">Log in</a>
                  </Link>
                </div>

                <div className="news-terms">
                  <div>
                    <input
                      type="checkbox"
                      name="newsletter"
                      id="newsletter"
                    ></input>
                    <label htmlFor="newsletter">
                      Sign up for the newsletter
                    </label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      defaultChecked
                    ></input>
                    <label htmlFor="terms">
                      I accept the terms of use and privacy policy
                    </label>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
