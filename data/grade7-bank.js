(function addGrade7QuestionBank() {
  const schoolTargets = {
    math: "International school math: proportional reasoning, signed numbers, expressions, equations, geometry, statistics, and model reasoning",
    reading: "International school ELA/humanities: close reading, inference, evidence selection, claim limits, and paired-source comparison",
    language: "International school writing: grammar, mechanics, revision, paragraph organization, evidence development, and academic tone",
    science: "International school science: DCI, SEP, CCC, CER, experimental design, data interpretation, and model limits",
    social: "International school social studies: geography data, civics, economics, history sourcing, and evidence-based policy reasoning"
  };

  const rows = [
    ["math-g7-ratio-table-218", "math", "Ratios & Proportional Relationships", "operations", "Low", 218, "Ratio Tables", `A recipe uses 3 cups of oats for every 2 cups of dried fruit.

<div class="table-wrap"><table><thead><tr><th>Oats</th><th>Fruit</th></tr></thead><tbody><tr><td>3</td><td>2</td></tr><tr><td>6</td><td>4</td></tr><tr><td>9</td><td>?</td></tr></tbody></table></div>`, "What number completes the ratio table?", ["6", "5", "7", "12"], 0, "Each row multiplies both quantities by the same factor. 9 oats is 3 times 3 oats, so fruit is 2 times 3 = 6.", false, false],
    ["math-g7-integers-222", "math", "The Number System", "operations", "Low", 222, "Integer Operations", `Temperature Change:
At 6 a.m. the temperature was -4 degrees Celsius. By noon it rose 11 degrees.`, "What was the noon temperature?", ["7 degrees Celsius", "-15 degrees Celsius", "-7 degrees Celsius", "15 degrees Celsius"], 0, "-4 + 11 = 7. Moving 11 units right from -4 lands on 7.", false, false],
    ["math-g7-proportions-226", "math", "Ratios & Proportional Relationships", "multi-step-reasoning", "Medium", 226, "Unit Rate", `A printer makes 84 pages in 6 minutes when running at a steady speed.`, "How many pages per minute?", ["14", "12", "78", "504"], 0, "The unit rate is 84 divided by 6, which equals 14 pages per minute.", false, false],
    ["math-g7-expression-230", "math", "Expressions and Equations", "multi-step-reasoning", "Medium", 230, "Equivalent Expressions", `A teacher writes this expression on the board:
4(2x - 3) + 5x`, "Which expression is equivalent?", ["13x - 12", "8x - 7", "13x + 12", "3x - 12"], 0, "Distribute first: 4(2x - 3) = 8x - 12. Then combine 8x + 5x = 13x.", false, false],
    ["math-g7-percent-234", "math", "Ratios & Proportional Relationships", "measurement", "Medium", 234, "Percent Reasoning", `A jacket costs $80 before tax. It is discounted by 25%.`, "What is the sale price?", ["$60", "$20", "$55", "$100"], 0, "25% of 80 is 20, so the discounted price is 80 - 20 = 60.", false, true],
    ["math-g7-scale-238", "math", "Geometry", "geometry", "High", 238, "Scale Drawing", `A map uses a scale of 1 inch = 12 miles. Two towns are 4.5 inches apart on the map.`, "What is the real distance?", ["54 miles", "16.5 miles", "48 miles", "5.5 miles"], 0, "Multiply the map distance by the scale: 4.5 x 12 = 54 miles.", false, true],
    ["math-g7-equation-242", "math", "Expressions and Equations", "multi-step-reasoning", "High", 242, "Two-Step Equations", `Solve this equation:
3(x - 4) = 27`, "What is the value of x?", ["13", "5", "9", "31"], 0, "Divide both sides by 3 to get x - 4 = 9, then add 4 to get x = 13.", false, true],
    ["math-g7-statistics-248", "math", "Measurement and Data", "measurement", "Advanced", 248, "Inference From Samples", `A school surveys 60 randomly selected students. 42 say they prefer a later lunch period. The school has 720 students total.`, "Which estimate is best supported?", ["About 504 students prefer a later lunch.", "Exactly 42 students prefer a later lunch.", "About 60 students prefer a later lunch.", "All 720 students prefer a later lunch."], 0, "The sample proportion is 42/60 = 0.70. Applying 70% to 720 gives 504. Because it is a sample, the result is an estimate.", true, true],

    ["reading-g7-vocab-210", "reading", "Vocabulary", "vocabulary-context", "Low", 210, "Context Clues", `Passage:
The old bridge looked fragile after the storm; several boards were cracked, and the railing moved when touched.`, "What does fragile most nearly mean?", ["easily broken", "recently painted", "very expensive", "carefully measured"], 0, "The cracked boards and loose railing show that the bridge could break easily.", false, false],
    ["reading-g7-mainidea-214", "reading", "Informational Text", "main-idea-summary", "Low", 214, "Central Idea", `Passage:
Coral reefs protect coastlines, provide homes for fish, and support local fishing economies. When ocean temperatures rise, reefs can bleach and lose the tiny algae they need for food.`, "What is the central idea?", ["Coral reefs are important but vulnerable ecosystems.", "Fishing always harms coral reefs.", "Algae only live in cold water.", "Coastlines do not need reef protection."], 0, "The passage explains the value of reefs and the danger caused by warming water.", false, false],
    ["reading-g7-inference-218", "reading", "Literary Text", "inference", "Medium", 218, "Character Inference", `Passage:
Mara reread the email twice, then closed her laptop without smiling. She placed her competition sketch in a folder labeled 'revise again.'`, "What can the reader infer?", ["Mara is disappointed but plans to improve her work.", "Mara has finished the final version.", "Mara does not care about the competition.", "Mara is sending the sketch to a friend."], 0, "Her lack of a smile suggests disappointment, while the folder label shows she intends to revise.", false, false],
    ["reading-g7-evidence-222", "reading", "Informational Text", "text-evidence", "Medium", 222, "Evidence Selection", `Claim:
Urban trees can reduce summer heat.

Evidence Notes:
1. Streets with tree cover measured 4 degrees cooler than nearby streets without shade.
2. A city planted trees in 1998.
3. Some trees have leaves that change color in fall.`, "Which note best supports the claim?", ["Note 1", "Note 2", "Note 3", "Notes 2 and 3 only"], 0, "Note 1 directly connects tree cover to a lower measured temperature.", false, false],
    ["reading-g7-structure-226", "reading", "Informational Text", "authors-purpose", "Medium", 226, "Text Structure", `Passage:
First, rainwater flows across streets and picks up oil and litter. Next, it enters storm drains. Finally, the polluted water can reach rivers without treatment.`, "Which structure is used?", ["sequence", "compare and contrast", "problem and solution only", "description of a character"], 0, "Signal words such as first, next, and finally show sequence.", false, false],
    ["reading-g7-purpose-230", "reading", "Informational Text", "authors-purpose", "High", 230, "Author's Purpose", `Passage:
Students should not treat sleep as optional. Research shows that middle school students who sleep fewer than seven hours struggle more with memory, focus, and mood. Schools and families should protect consistent sleep schedules.`, "What is the author's main purpose?", ["to persuade readers to value student sleep", "to describe dreams in scientific detail", "to entertain with a story about school", "to compare two kinds of schools"], 0, "The author uses research and a recommendation to persuade readers that sleep schedules matter.", false, false],
    ["reading-g7-synthesis-236", "reading", "Paired Passage Reasoning", "paired-passage-set", "High", 236, "Comparing Claims", `Source A says school gardens improve science learning because students observe plant growth directly.
Source B says gardens require maintenance time but can build teamwork when responsibilities are shared.`, "How do the sources differ?", ["Source A emphasizes academic learning, while Source B emphasizes practical challenges and teamwork.", "Both sources argue that gardens should be removed.", "Source A focuses on sports, while Source B focuses on lunch menus.", "Neither source mentions benefits."], 0, "Source A centers on science learning. Source B adds maintenance concerns and teamwork benefits.", false, false],
    ["reading-g7-counterclaim-242", "reading", "Informational Text", "text-evidence", "Advanced", 242, "Evidence Sufficiency", `Argument:
All school assignments should be completed on tablets because tablets make learning better.

Evidence:
A class survey found that 18 of 25 students prefer typing to handwriting.`, "What is the strongest critique?", ["The evidence shows preference, not that learning improves.", "The evidence proves tablets improve every subject.", "The sample is too large to interpret.", "The claim is only about handwriting speed."], 0, "Preference data does not prove better learning outcomes, so the evidence is insufficient for the claim.", true, false],

    ["language-g7-commas-211", "language", "Language Mechanics", "mechanics", "Low", 211, "Comma Usage", `Editing sentence:
After the storm ended the team checked the field.`, "Where should a comma be added?", ["After ended", "After storm", "After team", "No comma is needed"], 0, "The introductory dependent clause is 'After the storm ended,' so a comma belongs after ended.", false, false],
    ["language-g7-pronoun-215", "language", "Language Grammar", "grammar-usage", "Low", 215, "Pronoun Agreement", `Editing sentence:
Each player should bring their own water bottle to practice.`, "Which revision is most formal?", ["Each player should bring his or her own water bottle to practice.", "Each players should bring their own water bottle.", "Each player should bring them own bottle.", "Each player bring their own bottle."], 0, "In formal usage, singular 'Each player' can be matched with 'his or her.'", false, false],
    ["language-g7-fragment-219", "language", "Sentence Structure", "sentence-structure", "Medium", 219, "Sentence Fragments", `Draft:
Because the museum closed early. We moved the field trip to Friday.`, "Which revision fixes the fragment?", ["Because the museum closed early, we moved the field trip to Friday.", "Because the museum closed early. Friday.", "We moved because. The museum closed early.", "The museum, because closed early, Friday."], 0, "The dependent clause must be attached to an independent clause.", false, false],
    ["language-g7-wordchoice-223", "language", "Writing Style", "revision", "Medium", 223, "Precise Word Choice", `Draft:
The scientist got some results from the test.`, "Which revision is most precise?", ["The scientist collected measurable results from the experiment.", "The scientist got stuff from the thing.", "The scientist was nice about the test.", "The scientist results were test."], 0, "Collected, measurable, and experiment are more precise academic words.", false, false],
    ["language-g7-transition-227", "language", "Writing Organization", "paragraph-organization", "Medium", 227, "Transitions", `Two sentences:
The solar oven reached 180 degrees. The class could not bake the bread completely.`, "Which transition best connects the ideas?", ["However,", "For example,", "Similarly,", "As a result,"], 0, "However signals contrast between reaching a high temperature and still not baking the bread completely.", false, false],
    ["language-g7-modifier-231", "language", "Language Grammar", "grammar-usage", "High", 231, "Modifier Placement", `Draft:
Covered in mud, Sofia washed the soccer ball after practice.`, "Which meaning is clearest?", ["After practice, Sofia washed the soccer ball that was covered in mud.", "Covered in mud, after practice washed Sofia the soccer ball.", "The soccer ball washed Sofia after practice covered in mud.", "Sofia, after covered in mud, washed practice."], 0, "The revision clearly shows that the soccer ball was covered in mud.", false, false],
    ["language-g7-evidence-235", "language", "Writing Development", "revision", "High", 235, "Evidence Connection", `Claim:
The cafeteria should add more vegetarian meals.

Evidence:
In a student survey, 38% of respondents said they would choose a vegetarian lunch at least twice per week.`, "Which sentence best explains the evidence?", ["This shows there is enough student interest to justify offering more vegetarian choices.", "This proves every student is vegetarian.", "This means meat meals should be banned immediately.", "This survey is unrelated to cafeteria planning."], 0, "The evidence supports adding choices because a substantial group reports likely use.", false, false],
    ["language-g7-counterclaim-241", "language", "Writing Revision", "revision", "Advanced", 241, "Counterclaim Response", `Argument draft:
Our school should start later because students need more sleep. Some people say a later start would interfere with sports schedules.`, "Which response best addresses the counterclaim?", ["The school could adjust practice times while still protecting students' sleep and attention.", "Sports are boring and should not matter.", "Students sleep at night, so schedules are never a problem.", "The counterclaim proves the argument is wrong."], 0, "The response acknowledges the concern and offers a practical adjustment while maintaining the main claim.", true, false],

    ["science-g7-cells-212", "science", "Life Science", "life-science", "Low", 212, "Cell Structures", `A plant cell contains chloroplasts, a cell wall, a nucleus, and a cell membrane.`, "Which structure helps make food from light?", ["chloroplast", "cell wall", "nucleus", "cell membrane"], 0, "Chloroplasts carry out photosynthesis, using light energy to help make food.", false, false],
    ["science-g7-forces-216", "science", "Physical Science", "physical-science", "Low", 216, "Balanced Forces", `A book rests on a table. Gravity pulls downward, and the table pushes upward with equal force.`, "What is true about the forces?", ["They are balanced.", "They make the book speed up.", "They only act sideways.", "They remove gravity."], 0, "Equal opposite forces create a net force of zero, so the book does not accelerate.", false, false],
    ["science-g7-energy-220", "science", "Physical Science", "physical-science", "Medium", 220, "Energy Transfer", `A metal spoon is left in a pot of hot soup. After a few minutes, the handle feels warm.`, "What process warmed the handle?", ["conduction", "evaporation", "condensation", "reflection"], 0, "Thermal energy moved through the metal by direct particle contact, which is conduction.", false, false],
    ["science-g7-variables-224", "science", "Scientific Inquiry", "experimental-design", "Medium", 224, "Experimental Design", `A student tests whether light color affects plant growth. She uses red, blue, and white lights.`, "What should be kept constant?", ["plant type, water amount, and soil", "the color of light only", "final plant height only", "the conclusion"], 0, "Controls such as plant type, water, and soil help isolate the effect of light color.", false, false],
    ["science-g7-earth-228", "science", "Earth and Space Science", "physical-science", "Medium", 228, "Rock Cycle", `Sediment is compacted and cemented over time at the bottom of a lake.`, "What type of rock forms?", ["sedimentary rock", "igneous rock", "metamorphic rock", "molten rock"], 0, "Compaction and cementation of sediment form sedimentary rock.", false, false],
    ["science-g7-ecosystem-232", "science", "Life Science", "life-science", "High", 232, "Ecosystem Interactions", `A wetland loses many insect populations after pesticide runoff. Frog numbers drop soon after.`, "What is the best explanation?", ["Frogs lost an important food source.", "Frogs began photosynthesis.", "The wetland became a desert immediately.", "Pesticides increased frog reproduction."], 0, "A decline in insects can reduce available food for frogs, causing frog populations to drop.", false, false],
    ["science-g7-data-236", "science", "Scientific Inquiry", "claim-evidence-reasoning", "High", 236, "Data Interpretation", `Trial Data:
Cart A: 2 kg, force 10 N, acceleration 5 m/s^2
Cart B: 5 kg, force 10 N, acceleration 2 m/s^2`, "Which claim is supported?", ["With the same force, greater mass gives lower acceleration.", "Mass has no effect on acceleration.", "Cart B had a larger force.", "Both carts accelerated equally."], 0, "The force is the same, but the more massive cart accelerates less.", false, true],
    ["science-g7-model-limits-244", "science", "Earth and Space Science", "claim-evidence-reasoning", "Advanced", 244, "Model Limitations", `A climate model predicts regional rainfall using ocean temperature, wind patterns, and land elevation. It does not include changes in land use or new irrigation projects.`, "What limitation should scientists note?", ["The model may miss rainfall effects caused by human land-use changes.", "The model cannot use any ocean data.", "The model proves rainfall will be identical everywhere.", "The model is invalid because it has variables."], 0, "A model that excludes land-use changes may miss human-caused effects on regional rainfall.", true, false],

    ["social-g7-map-212", "social", "Geography", "source-analysis", "Low", 212, "Map Scale", `A map scale says 1 centimeter = 50 kilometers. Two cities are 3 centimeters apart.`, "How far apart are the cities?", ["150 kilometers", "53 kilometers", "100 kilometers", "15 kilometers"], 0, "Multiply 3 centimeters by 50 kilometers per centimeter to get 150 kilometers.", false, true],
    ["social-g7-civics-216", "social", "Civics", "source-analysis", "Low", 216, "Rights and Responsibilities", `A city council invites residents to speak before voting on a new park rule.`, "Which civic idea is shown?", ["public participation in local government", "private ownership of all parks", "ending all elections", "international trade"], 0, "Residents speaking before a local vote shows public participation.", false, false],
    ["social-g7-econ-220", "social", "Economics", "economics", "Medium", 220, "Opportunity Cost", `A student has two hours after school. She can either practice violin or attend soccer training, but not both.`, "What is the opportunity cost of choosing violin?", ["the soccer training she gives up", "the violin practice she completes", "both activities together", "nothing because time is free"], 0, "Opportunity cost is the next best alternative given up.", false, false],
    ["social-g7-source-224", "social", "History", "source-analysis", "Medium", 224, "Sourcing", `Source:
A factory owner's 1912 speech says factory work is safe and wages are fair. A worker's 1912 diary describes injuries and unpaid overtime.`, "Why compare these sources?", ["They reveal different perspectives and possible bias.", "They prove all factories were identical.", "They are both maps.", "They remove the need for evidence."], 0, "The owner's role and the worker's role may shape what each source emphasizes.", false, false],
    ["social-g7-demand-228", "social", "Economics", "economics", "Medium", 228, "Supply and Demand", `A drought damages wheat crops. Demand for bread stays about the same.`, "What is the likely market effect?", ["Bread prices may rise.", "Wheat supply will increase.", "Bread becomes free.", "Demand disappears immediately."], 0, "Reduced wheat supply with steady demand usually increases prices.", false, false],
    ["social-g7-checks-232", "social", "Civics", "source-analysis", "High", 232, "Checks and Balances", `A legislature passes a law. A court later rules that the law conflicts with the constitution.`, "Which principle is shown?", ["judicial review", "popular sovereignty only", "free enterprise", "scarcity"], 0, "Judicial review allows courts to evaluate whether laws conflict with the constitution.", false, false],
    ["social-g7-migration-236", "social", "History", "source-analysis", "High", 236, "Cause and Effect", `Historical notes:
Crop failures increased food shortages.
Factory jobs expanded in coastal cities.
Train routes became cheaper.`, "What outcome do the notes best explain?", ["migration from rural areas to cities", "the end of all manufacturing", "a decrease in transportation", "fewer people seeking work"], 0, "Push factors such as crop failures and pull factors such as jobs, helped by cheaper transport, explain migration.", false, false],
    ["social-g7-corroboration-242", "social", "History", "source-analysis", "Advanced", 242, "Corroboration", `A historian has one newspaper article claiming a protest was violent. Two photographs show a peaceful march, and three participant letters describe police blocking the street before arrests began.`, "What should the historian conclude?", ["More sources are needed because the newspaper claim is not fully corroborated.", "The newspaper must be accepted without question.", "Photographs and letters can never be evidence.", "The protest did not happen."], 0, "Conflicting evidence means the historian should corroborate further instead of relying on one claim.", true, false]
  ];

  window.productionQuestionBank.push(...rows.map(([id, subject, domain, skillId, difficulty, ritDifficulty, cognitiveLevel, stimulus, question, options, answer, explanation, killer, calculator]) => ({
    id,
    subject,
    grade: 7,
    domain,
    skillId,
    difficulty,
    ritDifficulty,
    cognitiveLevel,
    stimulus,
    question,
    options,
    answer,
    explanation,
    itemPurpose: `${cognitiveLevel} diagnosis for grade 7 ${subject}.`,
    misconception: `Distractor reflects a common grade 7 ${subject} misconception: wrong model, unsupported inference, weak evidence, or overgeneralized rule.`,
    stimulusType: stimulus.includes("<table") || stimulus.includes("Data") || stimulus.includes("Source") || stimulus.includes("Evidence") ? "source/data/context stimulus" : "short context stimulus",
    evidenceDemand: difficulty === "Advanced" ? "ceiling check: evidence sufficiency, model limits, corroboration, or multi-step transfer" : difficulty === "High" ? "multi-step transfer with text/data support" : "targeted MAP-style skill diagnosis",
    distractorRationale: "Distractors are designed to separate surface recall from evidence-based reasoning and school-transfer readiness.",
    mapAlignment: "MAP Growth-style: four-choice adaptive practice item using public skill frames, concise stems, stimulus-supported reasoning, and plausible misconception distractors.",
    schoolTransferTarget: schoolTargets[subject],
    adaptiveWeight: difficulty === "Advanced" ? 4 : difficulty === "High" ? 3 : difficulty === "Medium" ? 2 : 1,
    killer,
    calculator,
    status: "approved"
  })));
})();
