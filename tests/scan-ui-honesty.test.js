const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const uiFiles = {
  "index.html": fs.readFileSync(path.join(root, "index.html"), "utf8"),
  "app.js": fs.readFileSync(path.join(root, "app.js"), "utf8"),
  "honesty.js": fs.readFileSync(path.join(root, "honesty.js"), "utf8"),
  "README.md": fs.readFileSync(path.join(root, "README.md"), "utf8"),
  "styles.css": fs.readFileSync(path.join(root, "styles.css"), "utf8")
};
const allUi = Object.values(uiFiles).join("\n");

describe("audited UI surfaces keep honest labels", () => {
  it("loads honesty.js before app.js", () => {
    assert.match(uiFiles["index.html"], /<script src="honesty\.js"><\/script>/);
    const honestyAt = uiFiles["index.html"].indexOf('src="honesty.js"');
    const appAt = uiFiles["index.html"].indexOf('src="app.js"');
    assert.ok(honestyAt >= 0 && appAt > honestyAt);
  });

  it("standardizes percentile wording on results, print, dashboard, and chart", () => {
    assert.match(uiFiles["index.html"], /시뮬레이터 자체 근사 퍼센타일/);
    assert.match(uiFiles["index.html"], /the simulator's own approximate percentile/);
    assert.match(uiFiles["index.html"], /<th>the simulator's own approximate percentile<\/th>/);
    assert.doesNotMatch(uiFiles["index.html"], /<th>Percentile<\/th>/);
    assert.match(uiFiles["app.js"], /Honesty\.percentileReportSentence/);
    assert.match(uiFiles["app.js"], /Honesty\.chartTitle/);
    assert.match(uiFiles["app.js"], /Honesty\.TROUBLE_META_NOTE/);
    assert.match(allUi, /공식 NWEA 퍼센타일 규준이 아닙니다/);
  });

  it("defines Item Uniqueness as the unique-item-ID ratio on results and print", () => {
    assert.match(uiFiles["honesty.js"], /the ratio of unique item IDs within the set/);
    assert.match(uiFiles["honesty.js"], /세트 내 고유 문항 ID 비율/);
    assert.match(uiFiles["app.js"], /Honesty\.uniquenessCardHtml/);
    assert.match(uiFiles["app.js"], /Honesty\.uniquenessReportSentence/);
    assert.doesNotMatch(uiFiles["app.js"], /이번 세트 문항 ID가 모두 다릅니다/);
  });

  it("renames Standard Error to Internal Simulator Uncertainty on results and print", () => {
    assert.doesNotMatch(uiFiles["index.html"], /Standard Error/);
    assert.doesNotMatch(uiFiles["app.js"], /Standard Error/);
    assert.doesNotMatch(uiFiles["README.md"], /(?<!내부 시뮬레이터 불확실성입니다\. 공식 NWEA )Standard Error/);
    assert.doesNotMatch(uiFiles["app.js"], /표준오차는 표시하지 않습니다/);
    assert.match(uiFiles["app.js"], /Honesty\.uncertaintyCardHtml/);
    assert.match(uiFiles["app.js"], /Honesty\.uncertaintyReportSentence/);
    assert.match(uiFiles["honesty.js"], /Internal Simulator Uncertainty/);
    assert.match(uiFiles["honesty.js"], /내부 시뮬레이터 불확실성/);
  });

  it("uses identified weak-skill wording instead of generic guidance", () => {
    assert.match(uiFiles["app.js"], /Honesty\.weaknessGuidance\(weaknessList\)/);
    assert.match(uiFiles["app.js"], /Honesty\.strengthGuidance\(strongSkills\)/);
    assert.match(uiFiles["app.js"], /Honesty\.remediationLesson\(wk\)/);
    assert.match(uiFiles["app.js"], /Honesty\.remediationFallback\(\)/);
    assert.doesNotMatch(uiFiles["app.js"], /개념 미스나 인지적 혼동/);
    assert.doesNotMatch(uiFiles["app.js"], /전 영역 심화/);
    assert.doesNotMatch(uiFiles["app.js"], /planSkills\.push\(\{ label: "전 영역 심화", key: "geometry" \}\)/);
    assert.doesNotMatch(uiFiles["app.js"], /과외식 개념 재정리/);
  });

  it("keeps print styles from hiding honesty copy inside the parent report", () => {
    assert.match(uiFiles["styles.css"], /@media print/);
    assert.match(uiFiles["styles.css"], /\.screen-only/);
    assert.match(uiFiles["styles.css"], /\.print-only\.honesty-print-disclaimer/);
    assert.match(uiFiles["index.html"], /id="parentReport"/);
    assert.match(uiFiles["index.html"], /class="dashboard-card print-container"/);
    assert.match(uiFiles["index.html"], /class="print-only honesty-print-disclaimer"/);
    assert.match(uiFiles["index.html"], /the ratio of unique item IDs within the set/);
    assert.match(uiFiles["index.html"], /Internal Simulator Uncertainty/);
    assert.match(uiFiles["index.html"], /the simulator's own approximate percentile/);
    assert.doesNotMatch(uiFiles["styles.css"], /#parentReport\s*\{[^}]*display:\s*none/);
    assert.doesNotMatch(uiFiles["styles.css"], /\.parent-report-card[^{]*\{[^}]*display:\s*none/);
  });

  it("forbids official-NWEA-result, IXL copy, and StudyWise partnership claims", () => {
    assert.doesNotMatch(allUi, /StudyWise/);
    assert.doesNotMatch(allUi, /공식 기구의 배포 결과지/);
    assert.doesNotMatch(uiFiles["index.html"], /IXL 학년 스킬맵/);
    assert.doesNotMatch(uiFiles["app.js"], /IXL 카탈로그/);
    assert.match(uiFiles["honesty.js"], /IXL 스킬\/문항을 복사하지 않습니다/);
  });
});
