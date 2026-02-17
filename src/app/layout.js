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
                <link rel="stylesheet" href="/design-boilerplate/assets/css/colors.css" />
                <link rel="stylesheet" href="/design-boilerplate/assets/css/typography.css" />
                <link rel="stylesheet" href="/design-boilerplate/assets/css/icons.css" />
                <link rel="stylesheet" href="/design-boilerplate/assets/css/tokens.css" />
            </head>
            <body suppressHydrationWarning>
                {children}
                <Agentation />
            </body>
        </html>
    );
}
