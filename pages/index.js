import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <div className="example">
      <i className="example-icon" />
      <p className="example-text">Hello Esme!!!!</p>
      <Link href="/other">
        <a href="#prettier" className="example-link">
          Link
        </a>
      </Link>
    </div>
  );
}

export default Home;
