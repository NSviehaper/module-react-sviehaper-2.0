import React, {useState} from 'react';

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline} from '@material-ui/core';
import {Header} from "./Components/Header/Header";
import { ThemeContext } from './configs/theme-context';
import { lightTheme, darkTheme } from './configs/theme';



const App = () => {

    const [theme, setTheme] = useState(lightTheme ? lightTheme : darkTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };


    return (
        <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
        </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export {App};