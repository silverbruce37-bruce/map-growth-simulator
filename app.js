// ==================== GLOBAL SETTINGS & CONFIG ====================
const TEST_LENGTH = 10; // G1 default. G2–12 use 40 unless the landing dropdown overrides.
const historyKey = "map-high-fidelity-history-v3";
const exposureKey = "map-high-fidelity-exposure-v3";
const studentDbKey = "map-high-fidelity-students-v3";
const studentApiEndpoint = "/api/students";
const labels = ["A", "B", "C", "D"];

// NWEA National Average Norms for reference
const nweaNorms = {
  math: {
    1: { Fall: 162, Winter: 173, Spring: 180 },
    2: { Fall: 175, Winter: 184, Spring: 191 },
    3: { Fall: 188, Winter: 196, Spring: 203 },
    4: { Fall: 199, Winter: 205, Spring: 211 },
    5: { Fall: 209, Winter: 214, Spring: 220 },
    6: { Fall: 217, Winter: 221, Spring: 225 },
    7: { Fall: 223, Winter: 226, Spring: 229 },
    8: { Fall: 228, Winter: 231, Spring: 234 },
    9: { Fall: 231, Winter: 234, Spring: 237 },
    10: { Fall: 234, Winter: 237, Spring: 240 },
    11: { Fall: 236, Winter: 239, Spring: 242 },
    12: { Fall: 238, Winter: 241, Spring: 244 }
  },
  reading: {
    1: { Fall: 157, Winter: 168, Spring: 177 },
    2: { Fall: 172, Winter: 181, Spring: 188 },
    3: { Fall: 186, Winter: 193, Spring: 199 },
    4: { Fall: 196, Winter: 201, Spring: 206 },
    5: { Fall: 204, Winter: 208, Spring: 212 },
    6: { Fall: 210, Winter: 213, Spring: 216 },
    7: { Fall: 214, Winter: 217, Spring: 220 },
    8: { Fall: 218, Winter: 221, Spring: 224 },
    9: { Fall: 221, Winter: 224, Spring: 227 },
    10: { Fall: 224, Winter: 227, Spring: 230 },
    11: { Fall: 226, Winter: 229, Spring: 232 },
    12: { Fall: 228, Winter: 231, Spring: 234 }
  }
};

const skillLabels = {
  "number-sense": "Number Sense & Place Value",
  "operations": "Operations & Algebraic Thinking",
  "fractions-decimals": "Fractions & Decimals",
  "measurement": "Measurement & Data",
  "geometry": "Geometry",
  "multi-step-reasoning": "Multi-step Reasoning",
  "vocabulary-context": "Vocabulary in Context",
  "main-idea-summary": "Main Idea & Summary",
  "inference": "Inference",
  "text-evidence": "Text Evidence",
  "authors-purpose": "Author's Purpose",
  "paired-passage-set": "Paired Passage Reasoning",
  "grammar-usage": "Grammar & Usage",
  "mechanics": "Mechanics",
  "sentence-structure": "Sentence Structure",
  "paragraph-organization": "Paragraph Organization",
  "revision": "Revision",
  "life-science": "Life Sciences",
  "physical-science": "Physical Sciences",
  "experimental-design": "Experimental Design",
  "claim-evidence-reasoning": "Claim-Evidence-Reasoning",
  "economics": "Economics",
  "source-analysis": "Source Analysis"
};

// Existing SUBJECT MICROSKILLS words only. No live Notion write, no new catalog.
const notionMicroskillMap = {
  "number-sense": { subject: "Acad: Mathematics", skill: "Number Sense", micro: "Place Value" },
  "operations": { subject: "Acad: Mathematics", skill: "Algebra", micro: "Equations" },
  "fractions-decimals": { subject: "Acad: Mathematics", skill: "Number Sense", micro: "Fractions" },
  "measurement": { subject: "Acad: Mathematics", skill: "Measurement", micro: "Length" },
  "geometry": { subject: "Acad: Mathematics", skill: "Geometry", micro: "Shapes" },
  "multi-step-reasoning": { subject: "Academics", skill: "Critical Thinking", micro: "Problem Solving" },
  "vocabulary-context": { subject: "SAT Bridge", skill: "Vocabulary in Context", micro: "Context Clues" },
  "main-idea-summary": { subject: "SAT Bridge", skill: "Reading Comprehension", micro: "Main Ideas" },
  "inference": { subject: "Acad: Filipino", skill: "Reading", micro: "Inference" },
  "text-evidence": { subject: "SAT Reading & Writing (old)", skill: "Evidence Command", micro: "Textual Evidence" },
  "authors-purpose": { subject: "SAT Bridge", skill: "Reading Comprehension", micro: "Author’s Tone" },
  "paired-passage-set": { subject: "SAT Bridge", skill: "Analyzing Relationships", micro: "Compare/Contrast" },
  "grammar-usage": { subject: "SAT Bridge", skill: "Grammar & Conventions", micro: "Subject-Verb Agreement" },
  "mechanics": { subject: "SAT Bridge", skill: "Grammar & Conventions", micro: "Punctuation" },
  "sentence-structure": { subject: "Academics", skill: "Writing", micro: "Sentence Structure" },
  "paragraph-organization": { subject: "SAT Bridge", skill: "Writing Organization & Style", micro: "Paragraph Flow" },
  "revision": { subject: "DSAT Fundamentals - Reading and Writing", skill: "Rhetorical Revision and Cohesion", micro: "Selecting Logical Transitions" },
  "life-science": { subject: "Acad: Science", skill: "Biology", micro: "Cells" },
  "physical-science": { subject: "Acad: Science", skill: "Physics", micro: "Kinematics" },
  "experimental-design": { subject: "Acad: Science", skill: "Scientific Method", micro: "Experimentation" },
  "claim-evidence-reasoning": { subject: "Comprehensive Writing", skill: "Structured Reasoning", micro: "Uses claim-evidence-reasoning" },
  "economics": { subject: "Acad: Social Trinity", skill: "Economics", micro: "Needs & Wants" },
  "source-analysis": { subject: "Acad: Social Trinity", skill: "Research", micro: "Primary Sources" },
  "quadratic-factoring": { subject: "SAT Math", skill: "Advanced Math", micro: "Roots & Factors" },
  "linear-model": { subject: "SAT Math", skill: "Modeling & Applications", micro: "Systems of Inequalities" },
  "exponential-model": { subject: "SAT Math", skill: "Modeling & Applications", micro: "Periodic Models" },
  "piecewise-function": { subject: "SAT Math", skill: "Modeling & Applications", micro: "Piecewise Functions" },
  "conditional-probability": { subject: "Acad: Mathematics", skill: "Data & Stats", micro: "Probability" },
  "scatterplot-trend": { subject: "SAT Math", skill: "Problem Solving & Data", micro: "Scatterplots" },
  "trigonometric-ratio": { subject: "SAT Math", skill: "Geometry & Trigonometry", micro: "Sectors & Arcs" },
  "trigonometric-model": { subject: "SAT Math", skill: "Geometry & Trigonometry", micro: "Transformations" }
};

// Remediation playbook for weaknesses
const remediationPlaybook = {
  "number-sense": "자릿값 차트와 수직선을 활용하여 자릿수의 물리적 가치를 시각화하는 복습이 필요합니다.",
  "operations": "받아올림/내림이 있는 덧셈과 뺄셈 시 자릿수 정렬 실수를 방지하기 위한 그리드 종이 풀이를 권장합니다.",
  "fractions-decimals": "전체 조각과 색칠된 조각의 비율 관계를 그림으로 그려 분수 개념의 시각적 연결을 공고히 하십시오.",
  "measurement": "단위 변환 문제 해결 시 변환 테이블을 손으로 직접 그린 후 대입하여 실수율을 줄이도록 하십시오.",
  "geometry": "좌표평면 대칭 이동이나 둘레/넓이의 공식 구분 노트를 제작하여 헷갈리는 공식을 정리해야 합니다.",
  "multi-step-reasoning": "두 단계 이상의 복잡한 문장제 문제 해결 시, 식 1단계와 2단계를 분할 작성하는 연습을 진행하십시오.",
  "vocabulary-context": "모르는 단어가 등장할 때 앞뒤 문맥 단서(Context Clue)를 색칠하고 단어를 빈칸으로 대체해 추론하는 훈련이 필요합니다.",
  "main-idea-summary": "지문의 세부 사항(Detail)과 주제(Main Idea)를 골라내는 피라미드 차트를 활용하여 독해 요약력을 키우십시오.",
  "inference": "개인적 상상이 아닌 텍스트 안에서 직접 찾아낼 수 있는 단서 2가지를 조합해 결론을 짓는 증거 기반 추론을 연마하십시오.",
  "text-evidence": "오답 선택 시 자신의 감이 아닌 정답을 보증하는 본문의 정확한 문장에 형광펜을 칠해 대조하는 습관을 들이십시오.",
  "authors-purpose": "지문이 정보를 주는지(Inform), 설득하는지(Persuade), 묘사하는지(Describe)의 저자 서술 동기 체크리스트를 연습하십시오.",
  "paired-passage-set": "두 지문의 공통 주제와 상반되는 핵심 주장의 비교 매트릭스 도표를 그려 거시적인 논점 비교 능력을 함양하십시오.",
  "grammar-usage": "주어와 동사의 단/복수 매치, 대명사 선행사 일치 규정을 문법 체크리스트로 확인하는 습관을 기르십시오.",
  "mechanics": "대문자 표기 및 콤마/마침표/따옴표 사용 여부를 확인하는 4대 기계적 교정 규칙을 손가서로 체크하십시오.",
  "sentence-structure": "두 문장을 연결할 때 인과관계(because, so)와 양보/대조(although, but)의 논리 접속사 매핑 훈련을 수행하십시오.",
  "paragraph-organization": "문맥에 맞지 않는 노이즈 문장을 식별해 삭제하고 글의 논리 전개 순서를 재정비하는 퍼즐 문장 맞추기를 시도하십시오.",
  "revision": "구어체나 모호한 단어(good, nice)를 정밀한 학술적 어휘(significant, precise)로 대체하는 어휘 격상 사전을 만드십시오.",
  "life-science": "생물의 서식지 환경과 신체적 특징의 유기적 원인-결과 관계를 개념 맵으로 구성하십시오.",
  "physical-science": "회로 차단이나 에너지 전달 실험 시 조작 변인과 통제 변인을 완벽히 구분하는 통제 대조표 작성을 훈련하십시오.",
  "experimental-design": "가설 설정, 변인 통제, 측정 데이터의 논리 흐름을 모형화하여 탐구 프로세스를 이해하게 하십시오.",
  "claim-evidence-reasoning": "주장-증거-추론(CER) 3단계 작성 양식을 매일 1개 실험 데이터에 대입해 영작하도록 조언해 주십시오.",
  "economics": "희소성과 기회비용의 선택 관계를 실생활 예시를 통해 체득하고 공급-수요 그래프 변화 원리를 설명해보게 하십시오.",
  "source-analysis": "1차 사료(일기, 당대 기록)와 2차 사료(후대 역사책)의 신뢰성 및 작성자의 편향 가능성을 파악하는 비판적 분석을 훈련하십시오"
};

