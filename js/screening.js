// MSK-Differential Screening Pro: Master Clinical Guidemap Controller
// Based on Prof. Deepak Sebastian: Differential Screening of Regional Pain in Musculoskeletal Practice (526 pages)
// 10 Comprehensive Chapters + 3-Stage Decision Algorithm + Red Flags Master + Lab Tests Checker + Drug-Induced Pain Checker + 279 Deepak Atlas Images

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initScreeningApp();
  });
}

// Multi-Tier Resilient Fallback Resolution
function resolveInitialScreeningData() {
  let data = [];
  let isFallback = false;
  let source = 'primary';

  // Primary check
  if (typeof SCREENING_DATA !== 'undefined' && Array.isArray(SCREENING_DATA) && SCREENING_DATA.length > 0) {
    data = SCREENING_DATA;
    if (typeof localStorage !== 'undefined' && localStorage.setItem) {
      try {
        localStorage.setItem('deepak_screening_backup_v2', JSON.stringify(SCREENING_DATA));
      } catch (e) {
        console.warn('Cannot write snapshot to localStorage:', e);
      }
    }
  } else if (typeof STABLE_SCREENING_FALLBACK !== 'undefined' && Array.isArray(STABLE_SCREENING_FALLBACK) && STABLE_SCREENING_FALLBACK.length > 0) {
    console.warn('[RECOVERY] SCREENING_DATA lỗi! Tự động kích hoạt STABLE_SCREENING_FALLBACK');
    data = STABLE_SCREENING_FALLBACK;
    isFallback = true;
    source = 'stable_file';
  } else if (typeof localStorage !== 'undefined' && localStorage.getItem) {
    try {
      const cached = localStorage.getItem('deepak_screening_backup_v2');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          data = parsed;
          isFallback = true;
          source = 'local_storage';
        }
      }
    } catch (e) {
      console.error('Error reading localStorage backup:', e);
    }
  }

  // Resolve auxiliary guidemap data
  const algorithm = (typeof GUIDEMAP_ALGORITHM !== 'undefined' && GUIDEMAP_ALGORITHM) 
    ? GUIDEMAP_ALGORITHM 
    : (typeof STABLE_GUIDEMAP_ALGORITHM !== 'undefined' ? STABLE_GUIDEMAP_ALGORITHM : null);

  const redFlags = (typeof RED_FLAGS_MASTER !== 'undefined' && Array.isArray(RED_FLAGS_MASTER)) 
    ? RED_FLAGS_MASTER 
    : (typeof STABLE_RED_FLAGS_MASTER !== 'undefined' ? STABLE_RED_FLAGS_MASTER : []);

  const labTests = (typeof LAB_TESTS_GUIDE !== 'undefined' && Array.isArray(LAB_TESTS_GUIDE)) 
    ? LAB_TESTS_GUIDE 
    : (typeof STABLE_LAB_TESTS_GUIDE !== 'undefined' ? STABLE_LAB_TESTS_GUIDE : []);

  const drugInduced = (typeof DRUG_INDUCED_PAIN_GUIDE !== 'undefined' && Array.isArray(DRUG_INDUCED_PAIN_GUIDE)) 
    ? DRUG_INDUCED_PAIN_GUIDE 
    : (typeof STABLE_DRUG_INDUCED_PAIN_GUIDE !== 'undefined' ? STABLE_DRUG_INDUCED_PAIN_GUIDE : []);

  const atlasCatalog = (typeof DEEPAK_ATLAS_CATALOG !== 'undefined' && Array.isArray(DEEPAK_ATLAS_CATALOG))
    ? DEEPAK_ATLAS_CATALOG
    : (typeof STABLE_DEEPAK_ATLAS_CATALOG !== 'undefined' && Array.isArray(STABLE_DEEPAK_ATLAS_CATALOG))
      ? STABLE_DEEPAK_ATLAS_CATALOG
      : [];

  return {
    modules: data,
    algorithm,
    redFlags,
    labTests,
    drugInduced,
    atlasCatalog,
    isFallback,
    source
  };
}

const resolvedScreening = resolveInitialScreeningData();

const screeningState = {
  activeMode: 'modules', // 'modules' | 'algorithm' | 'redflags' | 'labs' | 'drugs' | 'atlas'
  allModules: resolvedScreening.modules,
  filteredModules: [...resolvedScreening.modules],
  algorithm: resolvedScreening.algorithm,
  redFlags: resolvedScreening.redFlags,
  labTests: resolvedScreening.labTests,
  drugInduced: resolvedScreening.drugInduced,
  atlasCatalog: resolvedScreening.atlasCatalog || [],
  filteredAtlas: [...(resolvedScreening.atlasCatalog || [])],
  atlasChapterFilter: 'all',
  selectedModuleId: resolvedScreening.modules.length > 0 ? resolvedScreening.modules[0].id : null,
  activeFilter: 'all',
  searchQuery: '',
  theme: (typeof localStorage !== 'undefined' && localStorage.getItem) ? (localStorage.getItem('us_pain_theme') || 'light') : 'light',
  // Lightbox State
  currentModuleFigures: [],
  lightboxIndex: 0,
  // Interactive Guidemap Checklist State
  guidemapChecklist: {
    hasRedFlags: false,
    hasVisceral: false,
    hasDrugHistory: false,
    painOrigin: 'radicular' // 'radicular' | 'discogenic' | 'facet' | 'tendon' | 'capsular' | 'entrapment' | 'somatic'
  }
};

function initScreeningApp() {
  initTheme();
  setupEventListeners();
  updateCategoryCounts();
  applyFilters();
}

function initTheme() {
  document.documentElement.setAttribute('data-theme', screeningState.theme);
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      screeningState.theme = screeningState.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', screeningState.theme);
      localStorage.setItem('us_pain_theme', screeningState.theme);
      themeBtn.innerHTML = screeningState.theme === 'dark' 
        ? `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg> Giao diện Sáng`
        : `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg> Giao diện Tối`;
    });
  }
}

function setupEventListeners() {
  // Mode Navigation Tabs
  document.querySelectorAll('.mode-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      switchMode(btn.dataset.mode);
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      screeningState.searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
      if (clearBtn) {
        clearBtn.style.display = screeningState.searchQuery ? 'flex' : 'none';
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        screeningState.searchQuery = '';
        clearBtn.style.display = 'none';
        applyFilters();
      }
    });
  }

  // Category filter buttons
  document.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      screeningState.activeFilter = btn.dataset.cat;
      applyFilters();
    });
  });

  // Lightbox Close & Controls
  const closeLightboxBtn = document.getElementById('close-lightbox');
  const prevLightboxBtn = document.getElementById('prev-lightbox');
  const nextLightboxBtn = document.getElementById('next-lightbox');
  const lightbox = document.getElementById('image-lightbox');

  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', closeLightbox);
  }
  if (prevLightboxBtn) {
    prevLightboxBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      lightboxPrev();
    });
  }
  if (nextLightboxBtn) {
    nextLightboxBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      lightboxNext();
    });
  }
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard navigation for Lightbox
  document.addEventListener('keydown', (e) => {
    if (lightbox && !lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') lightboxPrev();
      else if (e.key === 'ArrowRight') lightboxNext();
    }
  });

  // Mobile Touch Swipe Gestures for Lightbox
  let touchStartX = 0;
  let touchEndX = 0;
  let touchStartY = 0;
  let touchEndY = 0;
  if (lightbox) {
    lightbox.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length > 0) {
        touchStartX = e.touches[0].screenX;
        touchStartY = e.touches[0].screenY;
      }
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;
        // Dominant horizontal swipe > 45px
        if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0) {
            lightboxNext(); // Vuốt sang trái -> xem ảnh tiếp
          } else {
            lightboxPrev(); // Vuốt sang phải -> xem ảnh trước
          }
        }
      }
    }, { passive: true });
  }
}

function switchMode(mode) {
  screeningState.activeMode = mode;

  // Toggle view visibility
  const views = {
    modules: document.getElementById('view-modules'),
    algorithm: document.getElementById('view-algorithm'),
    redflags: document.getElementById('view-redflags'),
    labs: document.getElementById('view-labs'),
    drugs: document.getElementById('view-drugs'),
    atlas: document.getElementById('view-atlas')
  };

  Object.keys(views).forEach(key => {
    if (views[key]) {
      if (key === mode) {
        views[key].classList.remove('hidden');
      } else {
        views[key].classList.add('hidden');
      }
    }
  });

  // Show/Hide category filter row based on mode
  const catFilterRow = document.getElementById('cat-filters-container');
  if (catFilterRow) {
    catFilterRow.style.display = (mode === 'modules') ? 'block' : 'none';
  }
  const quickPills = document.getElementById('symptom-quick-pills');
  if (quickPills) {
    quickPills.style.display = (mode === 'modules') ? 'block' : 'none';
  }

  // Update search input placeholder according to mode
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    if (mode === 'modules') {
      searchInput.placeholder = 'Tìm chuyên đề, triệu chứng, cờ đỏ, nghiệm pháp khám, thuốc, xét nghiệm (Ví dụ: cổ, ngực, thắt lưng, lasegue, spurling, statin, gout...)';
    } else if (mode === 'algorithm') {
      searchInput.placeholder = 'Tìm kiếm trong thuật toán 3 giai đoạn: tiêu chí cờ đỏ, đau tạng, cơ học, rối loạn cơ sinh học hệ vận động (Somatic Dysfunctions)...';
    } else if (mode === 'redflags') {
      searchInput.placeholder = 'Tìm kiếm trong cờ đỏ khẩn cấp: chùm đuôi ngựa, VBI, phình bóc tách ĐMC, nhiễm trùng mủ, u di căn...';
    } else if (mode === 'labs') {
      searchInput.placeholder = 'Tìm xét nghiệm cận lâm sàng: ESR, CRP, Acid Uric, Canxi, ALP, HLA-B27, RF, Anti-CCP, ANA, PSA, Bence-Jones...';
    } else if (mode === 'drugs') {
      searchInput.placeholder = 'Tìm thuốc gây đau cơ khớp: Statin, Quinolone, Corticoid, Aromatase inhibitors, Bisphosphonate, Hóa chất ung thư...';
    } else if (mode === 'atlas') {
      searchInput.placeholder = 'Tìm kiếm trong 279 ảnh Atlas Deepak: số hiệu (Fig 4.1, Fig 9.39...), trang, giải phẫu, nghiệm pháp...';
    }
  }

  // Re-run filter and render
  applyFilters();
}

