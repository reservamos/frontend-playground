import React from 'react';
import Link from 'next/link';
import '../styles/index.scss';

function Home () {
  return (
    <div className="example">
      <i className="example-icon" />
      <p className="example-text">Hello hello world!</p>
      <Link href="/index">
        <a href="#prettier" className="example-link">Back</a>
      </Link>
    </div>
  );
}

export default Home;