// ==================== APP STATE ====================
let activeStudent = null;
let currentTest = null;
let lastAttempt = null;
let currentPractice = null;
let calculatorInstance = null;
let currentZoom = 1;
let notionStudentsLoaded = false;
let studentDirectory = [];

// ==================== DOM ELEMENTS ====================
const els = {
  // Screens
  landing: document.getElementById("landingScreen"),
  test: document.getElementById("testScreen"),
  results: document.getElementById("resultsScreen"),
  dashboard: document.getElementById("dashboardScreen"),
  
  // Navigation
  navDashboard: document.getElementById("navDashboardBtn"),
  navTest: document.getElementById("navTestBtn"),
  
  // Student DB
  studentSelect: document.getElementById("studentProfileSelect"),
  studentNameInput: document.getElementById("newStudentName"),
  studentGradeSelect: document.getElementById("newStudentGrade"),
  studentClassInput: document.getElementById("newStudentClass"),
  addStudentBtn: document.getElementById("addStudentBtn"),
  studentSyncStatus: document.getElementById("studentSyncStatus"),
  
  // Test Configuration
  testGradeSelect: document.getElementById("testGradeSelect"),
  testSubjectSelect: document.getElementById("testSubjectSelect"),
  testLengthSelect: document.getElementById("testLengthSelect"),
  startTestBtn: document.getElementById("startTestBtn"),
  
  // Testing UI Elements
  testTitle: document.getElementById("testTitle"),
  questionNum: document.getElementById("questionNum"),
  audioBtn: document.getElementById("audioBtn"),
  stimulus: document.getElementById("stimulusText"),
  question: document.getElementById("questionText"),
  choices: document.getElementById("choicesGrid"),
  nextBtn: document.getElementById("nextBtn"),
  
  // Toolbar Buttons
  toolCalculator: document.getElementById("toolCalculator"),
  toolHighlighter: document.getElementById("toolHighlighter"),
  toolEliminator: document.getElementById("toolEliminator"),
  toolLineReader: document.getElementById("toolLineReader"),
  toolZoomOut: document.getElementById("toolZoomOut"),
  toolZoomIn: document.getElementById("toolZoomIn"),
  
  // Calculator Container
  calcContainer: document.getElementById("calcContainer"),
  calcScreen: document.getElementById("calcScreen"),
  
  // Line Reader Guide
  lineReaderGuide: document.getElementById("lineReaderGuide"),
  lineReaderSlit: document.getElementById("lineReaderSlit"),
  
  // Results UI
  scoreMessage: document.getElementById("scoreMessage"),
  scoreRIT: document.getElementById("scoreRIT"),
  scorePercentile: document.getElementById("scorePercentile"),
  qualityGrid: document.getElementById("qualityGrid"),
  parentReport: document.getElementById("parentReport"),
  practiceStartBtn: document.getElementById("practiceStartBtn"),
  practiceSummary: document.getElementById("practiceSummary"),
  practiceFeedback: document.getElementById("practiceFeedback"),
  practiceFeedbackTitle: document.getElementById("practiceFeedbackTitle"),
  practiceFeedbackText: document.getElementById("practiceFeedbackText"),
  practiceContinueBtn: document.getElementById("practiceContinueBtn"),
  printBtn: document.getElementById("printReportBtn"),
  againBtn: document.getElementById("againBtn"),
  clearHistoryBtn: document.getElementById("clearHistoryBtn"),
  
  // Dashboard UI
  dashStudentSelect: document.getElementById("dashStudentSelect"),
  dashStudentInfo: document.getElementById("dashStudentInfo"),
  dashChart: document.getElementById("dashChart"),
  dashAttemptsTable: document.getElementById("dashAttemptsTable")
};

// ==================== DRAGGABLE UTILITY ====================
function makeDraggable(element, handle) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  handle.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    if (e.target.classList.contains("calc-close-btn")) return;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    // Bounds check
    let newTop = element.offsetTop - pos2;
    let newLeft = element.offsetLeft - pos1;
    
    element.style.top = Math.max(10, Math.min(window.innerHeight - 100, newTop)) + "px";
    element.style.left = Math.max(10, Math.min(window.innerWidth - 200, newLeft)) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Line Reader Draggable Vertically
function makeVerticalDraggable(element, handle) {
  let pos2 = 0, pos4 = 0;
  handle.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos2 = pos4 - e.clientY;
    pos4 = e.clientY;
    
    let newTop = element.offsetTop - pos2;
    // Limit vertical drag boundary inside the test screen
    const testScreenHeight = els.test.offsetHeight;
    element.style.top = Math.max(60, Math.min(testScreenHeight - 120, newTop)) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// ==================== FLOATING CALCULATOR LOGIC ====================
function initCalculator() {
  const calcButtons = document.querySelectorAll(".calc-btn");
  let currentInput = "";
  
  calcButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.dataset.val;
      if (val === "C") {
        currentInput = "";
        els.calcScreen.value = "0";
      } else if (val === "=") {
        try {
          // Replace math symbols for calculation safety
          let expression = currentInput.replace(/x/g, "*").replace(/÷/g, "/");
          let result = eval(expression);
          if (result === undefined || isNaN(result)) {
            els.calcScreen.value = "Error";
          } else {
            // Round floating points
            els.calcScreen.value = parseFloat(result.toFixed(6));
            currentInput = String(els.calcScreen.value);
          }
        } catch (err) {
          els.calcScreen.value = "Error";
          currentInput = "";
        }
      } else {
        if (els.calcScreen.value === "0" || els.calcScreen.value === "Error") {
          currentInput = "";
        }
        currentInput += val;
        els.calcScreen.value = currentInput;
      }
    });
  });
  
  // Close calculator handler
  document.getElementById("calcCloseBtn").addEventListener("click", () => {
    els.calcContainer.hidden = true;
    els.toolCalculator.classList.remove("active");
  });
  
  makeDraggable(els.calcContainer, document.getElementById("calcHeader"));
}

// ==================== ADAPTIVE CAT MATH (RASCH MODEL) ====================
function getBaselineRIT(subject, grade) {
  // Calibrated NWEA norms baselines
  const bases = {
    math: { 1: 160, 2: 175, 3: 190, 4: 202, 5: 211, 6: 218, 7: 224, 8: 229, 9: 233, 10: 236, 11: 239, 12: 242 },
    reading: { 1: 155, 2: 172, 3: 188, 4: 198, 5: 206, 6: 212, 7: 216, 8: 220, 9: 224, 10: 227, 11: 230, 12: 233 },
    language: { 1: 156, 2: 174, 3: 189, 4: 200, 5: 207, 6: 213, 7: 217, 8: 221, 9: 225, 10: 228, 11: 231, 12: 234 },
    science: { 1: 155, 2: 172, 3: 187, 4: 197, 5: 205, 6: 211, 7: 217, 8: 222, 9: 226, 10: 229, 11: 232, 12: 235 },
    social: { 1: 156, 2: 173, 3: 188, 4: 197, 5: 205, 6: 212, 7: 217, 8: 222, 9: 226, 10: 229, 11: 232, 12: 235 }
  };
  return bases[subject]?.[grade] || 190;
}

