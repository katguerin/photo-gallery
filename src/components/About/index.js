import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Page</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <p>
      Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
      ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
      quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
      imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
      diam, sit amet facilisis lectus blandit at.
    </p>
    </section>
  );
}

export default About;