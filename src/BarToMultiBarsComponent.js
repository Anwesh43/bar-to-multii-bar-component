import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'

const BarToMultiBarsComponent = (props) => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.02 / 5, 20)
    return <div>
        <BarToMultiBarsPresentational w = {w} h = {h} scale = {scale} onClick = {start}/>
    </div>
}

export default BarToMultiBarsComponent
