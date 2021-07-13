import React from 'react';
import GitHubButton from 'react-github-btn';


function Header() {
    return (
        <div>
            <div className="App">
                <h1>
                    🦄 React Emoji Search 🦄
                </h1>
                <br />
                <h4>
                    A simple emoji search tool made with ReactJS.
                </h4>

                <GitHubButton href="https://github.com/NavidMansuri5155?tab=stars"
                    data-color-scheme="no-preference: light; light: light; dark: light;"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star BraydenTW/react-emoji-search on GitHub">Star
                </GitHubButton>

            </div>
        </div>

    )
}

export default Header;
