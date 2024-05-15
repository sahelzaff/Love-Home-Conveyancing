import React, {useState} from 'react'

const accordian = () => {
    const {AccordianOpen, setAccordianOpen} = useState(false)

  return (
    <div className='py-2'>
        <button onClick={()=> setAccordianOpen (!AccordianOpen)} className='flex justify-between w-full'>
            <span>Title</span>
            {AccordianOpen? <span>-</span> :<span>+</span>}
            <span>+</span>
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${AccordianOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div >This is the answer</div>
        </div>
    </div>
  )
}

export default accordian