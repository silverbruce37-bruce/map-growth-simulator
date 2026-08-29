(function replaceGrade2To3PictureBanks() {
  const targetGrades = [2, 3];
  window.productionQuestionBank = window.productionQuestionBank.filter(q => !targetGrades.includes(q.grade));

  const ritBase = {
    2: { Low: 158, Medium: 170, High: 182, Advanced: 194 },
    3: { Low: 174, Medium: 186, High: 198, Advanced: 210 }
  };
  const bands = [["Low", 12], ["Medium", 15], ["High", 10], ["Advanced", 3]];
  const targets = {
    math: "Grade 2-3 visual math transfer: place value, regrouping, arrays, fractions, measurement, graphs, and two-step reasoning",
    reading: "Grade 2-3 illustrated reading transfer: main idea, sequence, inference, vocabulary, text evidence, and paired picture-text reasoning",
    language: "Grade 2-3 visual language transfer: grammar, punctuation, sentence combining, precise word choice, and revision from picture evidence",
    science: "Grade 2-3 visual science transfer: life cycles, forces, weather data, habitats, fair tests, CER, and model evidence",
    social: "Grade 2-3 visual social studies transfer: maps, timelines, civic roles, economics, community systems, and source evidence"
  };

  function svgScene(title, body, label = "") {
    return `<svg viewBox="0 0 340 210" width="340" height="210" role="img" aria-label="${title}" style="background:#fff;border:1px solid #bdc3c7;border-radius:8px;">
      <rect x="0" y="0" width="340" height="210" fill="#FDFEFE"/>
      ${body}
      <text x="170" y="196" text-anchor="middle" font-size="12" fill="#2C3E50" font-weight="700">${label}</text>
    </svg>`;
  }

  function tableSvg(headers, values, label) {
    const cols = headers.length;
    const w = 280 / cols;
    let cells = "";
    headers.forEach((h, i) => {
      cells += `<rect x="${30 + i * w}" y="45" width="${w}" height="42" fill="#EAF2F8" stroke="#7F8C8D"/><text x="${30 + i * w + w / 2}" y="70" text-anchor="middle" font-size="12" font-weight="700">${h}</text>`;
      cells += `<rect x="${30 + i * w}" y="87" width="${w}" height="44" fill="#FFFFFF" stroke="#7F8C8D"/><text x="${30 + i * w + w / 2}" y="114" text-anchor="middle" font-size="13">${values[i]}</text>`;
    });
    return svgScene("data table", cells, label);
  }

  function barGraph(values, names, label) {
    let bars = `<line x1="45" y1="155" x2="300" y2="155" stroke="#2C3E50"/><line x1="55" y1="160" x2="55" y2="35" stroke="#2C3E50"/>`;
    values.forEach((v, i) => {
      const h = v * 13;
      const x = 78 + i * 62;
      bars += `<rect x="${x}" y="${155 - h}" width="34" height="${h}" fill="#3498DB" stroke="#1B4F72" stroke-width="2"/><text x="${x + 17}" y="174" text-anchor="middle" font-size="11">${names[i]}</text><text x="${x + 17}" y="${148 - h}" text-anchor="middle" font-size="11">${v}</text>`;
    });
    return svgScene("bar graph", bars, label);
  }

  function baseTen(tens, ones) {
    let body = "";
    for (let i = 0; i < tens; i++) {
      const x = 34 + i * 24;
      body += `<rect x="${x}" y="45" width="16" height="100" fill="#5DADE2" stroke="#1B4F72"/><text x="${x + 8}" y="160" text-anchor="middle" font-size="10">10</text>`;
    }
    for (let i = 0; i < ones; i++) {
      const x = 180 + (i % 5) * 24;
      const y = 52 + Math.floor(i / 5) * 28;
      body += `<rect x="${x}" y="${y}" width="16" height="16" fill="#F1948A" stroke="#922B21"/>`;
    }
    return svgScene("base ten blocks", body, `${tens} tens and ${ones} ones`);
  }

  function arrayModel(rows, cols) {
    let body = "";
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        body += `<circle cx="${75 + c * 36}" cy="${48 + r * 32}" r="11" fill="#F7DC6F" stroke="#7D6608" stroke-width="2"/>`;
      }
    }
    return svgScene("array model", body, `${rows} rows of ${cols}`);
  }

  function fractionModel(parts, shaded) {
    const w = 250 / parts;
    let body = "";
    for (let i = 0; i < parts; i++) {
      body += `<rect x="${45 + i * w}" y="82" width="${w}" height="48" fill="${i < shaded ? "#58D68D" : "#FFFFFF"}" stroke="#145A32" stroke-width="2"/>`;
    }
    return svgScene("fraction strip", body, `${shaded} of ${parts} equal parts are shaded`);
  }

  function numberLine(a, b, sum) {
    return svgScene("number line jumps", `<line x1="45" y1="120" x2="300" y2="120" stroke="#2C3E50" stroke-width="3"/>
      <text x="50" y="145" font-size="12">0</text><text x="170" y="145" font-size="12">${a}</text><text x="292" y="145" font-size="12">${sum}</text>
      <path d="M55 115 Q112 48 170 115" fill="none" stroke="#0A4F85" stroke-width="4"/><path d="M174 115 Q235 55 296 115" fill="none" stroke="#C0392B" stroke-width="4"/>
      <text x="112" y="58" text-anchor="middle" font-size="13">+${a}</text><text x="235" y="65" text-anchor="middle" font-size="13">+${b}</text>`, `Number line: ${a} + ${b}`);
  }

  function routeMap() {
    return svgScene("school map grid", `<rect x="38" y="35" width="264" height="130" fill="#EAF2F8" stroke="#2C3E50" stroke-width="2"/>
      <line x1="104" y1="35" x2="104" y2="165" stroke="#BDC3C7"/><line x1="170" y1="35" x2="170" y2="165" stroke="#BDC3C7"/><line x1="236" y1="35" x2="236" y2="165" stroke="#BDC3C7"/>
      <line x1="38" y1="78" x2="302" y2="78" stroke="#BDC3C7"/><line x1="38" y1="121" x2="302" y2="121" stroke="#BDC3C7"/>
      <rect x="55" y="48" width="34" height="24" fill="#F7DC6F" stroke="#7D6608"/><text x="72" y="64" text-anchor="middle" font-size="10">S</text>
      <circle cx="270" cy="142" r="16" fill="#58D68D" stroke="#145A32"/><text x="270" y="146" text-anchor="middle" font-size="10">P</text>
      <path d="M72 72 L72 100 L170 100 L170 142 L254 142" fill="none" stroke="#C0392B" stroke-width="5" stroke-linecap="round"/>`, "S = school, P = park");
  }

  function sequenceScene() {
    return svgScene("story sequence pictures", `<rect x="35" y="55" width="70" height="80" fill="#EAF2F8" stroke="#7F8C8D"/><text x="70" y="80" text-anchor="middle" font-size="12">1</text><circle cx="70" cy="108" r="13" fill="#8E5B2A"/>
      <rect x="135" y="55" width="70" height="80" fill="#EAF2F8" stroke="#7F8C8D"/><text x="170" y="80" text-anchor="middle" font-size="12">2</text><path d="M170 120 C145 98 150 75 170 72 C190 75 195 98 170 120" fill="#27AE60"/>
      <rect x="235" y="55" width="70" height="80" fill="#EAF2F8" stroke="#7F8C8D"/><text x="270" y="80" text-anchor="middle" font-size="12">3</text><rect x="255" y="110" width="30" height="38" fill="#8E5B2A"/><circle cx="270" cy="88" r="28" fill="#27AE60"/>`, "Seed, sprout, tree");
  }

  function plantCycle() {
    return svgScene("plant life cycle", `<circle cx="72" cy="118" r="13" fill="#8E5B2A"/><path d="M145 133 C125 105 140 82 160 88 C166 105 160 120 145 133" fill="#27AE60"/>
      <rect x="234" y="92" width="20" height="58" fill="#8E5B2A"/><circle cx="244" cy="72" r="32" fill="#27AE60"/>
      <path d="M91 112 L126 104" stroke="#2C3E50" stroke-width="3" marker-end="url(#a)"/><path d="M177 103 L216 90" stroke="#2C3E50" stroke-width="3"/>
      <defs><marker id="a" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#2C3E50"/></marker></defs>`, "Life cycle model");
  }

  function rampScene() {
    return svgScene("ramp test", `<polygon points="60,145 265,145 265,95" fill="#D5DBDB" stroke="#7F8C8D" stroke-width="2"/><circle cx="122" cy="118" r="18" fill="#E74C3C" stroke="#922B21" stroke-width="3"/>
      <path d="M105 102 L78 82" stroke="#0A4F85" stroke-width="5"/><text x="70" y="75" font-size="12">push</text><line x1="105" y1="170" x2="235" y2="170" stroke="#2C3E50"/><text x="170" y="185" text-anchor="middle" font-size="12">distance rolled</text>`, "A ball is pushed down a ramp");
  }

  function timeline() {
    return svgScene("timeline", `<line x1="50" y1="105" x2="295" y2="105" stroke="#2C3E50" stroke-width="4"/>
      <circle cx="75" cy="105" r="10" fill="#F7DC6F" stroke="#7D6608"/><text x="75" y="75" text-anchor="middle" font-size="12">Plant</text>
      <circle cx="170" cy="105" r="10" fill="#F7DC6F" stroke="#7D6608"/><text x="170" y="75" text-anchor="middle" font-size="12">Grow</text>
      <circle cx="265" cy="105" r="10" fill="#F7DC6F" stroke="#7D6608"/><text x="265" y="75" text-anchor="middle" font-size="12">Harvest</text>`, "Events in order");
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
      id: `${subject}-g${grade}-picture-closeup-${band.toLowerCase()}-${String(seed + 1).padStart(2, "0")}`,
      grade,
      subject,
      domain: item.domain,
      skillId: item.skillId,
      difficulty: band,
      ritDifficulty: rit,
      cognitiveLevel: band === "Advanced" ? `${item.cognitiveLevel} · Picture Ceiling` : item.cognitiveLevel,
      stimulus: item.stimulus,
      question: band === "Advanced" ? `${item.question} Use the picture evidence before choosing.` : item.question,
      options: c.options,
      answer: c.answer,
      explanation: item.explanation,
      itemPurpose: item.itemPurpose,
      misconception: item.misconception,
      media: { type: "html", html: item.picture, alt: item.alt, caption: item.caption },
      killer: band === "Advanced",
      calculator: false,
      stimulusType: item.stimulusType || "picture-supported stimulus",
      evidenceDemand: band === "Advanced" ? `${item.evidenceDemand}; visual transfer ceiling` : item.evidenceDemand,
      distractorRationale: item.distractorRationale || "Distractors target surface picture reading, one-step guessing, wrong visual feature, or unsupported inference.",
      scienceDimensions: item.scienceDimensions,
      mapAlignment: "MAP Growth-style Grade 2-3 original four-choice adaptive item with visual/data-supported reasoning and plausible misconception distractors.",
      schoolTransferTarget: targets[subject],
      adaptiveWeight: band === "Advanced" ? 4 : band === "High" ? 3 : band === "Medium" ? 2 : 1,
      status: "approved"
    });
  }

  function templates(grade, subject, i) {
    const g3 = grade === 3;
    const n = i % 6;
    if (subject === "math") {
      const tens = g3 ? 5 + (n % 3) : 3 + (n % 4);
      const ones = g3 ? 6 + (n % 4) : 4 + (n % 5);
      const a = g3 ? 24 + n : 12 + n;
      const b = g3 ? 18 + n : 9 + n;
      const rows = g3 ? 3 + (n % 3) : 2 + (n % 3);
      const cols = g3 ? 4 + (n % 3) : 3 + (n % 3);
      const parts = g3 ? 6 : 4;
      const shaded = g3 ? 2 + (n % 3) : 1 + (n % 2);
      return [
        { domain: "Number Sense & Place Value", skillId: "number-sense", cognitiveLevel: "Place Value Model", stimulus: "Look at the base-ten blocks. Use tens and ones to name the number.", picture: baseTen(tens, ones), alt: "Base-ten blocks showing tens rods and ones cubes.", caption: "Picture Type: base-ten place value", question: "Which number is shown?", correct: `${tens * 10 + ones}`, distractors: [`${ones * 10 + tens}`, `${tens + ones}`, `${tens * 10}`], explanation: `${tens} tens and ${ones} ones make ${tens * 10 + ones}.`, itemPurpose: "Use a visual place-value model.", misconception: "Student reverses tens and ones or counts blocks as single objects.", evidenceDemand: "model-to-number translation" },
        { domain: "Operations & Algebraic Thinking", skillId: "operations", cognitiveLevel: "Number Line Addition", stimulus: "The number line shows two jumps.", picture: numberLine(a, b, a + b), alt: "A number line with two addition jumps.", caption: "Picture Type: addition number line", question: "What total does the number line show?", correct: `${a + b}`, distractors: [`${a - b}`, `${a}`, `${a + b + 10}`], explanation: `The two jumps show ${a} + ${b} = ${a + b}.`, itemPurpose: "Represent addition with a number line.", misconception: "Student reads only one jump or subtracts the jumps.", evidenceDemand: "visual operation reasoning" },
        { domain: "Operations & Algebraic Thinking", skillId: "operations", cognitiveLevel: g3 ? "Multiplication Array" : "Equal Groups", stimulus: "The picture shows equal groups in rows and columns.", picture: arrayModel(rows, cols), alt: "An array of equal rows and columns.", caption: "Picture Type: equal groups array", question: g3 ? "How many objects are in the array?" : "Which addition sentence matches the picture?", correct: g3 ? `${rows * cols}` : Array(rows).fill(cols).join(" + "), distractors: g3 ? [`${rows + cols}`, `${rows * cols + rows}`, `${cols}`] : [`${rows} + ${cols}`, `${rows * cols}`, Array(cols).fill(rows).join(" + ")], explanation: g3 ? `${rows} rows of ${cols} make ${rows * cols}.` : `There are ${rows} equal rows with ${cols} objects in each row.`, itemPurpose: "Use an array to reason about equal groups.", misconception: "Student adds dimensions instead of counting equal groups.", evidenceDemand: "array interpretation" },
        { domain: "Fractions & Measurement", skillId: "fractions-decimals", cognitiveLevel: "Visual Fraction", stimulus: "A strip is divided into equal parts.", picture: fractionModel(parts, shaded), alt: "A fraction strip with some equal parts shaded.", caption: "Picture Type: fraction model", question: "Which fraction names the shaded part?", correct: `${shaded}/${parts}`, distractors: [`${parts}/${shaded}`, `${shaded}/${parts + 1}`, `${shaded + 1}/${parts}`], explanation: `${shaded} of ${parts} equal parts are shaded.`, itemPurpose: "Read a fraction from a visual model.", misconception: "Student reverses numerator and denominator or counts unshaded parts.", evidenceDemand: "fraction model evidence" }
      ];
    }
    if (subject === "reading") return [
      { domain: "Literary Text", skillId: "main-idea-summary", cognitiveLevel: "Illustration Main Idea", stimulus: "Look at the picture and the sentence: The class worked together to make the garden better.", picture: svgScene("class garden", `<rect x="0" y="135" width="340" height="75" fill="#D5F5E3"/><circle cx="85" cy="83" r="18" fill="#FAD7A0"/><rect x="68" y="104" width="34" height="42" fill="#5DADE2"/><circle cx="170" cy="83" r="18" fill="#FAD7A0"/><rect x="153" y="104" width="34" height="42" fill="#F1948A"/><circle cx="255" cy="83" r="18" fill="#FAD7A0"/><rect x="238" y="104" width="34" height="42" fill="#58D68D"/><rect x="120" y="142" width="100" height="20" fill="#8E5B2A"/>`, "Students work in a garden"), alt: "Students working together in a garden.", caption: "Picture Type: main idea from illustration", question: "What is the best main idea?", correct: "The students are helping with a garden.", distractors: ["The students are sleeping.", "The students are buying toys.", "The students are at the beach."], explanation: "The picture and sentence both show students working on a garden.", itemPurpose: "Connect an illustration and sentence to identify main idea.", misconception: "Student chooses an unrelated scene word.", evidenceDemand: "picture-text main idea" },
      { domain: "Literary Text", skillId: "inference", cognitiveLevel: "Character Feeling Inference", stimulus: "Look at Ava's face after the tower falls.", picture: svgScene("fallen block tower", `<rect x="210" y="130" width="38" height="20" fill="#F7DC6F" stroke="#7D6608"/><rect x="172" y="150" width="38" height="20" fill="#58D68D" stroke="#145A32"/><rect x="250" y="152" width="38" height="20" fill="#5DADE2" stroke="#1B4F72"/><circle cx="95" cy="78" r="25" fill="#FAD7A0"/><circle cx="86" cy="73" r="3"/><circle cx="104" cy="73" r="3"/><path d="M82 96 q13 -10 26 0" stroke="#2C3E50" stroke-width="3" fill="none"/>`, "A tower fell down"), alt: "A child looking at fallen blocks with a sad face.", caption: "Picture Type: feeling inference", question: "How does Ava probably feel?", correct: "disappointed", distractors: ["proud", "sleepy", "hungry"], explanation: "Her face and the fallen tower suggest disappointment.", itemPurpose: "Infer feeling using visual evidence.", misconception: "Student names a feeling without evidence.", evidenceDemand: "visual inference" },
      { domain: "Vocabulary in Context", skillId: "vocabulary-context", cognitiveLevel: "Picture Vocabulary", stimulus: "Sentence: The trail was narrow, so only one child could walk on it at a time.", picture: svgScene("narrow trail", `<rect x="0" y="140" width="340" height="70" fill="#ABEBC6"/><path d="M155 140 C145 105 178 82 166 38" stroke="#A04000" stroke-width="18" fill="none"/><circle cx="82" cy="68" r="26" fill="#27AE60"/><circle cx="252" cy="78" r="32" fill="#27AE60"/>`, "One narrow trail"), alt: "A narrow trail through grass.", caption: "Picture Type: vocabulary in context", question: "What does narrow mean?", correct: "not wide", distractors: ["very loud", "full of water", "easy to carry"], explanation: "The picture shows a path with little width.", itemPurpose: "Use picture and sentence context to define a word.", misconception: "Student guesses from a familiar but unrelated word.", evidenceDemand: "context plus visual clue" },
      { domain: "Text Evidence", skillId: "text-evidence", cognitiveLevel: "Sequence Evidence", stimulus: "The pictures show how something changes over time.", picture: sequenceScene(), alt: "A sequence showing seed, sprout, and tree.", caption: "Picture Type: sequence evidence", question: "What happens after the seed starts to grow?", correct: "A sprout appears.", distractors: ["The tree becomes a seed first.", "The plant turns into a rock.", "The seed goes into a book."], explanation: "The second picture in the sequence is the sprout.", itemPurpose: "Use visual sequence evidence.", misconception: "Student ignores order and selects any picture detail.", evidenceDemand: "sequence reasoning" }
    ];
    if (subject === "language") return [
      { domain: "Sentence Structure", skillId: "sentence-structure", cognitiveLevel: "Sentence Match", stimulus: "Choose the sentence that matches the picture.", picture: svgScene("girl reading under tree", `<rect x="0" y="145" width="340" height="65" fill="#D5F5E3"/><rect x="70" y="68" width="24" height="86" fill="#8E5B2A"/><circle cx="82" cy="54" r="42" fill="#27AE60"/><circle cx="220" cy="92" r="19" fill="#FAD7A0"/><rect x="202" y="112" width="38" height="36" fill="#F1948A"/><rect x="245" y="118" width="52" height="30" fill="#F7DC6F" stroke="#7D6608"/>`, "Reading under a tree"), alt: "A girl reading a book under a tree.", caption: "Picture Type: sentence-picture match", question: "Which is a complete sentence?", correct: "The girl reads under the tree.", distractors: ["Under the tree.", "The girl under.", "Reads book tree."], explanation: "The sentence has a subject, action, and complete idea.", itemPurpose: "Identify a complete sentence that matches a picture.", misconception: "Student accepts a fragment or word group.", evidenceDemand: "sentence completeness plus picture match" },
      { domain: "Mechanics", skillId: "mechanics", cognitiveLevel: "Dialogue Punctuation", stimulus: "The picture shows a child asking about a missing backpack.", picture: svgScene("question scene", `<circle cx="120" cy="82" r="25" fill="#FAD7A0"/><rect x="96" y="108" width="48" height="45" fill="#5DADE2"/><text x="220" y="100" font-size="60" fill="#0A4F85">?</text><rect x="230" y="132" width="48" height="35" fill="#E74C3C" stroke="#922B21"/>`, "Where is my backpack"), alt: "A child asking a question near a backpack.", caption: "Picture Type: punctuation clue", question: "Which ending mark belongs after 'Where is my backpack'", correct: "?", distractors: [".", ",", "!"], explanation: "Where asks a question, so it needs a question mark.", itemPurpose: "Choose punctuation based on sentence purpose.", misconception: "Student uses a period for all sentences.", evidenceDemand: "visual and sentence-purpose clue" },
      { domain: "Language Grammar", skillId: "grammar-usage", cognitiveLevel: "Verb Agreement", stimulus: "The picture shows two children jumping rope.", picture: svgScene("two children jump rope", `<circle cx="110" cy="82" r="18" fill="#FAD7A0"/><circle cx="230" cy="82" r="18" fill="#FAD7A0"/><rect x="96" y="104" width="28" height="42" fill="#58D68D"/><rect x="216" y="104" width="28" height="42" fill="#F1948A"/><path d="M90 125 Q170 180 250 125" stroke="#7D3C98" stroke-width="4" fill="none"/>`, "Two children jump"), alt: "Two children jumping rope.", caption: "Picture Type: grammar from image", question: "Which sentence is correct?", correct: "The children jump rope.", distractors: ["The children jumps rope.", "The child jump rope.", "The jumping children rope."], explanation: "Children is plural, so the verb is jump.", itemPurpose: "Apply subject-verb agreement with visual support.", misconception: "Student chooses a singular verb for a plural subject.", evidenceDemand: "grammar in picture context" },
      { domain: "Writing Style", skillId: "revision", cognitiveLevel: "Precise Describing Word", stimulus: "Use the picture to improve the sentence: The soup is good.", picture: svgScene("steaming soup", `<ellipse cx="170" cy="128" rx="72" ry="28" fill="#E74C3C" stroke="#922B21" stroke-width="3"/><rect x="100" y="90" width="140" height="42" fill="#F1948A" stroke="#922B21" stroke-width="3"/><path d="M140 72 q-16 -22 0 -44" stroke="#95A5A6" stroke-width="5" fill="none"/><path d="M180 72 q-16 -22 0 -44" stroke="#95A5A6" stroke-width="5" fill="none"/>`, "Hot soup"), alt: "A bowl of steaming soup.", caption: "Picture Type: precise adjective", question: "Which word makes the sentence more precise?", correct: "steaming", distractors: ["round", "silent", "plastic"], explanation: "Steam rising from the soup supports the word steaming.", itemPurpose: "Choose precise word choice from visual evidence.", misconception: "Student chooses a vague or unsupported adjective.", evidenceDemand: "revision from picture evidence" }
    ];
    if (subject === "science") {
      const sunny = 8 + n + grade;
      const shade = 3 + n;
      return [
        { domain: "Life Science", skillId: "life-science", cognitiveLevel: "Life Cycle Model", stimulus: "Look at the model of how a plant changes.", picture: plantCycle(), alt: "A plant life cycle model showing seed, sprout, and plant.", caption: "Picture Type: life cycle model", question: "Which stage comes after the seed?", correct: "sprout", distractors: ["rock", "adult animal", "rain cloud"], explanation: "The model shows a sprout after the seed.", itemPurpose: "Interpret a simple life cycle model.", misconception: "Student chooses an unrelated object or skips a stage.", evidenceDemand: "model sequence evidence", scienceDimensions: "DCI life cycles + SEP models + CCC patterns" },
        { domain: "Physical Science", skillId: "physical-science", cognitiveLevel: "Force and Motion", stimulus: "A student pushes a ball down a ramp.", picture: rampScene(), alt: "A ball on a ramp with a push arrow.", caption: "Picture Type: force model", question: "What should the student measure to compare how far balls roll?", correct: "distance rolled", distractors: ["color of the ball", "name of the student", "day of the week"], explanation: "Distance rolled is the measurement that answers the question.", itemPurpose: "Connect an investigation question to a useful measurement.", misconception: "Student picks an irrelevant observable feature.", evidenceDemand: "investigation measurement choice", scienceDimensions: "DCI motion + SEP planning investigations + CCC cause/effect" },
        { domain: "Earth and Space Science", skillId: "experimental-design", cognitiveLevel: "Weather Data", stimulus: "Students counted rainy days and sunny days.", picture: barGraph([sunny, shade, 4 + n], ["sun", "cloud", "rain"], "Weather days this month"), alt: "A bar graph showing weather counts.", caption: "Picture Type: weather data graph", question: "Which weather type happened most often?", correct: "sun", distractors: ["cloud", "rain", "all were equal"], explanation: "The sun bar is the tallest in the graph.", itemPurpose: "Read a weather data display.", misconception: "Student reads labels without comparing heights.", evidenceDemand: "data comparison", scienceDimensions: "DCI weather + SEP data analysis + CCC patterns" },
        { domain: "Life Science", skillId: "claim-evidence-reasoning", cognitiveLevel: "CER From Table", stimulus: "Two bean plants were grown for one week.", picture: tableSvg(["sunny", "shade"], [`${sunny} cm`, `${shade} cm`], "Plant height after one week"), alt: "A table comparing plant height in sunny and shaded places.", caption: "Picture Type: CER data table", question: "Which claim is best supported by the data?", correct: "The plant in the sunny place grew taller.", distractors: ["The shaded plant grew taller.", "Both plants grew the same height.", "Plants do not need light."], explanation: "The sunny plant has the greater height in the table.", itemPurpose: "Use data as evidence for a claim.", misconception: "Student overgeneralizes or ignores the larger value.", evidenceDemand: "claim from data", scienceDimensions: "DCI plant needs + SEP evidence + CCC cause/effect" }
      ];
    }
    return [
      { domain: "Geography", skillId: "source-analysis", cognitiveLevel: "Map Route", stimulus: "Look at the map. S means school and P means park.", picture: routeMap(), alt: "A simple grid map with a route from school to park.", caption: "Picture Type: map route", question: "Where does the route end?", correct: "park", distractors: ["school", "river", "library"], explanation: "The route ends at the circle marked P for park.", itemPurpose: "Interpret a simple map and route.", misconception: "Student reads the starting point as the ending point.", evidenceDemand: "map-symbol evidence" },
      { domain: "History", skillId: "source-analysis", cognitiveLevel: "Timeline Order", stimulus: "The timeline shows three events in order.", picture: timeline(), alt: "A timeline with plant, grow, and harvest.", caption: "Picture Type: timeline sequence", question: "Which event happens last?", correct: "Harvest", distractors: ["Plant", "Grow", "Start"], explanation: "On a timeline, the event farthest to the right happens last.", itemPurpose: "Use a timeline to determine order.", misconception: "Student chooses the first event or ignores left-to-right order.", evidenceDemand: "timeline evidence" },
      { domain: "Economics", skillId: "economics", cognitiveLevel: "Goods and Services", stimulus: "Look at the two examples.", picture: svgScene("goods and services", `<rect x="52" y="65" width="82" height="70" fill="#EAF2F8" stroke="#7F8C8D"/><circle cx="93" cy="96" r="24" fill="#E74C3C" stroke="#922B21"/><text x="93" y="155" text-anchor="middle" font-size="12">apple</text><rect x="205" y="65" width="82" height="70" fill="#EAF2F8" stroke="#7F8C8D"/><path d="M222 120 L270 72" stroke="#0A4F85" stroke-width="7"/><text x="246" y="155" text-anchor="middle" font-size="12">haircut</text>`, "Good and service examples"), alt: "An apple and a haircut example.", caption: "Picture Type: goods and services", question: "Which example is a service?", correct: "haircut", distractors: ["apple", "toy", "sandwich"], explanation: "A service is work someone does for others.", itemPurpose: "Distinguish goods from services using pictures.", misconception: "Student chooses the object instead of the action/work.", evidenceDemand: "concept classification" },
      { domain: "Civics", skillId: "source-analysis", cognitiveLevel: "Community Rule", stimulus: "The sign shows a classroom rule.", picture: svgScene("classroom rule sign", `<rect x="65" y="45" width="210" height="105" rx="8" fill="#FDFEFE" stroke="#2C3E50" stroke-width="3"/><text x="170" y="85" text-anchor="middle" font-size="18" font-weight="700">Take Turns</text><circle cx="130" cy="120" r="18" fill="#FAD7A0"/><circle cx="210" cy="120" r="18" fill="#FAD7A0"/><path d="M150 120 H190" stroke="#27AE60" stroke-width="5"/>`, "Classroom rule: take turns"), alt: "A classroom sign that says Take Turns.", caption: "Picture Type: civic rule", question: "Why is this rule helpful?", correct: "It helps people share fairly.", distractors: ["It stops all learning.", "It means only one person can ever play.", "It is about weather."], explanation: "Taking turns helps a group use shared materials fairly.", itemPurpose: "Explain the purpose of a community rule.", misconception: "Student treats rules as random commands, not shared agreements.", evidenceDemand: "rule-purpose reasoning" }
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