function applyFilters() {
  const query = screeningState.searchQuery;
  const cat = screeningState.activeFilter;
  const mode = screeningState.activeMode;
  const countEl = document.getElementById('search-result-count');

  if (mode === 'modules') {
    screeningState.filteredModules = screeningState.allModules.filter(m => {
      // Category match
      let matchCat = true;
      if (cat === 'systemic') matchCat = (m.region === 'systemic');
      else if (cat === 'spine') matchCat = ['cervical', 'thoracic', 'lumbopelvic'].includes(m.region);
      else if (cat === 'upper') matchCat = ['shoulder', 'elbow_hand'].includes(m.region);
      else if (cat === 'lower') matchCat = ['hip', 'knee_foot'].includes(m.region);
      else if (cat !== 'all') matchCat = (m.region === cat);

      // Search query match
      let matchQuery = true;
      if (query) {
        const corpus = [
          m.title,
          m.title_vi,
          m.region_vi,
          m.chief_complaint || '',
          m.summary,
          JSON.stringify(m.red_flags || []),
          JSON.stringify(m.visceral_referrals || []),
          JSON.stringify(m.examination_procedures || []),
          JSON.stringify(m.differential_table || []),
          JSON.stringify(m.stage_2_somatic_dysfunctions || []),
          JSON.stringify(m.drug_induced || []),
          JSON.stringify(m.recommended_web1_procedures || [])
        ].join(' ').toLowerCase();

        matchQuery = corpus.includes(query);
      }

      return matchCat && matchQuery;
    });

    // Fix Selection & Filter Sync:
    if (screeningState.filteredModules.length > 0) {
      const stillPresent = screeningState.filteredModules.some(m => m.id === screeningState.selectedModuleId);
      if (!stillPresent) {
        screeningState.selectedModuleId = screeningState.filteredModules[0].id;
      }
      selectModule(screeningState.selectedModuleId, false);
    } else {
      screeningState.selectedModuleId = null;
      renderEmptyDetailState(query);
    }

    renderCards();

    if (countEl) {
      countEl.textContent = `${screeningState.filteredModules.length} / ${screeningState.allModules.length} vùng lâm sàng`;
    }
  } else if (mode === 'algorithm') {
    renderAlgorithmView();
    if (countEl) {
      countEl.textContent = `Thuật toán 3 Giai đoạn (Sebastian Guidemap)`;
    }
  } else if (mode === 'redflags') {
    const list = renderRedFlagsView();
    if (countEl) {
      countEl.textContent = `${list.length} / ${screeningState.redFlags.length} Cờ đỏ khẩn cấp`;
    }
  } else if (mode === 'labs') {
    const list = renderLabsView();
    if (countEl) {
      countEl.textContent = `${list.length} / ${screeningState.labTests.length} Xét nghiệm MSK`;
    }
  } else if (mode === 'drugs') {
    const list = renderDrugsView();
    if (countEl) {
      countEl.textContent = `${list.length} / ${screeningState.drugInduced.length} Nhóm thuốc gây đau`;
    }
  } else if (mode === 'atlas') {
    const list = renderAtlasView();
    if (countEl) {
      countEl.textContent = `${list.length} / ${(screeningState.atlasCatalog || []).length} Hình ảnh Atlas`;
    }
  }
}

function updateCategoryCounts() {
  const allCount = screeningState.allModules.length;
  const systemicCount = screeningState.allModules.filter(m => m.region === 'systemic').length;
  const spineCount = screeningState.allModules.filter(m => ['cervical', 'thoracic', 'lumbopelvic'].includes(m.region)).length;
  const upperCount = screeningState.allModules.filter(m => ['shoulder', 'elbow_hand'].includes(m.region)).length;
  const lowerCount = screeningState.allModules.filter(m => ['hip', 'knee_foot'].includes(m.region)).length;

  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setEl('count-all', allCount);
  setEl('count-systemic', systemicCount);
  setEl('count-spine', spineCount);
  setEl('count-upper', upperCount);
  setEl('count-lower', lowerCount);
}

