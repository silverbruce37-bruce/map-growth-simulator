(function addGrade10QuestionBank() {
  const rows = [];

  const blueprint = {
    grade: 10,
    note: "Original MAP Growth-style diagnostic bank for the final junior-school year. Measures upper-secondary readiness, transfer, evidence use, model critique, and misconception patterns.",
    distribution: { Low: 12, Medium: 15, High: 10, Advanced: 3 }
  };

  function add(item) {
    const schoolTransferTarget = {
      math: "International school Grade 10 math: Algebra I/Geometry mastery, early Algebra II readiness, nonlinear modeling, statistics, proof, and functions",
      reading: "International school Grade 10 ELA/humanities: rhetoric, literary analysis, synthesis, evidence evaluation, theme, and claim limits",
      language: "International school Grade 10 writing: thesis precision, academic grammar, organization, counterclaim integration, evidence sufficiency, and formal style",
      science: "International school Grade 10 science: biology/chemistry/physics CER, experimental design, quantitative data, systems, and model limitations",
      social: "International school Grade 10 social studies: primary-source evaluation, civics/economics tradeoffs, geography systems, and historical corroboration"
    }[item.subject];

    rows.push({
      grade: 10,
      adaptiveWeight: item.difficulty === "Advanced" ? 4 : item.difficulty === "High" ? 3 : item.difficulty === "Medium" ? 2 : 1,
      status: "approved",
      blueprint,
      mapAlignment: "MAP Growth-style: four-choice adaptive practice item with public-domain skill framing, concise stems, stimulus-supported reasoning, and plausible misconception distractors.",
      schoolTransferTarget,
      calculator: false,
      killer: false,
      ...item
    });
  }

  const bands = [["Low", 12, 236], ["Medium", 15, 248], ["High", 10, 262], ["Advanced", 3, 276]];

  const mathTemplates = [
    ["Expressions and Equations", "multi-step-reasoning", "Quadratic Structure", "Expression:\nx^2 - 9x + 20", "Which is factored form?", ["(x - 4)(x - 5)", "(x + 4)(x + 5)", "(x - 2)(x - 10)", "(x + 1)(x - 20)"], "The factors of 20 that add to -9 are -4 and -5.", "Factors quadratics by structure.", "Student checks product but not sum."],
    ["Functions", "multi-step-reasoning", "Function Transformation", "Function:\ng(x) = (x - 2)^2 + 5", "What is the vertex?", ["(2, 5)", "(-2, 5)", "(2, -5)", "(-2, -5)"], "Vertex form y = (x - h)^2 + k has vertex (h,k).", "Reads vertex form accurately.", "Student misses the sign inside parentheses."],
    ["Geometry", "geometry", "Similarity", "Two similar triangles have corresponding sides 6 and 15. The smaller triangle's perimeter is 28.", "What is larger perimeter?", ["70", "37", "43", "112"], "Scale factor is 15/6 = 2.5, so 28 x 2.5 = 70.", "Transfers scale factor to perimeter.", "Student adds side difference instead of scaling."],
    ["Statistics and Probability", "measurement", "Residual", "A model predicts 124. Actual value is 117.", "What is actual - predicted?", ["-7", "7", "241", "117/124"], "Residual is 117 - 124 = -7.", "Tracks residual direction.", "Student subtracts in reverse order."],
    ["The Number System", "operations", "Radical Simplification", "Expression:\nsqrt(98)", "Which is equivalent?", ["7sqrt(2)", "49sqrt(2)", "14sqrt(7)", "9sqrt(8)"], "sqrt(98) = sqrt(49 x 2) = 7sqrt(2).", "Simplifies radicals using square factors.", "Student pulls out a non-square factor."],
    ["Functions", "multi-step-reasoning", "Linear vs Exponential", "Model A adds 12 each month. Model B multiplies by 1.12 each month.", "Which statement is true?", ["A is linear; B is exponential.", "Both are linear.", "A is exponential; B is linear.", "Neither can model growth."], "Constant addition is linear; constant multiplication is exponential.", "Distinguishes growth structures.", "Student treats all growth as linear."],
    ["Geometry", "geometry", "Proof Sufficiency", "Two triangles have side lengths proportional but different sizes.", "What is guaranteed?", ["similarity", "congruence", "equal area", "equal perimeter"], "Proportional corresponding sides guarantee similarity, not congruence.", "Separates similarity and congruence.", "Student overclaims from proportionality."],
    ["Expressions and Equations", "multi-step-reasoning", "System Solving", "System:\ny = 3x - 4\ny = -x + 8", "What is x?", ["3", "4", "8", "12"], "Set 3x - 4 = -x + 8, so 4x = 12.", "Solves intersection algebraically.", "Student substitutes into one equation only."],
    ["Statistics and Probability", "measurement", "Causation", "A study finds students with private tutors score higher. Students were not randomly assigned.", "Which claim is justified?", ["Tutoring is associated with higher scores.", "Tutoring caused all higher scores.", "Scores caused tutoring.", "There is no relationship."], "Observational data supports association, not causation.", "Protects against causal overclaiming.", "Student treats correlation as proof."],
    ["Functions", "multi-step-reasoning", "Domain Context", "A theater earns R = 14t from tickets.", "Which domain fits t?", ["whole numbers t >= 0", "all real numbers", "negative decimals", "fractions only"], "Ticket count must be a nonnegative whole number.", "Connects domain to context.", "Student ignores real-world constraints."]
  ];

  bands.forEach(([difficulty, count, base]) => {
    for (let i = 0; i < count; i++) {
      const t = mathTemplates[i % mathTemplates.length];
      add({
        id: `math-g10-elite-${difficulty.toLowerCase()}-${String(i + 1).padStart(2, "0")}`,
        subject: "math",
        domain: t[0],
        skillId: t[1],
        difficulty,
        ritDifficulty: base + i,
        cognitiveLevel: difficulty === "Advanced" ? "Model and Proof Critique" : t[2],
        stimulus: difficulty === "Advanced" ? `${t[3]}\nA student makes a broad conclusion from this evidence.` : t[3],
        question: difficulty === "Advanced" ? "What is the strongest critique?" : t[4],
        options: difficulty === "Advanced" ? [t[5][0], "The conclusion is proven by one matching feature.", "No additional condition could matter.", "The model is exact because it has an equation."] : t[5],
        answer: 0,
        explanation: t[6],
        itemPurpose: t[7],
        misconception: t[8],
        killer: difficulty === "Advanced",
        calculator: t[2].includes("System") || t[2].includes("Similarity"),
        stimulusType: t[3].includes("|") ? "table/data display" : "context/model",
        evidenceDemand: difficulty === "Advanced" ? "proof/model sufficiency critique" : difficulty === "High" ? "multi-step transfer" : "targeted skill diagnosis",
        distractorRationale: "Distractors target algebraic sign errors, model overreach, proof insufficiency, and formula confusion."
      });
    }
  });

  const readingPassages = [
    ["rhetoric", "Informational Text", "Passage:\nA columnist argues that schools should teach media verification as a core skill. The column opens with a story of a false emergency post that spread faster than the correction. It then cites research showing that students who check source origin and publication date are less likely to share misinformation. The writer acknowledges that verification takes time but argues that speed without accuracy can harm communities.", [
      ["Low", 228, "main-idea-summary", "What is the central claim?", ["Students should learn media verification.", "Corrections always spread faster.", "Speed matters more than accuracy.", "Posts cannot harm communities."], "The column argues for teaching verification."],
      ["Low", 229, "vocabulary-context", "What does verification mean?", ["checking whether information is reliable", "posting quickly", "writing a story", "deleting research"], "The passage mentions checking source origin and date."],
      ["Medium", 240, "authors-purpose", "Why begin with the false emergency post?", ["To show a concrete harm before the evidence.", "To prove all posts are false.", "To replace research.", "To criticize emergencies."], "The story illustrates why verification matters."],
      ["High", 254, "text-evidence", "Which detail shows balanced reasoning?", ["The writer acknowledges verification takes time.", "The post spread quickly.", "Students check dates.", "The column opens with a story."], "The writer admits a drawback."],
      ["Medium", 268, "text-evidence", "What evidence would best strengthen the claim?", ["A study comparing sharing accuracy before and after verification lessons.", "A list of social media logos.", "One student's phone model.", "The length of the column."], "Before-and-after accuracy data would test the instruction claim."]
    ]],
    ["poem", "Literary Text", "Passage:\nThe poem describes a city at dawn after a storm. Windows 'hold small squares of fire,' and puddles reflect traffic lights like 'borrowed planets.' The speaker says the city has not become new; instead, it has learned how to show its broken places in light.", [
      ["Low", 230, "vocabulary-context", "What does borrowed suggest?", ["temporarily reflected", "permanently owned", "carefully hidden", "loudly announced"], "The puddles reflect lights like planets they do not own."],
      ["Medium", 242, "inference", "What mood is created?", ["renewal mixed with damage", "complete despair", "pure celebration", "comic confusion"], "The city shows broken places in light."],
      ["Medium", 243, "text-evidence", "Which image supports beauty after damage?", ["puddles reflect traffic lights", "after a storm", "the city at dawn", "the speaker says"], "The puddles, an effect of the storm, reflect light."],
      ["High", 256, "authors-purpose", "What is the effect of the final statement?", ["It complicates the idea of renewal.", "It explains astronomy.", "It denies the storm happened.", "It describes traffic law."], "The city is not new but reveals damage differently."],
      ["High", 257, "inference", "Which theme fits?", ["Healing can reveal damage rather than erase it.", "Cities become perfect after storms.", "Light prevents all damage.", "Reflection is always false."], "The poem links light with visible broken places."]
    ]],
    ["sources", "Paired Passage Reasoning", "Source A:\nA historian argues that trade routes accelerated cultural exchange across regions.\n\nSource B:\nA merchant's letter describes learning new accounting methods from foreign partners.\n\nSource C:\nA law code from the same period restricts which goods foreigners may sell in local markets.", [
      ["Low", 231, "main-idea-summary", "What topic connects the sources?", ["trade and cultural exchange", "school attendance", "weather prediction", "modern phones"], "All sources involve trade across groups."],
      ["Medium", 244, "paired-passage-set", "How does Source C complicate Source A?", ["It shows exchange occurred within legal limits.", "It proves trade never happened.", "It repeats the merchant letter.", "It describes only weather."], "The law code shows restrictions alongside exchange."],
      ["Medium", 245, "text-evidence", "Which source gives individual experience?", ["Source B", "Source A", "Source C", "Sources A and C only"], "The merchant's letter is an individual account."],
      ["High", 258, "inference", "Which conclusion uses all sources?", ["Trade spread practices but was shaped by regulation.", "Trade had no cultural effect.", "Laws prove merchants never learned.", "Only historians provide evidence."], "All sources together show exchange and limits."],
      ["Medium", 270, "text-evidence", "What claim is too broad?", ["Trade routes always allowed unrestricted exchange.", "Trade could spread accounting methods.", "Laws shaped market access.", "Cultural exchange occurred through trade."], "Source C contradicts unrestricted exchange."]
    ]],
    ["science", "Informational Text", "Passage:\nA lab report claims a new filter removes microplastics from water. The data show the filter removed 82% of visible particles in one trial. The report does not state particle size, water source, number of trials, or whether a control filter was tested. A reviewer says the result is promising but not yet sufficient for a broad claim.", [
      ["Low", 232, "main-idea-summary", "What is the reviewer's position?", ["The result is promising but limited.", "The filter is fully proven.", "No data were collected.", "Controls are unnecessary."], "The reviewer says the result is not sufficient for a broad claim."],
      ["Medium", 246, "text-evidence", "Which missing detail matters?", ["number of trials", "the title font", "the lab wall color", "the report length"], "More trials are needed to judge reliability."],
      ["Medium", 247, "authors-purpose", "Why list missing details?", ["To show why the claim needs stronger evidence.", "To prove filters cannot work.", "To describe plastic colors.", "To avoid discussing data."], "The missing details limit the claim."],
      ["High", 260, "inference", "What is the main reasoning issue?", ["evidence sufficiency", "character motivation", "poetic imagery", "chronological order"], "The passage evaluates whether evidence supports a broad claim."],
      ["Advanced", 272, "text-evidence", "What would most strengthen the claim?", ["Repeated controlled trials with measured particle sizes.", "A photo of the filter box.", "A longer introduction.", "One cup of clear water."], "Controlled repeated measurements address the weaknesses.", true]
    ]],
    ["novel", "Literary Text", "Passage:\nAfter the scholarship announcement, Jonas folded the letter and placed it under the chipped blue bowl his mother used for keys. He did not call his friends. Instead, he washed the dinner dishes twice, watching soap cover and uncover his reflection in the window.", [
      ["Low", 233, "inference", "What can be inferred about Jonas?", ["He is processing strong feelings privately.", "He is excited to call everyone.", "He lost the letter.", "He dislikes clean dishes."], "He hides the letter and repeats a quiet task."],
      ["Low", 234, "text-evidence", "Which detail supports privacy?", ["He did not call his friends.", "The bowl was blue.", "The letter was folded.", "The window had reflection."], "Not calling friends shows privacy."],
      ["Medium", 248, "authors-purpose", "Why mention the reflection?", ["To suggest Jonas is examining himself emotionally.", "To explain how windows are made.", "To show soap is dangerous.", "To prove the scholarship is fake."], "The covered and uncovered reflection symbolizes unsettled self-perception."],
      ["High", 261, "inference", "Which theme fits?", ["Major change can create uncertainty as well as success.", "Scholarships always create sadness.", "Dishes solve conflict.", "Letters should be hidden."], "His reaction is complex, not simple celebration."],
      ["High", 262, "text-evidence", "Which image best supports uncertainty?", ["soap cover and uncover his reflection", "chipped blue bowl", "scholarship announcement", "dinner dishes"], "The changing reflection suggests instability."]
    ]],
    ["policy", "Informational Text", "Passage:\nA city proposes free public transit for students. Supporters say it would reduce absences and help families save money. Critics say buses are already crowded and the city has not budgeted for additional routes. The proposal recommends a six-month pilot with attendance tracking, ridership counts, and a cost report.", [
      ["Low", 235, "main-idea-summary", "What is being proposed?", ["free public transit for students", "closing all bus routes", "raising fares", "ending attendance tracking"], "The first sentence states the proposal."],
      ["Medium", 249, "text-evidence", "What concern do critics raise?", ["Buses are crowded and routes are not budgeted.", "Students never ride buses.", "Families cannot save money.", "Attendance cannot be tracked."], "The critics mention crowding and budget."],
      ["Medium", 250, "authors-purpose", "Why include a pilot?", ["To test benefits, costs, and capacity before permanent change.", "To avoid collecting data.", "To make buses smaller.", "To prove critics wrong without evidence."], "The pilot collects attendance, ridership, and cost data."],
      ["High", 263, "inference", "Which decision would use the evidence best?", ["Compare attendance gains with crowding and cost data after the pilot.", "Approve the policy because it sounds helpful.", "Reject it because buses are crowded now.", "Ignore family savings."], "The passage calls for balancing benefits and constraints."],
      ["Advanced", 274, "text-evidence", "What evidence is most necessary?", ["Attendance, ridership, and cost changes during the pilot.", "Bus paint colors.", "One student's backpack brand.", "The mayor's favorite route."], "These measures test the proposal's main claims.", true]
    ]],
    ["history", "Informational Text", "Passage:\nA student argues that a reform law was popular because a newspaper editorial praised it. In the archive, she later finds petitions supporting the law from urban merchants and letters opposing it from rural farmers who faced higher fees. Her teacher asks her to revise the claim rather than choose only one side.", [
      ["Low", 236, "main-idea-summary", "What should the student revise?", ["the claim that the law was simply popular", "the existence of newspapers", "the date of the archive", "the meaning of merchants"], "The evidence shows mixed responses."],
      ["Low", 237, "text-evidence", "Which group opposed the law?", ["rural farmers", "urban merchants", "newspaper editors", "teachers"], "The letters opposing it came from rural farmers."],
      ["Medium", 251, "inference", "What is the best revised claim?", ["The law had different support depending on group and region.", "Everyone supported the law.", "No evidence exists.", "Only newspapers matter."], "Merchants supported it while farmers opposed it."],
      ["High", 264, "authors-purpose", "Why include multiple source types?", ["To show the need for a nuanced historical claim.", "To prove archives are unreliable.", "To avoid evidence.", "To rank handwriting."], "The sources complicate the initial claim."],
      ["Advanced", 276, "text-evidence", "What would be an overclaim?", ["The law was unpopular with every group.", "Some rural farmers opposed the law.", "Some merchants supported the law.", "The editorial praised the law."], "The evidence shows mixed views, not universal opposition.", true]
    ]],
    ["engineering", "Informational Text", "Passage:\nA robotics team improved its robot's speed by using lighter wheels. During the next trial, the robot completed the straight section faster but failed on the ramp because the wheels slipped. The team decided to compare wheel materials while keeping weight constant.", [
      ["Low", 238, "main-idea-summary", "What problem appeared?", ["The lighter wheels slipped on the ramp.", "The robot stopped moving straight.", "The team removed the ramp.", "The wheels became heavier."], "The robot failed on the ramp because wheels slipped."],
      ["Low", 239, "vocabulary-context", "What does constant mean here?", ["kept the same", "made louder", "removed completely", "measured after"], "The team keeps weight the same while testing material."],
      ["Medium", 252, "text-evidence", "Which detail shows a tradeoff?", ["faster straight section but failed on the ramp", "the team used wheels", "there was a trial", "the robot had speed"], "The change improved one feature but hurt another."],
      ["Medium", 253, "inference", "Why keep weight constant?", ["To isolate the effect of wheel material.", "To make the robot heavier.", "To avoid testing.", "To remove the ramp variable."], "Controlling weight makes material the key variable."],
      ["High", 265, "authors-purpose", "What reasoning does the passage emphasize?", ["engineering design requires testing tradeoffs.", "Faster is always better.", "Ramps cannot be tested.", "Materials do not matter."], "The team responds to a tradeoff with a controlled comparison."]
    ]]
  ];

  readingPassages.forEach(([code, domain, stimulus, qs]) => qs.forEach((q, i) => add({
    id: `reading-g10-elite-${code}-${i + 1}`,
    subject: "reading",
    domain,
    skillId: q[2],
    difficulty: q[0],
    ritDifficulty: q[1],
    cognitiveLevel: "Composite Passage Reasoning",
    stimulus,
    question: q[3],
    options: q[4],
    answer: 0,
    explanation: q[5],
    killer: q[6] || false,
    itemPurpose: `${q[2]} diagnosis in a Grade 10 academic source or literary set.`,
    misconception: "Student chooses unsupported overclaim, detail-only evidence, source confusion, or rhetoric without evidence.",
    stimulusType: domain === "Paired Passage Reasoning" ? "multi-source set" : "composite passage",
    evidenceDemand: q[0] === "Advanced" ? "evidence sufficiency or overclaim detection" : q[0] === "High" ? "inference with textual constraint" : "direct text-grounded reasoning",
    distractorRationale: "Distractors target unsupported inference, rhetorical oversimplification, source confusion, and evidence weakness."
  })));

  const languageTemplates = [
    ["Language Mechanics", "mechanics", "Sentence:\nAlthough the proposal was costly the board approved a pilot.", "Where should a comma be added?", ["after costly", "after proposal", "after board", "no comma is needed"], "The introductory dependent clause ends after costly.", "Punctuation in complex academic sentences.", "Student marks a phrase rather than the full clause."],
    ["Language Grammar", "grammar-usage", "Sentence:\nThe collection of lab reports were reviewed.", "Which verb is correct?", ["was", "were", "are", "be"], "The subject collection is singular.", "Agreement with prepositional phrase.", "Student agrees with nearby plural reports."],
    ["Sentence Structure", "sentence-structure", "Draft:\nThe study was limited, it still raised important questions.", "Which revision is correct?", ["The study was limited, but it still raised important questions.", "The study was limited, it still.", "Limited study questions.", "No revision is needed."], "A coordinating conjunction fixes the comma splice.", "Comma splice repair.", "Student uses comma alone to join clauses."],
    ["Writing Style", "revision", "Draft:\nThe author kind of proves the point with good examples.", "Which revision is strongest?", ["The author supports the claim with survey data and a specific case study.", "The author proves stuff.", "Examples are good.", "The point is there."], "The revision is precise and evidence-based.", "Academic analytical style.", "Student uses vague evaluative language."],
    ["Writing Development", "revision", "Claim:\nThe policy improved attendance.\nEvidence:\nAttendance rose, but a new bus route also began that semester.", "What should the writer add?", ["Evidence separating the policy's effect from the bus route.", "More adjectives.", "A claim that buses never matter.", "A longer title."], "The bus route is a possible confound.", "Causal evidence qualification.", "Student ignores alternative explanations."],
    ["Writing Organization", "paragraph-organization", "An essay introduces a counterclaim for the first time in the conclusion.", "Best revision?", ["Address the counterclaim in the body before the conclusion.", "Delete the thesis.", "Use no evidence.", "Add a question mark."], "Counterclaims require development before final synthesis.", "Argument architecture.", "Student adds complexity too late."],
    ["Writing Revision", "revision", "Claim:\nAI tools improve learning.\nEvidence:\nStudents say they like using them.", "What revision is needed?", ["Add evidence about learning outcomes, not only preference.", "Remove all evidence.", "Say liking proves learning.", "Change topic to sports."], "Preference does not prove learning improvement.", "Evidence sufficiency.", "Student equates preference with outcome."],
    ["Writing Style", "revision", "Audience: academic essay.\nDraft:\nThe experiment totally flopped because the setup was weird.", "Which revision fits?", ["The experiment did not support the hypothesis because the control condition changed.", "The experiment was super weird.", "Nothing worked.", "Science was annoying."], "The revision is formal and specific.", "Scientific writing tone.", "Student uses informal emotion."],
    ["Sentence Structure", "sentence-structure", "Goal: emphasize contrast.", "Which sentence is best?", ["Although the model fit early data, it failed after conditions changed.", "Because the model fit early data, it failed.", "The model fit and fit.", "Model conditions changed failed."], "Although signals contrast.", "Logical subordination.", "Student uses cause when contrast is intended."],
    ["Writing Development", "revision", "Evidence:\nA survey found 81% of students prefer open-note quizzes.", "Which claim is best supported?", ["Most surveyed students prefer open-note quizzes.", "Open-note quizzes improve learning.", "All students want open-note quizzes.", "Closed-note quizzes are harmful."], "Preference data supports preference only.", "Claim-evidence fit.", "Student overclaims from survey data."]
  ];

  bands.forEach(([difficulty, count, base]) => {
    for (let i = 0; i < count; i++) {
      const t = languageTemplates[i % languageTemplates.length];
      add({
        id: `language-g10-elite-${difficulty.toLowerCase()}-${String(i + 1).padStart(2, "0")}`,
        subject: "language",
        domain: t[0],
        skillId: t[1],
        difficulty,
        ritDifficulty: base + i,
        cognitiveLevel: difficulty === "Advanced" ? "Advanced Writing Decision" : t[0],
        stimulus: t[2],
        question: difficulty === "Advanced" ? "What is the strongest revision decision?" : t[3],
        options: difficulty === "Advanced" ? [t[4][0], "Keep the claim unchanged because it sounds confident.", "Remove the evidence and rely on opinion.", "Add unrelated details to make it longer."] : t[4],
        answer: 0,
        explanation: t[5],
        itemPurpose: t[6],
        misconception: t[7],
        killer: difficulty === "Advanced",
        stimulusType: "editing/writing context",
        evidenceDemand: difficulty === "Advanced" ? "writing-decision ceiling check" : difficulty === "High" ? "context-sensitive revision" : "targeted editing decision",
        distractorRationale: "Distractors isolate grammar overgeneralization, weak evidence, informal tone, and organization errors."
      });
    }
  });

  const scienceTemplates = [
    ["Life Science", "claim-evidence-reasoning", "Data:\nEnzyme activity is highest near pH 7 and drops sharply at pH 3 and pH 11.", "Which claim is best supported?", ["The enzyme has an optimal pH near 7.", "The enzyme works equally at all pH levels.", "pH never affects proteins.", "The enzyme is destroyed only at pH 7."], "The data show maximum activity near pH 7.", "CER from biological data.", "Student ignores pattern and extremes."],
    ["Physical Science", "physical-science", "A cart's mass doubles while applied force stays the same.", "What happens to acceleration?", ["It decreases.", "It doubles.", "It stays exactly the same.", "It becomes speed."], "With the same force, greater mass means lower acceleration.", "Newton's second law reasoning.", "Student confuses mass and speed."],
    ["Physical Science", "claim-evidence-reasoning", "Reaction data:\nBefore: 18 g sodium bicarbonate + 22 g acid\nAfter in closed bag: 40 g total products", "Which principle is shown?", ["conservation of mass", "mass loss", "energy disappearing", "gas has no mass"], "Total mass remains 40 g in a closed system.", "Chemistry conservation reasoning.", "Student thinks gas production removes mass."],
    ["Earth and Space Science", "physical-science", "A flood model uses elevation and rainfall but ignores new pavement in the watershed.", "What limitation matters?", ["It may underestimate runoff.", "Elevation is useless.", "Rainfall cannot affect floods.", "All models are exact."], "Pavement increases runoff by reducing infiltration.", "Earth system model limitation.", "Student treats one useful variable as complete."],
    ["Life Science", "life-science", "A population of bacteria is exposed to an antibiotic. A few resistant bacteria survive and reproduce.", "What is likely over generations?", ["resistant bacteria become more common", "all bacteria choose resistance", "the antibiotic becomes food", "variation disappears immediately"], "Selection favors resistant individuals.", "Natural selection in microbes.", "Student thinks individuals adapt by choice."],
    ["Physical Science", "experimental-design", "A student compares insulation materials but uses different cup sizes for each material.", "What is the problem?", ["material and cup size both change", "only one variable changes", "no dependent variable exists", "insulation cannot be tested"], "Cup size is a confounding variable.", "Experimental design control.", "Student misses fair-test requirements."],
    ["Physical Science", "physical-science", "A wave has higher frequency while traveling through the same medium.", "What changes?", ["wavelength decreases", "mass increases", "the wave stops", "amplitude must be zero"], "For a fixed wave speed, higher frequency means shorter wavelength.", "Wave relationship reasoning.", "Student confuses frequency and amplitude."],
    ["Life Science", "claim-evidence-reasoning", "A graph shows predator numbers rise two months after prey numbers rise.", "Which explanation fits?", ["More prey may support more predators after a delay.", "Predators cause prey before they exist.", "The populations are unrelated.", "Prey stop needing energy."], "Predator populations often respond after prey changes.", "Ecosystem population reasoning.", "Student reverses time order."],
    ["Earth and Space Science", "claim-evidence-reasoning", "Ice-core data show CO2 and temperature rising together across several intervals.", "What is a careful claim?", ["CO2 and temperature are associated in the record.", "CO2 alone explains every temperature change.", "Temperature cannot be measured.", "Ice cores contain no data."], "The pattern supports association and requires careful interpretation.", "Climate data interpretation.", "Student overclaims a single-factor cause."],
    ["Physical Science", "physical-science", "A sealed gas is heated. Its particles move faster.", "What happens to pressure if volume stays constant?", ["pressure increases", "pressure becomes zero", "pressure decreases always", "volume must disappear"], "Faster particles collide more often and harder with container walls.", "Particle model of gases.", "Student ignores microscopic mechanism."]
  ];

  bands.forEach(([difficulty, count, base]) => {
    for (let i = 0; i < count; i++) {
      const t = scienceTemplates[i % scienceTemplates.length];
      add({
        id: `science-g10-elite-${difficulty.toLowerCase()}-${String(i + 1).padStart(2, "0")}`,
        subject: "science",
        domain: t[0],
        skillId: difficulty === "Advanced" ? "claim-evidence-reasoning" : t[1],
        difficulty,
        ritDifficulty: base + i,
        cognitiveLevel: difficulty === "Advanced" ? "Model and Evidence Critique" : t[0],
        stimulus: t[2],
        question: difficulty === "Advanced" ? "What is the strongest scientific critique?" : t[3],
        options: difficulty === "Advanced" ? [t[4][0], "The evidence proves every broad version of the claim.", "No missing variable could matter.", "The model should be accepted without limits."] : t[4],
        answer: 0,
        explanation: t[5],
        itemPurpose: t[6],
        misconception: t[7],
        killer: difficulty === "Advanced",
        stimulusType: t[2].includes("Data") || t[2].includes("graph") ? "data/model stimulus" : "scientific scenario",
        evidenceDemand: difficulty === "Advanced" ? "model limitation or evidence sufficiency" : difficulty === "High" ? "multi-variable scientific reasoning" : "DCI plus SEP diagnosis",
        distractorRationale: "Distractors target variable confusion, causal reversal, model absolutism, and unsupported CER."
      });
    }
  });

  const socialTemplates = [
    ["History", "source-analysis", "Source A is a government announcement praising a reform. Source B is a worker petition saying the reform raised fees.", "Why compare them?", ["to evaluate perspective and bias", "to choose the official source only", "to avoid context", "to prove both are maps"], "Different roles shape claims.", "Sourcing and perspective.", "Student accepts official source automatically."],
    ["Geography", "source-analysis", "Map data show factories near ports, high-income housing uphill, and flood risk concentrated in low-lying districts.", "Which inference is best?", ["Physical geography and economic patterns shape risk.", "Flood risk is evenly distributed.", "Ports prevent factories.", "Housing has no spatial pattern."], "The map links elevation, economy, and risk.", "Spatial and social geography reasoning.", "Student reads only one map layer."],
    ["Economics", "economics", "A price ceiling is set below market rent.", "What may happen?", ["housing shortage", "unlimited housing", "prices above the ceiling", "demand disappears"], "A low price ceiling increases quantity demanded and reduces quantity supplied.", "Market intervention reasoning.", "Student sees lower price as solving all scarcity."],
    ["Civics", "source-analysis", "A law improves public safety but restricts public gatherings near government buildings.", "What question matters?", ["Does the law balance safety with constitutional rights?", "Does the law change rainfall?", "Can rights be ignored if popular?", "Are gatherings imports?"], "Civic reasoning weighs goals and rights.", "Rights-policy tradeoff.", "Student treats public benefit as unlimited authority."],
    ["History", "source-analysis", "A textbook says industrialization improved life. Letters from factory workers describe injuries and long hours.", "What should a historian do?", ["revise the claim to include different experiences", "ignore the letters", "accept only the textbook", "discard all sources"], "Conflicting evidence requires nuance.", "Corroboration and complexity.", "Student chooses one source type."],
    ["Economics", "economics", "A country imports most of its fuel and exports electronics.", "What is a risk?", ["fuel price shocks can raise production costs", "imports prevent all production", "exports remove demand", "fuel prices cannot change"], "Energy dependence can affect production costs.", "Economic systems reasoning.", "Student sees trade as one-way benefit only."],
    ["Geography", "source-analysis", "Satellite images show forest loss near a growing city while stream sediment increases downstream.", "Which question fits human-environment interaction?", ["How has urban expansion changed runoff and erosion?", "Who invented satellites?", "What is the city flag?", "Which image is brighter?"], "The evidence links human land change to environmental effects.", "Human-environment analysis.", "Student focuses on tool rather than pattern."],
    ["Civics", "source-analysis", "Citizens file a lawsuit after a popular policy limits speech in parks.", "What principle is involved?", ["rights can protect unpopular or minority views", "popular policies cannot be reviewed", "parks are economic goods only", "lawsuits end citizenship"], "Rights limit government even when a policy is popular.", "Constitutional reasoning.", "Student equates majority support with legality."],
    ["History", "source-analysis", "A political cartoon shows a law as chains around a printing press.", "What should a reader analyze?", ["symbolism and point of view", "paper size only", "whether cartoons are never evidence", "ink color only"], "The cartoon uses symbols to express a viewpoint.", "Political cartoon analysis.", "Student treats image as decoration only."],
    ["Economics", "economics", "A city gives a factory tax breaks. It creates jobs but increases water use during drought.", "Strongest policy question?", ["Do job benefits outweigh resource and environmental costs?", "Can jobs exist without workers?", "Should water be ignored?", "Do taxes create rainfall?"], "Policy requires weighing benefits and constraints.", "Cost-benefit policy analysis.", "Student considers only one side."]
  ];

  bands.forEach(([difficulty, count, base]) => {
    for (let i = 0; i < count; i++) {
      const t = socialTemplates[i % socialTemplates.length];
      add({
        id: `social-g10-elite-${difficulty.toLowerCase()}-${String(i + 1).padStart(2, "0")}`,
        subject: "social",
        domain: t[0],
        skillId: t[1],
        difficulty,
        ritDifficulty: base + i,
        cognitiveLevel: difficulty === "Advanced" ? "Source and Policy Evaluation" : t[0],
        stimulus: t[2],
        question: difficulty === "Advanced" ? "Which conclusion is most defensible?" : t[3],
        options: difficulty === "Advanced" ? [t[4][0], "Accept the strongest claim without checking evidence.", "Ignore tradeoffs because one benefit exists.", "Reject all sources because perspectives differ."] : t[4],
        answer: 0,
        explanation: t[5],
        itemPurpose: t[6],
        misconception: t[7],
        killer: difficulty === "Advanced",
        stimulusType: t[0] === "History" ? "source comparison" : t[0] === "Geography" ? "map/data description" : "policy scenario",
        evidenceDemand: difficulty === "Advanced" ? "source corroboration or policy tradeoff" : difficulty === "High" ? "multi-factor social reasoning" : "source-based inference",
        distractorRationale: "Distractors reflect one-source acceptance, single-factor policy thinking, and surface recall."
      });
    }
  });

  window.productionQuestionBank.push(...rows);
})();
