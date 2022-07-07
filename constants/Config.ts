let config = {

};

const debugConfig = {

};

if (__DEV__) {
  config = {
    ...config,
    ...debugConfig,
  };
}

export default config;
