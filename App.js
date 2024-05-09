import React from 'react';
import MainContainer from './components/MainContainer'; 
import { ThemeProvider } from "./context/theme";
import { AuthProvider } from './context/AuthContext';

export default function App() {
    return (
        <AuthProvider> 
            <ThemeProvider>
                <MainContainer />
            </ThemeProvider>
        </AuthProvider>
    );
}

