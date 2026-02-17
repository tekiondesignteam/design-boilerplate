import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import SidebarNav from './SidebarNav';

export default function ComponentsLayout({ children }) {
    const componentsDir = path.join(process.cwd(), 'design-boilerplate', 'components');
    let components = [];

    if (fs.existsSync(componentsDir)) {
        components = fs.readdirSync(componentsDir)
            .filter(f => f.endsWith('.html'))
            .map(file => {
                const slug = file.replace('.html', '');
                return {
                    slug,
                    name: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                };
            })
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'var(--font-family, sans-serif)' }}>
            {/* Sidebar */}
            <aside style={{
                width: '280px',
                borderRight: '1px solid rgb(var(--border-primary))',
                backgroundColor: 'white',
                position: 'fixed',
                height: '100vh',
                overflowY: 'auto',
                padding: '32px 16px',
                zIndex: 100
            }}>
                <div style={{ marginBottom: '32px', padding: '0 12px' }}>
                    <Link href="/" style={{
                        textDecoration: 'none',
                        fontSize: '12px',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'rgb(var(--text-tertiary))',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        ← Back to Tokens
                    </Link>
                    <h2 style={{
                        margin: '12px 0 0 0',
                        fontSize: '20px',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'rgb(var(--text-primary))',
                        border: 'none',
                        padding: 0
                    }}>
                        Components
                    </h2>
                </div>

                <SidebarNav components={components} />
            </aside>

            {/* Main Content */}
            <main style={{
                flex: 1,
                marginLeft: '280px',
                backgroundColor: 'rgb(var(--bg-muted))',
                minHeight: '100vh',
                padding: '40px'
            }}>
                {children}
            </main>

            <style dangerouslySetInnerHTML={{
                __html: `
                body {
                    padding: 0 !important;
                    margin: 0 !important;
                }
                .nav-link:hover {
                    background-color: rgb(var(--bg-tertiary));
                    color: rgb(var(--accent-text)) !important;
                }
                /* Hide vertical scrollbar for sidebar but allow scrolling */
                aside::-webkit-scrollbar {
                    width: 4px;
                }
                aside::-webkit-scrollbar-thumb {
                    background: rgb(var(--border-primary));
                    border-radius: 10px;
                }
            `}} />
        </div>
    );
}
