'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const AgentationComponent = dynamic(() => import('agentation').then(mod => mod.Agentation), { ssr: false });

export default function ClientAgentation() {
    const [isDev, setIsDev] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setIsDev(
            window.location.hostname === 'localhost' ||
            window.location.hostname === '127.0.0.1' ||
            window.location.hostname.includes('192.168.')
        );
    }, []);

    if (!mounted || !isDev) return null;

    return <AgentationComponent />;
}
