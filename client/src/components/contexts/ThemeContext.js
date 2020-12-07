import React, { createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends React.Component {

    state = {
        isLightTheme: true,
        light: { color: 'red', ui: 'grey', ux: 'red' },
        dark: { color: 'black', ui: 'orange', ux: 'blue' }
    }

    render() {
        return (
            <ThemeContext.Provider
            value={{...this.state}}
            >
                {this.props.children}
            </ThemeContext.Provider>

        )
    }

}