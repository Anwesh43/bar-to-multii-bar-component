import React from 'react'
import {useStyle} from './hooks'

const CurrDiv = ({style}) => {
    return <div style = {style}>
    </div>
}

const BarToMultiBarsPresentational = ({w, h, scale, onClick}) => {
    const  {getBarStyle, getFixedBar, getDynamicBar} = useStyle(w, h, scale)
    return <div onClick = {onClick}>
        <CurrDiv key = "fixed_bar" style = {getFixedBar()}/>
        <CurrDiv key = "dynamic_bar" style = {getDynamicBar()}/>
        {[0, 1, 2, 3, 4].map(i => <CurrDiv key = `bar_${i}` style = {getBarStyle(i)} />)}
    </div>
}
