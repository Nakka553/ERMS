const env = () => {
    return process.env.NODE_ENV === 'production' ? { endpoint: '/prod/v1', port: 6500 } :
      { endpoint: '/dev/v1', port: 6000 }
  }
  
  module.exports = {
    ...env(),
    jwtKey: {
      secret: 'TEST',
      expiresIn: 86400
    }
  }