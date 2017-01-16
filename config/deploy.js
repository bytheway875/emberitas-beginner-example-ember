module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'emberitas-beginner',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
