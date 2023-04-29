import Head from "next/head";
import Loader from "@/components/Loader";

import { useState } from "react";
import { Inter } from "next/font/google";

import styles from "@/styles/Home.module.scss";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setPrompt(e.currentTarget.prompt.value);
  };

  return (
    <>
      <Head>
        <title>Krijn-design</title>
        
        <meta name="description" content="Revolutionize your web design process with our AI-powered tool. Simply input a prompt, and instantly receive custom HTML & CSS code for unique, stunning designs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${loading ? "loading" : ""}`}>
        <section className={`${styles.intro}`}>
          <h1 className={`${styles.heading}`}>
            <span>Design websites faster.</span>
            <span>Design websites smarter.</span>
          </h1>
          <p className={`${styles.paragraph}`}>
            Transform your web design experience with a single prompt: unleash
            the power of AI to effortlessly generate bespoke HTML & CSS code for
            captivating, innovative designs that bring your visions to life.
          </p>
        </section>

        <form className={`${styles.form}`} onSubmit={handleSubmit}>
          <input
            className={`${styles.input}`}
            name="prompt"
            type="text"
            placeholder="Create a modern and visually appealing e-commerce website design for a sustainable fashion brand"
          ></input>
          <button className={`${styles.button}`} name="submit" type="submit">
            Make magic happen
          </button>
        </form>

        <figure className={`${styles.figure}`}>
          <blockquote
            className={`${styles.quote}`}
            cite="https://sjorsvanholst.nl"
          >
            <p>
              Krijn-design has completely transformed my design workflow. Within
              minutes, I was able to generate a stunning, unique website layout
              just by providing a simple prompt. It&apos;s a game-changer for
              both experienced designers and newcomers alike!
            </p>
          </blockquote>
          <figcaption className={`${styles.figcaption}`}>
            Sjors van Holst
          </figcaption>
        </figure>

        <footer className={`${styles.footer}`}>
          A <a href="#">Krijn .Inc</a> miracle
        </footer>

        {loading && <Loader></Loader>}
      </main>
    </>
  );
}
