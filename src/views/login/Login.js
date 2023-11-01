import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Authenticator } from '@aws-amplify/ui-react';
import GridBuilder from "../gridBuilder/GridBuilder";
import '@aws-amplify/ui-react/styles.css';
const defaultTheme = createTheme();

export default function SignIn() {
    return (
        <div style={{backgroundColor: 'lightgray'}}>
            <ThemeProvider theme={defaultTheme} >
                <Authenticator
                    hideSignUp={true}>
                    {({ signOut, user }) => (
                        <main>
                            <GridBuilder signOut={signOut}/>
                        </main>
                    )}
                </Authenticator>
            </ThemeProvider>
        </div>
    );
}