function getTargetTestLength(subject, grade) {
  if ([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(grade) && ["math", "reading", "language", "science", "social"].includes(subject)) return 40;
  return TEST_LENGTH;
}

function getConfiguredTestLength(subject, grade) {
  const raw = els.testLengthSelect?.value || "auto";
  if (raw === "10" || raw === "40") return Number(raw);
  return getTargetTestLength(subject, grade);
}

function computeRaschSE(attemptsHistory, ritEst) {
  if (!attemptsHistory || !attemptsHistory.length) return null;
  let informationSum = 0;
  attemptsHistory.forEach(item => {
    const p = probabilityCorrect(ritEst, item.difficulty);
    informationSum += p * (1 - p) * 0.1151;
  });
  if (informationSum <= 0) return null;
  return 1 / Math.sqrt(informationSum);
}

function computeUniquenessPct(rows) {
  if (!rows || !rows.length) return null;
  const unique = new Set(rows.map(r => r.id)).size;
  return Math.round((unique / rows.length) * 100);
}

function resolveNotionMicroskill(skillId) {
  if (notionMicroskillMap[skillId]) return notionMicroskillMap[skillId];
  const label = skillLabels[skillId] || String(skillId || "").replace(/-/g, " ");
  return { subject: "—", skill: label, micro: label, fallback: true };
}

function collectSkillStats(rows) {
  const skillStats = {};
  (rows || []).forEach(r => {
    if (!r.skillId) return;
    if (!skillStats[r.skillId]) skillStats[r.skillId] = { key: r.skillId, correct: 0, total: 0 };
    skillStats[r.skillId].total += 1;
    if (r.isCorrect) skillStats[r.skillId].correct += 1;
  });
  return Object.values(skillStats).map(s => ({
    ...s,
    label: skillLabels[s.key] || s.key,
    rate: s.total ? Math.round((s.correct / s.total) * 100) : 0
  })).sort((a, b) => a.rate - b.rate);
}

function pickWeakSkillIds(rows, maxSkills = 2) {
  const ranked = collectSkillStats(rows);
  const weak = ranked.filter(s => s.rate < 60);
  const pool = weak.length ? weak : ranked.slice(0, maxSkills);
  return pool.slice(0, maxSkills).map(s => s.key);
}

// Probability of a correct answer given student ability (RIT) and item difficulty (RIT)
// Rasch base-10 logistic formula: P = 1 / (1 + 10^((RIT_stud - RIT_item) / 20))
function probabilityCorrect(ritStudent, ritItem) {
  return 1 / (1 + Math.pow(10, (ritItem - ritStudent) / 20));
}

// Newton-Raphson Maximum Likelihood RIT Score Updater
function updateRITRasch(ritCurrent, attemptsHistory) {
  if (attemptsHistory.length === 0) return ritCurrent;

  let ritEst = ritCurrent;
  
  // Perform stabilized estimation update
  // NR adjustment step: delta = (Actual_Correct - Expected_Correct) / Sum(Information)
  let actualSum = attemptsHistory.reduce((sum, item) => sum + (item.isCorrect ? 1 : 0), 0);
  let expectedSum = 0;
  let informationSum = 0;

  attemptsHistory.forEach(item => {
    let p = probabilityCorrect(ritEst, item.difficulty);
    expectedSum += p;
    // Information under Rasch model scaled for the log-10 factor (approx 0.1151 multiplier)
    informationSum += p * (1 - p) * 0.1151;
  });

  if (informationSum > 0) {
    let adjustment = (actualSum - expectedSum) / informationSum;
    // Cap single-question RIT jumps to maintain CAT algorithm stability
    const maxAdjustment = 15;
    adjustment = Math.max(-maxAdjustment, Math.min(maxAdjustment, adjustment));
    ritEst += adjustment;
  } else {
    // Fallback simple adjustment if info goes to 0 (all correct or incorrect in early steps)
    const lastItem = attemptsHistory[attemptsHistory.length - 1];
    const modifier = lastItem.isCorrect ? 12 : -10;
    ritEst += modifier;
  }

  // Safety boundaries
  return Math.round(Math.max(100, Math.min(300, ritEst)));
}

// Next question adaptive selection
function selectNextAdaptiveQuestion(subject, preferredGrade, currentRIT, answeredIdsSet) {
  const pool = window.productionQuestionBank.filter(item => 
    item.subject === subject && 
    item.status === "approved" &&
    !answeredIdsSet.has(item.id) &&
    // Allow out-of-grade adaptive queries (up to 1 grade level above/below)
    Math.abs(item.grade - preferredGrade) <= 1
  );

  if (pool.length === 0) {
    // If no specific subject questions are left, fall back to general database fallback
    const fallback = window.productionQuestionBank.filter(item => !answeredIdsSet.has(item.id));
    return fallback[0] || null;
  }

  // Sort candidate items by closeness of their RIT difficulty to student's estimated RIT
  // Also introduce mild exposure control balancing
  const exposure = loadExposure();
  
  const sorted = [...pool].sort((a, b) => {
    let diffA = Math.abs(a.ritDifficulty - currentRIT);
    let diffB = Math.abs(b.ritDifficulty - currentRIT);
    
    if (Math.abs(diffA - diffB) < 6) {
      // If difficulties are very close, prioritize the item with less historical exposure
      let expA = exposure[a.id]?.count || 0;
      let expB = exposure[b.id]?.count || 0;
      return expA - expB;
    }
    return diffA - diffB;
  });

  return sorted[0];
}

// ==================== EXPOSURE TRACKING ====================
function loadExposure() {
  try { return JSON.parse(localStorage.getItem(exposureKey)) || {}; } catch { return {}; }
}

function saveExposure(exposure) {
  try { localStorage.setItem(exposureKey, JSON.stringify(exposure)); } catch {}
}

function recordItemsExposure(rows) {
  const exposure = loadExposure();
  const now = new Date().toISOString();
  rows.forEach(row => {
    const stat = exposure[row.id] || { count: 0, lastSeen: "" };
    exposure[row.id] = { count: stat.count + 1, lastSeen: now };
  });
  saveExposure(exposure);
}

// ==================== STUDENT PROFILE DB HANDLERS ====================
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function getDifficultyBandLabel(difficulty) {
  return ({
    Low: "Low · Foundation",
    Medium: "Medium · Core Grade-Level",
    High: "High · Advanced Transfer",
    Advanced: "Advanced · Killer/Ceiling"
  })[difficulty] || String(difficulty || "Unlabeled");
}

function getItemTypeLabel(item) {
  const skill = item.skillId || "";
  const domain = item.domain || "";
  const typeMap = {
    "multi-step-reasoning": "Multi-Step Reasoning",
    "linear-model": "Linear Model",
    "quadratic-factoring": "Quadratic Structure",
    "scatterplot-trend": "Data Trend",
    "coordinate-distance": "Coordinate Geometry",
    "exponential-model": "Exponential Model",
    "rational-expression-domain": "Rational Expression & Domain",
    "conditional-probability": "Conditional Probability",
    "inverse-function": "Inverse Function",
    "quadratic-model-vertex": "Quadratic Optimization",
    "regression-residual": "Regression / Residual",
    "logarithmic-equation": "Logarithmic Equation",
    "trigonometric-model": "Trigonometric Model",
    "model-limitations": "Model Limitation",
    "confounding-variable": "Confounding Variable",
    "proof-counterexample": "Proof / Counterexample",
    "function-composition": "Function Composition",
    "margin-of-error": "Statistical Precision",
    "trigonometric-ratio": "Trigonometric Ratio",
    "rational-function-domain": "Rational Function Domain",
    "complex-number-operations": "Complex Numbers",
    "exponential-decay": "Exponential Decay",
    "optimization": "Optimization",
    "correlation-causation": "Correlation vs Causation",
    "piecewise-function": "Piecewise Model",
    "experimental-design": "Experimental Design",
    "claim-evidence-reasoning": "Claim-Evidence-Reasoning",
    "physical-science": "Physical Science Model",
    "gas-law-model": "Gas Law Model",
    "earth-systems": "Earth Systems Model",
    "systems-reasoning": "Systems Reasoning",
    "quantitative-model": "Quantitative Model",
    "uncertainty": "Model Uncertainty",
    "forecast-uncertainty": "Forecast Uncertainty"
  };
  return typeMap[skill] || skillLabels[skill] || domain || "General Reasoning";
}

function getProcessPlanForType(type, subject) {
  const t = String(type || "").toLowerCase();
  const s = String(subject || "").toLowerCase();
  if (s === "math") {
    if (t.includes("model") || t.includes("function") || t.includes("linear") || t.includes("quadratic")) return ["상황에서 변수/단위 표시", "표·그래프·식으로 바꾸기", "식의 각 항이 뜻하는 바 설명", "동형 문제 5개 재풀이"];
    if (t.includes("probability") || t.includes("data") || t.includes("statistics") || t.includes("precision")) return ["표의 조건/전체 집단 구분", "분모를 먼저 결정", "계산 전 예상 방향 말하기", "오답 선택지가 쓴 잘못된 분모 기록"];
    if (t.includes("geometry") || t.includes("trigonometric")) return ["도형에 알려진 값 표시", "필요한 공식/비율 선택 이유 설명", "계산식 세우기", "그림 없이 같은 구조 재현"];
    return ["문제 조건 밑줄", "한 단계씩 식 만들기", "답의 단위와 크기 검산", "오답 원인 한 문장 기록"];
  }
  if (s === "reading") return ["질문이 묻는 역할 표시", "근거 문장 2개 찾기", "선택지의 과장 표현 제거", "정답이 지문 범위를 넘지 않는지 확인"];
  if (s === "language") return ["문장의 목적 확인", "문법/구조 오류와 논리 오류 분리", "수정 전후 의미 비교", "더 정확한 학술 표현으로 재작성"];
  if (s === "science") return ["변수와 통제 조건 표시", "자료가 직접 말하는 claim 작성", "evidence와 reasoning 분리", "모델의 빠진 변수 또는 한계 찾기"];
  if (s === "social") return ["출처의 작성자/목적 확인", "자료가 말하는 사실과 관점 분리", "다른 자료와 corroboration", "정책/경제 문제는 benefit-cost 둘 다 쓰기"];
  return ["오답 문항 재독", "정답 근거 표시", "비슷한 문항 재풀이", "실수 패턴 기록"];
}

function getGrowthPrediction(attempt, weakTypeCount, weakSkillCount) {
  const currentAccuracy = attempt.totalCount ? Math.round((attempt.correctCount / attempt.totalCount) * 100) : 0;
  const baseLift = Math.max(3, Math.min(12, weakTypeCount * 3 + weakSkillCount * 2));
  const twoWeekAccuracy = Math.min(95, currentAccuracy + baseLift);
  const fourWeekAccuracy = Math.min(98, currentAccuracy + baseLift + 6);
  const twoWeekRit = Math.round(attempt.ritScore + Math.max(2, Math.min(6, baseLift / 2)));
  const fourWeekRit = Math.round(attempt.ritScore + Math.max(4, Math.min(10, baseLift / 2 + 4)));
  return { currentAccuracy, twoWeekAccuracy, fourWeekAccuracy, twoWeekRit, fourWeekRit };
}

function loadLocalStudents() {
  try { return JSON.parse(localStorage.getItem(studentDbKey)) || []; } catch { return []; }
}

function loadStudents() {
  return studentDirectory.length ? studentDirectory : loadLocalStudents();
}

function saveStudents(students) {
  try { localStorage.setItem(studentDbKey, JSON.stringify(students)); } catch {}
}

function mergeStudentDirectories(notionStudents, localStudents) {
  const merged = [...notionStudents];
  const notionIds = new Set(notionStudents.map(student => student.id));
  localStudents.forEach(student => {
    if (!notionIds.has(student.id)) merged.push(student);
  });
  return merged;
}

function setStudentSyncStatus(message, state = "") {
  if (!els.studentSyncStatus) return;
  els.studentSyncStatus.textContent = message;
  els.studentSyncStatus.dataset.state = state;
}

function appendStudentOption(select, student) {
  const option = document.createElement("option");
  option.value = student.id;
  option.textContent = `${student.name} (Gr. ${student.grade} - ${student.className})`;
  select.appendChild(option);
}

function populateStudentDropdowns() {
  const students = loadStudents();
  const selectedStudentId = els.studentSelect.value;
  const selectedDashboardId = els.dashStudentSelect.value;
  
  els.studentSelect.innerHTML = "";
  els.dashStudentSelect.innerHTML = "";
  
  const studentPlaceholder = document.createElement("option");
  studentPlaceholder.value = "";
  studentPlaceholder.textContent = "-- Choose Student Profile --";
  els.studentSelect.appendChild(studentPlaceholder);

  const dashboardPlaceholder = document.createElement("option");
  dashboardPlaceholder.value = "";
  dashboardPlaceholder.textContent = "-- Select Student to View --";
  els.dashStudentSelect.appendChild(dashboardPlaceholder);
  
  students.forEach(st => {
    appendStudentOption(els.studentSelect, st);
    appendStudentOption(els.dashStudentSelect, st);
  });

  if (students.some(st => st.id === selectedStudentId)) els.studentSelect.value = selectedStudentId;
  if (students.some(st => st.id === selectedDashboardId)) els.dashStudentSelect.value = selectedDashboardId;
}

async function refreshStudentsFromNotion() {
  setStudentSyncStatus("Loading student directory from Notion...", "loading");

  try {
    let accessCode = sessionStorage.getItem("studentDirectoryAccessCode") || "";
    const headers = { Accept: "application/json" };
    if (accessCode) headers["X-Student-Directory-Key"] = accessCode;

    let response = await fetch(studentApiEndpoint, { headers });
    if (response.status === 401) {
      accessCode = window.prompt("Enter the teacher access code to load the Notion student directory:") || "";
      if (!accessCode) throw new Error("Student directory access code was not provided.");

      sessionStorage.setItem("studentDirectoryAccessCode", accessCode);
      response = await fetch(studentApiEndpoint, {
        headers: {
          Accept: "application/json",
          "X-Student-Directory-Key": accessCode
        }
      });
    }

    const payload = await response.json();
    if (!response.ok) {
      if (response.status === 401) sessionStorage.removeItem("studentDirectoryAccessCode");
      throw new Error(payload.error || "Notion student sync failed.");
    }

    const notionStudents = Array.isArray(payload.students) ? payload.students : [];
    notionStudentsLoaded = true;
    studentDirectory = mergeStudentDirectories(notionStudents, loadLocalStudents());
    populateStudentDropdowns();
    setStudentSyncStatus(`Loaded ${notionStudents.length} Notion students.`, "ok");
  } catch (error) {
    notionStudentsLoaded = false;
    studentDirectory = loadLocalStudents();
    populateStudentDropdowns();
    setStudentSyncStatus("Notion student directory unavailable. Using local profiles.", "error");
    console.warn(error);
  }
}

function handleStudentChange() {
  const students = loadStudents();
  const selectedStudent = students.find(s => s.id === els.studentSelect.value);
  if (selectedStudent) {
    els.testGradeSelect.value = String(selectedStudent.grade);
  }
}

function handleAddStudent() {
  const name = els.studentNameInput.value.trim();
  const grade = Number(els.studentGradeSelect.value);
  const className = els.studentClassInput.value.trim() || "Regular";
  
  if (!name) {
    alert("Please enter a valid student name.");
    return;
  }
  
  const students = loadLocalStudents();
  const newStudent = {
    id: "st-" + Date.now(),
    name,
    grade,
    className
  };
  
  students.push(newStudent);
  saveStudents(students);
  studentDirectory = mergeStudentDirectories(
    notionStudentsLoaded ? studentDirectory.filter(student => student.id.startsWith("notion-")) : [],
    students
  );
  
  els.studentNameInput.value = "";
  els.studentClassInput.value = "";
  
  populateStudentDropdowns();
  els.studentSelect.value = newStudent.id;
  handleStudentChange();
  alert(`Profile for '${name}' added successfully!`);
}

// ==================== TEST SESSION LOGIC ====================
function startTestSession() {
  const studentId = els.studentSelect.value;
  if (!studentId) {
    alert("Please select a student profile before beginning.");
    return;
  }
  
  const students = loadStudents();
  activeStudent = students.find(s => s.id === studentId);
  if (!activeStudent) {
    alert("The selected student profile is no longer available. Please choose another student.");
    populateStudentDropdowns();
    return;
  }
  
  const subject = els.testSubjectSelect.value;
  const grade = Number(els.testGradeSelect.value);
  const baseline = getBaselineRIT(subject, grade);
  
  currentTest = {
    student: activeStudent,
    subject,
    grade,
    currentRIT: baseline,
    baselineRIT: baseline,
    targetLength: getConfiguredTestLength(subject, grade),
    mode: "test",
    answeredQuestions: [],
    questionSet: [],
    currentIndex: 0,
    startTime: new Date().toISOString()
  };
  
  // Select first adaptive question
  const firstQ = selectNextAdaptiveQuestion(subject, grade, baseline, new Set());
  if (!firstQ) {
    alert("No approved questions found for this configuration in the question bank.");
    return;
  }
  
  currentTest.questionSet.push(firstQ);
  
  // Hide panels, reveal test screen
  els.landing.hidden = true;
  els.results.hidden = true;
  els.dashboard.hidden = true;
  els.test.hidden = false;
  
  // Reset tools
  deactivateToolbarTools();
  document.body.style.setProperty("--zoom-factor", 1);
  currentZoom = 1;
  
  renderActiveQuestion();
}

function deactivateToolbarTools() {
  els.toolCalculator.classList.remove("active");
  els.toolHighlighter.classList.remove("active");
  els.toolEliminator.classList.remove("active");
  els.toolLineReader.classList.remove("active");
  
  els.calcContainer.hidden = true;
  els.lineReaderGuide.hidden = true;
  
  // Clear highlighting listener
  els.stimulus.removeEventListener("mouseup", handleTextHighlight);
  els.question.removeEventListener("mouseup", handleTextHighlight);
}

function renderActiveQuestion() {
  if (!currentTest) return;
  
  const qIndex = currentTest.currentIndex;
  const q = currentTest.questionSet[qIndex];
  
  // Set headers
  els.testTitle.textContent = `K-12 ${currentTest.subject.toUpperCase()} Adaptive Test (Grade ${currentTest.grade})`;
  els.questionNum.textContent = `Question ${qIndex + 1} of ${currentTest.targetLength}`;
  
  // Badges
  document.getElementById("badgeDomain").textContent = q.domain;
  document.getElementById("badgeItemType").textContent = `Type: ${getItemTypeLabel(q)}`;
  document.getElementById("badgeDifficultyBand").textContent = getDifficultyBandLabel(q.difficulty);
  document.getElementById("badgeRIT").textContent = `RIT Difficulty: ${q.ritDifficulty}`;
  
  const badgeCalc = document.getElementById("badgeCalc");
  if (q.calculator && currentTest.subject === "math") {
    badgeCalc.hidden = false;
    els.toolCalculator.disabled = false;
  } else {
    badgeCalc.hidden = true;
    els.toolCalculator.disabled = true;
    els.calcContainer.hidden = true;
    els.toolCalculator.classList.remove("active");
  }
  
  // Set Text and optional media
  let stimulusHtml = q.stimulus || "";
  if (q.media?.type === "image") {
    stimulusHtml += `
      <figure class="question-media">
        <img src="${escapeHTML(q.media.src)}" alt="${escapeHTML(q.media.alt || "")}">
        ${q.media.caption ? `<figcaption>${escapeHTML(q.media.caption)}</figcaption>` : ""}
      </figure>
    `;
  } else if (q.media?.type === "html") {
    stimulusHtml += `
      <figure class="question-media">
        ${q.media.html || ""}
        ${q.media.caption ? `<figcaption>${escapeHTML(q.media.caption)}</figcaption>` : ""}
      </figure>
    `;
  }
  els.stimulus.innerHTML = stimulusHtml;
  els.question.textContent = q.question;
  
  // Read aloud speaker for Grade 1 & 2
  if (currentTest.grade <= 2) {
    els.audioBtn.hidden = false;
  } else {
    els.audioBtn.hidden = true;
  }
  
  // Options
  els.choices.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice";
    btn.innerHTML = `<span class="letter-box">${labels[idx]}</span><span>${opt}</span>`;
    btn.addEventListener("click", () => handleChoiceSelect(idx, btn));
    els.choices.appendChild(btn);
  });
  
  hidePracticeFeedback();
  els.nextBtn.disabled = true;
  const lastLabel = currentPractice ? "연습 제출" : "Submit Test";
  els.nextBtn.textContent = qIndex === currentTest.targetLength - 1 ? lastLabel : "Next ➔";
}

