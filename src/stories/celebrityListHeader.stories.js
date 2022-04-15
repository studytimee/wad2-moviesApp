
import React from "react";
import CelebrityListHeader from "../components/headerCelebrityList";

export default {
  title: "Celebrity Page/Header",
  component: CelebrityListHeader,
};

export const Basic = () => <CelebrityListHeader title={'Celebrities'} />;

Basic.storyName = "Default";