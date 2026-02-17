import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function ComponentsIndex() {
    const componentsDir = path.join(process.cwd(), 'design-boilerplate', 'components');

    let files = [];
    if (fs.existsSync(componentsDir)) {
        files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.html'));
    }

    return (
        <div style={{
            padding: '80px 40px',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
        }}>
            <h1 style={{
                fontSize: '32px',
                fontWeight: 'var(--font-weight-bold)',
                marginBottom: '16px',
                color: 'rgb(var(--text-primary))'
            }}>
                Component Library
            </h1>
            <p style={{
                fontSize: '18px',
                color: 'rgb(var(--text-secondary))',
                lineHeight: '1.6',
                fontWeight: 'var(--font-weight-regular)'
            }}>
                Select a component from the sidebar to view its documentation, variants, and design guidelines.
            </p>

            <div style={{
                marginTop: '48px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '24px',
                textAlign: 'left'
            }}>
                <div style={{ padding: '24px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Atomic Design</h3>
                    <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Building blocks following the Arcade design system principles.</p>
                </div>
                <div style={{ padding: '24px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Interactive</h3>
                    <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>All components include hover, active, and disabled states.</p>
                </div>
            </div>
        </div>
    );
}
