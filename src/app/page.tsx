import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <div>
          <h1> Alexis Polak </h1>
          <h2> Software Engineer</h2>
        </div>
        <Image
          src="/profile.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </header>
      <nav>
        <Link href="https://www.linkedin.com/in/alexispolak/" passHref={true} target="_blank"> LinkedIn </Link>
        <Link href="https://seldoonstudio.com/" passHref={true} target="_blank"> Games </Link>
        <Link href="https://github.com/alepolak" passHref={true} target="_blank"> Github </Link>
      </nav>
      <article>
        <p>
          Hi there! My name is Alexis Polak and I'm an Argentinian Software Engineer living in New York and currently working at <Link href="https://mural.co" passHref={true} target="_blank">Mural</Link>. Throughout my career I had the opportunity to work with different technologies at different companies, for example at Mural I started working with C# and UWP but now I'm on the mobile team using Typescript and React.
        </p>
        <p>
          On my spare time I really enjoy cooking and eating, specially ramen. I'm into minimalism, AI, I love making and playing videogames and learn about techology. You can find some of my projects on the project section Github or in my game related website called Seldoon Studios.
        </p>
      </article>
    </main>
  );
}