function handleChoiceSelect(idx, btnElement) {
  // If Answer Eliminator tool is active, cross out the option instead of selecting it
  if (els.toolEliminator.classList.contains("active")) {
    btnElement.classList.toggle("eliminated");
    btnElement.classList.remove("selected");
    return;
  }
  
  // Normal selection
  if (btnElement.classList.contains("eliminated")) return;
  
  const choices = els.choices.querySelectorAll(".choice");
  choices.forEach(ch => ch.classList.remove("selected"));
  
  btnElement.classList.add("selected");
  if (currentTest) currentTest.currentSelection = idx;
  if (currentPractice) currentPractice.currentSelection = idx;
  els.nextBtn.disabled = false;
}

function handleNextQuestion() {
  if (currentPractice) {
    handlePracticeNext();
    return;
  }
  if (!currentTest || currentTest.currentSelection === undefined) return;
  
  // Cancel active speech synthesis
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  
  const qIndex = currentTest.currentIndex;
  const q = currentTest.questionSet[qIndex];
  const selectedIdx = currentTest.currentSelection;
  const isCorrect = selectedIdx === q.answer;
  
  // Record response
  const responseData = {
    id: q.id,
    domain: q.domain,
    skillId: q.skillId,
    itemType: getItemTypeLabel(q),
    difficultyBand: q.difficulty,
    difficultyLabel: getDifficultyBandLabel(q.difficulty),
    difficulty: q.ritDifficulty,
    ritDifficulty: q.ritDifficulty,
    stimulus: q.stimulus,
    question: q.question,
    options: q.options,
    media: q.media,
    selected: selectedIdx,
    correctAnswer: q.answer,
    isCorrect,
    misconception: q.misconception,
    explanation: q.explanation
  };
  
  currentTest.answeredQuestions.push(responseData);
  
  // Run Rasch Update math calculations
  currentTest.currentRIT = updateRITRasch(currentTest.currentRIT, currentTest.answeredQuestions);
  
  if (qIndex < currentTest.targetLength - 1) {
    // Select next adaptive item based on new estimated RIT
    const answeredIdsSet = new Set(currentTest.answeredQuestions.map(item => item.id));
    const nextQ = selectNextAdaptiveQuestion(currentTest.subject, currentTest.grade, currentTest.currentRIT, answeredIdsSet);
    
    if (!nextQ) {
      // Fallback
      alert("Exhausted relevant questions in bank. Finalizing test early.");
      finalizeTestSession();
      return;
    }
    
    currentTest.questionSet.push(nextQ);
    currentTest.currentIndex += 1;
    currentTest.currentSelection = undefined;
    renderActiveQuestion();
  } else {
    // End of test
    finalizeTestSession();
  }
}

