import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="container__textContainer">
        <h1 className="hero__headline">Weeb Wartalap</h1>
        <h2 className="hero__sub_headline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          cum tristique nec elit, consectetur tempor interdum nulla. Ac egestas
          rhoncus tortor proin ultrices.
        </h2>
      </div>
      <div className="container__socials">
        <div>
          <Image
            src="/spotify.png"
            alt="Spotify"
            width={170}
            height={50}
          ></Image>
        </div>
        <div>
          <Image
            src="/gpodcast.png"
            alt="Spotify"
            width={200}
            height={50}
          ></Image>
        </div>
        <div>
          <Image
            src="/youtube.png"
            alt="Spotify"
            width={210}
            height={50}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
