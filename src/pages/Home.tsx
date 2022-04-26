import * as React from "react";
import { Apartment } from "../components/Apartment";
import { Contact } from "../components/Contact";
import { Details } from "../components/Details";
import { Highlights } from "../components/Hightlights";
import { HomeCarousel } from "../components/HomeCarousel";
import InteriorSection from "../components/InteriorSection";
import { Location } from "../components/Location";
import { Overview } from "../components/Overview";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <>
      <HomeCarousel />
      <Overview />
      <Location />
      <Highlights />
      <Apartment />
      <InteriorSection />
      <Contact />
      <Details />
    </>
  );
}
