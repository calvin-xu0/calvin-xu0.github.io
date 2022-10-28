import { Outlet } from "react-router-dom";
import Navigation from './nav';

export default function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}