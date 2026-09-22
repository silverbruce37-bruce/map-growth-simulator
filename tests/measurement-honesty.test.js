const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const Honesty = require("../honesty.js");

const PROHIBITED_IN_GENERATED = [
  /Standard Error/i,
  /표준오차는 표시하지 않습니다/,
  /calibrated(?:\/official)? measurement error/i,
  /official NWEA (?:reporting|result|percentile norms)(?! are not)/i,
  /StudyWise/,
  /IXL(?! (?:스킬\/문항을 복사하지 않습니다|문항\/스킬을 복사하지 않으며))/
];

function assertHonest(html) {
  const text = String(html);
  PROHIBITED_IN_GENERATED.forEach((pattern) => {
    assert.equal(pattern.test(text), false, `prohibited wording matched ${pattern}: ${text}`);
  });
}

describe("Item Uniqueness definition", () => {
  it("uses the exact English definition", () => {
    assert.equal(Honesty.UNIQUENESS_DEFINITION, "the ratio of unique item IDs within the set");
  });

  it("includes the Korean equivalent and the exact definition in help, cards, and print", () => {
    assert.match(Honesty.UNIQUENESS_DEFINITION_KO, /고유 문항 ID/);
    assert.equal(Honesty.uniquenessHelp(), "the ratio of unique item IDs within the set (세트 내 고유 문항 ID 비율)");
    const card = Honesty.uniquenessCardHtml(80);
    assert.match(card, /Item Uniqueness/);
    assert.match(card, /the ratio of unique item IDs within the set/);
    assert.match(card, /세트 내 고유 문항 ID 비율/);
    assert.match(card, /80%/);
    assertHonest(card);
    const printLine = Honesty.uniquenessReportSentence(100);
    assert.match(printLine, /the ratio of unique item IDs within the set/);
    assert.match(printLine, /세트 내 고유 문항 ID 비율/);
    assertHonest(printLine);
  });

  it("hides uniqueness when the value is missing", () => {
    assert.equal(Honesty.uniquenessCardHtml(null), "");
    assert.equal(Honesty.uniquenessReportSentence(null), "");
  });
});

describe("Internal Simulator Uncertainty", () => {
  it("does not use a Standard Error label", () => {
    assert.equal(Honesty.UNCERTAINTY_LABEL, "Internal Simulator Uncertainty");
    assert.equal(Honesty.UNCERTAINTY_LABEL_KO, "내부 시뮬레이터 불확실성");
    assert.match(Honesty.UNCERTAINTY_HELP, /공식 NWEA 표준오차나 보정된 측정오차가 아닙니다/);
  });

  it("labels results and print copy as internal simulator uncertainty", () => {
    const card = Honesty.uncertaintyCardHtml(3.2);
    assert.match(card, /Internal Simulator Uncertainty/);
    assert.match(card, /\+\/-3\.2 RIT/);
    assert.match(card, /공식 NWEA 표준오차나 보정된 측정오차가 아닙니다/);
    assert.doesNotMatch(card, /Standard Error/);
    assertHonest(card);

    const present = Honesty.uncertaintyReportSentence(2.5);
    assert.match(present, /내부 시뮬레이터 불확실성/);
    assert.match(present, /\+\/-2\.5 RIT/);
    assert.doesNotMatch(present, /Standard Error/);
    assertHonest(present);

    const missing = Honesty.uncertaintyReportSentence(null);
    assert.match(missing, /내부 시뮬레이터 불확실성/);
    assert.match(missing, /공식 NWEA 표준오차가 아닙니다/);
    assert.doesNotMatch(missing, /표준오차는 표시하지 않습니다/);
    assertHonest(missing);
  });
});

