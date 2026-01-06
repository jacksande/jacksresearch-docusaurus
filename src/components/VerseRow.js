import React from 'react';

export default function VerseRow({ ivRef, ivText, origRef, origText, kjvRef, kjvText, isOt }) {
    return (
        <div className="verse-container">
            <div className="column iv">
                <div className="verse-ref">{ivRef}</div>
                {/* Use dangerouslySetInnerHTML to render <b> tags correctly */}
                <div className="verse-text" dangerouslySetInnerHTML={{ __html: ivText }} />
            </div>

            <div className={`column original ${isOt ? 'hebrew' : 'greek'}`}>
                <div className="verse-ref">{origRef}</div>
                {/* Render the <a> links for Strong's numbers */}
                <div className="verse-text" dangerouslySetInnerHTML={{ __html: origText }} />
            </div>

            <div className="column kjv">
                <div className="verse-ref">{kjvRef}</div>
                {/* Use dangerouslySetInnerHTML to render <b> tags correctly */}
                <div className="verse-text" dangerouslySetInnerHTML={{ __html: kjvText }} />
            </div>
        </div>
    );
}