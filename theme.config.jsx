import React from "react";

// Remove type annotations by simply declaring the constant without ": any" or ": DocsThemeConfig"
const gripoLogo =
    "https://www.gripo.io/_next/static/media/gripo_logo_new.de74339b.png";

const config = {
    banner: {
        key: "1.0-release",
        content: (
            <a href="https://gripo.io/" target="_blank" rel="noopener noreferrer">
                🎉 Gripo Beta-1.0 release
            </a>
        ),
    },
    logo: <img src={gripoLogo} alt="Gripo Website" width="150" height="50" />,
    themeSwitch: {
        useOptions() {
            return {
                light: "Light",
                dark: "Dark",
                system: "System",
            };
        },
    },
    chat: {
        link: "https://twitter.com/Gripo_io",
        icon: (
            <svg width="24" height="24" viewBox="0 0 248 204">
                <path
                    fill="currentColor"
                    d="M221.95 51.29c.15 2.17.15 4.34.15 6.53...z"
                />
            </svg>
        ),
    },
    footer: {
        content: (
            <span style={{ float: "right" }}>
        Copyright © {new Date().getFullYear()}{" "}
                <a href="https://gripo.io" target="_blank" rel="noopener noreferrer">
          GRIPO.IO
        </a>{" "}
                All Rights Reserved
      </span>
        ),
    },
};

export default config;