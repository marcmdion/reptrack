const STORAGE_PREFIX = 'reptrack-collapse-';

export function initCollapsibleSections() {
  document.querySelectorAll('.collapsible-section').forEach((section) => {
    const id = section.dataset.collapsible;
    const header = section.querySelector('.collapsible-header');
    const body = section.querySelector('.collapsible-body');
    if (!id || !header || !body) return;

    const stored = localStorage.getItem(`${STORAGE_PREFIX}${id}`);
    const expanded = stored === null ? section.dataset.defaultExpanded !== 'false' : stored === 'true';
    setExpanded(header, body, expanded);

    header.addEventListener('click', () => {
      const next = header.getAttribute('aria-expanded') !== 'true';
      setExpanded(header, body, next);
      localStorage.setItem(`${STORAGE_PREFIX}${id}`, String(next));
    });
  });
}

function setExpanded(header, body, expanded) {
  header.setAttribute('aria-expanded', String(expanded));
  body.classList.toggle('hidden', !expanded);
}
