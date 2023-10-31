import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Authenticator } from '@aws-amplify/ui-react';
import GridBuilder from "../gridBuilder/GridBuilder";
import '@aws-amplify/ui-react/styles.css';
const defaultTheme = createTheme();

export default function SignIn() {
    return (
        <div  style={{marginTop: '25vh'}}>
            <ThemeProvider theme={defaultTheme} >
                <Authenticator
                    hideSignUp={true}>
                    {({ signOut, user }) => (
                        <main>
                            <button onClick={signOut}>Sign out</button>
                            <GridBuilder/>
                        </main>
                    )}
                </Authenticator>
            </ThemeProvider>
        </div>
    );
}