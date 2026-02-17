'use client';

import { useEffect, useRef } from 'react';

export default function ComponentRenderer({ headContent, bodyContent }) {
    const contentRef = useRef(null);

    useEffect(() => {
        if (bodyContent && contentRef.current) {
            // Execute scripts
            const scripts = contentRef.current.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                Array.from(oldScript.attributes).forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                if (oldScript.parentNode) {
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                }
            });
        }
    }, [bodyContent]);

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: headContent }} />
            <div ref={contentRef} dangerouslySetInnerHTML={{ __html: bodyContent }} />
        </>
    );
}
