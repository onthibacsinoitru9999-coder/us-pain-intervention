// US-PainIntervention Pro: Main Application Controller
// High-performance clinical reference system for MSK and Interventional Pain Procedures

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// State Management
const appState = {
  procedures: typeof PROCEDURES_DATA !== 'undefined' ? PROCEDURES_DATA : [],
  currentCategory: 'all',
  currentType: 'all',
  currentDifficulty: 'all',
  searchQuery: '',
  favorites: JSON.parse(localStorage.getItem('us_pain_favorites') || '[]'),
  currentProcedure: null,
  activeTab: 'procedures', // 'procedures', 'calculator', 'checklist', 'about'
  theme: localStorage.getItem('us_pain_theme') || 'light'
};

function initApp() {
  applyTheme(appState.theme);
  renderCategoryCounters();
  setupEventListeners();
  renderProcedures();
  setupCalculator();
  setupChecklist();
}

// Accent-insensitive normalization for Vietnamese search
function normalizeStr(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd');
}

function applyTheme(theme) {
  appState.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('us_pain_theme', theme);
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.innerHTML = theme === 'dark' 
      ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg> Giao diện Sáng'
      : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg> Giao diện Tối';
  }
}

function renderCategoryCounters() {
  const total = appState.procedures.length;
  const upper = appState.procedures.filter(p => p.category === 'upper').length;
  const lower = appState.procedures.filter(p => p.category === 'lower').length;
  const spine = appState.procedures.filter(p => p.category === 'spine').length;
  const bio = appState.procedures.filter(p => p.category === 'biologics').length;
  const favCount = appState.favorites.length;

  const countAll = document.getElementById('count-all');
  if (countAll) countAll.textContent = total;
  const countUpper = document.getElementById('count-upper');
  if (countUpper) countUpper.textContent = upper;
  const countLower = document.getElementById('count-lower');
  if (countLower) countLower.textContent = lower;
  const countSpine = document.getElementById('count-spine');
  if (countSpine) countSpine.textContent = spine;
  const countBio = document.getElementById('count-biologics');
  if (countBio) countBio.textContent = bio;
  const countFav = document.getElementById('count-fav');
  if (countFav) countFav.textContent = favCount;
}

function setupEventListeners() {
  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      applyTheme(appState.theme === 'dark' ? 'light' : 'dark');
    });
  }

  // Main navigation tabs
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const target = tab.getAttribute('data-tab');
      switchMainTab(target);
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value.trim();
      renderProcedures();
    });
  }

  const clearSearchBtn = document.getElementById('clear-search-btn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      appState.searchQuery = '';
      renderProcedures();
    });
  }

  // Category filter buttons
  document.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.currentCategory = btn.getAttribute('data-cat');
      renderProcedures();
    });
  });

  // Type filter dropdown
  const typeFilter = document.getElementById('filter-type');
  if (typeFilter) {
    typeFilter.addEventListener('change', (e) => {
      appState.currentType = e.target.value;
      renderProcedures();
    });
  }

  // Difficulty filter dropdown
  const diffFilter = document.getElementById('filter-difficulty');
  if (diffFilter) {
    diffFilter.addEventListener('change', (e) => {
      appState.currentDifficulty = e.target.value;
      renderProcedures();
    });
  }

  // Modal close buttons
  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  const modalBackdrop = document.getElementById('procedure-modal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // Keyboard shortcut Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeLightbox();
    }
  });

  // Print button in modal
  const printBtn = document.getElementById('modal-print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Lightbox close
  const lightboxClose = document.getElementById('lightbox-close');
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  const lightbox = document.getElementById('image-lightbox');
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
}