function finalizeTestSession() {
  // Exposure records
  recordItemsExposure(currentTest.questionSet);
  
  // Compute final stats
  const finalRIT = currentTest.currentRIT;
  const baseRIT = currentTest.baselineRIT;
  
  // Simulator-only percentile approximation. Not an official NWEA table.
  const answered = currentTest.answeredQuestions.length || 1;
  const diff = finalRIT - baseRIT;
  const percentile = Math.max(1, Math.min(99, Math.round(50 + diff * 3.2)));
  const se = computeRaschSE(currentTest.answeredQuestions, finalRIT);
  
  const totalCorrect = currentTest.answeredQuestions.filter(x => x.isCorrect).length;
  const accuracy = Math.round((totalCorrect / answered) * 100);
  
  const attemptRecord = {
    id: "att-" + Date.now(),
    studentId: currentTest.student.id,
    studentName: currentTest.student.name,
    grade: currentTest.grade,
    subject: currentTest.subject,
    score: accuracy,
    ritScore: finalRIT,
    baselineRIT: baseRIT,
    percentile,
    percentileIsEstimate: true,
    standardError: se == null ? null : Math.round(se * 10) / 10,
    uniquenessPct: computeUniquenessPct(currentTest.answeredQuestions),
    correctCount: totalCorrect,
    totalCount: answered,
    date: new Date().toLocaleDateString(),
    rows: currentTest.answeredQuestions
  };
  
  // Save to history
  const history = loadHistory();
  history.push(attemptRecord);
  try {
    localStorage.setItem(historyKey, JSON.stringify(history));
  } catch {}
  
  // Clear layout, reveal results
  els.test.hidden = true;
  els.results.hidden = false;
  
  renderScoreReport(attemptRecord);
}

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(historyKey)) || []; } catch { return []; }
}

// ==================== GENERATING KOREAN PARENT REPORTS ====================
function renderScoreReport(attempt) {
  lastAttempt = attempt;
  els.scoreRIT.textContent = `${attempt.ritScore} RIT`;
  els.scorePercentile.textContent = `${attempt.percentile}%`;
  
  const baseline = attempt.baselineRIT ?? getBaselineRIT(attempt.subject, attempt.grade);
  const delta = attempt.ritScore - baseline;
  const accuracyRate = attempt.totalCount ? (attempt.correctCount / attempt.totalCount) : 0;
  let msg = "";
  if (delta >= 5 && accuracyRate >= 0.6) {
    msg = `${attempt.studentName} 학생의 추정 RIT(${attempt.ritScore})는 학년 기준선(${baseline})보다 ${delta}점 높고, 정답률은 ${Math.round(accuracyRate * 100)}%입니다.`;
  } else if (delta >= -5 || accuracyRate >= 0.4) {
    msg = `${attempt.studentName} 학생의 추정 RIT(${attempt.ritScore})는 학년 기준선(${baseline}) 대비 ${delta >= 0 ? "+" : ""}${delta}점이며, 정답률 ${Math.round(accuracyRate * 100)}%로 보완 여지가 있습니다.`;
  } else {
    msg = `${attempt.studentName} 학생의 추정 RIT(${attempt.ritScore})는 학년 기준선(${baseline})보다 ${Math.abs(delta)}점 낮고, 정답률 ${Math.round(accuracyRate * 100)}%로 기초 개념 재정비가 우선입니다.`;
  }
  els.scoreMessage.textContent = msg;
  
  const exposure = loadExposure();
  const seenCount = attempt.rows.filter(x => (exposure[x.id]?.count || 0) > 1).length;
  const highItems = attempt.rows.filter(x => (x.ritDifficulty || x.difficulty) >= 210);
  const highAccuracy = highItems.length ? Math.round((highItems.filter(x => x.isCorrect).length / highItems.length) * 100) : null;
  const uniqueness = attempt.uniquenessPct ?? computeUniquenessPct(attempt.rows);
  const se = attempt.standardError;

  const cards = [];
  if (uniqueness != null) {
    cards.push(`<div class="metric-card"><span>Item Uniqueness</span><strong>${uniqueness}%</strong><p>${uniqueness === 100 ? "이번 세트 문항 ID가 모두 다릅니다." : "같은 문항 ID가 반복되었습니다."}</p></div>`);
  }
  cards.push(`<div class="metric-card"><span>Exposure Quality</span><strong>${seenCount <= 2 ? "Excellent" : "Watch"}</strong><p>${seenCount} items seen in prior attempts.</p></div>`);
  if (highAccuracy != null) {
    cards.push(`<div class="metric-card"><span>High-RIT Accuracy</span><strong>${highAccuracy}%</strong><p>Performance on RIT 210+ items.</p></div>`);
  }
  if (se != null) {
    cards.push(`<div class="metric-card"><span>Standard Error</span><strong>+/-${se} RIT</strong><p>Rasch 정보량으로 계산한 추정 오차입니다.</p></div>`);
  }
  els.qualityGrid.innerHTML = cards.join("");
  
  if (els.practiceSummary) {
    els.practiceSummary.hidden = true;
    els.practiceSummary.innerHTML = "";
  }
  const weakIds = pickWeakSkillIds(attempt.rows, 2);
  if (els.practiceStartBtn) {
    els.practiceStartBtn.hidden = weakIds.length === 0;
  }
  
  generateKoreanReportCard(attempt);
}

