// US-PainIntervention Pro: Clinical Calculators
// Local Anesthetic Maximum Safe Dose & Corticosteroid Equivalence Calculator

const ANESTHETICS_DATA = {
  lidocaine_plain: {
    name: "Lidocaine (Đơn thuần - không Adrenaline)",
    maxDosePerKg: 4.5,
    absoluteMaxMg: 300,
    onset: "Nhanh (2 - 5 phút)",
    duration: "Ngắn - Trung bình (1 - 2 giờ)",
    concentrations: [
      { label: "1.0% (10 mg/ml)", mgPerMl: 10 },
      { label: "2.0% (20 mg/ml)", mgPerMl: 20 },
      { label: "0.5% (5 mg/ml)", mgPerMl: 5 }
    ]
  },
  lidocaine_epi: {
    name: "Lidocaine + Adrenaline (Epinephrine 1:200.000)",
    maxDosePerKg: 7.0,
    absoluteMaxMg: 500,
    onset: "Nhanh (2 - 5 phút)",
    duration: "Trung bình (2 - 4 giờ)",
    concentrations: [
      { label: "1.0% + Epi (10 mg/ml)", mgPerMl: 10 },
      { label: "2.0% + Epi (20 mg/ml)", mgPerMl: 20 }
    ]
  },
  ropivacaine: {
    name: "Ropivacaine (Ít độc tim hơn Bupivacaine)",
    maxDosePerKg: 3.0,
    absoluteMaxMg: 225,
    onset: "Trung bình (10 - 15 phút)",
    duration: "Dài (6 - 12 giờ)",
    concentrations: [
      { label: "0.2% (2 mg/ml)", mgPerMl: 2 },
      { label: "0.5% (5 mg/ml)", mgPerMl: 5 },
      { label: "0.75% (7.5 mg/ml)", mgPerMl: 7.5 }
    ]
  },
  bupivacaine_plain: {
    name: "Bupivacaine / Levobupivacaine (Marcaine)",
    maxDosePerKg: 2.0,
    absoluteMaxMg: 150,
    onset: "Chậm - Trung bình (15 - 20 phút)",
    duration: "Dài (6 - 15 giờ)",
    concentrations: [
      { label: "0.25% (2.5 mg/ml)", mgPerMl: 2.5 },
      { label: "0.5% (5 mg/ml)", mgPerMl: 5 }
    ]
  }
};

