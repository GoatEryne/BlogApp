import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <section>
                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/">Posts</Link>
                    </div>
                    <div className="navLinks">
                        <Link to="add">Add</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}
export default Header