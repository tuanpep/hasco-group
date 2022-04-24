import * as React from "react";
import { Apartment } from "../components/Apartment";
import { Contact } from "../components/Contact";
import { Highlights } from "../components/Hightlights";
import { HomeCarousel } from "../components/HomeCarousel";
import { Interior } from "../components/Interior";
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
      <Interior />
      <Contact />
    </>
  );
}
