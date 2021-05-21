import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/me.jpg" alt="Image" width={300} height={300} />
      </div>
      <h1>Hi, I'm Jyothi Sumer Goud M</h1>
      <p>Full stack web developer. Bloger, Student, Philanthropist</p>
    </section>
  );
}

export default Hero;
