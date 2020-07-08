import React from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const LeftArrowSlider =  ({className, to, onClick}) => (
    <button type="button" onClick={onClick} className={`btn-custom slider-trigger prev-custom-button ${className}`} aria-label={to}>
       <MdKeyboardArrowLeft />
    </button>
)

export { LeftArrowSlider }