function switchMainTab(tabName) {
  appState.activeTab = tabName;
  
  // Desktop header nav tabs
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-tab') === tabName);
  });

  // Mobile bottom navigation bar items
  document.querySelectorAll('.mobile-nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
  });

  // Section contents
  document.querySelectorAll('.tab-content-section').forEach(sec => {
    sec.classList.toggle('hidden', sec.id !== `section-${tabName}`);
  });

  // Smooth scroll to top on tab switch
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleFavorite(procId, event) {
  if (event) event.stopPropagation();
  const idx = appState.favorites.indexOf(procId);
  if (idx > -1) {
    appState.favorites.splice(idx, 1);
  } else {
    appState.favorites.push(procId);
  }
  localStorage.setItem('us_pain_favorites', JSON.stringify(appState.favorites));
  renderCategoryCounters();
  renderProcedures();
  
  // Update modal fav button if modal is open
  const modalFavBtn = document.getElementById('modal-fav-btn');
  if (modalFavBtn && appState.currentProcedure && appState.currentProcedure.id === procId) {
    updateModalFavButton(modalFavBtn, appState.favorites.includes(procId));
  }
}

function updateModalFavButton(btn, isFav) {
  btn.innerHTML = isFav 
    ? `<svg class="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> <span class="btn-action-text">Đã lưu</span>`
    : `<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg> <span class="btn-action-text">Lưu</span>`;
  btn.classList.toggle('active-fav', isFav);
}

function filterProcedures() {
  const normQuery = normalizeStr(appState.searchQuery);

  return appState.procedures.filter(item => {
    // Category filter
    if (appState.currentCategory === 'fav') {
      if (!appState.favorites.includes(item.id)) return false;
    } else if (appState.currentCategory !== 'all') {
      if (item.category !== appState.currentCategory) return false;
    }

    // Type filter
    if (appState.currentType !== 'all') {
      if (appState.currentType === 'joint' && !['joint', 'joint_injection'].includes(item.type)) return false;
      else if (appState.currentType === 'nerve' && !['nerve', 'nerve_block'].includes(item.type)) return false;
      else if (appState.currentType === 'biologics' && !['biologics', 'regenerative', 'special'].includes(item.type)) return false;
      else if (appState.currentType === 'muscle' && item.type !== 'muscle_injection') return false;
      else if (appState.currentType === 'rfa' && item.type !== 'rfa') return false;
      else if (['bursa', 'tendon', 'spine'].includes(appState.currentType) && item.type !== appState.currentType) return false;
    }

    // Difficulty filter
    if (appState.currentDifficulty !== 'all') {
      if (item.difficulty !== appState.currentDifficulty) return false;
    }

    // Search query matching
    if (normQuery) {
      const matchNameVi = normalizeStr(item.nameVi).includes(normQuery);
      const matchNameEn = normalizeStr(item.nameEn).includes(normQuery);
      const matchIcd = normalizeStr(item.icd10).includes(normQuery);
      const matchIndications = item.indications.some(ind => normalizeStr(ind).includes(normQuery));
      const matchSono = item.sonoanatomy.some(s => normalizeStr(s).includes(normQuery));
      return matchNameVi || matchNameEn || matchIcd || matchIndications || matchSono;
    }

    return true;
  });
}

function getTypeBadge(type) {
  switch (type) {
    case 'joint':
    case 'joint_injection':
      return '<span class="badge badge-joint">Nội khớp</span>';
    case 'bursa':
      return '<span class="badge badge-bursa">Bao hoạt dịch</span>';
    case 'tendon':
      return '<span class="badge badge-tendon">Quanh gân</span>';
    case 'nerve':
    case 'nerve_block':
      return '<span class="badge badge-nerve">Thần kinh</span>';
    case 'muscle':
    case 'muscle_injection':
      return '<span class="badge badge-nerve" style="background:#f0fdf4;color:#166534;border:1px solid #bbf7d0;">Cơ sâu</span>';
    case 'rfa':
      return '<span class="badge badge-bio" style="background:#fff7ed;color:#c2410c;border:1px solid #ffedd5;">Đốt RFA</span>';
    case 'spine':
      return '<span class="badge badge-spine">Cột sống</span>';
    case 'biologics':
    case 'regenerative':
    case 'special':
      return '<span class="badge badge-bio">Tái tạo / PRP</span>';
    default:
      return '<span class="badge">Thủ thuật</span>';
  }
}

