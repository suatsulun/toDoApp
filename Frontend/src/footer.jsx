import React from "react"


const Footer = () => {

    let currentYear = new Date().getFullYear()

return <footer className="mt-auto flex justify-center items-center p-1 pointer-events-none">
    <p className=" text-gray-600 dark:text-white">Copyright © {currentYear}</p>
</footer>
}

export default Footer
