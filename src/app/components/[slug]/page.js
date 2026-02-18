import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ComponentRenderer from './ComponentRenderer';

export async function generateStaticParams() {
    const componentsDir = path.join(process.cwd(), 'design-boilerplate', 'components');
    if (!fs.existsSync(componentsDir)) return [];

    const files = fs.readdirSync(componentsDir);
    return files
        .filter(file => file.endsWith('.html'))
        .map(file => ({
            slug: file.replace('.html', ''),
        }));
}

function processHtml(slug) {
    const filePath = path.join(process.cwd(), 'design-boilerplate', 'components', `${slug}.html`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    let htmlContent = fs.readFileSync(filePath, 'utf8');

    // Extract content inside <head> if it exists
    const headMatch = htmlContent.match(/<head[^>]*>([\s\S]*)<\/head>/i);
    let headContent = headMatch ? headMatch[1] : '';

    // Fix relative paths in headContent: ../assets/ -> ../../assets/
    // Since we are at /design-boilerplate/components/[slug]/, we need to go up twice to reach assets
    headContent = headContent.replace(/\.\.\/assets\//g, '../../assets/');

    // Fix local component CSS references (e.g., href="checkbox.css")
    // These were copied to public/assets/css/
    headContent = headContent.replace(/href="([^"\/]+\.css)"/g, 'href="../../assets/css/$1"');

    // Normalize styles
    headContent = headContent.replace(/body\s*{[\s\S]*?}/gi, '');
    headContent = headContent.replace(/html\s*{[\s\S]*?}/gi, '');

    // ... (rest of style block) ...
    headContent += `
        <style>
            .wrapper, .showcase-container { 
                max-width: 100% !important; 
                margin: 0 !important; 
                padding: 0 !important; 
                background: transparent !important; 
                box-shadow: none !important;
                border-radius: 0 !important;
            }
            .grid-container, .variant-grid, .lozenge-grid {
                display: grid !important;
                justify-items: start !important;
                justify-content: start !important;
                text-align: left !important;
                width: fit-content !important;
                min-width: 100% !important;
            }
            .grid-header, .row-label, .column-header, .cell, .lozenge-grid > div {
                text-align: left !important;
                justify-self: start !important;
                display: flex !important;
                align-items: center !important;
                justify-content: flex-start !important;
            }
            .section-title, .section-header {
                margin-top: 48px !important;
                margin-bottom: 24px !important;
                border-bottom: 1px solid rgb(var(--border-primary)) !important;
                padding-bottom: 12px !important;
                text-align: left !important;
                justify-content: flex-start !important;
                width: 100% !important;
                grid-column: 1 / -1 !important;
                display: block !important;
            }
            .section:first-child .section-title, 
            .section:first-child h1,
            h1:first-child {
                margin-top: 0 !important;
            }
            h1 {
                font-size: 32px !important;
                font-weight: var(--font-weight-bold) !important;
                margin-bottom: 40px !important;
                color: rgb(var(--text-primary)) !important;
            }
        </style>
    `;

    // Extract content inside <body> if it exists
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    let bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;

    // Fix relative paths in bodyContent
    // More robustly catch ../assets/ even in style attributes/URLs
    bodyContent = bodyContent.replace(/\.\.\/assets\//g, '../../assets/');

    return { headContent, bodyContent };
}

export default async function ComponentPage({ params }) {
    const { slug } = await params;
    const content = processHtml(slug);

    if (!content) return notFound();

    return (
        <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '64px',
            boxShadow: '0 8px 48px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgb(var(--border-primary))',
            minHeight: 'calc(100vh - 80px)',
            maxWidth: '1280px',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, rgb(var(--accent-bg)) 0%, #BBA8F6 100%)',
                opacity: 0.8
            }} />

            <ComponentRenderer
                headContent={content.headContent}
                bodyContent={content.bodyContent}
            />
        </div>
    );
}
