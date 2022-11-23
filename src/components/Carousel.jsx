import React, { useEffect, useState, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import '../styles/Carousel.css'

let PAGE_WIDTH;

if (window.screen.width >= 1800) {
    PAGE_WIDTH = window.screen.width / 4 - 70
}
if (window.screen.width >= 1400 && window.screen.width <= 1800) {
    PAGE_WIDTH = window.screen.width / 3 - 70
}
if (window.screen.width >= 730 && window.screen.width <= 1400) {
    PAGE_WIDTH = window.screen.width / 2 - 70
}
if (window.screen.width <= 730) {
    PAGE_WIDTH = window.screen.width - 70
}


const Carousel = ({children}) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        // console.log(`handleLeftArrowClick`)
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH
            // console.log(newOffset)
            return Math.min(newOffset, 0)
        })
    }

    const handleRightArrowClick = () => {
        // console.log(`handleRightArrowClick`)
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            // console.log(newOffset, maxOffset)
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`
                    },
                })
            })
        )
    }, [])

    

    return (
        <div className="main-container">
            <FaChevronLeft className="arrow" onClick={handleLeftArrowClick}/>
            <div className="window">
                <div
                    className="all-items-container"
                    style={{
                        transform: `translateX(${offset}px)`
                    }}
                >
                    {pages}
                </div>
            </div>
            <FaChevronRight className="arrow" onClick={handleRightArrowClick}/>
        </div>
    )
}

export default Carousel;