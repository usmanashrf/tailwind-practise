'use client';
import { useState } from 'react';
import {RiArrowDropDownLine} from 'react-icons/ri'

const options = [
    { label: 'Option 1', href: '/option-1' },
    { label: 'Option 2', href: '/option-2' },
    { label: 'Option 3', href: '/option-3' },
  ];

const DropdownButton = ({label}:any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className='flex'>
        <div
          className="flex items-center hover:text-[#11AD8E] hover:underline font-semibold text-2xl"
          onClick={toggleDropdown}
        >
          {label}
          <RiArrowDropDownLine
            className="ml-6px h-7px w-12px mt-8px"
          />
        </div>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5`}
      >
        {options.map((option:any) => (
          <a
            href={option.href}
            className="block px-4 py-2 text-sm text-white-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            key={option.label}
          >
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropdownButton;