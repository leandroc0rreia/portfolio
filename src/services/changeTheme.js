import { useEffect, useState } from 'react'
import $ from 'jquery'

const userTheme = localStorage.getItem("theme")


export default function useDarkMode() {
    
    const [theme, setTheme] = useState(userTheme);
    const colorTheme = (theme === "dark") ? ("light") : ("dark")

    useEffect(() => {
        $('html').removeClass(colorTheme)
        $('html').addClass(theme)
    }, [theme, colorTheme])
    
    return [colorTheme, setTheme]
}
