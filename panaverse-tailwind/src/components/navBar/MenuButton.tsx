import Link from "next/link";

export default function MenuButton({buttonLabel, link}:any) {
  return (
    <div><Link href={link}> <span  className="hover:text-[#11AD8E] hover:underline font-normal text-2xl"> {buttonLabel} </span></Link></div>
  )
}
