import './globals.css';
import ClientAgentation from './components/ClientAgentation';

export const metadata = {
    title: 'Design Tokens',
    description: 'Design system tokens showcase',
};

export default function RootLayout({ children }) {
    const basePath = process.env.NODE_ENV === 'production' ? '/design-boilerplate' : '';

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="stylesheet" href={`${basePath}/assets/css/colors.css`} />
                <link rel="stylesheet" href={`${basePath}/assets/css/typography.css`} />
                <link rel="stylesheet" href={`${basePath}/assets/css/icons.css`} />
                <link rel="stylesheet" href={`${basePath}/assets/css/tokens.css`} />
            </head>
            <body suppressHydrationWarning>
                {children}
                <ClientAgentation />
            </body>
        </html>
    );
}
