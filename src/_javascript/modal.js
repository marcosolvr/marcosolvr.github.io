window.addEventListener('load', () => {
  const $modal = document.querySelector('.modal')
  const $modalClose = document.querySelector('.modal-close-button')

  $modal.style.display = 'block'
  $modalClose.addEventListener('click', () => {
    $modal.style.display = 'none'
  })

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
    {
      window.location = "https://www.notion.so/Tarefas-f567c5c709624e958c4cf9734a78bd03#650b831d1e754505820779c27cd88d38"
    }
    else if( userAgent.match( /Android/i ) )
    {
      window.location = "https://www.notion.so/Tarefas-f567c5c709624e958c4cf9734a78bd03#642167cd9f654a799b2bfc0c891451de"
    }
    else
    {
      alert('unknown');
    }
  }

  getMobileOperatingSystem()
})