function generateKoreanReportCard(attempt) {
  // Goal area statistics
  const skillStats = {};
  attempt.rows.forEach(r => {
    if (!skillStats[r.skillId]) {
      skillStats[r.skillId] = { correct: 0, total: 0 };
    }
    skillStats[r.skillId].total += 1;
    if (r.isCorrect) skillStats[r.skillId].correct += 1;
  });
  
  let skillTableRows = "";
  let weaknessList = [];
  
  Object.keys(skillStats).forEach(key => {
    const s = skillStats[key];
    const rate = Math.round((s.correct / s.total) * 100);
    let desc = "Foundational";
    let descKo = "기초 필요";
    if (rate >= 80) { desc = "High"; descKo = "높음"; }
    else if (rate >= 60) { desc = "HiAvg"; descKo = "높은 평균"; }
    else if (rate >= 40) { desc = "Avg"; descKo = "평균"; }
    else if (rate >= 20) { desc = "LoAvg"; descKo = "낮은 평균"; }
    
    const notionHit = resolveNotionMicroskill(key);
    const notionCell = notionHit.fallback
      ? `${notionHit.skill}`
      : `${notionHit.subject} · ${notionHit.skill} · ${notionHit.micro}`;
    skillTableRows += `
      <tr>
        <td><strong>${skillLabels[key] || key}</strong></td>
        <td>${notionCell}</td>
        <td>${desc}</td>
        <td>${descKo}</td>
        <td>${s.correct} / ${s.total}</td>
        <td>${rate}%</td>
      </tr>
    `;
    
    if (rate < 60) {
      weaknessList.push({ key, label: skillLabels[key] || key, correct: s.correct, total: s.total, rate });
    }
  });
  
  // Weakness sorting (worst first)
  weaknessList.sort((a, b) => a.rate - b.rate);
  const primaryWeak = weaknessList[0] || { label: "없음 (강점을 고루 유지 중)", key: "none" };

  const typeStats = {};
  attempt.rows.forEach(r => {
    const type = r.itemType || skillLabels[r.skillId] || r.skillId || "General Reasoning";
    if (!typeStats[type]) typeStats[type] = { correct: 0, total: 0 };
    typeStats[type].total += 1;
    if (r.isCorrect) typeStats[type].correct += 1;
  });
  const itemTypeRows = Object.keys(typeStats).sort().map(type => {
    const s = typeStats[type];
    const rate = Math.round((s.correct / s.total) * 100);
    return `
      <tr>
        <td><strong>${escapeHTML(type)}</strong></td>
        <td>${s.correct} / ${s.total}</td>
        <td>${rate}%</td>
      </tr>
    `;
  }).join("");

  const typeWeaknessList = Object.keys(typeStats).map(type => {
    const s = typeStats[type];
    const rate = Math.round((s.correct / s.total) * 100);
    const incorrectRows = attempt.rows.filter(r => (r.itemType || skillLabels[r.skillId] || r.skillId || "General Reasoning") === type && !r.isCorrect);
    const avgRit = Math.round(incorrectRows.reduce((sum, r) => sum + Number(r.ritDifficulty || r.difficulty || attempt.ritScore), 0) / Math.max(1, incorrectRows.length));
    return { type, correct: s.correct, total: s.total, rate, incorrect: s.total - s.correct, avgRit };
  }).filter(x => x.rate < 75 || x.incorrect > 0).sort((a, b) => (a.rate - b.rate) || (b.incorrect - a.incorrect));

  const processTargets = typeWeaknessList.slice(0, 4);
  const prediction = getGrowthPrediction(attempt, processTargets.length, weaknessList.length);
  const processRows = processTargets.length ? processTargets.map((wk, idx) => {
    const steps = getProcessPlanForType(wk.type, attempt.subject);
    const expected = idx === 0 ? "가장 큰 오답률 하락 예상" : idx === 1 ? "중난도 안정화 예상" : idx === 2 ? "고난도 접근률 개선" : "실수 재발 방지";
    return `
      <tr>
        <td><strong>${idx + 1}</strong></td>
        <td><strong>${escapeHTML(wk.type)}</strong><br><span class="muted-cell">현재 ${wk.correct}/${wk.total}, 정답률 ${wk.rate}%</span></td>
        <td>${steps.map((step, i) => `${i + 1}. ${escapeHTML(step)}`).join("<br>")}</td>
        <td>${expected}<br><span class="muted-cell">오답 평균 난이도 약 ${wk.avgRit} RIT</span></td>
      </tr>
    `;
  }).join("") : `
    <tr>
      <td><strong>1</strong></td>
      <td><strong>전 영역 심화</strong><br><span class="muted-cell">뚜렷한 약점 유형 없음</span></td>
      <td>1. Advanced/Killer 문항 재풀이<br>2. 풀이 근거를 말로 설명<br>3. 다른 표현의 parallel 문항 풀기<br>4. 시간 제한 적용</td>
      <td>고난도 안정성과 속도 개선 예상</td>
    </tr>
  `;

  const predictionHtml = `
    <div class="metrics-row" style="grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));">
      <div class="metric-card">
        <span>현재 정확도</span>
        <strong>${prediction.currentAccuracy}%</strong>
        <p>${attempt.correctCount}/${attempt.totalCount} correct</p>
      </div>
      <div class="metric-card">
        <span>2주 예측</span>
        <strong>${prediction.twoWeekRit} RIT</strong>
        <p>예상 정확도 ${prediction.twoWeekAccuracy}%</p>
      </div>
      <div class="metric-card">
        <span>4주 예측</span>
        <strong>${prediction.fourWeekRit} RIT</strong>
        <p>예상 정확도 ${prediction.fourWeekAccuracy}%</p>
      </div>
    </div>
  `;

  const itemAnalysisRows = attempt.rows.map((r, idx) => {
    const selected = r.options?.[r.selected] ?? "";
    const correct = r.options?.[r.correctAnswer] ?? "";
    return `
      <tr>
        <td><strong>${idx + 1}</strong></td>
        <td>${escapeHTML(r.domain || "")}</td>
        <td>${escapeHTML(r.itemType || skillLabels[r.skillId] || r.skillId || "")}</td>
        <td>${escapeHTML(r.difficultyLabel || getDifficultyBandLabel(r.difficultyBand))}<br><span class="muted-cell">${r.ritDifficulty || r.difficulty} RIT</span></td>
        <td><strong style="color:${r.isCorrect ? "var(--green)" : "var(--red)"};">${r.isCorrect ? "Correct" : "Incorrect"}</strong></td>
        <td>${escapeHTML(selected)}</td>
        <td>${escapeHTML(correct)}</td>
        <td>${escapeHTML(r.misconception || "오답 원인 기록 없음")}</td>
      </tr>
    `;
  }).join("");
  
  // Mini Day-by-Day lesson plan generator
  let planHtml = "";
  const planSkills = weaknessList.slice(0, 3);
  if (planSkills.length === 0) {
    // Fallback if student is perfect
    planSkills.push({ label: "전 영역 심화", key: "geometry" });
  }
  
  planSkills.forEach((wk, idx) => {
    const playbookText = remediationPlaybook[wk.key] || "기존에 실수한 문항들의 해설을 정독하고 틀린 원인을 공책에 꼼꼼히 정리해 봅니다.";
    planHtml += `
      <div class="program-card">
        <h4>Day ${idx + 1} - ${wk.label} 강화 집중 세션</h4>
        <p><strong>진단 지표:</strong> 정답률 ${wk.rate !== undefined ? wk.rate + "%" : "N/A"}의 취약 영역</p>
        <ul class="program-steps">
          <li><strong>Mini Lesson:</strong> 과외식 개념 재정리 및 핵심 원리 구두 설명 유도.</li>
          <li><strong>Guided Practice:</strong> 동급 RIT 수준의 parallel 문항 5문제를 교사와 소리 내어 풀이.</li>
          <li><strong>Mastery Check:</strong> ${playbookText}</li>
        </ul>
      </div>
    `;
  });
  
  // Full report container inject
  els.parentReport.innerHTML = `
    <div class="parent-report-card">
      <div class="report-header">
        <h3>K-12 MAP Growth 준비도 학부모 리포트</h3>
        <p>Original K-12 Simulation Assessment · Grade ${attempt.grade} ${attempt.subject.toUpperCase()}</p>
      </div>
      
      <div class="report-meta">
        <div><strong>학생 성명:</strong> ${attempt.studentName}</div>
        <div><strong>응시 학년:</strong> Grade ${attempt.grade}</div>
        <div><strong>평가 과목:</strong> ${attempt.subject.toUpperCase()}</div>
        <div><strong>응시 일자:</strong> ${attempt.date}</div>
      </div>
      
      <div class="report-section">
        <h4>1. 종합 성취도 분석 (Overall Performance)</h4>
        <p>이번 적응형 진단 평가 결과, ${attempt.studentName} 학생의 최종 학력 지수는 <strong>${attempt.ritScore} RIT</strong>로 측정되었습니다. 시뮬레이터 퍼센타일 <strong>${attempt.percentile}%</strong>는 기준선 대비 RIT 차이를 이용한 <strong>자체 근사</strong>이며, <strong>공식 NWEA 표가 아닙니다</strong>.</p>
        <p>학년 기준선은 ${attempt.baselineRIT ?? getBaselineRIT(attempt.subject, attempt.grade)} RIT입니다.${attempt.standardError != null ? " Rasch 정보량으로 계산한 추정 오차는 약 +/-" + attempt.standardError + " RIT입니다." : " 정보량이 부족해 표준오차는 표시하지 않습니다."}</p>
      </div>

      <div class="report-section">
        <h4>2. 목표 영역별 세부 성적표 (Goal Area Breakdown)</h4>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Goal Area (평가 단원)</th>
                <th>노션 마이크로스킬</th>
                <th>Grade Level Performance</th>
                <th>한국어 진단 등급</th>
                <th>정답 문항 수</th>
                <th>정답률</th>
              </tr>
            </thead>
            <tbody>
              ${skillTableRows}
            </tbody>
          </table>
        </div>
      </div>

      <div class="report-section">
        <h4>3. 문제유형 및 난이도별 진단 (Item Type & Difficulty Diagnostics)</h4>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>문제유형</th>
                <th>정답 문항 수</th>
                <th>정답률</th>
              </tr>
            </thead>
            <tbody>
              ${itemTypeRows}
            </tbody>
          </table>
        </div>
        <div class="table-wrap" style="margin-top: 12px;">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Domain</th>
                <th>문제유형</th>
                <th>난이도</th>
                <th>결과</th>
                <th>학생 선택</th>
                <th>정답</th>
                <th>오답 진단</th>
              </tr>
            </thead>
            <tbody>
              ${itemAnalysisRows}
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="report-section">
        <h4>4. 강점 및 우선 순위 약점 분석 (Strength & Areas to Develop)</h4>
        <p><strong>💡 성취 강점 영역:</strong> 본 평가에서 높은 문항 정확도를 안정적으로 유지한 최상위 스킬은 지식의 견고함이 돋보입니다. 향후 해당 단원의 킬러 문항 처리를 안정화하는 고도화 트랙을 병행할 수 있습니다.</p>
        <p><strong>⚠️ 집중 보완 약점 영역:</strong> 가장 집중적인 지도가 요청되는 단원은 <strong>'${primaryWeak.label}'</strong> 영역입니다. 개념 미스나 인지적 혼동 양상이 포착되었으며 아래 복습 강화 플랜을 우선 실행해야 합니다.</p>
      </div>

      <div class="report-section">
        <h4>5. 문제유형 기반 학습 프로세스 및 성적 변화 예측</h4>
        <p>아래 예측은 공식 MAP Growth 성장 예측이 아니라, 이번 시뮬레이션의 문제유형별 오답·난이도·현재 RIT 반응을 기준으로 한 내부 학습 처방 추정치입니다.</p>
        ${predictionHtml}
        <div class="table-wrap" style="margin-top: 12px;">
          <table>
            <thead>
              <tr>
                <th>우선순위</th>
                <th>문제유형 약점</th>
                <th>학습 프로세스</th>
                <th>예상 변화</th>
              </tr>
            </thead>
            <tbody>
              ${processRows}
            </tbody>
          </table>
        </div>
      </div>

      <div class="report-section">
        <h4>6. 3일 완성 맞춤형 약점Strengthening 플랜 (Remediation Plan)</h4>
        <div class="weakness-grid" style="display: grid; grid-template-columns: 1fr; gap: 10px;">
          ${planHtml}
        </div>
      </div>
      
      <div class="report-section" style="border-top: 1px dashed var(--line); padding-top: 15px;">
        <p style="font-size: 0.82rem; color: var(--muted); text-align: center;">본 리포트는 NWEA MAP Growth 평가의 실질적 대비를 위해 특수 고안된 준비 시뮬레이션 지표이며, NWEA 공식 기구의 배포 결과지가 아님을 밝힙니다.</p>
      </div>
    </div>
  `;
}

