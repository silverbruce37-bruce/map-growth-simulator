(function addGrade9QuestionBank() {
  const rows = [];

  const blueprint = {
    grade: 9,
    note: "Original MAP Growth-style diagnostic bank for international-school Grade 9 readiness. Measures transfer, academic evidence use, modeling, source reasoning, and misconception patterns.",
    distribution: { Low: 12, Medium: 15, High: 10, Advanced: 3 }
  };

  function add(item) {
    const schoolTransferTarget = {
      math: "International school Grade 9 math: Algebra I readiness, linear/quadratic modeling, systems, geometry, statistics, and function reasoning",
      reading: "International school Grade 9 ELA/humanities: close reading, rhetoric, inference, evidence evaluation, theme, and multi-source synthesis",
      language: "International school Grade 9 writing: academic grammar, revision, thesis/evidence development, counterclaim handling, and formal tone",
      science: "International school Grade 9 science: biology/physical science CER, experimental design, data interpretation, systems, and model limitations",
      social: "International school Grade 9 social studies: geography data, civics, economics, history sourcing, corroboration, and policy tradeoff reasoning"
    }[item.subject];

    rows.push({
      grade: 9,
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

  const mathItems = [
    ["low-01", "Expressions and Equations", "multi-step-reasoning", 230, "Linear Equation", "Equation:\n5x - 12 = 38", "What is x?", ["10", "5.2", "26", "50"], "Add 12, then divide by 5.", "Solves a one-variable equation with inverse operations.", "Student reverses operation order or divides before isolating.", true],
    ["low-02", "Functions", "multi-step-reasoning", 231, "Function Notation", "Function:\nf(x) = -2x + 7", "What is f(4)?", ["-1", "15", "1", "-8"], "Substitute 4: -2(4) + 7 = -1.", "Connects function notation to substitution.", "Student treats f(x) as multiplication by f.", true],
    ["low-03", "The Number System", "operations", 232, "Exponent Rules", "Expression:\n(3^4)(3^-2)", "Which is equivalent?", ["3^2", "3^6", "1^2", "9^-2"], "Add exponents with the same base: 4 + (-2) = 2.", "Applies exponent structure including negative exponents.", "Student subtracts or multiplies exponents mechanically.", false],
    ["low-04", "Geometry", "geometry", 233, "Distance", "Points:\nA(-1, 3), B(5, 3)", "What is AB?", ["6", "4", "8", "2"], "The y-values are equal, so horizontal distance is 5 - (-1) = 6.", "Reads coordinate distance without overcomplicating.", "Student subtracts signs incorrectly or includes y difference.", false],
    ["low-05", "Statistics and Probability", "measurement", 234, "Two-Way Table", "Survey:\n|        | Honors | Standard |\n| Grade 9 | 18 | 22 |\n| Grade 10| 20 | 15 |", "How many Grade 9 students?", ["40", "18", "22", "75"], "Add the Grade 9 row: 18 + 22 = 40.", "Reads row totals from a two-way table.", "Student selects a cell or grand total.", false],
    ["low-06", "Functions", "geometry", 235, "Slope", "Line through (2, -1) and (6, 7).", "What is the slope?", ["2", "8", "1/2", "4"], "Change in y is 8 and change in x is 4, so slope is 2.", "Computes rate of change from coordinates.", "Student uses vertical change only or reverses the ratio.", false],
    ["low-07", "Expressions and Equations", "multi-step-reasoning", 236, "Equivalent Expressions", "Expression:\n-3(2x - 5) + 4x", "Which is equivalent?", ["-2x + 15", "10x - 15", "-6x - 15", "2x + 15"], "Distribute -3, then combine -6x + 4x.", "Checks sign distribution and like terms.", "Student drops the negative during distribution.", false],
    ["low-08", "Geometry", "geometry", 237, "Angle Relationships", "Two parallel lines are cut by a transversal. One exterior angle is 118 degrees.", "What is a supplementary angle?", ["62 degrees", "118 degrees", "28 degrees", "242 degrees"], "Supplementary angles sum to 180, so 180 - 118 = 62.", "Applies linear-pair/supplementary reasoning.", "Student confuses congruent and supplementary angles.", false],
    ["low-09", "The Number System", "operations", 238, "Scientific Notation", "A distance is 0.00000074 meter.", "Which notation matches?", ["7.4 x 10^-7", "7.4 x 10^7", "74 x 10^-7", "0.74 x 10^-6"], "Move the decimal 7 places to get 7.4 x 10^-7.", "Represents small quantities in scientific notation.", "Student uses a positive exponent or nonstandard coefficient.", false],
    ["low-10", "Statistics and Probability", "measurement", 239, "Association", "A scatterplot shows hours practiced and audition score generally rising together, with some variation.", "Which is best?", ["positive association", "negative association", "no association", "perfect association"], "The overall trend rises but is not exact.", "Distinguishes association from perfect prediction.", "Student overstates correlation as a rule.", false],
    ["low-11", "Expressions and Equations", "multi-step-reasoning", 240, "Inequality", "Inequality:\n-2x < 10", "Which is true?", ["x > -5", "x < -5", "x > 5", "x < 5"], "Dividing by -2 reverses the inequality: x > -5.", "Checks inequality sign reversal.", "Student forgets to reverse the sign when dividing by a negative.", false],
    ["low-12", "Geometry", "geometry", 241, "Pythagorean Theorem", "Right triangle legs: 9 and 12.", "What is the hypotenuse?", ["15", "21", "108", "10.5"], "This is a 3-4-5 triangle scaled by 3.", "Uses Pythagorean triples in geometry readiness.", "Student adds legs or multiplies them.", true],
    ["med-01", "Functions", "multi-step-reasoning", 242, "Linear Model", "A club has $80 and saves $12 per week.", "Which model gives dollars after w weeks?", ["D = 80 + 12w", "D = 12 + 80w", "D = 80 - 12w", "D = 92w"], "The initial amount is 80 and the rate is 12 per week.", "Builds a linear model from context.", "Student swaps slope and intercept.", false],
    ["med-02", "Expressions and Equations", "multi-step-reasoning", 243, "System Meaning", "System:\n2x + y = 19\nx + y = 12", "What is x?", ["7", "5", "12", "31"], "Subtract the second equation from the first to get x = 7.", "Uses elimination in a simple system.", "Student solves for y or adds equations without purpose.", true],
    ["med-03", "Functions", "multi-step-reasoning", 244, "Linear vs Exponential", "Table A adds 6 each step.\nTable B multiplies by 2 each step.", "Which conclusion is valid?", ["A is linear; B is exponential.", "Both are linear.", "A is exponential; B is linear.", "Neither has a pattern."], "Constant addition is linear; constant multiplication is exponential.", "Distinguishes two growth structures.", "Student calls any pattern linear.", false],
    ["med-04", "Geometry", "geometry", 245, "Similarity", "Triangle A sides: 5, 8, 10. Triangle B is similar and its shortest side is 15.", "What is B's longest side?", ["30", "24", "20", "25"], "Scale factor is 15/5 = 3, so 10 x 3 = 30.", "Applies proportional side reasoning.", "Student adds 10 or matches the wrong side.", true],
    ["med-05", "Statistics and Probability", "measurement", 246, "Residual", "A model predicts 92. Actual value is 86.", "What is actual - predicted?", ["-6", "6", "178", "92/86"], "Residual is 86 - 92 = -6.", "Tracks residual direction.", "Student subtracts in reverse order.", false],
    ["med-06", "Expressions and Equations", "multi-step-reasoning", 247, "Factoring", "Expression:\nx^2 + 7x + 12", "Which is factored form?", ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x - 3)(x - 4)", "(x + 1)(x + 12)"], "3 and 4 multiply to 12 and add to 7.", "Assesses factoring as structure, not expansion only.", "Student chooses factors that multiply correctly but add incorrectly.", false],
    ["med-07", "Functions", "multi-step-reasoning", 248, "Intercept Meaning", "A line models account balance: B = 250 - 15m.", "What does 250 mean?", ["starting balance", "monthly decrease", "final balance", "number of months"], "The constant term is the initial value.", "Interprets intercept in a school math context.", "Student confuses initial value and rate.", false],
    ["med-08", "Geometry", "geometry", 249, "Coordinate Geometry", "A rectangle has vertices (1,2), (7,2), (7,5), (1,5).", "What is its area?", ["18", "22", "9", "30"], "Width is 6 and height is 3, so area is 18.", "Finds dimensions from coordinates.", "Student adds coordinates instead of distances.", false],
    ["med-09", "Statistics and Probability", "measurement", 250, "Correlation/Causation", "Students who join math club have higher test scores. No random assignment was used.", "Which claim is justified?", ["Math club membership is associated with higher scores.", "Math club caused all score gains.", "High scores caused the club to exist.", "There is no pattern."], "Observational data supports association, not causation.", "Protects against causal overclaiming.", "Student treats association as proof.", false],
    ["med-10", "Expressions and Equations", "multi-step-reasoning", 251, "Quadratic Features", "Function:\ny = (x - 3)^2 + 2", "What is the vertex?", ["(3, 2)", "(-3, 2)", "(3, -2)", "(-3, -2)"], "Vertex form y = (x - h)^2 + k has vertex (h,k).", "Reads vertex form of a quadratic.", "Student misses the sign change inside parentheses.", false],
    ["med-11", "Functions", "multi-step-reasoning", 252, "Domain Context", "A school sells tickets for $6 each. Revenue is R = 6t.", "Which domain makes sense?", ["whole numbers t >= 0", "all real numbers", "negative numbers only", "fractions between 0 and 1 only"], "Ticket count must be a nonnegative whole number.", "Connects domain to context constraints.", "Student treats every formula as all real numbers.", false],
    ["med-12", "Geometry", "geometry", 253, "Circle Measure", "A circle has radius 10 cm.", "Which expression gives area?", ["pi x 10^2", "2pi x 10", "pi x 20", "10^2 only"], "Area is pi r^2.", "Distinguishes area from circumference.", "Student uses circumference formula for area.", false],
    ["med-13", "The Number System", "operations", 254, "Radical Simplification", "Expression:\nsqrt(72)", "Which is equivalent?", ["6sqrt(2)", "36sqrt(2)", "8sqrt(9)", "12sqrt(6)"], "sqrt(72) = sqrt(36 x 2) = 6sqrt(2).", "Simplifies radicals using square factors.", "Student pulls out a non-square factor.", false],
    ["med-14", "Statistics and Probability", "measurement", 255, "Conditional Proportion", "Two-way table:\n|        | Passed | Did not pass |\n| Review | 32 | 8 |\n| No review | 21 | 19 |", "Among review students, what fraction passed?", ["32/40", "32/53", "40/80", "21/40"], "The review row total is 40, and 32 passed.", "Reads conditional proportion.", "Student uses column or grand total.", false],
    ["med-15", "Expressions and Equations", "multi-step-reasoning", 256, "Absolute Value", "Equation:\n|x - 4| = 9", "Which values solve it?", ["-5 and 13", "5 and -13", "4 and 9", "13 only"], "x - 4 = 9 or x - 4 = -9, so x = 13 or -5.", "Solves absolute value with two cases.", "Student gives only one branch.", false],
    ["high-01", "Functions", "multi-step-reasoning", 257, "Model Intersection", "Plan A: C = 40 + 8m.\nPlan B: C = 10 + 14m.", "When are costs equal?", ["5 months", "3 months", "6 months", "30 months"], "Set 40 + 8m = 10 + 14m; 30 = 6m.", "Compares linear models by intersection.", "Student compares only starting costs or rates.", true],
    ["high-02", "Expressions and Equations", "multi-step-reasoning", 258, "Quadratic Zeros", "Function:\ny = (x - 2)(x + 5)", "What are the zeros?", ["2 and -5", "-2 and 5", "2 and 5", "-2 and -5"], "Set each factor to zero.", "Connects factored form to zeros.", "Student reports factor constants without sign change.", false],
    ["high-03", "Geometry", "geometry", 259, "Transformation Sequence", "Point P(-2, 5) is reflected across the y-axis, then translated down 7.", "What is final point?", ["(2, -2)", "(-2, -2)", "(2, 12)", "(-9, 5)"], "Reflect to (2,5), then subtract 7 from y.", "Tracks ordered transformations.", "Student changes operations in the wrong order.", false],
    ["high-04", "Statistics and Probability", "measurement", 260, "Model Choice", "Data rises quickly, then levels near a carrying capacity.", "Which model is best?", ["nonlinear model with a leveling trend", "linear increase forever", "negative linear model", "no model because data rises"], "Leveling behavior is not a constant linear rate.", "Matches model type to pattern.", "Student uses linear for every increasing pattern.", false],
    ["high-05", "Expressions and Equations", "multi-step-reasoning", 261, "No Solution", "Equation:\n3(2x - 5) = 6x + 4", "What conclusion is correct?", ["no solution", "x = -19", "x = 19", "infinitely many solutions"], "It simplifies to 6x - 15 = 6x + 4, impossible.", "Identifies no-solution structure.", "Student forces a value after variables cancel.", false],
    ["high-06", "Geometry", "geometry", 262, "Volume Scaling", "A cube's side length triples.", "What happens to volume?", ["multiplies by 27", "multiplies by 9", "multiplies by 3", "adds 3"], "Volume scales by the cube of the linear factor: 3^3 = 27.", "Connects scale factor to volume.", "Student applies area or linear scaling.", false],
    ["high-07", "Functions", "multi-step-reasoning", 263, "Average Rate", "Function values:\nf(1)=4, f(5)=28", "What is average rate of change?", ["6", "24", "4", "7"], "Change in output is 24 over change in input 4.", "Calculates average rate of change.", "Student uses output difference only.", true],
    ["high-08", "Statistics and Probability", "measurement", 264, "Bias", "A school surveys only honors students about whether homework should be harder.", "What is the main limitation?", ["The sample may not represent all students.", "The survey has too many students.", "Homework cannot be surveyed.", "Honors students never answer."], "The sample is likely biased toward a specific group.", "Evaluates sampling generalization.", "Student trusts a sample because it is easy to collect.", false],
    ["high-09", "Expressions and Equations", "multi-step-reasoning", 265, "System Constraint", "A theater sold 120 tickets for $1,440. Adult tickets cost $15; student tickets cost $9.", "How many adult tickets?", ["60", "40", "80", "100"], "Let a be adult tickets: 15a + 9(120-a)=1440, so 6a=360.", "Uses substitution in a ticket system.", "Student solves only total tickets or total dollars.", true],
    ["high-10", "Geometry", "geometry", 266, "Similarity Proof", "Two triangles have angles 45, 55, and 80 degrees.", "What is guaranteed?", ["The triangles are similar.", "The triangles are congruent.", "The triangles have equal side lengths.", "The triangles have equal areas."], "AAA guarantees similarity, not congruence.", "Separates similarity from congruence.", "Student overclaims from angle evidence.", false],
    ["adv-01", "Statistics and Probability", "measurement", 268, "Evidence Sufficiency", "A test-prep company claims its course caused a 15-point score gain. Evidence: 20 students improved, but all were also selected because they had low starting scores and no comparison group was used.", "What is the strongest critique?", ["The evidence cannot isolate the course from regression or other factors.", "The claim is proven because scores rose.", "Low starting scores make comparison unnecessary.", "A comparison group would weaken the evidence."], "Without a comparison group, score gains may reflect other factors.", "Advanced causal evidence critique.", "Student confuses improvement with proof of cause.", true],
    ["adv-02", "Functions", "multi-step-reasoning", 270, "Model Limitation", "A linear model fits school laptop repairs for months 1-6. A new device policy begins in month 7, but the model is used for month 24.", "What is the best limitation?", ["The model may fail outside the data range after conditions change.", "Linear models never fit repair data.", "The slope must become zero.", "The prediction is exact because it is an equation."], "Extrapolation and changed conditions limit the model.", "Advanced model-scope critique.", "Student treats equations as universally valid.", true],
    ["adv-03", "Geometry", "geometry", 272, "Proof Sufficiency", "A student claims two quadrilaterals are congruent because both have perimeter 36.", "What is the best response?", ["Equal perimeter is not enough to prove congruence.", "The shapes must be congruent.", "The shapes cannot have equal area.", "Perimeter cannot be measured."], "Many noncongruent shapes can share a perimeter.", "Advanced proof sufficiency.", "Student mistakes one shared measure for full congruence.", true]
  ];

  mathItems.forEach(x => add({
    id: `math-g9-elite-${x[0]}`,
    subject: "math",
    domain: x[1],
    skillId: x[2],
    difficulty: x[0].startsWith("low") ? "Low" : x[0].startsWith("med") ? "Medium" : x[0].startsWith("high") ? "High" : "Advanced",
    ritDifficulty: x[3],
    cognitiveLevel: x[4],
    stimulus: x[5],
    question: x[6],
    options: x[7],
    answer: 0,
    explanation: x[8],
    itemPurpose: x[9],
    misconception: x[10],
    calculator: x[11],
    killer: x[0].startsWith("adv"),
    stimulusType: x[5].includes("|") ? "table/data display" : x[5].includes("Point") || x[5].includes("Line") ? "coordinate model" : "context/model",
    evidenceDemand: x[0].startsWith("adv") ? "model/evidence critique" : x[0].startsWith("high") ? "multi-step transfer" : "targeted skill diagnosis",
    distractorRationale: "Distractors separate computation error, model mismatch, sign error, and overgeneralized algebra rules."
  }));

  const readingPassages = [
    ["rhetoric", "Informational Text", "Passage:\nIn an editorial about school start times, the writer begins with a student's account of falling asleep on the bus, then cites a study linking later starts with fewer absences. The writer admits that sports schedules would need adjustment but argues that health and attendance should guide the decision. The editorial ends by asking the school board to pilot the change for one semester before making it permanent.", [
      ["Low", 222, "main-idea-summary", "What is the central argument?", ["The school should pilot later start times.", "Sports schedules should never change.", "Students should stop riding buses.", "Absences are unrelated to sleep."], "The editorial asks for a one-semester pilot."],
      ["Low", 223, "vocabulary-context", "What does pilot mean here?", ["try on a limited basis", "fly an airplane", "cancel permanently", "measure a bus"], "The change would be tested for one semester before becoming permanent."],
      ["Medium", 232, "authors-purpose", "Why include the sleeping student?", ["To create a concrete human example before data.", "To prove all students sleep on buses.", "To replace the study evidence.", "To criticize bus drivers."], "The anecdote makes the issue concrete."],
      ["High", 246, "text-evidence", "Which detail best shows balanced reasoning?", ["The writer admits sports schedules would need adjustment.", "The writer mentions a bus.", "The editorial has an ending.", "The study is cited after the story."], "Acknowledging a tradeoff makes the argument more balanced."],
      ["Medium", 258, "text-evidence", "What evidence would most strengthen the pilot proposal?", ["Attendance and health data before and after the pilot.", "A list of team uniforms.", "One student's alarm clock brand.", "The school board room size."], "Before-and-after pilot data would test the proposed change."]
    ]],
    ["migration", "Paired Passage Reasoning", "Source A:\nA historian argues that factory jobs pulled rural families into cities during industrialization.\n\nSource B:\nA diary from a farm family describes crop failures and debts that made staying difficult.\n\nSource C:\nA city record shows a sharp increase in new workers after a rail line lowered travel costs.", [
      ["Low", 224, "main-idea-summary", "What topic connects the sources?", ["migration from farms to cities", "school sports", "ocean trade only", "ancient writing systems"], "All sources address movement toward cities."],
      ["Medium", 234, "paired-passage-set", "How do A and B differ?", ["A emphasizes pull factors; B emphasizes push factors.", "Both focus only on rail costs.", "A is a diary; B is a map.", "Neither explains migration."], "Jobs pull migrants; crop failure and debt push them."],
      ["Medium", 235, "text-evidence", "Which source adds transportation evidence?", ["Source C", "Source A", "Source B", "Sources A and B only"], "Source C mentions a rail line lowering travel costs."],
      ["High", 248, "inference", "Which explanation uses all sources?", ["Migration increased when push factors, pull factors, and cheaper travel combined.", "Factories alone explain every move.", "Crop failures prevented all travel.", "Rail lines removed jobs."], "All three sources contribute a multi-cause explanation."],
      ["Medium", 260, "text-evidence", "What claim would be too strong?", ["Every rural family moved only because of factory wages.", "Factory jobs attracted some families.", "Crop failures made staying harder.", "Rail costs affected movement."], "The sources support multiple causes, not one exclusive cause."]
    ]],
    ["poem", "Literary Text", "Passage:\nThe speaker describes a neighborhood tree cut down before dawn. The stump is 'a clock with no hands,' and the street feels wider but less familiar. Neighbors walk faster past the empty space. The final line says, 'We gained the sky, but misplaced the shade.'", [
      ["Low", 225, "vocabulary-context", "What does misplaced suggest?", ["lost or failed to keep", "carefully organized", "painted brightly", "measured exactly"], "The line contrasts gaining sky with losing shade."],
      ["Medium", 236, "inference", "What feeling does the speaker convey?", ["loss mixed with change", "complete celebration", "anger at all neighbors", "confusion about clocks"], "The street is wider but less familiar."],
      ["Medium", 237, "text-evidence", "Which image best supports loss?", ["a clock with no hands", "the street feels wider", "before dawn", "neighbors walk"], "A clock with no hands suggests something stopped or missing."],
      ["High", 250, "authors-purpose", "What is the effect of the final line?", ["It shows tradeoff through contrast.", "It explains tree biology.", "It names every neighbor.", "It ends the poem with a joke."], "The line contrasts sky gained with shade lost."],
      ["High", 251, "inference", "Which theme fits best?", ["Progress can bring loss as well as gain.", "Trees always block communities.", "Wider streets solve all problems.", "Memory depends only on clocks."], "The poem treats change as mixed, not purely positive."]
    ]],
    ["algorithm", "Informational Text", "Passage:\nA school uses software to flag students who may need tutoring. The system identifies patterns in missing homework, quiz scores, and attendance. Counselors warn that the model should start conversations, not replace them, because it cannot know whether a student missed homework due to confusion, illness, family responsibilities, or unreliable internet.", [
      ["Low", 226, "main-idea-summary", "What is the main idea?", ["The model can help identify needs but has limits.", "Software knows every student's reason.", "Tutoring should be canceled.", "Attendance data is never useful."], "The passage presents usefulness and limits."],
      ["Medium", 238, "text-evidence", "Which detail shows the model's limitation?", ["It cannot know why homework was missed.", "It uses quiz scores.", "It flags students.", "Counselors exist."], "Reasons for missing homework require context beyond data patterns."],
      ["Medium", 239, "authors-purpose", "Why list illness, family duties, and internet problems?", ["To show one pattern can have different causes.", "To prove homework should be removed.", "To define quiz scores.", "To criticize every student."], "The list explains why conversation is needed."],
      ["High", 252, "inference", "What should schools avoid?", ["Treating a risk flag as a full explanation.", "Using any data at all.", "Talking with students.", "Offering tutoring."], "The passage says the model should start conversations."],
      ["Advanced", 262, "text-evidence", "What evidence would best evaluate the system?", ["Whether flagged students' actual needs matched counselor interviews.", "The software logo.", "A list of classroom posters.", "One student's username."], "Comparing flags with interviews tests accuracy and limits.", true]
    ]],
    ["novel", "Literary Text", "Passage:\nWhen Amara returned to her old school, the hallway mural was gone. In its place was a glass trophy case. Everyone praised the renovation, but Amara paused where her class had painted a blue river. She smiled politely when the principal asked what she thought, then later sketched the missing river in the margin of her notebook.", [
      ["Low", 227, "inference", "What does Amara miss?", ["the old mural", "the trophy case", "the renovation speech", "the notebook margin"], "She pauses where the mural was and sketches the river."],
      ["Medium", 240, "text-evidence", "Which detail reveals her real feeling?", ["She sketches the missing river later.", "The trophy case is glass.", "People praise the renovation.", "The principal asks a question."], "The sketch shows private attachment."],
      ["Medium", 241, "authors-purpose", "Why contrast polite smile and later sketch?", ["To show a difference between public response and private feeling.", "To prove Amara dislikes all principals.", "To describe glass carefully.", "To explain how murals are painted."], "Her outward politeness differs from her private action."],
      ["High", 253, "inference", "Which theme fits?", ["Change can erase shared memory even when it looks like improvement.", "Trophies are always bad.", "Art should never change.", "Notebooks cause sadness."], "The renovation is praised, but Amara feels loss."],
      ["High", 254, "text-evidence", "Which phrase best supports the theme?", ["where her class had painted a blue river", "glass trophy case", "smiled politely", "old school"], "The class-made mural links the space to shared memory."]
    ]],
    ["climate", "Informational Text", "Passage:\nA report says a city should plant street trees to reduce heat. It cites satellite images showing treeless blocks are hotter than shaded blocks. A critic notes that the hotter blocks also have more traffic and darker pavement. The report recommends a pilot program that measures temperature before and after planting on similar blocks.", [
      ["Low", 228, "main-idea-summary", "What is the report's recommendation?", ["Plant trees and measure effects in a pilot.", "Remove all streets.", "Ignore pavement color.", "Ban satellite images."], "The report recommends a measured pilot program."],
      ["Medium", 242, "text-evidence", "What concern does the critic raise?", ["Other factors may explain some heat differences.", "Trees cannot make shade.", "Satellite images are always false.", "Traffic cools streets."], "Traffic and darker pavement could affect heat."],
      ["Medium", 243, "authors-purpose", "Why use similar blocks in the pilot?", ["To make the comparison fairer.", "To make trees grow faster.", "To avoid measuring temperature.", "To remove all traffic."], "Similar blocks reduce alternative explanations."],
      ["High", 255, "inference", "What kind of reasoning is central?", ["separating correlation from cause", "memorizing tree species", "describing city history only", "counting satellites"], "The issue is whether trees cause cooler temperatures."],
      ["Advanced", 264, "text-evidence", "What result would most support the plan?", ["Similar planted blocks cool more than similar unplanted blocks.", "Hot blocks have roads.", "One tree looks healthy.", "The city has satellites."], "A controlled before/after comparison supports causation.", true]
    ]],
    ["archive", "Informational Text", "Passage:\nA student researching school history found yearbooks, meeting notes, cafeteria menus, and letters from families. Alone, each item seemed ordinary. Together, they showed a shift: the school became more multilingual, clubs expanded from sports to robotics and debate, and lunch menus began reflecting families from more countries.", [
      ["Low", 229, "vocabulary-context", "What is an archive?", ["a collection of records", "a cafeteria recipe", "a sports award", "a debate rule"], "The passage lists historical records."],
      ["Low", 230, "text-evidence", "Which detail shows cultural change?", ["the school became more multilingual", "clubs expanded", "yearbooks existed", "notes were found"], "More languages indicate cultural change."],
      ["Medium", 244, "main-idea-summary", "What is the central idea?", ["Different records together reveal school change.", "Menus are the only useful records.", "Robotics caused all change.", "Yearbooks are never historical."], "The passage says ordinary items together show a shift."],
      ["High", 256, "inference", "Why use multiple types of records?", ["They reveal a fuller pattern than one record alone.", "They prove every family agreed.", "They remove interpretation.", "They make context unnecessary."], "The passage emphasizes combined evidence."],
      ["Advanced", 266, "text-evidence", "What claim is too strong?", ["Every family came from a different country.", "The school became more multilingual.", "Clubs expanded.", "Menus changed over time."], "The evidence supports increased diversity, not a claim about every family.", true]
    ]],
    ["experiment", "Informational Text", "Passage:\nA biology class tested whether music affects plant growth. One group of plants received classical music, another received no music, but the music group was also placed closer to the window. The class found the music group grew taller. Their teacher asked them to redesign the experiment before making a conclusion.", [
      ["Low", 231, "main-idea-summary", "What problem affects the experiment?", ["More than one variable changed.", "No plants were used.", "Music cannot be measured.", "Windows do not give light."], "Music and window distance both changed."],
      ["Low", 232, "vocabulary-context", "What does redesign mean?", ["plan again", "erase all data", "draw a poster", "change the plant species only"], "The teacher asks for a better experiment."],
      ["Low", 245, "text-evidence", "Which detail creates a confound?", ["the music group was closer to the window", "plants grew taller", "the class tested music", "there was a no-music group"], "Window distance affects light, another variable."],
      ["Medium", 246, "inference", "Why is the conclusion weak?", ["Light exposure could explain the growth.", "Plants cannot grow in classrooms.", "Music always stops growth.", "The no-music group proves nothing can be tested."], "The changed light condition is an alternative explanation."],
      ["High", 257, "authors-purpose", "Why does the teacher ask for redesign?", ["To isolate the effect of music.", "To avoid using evidence.", "To prove the students are wrong before testing.", "To remove the plants."], "A fair redesign would control window distance."]
    ]]
  ];

  readingPassages.forEach(([code, domain, stimulus, qs]) => qs.forEach((q, i) => add({
    id: `reading-g9-elite-${code}-${i + 1}`,
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
    itemPurpose: `${q[2]} diagnosis in a Grade 9 academic source set.`,
    misconception: "Student chooses an unsupported overclaim, a detail-only answer, or a claim not constrained by the text.",
    stimulusType: domain === "Paired Passage Reasoning" ? "multi-source set" : "composite passage",
    evidenceDemand: q[0] === "Advanced" ? "evidence sufficiency or overclaim detection" : q[0] === "High" ? "inference with textual constraint" : "direct text-grounded reasoning",
    distractorRationale: "Distractors target unsupported inference, source confusion, rhetorical oversimplification, and evidence weakness."
  })));

  const languageItems = [
    ["low-01", "Language Mechanics", "mechanics", 230, "Editing sentence:\nAlthough the proposal was ambitious the committee approved a trial.", "Where should a comma be added?", ["after ambitious", "after proposal", "after committee", "no comma is needed"], "The introductory dependent clause ends at ambitious.", "Punctuation in complex sentences.", "Student marks a noun phrase instead of the full clause."],
    ["low-02", "Language Grammar", "grammar-usage", 231, "Sentence:\nThe list of revisions were submitted yesterday.", "Which verb is correct?", ["was", "were", "are", "be"], "The subject is list, which is singular.", "Subject-verb agreement with interrupting phrase.", "Student agrees with the nearer plural noun revisions."],
    ["low-03", "Sentence Structure", "sentence-structure", 232, "Draft:\nThe evidence was interesting, it did not prove the claim.", "Which revision fixes the error?", ["The evidence was interesting, but it did not prove the claim.", "The evidence was interesting, it did not.", "Interesting evidence did claim.", "No revision is needed."], "A comma plus coordinating conjunction fixes the comma splice.", "Comma splice repair.", "Student thinks comma alone can join independent clauses."],
    ["low-04", "Writing Style", "revision", 233, "Draft:\nThe chart went up a bunch after the program.", "Which revision is most precise?", ["The chart shows a 19% increase after the program began.", "The chart got really big.", "The program was a thing.", "The chart was nice."], "The revision uses measurable, formal language.", "Precise academic wording.", "Student chooses informal intensity instead of evidence language."],
    ["low-05", "Writing Organization", "paragraph-organization", 234, "A paragraph argues for later library hours. One sentence describes the history of pencils.", "What should the writer do?", ["Remove it unless it supports the library argument.", "Use it as the thesis.", "Repeat it in every paragraph.", "Make the essay about pencils."], "The pencil sentence is irrelevant.", "Maintains paragraph focus.", "Student keeps interesting but unsupported information."],
    ["low-06", "Language Mechanics", "mechanics", 235, "Sentence:\nThe report studied three factors cost safety and access.", "Which punctuation is best?", ["The report studied three factors: cost, safety, and access.", "The report studied: three factors cost safety and access.", "The report, studied three factors cost safety and access.", "The report studied three factors; cost safety and access."], "A colon introduces the list and commas separate items.", "Colon and series punctuation.", "Student uses punctuation without list structure."],
    ["low-07", "Language Grammar", "grammar-usage", 236, "Sentence:\nEach of the researchers share their notes.", "Which revision is most formal?", ["Each of the researchers shares his or her notes.", "Each of the researchers share his notes.", "Each researchers shares their notes.", "Each of the researchers sharing notes."], "Each is singular in formal usage.", "Pronoun and verb agreement.", "Student follows the plural object researchers."],
    ["low-08", "Sentence Structure", "sentence-structure", 237, "Combine:\nThe prototype failed. The team revised the design.", "Which shows cause and effect?", ["Because the prototype failed, the team revised the design.", "Although the prototype failed, the team revised because.", "The prototype and team.", "The team revised, but because prototype."], "Because correctly signals cause.", "Logical sentence combining.", "Student chooses a connector that blurs logic."],
    ["low-09", "Writing Development", "revision", 238, "Claim:\nThe school should add peer tutoring.\nEvidence:\nStudents attending tutoring improved quiz averages by 11 points.", "Which explanation connects the evidence?", ["The improvement suggests tutoring may support academic performance.", "Tutoring rooms have desks.", "Eleven is a number.", "Quiz averages are written down."], "The explanation links score improvement to the claim.", "Evidence-to-claim reasoning.", "Student restates context without reasoning."],
    ["low-10", "Writing Style", "revision", 239, "Audience: principal.\nDraft:\nOur hallway traffic is super annoying.", "Which revision fits?", ["Crowded hallways cause delays between classes.", "Hallways are the worst.", "Everyone is annoyed forever.", "Traffic is a car thing."], "The revision is formal and consequence-based.", "Audience-appropriate tone.", "Student uses emotional wording instead of precise impact."],
    ["low-11", "Writing Organization", "paragraph-organization", 240, "Sentences:\n1. Finally, the committee published results.\n2. Members reviewed the survey data.\n3. The school collected responses.", "Best order?", ["3, 2, 1", "1, 2, 3", "2, 1, 3", "1, 3, 2"], "Collection comes before review and publication.", "Chronological organization.", "Student follows signal words without logic."],
    ["low-12", "Language Mechanics", "mechanics", 241, "Sentence:\nThe article titled energy choices for cities was assigned.", "Which title capitalization is best?", ["Energy Choices for Cities", "energy choices for cities", "Energy choices for cities", "energy Choices For Cities"], "Major words in a title are capitalized.", "Title capitalization.", "Student capitalizes randomly or undercapitalizes."],
    ["med-01", "Writing Development", "revision", 242, "Claim:\nThe school should reduce food waste.\nEvidence:\nA waste audit found 38% of cafeteria trash was unopened food.", "Which explanation is strongest?", ["The audit suggests planning portions and donation systems could reduce waste.", "Cafeterias have tables.", "Trash cans are common.", "Food is served at lunch."], "The explanation connects data to a practical solution.", "Data-based development.", "Student chooses a true but irrelevant detail."],
    ["med-02", "Writing Revision", "revision", 243, "Claim:\nOnline textbooks are always better because my friend likes them.", "What revision is most needed?", ["Qualify the claim and add broader evidence about learning outcomes.", "Remove all reasons.", "Add exclamation points.", "Keep only the friend's opinion."], "One opinion cannot support an absolute claim.", "Claim qualification.", "Student treats anecdote as universal evidence."],
    ["med-03", "Writing Organization", "paragraph-organization", 244, "A counterclaim appears for the first time in the conclusion.", "Best revision?", ["Address the counterclaim in the body before the conclusion.", "Delete the thesis.", "Use no evidence.", "Make the conclusion longer only."], "Counterclaims need development before final synthesis.", "Argument organization.", "Student adds complexity too late."],
    ["med-04", "Sentence Structure", "sentence-structure", 245, "Draft:\nWalking through the lab, the microscope caught Elena's attention.", "Which revision is clearest?", ["Walking through the lab, Elena noticed the microscope.", "The microscope walked through the lab.", "Elena's attention walked.", "Walking, the lab noticed Elena."], "Elena is the person walking.", "Modifier placement.", "Student leaves modifier attached to the wrong noun."],
    ["med-05", "Writing Style", "revision", 246, "Purpose: explain a failed trial to science fair judges.", "Which tone is best?", ["The trial did not support the hypothesis because the control temperature changed.", "The trial was a total disaster.", "Science was weird.", "The judges should ignore it."], "The best tone is precise and objective.", "Formal scientific tone.", "Student chooses emotion over analysis."],
    ["med-06", "Language Grammar", "grammar-usage", 247, "Sentence:\nNeither the coach nor the players was prepared.", "Which revision is correct?", ["Neither the coach nor the players were prepared.", "Neither the coach nor the players is prepared.", "Neither coach nor players be prepared.", "No verb is needed."], "With neither/nor, the verb agrees with the nearer subject players.", "Agreement in compound subject.", "Student overapplies singular neither."],
    ["med-07", "Writing Development", "revision", 248, "Evidence:\nIn a survey, 64% of students said bus delays made them late at least twice last month.", "Which claim fits best?", ["Improving bus reliability could reduce late arrivals.", "All students dislike buses.", "Students should stop taking buses.", "Bus colors affect attendance."], "The data directly concerns lateness from bus delays.", "Evidence-fit reasoning.", "Student overstates or shifts the claim."],
    ["med-08", "Writing Organization", "paragraph-organization", 249, "A paragraph begins with a claim about lab safety.", "Which sentence best follows?", ["One concern is that broken goggles were reported in three classes.", "The cafeteria sells fruit.", "Some students enjoy soccer.", "The school has lockers."], "The sentence develops the safety claim with evidence.", "Coherent development.", "Student drifts to unrelated school details."],
    ["med-09", "Language Mechanics", "mechanics", 250, "Sentence:\nThe teacher said revision begins with evidence.", "Which uses quotation marks correctly?", ["The teacher said, \"Revision begins with evidence.\"", "\"The teacher said, revision begins with evidence.\"", "The teacher said revision \"begins with evidence.\"", "The teacher said, Revision begins with evidence."], "Exact spoken words belong inside quotation marks.", "Quotation punctuation.", "Student quotes narration or misses capitalization."],
    ["med-10", "Writing Style", "revision", 251, "Draft:\nThe author makes the reader feel stuff.", "Which revision is strongest?", ["The author builds tension through short sentences and delayed information.", "The author does many things.", "The reader has feelings.", "Stuff happens in the text."], "The revision names a technique and effect.", "Literary analysis precision.", "Student uses vague response language."],
    ["med-11", "Sentence Structure", "sentence-structure", 252, "Goal: keep list parallel.", "Which is parallel?", ["The course teaches research, drafting, and revision.", "The course teaches research, to draft, and revising.", "The course teaches researched, draft, and revision.", "The course teaches how to research, drafting, and revise."], "The list uses parallel noun forms.", "Parallel structure.", "Student mixes grammatical forms."],
    ["med-12", "Writing Development", "revision", 253, "Counterclaim:\nA later start may complicate sports schedules.", "Which response is strongest?", ["Schools could adjust practice times while measuring attendance and sleep benefits.", "Sports are boring.", "Schedules never matter.", "The counterclaim proves later starts are bad."], "It answers the concern while preserving the claim.", "Counterclaim response.", "Student dismisses instead of addressing."],
    ["med-13", "Writing Revision", "revision", 254, "Claim:\nUniforms improve focus.\nEvidence:\nThe uniforms are navy and white.", "What is the problem?", ["The evidence does not show improved focus.", "The evidence is too numerical.", "Colors prove focus.", "The claim is about lunch."], "Color information is irrelevant to focus.", "Evidence relevance.", "Student accepts topic-adjacent evidence."],
    ["med-14", "Writing Organization", "paragraph-organization", 255, "Readers are unfamiliar with 'watershed.'", "Where should the definition appear?", ["near the beginning before detailed evidence", "only after the conclusion", "inside an unrelated anecdote", "nowhere"], "Key terms should be defined before evidence.", "Audience-aware organization.", "Student delays necessary context."],
    ["med-15", "Language Grammar", "grammar-usage", 256, "Sentence:\nThe results of the survey indicates a trend.", "Which verb is correct?", ["indicate", "indicates", "indicating", "be indicating"], "The subject results is plural.", "Agreement with prepositional phrase.", "Student agrees with nearby singular survey."],
    ["high-01", "Writing Development", "revision", 257, "Argument:\nThe school should ban phones.\nEvidence:\nOne teacher saw two students checking phones during one lesson.", "Strongest critique?", ["The evidence is too limited for a schoolwide ban.", "The evidence proves all students are distracted.", "The claim has no topic.", "Teachers cannot observe lessons."], "One observation cannot justify a broad policy.", "Evidence sufficiency.", "Student overgeneralizes from a small example."],
    ["high-02", "Writing Organization", "paragraph-organization", 258, "An essay gives causes of water scarcity, then tells a vacation story.", "Best revision?", ["Remove or connect the story to the scarcity analysis.", "Repeat the vacation story.", "Delete all causes.", "Change topic to tourism."], "Irrelevant narrative disrupts analysis.", "Analytical coherence.", "Student keeps engaging but unsupported content."],
    ["high-03", "Sentence Structure", "sentence-structure", 259, "Draft:\nAlthough the study was small, and the results were promising.", "Which is complete?", ["Although the study was small, the results were promising.", "Although the study was small, and.", "The results, although.", "Study small promising."], "A dependent clause needs a complete main clause.", "Complex sentence repair.", "Student mistakes length for completeness."],
    ["high-04", "Writing Style", "revision", 260, "Audience: city council. Purpose: oppose cutting bus service.", "Which sentence is strongest?", ["Reducing evening buses would make it harder for shift workers to return home safely.", "Bus cuts are terrible.", "Council people should ride buses.", "Buses are big."], "It is specific, formal, and consequence-based.", "Civic persuasive tone.", "Student chooses emotional intensity over reasoning."],
    ["high-05", "Writing Development", "revision", 261, "Claim:\nThe new schedule caused higher scores.\nEvidence:\nScores rose, but tutoring also began.", "What should the writer add?", ["Evidence separating the schedule's effect from tutoring.", "More adjectives.", "A claim that tutoring never matters.", "No data."], "Tutoring is a possible confounding factor.", "Causal evidence qualification.", "Student ignores alternative causes."],
    ["high-06", "Language Mechanics", "mechanics", 262, "Sentence:\nThe team revised the plan however, the deadline stayed the same.", "Which punctuation is best?", ["The team revised the plan; however, the deadline stayed the same.", "The team revised; the plan however.", "The team revised the plan, however the deadline stayed.", "The team revised the plan however the deadline stayed."], "However between independent clauses needs a semicolon before and comma after.", "Conjunctive adverb punctuation.", "Student uses however like a coordinating conjunction."],
    ["high-07", "Writing Organization", "paragraph-organization", 263, "Conclusion needed for essay on school energy use.", "Which is strongest?", ["By measuring usage and upgrading lighting, the school can reduce costs and emissions.", "Energy is a word.", "This is my essay.", "The end."], "The sentence synthesizes action and consequence.", "Conclusion synthesis.", "Student merely restates topic."],
    ["high-08", "Writing Revision", "revision", 264, "Draft:\nEveryone knows group projects are bad.", "Which revision is defensible?", ["Poorly structured group projects can create uneven workloads.", "Group projects are the worst.", "Nobody learns in groups.", "All teachers love chaos."], "The revision is specific and arguable.", "Claim qualification.", "Student uses sweeping language."],
    ["high-09", "Writing Development", "revision", 265, "Claim:\nFour-day weeks help students.\nEvidence:\n72% of students prefer them.", "What is missing?", ["Evidence about learning, attendance, or well-being outcomes.", "The survey color.", "A longer title.", "A claim about lunch."], "Preference does not prove benefit.", "Preference vs outcome evidence.", "Student equates liking with effectiveness."],
    ["high-10", "Sentence Structure", "sentence-structure", 266, "Goal: emphasize contrast.", "Which sentence is best?", ["Although the prototype was inexpensive, it failed the safety test.", "Because the prototype was inexpensive, it failed.", "The prototype was inexpensive and inexpensive.", "Prototype safety inexpensive."], "Although signals contrast between cost and safety.", "Logical subordination.", "Student uses cause when contrast is needed."],
    ["adv-01", "Writing Revision", "revision", 268, "Argument:\nLaptops improve learning.\nEvidence:\nStudents prefer typing to handwriting.", "What revision is needed?", ["Add evidence about learning outcomes, not only preference.", "Remove all evidence.", "Say preference proves learning.", "Change topic to sports."], "Preference evidence is insufficient for a learning claim.", "Evidence sufficiency ceiling check.", "Student treats preference as proof of achievement."],
    ["adv-02", "Writing Organization", "paragraph-organization", 270, "An essay introduces a counterclaim for the first time in the conclusion.", "Best revision?", ["Introduce and respond to the counterclaim before the conclusion.", "Delete the main claim.", "Put evidence after works cited.", "Use only questions as evidence."], "The counterclaim must be developed before final synthesis.", "Argument architecture ceiling check.", "Student adds complexity without developing it."],
    ["adv-03", "Writing Development", "revision", 272, "Claim:\nA tutoring app caused score gains.\nEvidence:\nScores rose, but students also received extra teacher support.", "Strongest critique?", ["The evidence does not rule out teacher support as another cause.", "The app is proven by timing alone.", "Apps cannot affect learning.", "Scores cannot be measured."], "A confounding support prevents clean causal attribution.", "Causal evidence critique.", "Student mistakes sequence for causation."]
  ];

  languageItems.forEach(x => add({
    id: `language-g9-elite-${x[0]}`,
    subject: "language",
    domain: x[1],
    skillId: x[2],
    difficulty: x[0].startsWith("low") ? "Low" : x[0].startsWith("med") ? "Medium" : x[0].startsWith("high") ? "High" : "Advanced",
    ritDifficulty: x[3],
    cognitiveLevel: x[1],
    stimulus: x[4],
    question: x[5],
    options: x[6],
    answer: 0,
    explanation: x[7],
    itemPurpose: x[8],
    misconception: x[9],
    killer: x[0].startsWith("adv"),
    stimulusType: "editing/writing context",
    evidenceDemand: x[0].startsWith("adv") ? "writing-decision ceiling check" : x[0].startsWith("high") ? "context-sensitive revision" : "targeted editing decision",
    distractorRationale: "Distractors isolate grammar overgeneralization, weak evidence, informal tone, and organization errors."
  }));

  const scienceTemplates = [
    ["Life Science", "life-science", "Data:\nFertilizer runoff increases algae. Dissolved oxygen drops from 8 mg/L to 3 mg/L. Fish deaths rise.", "Which explanation fits?", ["Algae blooms can reduce oxygen, harming fish.", "Fertilizer directly creates more oxygen.", "Fish deaths cause fertilizer runoff.", "Algae are not living things."], "The pattern supports eutrophication effects.", "CER from ecosystem data.", "Student reverses cause and effect."],
    ["Physical Science", "physical-science", "Cart data:\n| Cart | Mass | Force | Acceleration |\n| A | 2 kg | 12 N | 6 m/s^2 |\n| B | 6 kg | 12 N | 2 m/s^2 |", "Which claim is supported?", ["With the same force, greater mass gives lower acceleration.", "Mass has no effect.", "Cart B had greater force.", "Both accelerated equally."], "Force is controlled, and higher mass has lower acceleration.", "Newton's second law from data.", "Student ignores controlled variables."],
    ["Earth and Space Science", "physical-science", "A city replaces fields with pavement. Rainfall stays similar, but stream levels rise faster after storms.", "What explains this?", ["Less infiltration increases runoff.", "Pavement absorbs all rain.", "Rainfall doubled.", "Streams cannot respond to land use."], "Impervious surfaces reduce infiltration.", "Human impact on water systems.", "Student attributes flooding only to rainfall."],
    ["Life Science", "claim-evidence-reasoning", "A mutation changes a membrane protein used to move glucose into cells.", "What is most directly affected?", ["cell transport", "planet orbit", "rock formation", "wind direction"], "Membrane proteins affect transport across the cell membrane.", "Structure-function in cells.", "Student jumps to unrelated systems."],
    ["Physical Science", "claim-evidence-reasoning", "Thermal data after 20 minutes:\nInsulated cup: -6 C\nPaper cup: -19 C\nMetal cup: -24 C", "Which claim is best supported?", ["The insulated cup slowed thermal transfer most.", "Metal kept water warmest.", "No energy transferred.", "All cups performed the same."], "The insulated cup had the smallest temperature drop.", "CER from comparative thermal data.", "Student reads larger drop as better insulation."],
    ["Life Science", "life-science", "Dark beetles survive better after tree bark darkens. After generations, dark beetles become more common.", "Which process is shown?", ["natural selection", "condensation", "magnetism", "erosion"], "A heritable survival advantage becomes more common.", "Population change over generations.", "Student treats individuals as choosing traits."],
    ["Earth and Space Science", "claim-evidence-reasoning", "A climate model uses elevation and ocean temperature but ignores recent deforestation.", "What limitation matters?", ["It may miss land-cover effects on runoff and temperature.", "Models cannot use elevation.", "Deforestation cannot affect systems.", "All models are exact."], "Missing land-cover variables limit predictions.", "Model limitation in Earth systems.", "Student treats partial models as complete."],
    ["Physical Science", "experimental-design", "Battery test:\nBrand A is tested in a flashlight. Brand B is tested in a remote control.", "What is confounded?", ["battery brand and device type", "only brand changed", "no dependent variable exists", "devices never use batteries"], "Different devices use energy differently.", "Fair testing and controls.", "Student misses controlled-variable requirements."],
    ["Life Science", "life-science", "A population has variation in beak size. A drought leaves mostly large hard seeds.", "Which birds are likely favored?", ["birds with larger, stronger beaks", "birds with no beaks", "all birds equally", "birds that change beaks by choice"], "The environment favors traits suited to available food.", "Selection pressure reasoning.", "Student thinks traits change by need."],
    ["Physical Science", "physical-science", "A wave's amplitude increases while frequency stays the same.", "What changes?", ["energy carried by the wave increases", "pitch must become zero", "the wave stops moving", "frequency doubles"], "Greater amplitude generally means more energy.", "Wave property reasoning.", "Student confuses amplitude and frequency."],
    ["Earth and Space Science", "physical-science", "Rock layers in two regions contain the same index fossil.", "What can scientists infer?", ["The layers may be similar in age.", "The rocks are currently molten.", "Fossils cannot compare layers.", "The layers are from the future."], "Index fossils help correlate rock layers.", "Geologic correlation.", "Student treats fossils as unrelated details."],
    ["Physical Science", "claim-evidence-reasoning", "A sealed reaction has 42 g before and 42 g after.", "Which principle is shown?", ["conservation of mass", "mass disappearance", "gravity stopping reaction", "energy becoming all matter"], "In a closed system, mass is conserved.", "Matter conservation.", "Student expects mass to vanish when substances change."]
  ];

  [["Low", 12, 226], ["Medium", 15, 238], ["High", 10, 252], ["Advanced", 3, 266]].forEach(([difficulty, count, base]) => {
    for (let i = 0; i < count; i++) {
      const t = scienceTemplates[i % scienceTemplates.length];
      add({
        id: `science-g9-elite-${difficulty.toLowerCase()}-${String(i + 1).padStart(2, "0")}`,
        subject: "science",
        domain: t[0],
        skillId: difficulty === "Advanced" ? "claim-evidence-reasoning" : t[1],
        difficulty,
        ritDifficulty: base + i,
        cognitiveLevel: difficulty === "Advanced" ? "Model and Evidence Critique" : t[0],
        stimulus: t[2],
        question: difficulty === "Advanced" ? "What is the strongest scientific critique?" : t[3],
        options: difficulty === "Advanced" ? [t[4][0], "The evidence proves every version of the claim.", "No missing variable could matter.", "The model should be accepted without limits."] : t[4],
        answer: 0,
        explanation: t[5],
        itemPurpose: t[6],
        misconception: t[7],
        killer: difficulty === "Advanced",
        stimulusType: t[2].includes("|") || t[2].includes("Data") ? "data/model stimulus" : "scientific scenario",
        evidenceDemand: difficulty === "Advanced" ? "model limitation or evidence sufficiency" : difficulty === "High" ? "multi-variable scientific reasoning" : "DCI plus SEP diagnosis",
        distractorRationale: "Distractors target variable confusion, causal reversal, model absolutism, and unsupported CER."
      });
    }
  });

  const socialTemplates = [
    ["Geography", "source-analysis", "Map evidence:\nManufacturing districts cluster near ports and rail lines; new housing grows along commuter routes.", "Which inference is best?", ["Transportation access shaped industry and settlement.", "Factories avoid transportation.", "Housing never follows jobs.", "Ports affect only weather."], "The map links transport to industry and housing.", "Spatial reasoning from map patterns.", "Student lists a feature without interpreting pattern."],
    ["Civics", "source-analysis", "A city limits nighttime protests near hospitals but allows daytime permits in public squares.", "What civic question matters most?", ["Does the rule balance public safety with rights?", "Does the rule change supply curves?", "Can hospitals vote?", "Are public squares private property?"], "Civic reasoning weighs safety against rights.", "Rights and policy tradeoff.", "Student treats safety as automatically ending rights."],
    ["Economics", "economics", "A drought reduces coffee supply while demand stays steady.", "What is likely?", ["coffee prices rise", "supply increases", "demand disappears", "prices become zero"], "Lower supply with steady demand tends to raise price.", "Supply-demand reasoning.", "Student confuses supply with demand."],
    ["History", "source-analysis", "Source A is a government speech praising a policy. Source B is a worker letter criticizing the same policy.", "Why compare them?", ["to evaluate perspective and bias", "to choose the longer source", "to prove both are false", "to avoid context"], "Different positions shape descriptions.", "Sourcing and perspective.", "Student accepts one source at face value."],
    ["Geography", "source-analysis", "A coastal city builds seawalls that protect downtown but increase erosion on nearby beaches.", "Which idea is shown?", ["Human changes can shift environmental effects.", "Seawalls stop all waves everywhere.", "Beaches cannot erode.", "Downtowns create tides."], "A local solution can move effects elsewhere.", "Human-environment interaction.", "Student sees only the local benefit."],
    ["Civics", "source-analysis", "A court rules that a popular law violates the constitution.", "Which principle is shown?", ["judicial review", "scarcity", "specialization", "absolute monarchy"], "Courts can review laws against constitutional limits.", "Constitutional checks.", "Student equates popularity with constitutionality."],
    ["Economics", "economics", "A city offers tax breaks for a factory. It creates jobs but uses large amounts of water during drought.", "Strongest policy question?", ["Do job benefits outweigh resource and environmental costs?", "Can jobs exist without workers?", "Should water be ignored?", "Do taxes create rainfall?"], "Policy reasoning weighs benefits and constraints.", "Cost-benefit analysis.", "Student considers only one benefit."],
    ["History", "source-analysis", "One article calls a protest violent; videos and witness letters show peaceful marching before arrests.", "What conclusion is best?", ["The article needs corroboration and context.", "The article must be accepted alone.", "Videos can never count.", "The protest did not happen."], "Conflicting sources require corroboration.", "Historical corroboration.", "Student chooses one source without reconciling evidence."],
    ["Geography", "source-analysis", "A climate graph shows five years of below-average rainfall while groundwater pumping increases.", "Which concern is supported?", ["water scarcity may worsen", "rainfall increased", "groundwater is unlimited", "graphs cannot show trends"], "Less rainfall plus more pumping increases pressure.", "Interpreting environmental trends.", "Student reads one variable only."],
    ["Civics", "source-analysis", "Citizens organize petitions after a budget vote to change spending priorities.", "What does this show?", ["Participation can continue after elections.", "Citizens have no role after voting.", "Budgets are not policies.", "Petitions are economic imports."], "Democratic participation includes more than voting.", "Civic participation.", "Student sees citizenship as voting only."]
  ];

  [["Low", 12, 226], ["Medium", 15, 238], ["High", 10, 252], ["Advanced", 3, 266]].forEach(([difficulty, count, base]) => {
    for (let i = 0; i < count; i++) {
      const t = socialTemplates[i % socialTemplates.length];
      add({
        id: `social-g9-elite-${difficulty.toLowerCase()}-${String(i + 1).padStart(2, "0")}`,
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
