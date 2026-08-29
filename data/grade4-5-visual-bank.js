(function replaceGrade4To5VisualBanks() {
  const targetGrades = [4, 5];
  window.productionQuestionBank = window.productionQuestionBank.filter(q => !targetGrades.includes(q.grade));

  const ritBase = {
    4: { Low: 198, Medium: 210, High: 224, Advanced: 236 },
    5: { Low: 206, Medium: 218, High: 232, Advanced: 244 }
  };
  const bands = [["Low", 12], ["Medium", 15], ["High", 10], ["Advanced", 3]];
  const targets = {
    math: "Grade 4-5 visual math transfer: fraction models, multi-step operations, coordinate/data reasoning, area/perimeter, and early algebra",
    reading: "Grade 4-5 source-based reading transfer: main idea, inference, text evidence, author's purpose, paired sources, and data-text integration",
    language: "Grade 4-5 writing transfer: grammar in context, sentence combining, paragraph organization, evidence explanation, and precise revision",
    science: "Grade 4-5 MAP-style science transfer: Life, Physical, Earth science through data, models, fair tests, CER, and design tradeoffs",
    social: "Grade 4-5 social studies transfer: maps, timelines, source perspective, civics, economics, geography patterns, and evidence reasoning"
  };

  function svg(title, body, label = "") {
    return `<svg viewBox="0 0 380 230" width="380" height="230" role="img" aria-label="${title}" style="background:#fff;border:1px solid #bdc3c7;border-radius:8px;">
      <rect x="0" y="0" width="380" height="230" fill="#FDFEFE"/>
      ${body}
      <text x="190" y="214" text-anchor="middle" font-size="12" fill="#2C3E50" font-weight="700">${label}</text>
    </svg>`;
  }

  function tableSvg(rows, label) {
    const h = 34;
    const w = 310 / rows[0].length;
    let body = "";
    rows.forEach((row, r) => row.forEach((cell, c) => {
      body += `<rect x="${35 + c * w}" y="${42 + r * h}" width="${w}" height="${h}" fill="${r === 0 ? "#EAF2F8" : "#FFFFFF"}" stroke="#7F8C8D"/><text x="${35 + c * w + w / 2}" y="${64 + r * h}" text-anchor="middle" font-size="12" font-weight="${r === 0 ? "700" : "500"}">${cell}</text>`;
    }));
    return svg("table", body, label);
  }

  function barGraph(values, labels, title) {
    let body = `<line x1="52" y1="172" x2="330" y2="172" stroke="#2C3E50" stroke-width="2"/><line x1="62" y1="178" x2="62" y2="35" stroke="#2C3E50" stroke-width="2"/>`;
    values.forEach((v, i) => {
      const h = v * 8;
      const x = 86 + i * 62;
      body += `<rect x="${x}" y="${172 - h}" width="36" height="${h}" fill="#3498DB" stroke="#1B4F72" stroke-width="2"/><text x="${x + 18}" y="${165 - h}" text-anchor="middle" font-size="11">${v}</text><text x="${x + 18}" y="190" text-anchor="middle" font-size="11">${labels[i]}</text>`;
    });
    return svg("bar graph", body, title);
  }

  function lineGraph(points, title) {
    const path = points.map((p, i) => `${i ? "L" : "M"} ${70 + i * 58} ${178 - p * 8}`).join(" ");
    let dots = points.map((p, i) => `<circle cx="${70 + i * 58}" cy="${178 - p * 8}" r="5" fill="#C0392B"/>`).join("");
    return svg("line graph", `<line x1="52" y1="178" x2="330" y2="178" stroke="#2C3E50" stroke-width="2"/><line x1="62" y1="184" x2="62" y2="35" stroke="#2C3E50" stroke-width="2"/><path d="${path}" fill="none" stroke="#0A4F85" stroke-width="4"/>${dots}<text x="190" y="34" text-anchor="middle" font-size="13" font-weight="700">${title}</text>`, title);
  }

  function fractionBar(parts, shaded) {
    const w = 280 / parts;
    let body = "";
    for (let i = 0; i < parts; i++) body += `<rect x="${50 + i * w}" y="92" width="${w}" height="48" fill="${i < shaded ? "#58D68D" : "#FFFFFF"}" stroke="#145A32" stroke-width="2"/>`;
    return svg("fraction model", body, `${shaded} of ${parts} equal parts shaded`);
  }

  function areaDiagram(length, width) {
    return svg("area diagram", `<rect x="70" y="55" width="220" height="110" fill="#EAF2F8" stroke="#0A4F85" stroke-width="4"/><text x="180" y="190" text-anchor="middle" font-size="13">${length} m</text><text x="310" y="115" font-size="13">${width} m</text><line x1="70" y1="178" x2="290" y2="178" stroke="#2C3E50"/><line x1="302" y1="55" x2="302" y2="165" stroke="#2C3E50"/>`, "Rectangle garden model");
  }

  function coordinateGrid(x, y) {
    let grid = "";
    for (let i = 0; i <= 5; i++) {
      grid += `<line x1="${70 + i * 42}" y1="40" x2="${70 + i * 42}" y2="190" stroke="#D5DBDB"/><line x1="70" y1="${190 - i * 30}" x2="300" y2="${190 - i * 30}" stroke="#D5DBDB"/>`;
    }
    return svg("coordinate grid", `${grid}<line x1="70" y1="190" x2="310" y2="190" stroke="#2C3E50" stroke-width="2"/><line x1="70" y1="190" x2="70" y2="30" stroke="#2C3E50" stroke-width="2"/><circle cx="${70 + x * 42}" cy="${190 - y * 30}" r="7" fill="#C0392B"/><text x="${82 + x * 42}" y="${184 - y * 30}" font-size="12">P</text>`, "Point P on a coordinate grid");
  }

  function mapScene() {
    return svg("river settlement map", `<rect x="35" y="35" width="310" height="145" fill="#D5F5E3" stroke="#145A32" stroke-width="2"/><path d="M50 75 C110 35 170 120 235 80 C285 50 315 85 340 65" stroke="#5DADE2" stroke-width="16" fill="none"/><circle cx="95" cy="70" r="9" fill="#C0392B"/><circle cx="145" cy="92" r="9" fill="#C0392B"/><circle cx="218" cy="82" r="9" fill="#C0392B"/><circle cx="275" cy="72" r="9" fill="#C0392B"/><circle cx="80" cy="155" r="6" fill="#7D3C98"/><circle cx="300" cy="155" r="6" fill="#7D3C98"/>`, "Towns cluster near the river");
  }

  function timeline() {
    return svg("historical timeline", `<line x1="48" y1="112" x2="332" y2="112" stroke="#2C3E50" stroke-width="4"/><circle cx="82" cy="112" r="9" fill="#F7DC6F" stroke="#7D6608"/><text x="82" y="78" text-anchor="middle" font-size="11">Charter</text><circle cx="178" cy="112" r="9" fill="#F7DC6F" stroke="#7D6608"/><text x="178" y="78" text-anchor="middle" font-size="11">Road</text><circle cx="292" cy="112" r="9" fill="#F7DC6F" stroke="#7D6608"/><text x="292" y="78" text-anchor="middle" font-size="11">Market</text>`, "Events are ordered left to right");
  }

  function plantModel(sunny, shade) {
    return tableSvg([["Location", "Average height"], ["Sunny window", `${sunny} cm`], ["Shaded shelf", `${shade} cm`]], "Plant growth data");
  }

  function forceModel(light, heavy) {
    return tableSvg([["Cart", "Mass", "Distance after same push"], ["A", "light", `${light} cm`], ["B", "heavy", `${heavy} cm`]], "Same force investigation");
  }

  function rotate(correct, distractors, seed) {
    const base = [correct, ...distractors];
    const shift = seed % 4;
    const options = base.slice(shift).concat(base.slice(0, shift));
    return { options, answer: options.indexOf(correct) };
  }

  function add(rows, grade, subject, band, rit, item) {
    const seed = rows.filter(q => q.grade === grade && q.subject === subject).length;
    const c = rotate(item.correct, item.distractors, seed);
    rows.push({
      id: `${subject}-g${grade}-visual-${band.toLowerCase()}-${String(seed + 1).padStart(2, "0")}`,
      grade,
      subject,
      domain: item.domain,
      skillId: item.skillId,
      difficulty: band,
      ritDifficulty: rit,
      cognitiveLevel: band === "Advanced" ? `${item.cognitiveLevel} · Visual Ceiling` : item.cognitiveLevel,
      stimulus: item.stimulus,
      question: band === "Advanced" ? `${item.question} Choose the answer best supported by the visual evidence.` : item.question,
      options: c.options,
      answer: c.answer,
      explanation: item.explanation,
      itemPurpose: item.itemPurpose,
      misconception: item.misconception,
      media: { type: "html", html: item.visual, alt: item.alt, caption: item.caption },
      killer: band === "Advanced",
      calculator: false,
      stimulusType: item.stimulusType,
      evidenceDemand: band === "Advanced" ? `${item.evidenceDemand}; visual ceiling transfer` : item.evidenceDemand,
      distractorRationale: item.distractorRationale || "Distractors target surface reading, wrong operation/model, single-detail inference, overclaiming, or ignoring controlled variables.",
      scienceDimensions: item.scienceDimensions,
      mapAlignment: "MAP Growth-style Grade 4-5 original adaptive item using public skill frames, visual/data-supported reasoning, and plausible misconception distractors.",
      schoolTransferTarget: targets[subject],
      adaptiveWeight: band === "Advanced" ? 4 : band === "High" ? 3 : band === "Medium" ? 2 : 1,
      status: "approved"
    });
  }

  function templates(grade, subject, i) {
    const n = i % 6;
    if (subject === "math") {
      const parts = grade === 4 ? 8 : 10;
      const shaded = 3 + (n % 4);
      const length = 9 + grade + n;
      const width = 4 + (n % 4);
      const x = 1 + (n % 4);
      const y = 2 + (n % 3);
      return [
        { domain: "Fractions & Decimals", skillId: "fractions-decimals", cognitiveLevel: "Fraction Model Reasoning", stimulus: "A recipe strip shows the amount of a cup already used.", visual: fractionBar(parts, shaded), alt: "A fraction strip with equal parts shaded.", caption: "Visual Type: fraction model", question: "Which fraction matches the shaded part?", correct: `${shaded}/${parts}`, distractors: [`${parts}/${shaded}`, `${shaded}/${parts + 2}`, `${shaded + 1}/${parts}`], explanation: "The denominator is all equal parts and the numerator is shaded parts.", itemPurpose: "Translate a visual model into a fraction.", misconception: "Student reverses numerator and denominator or counts extra parts.", stimulusType: "visual fraction model", evidenceDemand: "model-to-fraction translation" },
        { domain: "Measurement & Data", skillId: "measurement", cognitiveLevel: "Area vs Perimeter", stimulus: "A school garden is shown as a rectangle.", visual: areaDiagram(length, width), alt: "A rectangle labeled with length and width.", caption: "Visual Type: measurement diagram", question: "What is the area of the garden?", correct: `${length * width} square meters`, distractors: [`${2 * (length + width)} square meters`, `${length + width} square meters`, `${length * width + 2} square meters`], explanation: "Area is length times width.", itemPurpose: "Choose the correct operation from a diagram.", misconception: "Student confuses area with perimeter.", stimulusType: "geometry measurement diagram", evidenceDemand: "diagram-to-operation reasoning" },
        { domain: "Measurement & Data", skillId: "measurement", cognitiveLevel: "Data Display Interpretation", stimulus: "Students recorded minutes of reading.", visual: barGraph([14 + n, 18 + n, 11 + n, 20 + n], ["Ana", "Ben", "Cara", "Dev"], "Reading minutes"), alt: "A bar graph of reading minutes.", caption: "Visual Type: bar graph", question: "What is the range of the reading times?", correct: "9", distractors: ["4", `${63 + 4 * n}`, `${16 + n}`], explanation: "Range is greatest value minus least value.", itemPurpose: "Compute a measure from a graph.", misconception: "Student adds all values or chooses a typical value.", stimulusType: "bar graph", evidenceDemand: "data measure computation" },
        { domain: "Geometry", skillId: "geometry", cognitiveLevel: "Coordinate Plane", stimulus: "Point P is plotted on the grid.", visual: coordinateGrid(x, y), alt: "A coordinate grid with point P.", caption: "Visual Type: coordinate grid", question: "Which ordered pair names point P?", correct: `(${x}, ${y})`, distractors: [`(${y}, ${x})`, `(${x + 1}, ${y})`, `(${x}, ${y + 1})`], explanation: "Read the x-coordinate first, then the y-coordinate.", itemPurpose: "Read a coordinate point from a grid.", misconception: "Student reverses x and y or counts grid lines incorrectly.", stimulusType: "coordinate grid", evidenceDemand: "visual coordinate reasoning" }
      ];
    }
    if (subject === "reading") return [
      { domain: "Informational Text", skillId: "main-idea-summary", cognitiveLevel: "Text and Data Main Idea", stimulus: "Passage: The school walking club grew during spring. More students joined each month, and teachers reported that students arrived more alert after walking.", visual: lineGraph([5 + n, 8 + n, 12 + n, 16 + n], "Walking club members"), alt: "A line graph showing the walking club increasing.", caption: "Visual Type: text plus trend graph", question: "Which main idea is best supported by the passage and graph?", correct: "The walking club became more popular in spring.", distractors: ["The club lost members every month.", "Teachers stopped students from walking.", "The graph is about lunch choices."], explanation: "Both the passage and graph show growth in participation.", itemPurpose: "Integrate text and graph evidence for main idea.", misconception: "Student uses only one detail or misreads the trend.", stimulusType: "passage plus graph", evidenceDemand: "text-data integration" },
      { domain: "Literary Text", skillId: "inference", cognitiveLevel: "Character Inference", stimulus: "Passage: Maya looked at the torn poster, took a deep breath, and began taping the corners back together before the visitors arrived.", visual: svg("poster repair scene", `<rect x="145" y="45" width="100" height="115" fill="#F7DC6F" stroke="#7D6608" stroke-width="3"/><path d="M145 100 L245 78" stroke="#C0392B" stroke-width="3"/><circle cx="92" cy="88" r="24" fill="#FAD7A0"/><rect x="70" y="115" width="44" height="45" fill="#5DADE2"/><rect x="255" y="122" width="55" height="18" fill="#D5DBDB" stroke="#7F8C8D"/>`, "Maya repairs a torn poster"), alt: "A student repairing a torn poster.", caption: "Visual Type: character action scene", question: "What can the reader infer about Maya?", correct: "She is trying to solve a problem calmly.", distractors: ["She wants the poster to stay torn.", "She has no time before visitors arrive.", "She is leaving the room."], explanation: "Her actions show she notices the problem and works to fix it.", itemPurpose: "Infer character trait from actions and scene evidence.", misconception: "Student focuses on the torn poster but ignores the response.", stimulusType: "literary passage plus illustration", evidenceDemand: "inference from combined evidence" },
      { domain: "Text Evidence", skillId: "text-evidence", cognitiveLevel: "Evidence Selection", stimulus: "Claim: The new water station helped students use fewer disposable bottles.", visual: barGraph([22 + n, 15 + n, 8 + n], ["Week 1", "Week 2", "Week 3"], "Disposable bottles used"), alt: "A bar graph showing disposable bottle use decreasing.", caption: "Visual Type: evidence graph", question: "Which evidence best supports the claim?", correct: "The number of disposable bottles used decreased each week.", distractors: ["The graph has three bars.", "Week 1 came before Week 2.", "Students drink water at school."], explanation: "The decreasing values directly support the claim.", itemPurpose: "Select relevant evidence from a data display.", misconception: "Student chooses a true but weak detail.", stimulusType: "claim plus graph", evidenceDemand: "evidence relevance" },
      { domain: "Paired Passage Reasoning", skillId: "paired-passage-set", cognitiveLevel: "Source Comparison", stimulus: "Source A says the school garden teaches science. Source B says the garden takes too much recess space.", visual: tableSvg([["Source", "Main concern"], ["A", "learning"], ["B", "space"]], "Two source viewpoints"), alt: "A table comparing two source viewpoints.", caption: "Visual Type: paired source table", question: "How do the sources differ?", correct: "They focus on different effects of the garden.", distractors: ["They both say the garden is only for recess.", "Source A is about weather only.", "Source B agrees with every part of Source A."], explanation: "One source emphasizes learning and the other emphasizes space.", itemPurpose: "Compare viewpoints across sources.", misconception: "Student treats one source as if it represents both.", stimulusType: "paired sources plus table", evidenceDemand: "viewpoint comparison" }
    ];
    if (subject === "language") return [
      { domain: "Writing Development", skillId: "revision", cognitiveLevel: "Evidence Explanation", stimulus: "Draft claim: Our class should start a compost bin. Evidence: The lunchroom throws away many fruit peels each day.", visual: tableSvg([["Day", "Fruit peels"], ["Mon", 28 + n], ["Tue", 31 + n], ["Wed", 29 + n]], "Lunchroom waste data"), alt: "A table of fruit peels thrown away.", caption: "Visual Type: writing evidence table", question: "Which sentence best explains the evidence?", correct: "The data show there is enough food waste for a compost bin.", distractors: ["Compost bins are always blue.", "The lunchroom has tables.", "Fruit peels should never be counted."], explanation: "The sentence connects the data to the claim.", itemPurpose: "Connect evidence to a written claim.", misconception: "Student repeats a detail without explaining its relevance.", stimulusType: "argument draft plus data", evidenceDemand: "evidence explanation" },
      { domain: "Language Grammar", skillId: "grammar-usage", cognitiveLevel: "Grammar in Context", stimulus: "Sentence: The boxes of art supplies is on the shelf.", visual: svg("art shelf", `<rect x="70" y="65" width="240" height="90" fill="#EAF2F8" stroke="#7F8C8D" stroke-width="3"/><rect x="95" y="88" width="50" height="38" fill="#F7DC6F" stroke="#7D6608"/><rect x="165" y="88" width="50" height="38" fill="#F7DC6F" stroke="#7D6608"/><rect x="235" y="88" width="50" height="38" fill="#F7DC6F" stroke="#7D6608"/>`, "Several boxes are on a shelf"), alt: "Several boxes on a shelf.", caption: "Visual Type: grammar context", question: "Which correction is best?", correct: "Change is to are.", distractors: ["Change boxes to box's.", "Change shelf to shelfs.", "No change is needed."], explanation: "The subject boxes is plural, so the verb should be are.", itemPurpose: "Apply subject-verb agreement in context.", misconception: "Student agrees with a nearby noun or misses the plural subject.", stimulusType: "editing sentence plus picture", evidenceDemand: "grammar-in-context" },
      { domain: "Writing Organization", skillId: "paragraph-organization", cognitiveLevel: "Sequence Organization", stimulus: "A paragraph explains how to build a simple weather station.", visual: timeline(), alt: "A sequence line showing ordered events.", caption: "Visual Type: process order", question: "Which revision would improve organization?", correct: "Place the setup step before the results step.", distractors: ["Remove the topic sentence.", "Put results before materials.", "Add an unrelated sentence about lunch."], explanation: "Process writing should follow a logical order.", itemPurpose: "Improve paragraph organization.", misconception: "Student ignores sequence cues.", stimulusType: "process plan visual", evidenceDemand: "organization revision" },
      { domain: "Writing Style", skillId: "sentence-structure", cognitiveLevel: "Sentence Combining", stimulus: "Draft: The bridge was old. The bridge was wooden. The bridge crossed the creek.", visual: svg("wooden bridge", `<rect x="70" y="105" width="240" height="30" fill="#A04000" stroke="#6E2C00" stroke-width="3"/><line x1="90" y1="95" x2="90" y2="145" stroke="#6E2C00" stroke-width="4"/><line x1="290" y1="95" x2="290" y2="145" stroke="#6E2C00" stroke-width="4"/><path d="M40 155 C110 125 180 190 340 145" stroke="#5DADE2" stroke-width="16" fill="none"/>`, "Old wooden bridge over a creek"), alt: "An old wooden bridge crossing a creek.", caption: "Visual Type: sentence combining scene", question: "Which revision combines the ideas most clearly?", correct: "The old wooden bridge crossed the creek.", distractors: ["The bridge was old and bridge.", "Wooden crossed old.", "The creek was a bridge old."], explanation: "The best revision combines details clearly without repetition.", itemPurpose: "Improve sentence fluency and precision.", misconception: "Student keeps repetition or creates an unclear sentence.", stimulusType: "revision with image", evidenceDemand: "sentence clarity" }
    ];
    if (subject === "science") {
      const sunny = 13 + grade + n;
      const shade = 5 + n;
      const light = 90 + n * 4;
      const heavy = 45 + n * 3;
      return [
        { domain: "Life Science", skillId: "claim-evidence-reasoning", cognitiveLevel: "CER From Data", stimulus: "Students tested how light affected bean plant growth for one week.", visual: plantModel(sunny, shade), alt: "A table comparing plant height in sunny and shaded locations.", caption: "Visual Type: Life Science CER table", question: "Which claim is best supported by the data?", correct: "The plant near the sunny window grew taller in this test.", distractors: ["The shaded plant grew taller.", "Light had no effect in this test.", "Both plants grew exactly the same."], explanation: "The sunny-window plant has the greater average height.", itemPurpose: "Use data to support a life science claim.", misconception: "Student ignores the comparison or overgeneralizes beyond the test.", stimulusType: "data table", evidenceDemand: "CER from data", scienceDimensions: "DCI plant growth + SEP analyzing data + CCC cause/effect" },
        { domain: "Physical Science", skillId: "physical-science", cognitiveLevel: "Controlled Force Model", stimulus: "Two carts were pushed with the same force.", visual: forceModel(light, heavy), alt: "A table comparing light and heavy carts after the same push.", caption: "Visual Type: Physical Science investigation table", question: "Which explanation fits the evidence?", correct: "With the same push, the lighter cart moved farther.", distractors: ["Mass did not matter in the test.", "The heavy cart moved farther.", "The carts were pushed with different forces."], explanation: "The table shows the lighter cart traveled a greater distance.", itemPurpose: "Explain a physical relationship using controlled data.", misconception: "Student ignores the controlled variable or reverses the comparison.", stimulusType: "investigation data table", evidenceDemand: "model explanation from data", scienceDimensions: "DCI forces and motion + SEP analyzing data + CCC scale/proportion" },
        { domain: "Earth and Space Science", skillId: "experimental-design", cognitiveLevel: "Weather Pattern Data", stimulus: "A class recorded afternoon temperatures over four days.", visual: lineGraph([12 + n, 14 + n, 17 + n, 16 + n], "Afternoon temperature"), alt: "A line graph of afternoon temperature.", caption: "Visual Type: Earth Science line graph", question: "Which statement best describes the pattern?", correct: "The temperature rose for three days and then dropped slightly.", distractors: ["The temperature stayed the same every day.", "The temperature dropped every day.", "The graph shows plant height."], explanation: "The graph rises through the third point, then goes down a little.", itemPurpose: "Describe an Earth science data pattern.", misconception: "Student reads only the final point or ignores the trend.", stimulusType: "line graph", evidenceDemand: "data pattern interpretation", scienceDimensions: "DCI weather + SEP analyzing data + CCC patterns" },
        { domain: "Earth and Space Science", skillId: "model-limitations", cognitiveLevel: "Model Limitation", stimulus: "A flood model uses rainfall amount but does not include soil type or slope.", visual: mapScene(), alt: "A map with a river and nearby towns.", caption: "Visual Type: Earth system model", question: "Why might the model be limited?", correct: "Soil type and slope can affect how water moves over land.", distractors: ["Models should never use rainfall.", "Rivers cannot affect towns.", "A model is always complete."], explanation: "Missing relevant variables can weaken a model's prediction.", itemPurpose: "Evaluate a model limitation.", misconception: "Student treats a simplified model as complete.", stimulusType: "model scenario plus map", evidenceDemand: "model limitation evaluation", scienceDimensions: "DCI Earth systems + SEP evaluating models + CCC systems" }
      ];
    }
    return [
      { domain: "Geography", skillId: "source-analysis", cognitiveLevel: "Spatial Pattern", stimulus: "A map shows where towns developed near a river.", visual: mapScene(), alt: "A map with towns clustered near a river.", caption: "Visual Type: geographic pattern map", question: "Which inference is best supported?", correct: "Water access may have influenced where towns developed.", distractors: ["People always avoided rivers.", "Maps cannot show settlement patterns.", "The towns are all far from water."], explanation: "Most towns are near the river, suggesting water access mattered.", itemPurpose: "Infer from a geographic pattern.", misconception: "Student lists a visible detail without explaining the pattern.", stimulusType: "map", evidenceDemand: "spatial inference" },
      { domain: "History", skillId: "source-analysis", cognitiveLevel: "Timeline Reasoning", stimulus: "Use the timeline to compare events.", visual: timeline(), alt: "A timeline with three ordered events.", caption: "Visual Type: timeline", question: "Which event happened after the road was built?", correct: "Market", distractors: ["Charter", "Road", "All events happened first"], explanation: "Market appears to the right of Road on the timeline.", itemPurpose: "Use a timeline to order historical events.", misconception: "Student reads the timeline out of order.", stimulusType: "timeline", evidenceDemand: "chronological reasoning" },
      { domain: "Economics", skillId: "economics", cognitiveLevel: "Opportunity Cost", stimulus: "A student has 60 minutes after school and can choose only one activity.", visual: tableSvg([["Choice", "Benefit"], ["Robotics", "finish design"], ["Soccer", "team practice"]], "One-hour choice"), alt: "A table showing two possible activities.", caption: "Visual Type: economics choice table", question: "If the student chooses robotics, what is the opportunity cost?", correct: "the soccer practice given up", distractors: ["the robotics work completed", "both activities together", "nothing because time is free"], explanation: "Opportunity cost is the next best option given up.", itemPurpose: "Apply opportunity cost to a realistic choice.", misconception: "Student identifies the chosen option instead of the forgone option.", stimulusType: "choice table", evidenceDemand: "tradeoff reasoning" },
      { domain: "Civics", skillId: "source-analysis", cognitiveLevel: "Civic Decision Evidence", stimulus: "A city council is deciding whether to add a crosswalk near school.", visual: barGraph([18 + n, 29 + n, 35 + n], ["Mon", "Tue", "Wed"], "Students crossing before school"), alt: "A graph of students crossing near school.", caption: "Visual Type: civic evidence graph", question: "Which reason best uses the evidence?", correct: "Many students cross there, so a crosswalk could improve safety.", distractors: ["No students cross there.", "The graph is about lunch.", "Crosswalks are only for parks."], explanation: "The evidence shows many crossings, which connects to safety.", itemPurpose: "Use evidence in a civic decision.", misconception: "Student ignores the data or chooses an unrelated reason.", stimulusType: "civic scenario plus graph", evidenceDemand: "evidence-based civic reasoning" }
    ];
  }

  const rows = [];
  targetGrades.forEach(grade => ["math", "reading", "language", "science", "social"].forEach(subject => {
    bands.forEach(([band, count]) => {
      for (let i = 0; i < count; i++) add(rows, grade, subject, band, ritBase[grade][band] + i, templates(grade, subject, i)[i % 4]);
    });
  }));
  window.productionQuestionBank.push(...rows);
})();
