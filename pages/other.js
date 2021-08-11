import React from 'react';
import Link from 'next/link';

function Other() {
  return (
    <div className="example">
      <i className="example-icon" />
      <p className="example-text">Hello other world!</p>
      <Link href="/">
        <a href="#prettier" className="example-link">
          Back
        </a>
      </Link>
    </div>
  );
}

export default Other;