// ==================== DRAG / HIGH-FIDELITY TOOLS HANDLERS ====================
function handleTextHighlight() {
  const selection = window.getSelection();
  if (!selection.rangeCount || selection.isCollapsed) return;
  
  const range = selection.getRangeAt(0);
  const selectedText = range.toString().trim();
  if (!selectedText) return;
  
  // Highlight only inside stimulus or question area
  let container = range.commonAncestorContainer;
  if (container.nodeType === 3) container = container.parentNode;
  
  if (!els.stimulus.contains(container) && !els.question.contains(container)) return;
  
  const span = document.createElement("span");
  span.className = "highlight-yellow";
  try {
    range.surroundContents(span);
  } catch (err) {
    // Fallback if cross-element ranges occur
    console.warn("Unable to surround contents exactly. Custom range fallback skipped.");
  }
  selection.removeAllRanges();
}

function handleZoom(direction) {
  if (direction === "in" && currentZoom < 1.4) {
    currentZoom += 0.1;
  } else if (direction === "out" && currentZoom > 0.8) {
    currentZoom -= 0.1;
  }
  document.body.style.setProperty("--zoom-factor", currentZoom);
}

function handleReadAloud() {
  if (!("speechSynthesis" in window)) {
    alert("Audio support is not supported on this browser.");
    return;
  }
  
  window.speechSynthesis.cancel();
  
  const qIndex = currentTest.currentIndex;
  const q = currentTest.questionSet[qIndex];
  if (!q) return;
  
  // Build read-aloud script
  const choicesScript = q.options.map((opt, idx) => `Choice ${labels[idx]}. ${opt}.`).join(" ");
  const fullText = `Question focus: ${q.domain}. Here is the passage. ${q.stimulus}. Question. ${q.question}. ${choicesScript}`;
  
  const utterance = new SpeechSynthesisUtterance(fullText);
  utterance.lang = "en-US";
  
  // Adjust speed according to grade level
  utterance.rate = currentTest.grade === 1 ? 0.82 : 0.9;
  
  window.speechSynthesis.speak(utterance);
}

