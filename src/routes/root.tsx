import { Navbar } from "../components/navbar";
import { CopyRight } from "../components/copyright";
import { Outlet } from "react-router-dom";

export function RootRoute() {
  return (
    <>
      <Navbar />

      <Outlet />

      <CopyRight />
    </>
  );
}
