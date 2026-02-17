'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidebarNav({ components }) {
    const pathname = usePathname();

    return (
        <nav>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {components.map((comp) => {
                    const href = `/components/${comp.slug}`;
                    const isActive = pathname === href;

                    return (
                        <li key={comp.slug} style={{ marginBottom: '4px' }}>
                            <Link
                                href={href}
                                style={{
                                    display: 'block',
                                    padding: '8px 12px',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    color: isActive ? 'rgb(var(--accent-text))' : 'rgb(var(--text-secondary))',
                                    backgroundColor: isActive ? 'rgb(var(--accent-bg-light))' : 'transparent',
                                    fontSize: '14px',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    transition: 'all 0.2s ease',
                                }}
                                className={`nav-link ${isActive ? 'active' : ''}`}
                            >
                                {comp.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
