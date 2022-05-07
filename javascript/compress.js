<script>
  window.onload = () => {
    const imgs = document.getElementsByTagName("img")
    let n = 0
    const imgLazyLoading = () => {
      const seeHeight = window.innerHeight
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      for (let i=n; i< imgs.length; i++) {
        if (imgs[i].offsetTop < seeHeight + scrollTop) {
          if (imgs[i].getAttribute('src') === 'images/loading.gif') {
            imgs[i].src = imgs[i].getAttribute('data-src')
          }
          n = i + 1
        }
      }
    }
    window.addEventListener("scroll", imgLazyLoading)
    imgLazyLoading()
  }
</script>