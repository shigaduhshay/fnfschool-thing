<video src="{{ asset('givealilback.mp4' )}}" muted autoplay loop playsinline></video>
window.addEventListener('load', async () => {
    let video = document.querySelector('video[muted][autoplay]');
    try {
      await video.play();
    } catch (err) {
      video.controls = true;
    }
  });