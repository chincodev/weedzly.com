import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const RightArrowSlider = ({className, to, onClick}) => (
    <button type="button" onClick={onClick} className={`btn-custom slider-trigger next-custom-button ${className}`} aria-label={to}>
       <MdKeyboardArrowRight />
    </button>
  )

export { RightArrowSlider }
