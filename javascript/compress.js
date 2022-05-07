
const imageLazyLoading = () => {
  const imgLazyLoading = () => {
    const imgs = document.querySelectorAll('img.lazy-loading')
    const seeHeight = window.innerHeight
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    for (let i=0; i<imgs.length; i++) {
      if (imgs[i].offsetTop < seeHeight + scrollTop) {
        if (imgs[i].getAttribute('src') === 'images/loading.gif') {
          imgs[i].src = imgs[i].getAttribute('data-src')
          imgs[i].classList.remove("lazy-loading")
        }
      }
    }
  }
  imgLazyLoading()
  window.addEventListener('scroll', imgLazyLoading)
}
