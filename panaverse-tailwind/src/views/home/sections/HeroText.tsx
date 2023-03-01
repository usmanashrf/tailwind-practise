import ApplyButton from "@/components/navBar/ApplyButton";

export default function HeroText() {
  return (
 
<div className=" absolute leading-[58px] top-[239px] left-[183px] h-auto z-10 text-5xl font-black">
    <span className="text-white">Become</span> <br/><span className='text-[#11AD8E]'> Certified Web 3.0 </span> <span className="text-white"> and</span> <br/>
    <span className='text-[#11AD8E]'> Metaverse Developer</span>
    <div className='text-[24px] text-white mt-[32px] leading-[29px] font-normal w-[588px] h-[87px]'>Launch Your Dev Career With Web 3 and Metaverse Getting Ready for the Next Generation of the <br/> internet</div>
    <ApplyButton className="text-black" label="Join Now"></ApplyButton>
    </div> 

  )
}
