const stage = document.querySelector('#video-stage');
const tracks = [...document.querySelectorAll('.track')];
function play(track) {
  tracks.forEach(item => {
    item.classList.toggle('active', item === track);
    item.setAttribute('aria-pressed', String(item === track));
  });
  const frame = document.createElement('iframe');
  frame.src = `https://www.youtube-nocookie.com/embed/${track.dataset.video}?autoplay=1&rel=0`;
  frame.title = `${track.dataset.title} — Brad Grimm performance`;
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  stage.replaceChildren(frame);
  document.querySelector('#video-title').textContent = track.dataset.title;
  document.querySelector('#youtube-link').href = `https://www.youtube.com/watch?v=${track.dataset.video}`;
}
tracks.forEach(track => track.addEventListener('click', () => play(track)));
document.querySelector('#play-video')?.addEventListener('click', () => play(tracks[0]));