describe("simulator percentile wording", () => {
  it("uses the required explicit phrase on results, print, and dashboard", () => {
    assert.equal(Honesty.PERCENTILE_LABEL_EN, "the simulator's own approximate percentile");
    assert.equal(Honesty.PERCENTILE_LABEL, "시뮬레이터 자체 근사 퍼센타일");
    assert.match(Honesty.PERCENTILE_HELP, /the simulator's own approximate percentile/);
    assert.match(Honesty.PERCENTILE_HELP, /공식 NWEA 퍼센타일 규준이 아닙니다/);
    assert.equal(Honesty.dashboardPercentileHeader(), "the simulator's own approximate percentile");
    assert.match(Honesty.DASHBOARD_NOTE, /the simulator's own approximate percentile/);
    assert.match(Honesty.chartTitle("math"), /the simulator's own approximate percentile, not official NWEA percentile norms/);
    assert.match(Honesty.TROUBLE_META_NOTE, /the simulator's own approximate percentile/);

    const print = Honesty.percentileReportSentence("Minjun", 210, 64);
    assert.match(print, /시뮬레이터 자체 근사 퍼센타일/);
    assert.match(print, /the simulator's own approximate percentile/);
    assert.match(print, /공식 NWEA 퍼센타일 규준이 아닙니다/);
    assert.match(print, /64%/);
    assertHonest(print);
  });
});

describe("weakness-skill wording", () => {
  it("names the simulator's identified weak skills", () => {
    const html = Honesty.weaknessGuidance([
      { key: "fractions-decimals", label: "Fractions & Decimals", correct: 1, total: 4, rate: 25 },
      { key: "geometry", label: "Geometry", correct: 2, total: 5, rate: 40 }
    ]);
    assert.match(html, /Fractions & Decimals 1\/4 25%/);
    assert.match(html, /Geometry 2\/5 40%/);
    assert.doesNotMatch(html, /개념 미스나 인지적 혼동/);
    assert.doesNotMatch(html, /전 영역 심화/);
    assertHonest(html);
  });

  it("keeps fallback language specific and honest", () => {
    assert.equal(Honesty.weaknessGuidance([]), Honesty.NO_WEAK_SKILL);
    assert.match(Honesty.NO_WEAK_SKILL, /식별하지 않았습니다/);
    assert.match(Honesty.strengthGuidance([]), /강점으로 표시할 skillId가 없습니다/);
    assert.match(Honesty.remediationFallback(), /3일 보완 플랜을 만들지 않습니다/);
    assert.match(Honesty.emptyProcessRowHtml(), /식별한 문제유형 약점이 없습니다/);
    assertHonest(Honesty.weaknessGuidance([]));
    assertHonest(Honesty.strengthGuidance([]));
    assertHonest(Honesty.remediationFallback());
    assertHonest(Honesty.emptyProcessRowHtml());
  });

  it("names the actual weak skill in remediation copy", () => {
    const lesson = Honesty.remediationLesson({
      key: "inference",
      label: "Inference",
      correct: 0,
      total: 3,
      rate: 0
    });
    assert.match(lesson.title, /Inference/);
    assert.match(lesson.diagnosis, /Inference \(0\/3, 정답률 0%\)/);
    assert.match(lesson.miniLesson, /skillId: inference/);
    assert.match(lesson.guidedPractice, /skillId\(inference\)/);
    assert.match(lesson.guidedPractice, /IXL 스킬\/문항을 복사하지 않습니다/);
    assert.doesNotMatch(lesson.miniLesson, /과외식 개념 재정리/);
    Object.values(lesson).forEach(assertHonest);
  });

  it("does not invent a geometry weakness when none were identified", () => {
    const lesson = Honesty.remediationLesson(null);
    assert.doesNotMatch(JSON.stringify(lesson), /geometry/);
    assert.match(Honesty.strengthGuidance([
      { key: "text-evidence", label: "Text Evidence", correct: 4, total: 4, rate: 100 }
    ]), /Text Evidence 4\/4 100%/);
  });
});

describe("partnership and official-result claims", () => {
  it("does not add StudyWise or official-NWEA-result wording", () => {
    const surfaces = [
      Honesty.REPORT_FOOTER,
      Honesty.DASHBOARD_NOTE,
      Honesty.TROUBLE_PRINT_NOTE,
      Honesty.TROUBLE_META_NOTE,
      Honesty.percentileReportSentence("A", 200, 50),
      Honesty.uncertaintyCardHtml(1),
      Honesty.uniquenessCardHtml(100)
    ].join("\n");
    assert.doesNotMatch(surfaces, /StudyWise/);
    assert.doesNotMatch(surfaces, /공식 기구의 배포 결과지/);
    assert.doesNotMatch(surfaces, /official NWEA reporting/);
    assertHonest(surfaces);
  });
});
