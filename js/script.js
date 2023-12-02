document // Page Visibility API
  .addEventListener(
    'visibilitychange',
    function () {
      const URL = document.hidden ? '../img/favicon.ico' : '../img/favicon-active.ico'
      document.querySelector('[rel*="icon"]')
          .setAttribute('href', URL)
    }
  )