// ==================== TEACHER / COHORT DASHBOARD ====================
function renderTeacherDashboard() {
  const students = loadStudents();
  const history = loadHistory();
  
  populateStudentDropdowns();
  
  const selectedStudentId = els.dashStudentSelect.value;
  if (!selectedStudentId) {
    els.dashStudentInfo.innerHTML = `<p class="sub" style="color: var(--muted); text-align: center;">Select a student from the dropdown above to view historical analytics and growth charts.</p>`;
    els.dashChart.innerHTML = "";
    els.dashAttemptsTable.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--muted);">Choose a student profile to view completed attempts.</td></tr>`;
    return;
  }
  
  const student = students.find(s => s.id === selectedStudentId);
  if (!student) {
    els.dashStudentInfo.innerHTML = `<p class="sub" style="color: var(--muted); text-align: center;">The selected student profile is no longer available.</p>`;
    els.dashChart.innerHTML = "";
    els.dashAttemptsTable.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--muted);">Choose another student profile to view completed attempts.</td></tr>`;
    return;
  }
  const studentHistory = history.filter(x => x.studentId === selectedStudentId);
  
  // Student header details
  els.dashStudentInfo.innerHTML = `
    <div class="report-meta" style="margin-bottom: 0;">
      <div><strong>Student Name:</strong> ${escapeHTML(student.name)}</div>
      <div><strong>Assigned Grade:</strong> Grade ${student.grade}</div>
      <div><strong>Classroom Cohort:</strong> ${escapeHTML(student.className)}</div>
      <div><strong>Completed Attempts:</strong> ${studentHistory.length} attempts</div>
    </div>
  `;
  
  // Render Attempts table log
  if (studentHistory.length === 0) {
    els.dashAttemptsTable.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--muted);">No completed tests recorded for this student yet.</td></tr>`;
    els.dashChart.innerHTML = `<div style="text-align: center; color: var(--muted); padding-top: 80px;">RIT Growth Tracking requires at least 2 logged attempts.</div>`;
    return;
  }
  
  els.dashAttemptsTable.innerHTML = "";
  studentHistory.forEach((att, idx) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>#${idx + 1}</strong></td>
      <td>${att.date}</td>
      <td>${att.subject.toUpperCase()}</td>
      <td><strong>${att.ritScore} RIT</strong></td>
      <td>${att.percentile}%</td>
      <td>${att.score}% (${att.correctCount}/${att.totalCount})</td>
      <td>
        <button class="tool-btn" style="min-height: 28px; padding: 0 8px; font-size: 0.76rem;" onclick="viewPastAttempt('${att.id}')">View Report</button>
      </td>
    `;
    els.dashAttemptsTable.appendChild(row);
  });
  
  // Render SVG interactive Growth Chart
  renderGrowthChartSVG(studentHistory, student.grade);
}

function renderGrowthChartSVG(studentHistory, grade) {
  // We need Math or Reading entries to draw logical progression chart
  const mathEntries = studentHistory.filter(x => x.subject === "math").sort((a, b) => a.id.localeCompare(b.id));
  const readingEntries = studentHistory.filter(x => x.subject === "reading").sort((a, b) => a.id.localeCompare(b.id));
  
  // Default to math if exists, else reading, else all
  const plotEntries = mathEntries.length >= readingEntries.length ? mathEntries : readingEntries;
  if (plotEntries.length === 0) {
    els.dashChart.innerHTML = `<div style="text-align: center; color: var(--muted); padding-top: 80px;">RIT growth tracking requires at least 1 Math or Reading attempt.</div>`;
    return;
  }
  
  const subject = plotEntries[0].subject;
  const norms = nweaNorms[subject]?.[grade] || { Fall: 190, Winter: 195, Spring: 200 };
  
  // Prepare dynamic coordinates
  const width = 500;
  const height = 240;
  const padding = 40;
  
  const minRIT = Math.min(130, ...plotEntries.map(e => e.ritScore)) - 10;
  const maxRIT = Math.max(260, ...plotEntries.map(e => e.ritScore)) + 10;
  const ritRange = maxRIT - minRIT;
  
  function getX(index, total) {
    if (total <= 1) return width / 2;
    return padding + (index * (width - 2 * padding) / (total - 1));
  }
  
  function getY(rit) {
    return height - padding - ((rit - minRIT) * (height - 2 * padding) / ritRange);
  }
  
  // Build SVG string
  let svg = `<svg viewBox="0 0 ${width} ${height}" style="width: 100%; height: 100%;">`;
  
  // Draw Grid lines
  for (let r = Math.ceil(minRIT / 10) * 10; r <= maxRIT; r += 20) {
    let y = getY(r);
    svg += `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="#BDC3C7" stroke-width="0.5" stroke-dasharray="2,2"/>`;
    svg += `<text x="${padding - 8}" y="${y + 4}" fill="#7F8C8D" font-size="8" font-weight="700" text-anchor="end">${r}</text>`;
  }
  
  // Plot student scores line
  let points = "";
  let nodes = "";
  
  plotEntries.forEach((e, idx) => {
    let x = getX(idx, plotEntries.length);
    let y = getY(e.ritScore);
    points += `${x},${y} `;
    
    // Node circle
    nodes += `<circle cx="${x}" cy="${y}" r="5" fill="#0A4F85"/>`;
    nodes += `<text x="${x}" y="${y - 8}" fill="#0F355C" font-size="8" font-weight="700" text-anchor="middle">${e.ritScore} (${e.date})</text>`;
  });
  
  if (plotEntries.length > 1) {
    svg += `<polyline points="${points.trim()}" fill="none" stroke="#0A4F85" stroke-width="3"/>`;
  }
  svg += nodes;
  
  // Draw NWEA National norms (dashed green line)
  let normPoints = [
    { label: "Fall", val: norms.Fall, x: padding + 50 },
    { label: "Winter", val: norms.Winter, x: width / 2 },
    { label: "Spring", val: norms.Spring, x: width - padding - 50 }
  ];
  
  let normCoords = "";
  normPoints.forEach(np => {
    let y = getY(np.val);
    normCoords += `${np.x},${y} `;
    svg += `<circle cx="${np.x}" cy="${y}" r="4" fill="#27AE60"/>`;
    svg += `<text x="${np.x}" y="${y + 14}" fill="#27AE60" font-size="8" font-weight="700" text-anchor="middle">${np.label} Norm: ${np.val}</text>`;
  });
  svg += `<polyline points="${normCoords.trim()}" fill="none" stroke="#27AE60" stroke-width="1.5" stroke-dasharray="4,4"/>`;
  
  // Title / Legends
  svg += `
    <text x="${width / 2}" y="15" fill="#0F355C" font-size="10" font-weight="700" text-anchor="middle">
        K-12 ${subject.toUpperCase()} RIT vs grade reference (not official NWEA percentile)
    </text>
    <rect x="350" y="215" width="10" height="6" fill="#0A4F85"/>
    <text x="365" y="221" fill="#2C3E50" font-size="8" font-weight="600">Student</text>
    <rect x="420" y="215" width="10" height="6" fill="#27AE60"/>
    <text x="435" y="221" fill="#2C3E50" font-size="8" font-weight="600">Grade ref</text>
  `;
  
  svg += `</svg>`;
  els.dashChart.innerHTML = svg;
}

// Global functions for inline dashboard events
window.viewPastAttempt = function(attemptId) {
  const history = loadHistory();
  const att = history.find(x => x.id === attemptId);
  if (!att) return;
  
  // Show results screen with the targeted report
  els.landing.hidden = true;
  els.test.hidden = true;
  els.dashboard.hidden = true;
  els.results.hidden = false;
  
  renderScoreReport(att);
};

// ==================== WEAKNESS PRACTICE (post-report only) ====================
function hidePracticeFeedback() {
  if (!els.practiceFeedback) return;
  els.practiceFeedback.hidden = true;
  els.practiceFeedbackText.textContent = "";
}

function startWeaknessPractice() {
  const attempt = lastAttempt;
  if (!attempt) return;
  const bank = window.productionQuestionBank || [];
  const usedIds = new Set((attempt.rows || []).map(r => r.id));
  const skillIds = pickWeakSkillIds(attempt.rows, 2);
  if (!skillIds.length) {
    alert("연습할 약점 skillId가 없습니다.");
    return;
  }

  const unusedSameSkill = bank.filter(item =>
    item.subject === attempt.subject &&
    item.status === "approved" &&
    skillIds.includes(item.skillId) &&
    !usedIds.has(item.id)
  );
  let pool = unusedSameSkill;
  if (pool.length < 5) {
    const extra = bank.filter(item =>
      item.subject === attempt.subject &&
      item.status === "approved" &&
      !usedIds.has(item.id) &&
      !pool.some(p => p.id === item.id)
    );
    pool = pool.concat(extra);
  }

  const picked = pool.slice(0, 5);
  if (!picked.length) {
    alert("같은 뱅크에 남은 미사용 문항이 없습니다.");
    return;
  }

  currentPractice = {
    student: { id: attempt.studentId, name: attempt.studentName },
    subject: attempt.subject,
    grade: attempt.grade,
    skillIds,
    baselineRates: collectSkillStats(attempt.rows).filter(s => skillIds.includes(s.key)),
    questionSet: picked,
    answeredQuestions: [],
    currentIndex: 0,
    targetLength: picked.length,
    currentSelection: undefined
  };
  currentTest = {
    ...currentPractice,
    mode: "practice",
    currentRIT: attempt.ritScore,
    baselineRIT: attempt.baselineRIT
  };

  els.landing.hidden = true;
  els.results.hidden = true;
  els.dashboard.hidden = true;
  els.test.hidden = false;
  hidePracticeFeedback();
  deactivateToolbarTools();
  renderActiveQuestion();
  els.testTitle.textContent = `약점 연습 · ${skillIds.map(id => skillLabels[id] || id).join(", ")}`;
}

function handlePracticeNext() {
  if (!currentPractice || currentPractice.currentSelection === undefined) return;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();

  const qIndex = currentPractice.currentIndex;
  const q = currentPractice.questionSet[qIndex];
  const selectedIdx = currentPractice.currentSelection;
  const isCorrect = selectedIdx === q.answer;

  currentPractice.answeredQuestions.push({
    id: q.id,
    skillId: q.skillId,
    selected: selectedIdx,
    correctAnswer: q.answer,
    isCorrect,
    misconception: q.misconception,
    explanation: q.explanation
  });

  if (!isCorrect) {
    els.nextBtn.disabled = true;
    els.practiceFeedback.hidden = false;
    els.practiceFeedbackTitle.textContent = "오답 해설 (연습 모드)";
    const bits = [];
    if (q.misconception) bits.push(q.misconception);
    if (q.explanation) bits.push(q.explanation);
    els.practiceFeedbackText.textContent = bits.join(" ") || "이 문항의 해설이 뱅크에 없습니다.";
    return;
  }
  advancePracticeQuestion();
}

function advancePracticeQuestion() {
  hidePracticeFeedback();
  if (!currentPractice) return;
  if (currentPractice.currentIndex < currentPractice.targetLength - 1) {
    currentPractice.currentIndex += 1;
    currentPractice.currentSelection = undefined;
    currentTest.currentIndex = currentPractice.currentIndex;
    currentTest.currentSelection = undefined;
    renderActiveQuestion();
    els.testTitle.textContent = `약점 연습 · ${(currentPractice.skillIds || []).map(id => skillLabels[id] || id).join(", ")}`;
    els.nextBtn.textContent = currentPractice.currentIndex === currentPractice.targetLength - 1 ? "연습 제출" : "Next ➔";
  } else {
    finishWeaknessPractice();
  }
}

function finishWeaknessPractice() {
  const practice = currentPractice;
  currentPractice = null;
  currentTest = null;
  hidePracticeFeedback();

  const correct = practice.answeredQuestions.filter(x => x.isCorrect).length;
  const total = practice.answeredQuestions.length;
  const rate = total ? Math.round((correct / total) * 100) : 0;
  const before = (practice.baselineRates || []).map(s => `${s.label} ${s.rate}%`).join(", ");

  els.test.hidden = true;
  els.results.hidden = false;
  if (lastAttempt) renderScoreReport(lastAttempt);
  if (els.practiceSummary) {
    els.practiceSummary.hidden = false;
    els.practiceSummary.innerHTML = `
      <strong>약점 연습 결과</strong>
      연습 정답률 ${correct} / ${total} (${rate}%).
      ${before ? "시험 당시 약점 정답률: " + before + "." : ""}
      시험 중에는 정답을 공개하지 않았고, 연습 오답에서만 해설을 열었습니다.
    `;
  }
  if (els.practiceStartBtn) els.practiceStartBtn.hidden = true;
}

// ==================== EVENT LISTENERS & INITS ====================
function setupEventListeners() {
  // Navigation Tabs
  els.navDashboard.addEventListener("click", () => {
    currentPractice = null;
    hidePracticeFeedback();
    els.landing.hidden = true;
    els.test.hidden = true;
    els.results.hidden = true;
    els.dashboard.hidden = false;
    
    els.navDashboard.classList.add("active");
    els.navTest.classList.remove("active");
    
    renderTeacherDashboard();
  });
  
  els.navTest.addEventListener("click", () => {
    els.dashboard.hidden = true;
    els.test.hidden = true;
    els.results.hidden = true;
    els.landing.hidden = false;
    
    els.navTest.classList.add("active");
    els.navDashboard.classList.remove("active");
  });
  
  // Student Management
  els.addStudentBtn.addEventListener("click", handleAddStudent);
  els.studentSelect.addEventListener("change", handleStudentChange);
  
  // Start Test Button
  els.startTestBtn.addEventListener("click", startTestSession);
  els.nextBtn.addEventListener("click", handleNextQuestion);
  if (els.practiceStartBtn) els.practiceStartBtn.addEventListener("click", startWeaknessPractice);
  if (els.practiceContinueBtn) els.practiceContinueBtn.addEventListener("click", advancePracticeQuestion);
  els.againBtn.addEventListener("click", () => {
    currentPractice = null;
    hidePracticeFeedback();
    els.results.hidden = true;
    els.landing.hidden = false;
  });
  
  // Clear history
  els.clearHistoryBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete all cohort attempt history and exposure parameters? This cannot be undone.")) {
      localStorage.removeItem(historyKey);
      localStorage.removeItem(exposureKey);
      alert("Database history cleared successfully.");
      location.reload();
    }
  });
  
  // Print Parent Report
  els.printBtn.addEventListener("click", () => window.print());
  
  // Interactive Tools Toggle
  els.toolCalculator.addEventListener("click", () => {
    const isAct = els.toolCalculator.classList.toggle("active");
    els.calcContainer.hidden = !isAct;
  });
  
  els.toolHighlighter.addEventListener("click", () => {
    const isAct = els.toolHighlighter.classList.toggle("active");
    if (isAct) {
      els.toolEliminator.classList.remove("active");
      els.stimulus.addEventListener("mouseup", handleTextHighlight);
      els.question.addEventListener("mouseup", handleTextHighlight);
      alert("Highlighter mode active. Double click or select text inside the question or passage to highlight.");
    } else {
      els.stimulus.removeEventListener("mouseup", handleTextHighlight);
      els.question.removeEventListener("mouseup", handleTextHighlight);
    }
  });
  
  els.toolEliminator.addEventListener("click", () => {
    const isAct = els.toolEliminator.classList.toggle("active");
    if (isAct) {
      els.toolHighlighter.classList.remove("active");
      els.stimulus.removeEventListener("mouseup", handleTextHighlight);
      els.question.removeEventListener("mouseup", handleTextHighlight);
      alert("Answer Eliminator active. Click any answer choice option to cross it out.");
    }
  });
  
  els.toolLineReader.addEventListener("click", () => {
    const isAct = els.toolLineReader.classList.toggle("active");
    els.lineReaderGuide.hidden = !isAct;
  });
  
  // Zoom Controls
  els.toolZoomIn.addEventListener("click", () => handleZoom("in"));
  els.toolZoomOut.addEventListener("click", () => handleZoom("out"));
  
  // Audio speaker
  els.audioBtn.addEventListener("click", handleReadAloud);
  
  // Dashboard Interactive Selector
  els.dashStudentSelect.addEventListener("change", renderTeacherDashboard);
}

// Run initial configurations
window.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  initCalculator();
  populateStudentDropdowns();
  refreshStudentsFromNotion();
  
  // Make line reader guide slit draggable vertically
  makeVerticalDraggable(els.lineReaderGuide, els.lineReaderSlit);
});
