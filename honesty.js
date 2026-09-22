/* Measurement-honesty copy. User-facing only. Scoring formulas stay in app.js. */
(function (root) {
  const PERCENTILE_LABEL = "시뮬레이터 자체 근사 퍼센타일";
  const PERCENTILE_LABEL_EN = "the simulator's own approximate percentile";
  const PERCENTILE_HELP = "the simulator's own approximate percentile. 공식 NWEA 퍼센타일 규준이 아닙니다.";
  const UNIQUENESS_LABEL = "Item Uniqueness";
  const UNIQUENESS_DEFINITION = "the ratio of unique item IDs within the set";
  const UNIQUENESS_DEFINITION_KO = "세트 내 고유 문항 ID 비율";
  const UNCERTAINTY_LABEL = "Internal Simulator Uncertainty";
  const UNCERTAINTY_LABEL_KO = "내부 시뮬레이터 불확실성";
  const UNCERTAINTY_HELP = "시뮬레이터 내부 Rasch 정보량 불확실성입니다. 공식 NWEA 표준오차나 보정된 측정오차가 아닙니다.";
  const NO_WEAK_SKILL = "시뮬레이터가 정답률 60% 미만의 약점 skill을 식별하지 않았습니다. 우선 보완 단원을 지정하지 않습니다.";
  const NO_STRONG_SKILL = "시뮬레이터가 정답률 60% 이상 skill을 식별하지 않았습니다. 이번 세트에서 강점으로 표시할 skillId가 없습니다.";
  const NO_WEAK_ITEM_TYPE = "시뮬레이터가 식별한 문제유형 약점이 없습니다. 내부 처방 추정치이므로 공식 MAP Growth 성장 예측이 아닙니다.";
  const NO_REMEDIATION_PLAN = "시뮬레이터가 식별한 약점 skill이 없어 3일 보완 플랜을 만들지 않습니다.";
  const REPORT_FOOTER = "본 리포트는 이 시뮬레이터의 내부 지표입니다. NWEA 공식 결과지·공식 퍼센타일 규준·공식 표준오차가 아닙니다.";
  const DASHBOARD_NOTE = "등록 학생의 시뮬레이터 attempt 로그만 집계합니다. 퍼센타일은 the simulator's own approximate percentile이며 공식 NWEA 퍼센타일 규준이 아닙니다.";
  const CHART_TITLE_SUFFIX = "the simulator's own approximate percentile, not official NWEA percentile norms";
  const TROUBLE_META_NOTE = "우리 뱅크/로그만 사용. 공식 NWEA 표 아님. 퍼센타일은 the simulator's own approximate percentile입니다.";
  const TROUBLE_PRINT_NOTE = "인쇄용 캠프 교사 블록입니다. IXL 문항/스킬을 복사하지 않으며, 이 시뮬레이터에 쌓인 응시 로그만 요약합니다.";

  function escapeHTML(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
      return ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[ch];
    });
  }

  function formatSkillList(skills) {
    return (skills || []).map(function (s) {
      const label = s.label || s.key || "unknown skill";
      const bits = [label];
      if (s.correct != null && s.total != null) bits.push(s.correct + "/" + s.total);
      if (s.rate != null) bits.push(s.rate + "%");
      return bits.join(" ");
    }).join(", ");
  }

  function uniquenessHelp() {
    return UNIQUENESS_DEFINITION + " (" + UNIQUENESS_DEFINITION_KO + ")";
  }

  function uniquenessCardHtml(pct) {
    if (pct == null) return "";
    return '<div class="metric-card"><span>' + escapeHTML(UNIQUENESS_LABEL) + "</span><strong>" +
      escapeHTML(String(pct)) + "%</strong><p>" + escapeHTML(uniquenessHelp()) + "</p></div>";
  }

  function uncertaintyCardHtml(se) {
    if (se == null) return "";
    return '<div class="metric-card"><span>' + escapeHTML(UNCERTAINTY_LABEL) + "</span><strong>+/-" +
      escapeHTML(String(se)) + " RIT</strong><p>" + escapeHTML(UNCERTAINTY_HELP) + "</p></div>";
  }

  function uncertaintyReportSentence(se) {
    if (se == null) {
      return "정보량이 부족해 " + UNCERTAINTY_LABEL_KO + "는 표시하지 않습니다. 공식 NWEA 표준오차가 아닙니다.";
    }
    return UNCERTAINTY_LABEL_KO + "는 약 +/-" + se + " RIT입니다. " + UNCERTAINTY_HELP;
  }

  function uniquenessReportSentence(pct) {
    if (pct == null) return "";
    return UNIQUENESS_LABEL + " " + pct + "%는 " + UNIQUENESS_DEFINITION + " (" + UNIQUENESS_DEFINITION_KO + ")입니다.";
  }

  function percentileReportSentence(studentName, ritScore, percentile) {
    return "이번 적응형 진단 평가 결과, " + studentName + " 학생의 최종 학력 지수는 <strong>" +
      ritScore + " RIT</strong>로 추정되었습니다. " + PERCENTILE_LABEL + " <strong>" +
      percentile + "%</strong>는 " + PERCENTILE_LABEL_EN + "이며, <strong>공식 NWEA 퍼센타일 규준이 아닙니다</strong>.";
  }

  function strengthGuidance(strongSkills) {
    if (!strongSkills || !strongSkills.length) return NO_STRONG_SKILL;
    return "시뮬레이터가 식별한 상대적 강점 skill: " + formatSkillList(strongSkills) +
      ". 이번 세트 정답률에서 도출한 내부 관찰입니다.";
  }

  function weaknessGuidance(weakSkills) {
    if (!weakSkills || !weakSkills.length) return NO_WEAK_SKILL;
    return "시뮬레이터가 식별한 약점 skill: " + formatSkillList(weakSkills) +
      ". 이 skillId에서 오답이 집중되었습니다.";
  }

  function remediationFallback() {
    return NO_REMEDIATION_PLAN;
  }

  function remediationLesson(skill) {
    const name = skill && (skill.label || skill.key) ? (skill.label || skill.key) : "식별된 약점 skill";
    const key = skill && skill.key ? skill.key : "unknown";
    const rate = skill && skill.rate != null ? skill.rate + "%" : "n/a";
    const tally = skill && skill.correct != null && skill.total != null
      ? skill.correct + "/" + skill.total
      : "집계 없음";
    return {
      title: name + " 강화 집중 세션",
      diagnosis: "시뮬레이터가 식별한 약점 skill " + name + " (" + tally + ", 정답률 " + rate + ")",
      miniLesson: name + " skill에서 틀린 개념을 다시 정리합니다. skillId: " + key + ".",
      guidedPractice: "같은 skillId(" + key + ")의 미사용 문항을 교사와 함께 풉니다. IXL 스킬/문항을 복사하지 않습니다.",
      masteryFallback: name + " skill에서 틀린 문항의 해설을 정독하고, 같은 skillId 오답 원인을 기록합니다."
    };
  }

  function emptyProcessRowHtml() {
    return '<tr><td><strong>1</strong></td><td><strong>약점 유형 없음</strong><br><span class="muted-cell">' +
      escapeHTML(NO_WEAK_ITEM_TYPE) + "</span></td><td>시뮬레이터가 식별한 문제유형 약점이 없어 처방 단계를 만들지 않습니다.</td>" +
      "<td>내부 추정치를 내지 않습니다.</td></tr>";
  }

  function dashboardPercentileHeader() {
    return PERCENTILE_LABEL_EN;
  }

  function chartTitle(subject) {
    return "K-12 " + String(subject || "").toUpperCase() + " RIT vs grade reference · " + CHART_TITLE_SUFFIX;
  }

  const Honesty = {
    PERCENTILE_LABEL: PERCENTILE_LABEL,
    PERCENTILE_LABEL_EN: PERCENTILE_LABEL_EN,
    PERCENTILE_HELP: PERCENTILE_HELP,
    UNIQUENESS_LABEL: UNIQUENESS_LABEL,
    UNIQUENESS_DEFINITION: UNIQUENESS_DEFINITION,
    UNIQUENESS_DEFINITION_KO: UNIQUENESS_DEFINITION_KO,
    UNCERTAINTY_LABEL: UNCERTAINTY_LABEL,
    UNCERTAINTY_LABEL_KO: UNCERTAINTY_LABEL_KO,
    UNCERTAINTY_HELP: UNCERTAINTY_HELP,
    NO_WEAK_SKILL: NO_WEAK_SKILL,
    NO_STRONG_SKILL: NO_STRONG_SKILL,
    NO_WEAK_ITEM_TYPE: NO_WEAK_ITEM_TYPE,
    NO_REMEDIATION_PLAN: NO_REMEDIATION_PLAN,
    REPORT_FOOTER: REPORT_FOOTER,
    DASHBOARD_NOTE: DASHBOARD_NOTE,
    CHART_TITLE_SUFFIX: CHART_TITLE_SUFFIX,
    TROUBLE_META_NOTE: TROUBLE_META_NOTE,
    TROUBLE_PRINT_NOTE: TROUBLE_PRINT_NOTE,
    uniquenessHelp: uniquenessHelp,
    uniquenessCardHtml: uniquenessCardHtml,
    uncertaintyCardHtml: uncertaintyCardHtml,
    uncertaintyReportSentence: uncertaintyReportSentence,
    uniquenessReportSentence: uniquenessReportSentence,
    percentileReportSentence: percentileReportSentence,
    strengthGuidance: strengthGuidance,
    weaknessGuidance: weaknessGuidance,
    remediationFallback: remediationFallback,
    remediationLesson: remediationLesson,
    emptyProcessRowHtml: emptyProcessRowHtml,
    dashboardPercentileHeader: dashboardPercentileHeader,
    chartTitle: chartTitle,
    escapeHTML: escapeHTML
  };

  root.Honesty = Honesty;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Honesty;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