const STEROIDS_DATA = [
  {
    name: "Hydrocortisone",
    antiInflammatoryPower: 1,
    mineralocorticoidPower: 1,
    equivalentDoseMg: 20,
    halfLifeHours: "8 - 12 giờ (Ngắn)",
    form: "Dung dịch tan",
    particulate: false,
    clinicalUse: "Liệu pháp thay thế suy thượng thận, cấp cứu phản vệ."
  },
  {
    name: "Prednisolone / Prednisone",
    antiInflammatoryPower: 4,
    mineralocorticoidPower: 0.8,
    equivalentDoseMg: 5,
    halfLifeHours: "18 - 36 giờ (Trung bình)",
    form: "Đường uống",
    particulate: false,
    clinicalUse: "Chống viêm toàn thân đường uống."
  },
  {
    name: "Methylprednisolone acetate (Depo-Medrol)",
    antiInflammatoryPower: 5,
    mineralocorticoidPower: 0.5,
    equivalentDoseMg: 4,
    halfLifeHours: "18 - 36 giờ (Trung bình)",
    form: "Huyền dịch hạt tinh thể (Suspension)",
    particulate: true,
    clinicalUse: "Tiêm nội khớp lớn (gối, háng, vai), bao hoạt dịch. CHỐNG CHỈ ĐỊNH tiêm ngoài màng cứng cổ / chọn lọc rễ do nguy cơ tắc mạch tủy."
  },
  {
    name: "Triamcinolone acetonide (K-cort, Kenacort)",
    antiInflammatoryPower: 5,
    mineralocorticoidPower: 0,
    equivalentDoseMg: 4,
    halfLifeHours: "18 - 36 giờ (Trung bình - dài)",
    form: "Huyền dịch hạt tinh thể (Suspension)",
    particulate: true,
    clinicalUse: "Tiêm nội khớp, bao hoạt dịch, gân, khớp cùng chậu. Kháng viêm mạnh, không giữ muối nước."
  },
  {
    name: "Dexamethasone phosphate",
    antiInflammatoryPower: 25 - 30,
    mineralocorticoidPower: 0,
    equivalentDoseMg: 0.75,
    halfLifeHours: "36 - 54 giờ (Dài)",
    form: "Dung dịch hòa tan hoàn toàn (Non-particulate)",
    particulate: false,
    clinicalUse: "LỰA CHỌN SỐ 1 CHO TIÊM NGOÀI MÀNG CỨNG & RỄ THẦN KINH vì không có nguy cơ tắc mạch tủy sống. Giảm thiểu nguy cơ biến chứng teo mô mỡ dưới da."
  },
  {
    name: "Betamethasone (Diprospan: Dipropionate + Disodium phosphate)",
    antiInflammatoryPower: 25 - 30,
    mineralocorticoidPower: 0,
    equivalentDoseMg: 0.6 - 0.75,
    halfLifeHours: "36 - 54 giờ (Dài)",
    form: "Hỗn hợp: Dạng tan tác dụng nhanh + Hạt tinh thể kéo dài",
    particulate: true,
    clinicalUse: "Tiêm khớp, điểm bám gân, bao hoạt dịch. Tác dụng giảm đau khởi phát nhanh và duy trì kéo dài 4 - 6 tuần."
  }
];

function calculateAnestheticMax(weightKg, anestheticKey, concentrationIndex = 0) {
  const drug = ANESTHETICS_DATA[anestheticKey];
  if (!drug || !weightKg || weightKg <= 0) return null;

  const rawMaxMg = weightKg * drug.maxDosePerKg;
  const safeMaxMg = Math.min(rawMaxMg, drug.absoluteMaxMg);

  const selectedConc = drug.concentrations[concentrationIndex] || drug.concentrations[0];
  const maxVolumeMl = (safeMaxMg / selectedConc.mgPerMl).toFixed(1);

  return {
    drugName: drug.name,
    weightKg: weightKg,
    maxDosePerKg: drug.maxDosePerKg,
    absoluteMaxMg: drug.absoluteMaxMg,
    safeMaxMg: Math.round(safeMaxMg),
    selectedConcentration: selectedConc.label,
    mgPerMl: selectedConc.mgPerMl,
    maxVolumeMl: maxVolumeMl,
    onset: drug.onset,
    duration: drug.duration
  };
}

function calculateSteroidEquivalence(doseMg, fromSteroidName, toSteroidName) {
  const fromSteroid = STEROIDS_DATA.find(s => s.name.includes(fromSteroidName));
  const toSteroid = STEROIDS_DATA.find(s => s.name.includes(toSteroidName));

  if (!fromSteroid || !toSteroid || !doseMg || doseMg <= 0) return null;

  // equivalentDoseMg is the reference amount equivalent to 20mg Hydrocortisone
  const hydrocortisoneEquiv = (doseMg / fromSteroid.equivalentDoseMg) * 20;
  const targetDose = (hydrocortisoneEquiv / 20) * toSteroid.equivalentDoseMg;

  return {
    fromSteroid: fromSteroid.name,
    fromDose: doseMg,
    toSteroid: toSteroid.name,
    toDose: targetDose.toFixed(2),
    hydrocortisoneEquiv: hydrocortisoneEquiv.toFixed(1)
  };
}

// Export for app usage
if (typeof window !== "undefined") {
  window.ANESTHETICS_DATA = ANESTHETICS_DATA;
  window.STEROIDS_DATA = STEROIDS_DATA;
  window.calculateAnestheticMax = calculateAnestheticMax;
  window.calculateSteroidEquivalence = calculateSteroidEquivalence;
}
