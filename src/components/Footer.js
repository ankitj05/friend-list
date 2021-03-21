import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <div className="justify-center items-center max-w-max m-auto mt-10">
            <a target="_blank" href="https://github.com/ankitj05/friend-list">
                <FaGithub size="2em" color="black" />
            </a>
        </div>
    )
}

export default Footer
