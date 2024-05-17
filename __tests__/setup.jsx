// setup.js
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Mock react-pdf components
vi.mock('@react-pdf/renderer', async () => {
    const actual = await vi.importActual('@react-pdf/renderer');
    return {
        ...actual,
        Document: ({ children }) => <div>{children}</div>,
        Page: ({ children }) => <div>{children}</div>,
        View: ({ children }) => <div>{children}</div>,
        Text: ({ children }) => <span>{children}</span>,
        Image: (props) => <img alt="" {...props} />,
        PDFViewer: ({ children }) => <div>{children}</div>,
        PDFDownloadLink: ({ children }) => <a href="#">{typeof children === 'function' ? children({ loading: false }) : children}</a>,
    };
});

expect.extend(matchers);

afterEach(() => {
    cleanup();
});
