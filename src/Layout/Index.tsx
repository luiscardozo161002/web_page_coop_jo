//import Header from "@/components/Header/Header";
import HeaderLayout from "./Header";
import MainLayout from "./Main";
//import FooterLayout from "./Footer";

export default function IndexLayout() {
  return (
    <>
      {/*<Header />*/}
      <HeaderLayout />
      <MainLayout />
      {/*<FooterLayout />*/}
    </>
  );
}