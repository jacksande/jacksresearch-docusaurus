import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import VerseRow from '@site/src/components/VerseRow';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "VerseRow" tag to our component
    VerseRow,
};