function getDifficultyBadge(diff) {
  if (diff === 'Cơ bản') {
    return '<span class="diff-chip diff-basic">● Cơ bản</span>';
  } else if (diff === 'Trung bình') {
    return '<span class="diff-chip diff-medium">● Trung bình</span>';
  } else if (diff === 'Nâng cao') {
    return '<span class="diff-chip diff-advanced">● Nâng cao</span>';
  } else {
    return '<span class="diff-chip" style="background:#fdf2f8;color:#9d174d;border:1px solid #fbcfe8;">● Chuyên sâu</span>';
  }
}

function renderProcedures() {
  const container = document.getElementById('procedures-grid');
  const countBadge = document.getElementById('search-result-count');
  if (!container) return;

  const filtered = filterProcedures();
  if (countBadge) {
    countBadge.textContent = `${filtered.length} quy trình`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg class="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <h3 class="text-lg font-bold text-slate-700">Không tìm thấy quy trình phù hợp</h3>
        <p class="text-sm text-slate-500 mt-1">Vui lòng thử tìm với từ khóa khác (ví dụ: vai, gối, háng, cổ tay, thần kinh, prp...) hoặc xóa bộ lọc.</p>
        <button onclick="resetFilters()" class="btn btn-outline mt-4">Đặt lại bộ lọc</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isFav = appState.favorites.includes(item.id);
    const thumbImg = item.figures && item.figures.length > 0 ? item.figures[0].path : 'assets/images/placeholder.jpeg';

    return `
      <div class="procedure-card" onclick="openProcedureDetail('${item.id}')">
        <div class="card-image-box">
          <img src="${thumbImg}" alt="${item.nameVi}" loading="lazy" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'250\\' viewBox=\\'0 0 400 250\\'><rect fill=\\'%23f1f5f9\\' width=\\'400\\' height=\\'250\\'/><text fill=\\'%2394a3b8\\' font-family=\\'sans-serif\\' font-size=\\'16\\' dy=\\'10.5\\' font-weight=\\'bold\\' x=\\'50%\\' y=\\'50%\\' text-anchor=\\'middle\\'>US-Pain Procedure</text></svg>'">
          <div class="card-badges">
            ${getTypeBadge(item.type)}
            ${getDifficultyBadge(item.difficulty)}
          </div>
          <button class="card-fav-btn ${isFav ? 'is-fav' : ''}" onclick="toggleFavorite('${item.id}', event)" title="${isFav ? 'Bỏ lưu' : 'Lưu thủ thuật'}">
            <svg class="w-5 h-5" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
            </svg>
          </button>
        </div>

        <div class="card-content">
          <h3 class="card-title">${item.nameVi}</h3>
          <p class="card-subtitle">${item.nameEn}</p>
          
          <div class="card-chips">
            <span class="chip chip-icd">${item.icd10.split('(')[0].trim()}</span>
            <span class="chip chip-approach">${item.technique.approach.split('(')[0].trim()}</span>
          </div>

          <p class="card-desc">${item.indications[0]}</p>

          <div class="card-footer">
            <span class="text-xs text-slate-500 font-medium">${item.technique.needle.split(',')[0]}</span>
            <span class="text-xs text-teal-600 font-bold flex items-center gap-1">
              Xem quy trình
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  appState.currentCategory = 'all';
  appState.currentType = 'all';
  appState.currentDifficulty = 'all';
  appState.searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  const typeFilter = document.getElementById('filter-type');
  if (typeFilter) typeFilter.value = 'all';
  const diffFilter = document.getElementById('filter-difficulty');
  if (diffFilter) diffFilter.value = 'all';
  document.querySelectorAll('.cat-filter-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-cat') === 'all');
  });
  renderProcedures();
}

// Modal Detail Logic
function openProcedureDetail(procId) {
  const item = appState.procedures.find(p => p.id === procId);
  if (!item) return;

  appState.currentProcedure = item;
  const isFav = appState.favorites.includes(item.id);

  // Set modal headers (Optimized for 7.5-inch mobile)
  const modalTitle = document.getElementById('modal-title');
  if (modalTitle) modalTitle.textContent = item.nameVi;

  const modalSubtitleEn = document.getElementById('modal-subtitle-en');
  if (modalSubtitleEn) modalSubtitleEn.textContent = item.nameEn;

  const modalIcdPill = document.getElementById('modal-icd-pill');
  if (modalIcdPill) modalIcdPill.textContent = `ICD-10: ${item.icd10}`;

  const modalSubtitle = document.getElementById('modal-subtitle');
  if (modalSubtitle) modalSubtitle.textContent = `${item.nameEn} • ICD-10: ${item.icd10}`;

  // Populate category & difficulty badges in header top row
  const metaBadges = document.getElementById('modal-meta-badges');
  if (metaBadges) {
    metaBadges.innerHTML = `
      ${getTypeBadge(item.type)}
      ${getDifficultyBadge(item.difficulty)}
    `;
  }
  
  const modalFavBtn = document.getElementById('modal-fav-btn');
  if (modalFavBtn) {
    updateModalFavButton(modalFavBtn, isFav);
    modalFavBtn.onclick = () => toggleFavorite(item.id);
  }

  // Populate Tab 1: Indications & Contraindications
  const tab1 = document.getElementById('modal-tab-content-1');
  tab1.innerHTML = `
    <div class="clinical-box">
      <h4 class="font-bold text-teal-800 text-base mb-2 flex items-center gap-2">
        <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        Chỉ định Lâm sàng
      </h4>
      <ul class="list-disc pl-5 space-y-1.5 text-slate-700 text-sm">
        ${item.indications.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div class="danger-box">
        <h4 class="font-bold text-rose-800 text-sm mb-2 flex items-center gap-2">
          <svg class="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          Chống chỉ định Tuyệt đối
        </h4>
        <ul class="list-disc pl-4 space-y-1 text-slate-700 text-xs">
          ${item.contraindications.absolute.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>

      <div class="warning-box">
        <h4 class="font-bold text-amber-800 text-sm mb-2 flex items-center gap-2">
          <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Chống chỉ định Tương đối / Thận trọng
        </h4>
        <ul class="list-disc pl-4 space-y-1 text-slate-700 text-xs">
          ${item.contraindications.relative.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4 text-sm">
      <div class="font-bold text-slate-700 mb-1">Mã ICD-10 liên quan:</div>
      <div class="text-slate-600 font-mono text-xs">${item.icd10}</div>
    </div>
  `;

  // Populate Tab 2: Sonoanatomy & Needle Technique
  const tab2 = document.getElementById('modal-tab-content-2');
  tab2.innerHTML = `
    <div class="space-y-4 text-sm">
      <div class="info-card">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div class="font-bold text-slate-800 text-sm">Tư thế bệnh nhân:</div>
            <p class="text-slate-600 text-xs mt-1 leading-relaxed">${item.patientPosition}</p>
          </div>
          <div>
            <div class="font-bold text-slate-800 text-sm">Đầu dò siêu âm (Transducer):</div>
            <p class="text-slate-600 text-xs mt-1 leading-relaxed">${item.transducer}</p>
          </div>
        </div>
      </div>

      <div class="clinical-box">
        <h4 class="font-bold text-teal-800 text-sm mb-2">Mốc Giải phẫu Siêu âm (Sonoanatomy Landmarks):</h4>
        <ul class="list-disc pl-5 space-y-1 text-slate-700 text-xs">
          ${item.sonoanatomy.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>

      <div class="procedure-steps-box">
        <div class="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
          <h4 class="font-bold text-indigo-900 text-sm">Quy trình Kỹ thuật Chọc kim Từng bước</h4>
          <span class="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded font-semibold">${item.technique.needle}</span>
        </div>
        <div class="mb-2 text-xs font-semibold text-indigo-700">Hướng tiếp cận: ${item.technique.approach}</div>
        <ol class="space-y-2 text-slate-700 text-xs pl-2">
          ${item.technique.steps.map(step => `<li class="border-l-2 border-teal-500 pl-2 leading-relaxed">${step}</li>`).join('')}
        </ol>
      </div>
    </div>
  `;

  // Populate Tab 3: Drugs & Dosage
  const tab3 = document.getElementById('modal-tab-content-3');
  const d = item.drugsAndDosage;
  tab3.innerHTML = `
    <div class="space-y-4 text-sm">
      <div class="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
        <h4 class="font-bold text-teal-900 text-base mb-3 flex items-center gap-2">
          <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          Dung dịch Tiêm & Liều lượng Khuyến cáo Chuẩn
        </h4>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          ${d.steroid ? `
            <div class="p-3 bg-teal-50/60 rounded border border-teal-200">
              <div class="font-bold text-teal-900 mb-1">Corticosteroid:</div>
              <p class="text-slate-700 leading-relaxed">${d.steroid}</p>
            </div>
          ` : ''}

          ${d.localAnesthetic ? `
            <div class="p-3 bg-sky-50/60 rounded border border-sky-200">
              <div class="font-bold text-sky-900 mb-1">Thuốc tê (Local Anesthetic):</div>
              <p class="text-slate-700 leading-relaxed">${d.localAnesthetic}</p>
            </div>
          ` : ''}

          ${d.viscosupplementation ? `
            <div class="p-3 bg-amber-50/60 rounded border border-amber-200">
              <div class="font-bold text-amber-900 mb-1">Acid Hyaluronic (HA):</div>
              <p class="text-slate-700 leading-relaxed">${d.viscosupplementation}</p>
            </div>
          ` : ''}

          ${d.prp ? `
            <div class="p-3 bg-indigo-50/60 rounded border border-indigo-200">
              <div class="font-bold text-indigo-900 mb-1">Huyết tương giàu tiểu cầu (PRP):</div>
              <p class="text-slate-700 leading-relaxed">${d.prp}</p>
            </div>
          ` : ''}

          ${d.hydrodilatation ? `
            <div class="p-3 bg-purple-50/60 rounded border border-purple-200 md:col-span-2">
              <div class="font-bold text-purple-900 mb-1">Nong khớp thủy dịch (Hydrodilatation):</div>
              <p class="text-slate-700 leading-relaxed">${d.hydrodilatation}</p>
            </div>
          ` : ''}

          ${d.salineVolume ? `
            <div class="p-3 bg-slate-100 rounded border border-slate-300">
              <div class="font-bold text-slate-800 mb-1">Thể tích dịch đẩy ngoài màng cứng:</div>
              <p class="text-slate-700 leading-relaxed">${d.salineVolume}</p>
            </div>
          ` : ''}

          ${d.diagnosticBlock ? `
            <div class="p-3 bg-blue-50/60 rounded border border-blue-200">
              <div class="font-bold text-blue-900 mb-1">Phong bế chẩn đoán:</div>
              <p class="text-slate-700 leading-relaxed">${d.diagnosticBlock}</p>
            </div>
          ` : ''}

          ${d.rfa ? `
            <div class="p-3 bg-orange-50/60 rounded border border-orange-200">
              <div class="font-bold text-orange-900 mb-1">Đốt sóng cao tần (RFA):</div>
              <p class="text-slate-700 leading-relaxed">${d.rfa}</p>
            </div>
          ` : ''}
        </div>
      </div>

      <div class="bg-amber-50 border-l-4 border-amber-500 p-3 rounded text-xs text-amber-900">
        <strong>Lưu ý lâm sàng:</strong> Không vượt quá tổng liều tối đa cho phép của thuốc tê theo cân nặng (Dùng công cụ tính liều ở menu trên để kiểm tra). Luôn chuẩn bị sẵn sàng thuốc chống sốc phản vệ và nhũ dịch Lipid 20%.
      </div>
    </div>
  `;

  // Populate Tab 4: Pearls & Pitfalls
  const tab4 = document.getElementById('modal-tab-content-4');
  tab4.innerHTML = `
    <div class="space-y-4 text-sm">
      <div class="bg-rose-50/70 border border-rose-200 rounded-lg p-4">
        <h4 class="font-bold text-rose-900 text-sm mb-3 flex items-center gap-2">
          <svg class="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          Cạm bẫy & Mẹo Lâm sàng Then chốt (Clinical Pearls & Pitfalls)
        </h4>
        <ul class="space-y-2.5 text-xs text-slate-800">
          ${item.pearlsAndPitfalls.map(p => `
            <li class="flex items-start gap-2 bg-white p-2.5 rounded border border-rose-100 shadow-2xs">
              <span class="text-rose-500 font-bold">⚠️</span>
              <span class="leading-relaxed">${p}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs">
        <h4 class="font-bold text-slate-800 text-sm mb-1">Chăm sóc & Theo dõi Sau thủ thuật:</h4>
        <p class="text-slate-600 leading-relaxed">${item.postProcedure}</p>
      </div>
    </div>
  `;

  // Populate Tab 5: Real Ultrasound Figures
  const tab5 = document.getElementById('modal-tab-content-5');
  if (item.figures && item.figures.length > 0) {
    tab5.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${item.figures.map(fig => {
          const safeTitle = (fig.title || '').replace(/'/g, "\\'");
          const safeDesc = (fig.desc || '').replace(/'/g, "\\'");
          const safeSpringer = (fig.springerCaption || '').replace(/'/g, "\\'");
          const figNumBadge = fig.figNumber ? `<span class="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-[10px] font-bold">Fig ${fig.figNumber}</span>` : '';
          const springerBlock = fig.springerCaption ? `
            <div class="mt-2.5 pt-2 border-t border-slate-100 text-[11px] text-slate-500 italic bg-slate-50 p-2 rounded">
              <span class="font-semibold text-teal-700 not-italic">📖 Springer Atlas:</span> ${fig.springerCaption}
            </div>
          ` : '';

          return `
            <div class="figure-card" onclick="openLightbox('${fig.path}', '${safeTitle}', '${safeDesc}', '${safeSpringer}')">
              <div class="figure-img-box">
                <img src="${fig.path}" alt="${fig.title}" loading="lazy">
                <span class="figure-zoom-hint">Phóng to ảnh 🔍</span>
              </div>
              <div class="figure-caption">
                <div class="flex items-center justify-between gap-1 mb-1">
                  <h5 class="font-bold text-slate-800 text-xs">${fig.title}</h5>
                  ${figNumBadge}
                </div>
                <p class="text-slate-500 text-xs leading-relaxed">${fig.desc}</p>
                ${springerBlock}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else {
    tab5.innerHTML = `
      <div class="text-center py-8 text-slate-400 text-sm">
        Đang cập nhật thêm hình ảnh siêu âm cho quy trình này.
      </div>
    `;
  }

  // Switch to Tab 1 by default
  switchModalSubTab(1);

  // Show modal
  const modal = document.getElementById('procedure-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function switchModalSubTab(tabIndex) {
  const subTabs = document.querySelectorAll('.modal-sub-tab');
  subTabs.forEach((t, idx) => {
    const isActive = (idx + 1 === tabIndex);
    t.classList.toggle('active', isActive);
    if (isActive) {
      // Auto smooth-scroll active tab into view horizontally on mobile
      t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });

  document.querySelectorAll('.modal-sub-content').forEach((c, idx) => {
    c.classList.toggle('hidden', idx + 1 !== tabIndex);
  });

  // Scroll modal body to top upon subtab switch
  const modalBody = document.querySelector('.modal-body');
  if (modalBody) modalBody.scrollTop = 0;
}

function closeModal() {
  const modal = document.getElementById('procedure-modal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Lightbox logic
function openLightbox(imgSrc, title, desc, springerCaption = '') {
  const lb = document.getElementById('image-lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbTitle = document.getElementById('lightbox-title');
  const lbDesc = document.getElementById('lightbox-desc');
  const lbSpringer = document.getElementById('lightbox-springer');

  if (lb && lbImg) {
    lbImg.src = imgSrc;
    if (lbTitle) lbTitle.textContent = title;
    if (lbDesc) lbDesc.textContent = desc;
    if (lbSpringer) {
      if (springerCaption) {
        lbSpringer.textContent = `📖 Springer Atlas (Philip Peng): ${springerCaption}`;
        lbSpringer.classList.remove('hidden');
      } else {
        lbSpringer.classList.add('hidden');
      }
    }
    lb.classList.remove('hidden');
  }
}

function closeLightbox() {
  const lb = document.getElementById('image-lightbox');
  if (lb) lb.classList.add('hidden');
}

// Calculator logic
function setupCalculator() {
  const weightInput = document.getElementById('calc-weight');
  const drugSelect = document.getElementById('calc-drug');
  const concSelect = document.getElementById('calc-conc');
  const calcBtn = document.getElementById('btn-calc-dose');

  function updateConcentrations() {
    if (!drugSelect || !concSelect) return;
    const drugKey = drugSelect.value;
    const drug = ANESTHETICS_DATA[drugKey];
    if (!drug) return;

    concSelect.innerHTML = drug.concentrations.map((c, i) => `
      <option value="${i}">${c.label}</option>
    `).join('');
  }

  if (drugSelect) {
    drugSelect.addEventListener('change', updateConcentrations);
    updateConcentrations();
  }

  function doCalculate() {
    const weight = parseFloat(weightInput.value);
    const drugKey = drugSelect.value;
    const concIdx = parseInt(concSelect.value, 10);

    const result = calculateAnestheticMax(weight, drugKey, concIdx);
    const resultBox = document.getElementById('calc-result');
    if (!result || !resultBox) {
      if (resultBox) {
        resultBox.innerHTML = `
          <div class="text-rose-600 font-medium text-sm">Vui lòng nhập cân nặng hợp lệ (kg).</div>
        `;
      }
      return;
    }

    resultBox.innerHTML = `
      <div class="bg-teal-50 border border-teal-300 rounded-lg p-4">
        <div class="text-xs uppercase font-bold text-teal-800 tracking-wider">Kết quả tính toán an toàn</div>
        <div class="grid grid-cols-2 gap-4 mt-3">
          <div class="bg-white p-3 rounded border border-teal-100 shadow-2xs">
            <div class="text-xs text-slate-500 font-medium">Liều tối đa theo cân nặng:</div>
            <div class="text-2xl font-black text-teal-700">${result.safeMaxMg} <span class="text-sm font-semibold text-slate-600">mg</span></div>
            <div class="text-2xs text-slate-400 mt-0.5">(${result.maxDosePerKg} mg/kg; Trần tuyệt đối: ${result.absoluteMaxMg} mg)</div>
          </div>
          <div class="bg-white p-3 rounded border border-teal-100 shadow-2xs">
            <div class="text-xs text-slate-500 font-medium">Thể tích tối đa (${result.selectedConcentration}):</div>
            <div class="text-2xl font-black text-indigo-700">${result.maxVolumeMl} <span class="text-sm font-semibold text-slate-600">ml</span></div>
            <div class="text-2xs text-slate-400 mt-0.5">Nồng độ: ${result.mgPerMl} mg/ml</div>
          </div>
        </div>

        <div class="mt-3 text-xs text-slate-600 flex justify-between border-t border-teal-200/60 pt-2">
          <span>Khởi phát: <strong>${result.onset}</strong></span>
          <span>Thời gian tác dụng: <strong>${result.duration}</strong></span>
        </div>
      </div>
    `;
  }

  if (calcBtn) calcBtn.addEventListener('click', doCalculate);
  if (weightInput) {
    weightInput.addEventListener('input', doCalculate);
  }

  // Populate steroid reference table
  const steroidTableBody = document.getElementById('steroid-table-body');
  if (steroidTableBody && typeof STEROIDS_DATA !== 'undefined') {
    steroidTableBody.innerHTML = STEROIDS_DATA.map(s => `
      <tr class="border-b border-slate-200 hover:bg-slate-50 text-xs">
        <td class="py-2.5 px-3 font-semibold text-slate-800">${s.name}</td>
        <td class="py-2.5 px-3 text-center font-mono font-bold text-teal-700">${s.antiInflammatoryPower}x</td>
        <td class="py-2.5 px-3 text-center font-mono text-slate-600">${s.mineralocorticoidPower}x</td>
        <td class="py-2.5 px-3 text-center font-mono font-bold text-indigo-700">${s.equivalentDoseMg} mg</td>
        <td class="py-2.5 px-3 text-slate-600">${s.halfLifeHours}</td>
        <td class="py-2.5 px-3">
          <span class="inline-block px-1.5 py-0.5 rounded text-2xs font-semibold ${s.particulate ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}">
            ${s.particulate ? 'Hạt tinh thể' : 'Không hạt (Tan)'}
          </span>
        </td>
      </tr>
    `).join('');
  }
}

// Checklist logic
function setupChecklist() {
  const container = document.getElementById('checklist-steps-container');
  if (!container || typeof SAFETY_CHECKLIST_STEPS === 'undefined') return;

  container.innerHTML = SAFETY_CHECKLIST_STEPS.map((s, idx) => `
    <div class="checklist-step-card border border-slate-200 rounded-lg p-4 bg-white shadow-2xs mb-4">
      <div class="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
        <h4 class="font-bold text-teal-900 text-sm flex items-center gap-2">
          <span class="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold">${s.step}</span>
          ${s.title}
        </h4>
        <span class="text-xs text-rose-600 font-semibold flex items-center gap-1">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          Bắt buộc
        </span>
      </div>

      <div class="space-y-2 mb-3">
        ${s.items.map((item, i) => `
          <label class="flex items-start gap-3 p-2 rounded hover:bg-slate-50 cursor-pointer text-xs text-slate-700">
            <input type="checkbox" class="checklist-checkbox mt-0.5 rounded text-teal-600 focus:ring-teal-500 w-4 h-4" onchange="updateChecklistProgress()">
            <span class="leading-relaxed">${item}</span>
          </label>
        `).join('')}
      </div>

      <div class="bg-rose-50 border-l-4 border-rose-500 p-2.5 rounded text-2xs text-rose-900 flex items-center gap-2">
        <span class="font-bold">CẢNH BÁO:</span> ${s.criticalWarning}
      </div>
    </div>
  `).join('');

  updateChecklistProgress();

  const resetBtn = document.getElementById('reset-checklist-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.querySelectorAll('.checklist-checkbox').forEach(cb => cb.checked = false);
      updateChecklistProgress();
    });
  }
}

function updateChecklistProgress() {
  const checkboxes = document.querySelectorAll('.checklist-checkbox');
  if (checkboxes.length === 0) return;
  const checked = document.querySelectorAll('.checklist-checkbox:checked').length;
  const total = checkboxes.length;
  const percent = Math.round((checked / total) * 100);

  const progBar = document.getElementById('checklist-progress-bar');
  const progText = document.getElementById('checklist-progress-text');

  if (progBar) progBar.style.width = `${percent}%`;
  if (progText) progText.textContent = `${checked}/${total} mục (${percent}%)`;
}

// Global functions exposed to window
window.switchModalSubTab = switchModalSubTab;
window.openProcedureDetail = openProcedureDetail;
window.toggleFavorite = toggleFavorite;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.resetFilters = resetFilters;
window.updateChecklistProgress = updateChecklistProgress;
