import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className="problem">
            <a href="https://react-icons.github.io/react-icons/search?q=face" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://react-icons.github.io/react-icons/search?q=face" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
            <a href="https://react-icons.github.io/react-icons/search?q=face" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
        </div>
    )
}

export default HeaderSocials
