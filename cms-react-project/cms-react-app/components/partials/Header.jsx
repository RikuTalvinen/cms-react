import React from "react";
import headerStyles from "../../styles/header.module.css";

function Header({
    brandColor = {
        opacity: 100,
        color: '#FF7A59',
    },
    text = 'Hello from React!',
}) {
    const navLinks = [
        {
            href: '/hello-world-home',
            label: 'Home',
        },
        {
            href: '/hello-world-todo',
            label: 'Todo',
        },
        {
            href: '/hello-world-cars',
            label: 'Cars',
        },
    ];

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.header__inner}>
                <div className={headerStyles.header__branding}>
                    <span>{text}</span>
                </div>
                <div className={headerStyles.header__nav}>
                    {navLinks.map((navLink) => (
                        <a
                            style={{
                                color: brandColor.color,
                                borderColor: brandColor.color,
                                opacity: brandColor.opacity / 100,
                            }}
                            key={navLink.label}
                            href={navLink.href}
                        >
                            {navLink.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header;
