module.exports = {
    devServer: {
      // Прокси для API запросов на backend (Flask)
      proxy: {
        '/api': {
          target: 'http://localhost:5000', // Здесь указываем адрес вашего backend (Flask)
          changeOrigin: true,
          secure: false,
        }
      }
    }
  }
  