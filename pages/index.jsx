import Head from 'next/head';
import Footer from '../components/Footer';
import GamesPreview from '../components/GamesPreview';
import Header from '../components/Header';
import SignUp from '../components/SignUp';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Golden Sale Week</title>
      </Head>

      <div>
        <Header></Header>

        <main>
          <GamesPreview></GamesPreview>

          <SignUp></SignUp>
        </main>

        <Footer></Footer>

        <div className="form-signup">
          <a
            data-bs-toggle="modal"
            data-bs-target="#signUp"
            data-backdrop="static"
            data-keyboard="false"
          ></a>
        </div>
      </div>
    </div>
  );
}
