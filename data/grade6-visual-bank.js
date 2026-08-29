(function replaceGrade6VisualBank() {
  const grade = 6;
  window.productionQuestionBank = window.productionQuestionBank.filter(q => q.grade !== grade);

  const bands = [["Low", 12, 214], ["Medium", 15, 226], ["High", 10, 240], ["Advanced", 3, 252]];
  const targets = {
    math: "Grade 6 visual math transfer: ratios, coordinate planes, expressions, data displays, geometry, and multi-step model reasoning",
    reading: "Grade 6 source-based reading transfer: central idea, inference, author's claim, evidence strength, paired sources, and chart-text integration",
    language: "Grade 6 academic writing transfer: revision, sentence precision, transitions, evidence explanation, grammar in context, and style control",
    science: "Grade 6 MAP-style science transfer: Life, Physical, Earth science through models, data, systems, fair tests, CER, and model limitations",
    social: "Grade 6 social studies transfer: geography, timelines, source perspective, civic evidence, economics, and historical pattern reasoning"
  };

  function svg(title, body, label = "") {
    return `<svg viewBox="0 0 400 240" width="400" height="240" role="img" aria-label="${title}" style="background:#fff;border:1px solid #bdc3c7;border-radius:8px;">
      <rect x="0" y="0" width="400" height="240" fill="#FDFEFE"/>
      ${body}
      <text x="200" y="224" text-anchor="middle" font-size="12" fill="#2C3E50" font-weight="700">${label}</text>
    </svg>`;
  }

  function tableSvg(rows, label) {
    const h = 32;
    const w = 330 / rows[0].length;
    let body = "";
    rows.forEach((row, r) => row.forEach((cell, c) => {
      body += `<rect x="${35 + c * w}" y="${42 + r * h}" width="${w}" height="${h}" fill="${r === 0 ? "#EAF2F8" : "#FFFFFF"}" stroke="#7F8C8D"/><text x="${35 + c * w + w / 2}" y="${63 + r * h}" text-anchor="middle" font-size="11" font-weight="${r === 0 ? "700" : "500"}">${cell}</text>`;
    }));
    return svg("table", body, label);
  }

  function barGraph(values, labels, title) {
    let body = `<line x1="54" y1="182" x2="345" y2="182" stroke="#2C3E50" stroke-width="2"/><line x1="64" y1="188" x2="64" y2="34" stroke="#2C3E50" stroke-width="2"/>`;
    values.forEach((v, i) => {
      const h = v * 7;
      const x = 88 + i * 62;
      body += `<rect x="${x}" y="${182 - h}" width="36" height="${h}" fill="#3498DB" stroke="#1B4F72" stroke-width="2"/><text x="${x + 18}" y="${175 - h}" text-anchor="middle" font-size="11">${v}</text><text x="${x + 18}" y="201" text-anchor="middle" font-size="10">${labels[i]}</text>`;
    });
    return svg("bar graph", body, title);
  }

  function lineGraph(values, title) {
    const path = values.map((v, i) => `${i ? "L" : "M"} ${72 + i * 58} ${184 - v * 7}`).join(" ");
    const dots = values.map((v, i) => `<circle cx="${72 + i * 58}" cy="${184 - v * 7}" r="5" fill="#C0392B"/>`).join("");
    return svg("line graph", `<line x1="54" y1="184" x2="350" y2="184" stroke="#2C3E50" stroke-width="2"/><line x1="64" y1="190" x2="64" y2="34" stroke="#2C3E50" stroke-width="2"/><path d="${path}" fill="none" stroke="#0A4F85" stroke-width="4"/>${dots}<text x="200" y="30" text-anchor="middle" font-size="13" font-weight="700">${title}</text>`, title);
  }

  function ratioTape(a, b) {
    const total = a + b;
    const aw = Math.round(270 * a / total);
    const bw = 270 - aw;
    return svg("ratio tape diagram", `<rect x="62" y="86" width="${aw}" height="54" fill="#58D68D" stroke="#145A32" stroke-width="2"/><rect x="${62 + aw}" y="86" width="${bw}" height="54" fill="#F1948A" stroke="#922B21" stroke-width="2"/><text x="${62 + aw / 2}" y="118" text-anchor="middle" font-size="14">green ${a}</text><text x="${62 + aw + bw / 2}" y="118" text-anchor="middle" font-size="14">red ${b}</text>`, "Tape diagram for a ratio");
  }

  function coordinateGrid(x, y) {
    let grid = "";
    for (let i = 0; i <= 6; i++) {
      grid += `<line x1="${70 + i * 38}" y1="34" x2="${70 + i * 38}" y2="200" stroke="#D5DBDB"/><line x1="70" y1="${200 - i * 26}" x2="330" y2="${200 - i * 26}" stroke="#D5DBDB"/>`;
    }
    return svg("coordinate plane", `${grid}<line x1="70" y1="200" x2="340" y2="200" stroke="#2C3E50" stroke-width="2"/><line x1="70" y1="200" x2="70" y2="30" stroke="#2C3E50" stroke-width="2"/><circle cx="${70 + x * 38}" cy="${200 - y * 26}" r="7" fill="#C0392B"/><text x="${82 + x * 38}" y="${194 - y * 26}" font-size="12">P</text>`, "Point P on coordinate plane");
  }

  function prism(l, w, h) {
    return svg("rectangular prism", `<rect x="92" y="88" width="160" height="78" fill="#EAF2F8" stroke="#0A4F85" stroke-width="3"/><polygon points="92,88 132,52 292,52 252,88" fill="#D6EAF8" stroke="#0A4F85" stroke-width="3"/><polygon points="252,88 292,52 292,130 252,166" fill="#AED6F1" stroke="#0A4F85" stroke-width="3"/><text x="172" y="188" font-size="12">${l} cm</text><text x="302" y="102" font-size="12">${w} cm</text><text x="66" y="128" font-size="12">${h} cm</text>`, "Rectangular prism dimensions");
  }

  function mapScene() {
    return svg("trade route map", `<rect x="35" y="35" width="330" height="155" fill="#D5F5E3" stroke="#145A32" stroke-width="2"/><path d="M55 78 C120 36 175 118 235 78 C292 42 330 78 360 58" stroke="#5DADE2" stroke-width="15" fill="none"/><circle cx="88" cy="82" r="9" fill="#C0392B"/><circle cx="162" cy="96" r="9" fill="#C0392B"/><circle cx="242" cy="78" r="9" fill="#C0392B"/><circle cx="315" cy="68" r="9" fill="#C0392B"/><path d="M88 82 L162 96 L242 78 L315 68" stroke="#7D3C98" stroke-width="4" fill="none" stroke-dasharray="6,5"/>`, "Settlements and trade route near a river");
  }

  function timeline() {
    return svg("timeline", `<line x1="44" y1="118" x2="356" y2="118" stroke="#2C3E50" stroke-width="4"/><circle cx="76" cy="118" r="9" fill="#F7DC6F" stroke="#7D6608"/><text x="76" y="82" text-anchor="middle" font-size="11">Treaty</text><circle cx="176" cy="118" r="9" fill="#F7DC6F" stroke="#7D6608"/><text x="176" y="82" text-anchor="middle" font-size="11">Railroad</text><circle cx="312" cy="118" r="9" fill="#F7DC6F" stroke="#7D6608"/><text x="312" y="82" text-anchor="middle" font-size="11">Market</text>`, "Events shown in chronological order");
  }

  function foodWeb() {
    return svg("food web model", `<circle cx="82" cy="126" r="24" fill="#58D68D" stroke="#145A32"/><text x="82" y="131" text-anchor="middle" font-size="11">plants</text><circle cx="190" cy="82" r="24" fill="#F7DC6F" stroke="#7D6608"/><text x="190" y="87" text-anchor="middle" font-size="11">insects</text><circle cx="308" cy="126" r="24" fill="#F1948A" stroke="#922B21"/><text x="308" y="131" text-anchor="middle" font-size="11">birds</text><path d="M106 116 L166 90" stroke="#2C3E50" stroke-width="4"/><path d="M214 90 L284 116" stroke="#2C3E50" stroke-width="4"/><text x="200" y="172" text-anchor="middle" font-size="12">arrows show energy moving</text>`, "Simple food web model");
  }

  function rotate(correct, distractors, seed) {
    const base = [correct, ...distractors];
    const shift = seed % 4;
    const options = base.slice(shift).concat(base.slice(0, shift));
    return { options, answer: options.indexOf(correct) };
  }

  function add(rows, subject, band, rit, item) {
    const seed = rows.filter(q => q.subject === subject).length;
    const c = rotate(item.correct, item.distractors, seed);
    rows.push({
      id: `${subject}-g6-visual-${band.toLowerCase()}-${String(seed + 1).padStart(2, "0")}`,
      grade,
      subject,
      domain: item.domain,
      skillId: item.skillId,
      difficulty: band,
      ritDifficulty: rit,
      cognitiveLevel: band === "Advanced" ? `${item.cognitiveLevel} · Visual Ceiling` : item.cognitiveLevel,
      stimulus: item.stimulus,
      question: band === "Advanced" ? `${item.question} Choose the answer best supported by the evidence.` : item.question,
      options: c.options,
      answer: c.answer,
      explanation: item.explanation,
      itemPurpose: item.itemPurpose,
      misconception: item.misconception,
      media: { type: "html", html: item.visual, alt: item.alt, caption: item.caption },
      killer: band === "Advanced",
      calculator: false,
      stimulusType: item.stimulusType,
      evidenceDemand: band === "Advanced" ? `${item.evidenceDemand}; grade 6 ceiling transfer` : item.evidenceDemand,
      distractorRationale: item.distractorRationale || "Distractors target surface reading, wrong operation/model, unsupported inference, overclaiming, or ignoring controlled variables.",
      scienceDimensions: item.scienceDimensions,
      mapAlignment: "MAP Growth-style Grade 6 original adaptive item using public skill frames, visual/data-supported reasoning, and plausible misconception distractors.",
      schoolTransferTarget: targets[subject],
      adaptiveWeight: band === "Advanced" ? 4 : band === "High" ? 3 : band === "Medium" ? 2 : 1,
      status: "approved"
    });
  }

  function templates(subject, i) {
    const n = i % 6;
    if (subject === "math") {
      const g = 3 + (n % 4), r = 5 + (n % 5);
      const x = 2 + (n % 4), y = 5 - (n % 4);
      const l = 6 + n, w = 3 + (n % 3), h = 4 + (n % 2);
      return [
        { domain: "Ratios & Proportional Relationships", skillId: "proportional-relationships", cognitiveLevel: "Ratio Model", stimulus: "The tape diagram shows green and red tiles in a design.", visual: ratioTape(g, r), alt: "A tape diagram comparing green and red tiles.", caption: "Visual Type: ratio tape diagram", question: "What is the ratio of green tiles to red tiles?", correct: `${g}:${r}`, distractors: [`${r}:${g}`, `${g + r}:${r}`, `${g}:${g + r}`], explanation: "The ratio compares green tiles to red tiles in that order.", itemPurpose: "Interpret a ratio from a visual model.", misconception: "Student reverses the order or compares a part to the whole.", stimulusType: "ratio tape diagram", evidenceDemand: "model-to-ratio translation" },
        { domain: "Expressions & Equations", skillId: "operations", cognitiveLevel: "Expression From Table", stimulus: "The table shows the cost of buying notebooks at the same price.", visual: tableSvg([["notebooks", "2", "4", "6"], ["cost", `$${2 * (4 + n)}`, `$${4 * (4 + n)}`, `$${6 * (4 + n)}`]], "Notebook cost table"), alt: "A table showing notebooks and cost.", caption: "Visual Type: proportional table", question: "Which expression gives the cost for n notebooks?", correct: `${4 + n}n`, distractors: [`n + ${4 + n}`, `${2 * (4 + n)}n`, `${4 + n}/n`], explanation: "Each notebook costs the same amount, so multiply n by the unit price.", itemPurpose: "Write an expression from a proportional table.", misconception: "Student adds instead of multiplying by the unit rate.", stimulusType: "proportional table", evidenceDemand: "table-to-expression reasoning" },
        { domain: "Geometry", skillId: "geometry", cognitiveLevel: "Coordinate Plane", stimulus: "Point P is plotted on a coordinate plane.", visual: coordinateGrid(x, y), alt: "A coordinate plane with point P.", caption: "Visual Type: coordinate grid", question: "Which ordered pair names point P?", correct: `(${x}, ${y})`, distractors: [`(${y}, ${x})`, `(${x + 1}, ${y})`, `(${x}, ${y + 1})`], explanation: "The x-coordinate is read first, then the y-coordinate.", itemPurpose: "Read coordinates from a graph.", misconception: "Student reverses x and y or miscounts grid units.", stimulusType: "coordinate grid", evidenceDemand: "coordinate evidence" },
        { domain: "Geometry", skillId: "measurement", cognitiveLevel: "Volume Model", stimulus: "A rectangular prism is shown with its dimensions.", visual: prism(l, w, h), alt: "A rectangular prism labeled with length, width, and height.", caption: "Visual Type: volume diagram", question: "What is the volume of the prism?", correct: `${l * w * h} cubic centimeters`, distractors: [`${2 * (l + w + h)} cubic centimeters`, `${l * w} cubic centimeters`, `${l + w + h} cubic centimeters`], explanation: "Volume of a rectangular prism is length times width times height.", itemPurpose: "Use a diagram to calculate volume.", misconception: "Student finds surface-like sums or area instead of volume.", stimulusType: "3D measurement diagram", evidenceDemand: "diagram-to-formula reasoning" }
      ];
    }
    if (subject === "reading") return [
      { domain: "Informational Text", skillId: "main-idea-summary", cognitiveLevel: "Central Idea With Graph", stimulus: "Passage: A school reduced waste by placing sorting stations near exits. The largest change happened after teachers modeled how to sort lunch items.", visual: lineGraph([22 + n, 18 + n, 13 + n, 9 + n], "Mixed trash bags"), alt: "A line graph showing mixed trash decreasing.", caption: "Visual Type: passage plus trend graph", question: "Which central idea is best supported?", correct: "The sorting stations helped reduce mixed trash over time.", distractors: ["The school produced more mixed trash each week.", "Teachers stopped using lunch items.", "The graph is about reading time."], explanation: "The passage describes sorting stations and the graph shows mixed trash decreasing.", itemPurpose: "Integrate text and graph evidence for central idea.", misconception: "Student ignores the trend or uses only one detail.", stimulusType: "passage plus graph", evidenceDemand: "text-data integration" },
      { domain: "Argument & Claims", skillId: "text-evidence", cognitiveLevel: "Evidence Strength", stimulus: "Claim: The city should add bike lanes near the library.", visual: barGraph([12 + n, 28 + n, 35 + n], ["Mon", "Tue", "Wed"], "Bike riders near library"), alt: "A bar graph showing bike riders near a library.", caption: "Visual Type: claim evidence graph", question: "Which evidence best supports the claim?", correct: "Many bike riders travel near the library on school days.", distractors: ["The graph has three labels.", "Libraries have books.", "Wednesday comes after Tuesday."], explanation: "The data directly relate bike traffic to the proposed bike lanes.", itemPurpose: "Select evidence that supports an argument.", misconception: "Student chooses a true but weak detail.", stimulusType: "argument claim plus graph", evidenceDemand: "evidence relevance" },
      { domain: "Literary Text", skillId: "inference", cognitiveLevel: "Inference From Scene", stimulus: "Passage: Elena paused at the display, checked the crooked title card, and quietly straightened it before the judges arrived.", visual: svg("science display scene", `<rect x="128" y="48" width="150" height="105" fill="#EAF2F8" stroke="#0A4F85" stroke-width="3"/><rect x="158" y="62" width="90" height="22" fill="#F7DC6F" stroke="#7D6608" transform="rotate(-5 203 73)"/><circle cx="82" cy="98" r="24" fill="#FAD7A0"/><rect x="60" y="126" width="44" height="45" fill="#58D68D"/>`, "Elena fixes a display"), alt: "A student straightening a display card.", caption: "Visual Type: character action scene", question: "What can the reader infer about Elena?", correct: "She cares about presenting careful work.", distractors: ["She wants the display to look messy.", "She is leaving before the judges arrive.", "She dislikes science displays."], explanation: "Her quiet action shows attention to quality.", itemPurpose: "Infer character trait from action evidence.", misconception: "Student focuses on the crooked card but ignores Elena's response.", stimulusType: "literary passage plus image", evidenceDemand: "inference from actions" },
      { domain: "Paired Passage Reasoning", skillId: "paired-passage-set", cognitiveLevel: "Paired Source Comparison", stimulus: "Source A argues that longer lunch gives students time to eat calmly. Source B argues that a longer lunch reduces time for afternoon classes.", visual: tableSvg([["Source", "Focus"], ["A", "student wellness"], ["B", "class time"]], "Two viewpoints"), alt: "A table comparing two source viewpoints.", caption: "Visual Type: paired source table", question: "How do the sources differ?", correct: "They emphasize different tradeoffs of the same schedule change.", distractors: ["They both reject every schedule change.", "Source A is about weather.", "Source B focuses on lunch food only."], explanation: "One source focuses on wellness and the other on class time.", itemPurpose: "Compare viewpoints across sources.", misconception: "Student treats different viewpoints as identical.", stimulusType: "paired sources plus table", evidenceDemand: "viewpoint comparison" }
    ];
    if (subject === "language") return [
      { domain: "Writing Development", skillId: "revision", cognitiveLevel: "Evidence Explanation", stimulus: "Draft claim: The school should expand its recycling program.", visual: tableSvg([["Week", "Recycled kg"], ["1", 18 + n], ["2", 25 + n], ["3", 31 + n]], "Recycling data"), alt: "A table showing recycled kilograms increasing.", caption: "Visual Type: writing evidence table", question: "Which sentence best explains the evidence?", correct: "The increasing amounts show students are using the recycling program more.", distractors: ["The school has weeks.", "Recycling bins can be different colors.", "The table should be ignored."], explanation: "The sentence connects the data trend to the claim.", itemPurpose: "Explain evidence in an argument.", misconception: "Student repeats a detail without connecting it to the claim.", stimulusType: "argument draft plus data", evidenceDemand: "evidence explanation" },
      { domain: "Sentence Structure", skillId: "sentence-structure", cognitiveLevel: "Sentence Combining", stimulus: "Draft: The model was detailed. The model showed erosion. The model used sand and water.", visual: svg("erosion model", `<rect x="72" y="72" width="250" height="100" fill="#F7DC6F" stroke="#7D6608" stroke-width="3"/><path d="M92 92 C160 128 218 78 300 124" stroke="#5DADE2" stroke-width="12" fill="none"/><circle cx="104" cy="150" r="7" fill="#A04000"/><circle cx="240" cy="142" r="7" fill="#A04000"/>`, "Sand and water erosion model"), alt: "A sand and water erosion model.", caption: "Visual Type: sentence combining scene", question: "Which revision combines the ideas most clearly?", correct: "The detailed sand-and-water model showed erosion.", distractors: ["The model was detailed and model.", "Erosion showed sand detailed.", "Water was model and detailed erosion."], explanation: "The best revision combines the key details clearly.", itemPurpose: "Improve sentence fluency and precision.", misconception: "Student keeps repetition or creates unclear syntax.", stimulusType: "revision with image", evidenceDemand: "sentence clarity" },
      { domain: "Language Grammar", skillId: "grammar-usage", cognitiveLevel: "Pronoun Reference", stimulus: "Sentence: Jordan gave Liam his notebook after class.", visual: tableSvg([["Student", "Object"], ["Jordan", "notebook"], ["Liam", "folder"]], "Who owns what?"), alt: "A table of students and objects.", caption: "Visual Type: pronoun clarity table", question: "Which revision makes the pronoun clearer?", correct: "Jordan gave Jordan's notebook to Liam after class.", distractors: ["Jordan gave his notebook to him after class.", "He gave Liam it after class.", "No revision can make it clearer."], explanation: "The revision names the owner of the notebook.", itemPurpose: "Revise unclear pronoun reference.", misconception: "Student accepts ambiguous pronouns as clear.", stimulusType: "editing sentence plus table", evidenceDemand: "clarity revision" },
      { domain: "Writing Organization", skillId: "paragraph-organization", cognitiveLevel: "Transition Choice", stimulus: "A paragraph compares two school routes. First it describes the short route. Next it needs to introduce a safer but longer route.", visual: mapScene(), alt: "A map showing routes and settlements.", caption: "Visual Type: route comparison map", question: "Which transition best introduces the contrast?", correct: "However,", distractors: ["For example,", "As a result,", "In the same way,"], explanation: "However signals a contrast between short and safer but longer.", itemPurpose: "Choose a transition that fits the relationship between ideas.", misconception: "Student chooses a transition that signals example, result, or similarity.", stimulusType: "organization scenario plus map", evidenceDemand: "transition logic" }
    ];
    if (subject === "science") {
      return [
        { domain: "Life Science", skillId: "claim-evidence-reasoning", cognitiveLevel: "Food Web Model", stimulus: "A simple food web model shows energy moving from plants to insects to birds.", visual: foodWeb(), alt: "A food web model with plants, insects, and birds.", caption: "Visual Type: Life Science food web model", question: "What would most directly affect the birds if the insect population decreased?", correct: "Birds would have less food available.", distractors: ["Plants would eat the birds.", "The arrows would reverse direction.", "The birds would have more insects to eat."], explanation: "The model shows birds receiving energy from insects.", itemPurpose: "Use a model to reason about ecosystem relationships.", misconception: "Student treats arrows as motion paths or reverses energy flow.", stimulusType: "system model", evidenceDemand: "model-based systems reasoning", scienceDimensions: "DCI ecosystems + SEP using models + CCC systems" },
        { domain: "Physical Science", skillId: "physical-science", cognitiveLevel: "Force Data Pattern", stimulus: "Students tested how ramp height affected distance traveled by the same cart.", visual: tableSvg([["Ramp height", "Distance"], ["low", "42 cm"], ["medium", "68 cm"], ["high", "96 cm"]], "Ramp investigation"), alt: "A table linking ramp height and distance.", caption: "Visual Type: Physical Science data table", question: "Which claim is best supported?", correct: "Higher ramp height was associated with a longer distance traveled.", distractors: ["Lower ramps always make carts travel farther.", "Ramp height was not changed.", "The cart traveled the same distance every time."], explanation: "Distance increased as ramp height increased.", itemPurpose: "Identify a physical science pattern from data.", misconception: "Student ignores the variable relationship or overstates beyond the data.", stimulusType: "investigation table", evidenceDemand: "data pattern claim", scienceDimensions: "DCI motion + SEP data analysis + CCC cause/effect" },
        { domain: "Earth and Space Science", skillId: "experimental-design", cognitiveLevel: "Earth Data Trend", stimulus: "A class measured stream depth after rainfall.", visual: lineGraph([4 + n, 7 + n, 12 + n, 9 + n], "Stream depth after rain"), alt: "A line graph of stream depth changing after rain.", caption: "Visual Type: Earth Science line graph", question: "Which statement best describes the data?", correct: "Stream depth rose and then began to fall.", distractors: ["Stream depth stayed constant.", "Stream depth only fell.", "The graph measures insect population."], explanation: "The graph increases to a high point and then decreases.", itemPurpose: "Interpret an Earth science data trend.", misconception: "Student reads only one point instead of the pattern.", stimulusType: "line graph", evidenceDemand: "trend interpretation", scienceDimensions: "DCI water systems + SEP analyzing data + CCC patterns" },
        { domain: "Earth and Space Science", skillId: "model-limitations", cognitiveLevel: "Model Limitation", stimulus: "A flood risk model includes rainfall but not land slope or soil type.", visual: mapScene(), alt: "A map with a river and nearby settlements.", caption: "Visual Type: Earth system map model", question: "Why is the model limited?", correct: "Slope and soil type can affect how water moves and collects.", distractors: ["Rainfall should never be included.", "Maps cannot show rivers.", "A model with one variable is always complete."], explanation: "Missing relevant variables can weaken a prediction.", itemPurpose: "Evaluate the limitation of a scientific model.", misconception: "Student treats a simplified model as complete.", stimulusType: "model scenario plus map", evidenceDemand: "model limitation evaluation", scienceDimensions: "DCI Earth systems + SEP evaluating models + CCC systems" }
      ];
    }
    return [
      { domain: "Geography", skillId: "source-analysis", cognitiveLevel: "Spatial Pattern", stimulus: "A map shows settlements and a trade route near a river.", visual: mapScene(), alt: "A map showing settlements and a trade route near a river.", caption: "Visual Type: geography map", question: "Which inference is best supported?", correct: "River access may have influenced settlement and trade patterns.", distractors: ["Settlements avoided water access.", "Trade routes cannot appear on maps.", "All towns are far from the river."], explanation: "The settlements and route cluster near the river.", itemPurpose: "Infer from a spatial pattern.", misconception: "Student names a detail without explaining the pattern.", stimulusType: "map", evidenceDemand: "spatial inference" },
      { domain: "History", skillId: "source-analysis", cognitiveLevel: "Chronology", stimulus: "Use the timeline to compare events.", visual: timeline(), alt: "A timeline with treaty, railroad, and market.", caption: "Visual Type: timeline", question: "Which event happened after the railroad?", correct: "Market", distractors: ["Treaty", "Railroad", "All events happened before the railroad"], explanation: "The market appears to the right of the railroad on the timeline.", itemPurpose: "Use a timeline to determine chronological order.", misconception: "Student reads the order backward or selects the labeled event.", stimulusType: "timeline", evidenceDemand: "chronological reasoning" },
      { domain: "Economics", skillId: "economics", cognitiveLevel: "Cost-Benefit Evidence", stimulus: "A student group compares two fundraising plans.", visual: tableSvg([["Plan", "Cost", "Expected sales"], ["A", "$40", "$120"], ["B", "$70", "$160"]], "Fundraiser options"), alt: "A cost and expected sales table.", caption: "Visual Type: economics table", question: "Which plan has the greater expected profit?", correct: "Plan B", distractors: ["Plan A", "Both have no cost", "Both have the same profit"], explanation: "Plan A profit is 120 - 40 = 80. Plan B profit is 160 - 70 = 90, so Plan B is greater.", itemPurpose: "Use cost and revenue to compare choices.", misconception: "Student compares sales without subtracting cost.", stimulusType: "economics table", evidenceDemand: "cost-benefit computation" },
      { domain: "Civics", skillId: "source-analysis", cognitiveLevel: "Civic Evidence", stimulus: "A school council is deciding whether to add a quiet study room.", visual: barGraph([18 + n, 26 + n, 38 + n], ["G4", "G5", "G6"], "Students requesting quiet study"), alt: "A bar graph showing students requesting quiet study by grade.", caption: "Visual Type: civic evidence graph", question: "Which reason best uses the evidence?", correct: "Many students, especially in Grade 6, requested a quiet study room.", distractors: ["No students requested a study room.", "The graph is about sports teams.", "Quiet rooms are only used outside school."], explanation: "The graph shows requests across grades, with Grade 6 highest.", itemPurpose: "Use data to support a civic decision.", misconception: "Student ignores the values or uses unrelated reasoning.", stimulusType: "civic scenario plus graph", evidenceDemand: "evidence-based civic reasoning" }
    ];
  }

  const rows = [];
  ["math", "reading", "language", "science", "social"].forEach(subject => {
    bands.forEach(([band, count, base]) => {
      for (let i = 0; i < count; i++) add(rows, subject, band, base + i, templates(subject, i)[i % 4]);
    });
  });

  window.productionQuestionBank.push(...rows);
})();
