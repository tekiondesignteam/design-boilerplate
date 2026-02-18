import { Agentation } from 'agentation';
import './globals.css';

export const metadata = {
    title: 'Design Tokens',
    description: 'Design system tokens showcase',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="stylesheet" href="assets/css/colors.css" />
                <link rel="stylesheet" href="assets/css/typography.css" />
                <link rel="stylesheet" href="assets/css/icons.css" />
                <link rel="stylesheet" href="assets/css/tokens.css" />
            </head>
            <body suppressHydrationWarning>
                {children}
                <Agentation />
            </body>
        </html>
    );
}
