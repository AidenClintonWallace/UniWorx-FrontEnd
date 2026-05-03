import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import "@/index.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center-safe">
        <NavigationMenu className="fixed rounded-full bg-gray-100 shadow-lg">
          <NavigationMenuList className="p-4">

            <div className="flex flex-row text-3xl ">
            <NavigationMenuItem >
              <Link to="/">
                <NavigationMenuLink className=" p-4 text-3xl hover:animate-pulse">Go to Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/Dashboard">
                <NavigationMenuLink className=" p-4 text-3xl hover:animate-pulse">Dashboard</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/Listings">
                <NavigationMenuLink className=" p-4 text-3xl hover:animate-pulse">Listings</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/Login">
                <NavigationMenuLink className=" p-4 text-3xl hover:animate-pulse">Login</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            </div>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}