import Image from "next/image";
import Logo from "@/assets/images/Logo";
import MenuButton from "@/components/navBar/MenuButton";
import DropdownButton from "@/components/navBar/DropDownButton";
import Link from "next/link";
import NavIcons from "./NavIcons";
import ApplyButton from "@/components/navBar/ApplyButton";

export default function NavBar() {
  return (
  <div className="grid grid-cols-4 gap-4  bg-gray-800 opacity-80 h-128px px-87px sticky top-0">
  <div className=" p-4 ">
  <div className="flex justify-center ">
    <Link href={"/"}>
    <Logo></Logo>
    </Link>
   </div>
  </div>
  <div className="px-4 py-10 col-span-2 text-white">
    <div className="flex space-x-10 ">
      <MenuButton buttonLabel="Home" link="/"></MenuButton>
      <MenuButton buttonLabel="About" link="/"></MenuButton>
      <DropdownButton label="Courses"></DropdownButton>
      <MenuButton buttonLabel="Contact" link="/"></MenuButton>
    </div>
  </div>
  <div className="p-4 flex items-center space-x-16">
    <NavIcons></NavIcons>
    <ApplyButton label="Apply Now"></ApplyButton>
  </div>
</div>
  )
}
