(function replaceGrade7To9CloseUpBanks() {
  const targetGrades = [7, 8, 9];
  window.productionQuestionBank = window.productionQuestionBank.filter(q => !targetGrades.includes(q.grade));

  const targets = {
    math: "grade-band math transfer: algebraic modeling, tables, graphs, geometry, proportional reasoning, statistics, and equation structure",
    reading: "grade-band reading transfer: close reading, rhetoric, inference, evidence, and multi-source synthesis",
    language: "grade-band writing transfer: revision, grammar in context, organization, evidence integration, and academic style",
    science: "grade-band science transfer: NGSS-style DCI+SEP+CCC reasoning through data, models, investigations, and CER",
    social: "grade-band social studies transfer: source analysis, geography patterns, civics tradeoffs, economics, and corroboration"
  };
  const ritBase = {
    7: { Low: 214, Medium: 226, High: 240, Advanced: 252 },
    8: { Low: 224, Medium: 236, High: 250, Advanced: 264 },
    9: { Low: 230, Medium: 242, High: 256, Advanced: 270 }
  };
  const bands = [["Low", 12], ["Medium", 15], ["High", 10], ["Advanced", 3]];

  function table(data) {
    return `<table style="border-collapse:collapse;background:#fff;"><tbody>${data.map(r => `<tr>${r.map(c => `<td style="border:1px solid #bdc3c7;padding:4px 8px;text-align:center;">${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  }
  function graph(path, label) {
    return `<svg viewBox="0 0 230 145" width="230" height="145" role="img" aria-label="${label}" style="border:1px solid #bdc3c7;background:#fff;"><line x1="25" y1="112" x2="210" y2="112" stroke="#7f8c8d"/><line x1="42" y1="128" x2="42" y2="18" stroke="#7f8c8d"/><path d="${path}" fill="none" stroke="#0A4F85" stroke-width="3"/><text x="211" y="129" font-size="10">x</text><text x="12" y="24" font-size="10">y</text></svg>`;
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
      calculator: subject === "math" && /model|graph|equation|geometry|proportional|linear|quadratic/i.test(item.skillId + " " + item.stimulus),
      stimulusType: item.stimulusType,
      evidenceDemand: band === "Advanced" ? `${item.evidenceDemand}; evidence-limit or transfer ceiling check` : item.evidenceDemand,
      distractorRationale: item.distractorRationale || "Distractors target overclaiming, surface reading, wrong model choice, weak evidence, or computation shortcuts.",
      scienceDimensions: item.scienceDimensions,
      mapAlignment: "MAP Growth-style: original four-choice adaptive practice item using public skill frames, stimulus-supported reasoning, plausible misconception distractors, and no secure-item copying.",
      schoolTransferTarget: targets[subject],
      adaptiveWeight: band === "Advanced" ? 4 : band === "High" ? 3 : band === "Medium" ? 2 : 1,
      status: "approved"
    });
  }

  function templates(grade, subject, i) {
    const level = grade === 7 ? "middle-school transition" : grade === 8 ? "algebra-readiness" : "early high-school";
    const g = grade;
    if (subject === "math") return [
      { domain: "Expressions and Equations", skillId: "linear-model", cognitiveLevel: "Table-to-Equation Modeling", stimulus: `<p>A ${level} robotics club buys identical sensor kits after paying a setup fee.</p>${table([["kits, x", "0", "2", "5"], ["total cost", 30 + 5 * g, 54 + 5 * g, 90 + 5 * g]])}`, question: "Which equation models the total cost C?", correct: `C= ${30 + 5 * g} + 12x`, distractors: [`C=12+${30 + 5 * g}x`, `C=${42 + 5 * g}x`, `C=${30 + 5 * g}x+2`], explanation: "The value at x=0 is the setup fee, and each kit adds 12.", itemPurpose: "Translate a table and context into a linear model.", misconception: "Student swaps slope and intercept or uses one row as a multiplier.", stimulusType: "table/model", evidenceDemand: "table-to-model reasoning" },
      { domain: "Statistics and Probability", skillId: "data-trend", cognitiveLevel: "Graph/Data Interpretation", stimulus: `<p>A class records weekly practice minutes and quiz scores.</p>${graph("M45 105 L80 92 L112 78 L148 58 L190 35", "positive data trend")}<p>The points rise left to right but are not exactly on one line.</p>`, question: "Which description best fits the association?", correct: "positive association with variability", distractors: ["negative association", "no association", "perfect positive association"], explanation: "The trend is positive, but the scatter means it is not perfect.", itemPurpose: "Classify direction and strength of a bivariate pattern.", misconception: "Student treats any trend as exact.", stimulusType: "graph", evidenceDemand: "trend and variability" },
      { domain: "Geometry", skillId: "geometry-model", cognitiveLevel: "Diagram-Based Geometry", stimulus: `<p>A park path forms a right triangle. The horizontal path is ${6 + g} m and the vertical path is ${8 + g} m.</p><svg viewBox="0 0 220 125" width="220" height="125" style="border:1px solid #bdc3c7;background:#fff;"><line x1="35" y1="95" x2="175" y2="95" stroke="#0A4F85" stroke-width="3"/><line x1="175" y1="95" x2="175" y2="25" stroke="#0A4F85" stroke-width="3"/><line x1="35" y1="95" x2="175" y2="25" stroke="#D35400" stroke-width="3"/><text x="88" y="112" font-size="11">${6 + g} m</text><text x="182" y="63" font-size="11">${8 + g} m</text></svg>`, question: "Which expression gives the diagonal path length?", correct: `sqrt(${(6 + g) ** 2 + (8 + g) ** 2})`, distractors: [`${14 + 2 * g}`, `sqrt(${14 + 2 * g})`, `${Math.abs((8 + g) - (6 + g))}`], explanation: "The diagonal is found with the Pythagorean relationship.", itemPurpose: "Use a diagram to choose a geometric model.", misconception: "Student adds or subtracts side lengths instead of using squares.", stimulusType: "geometry diagram", evidenceDemand: "diagram-to-expression transfer" },
      { domain: "Functions", skillId: "proportional-vs-linear", cognitiveLevel: "Model Comparison", stimulus: `<p>Two plans are shown for a study app.</p>${table([["Plan", "Rule"], ["A", "y=8x"], ["B", "y=20+5x"]])}`, question: "Which statement is correct?", correct: "Plan A is proportional; Plan B has a starting fee.", distractors: ["Both plans are proportional.", "Plan B is proportional because it has x.", "Plan A has a starting fee of 8."], explanation: "A proportional relationship has no added constant.", itemPurpose: "Distinguish proportional and nonproportional linear models.", misconception: "Student thinks every linear equation is proportional.", stimulusType: "equation table", evidenceDemand: "model structure reasoning" }
    ];
    if (subject === "reading") return [
      { domain: "Informational Text", skillId: "authors-purpose", cognitiveLevel: "Rhetorical Function", stimulus: `<p><strong>Passage:</strong> An article argues that schools should teach students to check graphs before sharing claims online. It begins with a viral chart that looked convincing but used a shortened y-axis. The author then explains how graph design can change interpretation.</p>`, question: "Why does the author begin with the viral chart?", correct: "to show a realistic example of how a graph can mislead readers", distractors: ["to prove every graph is false", "to change the topic to social media popularity", "to argue that students should avoid all data"], explanation: "The example introduces the problem the article addresses.", itemPurpose: "Identify the function of an example in an argument.", misconception: "Student overgeneralizes from a single example.", stimulusType: "argument passage", evidenceDemand: "rhetorical function" },
      { domain: "Literary Text", skillId: "inference", cognitiveLevel: "Theme Inference", stimulus: `<p><strong>Passage:</strong> After the community garden is paved for parking, Maya keeps a packet of tomato seeds in her backpack. She says the lot is useful now, but it no longer 'remembers the hands that made it green.'</p>`, question: "Which theme is best supported?", correct: "Practical changes can erase shared memory.", distractors: ["Parking lots always improve communities.", "Maya dislikes all useful places.", "The seeds have no symbolic meaning."], explanation: "The contrast between usefulness and memory supports the theme.", itemPurpose: "Infer theme from figurative language.", misconception: "Student reads symbolic detail only literally.", stimulusType: "literary passage", evidenceDemand: "text-grounded inference" },
      { domain: "Paired Passage Reasoning", skillId: "paired-passage-set", cognitiveLevel: "Multi-Source Reasoning", stimulus: `<p><strong>Source A:</strong> Longer lunch periods may improve student focus.</p><p><strong>Source B:</strong> A principal worries longer lunches may reduce class time.</p><p><strong>Source C:</strong> A pilot schedule kept class time by shortening passing periods.</p>`, question: "Which conclusion uses all sources?", correct: "Longer lunches may help focus if schedule tradeoffs are addressed.", distractors: ["Longer lunches have no possible benefits.", "Class time never matters.", "Source C makes Source A false."], explanation: "The conclusion includes benefit and tradeoff evidence.", itemPurpose: "Synthesize sources into a bounded claim.", misconception: "Student uses one source while ignoring others.", stimulusType: "multi-source set", evidenceDemand: "source synthesis" },
      { domain: "Informational Text", skillId: "text-evidence", cognitiveLevel: "Evidence Sufficiency", stimulus: `<p>A report says a school program caused reading gains. Scores rose after the program began, but class sizes also became smaller that year.</p>`, question: "What is the strongest critique?", correct: "The evidence does not separate the program effect from smaller class sizes.", distractors: ["Reading gains cannot be measured.", "The program must have caused all gains.", "Class size is never relevant."], explanation: "Another change could explain some of the improvement.", itemPurpose: "Evaluate evidence limits in an informational claim.", misconception: "Student accepts a causal claim from a before-after pattern.", stimulusType: "evidence claim", evidenceDemand: "claim limitation critique" }
    ];
    if (subject === "language") return [
      { domain: "Writing Development", skillId: "revision", cognitiveLevel: "Evidence-Based Revision", stimulus: `<p><strong>Draft claim:</strong> The school should add outdoor study spaces.</p><p><strong>Evidence:</strong> In a survey, ${32 + g}% of students said they would use outdoor tables at least twice a week.</p>`, question: "Which sentence best explains the evidence?", correct: "The survey suggests enough student interest to justify adding some outdoor study spaces.", distractors: ["The survey proves every student wants outdoor classes.", "Outdoor tables should replace all classrooms.", "The evidence is unrelated to the claim."], explanation: "The best sentence connects the data to a moderate policy claim.", itemPurpose: "Revise explanation of evidence.", misconception: "Student overstates evidence or misses relevance.", stimulusType: "argument draft", evidenceDemand: "evidence-to-claim connection" },
      { domain: "Language Grammar", skillId: "grammar-usage", cognitiveLevel: "Grammar in Context", stimulus: `<p><strong>Sentence:</strong> The group of students were preparing a presentation about water quality.</p>`, question: "Which correction is best?", correct: "Change were to was.", distractors: ["Change students to student's.", "Change preparing to prepares.", "No change is needed."], explanation: "The subject group is singular.", itemPurpose: "Apply subject-verb agreement in a noun phrase.", misconception: "Student agrees with the nearest plural noun.", stimulusType: "editing sentence", evidenceDemand: "grammar-in-context" },
      { domain: "Writing Organization", skillId: "paragraph-organization", cognitiveLevel: "Argument Organization", stimulus: `<p>An essay gives three reasons for later school start times, then introduces a sports-schedule concern only in the last sentence.</p>`, question: "What is the best revision?", correct: "Address the sports concern in the body and answer it with evidence.", distractors: ["Delete the thesis.", "Leave the concern unexplained in the conclusion.", "Add an unrelated story about sports."], explanation: "A counterclaim needs development and response.", itemPurpose: "Organize counterclaim reasoning.", misconception: "Student treats a late mention as sufficient balance.", stimulusType: "essay structure", evidenceDemand: "organization revision" },
      { domain: "Writing Style", skillId: "revision", cognitiveLevel: "Academic Precision", stimulus: `<p><strong>Draft sentence:</strong> The article says pollution is bad and people should do better stuff.</p>`, question: "Which revision is most academic?", correct: "The article argues that reducing pollution requires specific community policy changes.", distractors: ["Pollution is bad stuff.", "People should do things.", "The article is about bad pollution."], explanation: "The revision is precise and analytical.", itemPurpose: "Improve academic style and specificity.", misconception: "Student keeps vague informal wording.", stimulusType: "style revision", evidenceDemand: "academic tone" }
    ];
    if (subject === "science") return [
      { domain: "Life Science", skillId: "claim-evidence-reasoning", cognitiveLevel: "CER From Data", stimulus: `<p>Students compare plant growth with and without fertilizer.</p>${table([["Group", "Average growth"], ["Fertilizer", `${6 + g} cm`], ["No fertilizer", `${3 + g} cm`]])}`, question: "Which claim is best supported?", correct: "Fertilizer increased growth in this setup.", distractors: ["Fertilizer stopped all growth.", "The control group grew more.", "The data prove fertilizer helps every plant species."], explanation: "The fertilized group grew more, but the claim should stay within the setup.", itemPurpose: "Use data to support a bounded scientific claim.", misconception: "Student overgeneralizes beyond the data.", stimulusType: "data table", evidenceDemand: "CER with claim limits", scienceDimensions: "DCI plant growth + SEP data analysis + CCC cause/effect" },
      { domain: "Physical Science", skillId: "quantitative-model", cognitiveLevel: "Physical Model", stimulus: `<p>Two carts are pushed with the same force.</p>${table([["Cart", "Mass", "Acceleration"], ["A", "2 kg", "4 m/s^2"], ["B", "4 kg", "2 m/s^2"]])}`, question: "Which claim is supported?", correct: "With the same force, greater mass gives lower acceleration.", distractors: ["Mass has no effect on acceleration.", "Cart B had a larger force.", "Both carts accelerated equally."], explanation: "The more massive cart accelerates less under the same force.", itemPurpose: "Reason from quantitative physical data.", misconception: "Student ignores controlled force.", stimulusType: "data table", evidenceDemand: "model relationship", scienceDimensions: "DCI forces + SEP math reasoning + CCC scale/proportion" },
      { domain: "Earth and Space Science", skillId: "model-limitations", cognitiveLevel: "Model Limitation", stimulus: `<p>A flood-risk map uses elevation and rainfall but ignores new pavement from a shopping center.</p>`, question: "What limitation matters most?", correct: "The map may underestimate runoff because pavement reduces infiltration.", distractors: ["Elevation can never affect flooding.", "Pavement absorbs all water.", "Maps cannot show risk."], explanation: "New pavement can increase runoff.", itemPurpose: "Identify a missing variable in an Earth-system model.", misconception: "Student treats a model as complete.", stimulusType: "model scenario", evidenceDemand: "model critique", scienceDimensions: "DCI Earth systems + SEP evaluating models + CCC systems" },
      { domain: "Physical Science", skillId: "experimental-design", cognitiveLevel: "Controlled Variables", stimulus: `<p>A student tests bridge strength. Bridge A is cardboard, Bridge B is wood, and Bridge C is plastic. Each also has a different shape.</p>`, question: "What is confounded?", correct: "material and shape both change", distractors: ["only one variable changes", "no measurement can be made", "the dependent variable is fixed"], explanation: "Changing material and shape makes cause unclear.", itemPurpose: "Evaluate experimental design.", misconception: "Student misses confounding variables.", stimulusType: "investigation scenario", evidenceDemand: "controlled-variable critique", scienceDimensions: "DCI engineering design + SEP planning investigations + CCC cause/effect" }
    ];
    return [
      { domain: "History", skillId: "source-analysis", cognitiveLevel: "Source Corroboration", stimulus: `<p><strong>Source A:</strong> A factory owner says wages are fair.</p><p><strong>Source B:</strong> A worker diary describes unpaid overtime.</p>`, question: "Why compare these sources?", correct: "to evaluate perspective and possible bias", distractors: ["to accept the owner automatically", "to prove both sources are maps", "to avoid using evidence"], explanation: "Different positions can shape what each source emphasizes.", itemPurpose: "Analyze source perspective.", misconception: "Student accepts one source at face value.", stimulusType: "paired sources", evidenceDemand: "sourcing and corroboration" },
      { domain: "Geography", skillId: "source-analysis", cognitiveLevel: "Spatial Reasoning", stimulus: `<p>Map layers show dense settlement near rivers and low settlement in dry inland areas.</p>`, question: "Which inference is best supported?", correct: "Water access affects settlement patterns.", distractors: ["People avoid all rivers.", "Dry areas always have more jobs.", "Settlement ignores resources."], explanation: "The map pattern links water access and settlement.", itemPurpose: "Interpret geographic patterns.", misconception: "Student lists map details without inference.", stimulusType: "map-layer description", evidenceDemand: "spatial inference" },
      { domain: "Economics", skillId: "economics", cognitiveLevel: "Supply-Demand Reasoning", stimulus: `<p>A drought damages wheat crops while demand for bread stays about the same.</p>`, question: "What is the likely market effect?", correct: "Bread prices may rise.", distractors: ["Wheat supply will increase.", "Bread becomes free.", "Demand disappears immediately."], explanation: "Reduced supply with steady demand tends to increase price.", itemPurpose: "Apply supply and demand reasoning.", misconception: "Student confuses supply and demand.", stimulusType: "economics scenario", evidenceDemand: "market-effect reasoning" },
      { domain: "Civics", skillId: "source-analysis", cognitiveLevel: "Rights and Policy", stimulus: `<p>A city limits large nighttime gatherings near hospitals but allows daytime permits in parks.</p>`, question: "Which civic question matters most?", correct: "Does the rule balance public safety with rights?", distractors: ["Does the rule change supply curves?", "Can hospitals vote?", "Are parks private diaries?"], explanation: "Civic reasoning weighs policy goals against rights.", itemPurpose: "Evaluate civic policy tradeoffs.", misconception: "Student treats safety as automatically overriding rights.", stimulusType: "policy scenario", evidenceDemand: "rights-tradeoff reasoning" }
    ];
  }

  const rows = [];
  targetGrades.forEach(grade => ["math", "reading", "language", "science", "social"].forEach(subject => {
    bands.forEach(([band, count]) => {
      for (let i = 0; i < count; i++) {
        const item = templates(grade, subject, i)[i % 4];
        add(rows, grade, subject, band, ritBase[grade][band] + i, item);
      }
    });
  }));
  window.productionQuestionBank.push(...rows);
})();
