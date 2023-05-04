"use client";

import Head from "next/head";
import { Loader } from "@/components/Loader";
import { Embedded } from "@/components/Embedded";
import { FormEvent, useState } from "react";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(`/api/design?prompt=${prompt}`);
      const parsed = await response.json();

      setHtml(parsed.markup);
      setCss(parsed.styling);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Krijn-design</title>

        <meta
          name="description"
          content="Revolutionize your web design process with our AI-powered tool. Simply input a prompt, and instantly receive custom HTML & CSS code for unique, stunning designs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={loading ? "loading" : ""}>
        {!html && !css && (
          <section className={styles.intro}>
            <h1 className={styles.heading}>
              <span>Design websites faster.</span>
              <span>Design websites smarter.</span>
            </h1>
            <p className={styles.paragraph}>
              Transform your web design experience with a single prompt: unleash the power of AI to effortlessly
              generate bespoke HTML & CSS code for captivating, innovative designs that bring your visions to life.
            </p>
          </section>
        )}

        {!html && !css && (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              name="prompt"
              type="text"
              onChange={(e) => setPrompt(e.currentTarget.value)}
              placeholder="Create a modern and visually appealing e-commerce website design for a sustainable fashion brand"
            />
            <button className={styles.button} name="submit" type="submit">
              Make magic happen
            </button>
          </form>
        )}

        {!html && !css && (
          <figure className={styles.figure}>
            <blockquote className={styles.quote} cite="https://sjorsvanholst.nl">
              <p>
                Krijn-design has completely transformed my design workflow. Within minutes, I was able to generate a
                stunning, unique website layout just by providing a simple prompt. It&apos;s a game-changer for both
                experienced designers and newcomers alike!
              </p>
            </blockquote>
            <figcaption className={styles.figcaption}>Sjors van Holst</figcaption>
          </figure>
        )}

        {!html && !css && (
          <footer className={styles.footer}>
            A <a href="#">Krijn .Inc</a> miracle
          </footer>
        )}

        {loading && <Loader />}

        {html && css && <Embedded html={html} css={css} />}
      </main>
    </>
  );
}
