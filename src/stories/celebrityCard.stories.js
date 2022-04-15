import React from "react";
import CelebrityCard from "../components/celebrityCard";
import SampleData from "./celebritySampleData";

export default {
  title: "Celebrity Page/CelebrityCard",
  component: CelebrityCard,
};

export const Basic = () => {
  return (
    <CelebrityCard
      celebrity={SampleData}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleData, profile_path: undefined };
  return (
    <CelebrityCard
      celebrity={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";