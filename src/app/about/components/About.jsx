import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 px-5 lg:px-96 text-primary">
      <h1 className="text-[30px] lg:text-[48px] lg:leading-[48px] leading-[36px] uppercase">
        Le Salama Restaurant
      </h1>
      <p className="text-[14px] leading-[24.5px]">
        {`Nestled in the heart of the mythical Djema el Fna square, Le Salama is a true refuge after an immersion in the colorful and effervescent souks.`}
        <br />
        <br />
        {`Here, you can enjoy a cocktail in peace and quiet, while savoring Moroccan culinary treasures.`}

        {
          "On the menu are the must-tries: melting shoulder of lamb, delicious Tangia, or delicate Kemias, all prepared with a finesse and savoir-faire that sublimates traditional flavors."
        }
        <br />
        <br />
        {
          "The ambiance is not to be outdone: every evening, an oriental dance show adds a touch of magic to the atmosphere."
        }
        <br />
        <br />
        {`But this place doesn't reveal all its secrets at first glance... There are secrets waiting to be discovered, for those who dare to explore beyond the obvious. Come and let yourself be carried away by the mysterious soul of this enchanting place.`}
      </p>
    </div>
  );
};

export default About;
