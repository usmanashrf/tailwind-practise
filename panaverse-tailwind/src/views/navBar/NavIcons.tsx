import BellIcon from "@/assets/icons/BellIcon";
import MoonIcon from "@/assets/icons/MoonIcon";
import Link from "next/link";
import {CiBellOn} from 'react-icons/ci';
import {HiOutlineMoon} from 'react-icons/hi';

export default function NavIcons() {
  return (
    <div className="flex space-x-4">
       <Link href={"/"} className="hover:text-[#11AD8E] text-white">
        <CiBellOn className="text-3xl font-medium"></CiBellOn>
         {/* <BellIcon  ></BellIcon> */}
         </Link> 
        <p className="text-white -mt-1 font-normal text-2xl">|</p>
        {/* <MoonIcon></MoonIcon> */}
        <Link href={"/"} className="hover:text-[#11AD8E] text-white">
        <HiOutlineMoon  className="text-3xl "></HiOutlineMoon>
        </Link>
    </div>
    
  )
}
