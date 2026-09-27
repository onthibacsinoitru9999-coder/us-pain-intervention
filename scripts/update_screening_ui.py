# -*- coding: utf-8 -*-
import sys
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

with open('js/screening.js', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '// UpToDate / BMJ Best Practice 3-Step Accordion Guidemap Renderer\nfunction renderScreeningDetail(module) {'
end_marker = 'function selectModule(moduleId, updateCards = true) {'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    raise ValueError(f"Markers not found: start_idx={start_idx}, end_idx={end_idx}")

new_implementation = '''// 6-Tab Clinical Dossier & UpToDate Guidemap Renderer (Deepak Sebastian & Philip Peng)
function switchDossierTab(tabId) {
  if (typeof document === 'undefined') return;
  document.querySelectorAll('.dossier-tab-btn').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.dossier-tab-pane').forEach(pane => {
    if (pane.id === `pane-${tabId}`) {
      pane.classList.remove('hidden');
      pane.classList.add('active');
    } else {
      pane.classList.add('hidden');
      pane.classList.remove('active');
    }
  });
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

  const panes = document.querySelectorAll('.dossier-tab-pane');
  if (open) {
    panes.forEach(p => {
      p.classList.remove('hidden');
      p.classList.add('active');
    });
    document.querySelectorAll('.dossier-tab-btn').forEach(b => b.classList.add('active'));
  } else {
    panes.forEach((p, idx) => {
      if (idx === 0) {
        p.classList.remove('hidden');
        p.classList.add('active');
      } else {
        p.classList.add('hidden');
        p.classList.remove('active');
      }
    });
    document.querySelectorAll('.dossier-tab-btn').forEach((b, idx) => {
      if (idx === 0) b.classList.add('active');
      else b.classList.remove('active');
    });
  }
}

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

  const tab1 = module.tab1_anatomy_palpation || null;
  const tab2 = module.tab2_red_flags || null;
  const tab3 = module.tab3_visceral_drug_pain || null;
  const tab4 = module.tab4_provocative_tests || null;
  const tab5 = module.tab5_differential_matrix || null;
  const tab6 = module.tab6_intervention_linkage || null;

  // TAB 1: Anatomy & Palpation
  let tab1ContentHtml = '';
  if (tab1) {
    const arthro = tab1.arthrokinematics;
    let arthroHtml = '';
    if (arthro) {
      arthroHtml = `
        <div class="mb-5 p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/70 dark:border-teal-900/40 shadow-2xs">
          <h4 class="font-bold text-teal-900 dark:text-teal-300 text-xs uppercase tracking-wide mb-3 flex items-center gap-2">
            <span>⚙️</span> Cơ Sinh Học Khớp & Cơ Chế Trượt Lăn (Arthrokinematics & Roll-Gliding)
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-teal-100 dark:border-teal-900">
              <strong class="text-teal-800 dark:text-teal-300 block mb-1">Khớp & Vị trí nghỉ (Loose-packed / Resting):</strong>
              <p class="text-slate-700 dark:text-slate-300">${arthro.resting_position || 'N/A'}</p>
            </div>
            <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-teal-100 dark:border-teal-900">
              <strong class="text-teal-800 dark:text-teal-300 block mb-1">Vị trí khóa khớp (Close-packed):</strong>
              <p class="text-slate-700 dark:text-slate-300">${arthro.close_packed_position || 'N/A'}</p>
            </div>
            <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-teal-100 dark:border-teal-900">
              <strong class="text-teal-800 dark:text-teal-300 block mb-1">Kiểu co cứng bao khớp (Capsular Pattern):</strong>
              <p class="text-slate-700 dark:text-slate-300">${arthro.capsular_pattern || 'N/A'}</p>
            </div>
            <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-teal-100 dark:border-teal-900">
              <strong class="text-teal-800 dark:text-teal-300 block mb-1">Cơ chế trượt lăn (Roll-gliding / Convex-Concave):</strong>
              <p class="text-slate-700 dark:text-slate-300 leading-relaxed">${arthro.roll_gliding || 'N/A'}</p>
            </div>
          </div>
        </div>
      `;
    }

    const palpationSteps = tab1.palpation_steps || [];
    const palpationHtml = palpationSteps.length > 0 ? `
      <div class="space-y-3 mb-5">
        <h4 class="font-bold text-slate-800 dark:text-slate-200 text-xs uppercase tracking-wide flex items-center gap-2">
          <span>🖐️</span> Quy Trình Sờ Nắn Lâm Sàng Từng Mốc Giải Phẫu (${palpationSteps.length} Mốc Sờ Nắn)
        </h4>
        <div class="grid grid-cols-1 gap-3">
          ${palpationSteps.map((step, sIdx) => `
            <div class="p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-teal-400 transition-colors">
              <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 mb-2">
                <span class="font-bold text-slate-800 dark:text-white text-xs flex items-center gap-1.5">
                  <span class="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-mono flex items-center justify-center font-bold">${sIdx + 1}</span>
                  <span>${step.landmark}</span>
                </span>
                <span class="text-[10px] text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950 px-2 py-0.5 rounded font-medium">Tư thế: ${step.patient_position}</span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                <strong>Kỹ thuật sờ nắn:</strong> ${step.technique}
              </p>
              ${step.clinical_pearl ? `
                <div class="text-[11px] text-amber-900 dark:text-amber-300 bg-amber-50/70 dark:bg-amber-950/30 p-2 rounded border border-amber-200/50">
                  <strong>💡 Clinical Pearl:</strong> ${step.clinical_pearl}
                </div>
              ` : ''}
              ${renderEmbeddedFigures(step.figures)}
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    tab1ContentHtml = `
      ${arthroHtml}
      ${palpationHtml}
      ${renderEmbeddedFigures(tab1.figures)}
    `;
  } else {
    tab1ContentHtml = `
      <div class="py-8 text-center text-slate-400 text-xs">
        Chưa có dữ liệu cơ sinh học và sờ nắn cho chuyên đề này.
      </div>
    `;
  }

  // TAB 2: Red Flags
  const redFlagsSource = (tab2 && Array.isArray(tab2) && tab2.length > 0) ? tab2 : redFlags;
  const redFlagsListHtml = redFlagsSource.map(rf => `
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
      ${rf.gold_standard_labs ? `
        <div class="mt-2 text-[11px] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-900/60 p-2 rounded border border-slate-200 dark:border-slate-800">
          <strong>🔬 Tiêu chuẩn vàng CLS:</strong> ${rf.gold_standard_labs}
        </div>
      ` : ''}
      ${renderEmbeddedFigures(rf.figures)}
    </div>
  `).join('');

  // TAB 3: Visceral referrals & Drug-induced pain
  const visceralSource = (tab3 && tab3.visceral_referrals) ? tab3.visceral_referrals : visceralReferrals;
  const drugSource = (tab3 && tab3.drug_induced) ? tab3.drug_induced : drugInduced;

  const visceralRowsHtml = visceralSource.map(ref => `
    <tr class="border-b border-amber-100/60 dark:border-amber-950/40 text-xs hover:bg-amber-50/50 dark:hover:bg-amber-950/30 transition-colors">
      <td class="py-2.5 px-3 font-bold text-amber-900 dark:text-amber-300 align-top">🫀 ${ref.source || ref.organ}</td>
      <td class="py-2.5 px-3 text-slate-700 dark:text-slate-300 align-top leading-relaxed">${ref.pattern}</td>
      <td class="py-2.5 px-3 text-amber-800 dark:text-amber-400 italic align-top leading-relaxed">${ref.differential}</td>
    </tr>
  `).join('');

  const tab3ContentHtml = `
    ${visceralSource.length > 0 ? `
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

    ${drugSource.length > 0 ? `
      <div class="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/40">
        <div class="font-bold text-indigo-900 dark:text-indigo-300 text-xs uppercase tracking-wide mb-2 flex items-center gap-1.5">
          <span>💊</span> Đau Do Tác Dụng Phụ Của Thuốc Cần Khai Thác Tiền Sử (Drug-Induced Pain)
        </div>
        <ul class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-inside">
          ${drugSource.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    ` : ''}
    ${(tab3 && tab3.figures) ? renderEmbeddedFigures(tab3.figures) : ''}
  `;

  // TAB 4: Provocative Tests & Somatic Dysfunctions
  const testsSource = (tab4 && tab4.provocative_tests) ? tab4.provocative_tests : provocativeTests;
  const testsHtml = testsSource.map((t, idx) => `
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
          ${t.lr_positive ? `<span class="text-[10px] font-mono bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded">+LR: ${t.lr_positive}</span>` : ''}
          ${t.lr_negative ? `<span class="text-[10px] font-mono bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 px-1.5 py-0.5 rounded">-LR: ${t.lr_negative}</span>` : ''}
        </div>
      </div>
      ${(t.clinical_role || t.diagnostic_role) ? `
        <div class="text-[11px] font-medium text-slate-600 dark:text-slate-400 mt-2 italic flex items-center gap-1.5">
          <span>🎯</span>
          <span><strong>Vai trò chẩn đoán:</strong> ${t.clinical_role || t.diagnostic_role}</span>
        </div>
      ` : ''}
      ${t.patient_position ? `
        <div class="text-xs text-slate-600 dark:text-slate-400 mt-2">
          <strong>Tư thế bệnh nhân:</strong> ${t.patient_position}
        </div>
      ` : ''}
      <div class="text-xs text-slate-700 dark:text-slate-300 mt-2.5 whitespace-pre-line leading-relaxed">
        <strong class="text-slate-900 dark:text-white">Kỹ thuật thao tác:</strong> ${t.technique || t.examiner_action}
      </div>
      ${t.end_feel ? `
        <div class="text-xs text-slate-600 dark:text-slate-400 mt-1.5">
          <strong>Cảm giác cuối tầm (End-feel):</strong> ${t.end_feel}
        </div>
      ` : ''}
      ${t.significance ? `
        <div class="text-xs text-emerald-800 dark:text-emerald-300 bg-emerald-50/80 dark:bg-emerald-950/30 p-2.5 rounded mt-2.5 border border-emerald-100 dark:border-emerald-900 leading-relaxed">
          <strong>Ý nghĩa lâm sàng:</strong> ${t.significance}
        </div>
      ` : ''}
      ${renderEmbeddedFigures(t.figures)}
    </div>
  `).join('');

  // Somatic dysfunctions
  const somaticList = (tab4 && tab4.somatic_dysfunctions) ? tab4.somatic_dysfunctions : somaticDysfunctions;
  let somaticHtml = '';
  if (Array.isArray(somaticList) && somaticList.length > 0) {
    somaticHtml = `
      <div class="mt-5 p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40">
        <h4 class="font-bold text-purple-900 dark:text-purple-300 text-xs uppercase tracking-wide mb-2.5 flex items-center gap-1.5">
          <span>🧬</span> Rối Loạn Cơ Sinh Học Hệ Vận Động (Somatic Dysfunctions) Chuyên Sâu
        </h4>
        <div class="space-y-3">
          ${somaticList.map(s => {
            if (typeof s === 'string') {
              return `<div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed p-2.5 bg-white dark:bg-slate-900 rounded border border-purple-100 dark:border-purple-900">${s}</div>`;
            }
            return `
              <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-900/60 shadow-2xs">
                <div class="font-bold text-purple-900 dark:text-purple-300 text-xs mb-1">
                  ${s.dysfunction}
                </div>
                <div class="text-xs text-slate-700 dark:text-slate-300 mb-1.5 leading-relaxed">
                  <strong>Cơ chế cơ sinh học:</strong> ${s.biomechanics}
                </div>
                <div class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>Đánh giá & Nắn chỉnh:</strong> ${s.assessment_correction}
                </div>
                ${renderEmbeddedFigures(s.figures)}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // TAB 5: Differential Matrix & Complex Cases
  const matrixSource = (tab5 && tab5.matrix) ? tab5.matrix : differentialMatrix;
  const diffRows = matrixSource.map(row => `
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

  // Complex cases reasoning
  let complexCasesHtml = '';
  if (tab5 && Array.isArray(tab5.complex_cases_reasoning) && tab5.complex_cases_reasoning.length > 0) {
    complexCasesHtml = `
      <div class="mt-5 p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
        <h4 class="font-bold text-amber-900 dark:text-amber-300 text-xs uppercase tracking-wide mb-3 flex items-center gap-2">
          <span>🧠</span> Biện Luận Ca Bệnh Khó & Bẫy Lâm Sàng (Complex Cases & Diagnostic Strategy)
        </h4>
        <div class="space-y-3">
          ${tab5.complex_cases_reasoning.map(c => `
            <div class="p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-amber-200/60 dark:border-amber-900/50 shadow-2xs">
              <div class="font-bold text-amber-900 dark:text-amber-300 text-xs mb-1.5">
                🩺 Tình huống: ${c.scenario}
              </div>
              <div class="text-xs text-rose-800 dark:text-rose-300 mb-1 leading-relaxed">
                <strong>⚠️ Bẫy lâm sàng:</strong> ${c.clinical_trap}
              </div>
              <div class="text-xs text-teal-800 dark:text-teal-300 mb-1.5 leading-relaxed">
                <strong>🧭 Chiến lược chẩn đoán:</strong> ${c.diagnostic_strategy}
              </div>
              ${c.deepak_pearl ? `
                <div class="text-[11px] text-slate-700 dark:text-slate-300 bg-amber-50/60 dark:bg-slate-950 p-2 rounded border border-amber-100 dark:border-slate-800 italic">
                  <strong>💡 Deepak Clinical Pearl:</strong> ${c.deepak_pearl}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // TAB 6: Web 1 Interventions
  const web1Source = (tab6 && tab6.recommended_web1_procedures) ? tab6.recommended_web1_procedures : web1ProceduresList;
  const web1ProceduresHtml = web1Source.length > 0 ? `
    <div class="mt-4 pt-3 border-t border-teal-200/80 dark:border-teal-800/60">
      <h5 class="text-xs font-bold text-teal-900 dark:text-teal-300 uppercase tracking-wide mb-2.5 flex items-center gap-1.5">
        <span>💉</span> Các Quy Trình Tiêm Siêu Âm Can Thiệp Web 1 Khuyến Cáo Cho Vùng Này (${web1Source.length} Quy trình):
      </h5>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
        ${web1Source.map(proc => `
          <a href="index.html?proc=${proc.id}" class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-teal-200 dark:border-teal-800 hover:border-teal-500 dark:hover:border-teal-400 transition-all flex flex-col justify-between group shadow-2xs" title="Nhảy sang Cẩm Nang Tiêm Can Thiệp Web 1: ${escapeHtml(proc.nameVi || proc.id)}">
            <div>
              <div class="font-bold text-teal-800 dark:text-teal-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 flex items-center justify-between text-xs sm:text-sm">
                <span>💉 ${proc.nameVi || proc.id} (Mã: ${proc.id})</span>
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

  const interventionHtml = (tab6 && tab6.intervention_guidelines) ? `
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
        ${tab6.intervention_guidelines || module.stage_3_guidemap_intervention || ''}
      </p>
      ${web1ProceduresHtml}
    </div>
  ` : (module.stage_3_guidemap_intervention ? `
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
  ` : web1ProceduresHtml);

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
          ${module.icon || '📍'} ${module.region_vi || ''}
        </span>
      </div>

      <!-- Title & Header -->
      <div class="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <span class="badge-cat badge-${module.region || 'systemic'}">
              ${module.icon || '📍'} ${module.region_vi || ''}
            </span>
            <span class="text-xs text-slate-400 font-bold">Hồ Sơ Sàng Lọc Lâm Sàng 6 Phần</span>
          </div>
          <h2 class="text-xl font-bold text-slate-900 dark:text-white leading-tight">
            ${module.title_vi || ''}
          </h2>
          <p class="text-xs text-slate-500 italic mt-0.5">${module.title || ''}</p>
          <p class="text-xs text-teal-700 dark:text-teal-400 font-medium mt-1">📚 ${module.author || 'Prof. Deepak Sebastian'}</p>
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
          ${module.summary || ''}
        </p>
      </div>

      <!-- Accordion Header & Controls -->
      <div class="flex items-center justify-between mt-6 mb-3 text-xs">
        <div class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
          <span>🧭</span>
          <span>Hồ Sơ Sàng Lọc Chuyên Khảo 6 Phần (Clinical Dossier - Deepak Sebastian)</span>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" onclick="toggleGuidemapSteps(true)" class="text-[11px] font-semibold text-teal-700 dark:text-teal-300 hover:underline cursor-pointer">Mở tất cả</button>
          <span class="text-slate-300 dark:text-slate-600">|</span>
          <button type="button" onclick="toggleGuidemapSteps(false)" class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:underline cursor-pointer">Thu gọn</button>
        </div>
      </div>

      <!-- 6-TAB NAVIGATION BAR -->
      <div class="dossier-tabs-nav">
        <button type="button" class="dossier-tab-btn active" data-tab="tab1" onclick="switchDossierTab('tab1')">
          📑 1. Giải Phẫu & Sờ Nắn
        </button>
        <button type="button" class="dossier-tab-btn" data-tab="tab2" onclick="switchDossierTab('tab2')">
          🚨 2. Cờ Đỏ & Cấp Cứu
        </button>
        <button type="button" class="dossier-tab-btn" data-tab="tab3" onclick="switchDossierTab('tab3')">
          🫀 3. Đau Tạng & Thuốc
        </button>
        <button type="button" class="dossier-tab-btn" data-tab="tab4" onclick="switchDossierTab('tab4')">
          🩺 4. Nghiệm Pháp Khám
        </button>
        <button type="button" class="dossier-tab-btn" data-tab="tab5" onclick="switchDossierTab('tab5')">
          ⚖️ 5. Ma Trận Phân Biệt
        </button>
        <button type="button" class="dossier-tab-btn" data-tab="tab6" onclick="switchDossierTab('tab6')">
          💉 6. Can Thiệp Siêu Âm Web 1
        </button>
      </div>

      <!-- TAB PANE 1: Giải Phẫu, Cơ Sinh Học & Sờ Nắn -->
      <div id="pane-tab1" class="dossier-tab-pane active">
        ${tab1ContentHtml}
      </div>

      <!-- TAB PANE 2: Sàng Lọc Cờ Đỏ & Bệnh Lý Nguy Hiểm -->
      <div id="pane-tab2" class="dossier-tab-pane">
        <details class="guidemap-accordion-step step-redflags" open>
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
          </div>
        </details>
      </div>

      <!-- TAB PANE 3: Đau Chuyển Tạng & Đau Do Thuốc -->
      <div id="pane-tab3" class="dossier-tab-pane">
        ${tab3ContentHtml}
      </div>

      <!-- TAB PANE 4: Nghiệm Pháp Khám Thực Thể Đặc Hiệu -->
      <div id="pane-tab4" class="dossier-tab-pane">
        <details class="guidemap-accordion-step step-provocative" open>
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
      </div>

      <!-- TAB PANE 5: Ma Trận Chẩn Đoán Phân Biệt & Ca Bệnh Khó -->
      <div id="pane-tab5" class="dossier-tab-pane">
        <details class="guidemap-accordion-step step-matrix" open>
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

            <!-- Complex Cases Reasoning -->
            ${complexCasesHtml}
          </div>
        </details>
      </div>

      <!-- TAB PANE 6: Phác Đồ Tiêm Siêu Âm Can Thiệp Web 1 -->
      <div id="pane-tab6" class="dossier-tab-pane">
        ${interventionHtml}
      </div>

      <!-- SECTION 7: EXPANDABLE ATLAS FIGURES (COLLAPSED BY DEFAULT FOR COMPACT READING) -->
      ${figuresList.length > 0 ? `
        <details class="mt-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
          <summary class="cursor-pointer p-4 font-bold text-sm text-teal-900 dark:text-teal-300 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors select-none">
            <div class="flex items-center gap-2">
              <span>📚</span>
              <span>Thư Viện Atlas Toàn Bộ Hình Ảnh Bổ Trợ Vùng ${module.region_vi || ''} (${figuresList.length} Hình Dương Bản)</span>
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

'''

new_content = content[:start_idx] + new_implementation + content[end_idx:]

with open('js/screening.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated js/screening.js with 6-Tab Clinical Dossier implementation.")
