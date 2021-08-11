import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';

const PlaygroundApp = ({ Component, pageProps }) => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

PlaygroundApp.propTypes = {
  Component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};

export default PlaygroundApp;
