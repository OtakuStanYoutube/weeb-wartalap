import type { NextPage } from "next";
import Nav from "src/components/Nav";
import Hero from "src/Sections/Hero";
import LatestEp from "src/Sections/LatestEp";
import Host from "src/Sections/Host";

const Home: NextPage = () => {
  // const scroll_test: any = (e: any) => {
  //   console.log(e);
  // };
  return (
    <div>
      <div className="container">
        <Nav />
        <Hero />
        <LatestEp />
        <Host />
      </div>
    </div>
  );
};

export default Home;
