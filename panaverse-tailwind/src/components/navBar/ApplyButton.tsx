import React from 'react'

export default function ApplyButton({label}:any) {
  return (
    <div>
        <button className='bg-[#11AD8E] px-6 py-3 rounded-md font-medium text-lg 
        hover:text-[#11AD8E] hover:bg-transparent border border-[#11AD8E] hover:border-[#11AD8E]'>
            {label}
        </button>
    </div>
  )
}
