window.productionQuestionBank = [
  // ==================== MATH QUESTIONS ====================
  {
    "id": "math-g12-number-sense-135",
    "subject": "math",
    "grade": 1,
    "domain": "Number Sense & Place Value",
    "skillId": "number-sense",
    "difficulty": "Low",
    "ritDifficulty": 135,
    "cognitiveLevel": "Representing Numbers",
    "stimulus": `Scenario:
Leo is using base-ten blocks to show a number. He puts 4 tens blocks and 7 ones blocks on his desk.

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 15px 0;">
  <svg width="280" height="150" viewBox="0 0 280 150" style="background: #FDFEFE; border: 1px solid #BDC3C7; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <!-- Tens Blocks (Rods) -->
    <g fill="#3498DB" stroke="#1B4F72" stroke-width="0.8">
      <!-- 4 Rods, each representing a ten -->
      <rect x="20" y="20" width="15" height="100" rx="1"/>
      <line x1="20" y1="30" x2="35" y2="30"/>
      <line x1="20" y1="40" x2="35" y2="40"/>
      <line x1="20" y1="50" x2="35" y2="50"/>
      <line x1="20" y1="60" x2="35" y2="60"/>
      <line x1="20" y1="70" x2="35" y2="70"/>
      <line x1="20" y1="80" x2="35" y2="80"/>
      <line x1="20" y1="90" x2="35" y2="90"/>
      <line x1="20" y1="100" x2="35" y2="100"/>
      <line x1="20" y1="110" x2="35" y2="110"/>
      
      <rect x="42" y="20" width="15" height="100" rx="1"/>
      <line x1="42" y1="30" x2="57" y2="30"/>
      <line x1="42" y1="40" x2="57" y2="40"/>
      <line x1="42" y1="50" x2="57" y2="50"/>
      <line x1="42" y1="60" x2="57" y2="60"/>
      <line x1="42" y1="70" x2="57" y2="70"/>
      <line x1="42" y1="80" x2="57" y2="80"/>
      <line x1="42" y1="90" x2="57" y2="90"/>
      <line x1="42" y1="100" x2="57" y2="100"/>
      <line x1="42" y1="110" x2="57" y2="110"/>

      <rect x="64" y="20" width="15" height="100" rx="1"/>
      <line x1="64" y1="30" x2="79" y2="30"/>
      <line x1="64" y1="40" x2="79" y2="40"/>
      <line x1="64" y1="50" x2="79" y2="50"/>
      <line x1="64" y1="60" x2="79" y2="60"/>
      <line x1="64" y1="70" x2="79" y2="70"/>
      <line x1="64" y1="80" x2="79" y2="80"/>
      <line x1="64" y1="90" x2="79" y2="90"/>
      <line x1="64" y1="100" x2="79" y2="100"/>
      <line x1="64" y1="110" x2="79" y2="110"/>

      <rect x="86" y="20" width="15" height="100" rx="1"/>
      <line x1="86" y1="30" x2="101" y2="30"/>
      <line x1="86" y1="40" x2="101" y2="40"/>
      <line x1="86" y1="50" x2="101" y2="50"/>
      <line x1="86" y1="60" x2="101" y2="60"/>
      <line x1="86" y1="70" x2="101" y2="70"/>
      <line x1="86" y1="80" x2="101" y2="80"/>
      <line x1="86" y1="90" x2="101" y2="90"/>
      <line x1="86" y1="100" x2="101" y2="100"/>
      <line x1="86" y1="110" x2="101" y2="110"/>
    </g>
    
    <!-- Ones Blocks (Units) -->
    <g fill="#E74C3C" stroke="#78281F" stroke-width="0.8">
      <!-- 7 separate ones units -->
      <rect x="150" y="25" width="12" height="12" rx="1"/>
      <rect x="170" y="25" width="12" height="12" rx="1"/>
      <rect x="150" y="45" width="12" height="12" rx="1"/>
      <rect x="170" y="45" width="12" height="12" rx="1"/>
      <rect x="150" y="65" width="12" height="12" rx="1"/>
      <rect x="170" y="65" width="12" height="12" rx="1"/>
      <rect x="160" y="85" width="12" height="12" rx="1"/>
    </g>

    <!-- Labels -->
    <text x="63" y="138" fill="#2C3E50" font-size="9" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">4 Tens (40)</text>
    <text x="166" y="138" fill="#2C3E50" font-size="9" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">7 Ones (7)</text>
  </svg>
</div>`,
    "question": "Which number is shown by Leo's blocks?",
    "options": ["47", "74", "11", "407"],
    "answer": 0,
    "explanation": "4 tens (40) and 7 ones (7) make 47.",
    "misconception": "Place value reversal (tens as ones and vice-versa).",
    "adaptiveWeight": 1,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "math-g23-operations-165",
    "subject": "math",
    "grade": 2,
    "domain": "Operations & Algebraic Thinking",
    "skillId": "operations",
    "difficulty": "Medium",
    "ritDifficulty": 165,
    "cognitiveLevel": "Two-Digit Addition",
    "stimulus": `Word Problem:
Mia had 48 color pencils in a container. Her teacher gave her an additional brand new box containing exactly 27 more pencils.

<div style="display: flex; flex-direction: column; align-items: center; gap: 8px; margin: 15px 0;">
  <div style="width: 250px; background: #EAEDED; border-left: 5px solid #2980B9; border-radius: 4px; padding: 10px; font-size: 0.82rem; font-family: monospace;">
    <strong style="color: #1F618D;"> Mia's Pencil Tracker:</strong><br>
    - Starting Pencils: 48<br>
    - Added Pencils: + 27<br>
    -------------------------<br>
    - Total pencils: [ ? ]
  </div>
</div>`,
    "question": "How many color pencils does Mia have in total now?",
    "options": ["75", "65", "85", "21"],
    "answer": 0,
    "explanation": "48 + 27 = 75. Mia now has 75 color pencils.",
    "misconception": "Regrouping error (not carrying the 1 ten to the tens place, resulting in 65).",
    "adaptiveWeight": 2,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "math-g34-fractions-190",
    "subject": "math",
    "grade": 3,
    "domain": "Fractions & Decimals",
    "skillId": "fractions-decimals",
    "difficulty": "Medium",
    "ritDifficulty": 190,
    "cognitiveLevel": "Equivalent Fractions",
    "stimulus": `Fraction Model:
Julie shades 4/6 of a rectangular chocolate bar to share with her brother.

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 15px 0;">
  <svg width="300" height="100" viewBox="0 0 300 100" style="background: #FDFEFE; border: 1px solid #BDC3C7; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <!-- Background chocolate grid -->
    <rect x="20" y="25" width="260" height="50" rx="3" fill="#EAEDED" stroke="#7F8C8D" stroke-width="1.5"/>
    
    <!-- Partition Lines -->
    <line x1="63.33" y1="25" x2="63.33" y2="75" stroke="#7F8C8D" stroke-width="1.5"/>
    <line x1="106.66" y1="25" x2="106.66" y2="75" stroke="#7F8C8D" stroke-width="1.5"/>
    <line x1="150" y1="25" x2="150" y2="75" stroke="#7F8C8D" stroke-width="1.5"/>
    <line x1="193.33" y1="25" x2="193.33" y2="75" stroke="#7F8C8D" stroke-width="1.5"/>
    <line x1="236.66" y1="25" x2="236.66" y2="75" stroke="#7F8C8D" stroke-width="1.5"/>
    
    <!-- Shaded Part Gradient (4/6 shaded blue) -->
    <defs>
      <linearGradient id="shadeBlue" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#3498DB" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#2980B9" stop-opacity="0.95"/>
      </linearGradient>
    </defs>
    <rect x="20" y="25" width="173.33" height="50" rx="3" fill="url(#shadeBlue)" stroke="#2471A3" stroke-width="1.5"/>
    
    <!-- Redraw divisions in shaded blue -->
    <line x1="63.33" y1="25" x2="63.33" y2="75" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="106.66" y1="25" x2="106.66" y2="75" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="150" y1="25" x2="150" y2="75" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2,2"/>
    
    <!-- Title -->
    <text x="150" y="90" fill="#2C3E50" font-size="9" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Julie's Shaded Fraction Model (4/6)</text>
  </svg>
</div>`,
    "question": "Which fraction is equivalent to the shaded part of Julie's chocolate bar?",
    "options": ["2/3", "1/2", "3/4", "4/3"],
    "answer": 0,
    "explanation": "Dividing the numerator and denominator of 4/6 by 2 yields 2/3. This represents the same portion of the rectangle.",
    "misconception": "Viewing numerator and denominator as separate whole numbers rather than a ratio.",
    "adaptiveWeight": 2,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "math-g45-measurement-215",
    "subject": "math",
    "grade": 4,
    "domain": "Measurement & Data",
    "skillId": "measurement",
    "difficulty": "High",
    "ritDifficulty": 215,
    "cognitiveLevel": "Unit Conversion & Multi-Step Area",
    "stimulus": `Garden Blueprint (Calculator Active):
A school is building a rectangular garden that measures 12 meters long and 8 meters wide. They want to lay a gravel path that is exactly 2 meters wide all the way around the outside of the garden.

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 15px 0;">
  <svg width="340" height="220" viewBox="0 0 340 220" style="background: #FDFEFE; border: 1px solid #BDC3C7; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <!-- Outer gravel path -->
    <rect x="30" y="20" width="280" height="180" fill="#E5E7E9" stroke="#7F8C8D" stroke-width="2" rx="3"/>
    
    <!-- Inner garden -->
    <rect x="70" y="50" width="200" height="120" fill="#D5F5E3" stroke="#27AE60" stroke-width="2" rx="2"/>
    <text x="170" y="105" fill="#196F3D" font-size="11" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Inner Garden</text>
    <text x="170" y="122" fill="#196F3D" font-size="9" font-family="'Inter', sans-serif" text-anchor="middle">12 m × 8 m</text>
    
    <!-- Outer labels -->
    <text x="170" y="38" fill="#7D6608" font-size="9" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Gravel Path (2m wide all around)</text>
    
    <!-- Dimension indicators -->
    <line x1="60" y1="50" x2="60" y2="170" stroke="#2C3E50" stroke-width="1"/>
    <line x1="56" y1="50" x2="64" y2="50" stroke="#2C3E50" stroke-width="1"/>
    <line x1="56" y1="170" x2="64" y2="170" stroke="#2C3E50" stroke-width="1"/>
    <text x="48" y="115" fill="#2C3E50" font-size="9" font-family="'Inter', sans-serif" text-anchor="middle" transform="rotate(-90 48 115)">8 m</text>
    
    <line x1="70" y1="185" x2="270" y2="185" stroke="#2C3E50" stroke-width="1"/>
    <line x1="70" y1="181" x2="70" y2="189" stroke="#2C3E50" stroke-width="1"/>
    <line x1="270" y1="181" x2="270" y2="189" stroke="#2C3E50" stroke-width="1"/>
    <text x="170" y="197" fill="#2C3E50" font-size="9" font-family="'Inter', sans-serif" text-anchor="middle">12 m</text>
    
    <line x1="270" y1="110" x2="310" y2="110" stroke="#C0392B" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="290" y="104" fill="#C0392B" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">2 m</text>
  </svg>
</div>`,
    "question": "What is the total area of the gravel path?",
    "options": ["96 square meters", "192 square meters", "80 square meters", "112 square meters"],
    "answer": 0,
    "explanation": "The original garden is 12m by 8m (area = 96 sqm). With the 2m path all around, the outer dimensions become 16m (12 + 2 + 2) by 12m (8 + 2 + 2), making the outer area 192 sqm. Outer area minus inner area yields 192 - 96 = 96 square meters.",
    "misconception": "Adding the border width once instead of twice to find the new dimensions (e.g. 14x10 = 140; 140-96=44).",
    "adaptiveWeight": 3,
    "killer": false,
    "calculator": true,
    "status": "approved"
  },
  {
    "id": "math-g56-geometry-235",
    "subject": "math",
    "grade": 5,
    "domain": "Geometry",
    "skillId": "geometry",
    "difficulty": "High",
    "ritDifficulty": 235,
    "cognitiveLevel": "Coordinate Plane & Shape Properties",
    "stimulus": `Grid Geometry (Calculator Active):
A polygon is drawn on a coordinate plane with vertices at A(-3, 4), B(5, 4), C(5, -2), and D(-3, -2).

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 15px 0;">
  <svg width="300" height="220" viewBox="0 0 300 220" style="background: #FDFEFE; border: 1px solid #BDC3C7; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <defs>
      <pattern id="coordGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E8E8" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="300" height="220" fill="url(#coordGrid)"/>
    
    <!-- Axes (centered around x=150, y=110) -->
    <line x1="10" y1="110" x2="290" y2="110" stroke="#34495E" stroke-width="1.5"/>
    <polygon points="290,107 296,110 290,113" fill="#34495E"/>
    <text x="288" y="122" fill="#34495E" font-size="8" font-family="'Inter', sans-serif" font-weight="bold">X</text>
    
    <line x1="150" y1="10" x2="150" y2="210" stroke="#34495E" stroke-width="1.5"/>
    <polygon points="147,10 150,4 153,10" fill="#34495E"/>
    <text x="158" y="12" fill="#34495E" font-size="8" font-family="'Inter', sans-serif" font-weight="bold">Y</text>
    
    <!-- scale: 1 unit = 15 px. 
         A(-3, 4) -> x = 150 - 3*15 = 105, y = 110 - 4*15 = 50
         B(5, 4)  -> x = 150 + 5*15 = 225, y = 110 - 4*15 = 50
         C(5,-2)  -> x = 150 + 5*15 = 225, y = 110 - (-2)*15 = 140
         D(-3,-2) -> x = 150 - 3*15 = 105, y = 110 - (-2)*15 = 140
    -->
    <rect x="105" y="50" width="120" height="90" fill="#3498DB" fill-opacity="0.15" stroke="#2980B9" stroke-width="2" rx="1"/>
    
    <!-- Vertex points -->
    <circle cx="105" cy="50" r="4.5" fill="#E74C3C"/>
    <text x="96" y="42" fill="#2C3E50" font-size="8" font-family="'Inter', sans-serif" font-weight="bold">A(-3, 4)</text>
    
    <circle cx="225" cy="50" r="4.5" fill="#E74C3C"/>
    <text x="228" y="42" fill="#2C3E50" font-size="8" font-family="'Inter', sans-serif" font-weight="bold">B(5, 4)</text>
    
    <circle cx="225" cy="140" r="4.5" fill="#E74C3C"/>
    <text x="228" y="152" fill="#2C3E50" font-size="8" font-family="'Inter', sans-serif" font-weight="bold">C(5, -2)</text>
    
    <circle cx="105" cy="140" r="4.5" fill="#E74C3C"/>
    <text x="76" y="152" fill="#2C3E50" font-size="8" font-family="'Inter', sans-serif" font-weight="bold">D(-3, -2)</text>
    
    <!-- Ticks -->
    <line x1="225" y1="107" x2="225" y2="113" stroke="#34495E" stroke-width="1"/>
    <text x="225" y="103" fill="#34495E" font-size="7" font-family="'Inter', sans-serif" text-anchor="middle">5</text>
    <line x1="105" y1="107" x2="105" y2="113" stroke="#34495E" stroke-width="1"/>
    <text x="105" y="103" fill="#34495E" font-size="7" font-family="'Inter', sans-serif" text-anchor="middle">-3</text>
  </svg>
</div>`,
    "question": "What is the perimeter of this polygon?",
    "options": ["28 units", "48 units", "14 units", "24 units"],
    "answer": 0,
    "explanation": "The distance from A to B is |5 - (-3)| = 8 units. The distance from B to C is |4 - (-2)| = 6 units. The shape is a rectangle with length 8 and width 6. Perimeter = 2 * (8 + 6) = 28 units.",
    "misconception": "Confusing area and perimeter formulas (e.g. calculating 8 * 6 = 48 units).",
    "adaptiveWeight": 3,
    "killer": false,
    "calculator": true,
    "status": "approved"
  },
  {
    "id": "math-g6-reasoning-255",
    "subject": "math",
    "grade": 6,
    "domain": "Multi-step Reasoning",
    "skillId": "multi-step-reasoning",
    "difficulty": "Advanced",
    "ritDifficulty": 255,
    "cognitiveLevel": "Complex Equations & Word Problems",
    "stimulus": `E-Commerce Scenario (Calculator Active):
A store sells books online. The total shipping cost for an order is represented by the function C(x) = 3.75x + 5.50, where x is the number of books in the order. Anna paid exactly $43.00 for the shipping cost of her order.

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 15px 0;">
  <svg width="260" height="160" viewBox="0 0 260 160" style="background: #FFF; border: 1.5px solid #34495E; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border-radius: 6px;">
    <rect x="10" y="10" width="240" height="140" fill="#FDFEFE" rx="3"/>
    <text x="130" y="32" fill="#0F355C" font-size="10" font-family="'Courier New', monospace" font-weight="bold" text-anchor="middle">ONLINE CHECKOUT RECEIPT</text>
    <line x1="20" y1="40" x2="240" y2="40" stroke="#34495E" stroke-width="1" stroke-dasharray="3,3"/>
    <text x="25" y="58" fill="#2C3E50" font-size="9" font-family="'Courier New', monospace">Base Handling Fee:      $5.50</text>
    <text x="25" y="76" fill="#2C3E50" font-size="9" font-family="'Courier New', monospace">Per-Book Courier Rate:  $3.75</text>
    <text x="25" y="94" fill="#2C3E50" font-size="9" font-family="'Courier New', monospace">Quantity Ordered (x):  [Calculated]</text>
    <line x1="20" y1="108" x2="240" y2="108" stroke="#34495E" stroke-width="1"/>
    <text x="25" y="126" fill="#E74C3C" font-size="10" font-family="'Courier New', monospace" font-weight="bold">TOTAL SHIPPING PAID:    $43.00</text>
  </svg>
</div>`,
    "question": "How many books did Anna order?",
    "options": ["10 books", "8 books", "12 books", "9 books"],
    "answer": 0,
    "explanation": "Set up the equation: 3.75x + 5.50 = 43.00. Subtract 5.50 from both sides: 3.75x = 37.50. Divide by 3.75: x = 10 books.",
    "misconception": "Applying the slope to the constant or dividing the sum incorrectly.",
    "adaptiveWeight": 4,
    "killer": true,
    "calculator": true,
    "status": "approved"
  },
  {
    "id": "math-g6-exponential-262",
    "subject": "math",
    "grade": 6,
    "domain": "Multi-step Reasoning",
    "skillId": "multi-step-reasoning",
    "difficulty": "Advanced",
    "ritDifficulty": 262,
    "cognitiveLevel": "Exponential Growth Functions",
    "stimulus": `Bacterial Culturing (Calculator Active):
In a controlled microbiology lab experiment, a student records the exponential growth of a bacterial colony. The population double rate is constant. The initial population at time t = 0 hours is exactly 100 cells. By t = 3 hours, the population has grown to 800 cells.

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 15px 0;">
  <svg width="300" height="160" viewBox="0 0 300 160" style="background: #FFF; border: 1px solid #BDC3C7; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <line x1="40" y1="20" x2="40" y2="130" stroke="#2C3E50" stroke-width="1.5"/>
    <line x1="40" y1="130" x2="280" y2="130" stroke="#2C3E50" stroke-width="1.5"/>
    <text x="250" y="145" fill="#2C3E50" font-size="8" font-family="'Inter', sans-serif" font-weight="bold">Time (t, hrs)</text>
    <text x="15" y="15" fill="#2C3E50" font-size="8" font-family="'Inter', sans-serif" font-weight="bold">Cells N(t)</text>
    
    <path d="M 40 120 Q 180 120 270 20" fill="none" stroke="#8E44AD" stroke-width="2.5"/>
    <circle cx="40" cy="120" r="3.5" fill="#E74C3C"/>
    <text x="58" y="122" fill="#2C3E50" font-size="7" font-weight="bold">t=0 (N=100)</text>
    
    <circle cx="155" cy="105" r="3.5" fill="#E74C3C"/>
    <text x="155" y="98" fill="#2C3E50" font-size="7" font-weight="bold">t=3 (N=800)</text>
    
    <circle cx="235" cy="52" r="3.5" fill="#E74C3C"/>
    <text x="210" y="44" fill="#2C3E50" font-size="7" font-weight="bold">t=6 (N=6,400)</text>
    
    <text x="150" y="155" fill="#8E44AD" font-size="9" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Population Model: N(t) = 100 × 2^(kt)</text>
  </svg>
</div>`,
    "question": "What is the cell population of this bacterial colony at time t = 9 hours?",
    "options": ["51,200 cells", "25,600 cells", "12,800 cells", "102,400 cells"],
    "answer": 0,
    "explanation": "The population formula is N(t) = N0 * 2^(kt). We know N(0) = 100. At t = 3, N(3) = 100 * 2^(3k) = 800. Therefore, 2^(3k) = 8, which means 3k = 3, so k = 1. The equation is N(t) = 100 * 2^(3t/3) = 100 * 8^(t/3) = 100 * 2^t. At t = 9 hours, N(9) = 100 * 2^9 = 100 * 512 = 51,200 cells.",
    "misconception": "Multiplying 800 by 3 directly (2400) or applying linear instead of exponential scaling.",
    "adaptiveWeight": 4,
    "killer": true,
    "calculator": true,
    "status": "approved"
  },

  // ==================== READING QUESTIONS ====================
  {
    "id": "reading-g12-vocabulary-140",
    "subject": "reading",
    "grade": 1,
    "domain": "Vocabulary in Context",
    "skillId": "vocabulary-context",
    "difficulty": "Low",
    "ritDifficulty": 140,
    "cognitiveLevel": "Simple Word Meanings",
    "stimulus": `Passage:
The little brown pup was extremely tiny. It could sleep comfortably inside a small shoe left by the front door.

<div style="display: flex; flex-direction: column; align-items: center; gap: 8px; margin: 15px 0;">
  <div style="font-size: 1.8rem;">🐶 👟</div>
</div>`,
    "question": "What does the word 'tiny' mean in this passage?",
    "options": ["very small", "very loud", "very happy", "very sleepy"],
    "answer": 0,
    "explanation": "The clue 'sleep inside a small shoe' indicates that tiny means very small.",
    "misconception": "Associating 'pup' with happy or loud instead of scale clues.",
    "adaptiveWeight": 1,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "reading-g23-mainidea-170",
    "subject": "reading",
    "grade": 2,
    "domain": "Informational Text",
    "skillId": "main-idea-summary",
    "difficulty": "Medium",
    "ritDifficulty": 170,
    "cognitiveLevel": "Central Idea",
    "stimulus": `Passage:
Honeybees do very important work. As they fly from flower to flower drinking sweet nectar, tiny grains of pollen stick to their fuzzy legs. When they land on the next flower, the pollen rubs off. This pollination helps flowers make seeds so new plants can grow.`,
    "question": "What is the main idea of this passage?",
    "options": [
      "Honeybees help plants grow by pollinating flowers.",
      "Honeybees love sweet nectar.",
      "Honeybee legs are very fuzzy.",
      "Pollen can be found on many flowers."
    ],
    "answer": 0,
    "explanation": "The text explains how bees pollinating flowers helps new plants grow.",
    "misconception": "Focusing on a specific detail (sweet nectar or fuzzy legs) instead of the comprehensive theme.",
    "adaptiveWeight": 2,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "reading-g34-inference-195",
    "subject": "reading",
    "grade": 3,
    "domain": "Literary Text",
    "skillId": "inference",
    "difficulty": "Medium",
    "ritDifficulty": 195,
    "cognitiveLevel": "Making Inferences",
    "stimulus": `Passage:
Leo watched as dark, heavy clouds gathered across the afternoon sky. The birds stopped singing, and leaves swirled in the sudden cold breeze. Leo quickly picked up his baseball glove from the grass and ran inside, slamming the screen door behind him just as the first loud rumble vibrated through the house.

<div style="display: flex; flex-direction: column; align-items: center; gap: 8px; margin: 15px 0;">
  <span style="font-size: 2.2rem;">⛈️⚾🚪</span>
</div>`,
    "question": "Based on clues in the passage, what is Leo most likely preparing for?",
    "options": ["A major thunderstorm", "A game of baseball", "A bedtime nap", "A cold winter morning"],
    "answer": 0,
    "explanation": "Dark heavy clouds, swirling leaves, sudden cold breeze, and a loud rumble (thunder) suggest an approaching storm.",
    "misconception": "Literal association with the baseball glove to conclude he wants to play baseball.",
    "adaptiveWeight": 2,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "reading-g45-evidence-220",
    "subject": "reading",
    "grade": 4,
    "domain": "Informational Text",
    "skillId": "text-evidence",
    "difficulty": "High",
    "ritDifficulty": 220,
    "cognitiveLevel": "Locating Evidentiary Support",
    "stimulus": `Passage:
Beavers are often called "ecosystem engineers." When they cut down trees to construct wooden dams across rivers, they slow the flow of water. This creates large, calm ponds. These newly formed wetlands quickly become habitats for turtles, ducks, frogs, and rare plants that could not survive in fast-moving currents.`,
    "question": "Which sentence from the passage best supports the claim that beaver dams create new homes for other wildlife?",
    "options": [
      "These newly formed wetlands quickly become habitats for turtles, ducks, frogs, and rare plants...",
      "Beavers are often called 'ecosystem engineers.'",
      "When they cut down trees to construct wooden dams across rivers, they slow the flow of water.",
      "This creates large, calm ponds."
    ],
    "answer": 0,
    "explanation": "The sentence about wetlands becoming habitats for turtles, ducks, and frogs directly proves that dams create new homes for wildlife.",
    "misconception": "Selecting the general engineering label rather than the specific wildlife habitat sentence.",
    "adaptiveWeight": 3,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "reading-g56-purpose-240",
    "subject": "reading",
    "grade": 5,
    "domain": "Informational Text",
    "skillId": "authors-purpose",
    "difficulty": "High",
    "ritDifficulty": 240,
    "cognitiveLevel": "Analyzing Rhetorical Goal",
    "stimulus": `Passage:
While standard electric grids rely on a centralized power plant to distribute electricity over hundreds of miles, local "microgrids" represent a revolutionary shift. Microgrids produce energy locally using solar arrays or wind turbines, storing excess power in heavy-duty batteries. In the event of a severe storm or power failure in the main grid, a microgrid can automatically decouple and continue providing stable, uninterrupted power to local hospitals, emergency services, and homes.

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 15px 0;">
  <svg width="300" height="110" viewBox="0 0 300 110" style="background: #FFF; border: 1px solid #BDC3C7; border-radius: 6px;">
    <!-- central power grid vs local microgrid simple schematic -->
    <rect x="20" y="35" width="80" height="40" fill="#EAEDED" stroke="#7F8C8D" rx="2"/>
    <text x="60" y="58" fill="#7F8C8D" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Central Grid</text>
    
    <path d="M 100 55 H 200" stroke="#E74C3C" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="150" y="48" fill="#E74C3C" font-size="7" font-weight="bold" text-anchor="middle">❌ Decoupled</text>
    
    <rect x="200" y="25" width="80" height="60" fill="#E8F8F5" stroke="#16A085" stroke-width="1.5" rx="3"/>
    <text x="240" y="44" fill="#16A085" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">💡 Microgrid</text>
    <text x="240" y="58" fill="#2C3E50" font-size="7" font-family="'Inter', sans-serif" text-anchor="middle">Solar & Battery</text>
    <text x="240" y="72" fill="#27AE60" font-size="7" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">✓ Active Power</text>
  </svg>
</div>`,
    "question": "What is the author's primary purpose in writing this passage?",
    "options": [
      "To explain how microgrids operate and why they improve local grid resilience.",
      "To criticize power plants for failing during severe storms.",
      "To persuade readers to install private solar panels on their roofs.",
      "To compare the cost of wind energy with traditional fossil fuels."
    ],
    "answer": 0,
    "explanation": "The text explains the mechanics of microgrids (local generation/batteries) and highlights their resilience during central failures.",
    "misconception": "Focusing on rooftop solar panels or fossil fuels which are either unmentioned or minor details.",
    "adaptiveWeight": 3,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "reading-g6-paired-260",
    "subject": "reading",
    "grade": 6,
    "domain": "Paired Passage Reasoning",
    "skillId": "paired-passage-set",
    "difficulty": "Advanced",
    "ritDifficulty": 260,
    "cognitiveLevel": "Comparing Arguments",
    "stimulus": `Passage A:
Public libraries must shift their budgets away from printed paper books and focus entirely on purchasing digital e-books. Digital books require zero shelf space, never suffer physical wear and tear, and can be checked out instantly by hundreds of patrons from the comfort of their homes.

Passage B:
While e-books are convenient, they cannot replace the physical library building. Libraries are vital community anchors. They provide free public internet access, academic workshops, local meeting rooms, and safe reading spaces for students. Printing budgets are a small price to pay to keep community hubs alive.`,
    "question": "What is the key difference between the arguments presented in the two passages?",
    "options": [
      "Passage A focuses strictly on the technological benefits of digital media, whereas Passage B emphasizes the library's physical role in a community.",
      "Passage A argues that libraries should close entirely, whereas Passage B supports library expansion.",
      "Passage A blames digital books for library deficits, whereas Passage B defends print media costs.",
      "There is no difference; both authors believe print media is completely obsolete."
    ],
    "answer": 0,
    "explanation": "Passage A argues for an all-digital shift, while Passage B argues that libraries are physical hubs that provide crucial community services.",
    "misconception": "Misinterpreting Passage A as wanting to close libraries down completely.",
    "adaptiveWeight": 4,
    "killer": true,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "reading-g6-philosophy-265",
    "subject": "reading",
    "grade": 6,
    "domain": "Paired Passage Reasoning",
    "skillId": "paired-passage-set",
    "difficulty": "Advanced",
    "ritDifficulty": 265,
    "cognitiveLevel": "High Academic Philosophy",
    "stimulus": `Epistemological Discourse:
The persistent debate between Classical Empiricism and Rationalism centers on the foundational source of human knowledge. Empiricists argue that the mind is a tabula rasa (blank slate) at birth, and all ideas are derivative of sensory impressions. Conversely, Rationalists maintain that sensory experience is fundamentally deceptive and incomplete; true knowledge is instead synthesized through innate concepts and deductive reasoning. Kantian synthesis attempted to bridge this gap, arguing that while all our knowledge begins with experience, it does not follow that it all arises out of experience, for the mind possesses active cognitive structures that organize sensory data.`,
    "question": "Based on the text, which statement best summarizes the Kantian synthesis regarding the acquisition of human knowledge?",
    "options": [
      "Sensory data is completely meaningless without innate mental frameworks that actively shape and organize it.",
      "Rationalism is entirely correct, as all sensory experience is a cognitive illusion.",
      "Empiricism is fully superior because innate ideas are unproven remnants of medieval theology.",
      "Kant completely rejected both theories in favor of an entirely neurological explanation of consciousness."
    ],
    "answer": 0,
    "explanation": "Kant argued that while knowledge starts with experience (sensory inputs), the mind's active, innate cognitive structures are necessary to organize and give shape to that data, merging aspects of both frameworks.",
    "misconception": "Concluding that Kant fully endorsed one side, or that he replaced them with modern physical neurology.",
    "adaptiveWeight": 4,
    "killer": true,
    "calculator": false,
    "status": "approved"
  },

  // ==================== LANGUAGE QUESTIONS ====================
  {
    "id": "language-g12-grammar-130",
    "subject": "language",
    "grade": 1,
    "domain": "Grammar and Usage",
    "skillId": "grammar-usage",
    "difficulty": "Low",
    "ritDifficulty": 130,
    "cognitiveLevel": "Subject-Verb Agreement",
    "stimulus": `Sentence Check:
The happy puppy ___ its tail whenever it sees a treat.`,
    "question": "Which word correctly completes the sentence?",
    "options": ["wags", "wag", "waging", "was waged"],
    "answer": 0,
    "explanation": "A singular subject (puppy) requires the singular verb 'wags' in the simple present tense.",
    "misconception": "Subject-verb disagreement (using plural verb 'wag' with singular noun).",
    "adaptiveWeight": 1,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "language-g23-mechanics-175",
    "subject": "language",
    "grade": 2,
    "domain": "Mechanics",
    "skillId": "mechanics",
    "difficulty": "Medium",
    "ritDifficulty": 175,
    "cognitiveLevel": "Basic Commas & Capitalization",
    "stimulus": `Editing Task:
Choose the sentence that is written with correct capitalization and punctuation.`,
    "question": "Which sentence is written correctly?",
    "options": [
      "After the rain stopped, the students played soccer in London.",
      "after the rain stopped the students, played soccer in London.",
      "After the rain stopped, the students played soccer in london.",
      "After the rain stopped the students played soccer in London"
    ],
    "answer": 0,
    "explanation": "Starts with capital letter, contains a comma after the introductory dependent clause, capitalizes the proper noun 'London', and ends with a period.",
    "misconception": "Failing to capitalize proper nouns or placing commas incorrectly.",
    "adaptiveWeight": 2,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "language-g34-combining-200",
    "subject": "language",
    "grade": 3,
    "domain": "Sentence Structure",
    "skillId": "sentence-structure",
    "difficulty": "Medium",
    "ritDifficulty": 200,
    "cognitiveLevel": "Conjunction Coordination",
    "stimulus": `Sentences to Combine:
The hiking trail was extremely steep. We successfully reached the mountain summit.`,
    "question": "Which sentence best combines the two ideas clearly and logically?",
    "options": [
      "Although the hiking trail was extremely steep, we successfully reached the mountain summit.",
      "The hiking trail was extremely steep because we successfully reached the mountain summit.",
      "We successfully reached the mountain summit, so the hiking trail was extremely steep.",
      "Although we successfully reached the mountain summit because the hiking trail was steep."
    ],
    "answer": 0,
    "explanation": "'Although' shows the concession/contrast between the steep trail and the success of reaching the summit.",
    "misconception": "Using 'because' or 'so' which implies an incorrect cause-and-effect relationship.",
    "adaptiveWeight": 2,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "language-g45-organization-225",
    "subject": "language",
    "grade": 4,
    "domain": "Paragraph Organization",
    "skillId": "paragraph-organization",
    "difficulty": "High",
    "ritDifficulty": 225,
    "cognitiveLevel": "Removing Irrelevant Details",
    "stimulus": `Draft Paragraph:
(1) Solar energy is a clean source of power. (2) Solar panels capture sunlight and turn it into electricity. (3) Many people enjoy eating pizza during weekend family gatherings. (4) Using solar power reduces pollution and helps save natural resources.`,
    "question": "Which sentence should be removed from the paragraph because it does not support the main topic?",
    "options": ["Sentence 3", "Sentence 1", "Sentence 2", "Sentence 4"],
    "answer": 0,
    "explanation": "Sentence 3 is about pizza, which is completely off-topic from solar energy.",
    "misconception": "Retaining interesting but completely irrelevant sentences.",
    "adaptiveWeight": 3,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "language-g56-revision-245",
    "subject": "language",
    "grade": 5,
    "domain": "Revision",
    "skillId": "revision",
    "difficulty": "High",
    "ritDifficulty": 245,
    "cognitiveLevel": "Improving Word Choice & Precision",
    "stimulus": `Draft Sentence:
The scientist made a very good and cool discovery in the laboratory.`,
    "question": "Which revision of the sentence uses the most precise and formal vocabulary?",
    "options": [
      "The researcher made a significant and groundbreaking discovery in the laboratory.",
      "The scientist made a super awesome and cool find in the lab.",
      "The laboratory was where a researcher found something really nice.",
      "The scientist got a good discovery that was quite neat."
    ],
    "answer": 0,
    "explanation": "'Significant' and 'groundbreaking' are precise, formal, and academic terms that replace 'good' and 'cool'.",
    "misconception": "Retaining informal/conversational slang in formal reports.",
    "adaptiveWeight": 3,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "language-g6-pronoun-250",
    "subject": "language",
    "grade": 6,
    "domain": "Grammar and Usage",
    "skillId": "grammar-usage",
    "difficulty": "Advanced",
    "ritDifficulty": 250,
    "cognitiveLevel": "Pronoun-Antecedent Agreement",
    "stimulus": `Sentence Check:
Neither of the boys had finished ___ science project before the bell rang.`,
    "question": "Which pronoun correctly completes the sentence?",
    "options": ["his", "their", "they", "our"],
    "answer": 0,
    "explanation": "'Neither' is a singular indefinite pronoun and requires a singular possessive pronoun ('his' or 'her') to agree with it.",
    "misconception": "Using 'their' because the plural noun 'boys' is closest to the blank (proximity agreement error).",
    "adaptiveWeight": 4,
    "killer": true,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "language-g6-tone-255",
    "subject": "language",
    "grade": 6,
    "domain": "Revision",
    "skillId": "revision",
    "difficulty": "Advanced",
    "ritDifficulty": 255,
    "cognitiveLevel": "Rhetorical Economy and Style",
    "stimulus": `Draft Paragraph for a Scientific Journal:
At this point in time, it is highly imperative that we take into absolute consideration the fact that our data contains several anomalies, which were caused by temperature fluctuations that occurred during the course of the experiment.`,
    "question": "Which of the following represents the most concise and stylistically appropriate revision for a scientific publication?",
    "options": [
      "Currently, we must consider that temperature fluctuations during the experiment caused several data anomalies.",
      "At this point in time, we should consider that temperature shifts caused some weird data anomalies in our lab.",
      "It is imperative to note the fact that the anomalies in our data occurred because temperatures fluctuated.",
      "Fluctuating temperatures in the course of our experiment made our data contain several anomalies at this point in time."
    ],
    "answer": 0,
    "explanation": "'Currently, we must consider that temperature fluctuations during the experiment caused several data anomalies' is active, precise, avoids redundancies ('at this point in time' -> 'currently'; 'take into absolute consideration the fact that' -> 'consider'), and maintains a scholarly tone.",
    "misconception": "Retaining passive wordiness ('it is imperative to note the fact') or informal phrases ('weird data anomalies').",
    "adaptiveWeight": 4,
    "killer": true,
    "calculator": false,
    "status": "approved"
  },

  // ==================== SCIENCE QUESTIONS ====================
  {
    "id": "science-g23-structures-180",
    "subject": "science",
    "grade": 2,
    "domain": "Life Sciences",
    "skillId": "life-science",
    "difficulty": "Medium",
    "ritDifficulty": 180,
    "cognitiveLevel": "Plant Adaptations",
    "stimulus": `Observation:
A desert cactus has a thick, fleshy green stem, a waxy outer skin layer, and sharp spines instead of wide leaves.

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 15px 0;">
  <svg width="280" height="160" viewBox="0 0 280 160" style="background: linear-gradient(180deg, #FADBD8 0%, #FDEDEC 100%); border: 1px solid #BDC3C7; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <!-- Ground -->
    <path d="M -10 140 Q 90 120 180 140 T 300 130 L 300 170 L -10 170 Z" fill="#EDBB99"/>
    <!-- Sun -->
    <circle cx="230" cy="35" r="18" fill="#F39C12" opacity="0.85"/>
    <circle cx="230" cy="35" r="25" fill="#F1C40F" opacity="0.3"/>
    
    <!-- Cactus Stem -->
    <rect x="125" y="50" width="30" height="90" rx="15" fill="#27AE60" stroke="#1E8449" stroke-width="1.5"/>
    <!-- Left Arm -->
    <path d="M 125 90 H 100 V 70" fill="none" stroke="#27AE60" stroke-width="16" stroke-linecap="round"/>
    <path d="M 125 90 H 100 V 70" fill="none" stroke="#1E8449" stroke-width="16" stroke-linecap="round" opacity="0.1"/>
    <!-- Right Arm -->
    <path d="M 155 105 H 175 V 80" fill="none" stroke="#27AE60" stroke-width="16" stroke-linecap="round"/>
    
    <!-- Spines -->
    <line x1="140" y1="60" x2="140" y2="52" stroke="#D35400" stroke-width="1.5"/>
    <line x1="130" y1="75" x2="122" y2="75" stroke="#D35400" stroke-width="1.5"/>
    <line x1="150" y1="75" x2="158" y2="75" stroke="#D35400" stroke-width="1.5"/>
    <line x1="140" y1="90" x2="140" y2="82" stroke="#D35400" stroke-width="1.5"/>
    <line x1="130" y1="105" x2="122" y2="105" stroke="#D35400" stroke-width="1.5"/>
    <line x1="150" y1="105" x2="158" y2="105" stroke="#D35400" stroke-width="1.5"/>
    <line x1="92" y1="70" x2="92" y2="62" stroke="#D35400" stroke-width="1.5"/>
    <line x1="183" y1="80" x2="183" y2="72" stroke="#D35400" stroke-width="1.5"/>
    
    <text x="140" y="153" fill="#7E5109" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Desert Cactus Adaptations</text>
  </svg>
</div>`,
    "question": "How do these structural features help the cactus survive in its environment?",
    "options": [
      "They store water and prevent it from drying out in the hot sun.",
      "They help the plant move around to find nutrient-rich soil.",
      "They make it easy for the plant to absorb frozen snow water.",
      "They block all sunlight from entering the plant stem."
    ],
    "answer": 0,
    "explanation": "Thick stems store water, waxy skin prevents evaporation, and spines reduce surface area to conserve water in dry deserts.",
    "misconception": "Believing plants can physically move to find nutrients, or that desert plants adapt to snow.",
    "adaptiveWeight": 2,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "science-g34-data-198",
    "subject": "science",
    "grade": 3,
    "domain": "Physical Sciences",
    "skillId": "physical-science",
    "difficulty": "Medium",
    "ritDifficulty": 198,
    "cognitiveLevel": "Energy Absorption Data",
    "stimulus": `Experiment Data:
Students filled three identical plastic cups with 100 mL of water. One cup was painted Black, one White, and one Silver. They placed all three under a hot lamp. After 30 minutes, they recorded the water temperature:
- Black Cup: increased by 9 degrees C
- White Cup: increased by 4 degrees C
- Silver Cup: increased by 2 degrees C

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 15px 0;">
  <svg width="320" height="150" viewBox="0 0 320 150" style="background: #FDFEFE; border: 1px solid #BDC3C7; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <!-- Glowing Lamp -->
    <circle cx="160" cy="15" r="12" fill="#F1C40F" opacity="0.85"/>
    <circle cx="160" cy="15" r="22" fill="#F1C40F" opacity="0.3"/>
    <path d="M 140 30 L 70 80 M 150 30 L 100 80 M 160 30 L 160 80 M 170 30 L 220 80 M 180 30 L 250 80" stroke="#F1C40F" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6"/>
    
    <!-- Desk line -->
    <line x1="20" y1="130" x2="300" y2="130" stroke="#7F8C8D" stroke-width="2"/>
    
    <!-- Black Cup -->
    <polygon points="50,90 80,90 75,130 55,130" fill="#2C3E50" stroke="#1A252F" stroke-width="1"/>
    <rect x="53" y="100" width="24" height="14" fill="#FFFFFF" fill-opacity="0.8" rx="2"/>
    <text x="65" y="110" fill="#2C3E50" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Black</text>
    <text x="65" y="143" fill="#2C3E50" font-size="9" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">+9°C</text>

    <!-- White Cup -->
    <polygon points="145,90 175,90 170,130 150,130" fill="#FAFAFA" stroke="#BDC3C7" stroke-width="1.5"/>
    <rect x="148" y="100" width="24" height="14" fill="#EAECEE" fill-opacity="0.8" rx="2"/>
    <text x="160" y="110" fill="#2C3E50" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">White</text>
    <text x="160" y="143" fill="#2C3E50" font-size="9" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">+4°C</text>

    <!-- Silver Cup -->
    <polygon points="240,90 270,90 265,130 245,130" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1"/>
    <rect x="243" y="100" width="24" height="14" fill="#FFFFFF" fill-opacity="0.8" rx="2"/>
    <text x="255" y="110" fill="#2C3E50" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Silver</text>
    <text x="255" y="143" fill="#2C3E50" font-size="9" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">+2°C</text>
  </svg>
</div>`,
    "question": "Which claim is best supported by the experimental evidence?",
    "options": [
      "Dark-colored objects absorb more light energy and heat up faster than light-colored objects.",
      "Light-colored objects absorb more light energy than dark objects.",
      "The color of an object has no effect on how much heat it absorbs.",
      "Silver paint creates cold water molecules inside the cup."
    ],
    "answer": 0,
    "explanation": "The black cup absorbed the most energy (gaining 9 degrees), proving that dark colors absorb more light/heat energy.",
    "misconception": "Inverting the relationship or claiming paint creates matter/cold molecules.",
    "adaptiveWeight": 2,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "science-g45-circuits-220",
    "subject": "science",
    "grade": 4,
    "domain": "Physical Sciences",
    "skillId": "physical-science",
    "difficulty": "High",
    "ritDifficulty": 220,
    "cognitiveLevel": "Electrical Current Flow",
    "stimulus": `Circuit Diagram:
A student builds a circuit with a battery, a switch, and two lightbulbs connected in a single, continuous loop (a series circuit). The student turns the switch on, and both bulbs light up. Suddenly, one bulb is unscrewed, and BOTH bulbs go dark.

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 15px 0;">
  <svg width="300" height="180" viewBox="0 0 300 180" style="background: #FDFEFE; border: 1px solid #BDC3C7; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <!-- Loop wires -->
    <path d="M 50 90 L 50 30 L 250 30 L 250 150 L 50 150 L 50 90" fill="none" stroke="#2C3E50" stroke-width="2"/>
    
    <!-- Battery -->
    <rect x="35" y="70" width="30" height="40" fill="#E74C3C" stroke="#C0392B" stroke-width="1" rx="2"/>
    <rect x="42" y="65" width="16" height="5" fill="#34495E"/>
    <text x="50" y="94" fill="#FFFFFF" font-size="10" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">9V</text>
    <text x="32" y="68" fill="#E74C3C" font-size="10" font-family="'Inter', sans-serif" font-weight="bold">+</text>
    
    <!-- Switch -->
    <rect x="130" y="25" width="40" height="10" fill="#FFFFFF"/>
    <line x1="130" y1="30" x2="170" y2="30" stroke="#27AE60" stroke-width="2"/>
    <circle cx="130" cy="30" r="3" fill="#2C3E50"/>
    <circle cx="170" cy="30" r="3" fill="#2C3E50"/>
    <text x="150" y="20" fill="#27AE60" font-size="7" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">CLOSED SWITCH</text>

    <!-- Light Bulb 1 -->
    <circle cx="150" cy="150" r="16" fill="#FEF9E7" stroke="#F39C12" stroke-width="2"/>
    <path d="M 140 140 L 160 160 M 140 160 L 160 140" stroke="#D35400" stroke-width="2"/>
    <text x="150" y="128" fill="#D35400" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Bulb 1</text>
    
    <!-- Light Bulb 2 -->
    <circle cx="250" cy="90" r="16" fill="#FEF9E7" stroke="#F39C12" stroke-width="2"/>
    <path d="M 240 80 L 260 100 M 240 100 L 260 80" stroke="#D35400" stroke-width="2"/>
    <text x="215" y="93" fill="#D35400" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Bulb 2</text>
    
    <text x="150" y="174" fill="#2C3E50" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Series Circuit Loop (Single Path)</text>
  </svg>
</div>`,
    "question": "What is the best explanation for why the second bulb went out?",
    "options": [
      "Removing the bulb broke the single path for electric current, stopping the flow of electricity.",
      "The battery instantly ran out of power when the bulb was removed.",
      "The unscrewed bulb absorbed all the electrical current from the battery.",
      "Light energy can only travel through glass that is connected in pairs."
    ],
    "answer": 0,
    "explanation": "A series circuit has a single path. Breaking the connection at one bulb opens the circuit and stops the current flow for all components.",
    "misconception": "Believing batteries deplete instantly on open circuits, or that current flow piles up at a single point.",
    "adaptiveWeight": 3,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "science-g56-design-238",
    "subject": "science",
    "grade": 5,
    "domain": "Experimental Design",
    "skillId": "experimental-design",
    "difficulty": "High",
    "ritDifficulty": 238,
    "cognitiveLevel": "Controlled Variables",
    "stimulus": `Experimental Setup:
A student wants to test the hypothesis: "Plants grown in soil with fertilizer will grow taller than plants grown in soil without fertilizer."`,
    "question": "To perform a fair test, which set of variables must the student keep EXACTLY the same for all plants?",
    "options": [
      "The amount of sunlight, the amount of water, and the type of plant.",
      "The type of fertilizer, the final plant height, and the number of leaves.",
      "The final height of the plants, the amount of water, and the soil type.",
      "The amount of fertilizer, the soil type, and the type of pot."
    ],
    "answer": 0,
    "explanation": "To isolate the effect of fertilizer (independent variable), all other environmental factors (sunlight, water, plant species) must be kept constant (controlled variables).",
    "misconception": "Listing the independent variable (fertilizer) or dependent variable (final height) as things that must stay constant.",
    "adaptiveWeight": 3,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "science-g6-cer-255",
    "subject": "science",
    "grade": 6,
    "domain": "Claim-Evidence-Reasoning",
    "skillId": "claim-evidence-reasoning",
    "difficulty": "Advanced",
    "ritDifficulty": 255,
    "cognitiveLevel": "Scientific Argumentation",
    "stimulus": `Ecological System (Calculator Active):
In a coniferous forest, researchers monitored a deer population before and after wolves were reintroduced. They gathered the following data:
- Before wolves: Deer population was 12,000; forest undergrowth was severely overgrazed.
- 5 Years after wolves: Deer population decreased to 7,500; young aspen trees increased in height by an average of 42%.
- 10 Years after wolves: Deer population stabilized at 6,200; aspen forests doubled in size, attracting beaver and songbird populations.

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 15px 0;">
  <svg width="320" height="180" viewBox="0 0 320 180" style="background: #FFF; border: 1px solid #BDC3C7; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <text x="160" y="18" fill="#0F355C" font-size="9" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Trophic Cascade Ecosystem Web</text>
    
    <!-- Wolves -->
    <rect x="110" y="28" width="100" height="28" fill="#34495E" stroke="#2C3E50" rx="4"/>
    <text x="160" y="45" fill="#FFF" font-size="9" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">🐺 Wolves (Apex)</text>
    
    <!-- Deer -->
    <rect x="18" y="90" width="112" height="28" fill="#EDBB99" stroke="#D35400" rx="4"/>
    <text x="74" y="107" fill="#2C3E50" font-size="9" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">🦌 Deer (Herbivore)</text>
    
    <!-- Aspens -->
    <rect x="185" y="90" width="115" height="28" fill="#D5F5E3" stroke="#27AE60" rx="4"/>
    <text x="242" y="107" fill="#2C3E50" font-size="9" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">🌳 Aspen Forests</text>
    
    <!-- Beavers -->
    <rect x="90" y="142" width="140" height="25" fill="#E8F8F5" stroke="#16A085" rx="4"/>
    <text x="160" y="158" fill="#16A085" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">🦫 Beavers & 🐦 Songbirds</text>
    
    <!-- Arrows -->
    <line x1="130" y1="56" x2="95" y2="90" stroke="#E74C3C" stroke-width="2"/>
    <polygon points="95,85 92,93 99,89" fill="#E74C3C"/>
    <text x="100" y="69" fill="#E74C3C" font-size="8" font-weight="bold">Controls</text>
    
    <line x1="130" y1="104" x2="185" y2="104" stroke="#E74C3C" stroke-width="1.5" stroke-dasharray="3,3"/>
    <polygon points="185,104 179,101 179,107" fill="#E74C3C"/>
    <text x="157" y="99" fill="#E74C3C" font-size="7" font-weight="bold">Grazes</text>
    
    <line x1="220" y1="118" x2="185" y2="142" stroke="#27AE60" stroke-width="2"/>
    <polygon points="185,142 191,138 184,136" fill="#27AE60"/>
    <text x="210" y="135" fill="#27AE60" font-size="7" font-weight="bold">Supports</text>
  </svg>
</div>`,
    "question": "Which scientific explanation best uses the data to support the claim that wolves act as a keystone species in this forest system?",
    "options": [
      "Wolves reduced overgrazing by keeping deer populations in check, which allowed plants to recover and created new habitats for other animals.",
      "Wolves ate beavers and songbirds, which caused the deer population to decline over ten years.",
      "Young aspen trees grew taller because wolves physically protected them from being cut down by beavers.",
      "Reintroducing wolves had no noticeable impact because the deer population remained above 6,000."
    ],
    "answer": 0,
    "explanation": "Wolves are keystone predators. Their presence controls deer (reduction to 7,500/6,200), allowing overgrazed aspens to recover, which in turn provides food/habitat to bring back beavers and songbirds (trophic cascade).",
    "misconception": "Focusing strictly on direct feeding paths (e.g. wolves eating beavers) instead of systemic cascade effects.",
    "adaptiveWeight": 4,
    "killer": true,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "science-g6-thermodynamics-263",
    "subject": "science",
    "grade": 6,
    "domain": "Physical Sciences",
    "skillId": "physical-science",
    "difficulty": "Advanced",
    "ritDifficulty": 263,
    "cognitiveLevel": "Thermodynamics Systems",
    "stimulus": `Thermodynamics Experiment:
An ideal gas is sealed inside a perfectly insulated, rigid cylinder fitted with a friction-free moving piston. A lab technician pushes the piston rapidly downward, compressing the gas to half of its initial volume.

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 15px 0;">
  <svg width="280" height="160" viewBox="0 0 280 160" style="background: #FFF; border: 1px solid #BDC3C7; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <rect x="50" y="20" width="180" height="110" fill="#EBEDEF" stroke="#34495E" stroke-width="3" rx="2"/>
    <rect x="52" y="50" width="176" height="12" fill="#D5D8DC" stroke="#7F8C8D" stroke-width="1"/>
    <rect x="135" y="10" width="10" height="40" fill="#7F8C8D"/>
    <circle cx="140" cy="10" r="6" fill="#34495E"/>
    
    <rect x="42" y="20" width="8" height="110" fill="#E67E22" opacity="0.7"/>
    <rect x="230" y="20" width="8" height="110" fill="#E67E22" opacity="0.7"/>
    
    <g fill="#E74C3C">
      <circle cx="80" cy="85" r="3.5"/>
      <line x1="80" y1="85" x2="92" y2="90" stroke="#E74C3C" stroke-width="1"/>
      <circle cx="120" cy="110" r="3.5"/>
      <line x1="120" y1="110" x2="110" y2="120" stroke="#E74C3C" stroke-width="1"/>
      <circle cx="170" cy="75" r="3.5"/>
      <line x1="170" y1="75" x2="182" y2="68" stroke="#E74C3C" stroke-width="1"/>
      <circle cx="200" cy="100" r="3.5"/>
      <line x1="200" y1="100" x2="210" y2="112" stroke="#E74C3C" stroke-width="1"/>
      <circle cx="100" cy="68" r="3.5"/>
      <line x1="100" y1="68" x2="90" y2="62" stroke="#E74C3C" stroke-width="1"/>
    </g>
    
    <text x="140" y="73" fill="#D35400" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Adiabatic Compression</text>
    <text x="140" y="145" fill="#2C3E50" font-size="9" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Insulated Thermal System: dQ = 0</text>
  </svg>
</div>`,
    "question": "Which of the following describes the thermodynamic changes taking place in the compressed gas system?",
    "options": [
      "The heat exchange (Q) is zero, work (W) is done on the gas, and the internal energy and temperature increase.",
      "The process is isothermal, work (W) is zero, and temperature remains constant.",
      "The internal energy decreases because work is done by the gas on the environment.",
      "Thermal energy is released into the surroundings because the walls are fully conductive."
    ],
    "answer": 0,
    "explanation": "Because the system is perfectly insulated, it is an adiabatic process where heat exchange (Q) is 0. Rapid compression means work is done ON the gas (W is negative relative to system boundaries). According to the first law of thermodynamics, delta U = Q - W. Since Q = 0 and W < 0, delta U becomes positive, meaning the internal energy and temperature increase.",
    "misconception": "Believing insulated walls allow heat conduction, or confusing work done ON the gas with work done BY the gas.",
    "adaptiveWeight": 4,
    "killer": true,
    "calculator": false,
    "status": "approved"
  },

  // ==================== SOCIAL STUDIES QUESTIONS ====================
  {
    "id": "social-g34-scarcity-185",
    "subject": "social",
    "grade": 3,
    "domain": "Economics",
    "skillId": "economics",
    "difficulty": "Medium",
    "ritDifficulty": 185,
    "cognitiveLevel": "Scarcity & Choice",
    "stimulus": `Scenario:
Kevin has exactly $15. He can use this money to buy either a new reading book or a toy model airplane kit, but he does not have enough money to buy both.

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 15px 0;">
  <svg width="280" height="130" viewBox="0 0 280 130" style="background: #FFF; border: 1px solid #BDC3C7; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <rect x="100" y="10" width="80" height="40" fill="#E8F8F5" stroke="#27AE60" stroke-width="1.5" rx="3"/>
    <circle cx="140" cy="30" r="12" fill="#D4EFDF" stroke="#27AE60" stroke-width="1"/>
    <text x="140" y="34" fill="#27AE60" font-size="12" font-family="'Courier New', monospace" font-weight="bold" text-anchor="middle">$15</text>
    <text x="140" y="60" fill="#27AE60" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Kevin's Budget Limit</text>
    
    <rect x="30" y="70" width="50" height="40" fill="#3498DB" stroke="#2980B9" rx="2"/>
    <rect x="35" y="70" width="5" height="40" fill="#2980B9"/>
    <text x="57" y="93" fill="#FFF" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">BOOK</text>
    <text x="55" y="122" fill="#2C3E50" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Option A: $15</text>

    <rect x="200" y="70" width="50" height="40" fill="#E74C3C" stroke="#C0392B" rx="2"/>
    <line x1="195" y1="88" x2="255" y2="88" stroke="#E74C3C" stroke-width="5" stroke-linecap="round"/>
    <text x="225" y="93" fill="#FFF" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">TOY</text>
    <text x="225" y="122" fill="#2C3E50" font-size="8" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Option B: $15</text>
    
    <text x="140" y="94" fill="#E67E22" font-size="12" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">OR</text>
  </svg>
</div>`,
    "question": "Which economic concept describes Kevin's situation?",
    "options": ["Scarcity", "Supply and demand", "Inflation", "Monopoly"],
    "answer": 0,
    "explanation": "Scarcity occurs when resources (money) are limited, forcing a choice between competing wants.",
    "misconception": "Confusing general scarcity with supply-and-demand market pricing.",
    "adaptiveWeight": 2,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "social-g45-sources-210",
    "subject": "social",
    "grade": 4,
    "domain": "Source Analysis",
    "skillId": "source-analysis",
    "difficulty": "Medium",
    "ritDifficulty": 210,
    "cognitiveLevel": "Primary vs. Secondary",
    "stimulus": `Historical Archives:
A researcher is studying the American gold rush of 1849. She finds several documents in a museum:
1. A diary handwritten by a gold miner in California in August 1849.
2. A textbook about California gold rush history written in 2005.
3. An audio interview recorded in 1955 with a miner's great-grandson.`,
    "question": "Which document is considered a primary source for the Gold Rush?",
    "options": ["The handwritten diary from 1849", "The history textbook from 2005", "The audio interview from 1955", "None of these are primary sources"],
    "answer": 0,
    "explanation": "Primary sources are direct, first-hand accounts created by individuals who witnessed or participated in the historical event at the time it occurred.",
    "misconception": "Confusing second-hand textbook summaries or later family interviews with first-hand primary records.",
    "adaptiveWeight": 2,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "social-g56-supplydemand-230",
    "subject": "social",
    "grade": 5,
    "domain": "Economics",
    "skillId": "economics",
    "difficulty": "High",
    "ritDifficulty": 230,
    "cognitiveLevel": "Market Forces",
    "stimulus": `Market Report:
During a severe winter frost in Florida, over 40% of the orange crop was frozen and destroyed. At the same time, demand for orange juice in grocery stores remained high and steady.

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 15px 0;">
  <svg width="300" height="200" viewBox="0 0 300 200" style="background: #FDFEFE; border: 1px solid #BDC3C7; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <line x1="40" y1="20" x2="40" y2="160" stroke="#2C3E50" stroke-width="1.5"/>
    <line x1="40" y1="160" x2="280" y2="160" stroke="#2C3E50" stroke-width="1.5"/>
    <text x="270" y="175" fill="#2C3E50" font-size="8" font-family="'Inter', sans-serif" font-weight="bold">Qty (Q)</text>
    <text x="15" y="25" fill="#2C3E50" font-size="8" font-family="'Inter', sans-serif" font-weight="bold">Price (P)</text>
    
    <line x1="60" y1="40" x2="240" y2="140" stroke="#2980B9" stroke-width="2"/>
    <text x="245" y="145" fill="#2980B9" font-size="8" font-family="'Inter', sans-serif" font-weight="bold">Demand (D)</text>
    
    <line x1="60" y1="140" x2="240" y2="40" stroke="#27AE60" stroke-width="2"/>
    <text x="245" y="38" fill="#27AE60" font-size="8" font-family="'Inter', sans-serif" font-weight="bold">S1 (Before Frost)</text>
    
    <line x1="100" y1="140" x2="280" y2="40" stroke="#E74C3C" stroke-width="2" stroke-dasharray="2,2"/>
    <text x="175" y="38" fill="#E74C3C" font-size="8" font-family="'Inter', sans-serif" font-weight="bold">S2 (After Frost)</text>
    
    <path d="M 180 80 Q 155 80 135 80" fill="none" stroke="#E74C3C" stroke-width="1.5"/>
    <polygon points="135,77 130,80 135,83" fill="#E74C3C"/>
    
    <circle cx="150" cy="90" r="3" fill="#2C3E50"/>
    <line x1="40" y1="90" x2="150" y2="90" stroke="#7F8C8D" stroke-width="0.5" stroke-dasharray="2,2"/>
    <text x="28" y="93" fill="#7F8C8D" font-size="8" font-weight="bold">P1</text>
    
    <circle cx="130" cy="78" r="3" fill="#E74C3C"/>
    <line x1="40" y1="78" x2="130" y2="78" stroke="#E74C3C" stroke-width="0.5" stroke-dasharray="2,2"/>
    <text x="28" y="81" fill="#E74C3C" font-size="8" font-weight="bold">P2</text>
    
    <text x="150" y="193" fill="#2C3E50" font-size="9" font-family="'Inter', sans-serif" font-weight="bold" text-anchor="middle">Orange Crop Market Shift</text>
  </svg>
</div>`,
    "question": "Based on the laws of supply and demand, what is the most likely effect of this frost on orange juice in stores?",
    "options": [
      "The supply of orange juice will decrease, and grocery store prices will increase.",
      "The supply will increase, and prices will decrease.",
      "Both supply and prices will remain exactly the same.",
      "Orange juice will become completely free to all buyers."
    ],
    "answer": 0,
    "explanation": "A freeze reduces the supply of oranges. Low supply coupled with steady high demand leads to scarcity in the market, causing grocery prices to rise.",
    "misconception": "Believing that high demand automatically increases supply, even when the raw resource is physically destroyed.",
    "adaptiveWeight": 3,
    "killer": false,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "social-g6-perspectives-250",
    "subject": "social",
    "grade": 6,
    "domain": "Source Analysis",
    "skillId": "source-analysis",
    "difficulty": "Advanced",
    "ritDifficulty": 250,
    "cognitiveLevel": "Evaluating Claims",
    "stimulus": `Historical Event:
A historian is analyzing the construction of the Transcontinental Railroad in the 1860s. She compares two different primary documents:
- Document A: A report written by a railroad company executive praising the introduction of dynamite and heavy machinery for speeding up tunnel excavation through the mountains.
- Document B: A letter written by an immigrant laborer describing dangerous working conditions, low pay, and frequent fatal explosions in the excavation tunnels.`,
    "question": "What is the most valuable lesson a historian can learn by comparing these two conflicting viewpoints?",
    "options": [
      "The same historical development had vastly different effects and perspectives depending on a person's socio-economic role.",
      "Document A is fully correct because company executives have access to more accurate scientific records.",
      "Document B is fully correct because laborers never make mistakes in letters.",
      "Both documents should be discarded because historical records are too contradictory to trust."
    ],
    "answer": 0,
    "explanation": "Comparing conflicting primary sources reveals that the same event (railroad tunnel construction) looked very different to an executive (efficiency, technology) than to a laborer (danger, low pay), showing multi-perspective historical realities.",
    "misconception": "Assuming one source must be 'fully correct' and the other 'fully wrong' instead of evaluating bias and contextual viewpoint.",
    "adaptiveWeight": 4,
    "killer": true,
    "calculator": false,
    "status": "approved"
  },
  {
    "id": "social-g6-geopolitics-258",
    "subject": "social",
    "grade": 6,
    "domain": "Economics",
    "skillId": "economics",
    "difficulty": "Advanced",
    "ritDifficulty": 258,
    "cognitiveLevel": "Comparative Geopolitics",
    "stimulus": `Global Trade Analytics:
A trade economist compiles a comparative index table for four industrial countries, measuring their domestic energy production self-reliance and raw critical mineral import vulnerability.

<div style="display: flex; flex-direction: column; align-items: center; margin: 15px 0;">
  <div class="table-wrap" style="width: 100%; max-width: 320px; font-size: 0.76rem; border-color: #34495E;">
    <table style="width: 100%;">
      <thead>
        <tr style="background: #2C3E50; color: #FFF;">
          <th>Nation</th>
          <th>Energy Self-Sufficiency</th>
          <th>Mineral Vulnerability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Nation A</strong></td>
          <td>92% (High)</td>
          <td>15% (Low)</td>
        </tr>
        <tr>
          <td><strong>Nation B</strong></td>
          <td>45% (Medium)</td>
          <td>88% (High)</td>
        </tr>
        <tr>
          <td><strong>Nation C</strong></td>
          <td>12% (Low)</td>
          <td>95% (High)</td>
        </tr>
        <tr>
          <td><strong>Nation D</strong></td>
          <td>70% (Medium)</td>
          <td>40% (Medium)</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
    "question": "If a global geopolitical dispute suddenly disrupts ocean-shipping shipping lanes for energy raw resources and raw metals, which nation's manufacturing sector is economically most vulnerable?",
    "options": ["Nation C", "Nation B", "Nation D", "Nation A"],
    "answer": 0,
    "explanation": "Nation C has both the lowest domestic energy self-sufficiency (12%) and the highest critical mineral import dependency/vulnerability index (95%), leaving its entire industrial manufacturing chain extremely exposed to ocean-shipping disruptions.",
    "misconception": "Selecting Nation B, which has a higher domestic energy resource buffer, or Nation A, which is the most self-reliant.",
    "adaptiveWeight": 4,
    "killer": true,
    "calculator": false,
    "status": "approved"
  }
];
