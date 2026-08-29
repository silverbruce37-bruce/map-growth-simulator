(function replaceGrade4To6CloseUpBanks() {
  const targetGrades = [4, 5, 6];
  window.productionQuestionBank = window.productionQuestionBank.filter(q => !targetGrades.includes(q.grade));

  const ritBase = {
    4: { Low: 198, Medium: 210, High: 224, Advanced: 236 },
    5: { Low: 206, Medium: 218, High: 232, Advanced: 244 },
    6: { Low: 214, Medium: 226, High: 240, Advanced: 252 }
  };
  const bands = [["Low", 12], ["Medium", 15], ["High", 10], ["Advanced", 3]];
  const targets = {
    math: "upper-elementary math transfer: fraction models, multi-step operations, tables, geometry, data, and early algebra",
    reading: "upper-elementary reading transfer: main idea, inference, author's purpose, evidence, and paired text reasoning",
    language: "upper-elementary writing transfer: sentence clarity, grammar in context, paragraph organization, evidence, and revision",
    science: "upper-elementary science transfer: data, models, fair tests, CER, systems, and Earth/life/physical science",
    social: "upper-elementary social studies transfer: map skills, sources, civics, economics, geography, and historical perspective"
  };

  function table(data) {
    return `<table style="border-collapse:collapse;background:#fff;"><tbody>${data.map(r => `<tr>${r.map(c => `<td style="border:1px solid #bdc3c7;padding:4px 8px;text-align:center;">${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  }
  function fractionBar(parts, shaded) {
    const w = 220 / parts;
    let cells = "";
    for (let i = 0; i < parts; i++) cells += `<rect x="${10 + i * w}" y="28" width="${w}" height="44" fill="${i < shaded ? "#3498DB" : "#FFFFFF"}" stroke="#2C3E50"/>`;
    return `<svg viewBox="0 0 240 100" width="240" height="100" role="img" aria-label="fraction model" style="border:1px solid #bdc3c7;background:#fff;">${cells}<text x="120" y="90" font-size="11" text-anchor="middle">${shaded} of ${parts} equal parts shaded</text></svg>`;
  }
  function graph(path, label) {
    return `<svg viewBox="0 0 220 135" width="220" height="135" role="img" aria-label="${label}" style="border:1px solid #bdc3c7;background:#fff;"><line x1="24" y1="105" x2="200" y2="105" stroke="#7f8c8d"/><line x1="38" y1="120" x2="38" y2="18" stroke="#7f8c8d"/><path d="${path}" fill="none" stroke="#0A4F85" stroke-width="3"/><text x="202" y="122" font-size="10">x</text><text x="10" y="24" font-size="10">y</text></svg>`;
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
      id: `${subject}-g${grade}-closeup-${band.toLowerCase()}-${String(seed + 1).padStart(2, "0")}`,
      grade,
      subject,
      domain: item.domain,
      skillId: item.skillId,
      difficulty: band,
      ritDifficulty: rit,
      cognitiveLevel: band === "Advanced" ? `${item.cognitiveLevel} · Ceiling` : item.cognitiveLevel,
      stimulus: item.stimulus,
      question: band === "Advanced" ? `${item.question} Choose the answer that best fits the evidence.` : item.question,
      options: c.options,
      answer: c.answer,
      explanation: item.explanation,
      itemPurpose: item.itemPurpose,
      misconception: item.misconception,
      killer: band === "Advanced",
      calculator: false,
      stimulusType: item.stimulusType,
      evidenceDemand: band === "Advanced" ? `${item.evidenceDemand}; upper-elementary ceiling transfer` : item.evidenceDemand,
      distractorRationale: item.distractorRationale || "Distractors target surface reading, one-step shortcuts, wrong model choice, overclaiming, or unsupported inference.",
      scienceDimensions: item.scienceDimensions,
      mapAlignment: "MAP Growth-style: original four-choice adaptive practice item using public skill frames, visual/data-supported reasoning, and plausible misconception distractors.",
      schoolTransferTarget: targets[subject],
      adaptiveWeight: band === "Advanced" ? 4 : band === "High" ? 3 : band === "Medium" ? 2 : 1,
      status: "approved"
    });
  }

  function templates(grade, subject, i) {
    const g = grade;
    if (subject === "math") return [
      { domain: "Fractions & Decimals", skillId: "fractions-decimals", cognitiveLevel: "Visual Fraction Reasoning", stimulus: `<p>A recipe model shows how much of a cup has been used.</p>${fractionBar(8 + (g % 2) * 2, 3 + (i % 3))}`, question: "Which fraction matches the shaded part?", correct: `${3 + (i % 3)}/${8 + (g % 2) * 2}`, distractors: [`${8 + (g % 2) * 2}/${3 + (i % 3)}`, `${3 + (i % 3)}/${11 + (g % 2) * 2}`, `${4 + (i % 3)}/${8 + (g % 2) * 2}`], explanation: "The numerator counts shaded equal parts and the denominator counts all equal parts.", itemPurpose: "Read a fraction from a visual model.", misconception: "Student reverses numerator and denominator or counts extra parts.", stimulusType: "visual fraction model", evidenceDemand: "model-to-fraction translation" },
      { domain: "Operations & Algebraic Thinking", skillId: "operations", cognitiveLevel: "Multi-Step Table Reasoning", stimulus: `<p>A class sells notebooks for a fundraiser.</p>${table([["boxes", "2", "4", "6"], ["notebooks", 24 + g, 48 + 2 * g, 72 + 3 * g]])}<p>Each box has the same number of notebooks.</p>`, question: "How many notebooks are in one box?", correct: `${12 + Math.floor(g / 2)}`, distractors: [`${24 + g}`, `${7 + g}`, `${14 + g}`], explanation: "Divide the total notebooks by the number of boxes using a matching row.", itemPurpose: "Use a table to identify a unit rate.", misconception: "Student uses the total instead of the unit amount.", stimulusType: "table", evidenceDemand: "unit-rate reasoning" },
      { domain: "Measurement & Data", skillId: "measurement", cognitiveLevel: "Data Display Interpretation", stimulus: `<p>Students recorded minutes read after school.</p>${table([["Student", "Ana", "Ben", "Cara", "Dev"], ["Minutes", 25 + g, 30 + g, 20 + g, 35 + g]])}`, question: "What is the range of the reading times?", correct: "15", distractors: ["10", `${110 + 4 * g}`, `${27 + g}`], explanation: "Range is greatest value minus least value.", itemPurpose: "Interpret a data table using range.", misconception: "Student adds values or chooses a typical value.", stimulusType: "data table", evidenceDemand: "data measure computation" },
      { domain: "Geometry", skillId: "geometry", cognitiveLevel: "Area Model", stimulus: `<p>A garden is shaped like a rectangle with length ${8 + g} m and width ${3 + (i % 4)} m.</p><svg viewBox="0 0 220 115" width="220" height="115" style="border:1px solid #bdc3c7;background:#fff;"><rect x="35" y="25" width="150" height="60" fill="#EAF2F8" stroke="#0A4F85" stroke-width="3"/><text x="100" y="105" font-size="11">${8 + g} m</text><text x="188" y="60" font-size="11">${3 + (i % 4)} m</text></svg>`, question: "What is the area of the garden?", correct: `${(8 + g) * (3 + (i % 4))} square meters`, distractors: [`${2 * ((8 + g) + (3 + (i % 4)))} square meters`, `${8 + g + 3 + (i % 4)} square meters`, `${8 + g} square meters`], explanation: "Area of a rectangle is length times width.", itemPurpose: "Choose the correct measurement operation from a diagram.", misconception: "Student confuses area and perimeter.", stimulusType: "geometry diagram", evidenceDemand: "diagram-to-operation transfer" }
    ];
    if (subject === "reading") return [
      { domain: "Informational Text", skillId: "main-idea-summary", cognitiveLevel: "Main Idea With Evidence", stimulus: `<p><strong>Passage:</strong> School gardens can help students learn science. Students observe plant growth, measure soil moisture, and compare how sunlight affects leaves. Some classes also use garden data in math lessons.</p>`, question: "Which sentence best states the main idea?", correct: "School gardens can support learning in several subjects.", distractors: ["Gardens are only useful for recess.", "Soil moisture is never measured.", "Sunlight makes math unnecessary."], explanation: "The passage gives several examples of learning through gardens.", itemPurpose: "Identify a main idea supported by details.", misconception: "Student chooses one detail instead of the central idea.", stimulusType: "informational passage", evidenceDemand: "main idea from details" },
      { domain: "Literary Text", skillId: "inference", cognitiveLevel: "Character Inference", stimulus: `<p><strong>Passage:</strong> Jonah erased the last line of his poem for the fourth time. When his teacher walked by, he covered the page but smiled when she said the first stanza had a strong image.</p>`, question: "What can the reader infer about Jonah?", correct: "He is unsure about his writing but wants it to be good.", distractors: ["He dislikes poetry completely.", "He has finished the poem with no concerns.", "He wants his teacher to throw away the poem."], explanation: "His repeated erasing shows uncertainty, while his smile shows he cares.", itemPurpose: "Infer character feelings from actions.", misconception: "Student reads one detail without combining evidence.", stimulusType: "literary passage", evidenceDemand: "inference from actions" },
      { domain: "Informational Text", skillId: "text-evidence", cognitiveLevel: "Evidence Selection", stimulus: `<p>A passage claims that walking or biking to school can reduce traffic near the building. It explains that fewer car drop-offs mean shorter lines and cleaner air at arrival time.</p>`, question: "Which detail best supports the claim?", correct: "Fewer car drop-offs mean shorter lines near the school.", distractors: ["Students arrive in the morning.", "Schools have buildings.", "Some students like bicycles."], explanation: "The detail directly connects transportation choice to traffic.", itemPurpose: "Select relevant textual evidence.", misconception: "Student chooses a true but weak detail.", stimulusType: "claim passage", evidenceDemand: "evidence relevance" },
      { domain: "Paired Passage Reasoning", skillId: "paired-passage-set", cognitiveLevel: "Paired Text Comparison", stimulus: `<p><strong>Source A:</strong> A student says homework helps practice new skills.</p><p><strong>Source B:</strong> Another student says too much homework leaves little time for sleep.</p>`, question: "How do the sources differ?", correct: "They focus on different effects of homework.", distractors: ["They agree homework has no effects.", "Source B is about lunch.", "Source A says sleep is never important."], explanation: "One source emphasizes practice while the other emphasizes time and rest.", itemPurpose: "Compare viewpoints in two short sources.", misconception: "Student ignores viewpoint difference.", stimulusType: "paired sources", evidenceDemand: "source comparison" }
    ];
    if (subject === "language") return [
      { domain: "Writing Development", skillId: "revision", cognitiveLevel: "Evidence Explanation", stimulus: `<p><strong>Claim:</strong> The library should stay open later.</p><p><strong>Evidence:</strong> In a survey, ${40 + g}% of students said they need a quiet place to study after school.</p>`, question: "Which sentence best explains the evidence?", correct: "The survey shows many students would use extra library time for studying.", distractors: ["The library should close earlier.", "Every student loves the library.", "The survey is about sports practice."], explanation: "The explanation connects the survey result to the claim.", itemPurpose: "Connect evidence to a claim.", misconception: "Student overstates or disconnects evidence.", stimulusType: "argument draft", evidenceDemand: "evidence explanation" },
      { domain: "Language Grammar", skillId: "grammar-usage", cognitiveLevel: "Grammar in Context", stimulus: `<p><strong>Sentence:</strong> The boxes of markers is on the art table.</p>`, question: "Which correction is best?", correct: "Change is to are.", distractors: ["Change boxes to box's.", "Change markers to marker's.", "No change is needed."], explanation: "The subject boxes is plural.", itemPurpose: "Apply subject-verb agreement.", misconception: "Student agrees with the nearer noun markers or misses the subject.", stimulusType: "editing sentence", evidenceDemand: "grammar-in-context" },
      { domain: "Writing Organization", skillId: "paragraph-organization", cognitiveLevel: "Paragraph Order", stimulus: `<p>A paragraph explains how to prepare a science display. Sentence 1 names the topic. Sentence 2 gives the final result. Sentence 3 explains the first step.</p>`, question: "What revision would improve organization?", correct: "Place the first step before the final result.", distractors: ["Remove the topic sentence.", "Put all sentences in random order.", "Add an unrelated joke."], explanation: "Process writing should follow a logical order.", itemPurpose: "Improve paragraph organization.", misconception: "Student ignores sequence.", stimulusType: "paragraph plan", evidenceDemand: "organization revision" },
      { domain: "Writing Style", skillId: "sentence-structure", cognitiveLevel: "Sentence Clarity", stimulus: `<p><strong>Draft:</strong> The experiment was good and stuff happened with the plants.</p>`, question: "Which revision is clearest?", correct: "The experiment showed that plants with more sunlight grew taller.", distractors: ["The experiment was good stuff.", "Plants did things.", "The experiment happened because plants."], explanation: "The revision names the result clearly and precisely.", itemPurpose: "Improve clarity and specificity.", misconception: "Student keeps vague wording.", stimulusType: "style revision", evidenceDemand: "clear academic expression" }
    ];
    if (subject === "science") return [
      { domain: "Life Science", skillId: "claim-evidence-reasoning", cognitiveLevel: "CER From Data", stimulus: `<p>Students grow bean plants in two places.</p>${table([["Location", "Average height"], ["Sunny window", `${12 + g} cm`], ["Dark shelf", `${4 + g} cm`]])}`, question: "Which claim is best supported?", correct: "The plants near the sunny window grew taller in this test.", distractors: ["Light has no effect on plants.", "The dark shelf plants grew taller.", "All plants always grow the same height."], explanation: "The sunny-window group had the greater average height.", itemPurpose: "Use data to support a science claim.", misconception: "Student ignores the comparison or overgeneralizes.", stimulusType: "data table", evidenceDemand: "CER from data", scienceDimensions: "DCI plant growth + SEP data analysis + CCC cause/effect" },
      { domain: "Physical Science", skillId: "physical-science", cognitiveLevel: "Model Relationship", stimulus: `<p>A student pushes two carts with the same force.</p>${table([["Cart", "Mass", "Motion"], ["A", "light", "speeds up more"], ["B", "heavy", "speeds up less"]])}`, question: "Which explanation fits the data?", correct: "With the same push, the heavier cart changes speed less.", distractors: ["Mass never affects motion.", "The heavy cart had no force.", "The light cart was pulled by gravity only."], explanation: "Greater mass can make acceleration smaller for the same force.", itemPurpose: "Explain a physical relationship from data.", misconception: "Student ignores controlled force.", stimulusType: "data table", evidenceDemand: "model explanation", scienceDimensions: "DCI forces + SEP analyzing data + CCC scale/proportion" },
      { domain: "Earth and Space Science", skillId: "experimental-design", cognitiveLevel: "Fair Test", stimulus: `<p>A student tests which soil holds more water. She uses different soil types, different cup sizes, and different water amounts.</p>`, question: "What should be improved?", correct: "Use the same cup size and same water amount for each soil.", distractors: ["Change every variable at once.", "Do not measure water.", "Use no soil."], explanation: "A fair test changes only the soil type.", itemPurpose: "Identify controlled variables in an investigation.", misconception: "Student misses that several variables changed.", stimulusType: "experiment scenario", evidenceDemand: "fair-test critique", scienceDimensions: "DCI Earth materials + SEP planning investigations + CCC cause/effect" },
      { domain: "Earth and Space Science", skillId: "model-limitations", cognitiveLevel: "Model Limitation", stimulus: `<p>A weather model uses temperature and wind but does not include nearby ocean temperature.</p>`, question: "Why might the forecast be limited?", correct: "Ocean temperature can affect weather near the coast.", distractors: ["Models cannot use data.", "Wind is unrelated to weather.", "Temperature should always be ignored."], explanation: "Missing a relevant variable can weaken a model.", itemPurpose: "Identify a model limitation.", misconception: "Student treats a model as complete.", stimulusType: "model scenario", evidenceDemand: "model limitation", scienceDimensions: "DCI weather + SEP evaluating models + CCC systems" }
    ];
    return [
      { domain: "Geography", skillId: "source-analysis", cognitiveLevel: "Map Pattern", stimulus: `<p>A map shows towns clustered near a river. Farther from the river, there are fewer towns.</p>`, question: "Which inference is best?", correct: "Water access may have influenced where towns developed.", distractors: ["People always avoid rivers.", "Maps cannot show patterns.", "Rivers remove all resources."], explanation: "The pattern suggests a relationship between water and settlement.", itemPurpose: "Interpret a geographic pattern.", misconception: "Student lists a detail without making an inference.", stimulusType: "map description", evidenceDemand: "spatial inference" },
      { domain: "History", skillId: "source-analysis", cognitiveLevel: "Source Perspective", stimulus: `<p><strong>Source A:</strong> A mayor says a new road helped the town.</p><p><strong>Source B:</strong> A shop owner says construction hurt business for months.</p>`, question: "Why compare both sources?", correct: "They show different perspectives on the same event.", distractors: ["The mayor is always wrong.", "The shop owner cannot be evidence.", "Both sources must say the same thing."], explanation: "Different roles can shape how people describe an event.", itemPurpose: "Compare source perspectives.", misconception: "Student accepts one viewpoint as complete.", stimulusType: "paired sources", evidenceDemand: "source comparison" },
      { domain: "Economics", skillId: "economics", cognitiveLevel: "Opportunity Cost", stimulus: `<p>A student has one hour. She can practice piano or attend soccer practice, but not both.</p>`, question: "What is the opportunity cost of choosing piano?", correct: "the soccer practice she gives up", distractors: ["the piano practice she does", "both activities together", "nothing because time is free"], explanation: "Opportunity cost is the next best choice given up.", itemPurpose: "Apply opportunity cost.", misconception: "Student identifies the chosen option instead of the forgone option.", stimulusType: "economics scenario", evidenceDemand: "tradeoff reasoning" },
      { domain: "Civics", skillId: "source-analysis", cognitiveLevel: "Civic Participation", stimulus: `<p>A city council invites residents to speak before voting on a park rule.</p>`, question: "Which civic idea is shown?", correct: "public participation in local government", distractors: ["ending elections", "private ownership of every park", "international trade"], explanation: "Residents giving input before a vote shows participation.", itemPurpose: "Recognize civic participation.", misconception: "Student confuses civic action with unrelated concepts.", stimulusType: "civics scenario", evidenceDemand: "concept identification from context" }
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