function quickSelectModule(moduleId) {
  // Update quick pills active state
  document.querySelectorAll('.symptom-pill-btn').forEach(btn => {
    if (btn.dataset.mod === moduleId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Switch to modules mode if not already
  if (screeningState.activeMode !== 'modules') {
    const modBtn = document.querySelector('.mode-tab-btn[data-mode="modules"]');
    if (modBtn) modBtn.click();
  }

  // Ensure filter doesn't hide it
  const target = screeningState.allModules.find(m => m.id === moduleId);
  if (target && screeningState.activeFilter !== 'all') {
    const cat = screeningState.activeFilter;
    let match = true;
    if (cat === 'systemic') match = (target.region === 'systemic');
    else if (cat === 'spine') match = ['cervical', 'thoracic', 'lumbopelvic'].includes(target.region);
    else if (cat === 'upper') match = ['shoulder', 'elbow_hand'].includes(target.region);
    else if (cat === 'lower') match = ['hip', 'knee_foot'].includes(target.region);
    
    if (!match) {
      // Reset filter to all
      screeningState.activeFilter = 'all';
      document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.remove('active'));
      const allBtn = document.querySelector('.cat-filter-btn[data-cat="all"]');
      if (allBtn) allBtn.classList.add('active');
      applyFilters();
    }
  }

  selectModule(moduleId, true);

  // On mobile, scroll smoothly to detail
  if (window.innerWidth < 1024) {
    const detail = document.getElementById('screening-detail-container');
    if (detail) {
      detail.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function renderCards() {
  const grid = document.getElementById('screening-cards-grid');
  if (!grid) return;

  if (screeningState.filteredModules.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        <svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <p class="font-medium text-slate-600 dark:text-slate-300">Không tìm thấy vùng triệu chứng phù hợp</p>
        <p class="text-xs text-slate-400 mt-1">Thử tìm kiếm với từ khóa khác (ví dụ: cổ, ngực, vai, gối, thắt lưng, statin, cờ đỏ...)</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = screeningState.filteredModules.map((m, idx) => {
    const isSelected = screeningState.selectedModuleId === m.id;
    const rfCount = m.red_flags ? m.red_flags.length : 0;
    const testCount = m.examination_procedures ? m.examination_procedures.length : 0;
    const figCount = m.figures ? m.figures.length : 0;
    const web1Count = m.recommended_web1_procedures ? m.recommended_web1_procedures.length : 0;

    return `
      <div class="proc-card ${isSelected ? 'active-card' : ''}" onclick="selectModule('${m.id}')" style="cursor: pointer;">
        <div class="card-header-badge">
          <span class="badge-cat badge-${m.region}">
            ${m.icon || '📍'} ${m.region_vi}
          </span>
          <span class="badge-code font-bold">Vùng ${idx + 1}/8</span>
        </div>
        <h3 class="card-title text-base font-bold text-slate-800 dark:text-white mt-2 leading-snug">
          ${m.title_vi}
        </h3>
        ${m.chief_complaint ? `
          <div class="p-2 mt-2 rounded bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-[11px] text-amber-900 dark:text-amber-300 line-clamp-2">
            <strong>${m.chief_complaint}</strong>
          </div>
        ` : ''}
        <p class="card-snippet text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
          ${m.summary}
        </p>
        <div class="card-footer-tags mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 text-[11px]">
          <span class="text-rose-600 font-semibold bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded">🚨 ${rfCount} Cờ đỏ</span>
          ${testCount > 0 ? `<span class="text-teal-600 font-semibold bg-teal-50 dark:bg-teal-950/40 px-2 py-0.5 rounded">🩺 ${testCount} Nghiệm pháp</span>` : ''}
          ${figCount > 0 ? `<span class="text-blue-600 font-semibold bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded">🖼️ ${figCount} Atlas Bản Dương</span>` : `<span class="text-purple-600 font-semibold bg-purple-50 dark:bg-purple-950/40 px-2 py-0.5 rounded">📊 Bảng Ma Trận</span>`}
          ${web1Count > 0 ? `<span class="text-emerald-700 font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">💉 ${web1Count} Thủ thuật Web 1</span>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function renderEmptyDetailState(query) {
  const detailContainer = document.getElementById('screening-detail-container');
  if (!detailContainer) return;

  detailContainer.innerHTML = `
    <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-12 text-center text-slate-400 shadow-sm">
      <svg class="w-16 h-16 mx-auto mb-4 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
      <h3 class="text-base font-bold text-slate-700 dark:text-slate-200">Không tìm thấy nội dung phù hợp</h3>
      <p class="text-xs text-slate-500 mt-1 max-w-md mx-auto">
        Không có chuyên đề lâm sàng nào khớp với từ khóa "<strong>${query || ''}</strong>". Hãy thử tìm theo tên vùng, tên nghiệm pháp hoặc tên thuốc.
      </p>
      <button onclick="document.getElementById('clear-search-btn').click()" class="mt-4 btn btn-outline text-xs text-teal-700 font-semibold">
        Xóa bộ lọc tìm kiếm
      </button>
    </div>
  `;
}

// Render embedded mini figures directly inside sections
function renderEmbeddedFigures(figures) {
  if (!figures || figures.length === 0) return '';
  return `
    <div class="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800">
      <div class="text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
        <span>📸</span> Hình Ảnh Lâm Sàng Trực Quan (${figures.length} hình trích từ Deepak Sebastian):
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${figures.map(fig => `
          <div class="figure-mini-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden group cursor-pointer shadow-2xs" onclick="openLightboxByFile('${fig.file}', '${escapeHtml(fig.caption_vi || fig.caption_en)}')">
            <div class="h-36 overflow-hidden relative flex items-center justify-center p-1.5 bg-slate-50 dark:bg-slate-950">
              <img src="${fig.file}" alt="${escapeHtml(fig.caption_en)}" loading="lazy" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200">
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                <span class="opacity-0 group-hover:opacity-100 bg-slate-900/85 text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow">
                  🔍 Xem phóng to
                </span>
              </div>
            </div>
            <div class="p-2 text-[11px] text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
              <span class="font-bold text-teal-700 dark:text-teal-400 font-mono">${fig.fig_number || ('Trang ' + fig.page)}:</span> ${escapeHtml(fig.caption_vi || fig.caption_en)}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// UpToDate / BMJ Best Practice 3-Step Accordion Guidemap Renderer
function renderScreeningDetail(module) {
  if (!module) return '';

  const redFlags = module.red_flags || [];
  const visceralReferrals = module.visceral_referrals || [];
  const drugInduced = module.drug_induced || [];
  const provocativeTests = module.provocative_tests || module.examination_procedures || [];
  const somaticDysfunctions = module.stage_2_somatic_dysfunctions || [];
  const differentialMatrix = module.differential_matrix || module.differential_table || [];
  const web1ProceduresList = module.recommended_web1_procedures || [];
  const figuresList = module.figures || [];

  // Step 1: Visceral referrals table rows
  const visceralRowsHtml = visceralReferrals.map(ref => `
    <tr class="border-b border-amber-100/60 dark:border-amber-950/40 text-xs hover:bg-amber-50/50 dark:hover:bg-amber-950/30 transition-colors">
      <td class="py-2.5 px-3 font-bold text-amber-900 dark:text-amber-300 align-top">🫀 ${ref.source || ref.organ}</td>
      <td class="py-2.5 px-3 text-slate-700 dark:text-slate-300 align-top leading-relaxed">${ref.pattern}</td>
      <td class="py-2.5 px-3 text-amber-800 dark:text-amber-400 italic align-top leading-relaxed">${ref.differential}</td>
    </tr>
  `).join('');

  // Step 1: Red flags list with embedded pathology figures
  const redFlagsListHtml = redFlags.map(rf => `
    <div class="bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 rounded-lg p-3.5 shadow-2xs">
      <div class="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm">
        <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
        <span>🚨 ${rf.category}</span>
      </div>
      <div class="mt-2 text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
        <strong class="text-rose-900 dark:text-rose-200">Dấu hiệu nhận biết:</strong> ${rf.signs}
      </div>
      <div class="mt-2 text-xs text-rose-800 dark:text-rose-300 bg-white/80 dark:bg-black/40 p-2.5 rounded border border-rose-200/60 shadow-2xs">
        <strong>⚡ Xử trí khẩn cấp:</strong> ${rf.action}
      </div>
      ${renderEmbeddedFigures(rf.figures)}
    </div>
  `).join('');

  // Step 2: Provocative physical examination tests with Sn/Sp badges and genuine doctor maneuver photos
  const testsHtml = provocativeTests.map((t, idx) => `
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 shadow-sm hover:border-teal-300 dark:hover:border-teal-700 transition-colors">
      <div class="flex flex-wrap items-start justify-between gap-2 pb-2.5 border-b border-slate-100 dark:border-slate-800">
        <h5 class="font-bold text-teal-800 dark:text-teal-300 text-sm flex items-center gap-1.5">
          <span class="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs flex items-center justify-center font-mono font-bold">${idx + 1}</span>
          <span>${t.name}</span>
        </h5>
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="text-[10px] font-mono font-bold bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 px-2 py-0.5 rounded shadow-2xs">
            Độ nhạy (Sn): ${t.sensitivity || (t.accuracy && t.accuracy.sn) || 'N/A'}
          </span>
          <span class="text-[10px] font-mono font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-2 py-0.5 rounded shadow-2xs">
            Độ đặc hiệu (Sp): ${t.specificity || (t.accuracy && t.accuracy.sp) || 'N/A'}
          </span>
        </div>
      </div>
      ${(t.clinical_role || t.diagnostic_role) ? `
        <div class="text-[11px] font-medium text-slate-600 dark:text-slate-400 mt-2 italic flex items-center gap-1.5">
          <span>🎯</span>
          <span><strong>Vai trò chẩn đoán:</strong> ${t.clinical_role || t.diagnostic_role}</span>
        </div>
      ` : ''}
      <div class="text-xs text-slate-700 dark:text-slate-300 mt-2.5 whitespace-pre-line leading-relaxed">
        <strong class="text-slate-900 dark:text-white">Kỹ thuật thao tác:</strong> ${t.technique}
      </div>
      <div class="text-xs text-emerald-800 dark:text-emerald-300 bg-emerald-50/80 dark:bg-emerald-950/30 p-2.5 rounded mt-2.5 border border-emerald-100 dark:border-emerald-900 leading-relaxed">
        <strong>Ý nghĩa lâm sàng:</strong> ${t.significance}
      </div>
      ${renderEmbeddedFigures(t.figures)}
    </div>
  `).join('');

  // Step 2: Somatic Dysfunctions
  const somaticHtml = somaticDysfunctions.length > 0 ? `
    <div class="mt-4 p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40">
      <h4 class="font-bold text-purple-900 dark:text-purple-300 text-xs uppercase tracking-wide mb-2 flex items-center gap-1.5">
        <span>🧬</span> Rối Loạn Cơ Sinh Học Hệ Vận Động (Somatic Dysfunctions) Chuyên Sâu (Deepak Somatic Diagnosis)
      </h4>
      <p class="text-xs text-slate-600 dark:text-slate-400 mb-2.5 italic">
        Các sai lệch cơ sinh học trượt khớp, vặn trục khung chậu, hoặc khóa diện khớp gây đau cơ học mạn tính hoặc tái phát:
      </p>
      <ul class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-inside">
        ${somaticDysfunctions.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>
  ` : '';

  // Step 3: Differential Matrix table rows with Web 1 Deep-links
  const diffRows = differentialMatrix.map(row => `
    <tr class="border-b border-slate-100 dark:border-slate-800 text-xs hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
      <td class="py-2.5 px-3 font-semibold text-teal-900 dark:text-teal-300 align-top">${row.condition}</td>
      <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300 align-top">${row.onset}</td>
      <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300 align-top">${row.aggravating || row.aggravating_relieving || ''}</td>
      <td class="py-2.5 px-3 text-indigo-700 dark:text-indigo-400 font-medium align-top">${row.confirmatory_test || 'Khám nghiệm pháp chuyên biệt'}</td>
      <td class="py-2.5 px-3 text-amber-800 dark:text-amber-400 font-medium align-top">${row.gold_standard || 'Cận lâm sàng chuyên sâu'}</td>
      <td class="py-2.5 px-3 font-medium text-emerald-700 dark:text-emerald-400 align-top">${row.key_differentiator || row.distinguishing_pearl || ''}</td>
      <td class="py-2.5 px-3 align-top">
        ${row.web1_procedure_id ? `
          <a href="index.html?proc=${row.web1_procedure_id}" class="inline-flex items-center gap-1 font-bold text-teal-700 dark:text-teal-300 hover:text-teal-600 dark:hover:text-teal-200 bg-teal-50 dark:bg-teal-950/60 px-2 py-1 rounded border border-teal-200 dark:border-teal-800 text-[11px] whitespace-nowrap shadow-2xs" title="Mở quy trình tiêm Web 1: ${row.web1_procedure_id}">
            <span>💉 Tiêm Web 1</span>
            <span class="text-[10px] font-mono">↗</span>
          </a>
        ` : `<span class="text-[11px] text-slate-400 italic">Bảo tồn / CLS</span>`}
      </td>
    </tr>
  `).join('');

  // Step 3: Web 1 Recommended Procedures Grid
  const web1ProceduresHtml = web1ProceduresList.length > 0 ? `
    <div class="mt-4 pt-3 border-t border-teal-200/80 dark:border-teal-800/60">
      <h5 class="text-xs font-bold text-teal-900 dark:text-teal-300 uppercase tracking-wide mb-2.5 flex items-center gap-1.5">
        <span>💉</span> Các Quy Trình Tiêm Siêu Âm Can Thiệp Web 1 Khuyến Cáo Cho Vùng Này (${web1ProceduresList.length} Quy trình):
      </h5>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
        ${web1ProceduresList.map(proc => `
          <a href="index.html?proc=${proc.id}" class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-teal-200 dark:border-teal-800 hover:border-teal-500 dark:hover:border-teal-400 transition-all flex flex-col justify-between group shadow-2xs" title="Nhảy sang Cẩm Nang Tiêm Can Thiệp Web 1: ${escapeHtml(proc.nameVi)}">
            <div>
              <div class="font-bold text-teal-800 dark:text-teal-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 flex items-center justify-between text-xs sm:text-sm">
                <span>💉 ${proc.nameVi} (Mã: ${proc.id})</span>
                <span class="text-xs text-teal-600 font-mono">↗</span>
              </div>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1.5 leading-snug">${proc.role || proc.indication || ''}</p>
            </div>
            <div class="text-[10px] text-slate-400 font-mono mt-2 pt-1 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span>Mã: ${proc.id}</span>
              <span class="text-teal-600 font-bold group-hover:translate-x-0.5 transition-transform">Mở quy trình →</span>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  ` : '';

  // Step 3: Intervention Guidance Box
  const interventionHtml = module.stage_3_guidemap_intervention ? `
    <div class="mt-4 p-4 rounded-xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800">
      <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
        <h4 class="font-bold text-teal-900 dark:text-teal-300 text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2">
          <span>🎯</span> Định Hướng Can Thiệp Lâm Sàng & Kết Nối Cẩm Nang Tiêm Web 1 (Philip Peng)
        </h4>
        <a href="index.html" class="btn btn-primary text-xs font-semibold px-3 py-1 flex items-center gap-1.5" title="Mở Cẩm nang Siêu âm can thiệp khớp Philip Peng">
          💉 Mở Web 1 Philip Peng ↗
        </a>
      </div>
      <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
        ${module.stage_3_guidemap_intervention}
      </p>
      ${web1ProceduresHtml}
    </div>
  ` : web1ProceduresHtml;

  // Supplementary Section 7: Atlas Figures
  const figuresHtml = figuresList.map((fig, idx) => {
    const captionText = fig.caption_vi || fig.caption_en || `Hình minh họa trang ${fig.page}`;
    return `
      <div class="figure-card bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden group">
        <div class="h-44 overflow-hidden relative cursor-pointer" onclick="openLightboxIndex(${idx})">
          <img src="${fig.file}" alt="${escapeHtml(captionText)}" loading="lazy" class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-200">
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
            <span class="opacity-0 group-hover:opacity-100 bg-slate-900/85 text-white text-xs px-2.5 py-1 rounded shadow-md flex items-center gap-1">
              🔍 Phóng to (Ảnh ${idx + 1}/${figuresList.length})
            </span>
          </div>
        </div>
        <div class="p-2.5 text-[11px] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <span class="font-bold text-teal-700 dark:text-teal-400">${fig.fig_number || ('Trang ' + fig.page)}:</span> ${escapeHtml(captionText)}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      <!-- Mobile Return Bar -->
      <div class="lg:hidden mb-4 flex items-center justify-between bg-teal-50 dark:bg-teal-950/60 p-2.5 rounded-lg border border-teal-200 dark:border-teal-800">
        <button onclick="scrollToCardsList()" class="btn btn-outline text-xs text-teal-800 dark:text-teal-200 font-semibold flex items-center gap-1.5 py-1 px-3 bg-white dark:bg-slate-900 shadow-2xs">
          ← Danh Sách Vùng Đau
        </button>
        <span class="text-xs font-bold text-teal-800 dark:text-teal-200 flex items-center gap-1">
          ${module.icon || '📍'} ${module.region_vi}
        </span>
      </div>

      <!-- Title & Header -->
      <div class="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <span class="badge-cat badge-${module.region}">
              ${module.icon || '📍'} ${module.region_vi}
            </span>
            <span class="text-xs text-slate-400 font-bold">Vùng Triệu Chứng Lâm Sàng</span>
          </div>
          <h2 class="text-xl font-bold text-slate-900 dark:text-white leading-tight">
            ${module.title_vi}
          </h2>
          <p class="text-xs text-slate-500 italic mt-0.5">${module.title}</p>
          <p class="text-xs text-teal-700 dark:text-teal-400 font-medium mt-1">📚 ${module.author}</p>
        </div>
        <a href="index.html" class="btn btn-outline text-xs text-teal-700 font-semibold flex items-center gap-1.5" style="border-color: #0d9488;" title="Mở cẩm nang quy trình tiêm siêu âm tương ứng trong Web 1">
          💉 Sang Cẩm Nang Tiêm Can Thiệp ↗
        </a>
      </div>

      <!-- Chief Complaint Highlight Box -->
      ${module.chief_complaint ? `
        <div class="my-4 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/25 border border-amber-200 dark:border-amber-900/40">
          <div class="flex items-center gap-1.5 font-bold text-xs text-amber-900 dark:text-amber-300 uppercase tracking-wide mb-1">
            <span>🗣️</span> Phàn Nàn Chính & Biểu Hiện Lâm Sàng Thường Gặp
          </div>
          <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            ${module.chief_complaint}
          </p>
        </div>
      ` : ''}

      <!-- Clinical Summary / Philosophy -->
      <div class="my-4 p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/50">
        <h4 class="text-xs font-bold uppercase tracking-wider text-teal-900 dark:text-teal-300 mb-1.5">
          💡 Nguyên Lý Sàng Lọc Lâm Sàng (Clinical Screening Concept)
        </h4>
        <p class="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
          ${module.summary}
        </p>
      </div>

      <!-- Accordion Header & Controls -->
      <div class="flex items-center justify-between mt-6 mb-3 text-xs">
        <div class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
          <span>🧭</span>
          <span>Cây Quyết Định Lâm Sàng 3 Bước (UpToDate / BMJ Best Practice)</span>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" onclick="toggleGuidemapSteps(true)" class="text-[11px] font-semibold text-teal-700 dark:text-teal-300 hover:underline cursor-pointer">Mở tất cả</button>
          <span class="text-slate-300 dark:text-slate-600">|</span>
          <button type="button" onclick="toggleGuidemapSteps(false)" class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:underline cursor-pointer">Thu gọn</button>
        </div>
      </div>

      <!-- BƯỚC 1: SÀNG LỌC CỜ ĐỎ & ĐAU CHUYỂN TẠNG (RED FLAGS & VISCERAL RULE-OUT) -->
      <details class="guidemap-accordion-step step-redflags">
        <summary class="accordion-step-summary">
          <div class="step-summary-left">
            <span class="step-number-badge badge-step-1">Bước 1</span>
            <span class="text-sm font-bold text-rose-900 dark:text-rose-200">Sàng Lọc Cờ Đỏ & Đau Chuyển Tạng (Red Flags & Visceral Rule-out)</span>
          </div>
          <div class="step-summary-right">
            <span class="text-[11px] font-semibold text-rose-800 dark:text-rose-300 bg-rose-100/80 dark:bg-rose-950/60 px-2.5 py-0.5 rounded-full border border-rose-200 dark:border-rose-900">
              ${redFlags.length} Cờ đỏ • ${visceralReferrals.length} Tạng chuyển đau
            </span>
            <span class="text-xs text-rose-600 dark:text-rose-400 font-mono transition-transform duration-200">▾</span>
          </div>
        </summary>
        <div class="accordion-step-content">
          <div class="step-intro-note border-l-4 border-rose-500">
            <strong>Mục tiêu lâm sàng:</strong> Loại trừ tuyệt đối các bệnh lý ngoại khoa cấp cứu, gãy xương mất vững, chèn ép tủy sống hoặc đau ác tính/chuyển tạng nguy hiểm tính mạng trước khi thực hiện bất kỳ can thiệp cơ xương khớp nào.
          </div>

          ${module.stage_1_systemic_red_flags ? `
            <div class="mb-4 p-3 rounded-lg bg-rose-100/60 dark:bg-rose-950/50 border border-rose-300 dark:border-rose-800 text-xs text-rose-950 dark:text-rose-200">
              <strong>⚠️ Cảnh báo toàn thân:</strong> ${module.stage_1_systemic_red_flags}
            </div>
          ` : ''}

          <!-- Red Flags List -->
          <div class="space-y-3 mb-5">
            <div class="flex items-center gap-2 mb-1">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse"></span>
              <h4 class="font-bold text-rose-700 dark:text-rose-400 text-xs uppercase tracking-wide">
                1. Hệ Thống Cờ Đỏ Khẩn Cấp Cần Loại Trừ Trước Khi Can Thiệp (Red Flags)
              </h4>
            </div>
            ${redFlagsListHtml}
          </div>

          <!-- Visceral Referrals Table -->
          ${visceralReferrals.length > 0 ? `
            <div class="mb-5">
              <div class="flex items-center gap-1.5 font-bold text-xs text-amber-900 dark:text-amber-300 uppercase tracking-wide mb-2">
                <span>🫀</span> Bảng Đau Quy Chiếu Từ Nội Tạng (Visceral Referral Patterns)
              </div>
              <div class="screening-table-wrapper overflow-x-auto rounded-lg border border-amber-200/80 dark:border-amber-900/60 shadow-2xs">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="bg-amber-100/70 dark:bg-amber-950/50 text-[11px] font-bold text-amber-950 dark:text-amber-200 uppercase tracking-wider">
                      <th class="py-2.5 px-3 border-b border-amber-200 dark:border-amber-900/80" style="min-width: 170px;">Tạng / Bệnh lý nghi ngờ</th>
                      <th class="py-2.5 px-3 border-b border-amber-200 dark:border-amber-900/80" style="min-width: 250px;">Kiểu quy chiếu đau (Pain Pattern)</th>
                      <th class="py-2.5 px-3 border-b border-amber-200 dark:border-amber-900/80" style="min-width: 240px;">Phân biệt lâm sàng với đau cơ khớp</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${visceralRowsHtml}
                  </tbody>
                </table>
              </div>
            </div>
          ` : ''}

          <!-- Drug-Induced Pain -->
          ${drugInduced.length > 0 ? `
            <div class="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/40">
              <div class="font-bold text-indigo-900 dark:text-indigo-300 text-xs uppercase tracking-wide mb-2 flex items-center gap-1.5">
                <span>💊</span> Đau Do Tác Dụng Phụ Của Thuốc Cần Khai Thác Tiền Sử (Drug-Induced Pain)
              </div>
              <ul class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                ${drugInduced.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      </details>

      <!-- BƯỚC 2: NGHIỆM PHÁP KHÁM THỰC THỂ PHÂN BIỆT (PROVOCATIVE PHYSICAL TESTS) -->
      <details class="guidemap-accordion-step step-provocative">
        <summary class="accordion-step-summary">
          <div class="step-summary-left">
            <span class="step-number-badge badge-step-2">Bước 2</span>
            <span class="text-sm font-bold text-teal-900 dark:text-teal-200">Nghiệm Pháp Khám Thực Thể Phân Biệt (Provocative Physical Tests)</span>
          </div>
          <div class="step-summary-right">
            <span class="text-[11px] font-semibold text-teal-800 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-950/60 px-2.5 py-0.5 rounded-full border border-teal-200 dark:border-teal-900">
              ${provocativeTests.length} Nghiệm pháp
            </span>
            <span class="text-xs text-teal-600 dark:text-teal-400 font-mono transition-transform duration-200">▾</span>
          </div>
        </summary>
        <div class="accordion-step-content">
          <div class="step-intro-note border-l-4 border-teal-500">
            <strong>Mục tiêu lâm sàng:</strong> Thực hiện các nghiệm pháp khiêu khích căng cơ học/thần kinh có bằng chứng, áp dụng quy tắc <em>SnNOut</em> (Độ nhạy cao loại trừ bệnh khi âm tính) và <em>SpPIn</em> (Độ đặc hiệu cao khẳng định bệnh khi dương tính) để khu trú chính xác cấu trúc tổn thương.
          </div>

          <!-- Provocative Test Cards -->
          <div class="space-y-3 mb-4">
            <div class="flex items-center gap-2 mb-1">
              <span class="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
              <h4 class="font-bold text-teal-800 dark:text-teal-300 text-xs uppercase tracking-wide">
                2. Các Nghiệm Pháp Khám Thực Thể Phân Biệt (Provocative Tests)
              </h4>
            </div>
            ${testsHtml}
          </div>

          <!-- Somatic Dysfunctions -->
          ${somaticHtml}
        </div>
      </details>

      <!-- BƯỚC 3: MA TRẬN PHÂN BIỆT & ĐỀ XUẤT CAN THIỆP (DIFFERENTIAL MATRIX & INTERVENTION) -->
      <details class="guidemap-accordion-step step-matrix">
        <summary class="accordion-step-summary">
          <div class="step-summary-left">
            <span class="step-number-badge badge-step-3">Bước 3</span>
            <span class="text-sm font-bold text-indigo-900 dark:text-indigo-200">Ma Trận Phân Biệt & Đề Xuất Can Thiệp (Differential Matrix & Intervention)</span>
          </div>
          <div class="step-summary-right">
            <span class="text-[11px] font-semibold text-indigo-800 dark:text-indigo-300 bg-indigo-100/80 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-900">
              ${differentialMatrix.length} Bệnh lý đối chiếu
            </span>
            <span class="text-xs text-indigo-600 dark:text-indigo-400 font-mono transition-transform duration-200">▾</span>
          </div>
        </summary>
        <div class="accordion-step-content">
          <div class="step-intro-note border-l-4 border-indigo-500">
            <strong>Mục tiêu lâm sàng:</strong> Đối chiếu các bệnh lý tương tự cùng vùng đau dựa trên khởi phát, yếu tố tăng/giảm, nghiệm pháp khẳng định và tiêu chuẩn vàng cận lâm sàng; từ đó lựa chọn đúng kỹ thuật tiêm siêu âm can thiệp tại Web 1.
          </div>

          <!-- Differential Comparison Matrix Table -->
          <div class="mb-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              <h4 class="font-bold text-slate-800 dark:text-slate-200 text-xs uppercase tracking-wide">
                3. Bảng Đối Chiếu Chẩn Đoán Phân Biệt Lâm Sàng Chuyên Sâu (Differential Table)
              </h4>
            </div>
            <div class="screening-table-wrapper overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-slate-50 dark:bg-slate-800 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    <th class="py-2.5 px-3 border-b border-slate-200 dark:border-slate-700" style="min-width: 170px;">Tình trạng bệnh lý</th>
                    <th class="py-2.5 px-3 border-b border-slate-200 dark:border-slate-700" style="min-width: 140px;">Khởi phát</th>
                    <th class="py-2.5 px-3 border-b border-slate-200 dark:border-slate-700" style="min-width: 150px;">Yếu tố tăng/giảm</th>
                    <th class="py-2.5 px-3 border-b border-slate-200 dark:border-slate-700 text-indigo-700 dark:text-indigo-400" style="min-width: 160px;">Nghiệm pháp khẳng định</th>
                    <th class="py-2.5 px-3 border-b border-slate-200 dark:border-slate-700 text-amber-800 dark:text-amber-400" style="min-width: 170px;">Tiêu chuẩn vàng CLS</th>
                    <th class="py-2.5 px-3 border-b border-slate-200 dark:border-slate-700 text-emerald-700 dark:text-emerald-400" style="min-width: 180px;">Dấu hiệu phân biệt cốt lõi</th>
                    <th class="py-2.5 px-3 border-b border-slate-200 dark:border-slate-700 text-teal-700 dark:text-teal-300" style="min-width: 130px;">Can thiệp Web 1</th>
                  </tr>
                </thead>
                <tbody>
                  ${diffRows}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Targeted Intervention & Web 1 Cross Link -->
          ${interventionHtml}
        </div>
      </details>

      <!-- SECTION 7: EXPANDABLE ATLAS FIGURES (COLLAPSED BY DEFAULT FOR COMPACT READING) -->
      ${figuresList.length > 0 ? `
        <details class="mt-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
          <summary class="cursor-pointer p-4 font-bold text-sm text-teal-900 dark:text-teal-300 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors select-none">
            <div class="flex items-center gap-2">
              <span>📚</span>
              <span>Thư Viện Atlas Toàn Bộ Hình Ảnh Bổ Trợ Vùng ${module.region_vi} (${figuresList.length} Hình Dương Bản)</span>
            </div>
            <span class="text-xs font-semibold text-teal-700 dark:text-teal-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800 shadow-2xs">Bấm để mở rộng tra cứu thêm ▾</span>
          </summary>
          <div class="p-4 pt-2 border-t border-slate-200 dark:border-slate-800">
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-3 italic">
              Thư viện tra cứu bổ trợ: Toàn bộ ảnh giải phẫu, cơ sinh học và nghiệm pháp trích xuất nguyên bản từ giáo trình GS. Deepak Sebastian (đã chuẩn hóa dương bản 100%):
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${figuresHtml}
            </div>
          </div>
        </details>
      ` : ''}
    </div>
  `;
}

function selectModule(moduleId, updateCards = true) {
  screeningState.selectedModuleId = moduleId;
  if (updateCards) {
    renderCards();
  }

  // Update quick pills active state
  document.querySelectorAll('.symptom-pill-btn').forEach(btn => {
    if (btn.dataset.mod === moduleId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const module = screeningState.allModules.find(m => m.id === moduleId);
  if (!module) return;

  // Store figures for lightbox navigation
  screeningState.currentModuleFigures = module.figures || [];

  const detailContainer = document.getElementById('screening-detail-container');
  if (!detailContainer) return;

  detailContainer.innerHTML = renderScreeningDetail(module);

  // Scroll smoothly to detail on mobile
  if (window.innerWidth < 1024) {
    detailContainer.scrollIntoView({ behavior: 'smooth' });
  }
}

function toggleGuidemapSteps(open) {
  if (typeof document === 'undefined') return;
  const steps = document.querySelectorAll('.guidemap-accordion-step');
  steps.forEach(step => {
    if (open) {
      step.setAttribute('open', '');
    } else {
      step.removeAttribute('open');
    }
  });
}

function scrollToCardsList() {
  const grid = document.getElementById('screening-cards-grid');
  if (grid) {
    grid.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function openLightboxByFile(filePath, captionText) {
  let idx = (screeningState.currentModuleFigures || []).findIndex(f => f.file === filePath);
  if (idx !== -1) {
    openLightboxIndex(idx);
    return;
  }
  
  const lightbox = document.getElementById('image-lightbox');
  const img = document.getElementById('lightbox-img');
  const desc = document.getElementById('lightbox-desc');
  const metaEl = document.getElementById('lightbox-springer');
  const counterEl = document.getElementById('lightbox-counter');

  if (lightbox && img) {
    img.src = filePath;
    if (desc) desc.textContent = captionText || 'Hình ảnh lâm sàng GS. Deepak Sebastian';
    if (metaEl) {
      metaEl.innerHTML = `<span>Giáo trình GS. Deepak Sebastian: Differential Screening of Regional Pain in Musculoskeletal</span>`;
    }
    if (counterEl) {
      counterEl.textContent = 'Hình ảnh minh họa';
    }
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

// ----------------------------------------------------
// LIGHTBOX ATLAS GALLERY NAVIGATION
// ----------------------------------------------------
function openLightboxIndex(index) {
  const gallery = screeningState.currentModuleFigures;
  if (!gallery || gallery.length === 0) return;

  // Circular bounds wrap
  if (index < 0) index = gallery.length - 1;
  if (index >= gallery.length) index = 0;

  screeningState.lightboxIndex = index;
  const fig = gallery[index];

  const lightbox = document.getElementById('image-lightbox');
  const img = document.getElementById('lightbox-img');
  const desc = document.getElementById('lightbox-desc');
  const metaEl = document.getElementById('lightbox-springer');
  const counterEl = document.getElementById('lightbox-counter');

  const captionText = fig.caption_vi || fig.caption_en || (fig.captions && fig.captions.length > 0 ? fig.captions[0] : `Hình minh họa trang ${fig.page}`);

  if (lightbox && img) {
    img.src = fig.file;
    if (desc) desc.textContent = captionText;
    if (metaEl) {
      metaEl.innerHTML = `<span>📖 Trang ${fig.page}</span> &bull; <span>Giáo trình GS. Deepak Sebastian: Differential Screening of Regional Pain in Musculoskeletal</span>`;
    }
    if (counterEl) {
      counterEl.textContent = `Hình ${index + 1} / ${gallery.length}`;
    }
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function lightboxPrev() {
  openLightboxIndex(screeningState.lightboxIndex - 1);
}

function lightboxNext() {
  openLightboxIndex(screeningState.lightboxIndex + 1);
}

function closeLightbox() {
  const lightbox = document.getElementById('image-lightbox');
  if (lightbox) {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// ----------------------------------------------------
// VIEW 2: 3-STAGE DECISION ALGORITHM GUIDEMAP WIZARD
// ----------------------------------------------------
function renderAlgorithmView() {
  const container = document.getElementById('algorithm-container');
  if (!container || !screeningState.algorithm) return;

  const algo = screeningState.algorithm;
  const query = screeningState.searchQuery;

  const stagesHtml = algo.stages.map(st => {
    // Filter steps if query
    const filteredSteps = st.steps.filter(step => {
      if (!query) return true;
      const corpus = `${st.name} ${step.title} ${JSON.stringify(step.criteria || [])} ${JSON.stringify(step.options || [])} ${JSON.stringify(step.branches || [])} ${JSON.stringify(step.decision || {})}`.toLowerCase();
      return corpus.includes(query);
    });

    if (filteredSteps.length === 0 && query) {
      return '';
    }

    return `
      <div class="algo-stage-card">
        <div class="flex items-center justify-between mb-2">
          <span class="algo-stage-badge ${st.stage === 1 ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300' : (st.stage === 2 ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' : 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300')}">
            Giai Đoạn ${st.stage}
          </span>
        </div>
        <h3 class="text-base font-bold text-slate-900 dark:text-white">
          ${st.name}
        </h3>
        <p class="text-xs text-slate-500 italic mt-0.5 mb-3">${st.subtitle}</p>

        ${filteredSteps.map(step => `
          <div class="bg-slate-50 dark:bg-slate-800/60 rounded-lg p-3.5 mb-3 border border-slate-200 dark:border-slate-700/60">
            <h4 class="text-xs font-bold text-teal-800 dark:text-teal-300 mb-2">
              ${step.step_id ? `Bước ${step.step_id}: ` : ''}${step.title}
            </h4>
            
            ${step.criteria ? `
              <ul class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-inside mb-3">
                ${step.criteria.map(c => `<li>${c}</li>`).join('')}
              </ul>
            ` : ''}

            ${step.options ? `
              <div class="grid grid-cols-1 gap-2 text-xs text-slate-700 dark:text-slate-300 mb-2">
                ${step.options.map(opt => `
                  <div class="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    ${opt}
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${step.branches ? `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mt-2">
                ${step.branches.map(b => `
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                    <div>
                      <h5 class="font-bold text-teal-800 dark:text-teal-300 text-xs mb-1">${b.type}</h5>
                      <p class="text-[11px] text-slate-600 dark:text-slate-400 mb-2"><strong>Chỉ định:</strong> ${b.indication}</p>
                    </div>
                    <div class="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded">
                      ${b.action}
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${step.decision ? `
              <div class="text-xs p-2.5 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 flex flex-col sm:flex-row justify-between gap-2">
                <span class="text-rose-700 dark:text-rose-400"><strong>🚨 Nếu Có Bất Kỳ Tiêu Chí Nào:</strong> ${step.decision.positive}</span>
                <span class="text-teal-700 dark:text-teal-400"><strong>✅ Nếu Không Có:</strong> ${step.decision.negative}</span>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }).filter(Boolean).join('');

  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      <div class="mb-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 class="text-xl font-bold text-slate-900 dark:text-white">
            🌲 Cây Quyết Định & Thuật Toán Sàng Lọc Lâm Sàng 3 Giai Đoạn (Sebastian Guidemap Algorithm)
          </h2>
          <p class="text-xs text-slate-500 mt-1">
            Bản đồ chỉ dẫn ra quyết định lâm sàng từng bước khi tiếp cận ca đau khớp, đau cơ hoặc đau cột sống khó, không điển hình hoặc kháng trị.
          </p>
        </div>
        <a href="index.html" class="btn btn-outline text-xs text-teal-700 font-semibold" style="border-color: #0d9488;">
          💉 Sang Cẩm Nang Tiêm Can Thiệp ↗
        </a>
      </div>

      <!-- Interactive Checklist Box -->
      <div class="interactive-guidemap-box">
        <h4 class="text-sm font-bold text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-2">
          <span>🩺</span> Bộ Kiểm Tra Sàng Lọc Tương Tác 3 Giai Đoạn (Interactive Guidemap Wizard)
        </h4>
        <p class="text-xs text-slate-600 dark:text-slate-400 mb-4">
          Tích chọn các yếu tố nghi ngờ của bệnh nhân và nguồn gốc cơ sinh học để nhận khuyến cáo điều trị và chỉ dẫn thủ thuật tương ứng trong Web 1:
        </p>

        <!-- Stage 1 Inputs -->
        <div class="mb-3">
          <div class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            Giai đoạn 1: Rà soát yếu tố Cờ đỏ & Căn nguyên toàn thân
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <label class="flex items-center gap-2 p-2.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer">
              <input type="checkbox" id="chk-rf" ${screeningState.guidemapChecklist.hasRedFlags ? 'checked' : ''} onchange="updateInteractiveGuidemap()">
              <span class="text-rose-700 dark:text-rose-400 font-semibold">🚨 Cờ đỏ (Sốt, sụt cân, liệt, đau đêm)</span>
            </label>
            <label class="flex items-center gap-2 p-2.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer">
              <input type="checkbox" id="chk-visceral" ${screeningState.guidemapChecklist.hasVisceral ? 'checked' : ''} onchange="updateInteractiveGuidemap()">
              <span class="text-amber-700 dark:text-amber-400 font-semibold">🫀 Đau quy chiếu tạng (Tim, mật, tụy, thận)</span>
            </label>
            <label class="flex items-center gap-2 p-2.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer">
              <input type="checkbox" id="chk-drugs" ${screeningState.guidemapChecklist.hasDrugHistory ? 'checked' : ''} onchange="updateInteractiveGuidemap()">
              <span class="text-indigo-700 dark:text-indigo-400 font-semibold">💊 Dùng Statin, Quinolone, Steroid, AI...</span>
            </label>
          </div>
        </div>

        <!-- Stage 2 Inputs: Pain Mechanism / Origin -->
        <div class="mb-4">
          <div class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            Giai đoạn 2: Định hướng Cơ chế phát sinh đau (Pain Mechanism / Tissue Source)
          </div>
          <select id="sel-pain-origin" class="w-full text-xs p-2.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium" onchange="updateInteractiveGuidemap()">
            <option value="radicular" ${screeningState.guidemapChecklist.painOrigin === 'radicular' ? 'selected' : ''}>⚡ Rễ thần kinh (Radicular: tê, buốt, điện giật lan theo khoanh, Spurling/SLR dương tính)</option>
            <option value="discogenic" ${screeningState.guidemapChecklist.painOrigin === 'discogenic' ? 'selected' : ''}>⚡ Đĩa đệm (Discogenic: đau tăng khi cúi gập cột sống, ngồi lâu, ho rặn)</option>
            <option value="facet" ${screeningState.guidemapChecklist.painOrigin === 'facet' ? 'selected' : ''}>⚡ Diện khớp cột sống (Facet / Z-Joint: đau tăng khi ưỡn và xoay người cùng bên)</option>
            <option value="tendon" ${screeningState.guidemapChecklist.painOrigin === 'tendon' ? 'selected' : ''}>⚡ Gân - Bao gân (Myotendinous / Enthesopathy: đau khi co cơ kháng lực hoặc sờ nắn gân)</option>
            <option value="capsular" ${screeningState.guidemapChecklist.painOrigin === 'capsular' ? 'selected' : ''}>⚡ Bao khớp / Khớp thoái hóa (Capsular Pattern: giới hạn tầm vận động cả chủ động và thụ động)</option>
            <option value="entrapment" ${screeningState.guidemapChecklist.painOrigin === 'entrapment' ? 'selected' : ''}>⚡ Chèn ép thần kinh ngoại biên (Peripheral Entrapment: CTS ống cổ tay, gõ Tinel, dị cảm)</option>
            <option value="somatic" ${screeningState.guidemapChecklist.painOrigin === 'somatic' ? 'selected' : ''}>⚡ Rối loạn cơ sinh học hệ vận động (Somatic Dysfunctions) (Deepak Somatic Dysfunction: xoay chậu Innominate, vặn xương cùng Sacrum)</option>
          </select>
        </div>

        <!-- Output Guidance Card -->
        <div id="interactive-guidemap-output" class="p-4 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-xs">
          <!-- Populated by updateInteractiveGuidemap -->
        </div>
      </div>

      <!-- Complete Stages Flow -->
      <div class="space-y-4">
        ${stagesHtml || `<div class="py-8 text-center text-slate-400">Không tìm thấy bước thuật toán khớp với từ khóa tìm kiếm</div>`}
      </div>
    </div>
  `;

  // Trigger output calculation
  updateInteractiveGuidemap();
}

function updateInteractiveGuidemap(fromState = false) {
  const chkRf = document.getElementById('chk-rf');
  const chkVisceral = document.getElementById('chk-visceral');
  const chkDrugs = document.getElementById('chk-drugs');
  const selOrigin = document.getElementById('sel-pain-origin');
  const output = document.getElementById('interactive-guidemap-output');
  if (!output) return;

  if (fromState) {
    if (chkRf) chkRf.checked = screeningState.guidemapChecklist.hasRedFlags;
    if (chkVisceral) chkVisceral.checked = screeningState.guidemapChecklist.hasVisceral;
    if (chkDrugs) chkDrugs.checked = screeningState.guidemapChecklist.hasDrugHistory;
    if (selOrigin && screeningState.guidemapChecklist.painOrigin) selOrigin.value = screeningState.guidemapChecklist.painOrigin;
  } else {
    if (chkRf) screeningState.guidemapChecklist.hasRedFlags = !!chkRf.checked;
    if (chkVisceral) screeningState.guidemapChecklist.hasVisceral = !!chkVisceral.checked;
    if (chkDrugs) screeningState.guidemapChecklist.hasDrugHistory = !!chkDrugs.checked;
    if (selOrigin && selOrigin.value) screeningState.guidemapChecklist.painOrigin = selOrigin.value;
  }

  const hasRf = screeningState.guidemapChecklist.hasRedFlags;
  const hasVisceral = screeningState.guidemapChecklist.hasVisceral;
  const hasDrugs = screeningState.guidemapChecklist.hasDrugHistory;
  const origin = screeningState.guidemapChecklist.painOrigin;

  let warningsHtml = [];
  let isContraindicated = false;

  if (hasRf) {
    isContraindicated = true;
    warningsHtml.push(`
      <div class="p-2.5 rounded bg-rose-100 dark:bg-rose-950/70 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 mb-2">
        <strong>🚨 CỜ ĐỎ KHẨN CẤP:</strong> Bệnh nhân có dấu hiệu cờ đỏ (Mạch máu / Tủy sống / Nhiễm trùng khớp / Ung thư ác tính). 
        <div class="mt-1 font-bold text-rose-700 dark:text-rose-300">CHỐNG CHỈ ĐỊNH MỌI THỦ THUẬT TIÊM TẠI CHỖ.</div>
        Chỉ định chụp MRI / CTA khẩn cấp và chuyển viện / hội chẩn chuyên khoa Cấp cứu / Ngoại thần kinh ngay trong ngày!
      </div>
    `);
  }

  if (hasVisceral) {
    warningsHtml.push(`
      <div class="p-2.5 rounded bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 mb-2">
        <strong>🫀 NGUY CƠ ĐAU CHUYỂN TẠNG:</strong> Bệnh nhân có triệu chứng đau không thay đổi theo vận động cơ học.
        Bắt buộc kiểm tra: ECG & Men tim Troponin (nếu đau ngực / vai); Siêu âm ổ bụng & Men tụy Amylase/Lipase (nếu đau hạ sườn / thắt lưng) trước khi can thiệp cơ xương khớp!
      </div>
    `);
  }

  if (hasDrugs) {
    warningsHtml.push(`
      <div class="p-2.5 rounded bg-indigo-100 dark:bg-indigo-950/70 border border-indigo-300 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 mb-2">
        <strong>💊 NGUY CƠ ĐAU DO TÁC DỤNG PHỤ CỦA THUỐC:</strong> 
        Kiểm tra nồng độ men cơ Creatine Kinase (nếu dùng Statin); Kiểm tra nguy cơ đứt gân gót Achilles (nếu dùng Quinolone); 
        Chụp MRI khớp háng phát hiện sớm hoại tử vô mạch AVN (nếu dùng Corticoid). Tạm ngừng hoặc chuyển đổi thuốc theo hướng dẫn tại Tab "Tra cứu thuốc".
      </div>
    `);
  }

  // Tissue Mechanism Guidance & Web 1 Recommendations
  const mechanismGuides = {
    radicular: {
      title: "Tổn thương Rễ thần kinh (Radiculopathy / Neurogenic Pain)",
      tests: "Spurling Test, ULTT 1 (Cổ); SLR Lasegue, Crossed SLR, Slump Test (Thắt lưng)",
      goldStandard: "MRI Cột sống xác định tầng rễ và mức độ thoát vị chèn ép",
      web1Link: "cervical-nerve-root / caudal-epidural / piriformis-muscle",
      web1Procs: [
        { id: "cervical-nerve-root", nameVi: "Phong bế rễ thần kinh gai sống cổ chọn lọc C5, C6, C7" },
        { id: "caudal-epidural", nameVi: "Tiêm ngoài màng cứng qua khe xương cùng (Caudal Epidural)" },
        { id: "piriformis-muscle", nameVi: "Tiêm cơ hình lê dưới siêu âm điều trị đau thần kinh tọa" }
      ]
    },
    discogenic: {
      title: "Đau phát sinh do đĩa đệm (Discogenic MSK Pain)",
      tests: "Centralization phenomenon (Hiện tượng trung tâm hóa Mackenzie), Slump Test",
      goldStandard: "MRI Cột sống phát hiện rách vòng sợi đĩa đệm (HIZ / Annular tear)",
      web1Link: "caudal-epidural",
      web1Procs: [
        { id: "caudal-epidural", nameVi: "Tiêm ngoài màng cứng qua khe xương cùng giải áp đĩa đệm" }
      ]
    },
    facet: {
      title: "Hội chứng diện khớp cạnh sống (Facet / Zygapophyseal Joint)",
      tests: "Nghiệm pháp Kemps, Khám đau chói diện khớp khi ưỡn và xoay cột sống cùng bên",
      goldStandard: "Phong bế nhánh trong (Medial Branch Block) chẩn đoán giảm > 80% đau",
      web1Link: "cervical-medial-branch-ton / lumbar-medial-branch",
      web1Procs: [
        { id: "cervical-medial-branch-ton", nameVi: "Phong bế nhánh trong cột sống cổ & thần kinh chẩm thứ 3" },
        { id: "lumbar-medial-branch", nameVi: "Phong bế nhánh trong cột sống thắt lưng & rễ sau L5" }
      ]
    },
    tendon: {
      title: "Bệnh lý gân & Điểm bám (Tendinopathy / Enthesopathy)",
      tests: "Co cơ kháng lực chọn lọc, Nghiệm pháp Neer/Hawkins (Vai), Cozen/Mill (Khuỷu), Thompson (Gót)",
      goldStandard: "Siêu âm Doppler năng lượng đánh giá tân mạch và mất cấu trúc sợi gân",
      web1Link: "sasd-bursa / tennis-elbow / patellar-tendon-fenestration / prp-platelet-rich-plasma",
      web1Procs: [
        { id: "sasd-bursa", nameVi: "Tiêm bao hoạt dịch dưới mỏm cùng - dưới cơ delta (SASD Bursa)" },
        { id: "tennis-elbow", nameVi: "Tiêm điểm bám gân lồi cầu ngoài xương cánh tay (Tennis Elbow)" },
        { id: "patellar-tendon-fenestration", nameVi: "Can thiệp châm kim đa điểm và bóc tách gân bánh chè" },
        { id: "prp-platelet-rich-plasma", nameVi: "Liệu pháp Huyết tương giàu tiểu cầu (PRP) cơ xương khớp" }
      ]
    },
    capsular: {
      title: "Bệnh lý bao khớp & Ổ khớp (Capsular / Articular Pattern)",
      tests: "Khám giới hạn tầm vận động chủ động và thụ động (AROM / PROM), Dấu hiệu rãnh khớp",
      goldStandard: "Siêu âm khớp độ phân giải cao & X-quang khớp đánh giá hẹp khe khớp",
      web1Link: "glenohumeral-posterior / hip-intraarticular / knee-suprapatellar",
      web1Procs: [
        { id: "glenohumeral-posterior", nameVi: "Tiêm khớp ổ chảo cánh tay lối sau (Frozen Shoulder)" },
        { id: "hip-intraarticular", nameVi: "Tiêm nội khớp háng dưới siêu âm" },
        { id: "knee-suprapatellar", nameVi: "Tiêm nội khớp gối qua ngách trên bánh chè" }
      ]
    },
    entrapment: {
      title: "Hội chứng chèn ép thần kinh ngoại biên (Peripheral Nerve Entrapment)",
      tests: "Dấu hiệu Durkan, Nghiệm pháp Phalen (Cổ tay); Dấu hiệu Tinel, Nghiệm pháp Roos (TOS)",
      goldStandard: "Điện cơ (EMG / NCV) và Siêu âm đo diện tích cắt ngang CSA dây thần kinh",
      web1Link: "carpal-tunnel / lfcn-block / ankle-nerve-blocks",
      web1Procs: [
        { id: "carpal-tunnel", nameVi: "Bóc tách thủy dịch thần kinh giữa trong Hội chứng Ống Cổ Tay" },
        { id: "lfcn-block", nameVi: "Phong bế thần kinh bì đùi ngoài - Meralgia Paresthetica" },
        { id: "ankle-nerve-blocks", nameVi: "Bộ phong bế dây thần kinh cảm giác cổ bàn chân (Ống cổ chân)" }
      ]
    },
    somatic: {
      title: "Rối loạn cơ sinh học hệ vận động (Somatic Dysfunctions) theo GS. Deepak Sebastian",
      tests: "Nghiệm pháp Cúi ngồi & Cúi đứng, Nghiệm pháp Gillet / Stork, Cụm Laslett SIJ Cluster",
      goldStandard: "Đánh giá động học chỉnh hình cơ sinh học (Biomechanical Assessment) & Tiêm SIJ",
      web1Link: "sacroiliac-joint / sacroiliac-joint-rfa / esp-block",
      web1Procs: [
        { id: "sacroiliac-joint", nameVi: "Tiêm khớp cùng chậu dưới siêu âm (SIJ Injection)" },
        { id: "sacroiliac-joint-rfa", nameVi: "Đốt sóng cao tần (RFA) khớp cùng chậu" },
        { id: "esp-block", nameVi: "Phong bế mặt phẳng cơ dựng gai (ESP Block)" }
      ]
    }
  };

  const mech = mechanismGuides[origin] || mechanismGuides.radicular;

  const stage3Html = isContraindicated ? `
    <div class="mt-3 p-3 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
      ⛔ <strong>Giai đoạn 3 (Can thiệp):</strong> Đang tạm hoãn thủ thuật tiêm can thiệp do có cờ đỏ cấp cứu. Hãy chuyển bệnh nhân đi chẩn đoán hình ảnh chuyên khoa trước.
    </div>
  ` : `
    <div class="mt-3 p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200">
      <div class="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1.5 flex items-center justify-between">
        <span>✅ KẾT QUẢ GIAI ĐOẠN 3: BỆNH NHÂN PHÙ HỢP CAN THIỆP SIÊU ÂM WEB 1</span>
        <a href="index.html" class="btn btn-primary text-xs px-2.5 py-1">💉 Mở Web 1 Philip Peng ↗</a>
      </div>
      <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
        <div><strong>Chẩn đoán hướng tới:</strong> ${mech.title}</div>
        <div><strong>Nghiệm pháp cần thực hiện để khẳng định:</strong> ${mech.tests}</div>
        <div><strong>Cận lâm sàng xác nhận:</strong> ${mech.goldStandard}</div>
        <div class="mt-2.5 pt-2 border-t border-emerald-200 dark:border-emerald-800">
          <strong class="text-emerald-800 dark:text-emerald-300">Khuyến cáo thủ thuật tiêm can thiệp tương ứng trong Cẩm Nang Web 1:</strong>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            ${mech.web1Procs.map(p => `
              <a href="index.html" class="p-2 rounded bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 font-semibold text-teal-800 dark:text-teal-300 flex items-center justify-between hover:bg-emerald-50 dark:hover:bg-emerald-950/60">
                <span>${p.nameVi}</span>
                <span class="text-xs text-teal-600">↗</span>
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  output.innerHTML = `
    <div>
      ${warningsHtml.join('')}
      ${stage3Html}
    </div>
  `;
}

// ----------------------------------------------------
// VIEW 3: RED FLAGS EMERGENCY TRIAGE TABLE
// ----------------------------------------------------
function renderRedFlagsView() {
  const container = document.getElementById('redflags-container');
  if (!container) return [];

  const query = screeningState.searchQuery;
  const list = (screeningState.redFlags || []).filter(rf => {
    if (!query) return true;
    const corpus = `${rf.system} ${rf.condition} ${rf.signs} ${rf.investigation} ${rf.action} ${rf.urgency}`.toLowerCase();
    return corpus.includes(query);
  });

  const rows = list.map(rf => `
    <tr class="border-b border-slate-100 dark:border-slate-800 text-xs hover:bg-slate-50 dark:hover:bg-slate-800/50">
      <td class="py-3 px-3 font-bold text-slate-800 dark:text-slate-200">${rf.system}</td>
      <td class="py-3 px-3 font-semibold text-rose-700 dark:text-rose-400">${rf.condition}</td>
      <td class="py-3 px-3 text-slate-700 dark:text-slate-300">${rf.signs}</td>
      <td class="py-3 px-3 text-teal-800 dark:text-teal-300 font-medium">${rf.investigation}</td>
      <td class="py-3 px-3 text-rose-900 dark:text-rose-300 bg-rose-50/50 dark:bg-rose-950/20 font-medium">${rf.action}</td>
      <td class="py-3 px-3 text-center">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold ${rf.urgency === 'Tối khẩn' ? 'bg-rose-600 text-white animate-pulse' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'}">
          ${rf.urgency}
        </span>
      </td>
    </tr>
  `).join('');

  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      <div class="mb-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>🚨</span> Bảng Tra Cứu Cờ Đỏ Lâm Sàng Khẩn Cấp Cần Loại Trừ (Red Flags Triage)
          </h2>
          <p class="text-xs text-slate-500 mt-1">
            Tổng hợp các tình huống cấp cứu thần kinh, mạch máu, nhiễm trùng khớp và u ác tính đe dọa tính mạng hoặc tàn phế.
          </p>
        </div>
        <span class="text-xs font-semibold text-rose-700 bg-rose-50 dark:bg-rose-950/50 px-3 py-1 rounded-full border border-rose-200">
          Hiển thị: ${list.length} / ${screeningState.redFlags.length} Cờ đỏ
        </span>
      </div>

      <div class="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table class="w-full text-left border-collapse screening-table">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              <th class="py-3 px-3 border-b border-slate-200 dark:border-slate-700">Hệ Cơ Quan</th>
              <th class="py-3 px-3 border-b border-slate-200 dark:border-slate-700">Tình Trạng Cờ Đỏ</th>
              <th class="py-3 px-3 border-b border-slate-200 dark:border-slate-700">Dấu Hiệu Nhận Biết Cốt Lõi</th>
              <th class="py-3 px-3 border-b border-slate-200 dark:border-slate-700">Cận Lâm Sàng Cần Chỉ Định</th>
              <th class="py-3 px-3 border-b border-slate-200 dark:border-slate-700">Hành Động Cấp Cứu</th>
              <th class="py-3 px-3 border-b border-slate-200 dark:border-slate-700 text-center">Mức Khẩn</th>
            </tr>
          </thead>
          <tbody>
            ${rows || `<tr><td colspan="6" class="py-8 text-center text-slate-400">Không tìm thấy cờ đỏ khớp với từ khóa tìm kiếm</td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;

  return list;
}

// ----------------------------------------------------
// VIEW 4: LAB TESTS CHECKER (CHAPTER 2)
// ----------------------------------------------------
function renderLabsView() {
  const container = document.getElementById('labs-container');
  if (!container) return [];

  const query = screeningState.searchQuery;
  const list = (screeningState.labTests || []).filter(item => {
    if (!query) return true;
    const corpus = `${item.test_name} ${item.category} ${item.normal_range} ${item.clinical_meaning} ${item.red_flag_value}`.toLowerCase();
    return corpus.includes(query);
  });

  const cardsHtml = list.map(item => `
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm">
      <div class="flex items-start justify-between gap-2 mb-2">
        <h4 class="font-bold text-teal-800 dark:text-teal-300 text-sm">
          ${item.test_name}
        </h4>
        <span class="text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">
          ${item.category}
        </span>
      </div>
      <div class="text-xs text-slate-600 dark:text-slate-400 mb-2">
        <strong>Giá trị bình thường:</strong> <span class="text-slate-900 dark:text-slate-100 font-mono font-medium">${item.normal_range}</span>
      </div>
      <p class="text-xs text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
        ${item.clinical_meaning}
      </p>
      <div class="text-xs text-rose-800 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/30 p-2.5 rounded border border-rose-200/60 dark:border-rose-900">
        <strong>🚨 Ngưỡng cảnh báo cờ đỏ:</strong> ${item.red_flag_value}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      <div class="mb-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>🧪</span> Bảng Tra Cứu Xét Nghiệm Cận Lâm Sàng Cơ Xương Khớp (Deepak Chapter 2)
          </h2>
          <p class="text-xs text-slate-500 mt-1">
            Tra cứu khoảng tham chiếu chuẩn, chỉ định lâm sàng và ngưỡng báo động của các xét nghiệm huyết học, sinh hóa, tự miễn dịch và dấu ấn u.
          </p>
        </div>
        <span class="text-xs font-semibold text-teal-700 bg-teal-50 dark:bg-teal-950/50 px-3 py-1 rounded-full border border-teal-200">
          Hiển thị: ${list.length} / ${screeningState.labTests.length} Xét nghiệm
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${cardsHtml || `<div class="col-span-full py-8 text-center text-slate-400">Không tìm thấy xét nghiệm khớp với từ khóa</div>`}
      </div>
    </div>
  `;

  return list;
}

// ----------------------------------------------------
// VIEW 5: DRUG-INDUCED PAIN CHECKER (CHAPTER 3)
// ----------------------------------------------------
function renderDrugsView() {
  const container = document.getElementById('drugs-container');
  if (!container) return [];

  const query = screeningState.searchQuery;
  const list = (screeningState.drugInduced || []).filter(item => {
    if (!query) return true;
    const corpus = `${item.drug_class} ${item.examples} ${item.symptoms} ${item.mechanism} ${item.timeline} ${item.management}`.toLowerCase();
    return corpus.includes(query);
  });

  const cardsHtml = list.map(item => `
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
      <div class="flex items-start justify-between gap-2 mb-2 pb-2 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h4 class="font-bold text-indigo-800 dark:text-indigo-300 text-sm">
            💊 ${item.drug_class}
          </h4>
          <p class="text-xs text-slate-500 mt-0.5"><strong>Thuốc đại diện:</strong> ${item.examples}</p>
        </div>
      </div>
      
      <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300 mt-3">
        <div class="p-2.5 rounded bg-rose-50/60 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50">
          <strong class="text-rose-900 dark:text-rose-300">Biểu hiện đau lâm sàng:</strong> ${item.symptoms}
        </div>
        <div>
          <strong>Cơ chế bệnh sinh:</strong> ${item.mechanism}
        </div>
        <div>
          <strong>Thời gian khởi phát điển hình:</strong> ${item.timeline}
        </div>
        <div class="p-2.5 rounded bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900">
          <strong class="text-emerald-900 dark:text-emerald-300">⚡ Hướng xử trí lâm sàng:</strong> ${item.management}
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      <div class="mb-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>💊</span> Bảng Tra Cứu Đau Cơ Xương Khớp & Bệnh Thần Kinh Do Thuốc (Deepak Chapter 3)
          </h2>
          <p class="text-xs text-slate-500 mt-1">
            Nhận diện đau cơ, viêm đứt gân, thoái hóa hoại tử vô mạch và bệnh thần kinh ngoại biên khởi phát do tác dụng phụ của thuốc tân dược.
          </p>
        </div>
        <span class="text-xs font-semibold text-indigo-700 bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-200">
          Hiển thị: ${list.length} / ${screeningState.drugInduced.length} Nhóm thuốc
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${cardsHtml || `<div class="col-span-full py-8 text-center text-slate-400">Không tìm thấy nhóm thuốc khớp với từ khóa</div>`}
      </div>
    </div>
  `;

  return list;
}

// ----------------------------------------------------
// VIEW 6: DEEPAK ATLAS 279 FIGURES GALLERY
// ----------------------------------------------------
function renderAtlasView() {
  const container = document.getElementById('atlas-container');
  if (!container) return [];

  const query = (screeningState.searchQuery || '').toLowerCase().trim();
  const selectedChapter = screeningState.atlasChapterFilter || 'all';

  const chapterMeta = [
    { id: 'all', label: 'Tất cả các chương', count: (screeningState.atlasCatalog || []).length },
    { id: '4', label: 'Ch 4: Cột Sống Cổ & VBI', icon: '👤', count: (screeningState.atlasCatalog || []).filter(c => c.chapter === 4).length },
    { id: '5', label: 'Ch 5: Cột Sống Ngực & Sườn', icon: '🛡️', count: (screeningState.atlasCatalog || []).filter(c => c.chapter === 5).length },
    { id: '6', label: 'Ch 6: Thắt Lưng - Chậu', icon: '🦴', count: (screeningState.atlasCatalog || []).filter(c => c.chapter === 6).length },
    { id: '7', label: 'Ch 7: Khớp Háng & Bẹn', icon: '👖', count: (screeningState.atlasCatalog || []).filter(c => c.chapter === 7).length },
    { id: '8', label: 'Ch 8: Gối, Cổ & Bàn Chân', icon: '🦵', count: (screeningState.atlasCatalog || []).filter(c => c.chapter === 8).length },
    { id: '9', label: 'Ch 9: Khớp Vai & Đai Vai', icon: '🏹', count: (screeningState.atlasCatalog || []).filter(c => c.chapter === 9).length },
    { id: '10', label: 'Ch 10: Khuỷu & Bàn Tay', icon: '🖐️', count: (screeningState.atlasCatalog || []).filter(c => c.chapter === 10).length }
  ];

  const list = (screeningState.atlasCatalog || []).filter(item => {
    // Chapter match
    if (selectedChapter !== 'all' && String(item.chapter) !== String(selectedChapter)) {
      return false;
    }
    // Search query match
    if (query) {
      const corpus = `${item.chapter} ${item.chapter_name} trang ${item.page} p${item.page} ${item.formal_title || ''} ${(item.all_titles || []).join(' ')}`.toLowerCase();
      if (!corpus.includes(query)) return false;
    }
    return true;
  });

  screeningState.filteredAtlas = list;

  // Render chapter tabs
  const chapterPillsHtml = chapterMeta.map(ch => `
    <button type="button" onclick="filterAtlasByChapter('${ch.id}')" class="atlas-chapter-pill ${selectedChapter === ch.id ? 'active' : ''}">
      <span>${ch.icon ? ch.icon + ' ' : ''}${ch.label}</span>
      <span class="atlas-pill-badge">${ch.count}</span>
    </button>
  `).join('');

  // Render cards
  const cardsHtml = list.map((item, idx) => {
    const titleText = item.formal_title || `Hình minh họa trang ${item.page}`;
    return `
      <div class="atlas-figure-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-teal-500 dark:hover:border-teal-400 transition-all flex flex-col justify-between group shadow-2xs">
        <div class="h-48 overflow-hidden relative cursor-pointer bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-2" onclick="openAtlasLightbox(${idx})">
          <img src="${item.file}" alt="${escapeHtml(titleText)}" loading="lazy" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200">
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <span class="opacity-0 group-hover:opacity-100 bg-slate-900/90 text-white text-xs px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 font-medium">
              🔍 Phóng to (${idx + 1}/${list.length})
            </span>
          </div>
          <span class="absolute top-2 left-2 bg-slate-900/80 text-white text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-xs">
            Trang ${item.page}
          </span>
          <span class="absolute top-2 right-2 bg-teal-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
            Ch ${item.chapter}
          </span>
        </div>
        <div class="p-3 border-t border-slate-100 dark:border-slate-800 flex flex-col justify-between flex-1">
          <div class="text-xs font-semibold text-slate-800 dark:text-slate-200 line-clamp-2 leading-snug" title="${escapeHtml(titleText)}">
            ${escapeHtml(titleText)}
          </div>
          <div class="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px]">
            <span class="text-teal-700 dark:text-teal-400 font-mono font-medium">${item.chapter_name || ''}</span>
            <button type="button" onclick="openAtlasLightbox(${idx})" class="text-teal-600 dark:text-teal-400 hover:underline font-semibold cursor-pointer">
              Xem ảnh →
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      <div class="mb-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>🖼️</span> Thư Viện Atlas 279 Hình Ảnh Lâm Sàng Deepak Sebastian
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Toàn bộ 279 sơ đồ giải phẫu, cơ chế chấn thương, phim bệnh lý và thao tác nghiệm pháp bóc tách nguyên bản từ giáo trình 526 trang của GS. Deepak Sebastian.
          </p>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
            Hiển thị: ${list.length} / ${(screeningState.atlasCatalog || []).length} Hình ảnh
          </span>
        </div>
      </div>

      <!-- Chapter Filter Pills -->
      <div class="atlas-chapter-filters flex flex-wrap gap-2 mb-5">
        ${chapterPillsHtml}
      </div>

      <!-- Grid of Atlas Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        ${cardsHtml || `
          <div class="col-span-full py-12 text-center text-slate-400">
            <p class="text-sm">Không tìm thấy hình ảnh phù hợp với tiêu chí lọc.</p>
            <button type="button" onclick="screeningState.searchQuery=''; screeningState.atlasChapterFilter='all'; applyFilters();" class="mt-3 btn btn-outline text-xs text-teal-600">
              Đặt lại bộ lọc
            </button>
          </div>
        `}
      </div>
    </div>
  `;

  return list;
}

function filterAtlasByChapter(ch) {
  screeningState.atlasChapterFilter = ch;
  applyFilters();
}

function openAtlasLightbox(idx) {
  if (!screeningState.filteredAtlas || screeningState.filteredAtlas.length === 0) return;
  
  screeningState.currentModuleFigures = screeningState.filteredAtlas.map(item => ({
    file: item.file,
    page: item.page,
    fig_number: (item.formal_title && item.formal_title.includes(':')) ? item.formal_title.split(':')[0].trim() : ('Trang ' + item.page),
    caption_vi: item.formal_title || `Hình minh họa trang ${item.page}`,
    caption_en: item.formal_title || `Figure on page ${item.page}`,
    width: item.width,
    height: item.height
  }));

  openLightboxIndex(idx);
}

// Utility: HTML escaping
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Global window bindings for inline HTML handlers
if (typeof window !== 'undefined') {
  window.selectModule = selectModule;
  window.quickSelectModule = quickSelectModule;
  window.openLightboxByFile = openLightboxByFile;
  window.openLightboxIndex = openLightboxIndex;
  window.scrollToCardsList = scrollToCardsList;
  window.renderScreeningDetail = renderScreeningDetail;
  window.toggleGuidemapSteps = toggleGuidemapSteps;
  window.filterAtlasByChapter = filterAtlasByChapter;
  window.openAtlasLightbox = openAtlasLightbox;
}

// Export for Node/testing environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    screeningState,
    initScreeningApp,
    applyFilters,
    selectModule,
    quickSelectModule,
    openLightboxByFile,
    scrollToCardsList,
    switchMode,
    openLightboxIndex,
    lightboxPrev,
    lightboxNext,
    closeLightbox,
    updateInteractiveGuidemap,
    renderScreeningDetail,
    toggleGuidemapSteps,
    renderAtlasView,
    filterAtlasByChapter,
    openAtlasLightbox
  };
}
