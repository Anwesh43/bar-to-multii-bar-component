import {useState, useEffect} from 'react'
import {divideScale, sinify} from './utils'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                setAnimated(true)
                var currScale = scale
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (Math.abs(currScale) > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
}

export const useStyle = (w, h, scale) => {
    const hSize = Math.min(w, h) / 5
    const wSize = Math.min(w, h) / 10
    const position = 'absolute'
    const sf = sinify(scale)
    const color = "#2196F3"
    const fixedColor = "#9E9E9E"
    const fx = w / 2
    const fy = h / 2
    const bars = 5
    return {
        getBarStyle(i) {
            const sfi = divideScale(scale, i, bars)
            const gap = hSize / bars
            const left = `${fx - hSize / 2 + i * gap}px`
            const top = `${fy - wSize * sfi}px`
            const width = `${gap}px`
            const height = `${wSize}px`
            const background = color
            return {position, left, top, width, height, background}
        },

        getFixedBar() {
            const width = `${hSize}px`
            const height = `${wSize}px`
            const background = fixedColor
            const left = `${fx - hSize / 2}px`
            const top = `${fy - wSize}px`
            return {position, left, top, width, height, background}
        },

        getDynamicBar() {
            const width = `${hSize * sf}px`
            const height = `${wSize}px`
            const background = color
            const left = `${fx - hSize / 2}px`
            const top = `${fy - wSize}px`
            return {position, left, top, background, width, height}
        }
    }
}
