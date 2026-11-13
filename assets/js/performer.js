// Booker-facing pages. Everything here is an enhancement: clips are plain YouTube links,
// the song list has a static copy in the HTML, and the form posts natively without this file.

// Clips: play in place on click. No YouTube request happens until then.
document.querySelectorAll('a.thumb[data-video]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(link.dataset.video)}?autoplay=1&rel=0&playsinline=1`;
    frame.title = `${link.dataset.title || 'Video'}, played by Brad Grimm`;
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    const holder = document.createElement('div');
    holder.className = 'thumb';
    holder.append(frame);
    link.replaceWith(holder);
    frame.focus();
  });
});

// Song list. One request to the public Songroost list feeds the full list on /music/
// and the rotating titles on the home page setlist.
// Only title and artist are read, and every one of these has a static copy in the HTML.
const feedHolder = document.querySelector('[data-feed]');
if (feedHolder && window.fetch) {
  fetch(feedHolder.dataset.feed)
    .then(response => (response.ok ? response.json() : Promise.reject()))
    .then(data => {
      const list = (Array.isArray(data.songs) ? data.songs : [])
        .filter(song => song && typeof song.title === 'string' && song.title.trim())
        .map(song => ({ title: song.title.trim(), artist: typeof song.artist === 'string' ? song.artist.trim() : '' }));
      if (!list.length) return;

      const full = document.querySelector('#songs');
      if (full) {
        full.replaceChildren(...list.map(song => {
          const row = document.createElement('li');
          const artist = document.createElement('span');
          artist.textContent = song.artist;
          row.append(song.title, artist);
          return row;
        }));
      }

      const rows = [...document.querySelectorAll('.setlist li')];
      const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const short = list.filter(song => song.title.length <= 21 && song.artist.length <= 16);
      if (rows.length && !still && short.length > rows.length) {
        const key = text => text.toLowerCase().replace(/[^a-z0-9]/g, '');
        let turn = 0;
        setInterval(() => {
          if (document.hidden) return;
          const shown = new Set(rows.map(row => key(row.querySelector('b').textContent)));
          const pool = short.filter(song => !shown.has(key(song.title)));
          if (!pool.length) return;
          const next = pool[Math.floor(Math.random() * pool.length)];
          const row = rows[turn++ % rows.length];
          row.classList.add('swap');
          setTimeout(() => {
            row.querySelector('b').textContent = next.title;
            row.querySelector('span').textContent = next.artist;
            row.classList.remove('swap');
          }, 300);
        }, 2600);
      }
    })
    .catch(() => {});
}

// Booking form: send in the background and report the result on the page.
const form = document.querySelector('.booking-form');
if (form && window.fetch && window.FormData) {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type=submit]');
  const label = button.textContent;
  const say = (text, ok) => {
    status.textContent = text;
    status.classList.toggle('ok', Boolean(ok));
    status.focus();
  };
  form.addEventListener('submit', event => {
    event.preventDefault();
    button.disabled = true;
    button.textContent = 'Sending…';
    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      .then(response => {
        if (!response.ok) throw new Error(String(response.status));
        form.reset();
        button.hidden = true;
        say('Thanks, I got it. I’ll reply by email.', true);
      })
      .catch(() => {
        button.disabled = false;
        button.textContent = label;
        say('That didn’t go through. Try again, or email me at booking@bradgrimm.com.');
      });
  });
}

// Seasonal blocks remove themselves the day after their offer ends.
document.querySelectorAll('[data-until]').forEach(block => {
  if (new Date() > new Date(`${block.dataset.until}T23:59:59`)) block.remove();
});
