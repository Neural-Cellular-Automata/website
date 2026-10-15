(() => {
  'use strict';
  const root = document.getElementById('literature');
  if (!root) return;

  const list = document.getElementById('literature-list');
  const groups = document.getElementById('literature-groups');
  const search = document.getElementById('literature-search');
  const view = document.getElementById('literature-view');
  const sort = document.getElementById('literature-sort');
  const filters = document.getElementById('keyword-filters');
  const count = document.getElementById('literature-count');
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const papers = Array.from(list.querySelectorAll('.paper'), element => ({
    element,
    keywords: JSON.parse(element.dataset.keywords),
    year: Number(element.dataset.year),
    author: normalize(element.dataset.author),
    title: normalize(element.dataset.title),
    text: normalize(element.textContent)
  }));
  const keywords = [...new Set(papers.flatMap(paper => paper.keywords))].sort((a, b) => a.localeCompare(b));
  let selected = '';
  const buttons = new Map();

  ['', ...keywords].forEach(keyword => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-pressed', String(keyword === selected));
    button.addEventListener('click', () => { selected = keyword; render(); });
    filters.append(button);
    buttons.set(keyword, button);
  });

  function compare(a, b) {
    if (sort.value === 'author') return a.author.localeCompare(b.author) || a.title.localeCompare(b.title);
    if (sort.value === 'title') return a.title.localeCompare(b.title);
    const year = sort.value === 'oldest' ? a.year - b.year : b.year - a.year;
    return year || a.author.localeCompare(b.author) || a.title.localeCompare(b.title);
  }

  function render() {
    const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    const searched = papers.filter(paper => words.every(word => paper.text.includes(word)));
    const matches = searched.filter(paper => !selected || paper.keywords.includes(selected)).sort(compare);
    const matching = new Set(matches);
    papers.forEach(paper => { paper.element.hidden = !matching.has(paper); });
    matches.forEach(paper => list.append(paper.element));

    buttons.forEach((button, keyword) => {
      const total = keyword ? searched.filter(paper => paper.keywords.includes(keyword)).length : searched.length;
      button.textContent = `${keyword || 'All keywords'} (${total})`;
      button.setAttribute('aria-pressed', String(keyword === selected));
    });

    const grouped = view.value === 'groups';
    // Keep the original server-rendered list available for browsing without JS.
    const fragment = document.createDocumentFragment();
    if (grouped) {
      (selected ? [selected] : keywords).forEach(keyword => {
        const members = matches.filter(paper => paper.keywords.includes(keyword));
        if (!members.length) return;
        const section = document.createElement('section');
        section.className = 'keyword-group';
        const heading = document.createElement('h2');
        heading.textContent = keyword;
        const badge = document.createElement('span');
        badge.className = 'group-count';
        badge.textContent = ` (${members.length})`;
        heading.append(badge);
        section.append(heading);
        members.forEach(paper => {
          const card = paper.element.cloneNode(true);
          card.removeAttribute('id');
          card.hidden = false;
          section.append(card);
        });
        fragment.append(section);
      });
    }
    groups.replaceChildren(fragment);
    list.hidden = grouped;
    groups.hidden = !grouped;
    count.textContent = `${matches.length} of ${papers.length} works${selected ? ` · ${selected}` : ''}${grouped && !selected ? ' · Papers may appear in more than one group' : ''}`;
    document.getElementById('literature-empty').hidden = matches.length !== 0;
  }

  search.addEventListener('input', render);
  view.addEventListener('change', render);
  sort.addEventListener('change', render);
  document.getElementById('literature-reset').addEventListener('click', () => {
    search.value = '';
    selected = '';
    sort.value = 'newest';
    render();
    search.focus();
  });
  render();
  document.getElementById('literature-controls').hidden = false;
})();
