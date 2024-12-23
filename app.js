function toggleMenu() {
    const navbar = document.querySelector('nav');
    navbar.classList.toggle('show');
    const navItems = document.querySelectorAll('nav a');

    navItems.forEach(item => {
        item.classList.toggle('show-navitems');
    });
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('close');
}


fetchContent('home');
function navigateTo(page) {
    fetchContent(page);
}

function fetchContent(page) {
    let content = [];
    switch (page) {
        case 'home':
            content.push(`
      <header class="home-page">
      <div class="half-circle">
          <div class="half-circle-content">
              <img src="logos/college-logo.png"/>
              <h1 class="lakshya">Lakshya-2K24 </h1>
              <span id="timer"></span>
              <button class="button-85" role="button" onclick="navigateTo('major')">Let's Begin</button>
          </div>
      </div>
     </header>
            `);
            break;
        case 'brouchre':
            content.push(`
            
            <div class="brouchre">
            <a href="./brouchure/brochure.pdf" download><center><button class="brouchure-btn">Download</button></center></a>
                 <img   src="brouchure/brochure.jpg" alt="Student Image">
            </div>
            `)
            break;
        case 'major':
            content.push(`
            <div class="major">   
        
        <section>
          <div class="wrapper">
            <svg>
              <text x="50%" y="50%" text-anchor="middle">
                  MAJOR EVENTS
              </text>
            </svg>
          </div>
        </section>

    <div class="container">
        <div class="card">
            <div class="imgbx">
                <img src="major/srujana.jpg" alt="Srujana">
            </div>
            <div class="content">
                <h2>Srujana</h2>
                <h3>Paper Presentation</h3>
                <p>The primary objective of Srujana is encouraging participants to present their papers,
                the event aims to foster a spirit of exploration and creativity.</p>
                <a href="https://docs.google.com/forms/d/1znBR1yXWIrr7KoBV1nlaMyzXAH1Dm07FjyNk27h2w9Q/viewform?edit_requested=true" target="_blank">Register Now</a>
                <button class="open-modal-btn">More Details</button>
        
                <div class="modal-overlay">
                    <div class="modal">
                        <div class="modal-header">
                            <h2>LAKSHYA-2K24</h2>
                            <button class="close-modal-btn">&times;</button>
                        </div>
                        <div class="modal-content">
                        <center><h1>Srujana - Paper Presentation</h1></center>

                          <p>The primary objective of Srujana is to provide a stage where the brilliance 
                          of technological advancements can shine. By encouraging participants to present
                           their papers, the event aims to foster a spirit of exploration and creativity.
                            This is not just about showcasing the latest gadgets or software; it's about
                             unraveling the stories behind these innovations—the thought processes,
                              challenges faced, and breakthrough moments.</p>

                          <h2>Key Goals:</h2>

                          <ul>
                            <li>Promoting Technological Developments: Srujana serves as a bridge between
                             academia and industry, offering a space for individuals to present and discuss
                              cutting-edge technologies that have the potential to shape our future.</li>
                            <li>Showcasing Creative Ability: Beyond the technicalities, Srujana values the
                             creative prowess involved in identifying problems, proposing solutions, and
                              effectively communicating these ideas. It's a tribute to the artistry of technological innovation.</li>
                          </ul>

                          <h2>Event Structure:</h2>

                          <p>The event unfolds with participants submitting papers on a diverse array of technological topics. A meticulous review process ensures that only the most impactful and original presentations make it to the final stage.</p>

                          <p>Registration Fee – Rs. 200/-</p>
                          <h2>Topics:</h2>
                          <ul>
                          <li><h1>Departments (CSE,IT,CSM,AI&DS) : </h1>  Cyber Security, Cloud Computing, Big Data, DL&ML, NLP, Data Mining, IoT, Virtual Reality and Augmented Reality & Any New Technology and Others.
                          </li>
                          <li><h1>Department of ECE : </h1>6G Technology, IOT Applications, Wireless Communications, Artificial Intelligence, Satellite Communication, National Quantum Mission, Trends in VLSI design, Biosensors...
                          etc( not only above topics ,they can choose any one new innovative topics which is related to the ECE domain).
                          </li>
                          <li><h1>Department of EEE : </h1>Trends In Electric Vehicles, Renewable Energy Sources, Emerging Technology In Wireless Power Transfer, Emerging Technology In Industrial Automation, Application Of Internet Of Things In Electrical Sector, Emerging Technologies In Wireless Communication, Smart Grids, Emerging Technologies In Power Industry, Emerging Technologies In Agriculture Sector, Artificial Intelligence In Electrical Sector.
                          </li>
                          <li><h1>Department of MECH : </h1>IC Engines, EV Vehicles, Refrigerator and air conditioners, Water and gas turbines, Machine Tools, Mechanisms, Thermal engineering, Gears, Fuel testing of bio deasel, Design softwares, Analysis softwares, Advance manufacturing process, CNC, Robotics And also ani interdisciplinary tobics.
                          </li>
                          <li><h1>Departmentof ASE  : </h1>Improvements in missile technology, Recent space missions, Space stations, Unconentional aircraft designs, Uav design and usages, Space observatories.
                          </li>
                          <li><h1>Departmentof CIVIL  : </h1>Highway engineering, Transportation engineering, Solid mechanics, Geotechnical Engineering, Concrete technology, Environmental Engineering and also includes.
                          </li>
                          </ul>
                          <h2>Guidelines:</h2>
                          <ul>
                            <li>Participants should submit their PPTs on or before 25/02/2024.
                            </li>
                            <li>After screening,you will be intimated with confirmation emails</li>
                          </ul>
                          <h2>Prizes:</h2>
                          <ul>
                            <li>First Prize : 2000/-</li>
                            <li>Second Prize : 1000/-</li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="imgbx">
                <img src="major/pragna.jpg" alt="Pragna">
            </div>
            <div class="content">
                <h2>Pragna</h2>
                <h3>Poster Presentation</h3>
                <p>The fundamental objective of Pragna is to create a visual spectacle that encapsulates
                the essence of technological advancements </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd5axG5H2Q88FydvqiHSZfCzakIkt0I_z5QFmhMcQEljZsuDQ/viewform?usp=sf_link" target="_blank">Register Now</a>
                <button class="open-modal-btn">More Details</button>
                <div class="modal-overlay">
                    <div class="modal">
                        <div class="modal-header">
                            <h2>LAKSHYA-2K24</h2>
                            <button class="close-modal-btn">&times;</button>
                        </div>
                        <div class="modal-content">
                        <center><h1>Pragna – Poster Presentation</h1></center>

                              <p>The fundamental objective of Pragna is to create a visual spectacle that encapsulates the essence of technological advancements. Through poster presentations, participants are encouraged to delve deep into their chosen domains, offering a comprehensive and visually engaging snapshot of their technical assessments.</p>

                              <h2>Key Goals:</h2>

                              <ul>
                                <li>Collation of Technical Insights: Pragna encourages participants to delve into their specialized technological domains, gathering valuable insights that can contribute to the broader understanding of current advancements.</li>
                                <li>Compilation of Comprehensive Data: Beyond surface-level understanding, participants are challenged to compile intricate technical data into visually appealing posters. This process not only showcases their grasp of the subject matter but also enhances their skills in presenting complex information in an accessible manner.</li>
                                <li>Analysis of Emerging Trends: Pragna acts as a mirror reflecting the current state of technological landscapes. The event aims to analyze emerging trends, providing a visual narrative that not only informs but also sparks discussions on the future trajectory of various technological domains.</li>
                                <li>Effective Communication: The emphasis on poster presentation goes beyond aesthetics; it's about effectively communicating intricate technical assessments to a diverse audience. Participants are encouraged to employ visual elements, graphics, and concise text to make their presentations accessible and engaging.</li>
                              </ul>

                              <h2>Event Structure:</h2>

                              <p>Participants in Pragna submit visually compelling posters that encapsulate their technical assessments. These submissions undergo a thorough evaluation process, considering both the technical depth and the communicative effectiveness of the presentations.</p>

                              <p>Registration Fee – Rs. 200/-</p>
                              <h2>Topics:</h2>
                              <ul>
                              <li><h1>Departments (CSE,IT,CSM,AI&DS) : </h1>  Cyber Security, Cloud Computing, Big Data, DL&ML, NLP, Data Mining, IoT, Virtual Reality and Augmented Reality & Any New Technology and Others.
                              </li>
                              <li><h1>Department of ECE : </h1>6G Technology, IOT Applications, Wireless Communications, Artificial Intelligence, Satellite Communication, National Quantum Mission, Trends in VLSI design, Biosensors...
                              etc( not only above topics ,they can choose any one new innovative topics which is related to the ECE domain).
                              </li>
                              <li><h1>Department of EEE : </h1>Trends In Electric Vehicles, Renewable Energy Sources, Emerging Technology In Wireless Power Transfer, Emerging Technology In Industrial Automation, Application Of Internet Of Things In Electrical Sector, Emerging Technologies In Wireless Communication, Smart Grids, Emerging Technologies In Power Industry, Emerging Technologies In Agriculture Sector, Artificial Intelligence In Electrical Sector.
                              </li>
                              <li><h1>Department of MECH : </h1>IC Engines, EV Vehicles, Refrigerator and air conditioners, Water and gas turbines, Machine Tools, Mechanisms, Thermal engineering, Gears, Fuel testing of bio deasel, Design softwares, Analysis softwares, Advance manufacturing process, CNC, Robotics And also ani interdisciplinary tobics.
                              </li>
                              <li><h1>Departmentof ASE  : </h1>Improvements in missile technology, Recent space missions, Space stations, Unconentional aircraft designs, Uav design and usages, Space observatories.
                              </li>
                              <li><h1>Departmentof CIVIL  : </h1>Highway engineering, Transportation engineering, Solid mechanics, Geotechnical Engineering, Concrete technology, Environmental Engineering and also includes.
                              </li>
                              </ul>
                              <h2>Guidelines:</h2>
                              <ul>
                                <li>Participants should submit their posters on or before 25/02/2024</li>
                                <li>After screening,you will be intimated with confirmation emails</li>
                              </ul>
                              <h2>Prizes:</h2>
                              <ul>
                                <li>First Prize : 2000/-</li>
                                <li>Second Prize : 1000/-</li>
                              </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="imgbx">
                <img src="major/medha.jpg" alt="Medha">
            </div>
            <div class="content">
                <h2>Medha</h2>
                <h3> Quiz</h3>
                <p>The core objectives of the MEDHA is to cultivate critical thinking, enhance general awareness, and sharpen the participant's ability to diagnose and solve problem</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_jnwYmJbPKmTQB5rXpiljS2cnYDObXg4zL8qL_uTaobg16Q/viewform?usp=sf_link" target="_blank">Register Now</a>
                <button class="open-modal-btn">More Details</button>
                <div class="modal-overlay">
                    <div class="modal">
                        <div class="modal-header">
                            <h2>LAKSHYA-2K24</h2>
                            <button class="close-modal-btn">&times;</button>
                        </div>
                        <div class="modal-content">
                        <center><h1>MEDHA - Quiz</h1></center>

                            <p>The core objectives of the MEDHA is to cultivate critical thinking, enhance general awareness, and sharpen the participant's ability to diagnose and solve problems. Moreover, it serves as a litmus test for the technical quotient of students, gauging their proficiency in various technical domains.</p>

                            <h2>Key Goals:</h2>

                            <ul>
                              <li>Developing Thinking Abilities: MEDHA Quiz aims to go beyond rote memorization by challenging participants to think critically. Questions are crafted to require thoughtful analysis, problem-solving skills, and the ability to apply theoretical knowledge to real-world scenarios.</li>
                              <li>Fostering General Awareness: Beyond technical expertise, the quiz encourages participants to stay abreast of current affairs, general knowledge, and global happenings. This holistic approach ensures that participants are well-rounded in their understanding of the world.</li>
                              <li>Sharpening Problem-Diagnosing Skills: The quiz is not just about answering questions; it's about diagnosing problems within the given information. Participants are tested on their ability to identify key issues, analyze data, and arrive at logical solutions.</li>
                              <li>Testing Technical Quotient: MEDHA Quiz delves into various technical domains, assessing the depth of participants' understanding in areas such as science, engineering, mathematics, and technology. This comprehensive evaluation provides insights into the technical prowess of each participant.</li>
                            </ul>

                            <h2>Event Structure:</h2>

                            <p>The MEDHA Quiz comprises rounds that progressively challenge participants. Questions range from general knowledge and current affairs to intricate technical problems. MEDHA Quiz recognizes the top performers who exhibit exceptional thinking abilities, general awareness, and technical prowess.</p>

                            <p>Registration Fee – Rs. 200/-</p>
                          
                            <h2>Prizes:</h2>
                            <ul>
                              <li>First Prize : 2000/-</li>
                              <li>Second Prize : 1000/-</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="imgbx">
                <img src="major/nipuna.png" alt="Nipuna">
            </div>
            <div class="content">
                <h2>Nipuna</h2>
                <h3>Project Expo</h3>
                <p>The primary objectives of Nipuna are twofold: to inspire the creation of technical models or prototypes and to foster the development of innovative solutions for real-world challenges</p>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2y7LyH40SAecH-Azz8tQHew_aZvb1ZffsciLl5tZM1u4O0Q/viewform?usp=sf_link" target="_blank">Register Now</a>
                <button class="open-modal-btn">More Details</button>
                <div class="modal-overlay">
                    <div class="modal">
                        <div class="modal-header">
                            <h2>LAKSHYA-2K24</h2>
                            <button class="close-modal-btn">&times;</button>
                        </div>
                        <div class="modal-content">
                        <center><h1>NIPUNA – Project Expo</h1></center>

                            <p>The primary objectives of Nipuna are twofold: to
                             inspire the creation of technical models or prototypes
                              and to foster the development of innovative solutions
                               for real-world challenges. This expo encourages participants
                                to move beyond theoretical concepts, translating their ideas into tangible, functional projects.</p>

                            <h2>Key Goals:</h2>

                            <ul>
                              <li>Formulating Technical Models: Nipuna challenges participants to think beyond theoretical concepts by formulating practical and executable technical models. This involves planning and strategizing to bring ideas to life in a tangible form.</li>
                              <li>Planning and Development: The expo emphasizes the importance of meticulous planning and development processes. Participants are encouraged to outline their project plans, detailing the steps involved in turning a concept into a functional prototype.</li>
                              <li>Execution of Prototypes: The heart of Nipuna lies in the execution of ideas. Participants are provided with a platform to demonstrate their technical acumen by presenting fully functional prototypes or models that address real-time problems.</li>
                              <li>Innovative Problem-Solving: The expo places a premium on innovation by challenging participants to develop solutions that go beyond the conventional. Whether it's addressing environmental concerns, societal challenges, or industry-specific problems, Nipuna encourages groundbreaking approaches to problem-solving.</li>
                            </ul>

                            <h2>Event Structure:</h2>

                            <p>Participants in Nipuna submit comprehensive project proposals outlining their technical models, development plans, and intended impact. A stringent selection process ensures that only the most promising projects make it to the expo.</p>
                            <p>Registration Fee – Rs. 200/-</p>
                            <h2>Guidelines:</h2>
                            <ul>
                              <li>Participants should submit their ideas as abstract on or before 25/02/2024</li>
                              <li>After screening,you will be intimated with confirmation emails</li>
                            </ul>
                            <h2>Prizes:</h2>
                            <ul>
                              <li>First Prize : 2000/-</li>
                              <li>Second Prize : 1000/-</li>
                            </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <section style="margin-top:-80px">
    <div class="wrapper" >
      <svg>
        <text x="50%" y="50%" text-anchor="middle">
            MBA EVENTS
        </text>
      </svg>
    </div>
  </section>
    <div class="container">
    <div class="card">
    <div class="imgbx">
        <img src="major/mbasrujana.jpg" alt="MBA-Srujana">
    </div>
    <div class="content">
        <h2>Srujana</h2>
        <h3>Paper Presentation</h3>
        <p>The objective of the competition is to encourage new talent and innovation in management students from various institutions.
             </p>
              <button class="open-modal-btn">More Details</button>
        <div class="modal-overlay">
            <div class="modal">
                <div class="modal-header">
                    <h2>LAKSHYA-2K24</h2>
                    <button class="close-modal-btn">&times;</button>
                </div>
                <div class="modal-content">
                    <h1>SRUJANA – PAPER PRESENTATION</h1>

                    <p>The objective of the competition is to encourage new talent and innovation in management students from various institutions. An approach to expose your talent and in-depth knowledge in your resource areas.</p>
                  
                    <p>Students can present their paper relevant to management education in the following areas:</p>
                  
                    <ul>
                      <li>Financial Management</li>
                      <li>Human Resource Management</li>
                      <li>Marketing Management</li>
                      <li>AI in Management</li>
                      <li>Business Analytics</li>
                      <li>E-Commerce</li>
                    </ul>
                  
                    <h2>Rules:</h2>
                  
                    <ul>
                      <li>Registration fee is Rs. 200 per team</li>
                      <li>Team consists of a maximum of 2 members</li>
                      <li>The copy of the paper / abstract is to be submitted on or before 28 February 2024</li>
                      <li>Mail Id: <a href="mailto:lbrce.lakshya2024@gmail.com">lbrce.lakshya2024@gmail.com</a></li>
                      
                    </ul>
                  
                    <h2>Guidelines:</h2>
                  
                    <ul>
                      <li>Participants must bring 3 copies of the paper for judgment purposes</li>
                      <li>PowerPoint presentation of 5 to 7 minutes (including questioning session)</li>
                      <li>Top 2 Teams will be awarded with Certificates & Cash prizes</li>
                      <li>Certificate of Participation will be provided for every registered member</li>
                      <li>The decision of the judges will be final</li>
                    </ul>
                  
                    <h2>Faculty Coordinators:</h2>
                  
                    <p>Dr. R. Jaya Lakshmi, Assistant Professor</p>
                    <p>Dr. O. Naresh, Assistant Professor</p>
                    </div>
            </div>
        </div>
    </div>
</div>
    <div class="card">
        <div class="imgbx">
            <img src="major/mbapragna.jpg" alt="MBA-Pragna">
        </div>
        
        <div class="content">
            <h2>Pragna</h2>
            <h3>Young Manager</h3>
            <p>The participants deliberated on the theme “Transformational role of Young Managers in a new age economy towards building sustainable organization”. </p>
    
                  <button class="open-modal-btn">More Details</button>
             
            <div class="modal-overlay">
                <div class="modal">
                    <div class="modal-header">
                        <h2>LAKSHYA-2K24</h2>
                        <button class="close-modal-btn">&times;</button>
                    </div>
                    <div class="modal-content">
                        <h1>PRAGNA – YOUNG MANAGER</h1>
                        <p>The participants deliberated on the theme “Transformational role of Young Managers in a new age economy towards building sustainable organization”. We judge on the basis of their leadership skills, knowledge, professional prowess, and creativity. The competition involves a business plan by participants representing leading corporate houses from across India.</p>
                        <h2>Rules:</h2>
                        <ul>
                        <li>Registration fee is Rs. 200 for participant</li>
                        <li>Solo participation</li>
                        <li>Written test as a preliminary test</li>
                        <li>1st round is Group Discussion</li>
                        <li>2nd round is Just A Minute</li>
                        <li>3rd round is Stress Interview</li>
                        </ul>
                        <h2>Guidelines:</h2>
                        <ul>
                        <li>Top 2 Participants will be awarded with Certificates & Cash prizes</li>
                        <li>Certificate of Participation will be provided for every registered member</li>
                        <li>The decision of the judges will be final</li>
                        </ul>
                        <h2>Faculty Coordinators:</h2>
                        <p>Dr. T. Rajasekhar, Professor</p>
                        <p>Dr. K. Deepika, Associate Professor</p>
                        </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="imgbx">
            <img src="major/mbamedha.jpg" alt="MBA-Medha">
        </div>
        <div class="content">
            <h2>Medha</h2>
            <h3>Business Quiz</h3>
            <p>To develop thinking ability, general awareness, sharpness in diagnosing the problem. 
                To stake out challenges and contests in general and technical topics.</p>
                  <button class="open-modal-btn">More Details</button>

            <div class="modal-overlay">
                <div class="modal">
                    <div class="modal-header">
                        <h2>LAKSHYA-2K24</h2>
                        <button class="close-modal-btn">&times;</button>
                    </div>
                    <div class="modal-content">
                        <h1>MEDHA – BUSINESS QUIZ</h1>

                        <p>To develop thinking ability, general awareness, sharpness in diagnosing the problem. To stake out challenges and contests in general and technical topics.</p>
                      
                        <h2>Rules:</h2>
                      
                        <ul>
                          <li>Registration fee is Rs. 200 per team</li>
                          <li>Team consists of a maximum of 2 members</li>
                        </ul>
                      
                        <h2>Guidelines:</h2>
                      
                        <ul>
                          <li>1st round is a written test for all the registered teams</li>
                          <li>Top 6 teams are qualified for the final round (2nd round)</li>
                          <li>2nd round is finals consists of 5 sub-rounds (Example: current affairs, personalities, logos, taglines, products & brands, Rapid fire etc.)</li>
                          <li>Top 2 Teams will be awarded with Certificates & Cash prizes</li>
                          <li>Certificate of Participation will be provided for all the registered members</li>
                          <li>The decision of the Quiz master is final</li>
                        </ul>
                      
                        <h2>Faculty Coordinators:</h2>
                      
                        <p>Dr. V. V. Narsi Reddy, Associate Professor</p>
                        <p>Mrs. Y. Nagamani, Assistant Professor</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="imgbx">
            <img src="major/mbanipuna.jpg" alt="MBA-Nipuna">
        </div>
        <div class="content">
            <h2>Nipuna</h2>
            <h3>Business Plan</h3>
            <p>The primary objectives of Nipuna are twofold: to inspire the creation of technical models or
                prototypes and to foster the development of innovative solutions for real-world challenges</p>
                  <button class="open-modal-btn">More Details</button>

            <div class="modal-overlay">
                <div class="modal">
                    <div class="modal-header">
                        <h2>LAKSHYA-2K24</h2>
                        <button class="close-modal-btn">&times;</button>
                    </div>
                    <div class="modal-content">
                        <h1>NIPUNA – BUSINESS PLAN</h1>

<h2>Rules:</h2>
<ul>
    <li>Registration fee is Rs. 200 per team</li>
    <li>Team consists of a maximum of 2 members</li>
    <li>Every team will be given 10 minutes to present their plan through PowerPoint Presentation</li>
    <li>Ad-making should not be more than 2 minutes</li>
</ul>

<h2>Steps in the Presentation of Business Plan:</h2>
<ul>
    <li>Introduction</li>
    <li>Market Analysis</li>
    <li>Business Projections</li>
    <li>Strategy Implementation</li>
    <li>Strategic Positioning</li>
    <li>Management Structuring</li>
    <li>Financial Consideration</li>
    <li>Ad-making</li>
</ul>

<h2>Guidelines:</h2>
<ul>
    <li>Top 2 Teams will be awarded with Certificates & Cash prizes</li>
    <li>Certificate of Participation will be provided for every registered member</li>
    <li>The decision of the judges will be final</li>
</ul>

<h2>Faculty Coordinators:</h2>
<p>Dr. D. Venkateswarlu, Associate professor</p>
<p>Mr. M. S. Chakravarthy, Assistant Professor</p>
                        </div>
                </div>
            </div>
        </div>
    </div>


</div>
          <center><button class="button-85" id="mobile_button" role="button" onclick="navigateTo('dept')">More Events</button></center>
         
            
    `);
            break;
        case 'dept':
            content.push(`
            <div class="dept-container">
    <section>
        <div class="wrapper">
            <svg>
                <text x="50%" y="50%" text-anchor="middle">
                    Special Events
                </text>
            </svg>
        </div>
    </section>
    <ul class="cards1">
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="dept/cruize.jpg" alt="CRUIZE 8.0"></div>
                <div class="card_content1">
                    <h2 class="card_title1">CRUIZE 8.0</h2>
                    <p class="card_text1">Department of ECE</p>
                    <div class="dept_text_button">
                        <button class="open-modal-btn1">Read More</button>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">
                                    <h2>LAKSHYA-2K24</h2>
                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                    <h1>CRUIZE 8.0 - Department of ECE</h1>

                                    <h2>Aim:</h2>

                                    <p>Real-time Demo for getting a job in your dream companies.</p>

                                    <h2>Rounds:</h2>

                                    <p>Total 3 rounds and every round will be an elimination round.</p>

                                    <ol>
                                        <li>
                                            <strong>Written Test</strong>
                                            <p>Aptitude (5), verbal (5), logical (5), and Critical Reasoning (5)</p>
                                            <p>Timings: 20 minutes, 20 questions</p>
                                        </li>
                                        <li>
                                            <strong>Communication Round (JAM/GD)</strong>
                                            <p>Timings: 10 minutes</p>
                                        </li>
                                        <li>
                                            <strong>Technical Interview</strong>
                                            <p>Timings: 5 minutes</p>
                                        </li>
                                    </ol>

                                    <h2>Rules:</h2>

                                    <ol>
                                        <li>Everyone should carry your mobile phone and pen for the written test.</li>
                                        <li>Everyone should write the test within the allotted classrooms.</li>
                                        <li>Those who qualified for the technical interview should bring your updated
                                            resume.</li>
                                    </ol>

                                    <h2>Entry Fee:</h2>

                                    <p>100/- per head</p>

                                    <h2>Rewards:</h2>

                                    <p>Top 4 members will get the Rewards</p>

                                    <ul>
                                        <li>1st 2 members win a cash prize of Rs.1000.</li>
                                        <li>Next 2 members will receive a cash prize of Rs.500.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="https://forms.gle/Pp4xyqsZKGPREdkY7" target="_blank">
                        <button class="open-modal-btn1">Register</button>
                     </a>
                    </div>
                </div>
            </div>
        </li>
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="dept/logic.jpg" alt="EVOCATION AND LOGIC"></div>
                <div class="card_content1">
                    <h2 class="card_title1">EVOCATION AND LOGIC</h2>
                    <p class="card_text1">Department of CIVIL</p>
                    <div class="dept_text_button"><button class="open-modal-btn1">Read More</button>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">
                                    <h2>LAKSHYA-2K24</h2>
                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                    <h1>EVOCATION AND LOGIC</h1>

                                    <h2>Number of Rounds:</h2>

                                    <p>Total two rounds.</p>
                                    <ol>
                                        <li>Round-1: Cartoon and Picture puzzle.</li>
                                        <li>Round-2: Analytical reasoning.</li>
                                    </ol>

                                    <h2>RULES:</h2>

                                    <ol>
                                        <li>For team formation Minimum-2 & Maximum-4.</li>
                                        <li>No Electronic Gadgets are permitted.</li>
                                        <li>Score of 1st round will be continued for 2nd round.</li>
                                        <li>Maximum score obtained will be the winners.</li>
                                    </ol>

                                    <h2>Entry Fee:</h2>

                                    <p>100/- per person</p>
                                    <p>300/- per group</p>
                                    <h2>REWARDS:</h2>
                                    <p>Top 2 members will be awarded</p>
                                    <ul>
                                        <li>1st prize – Cash prize of Rs. 1000</li>
                                        <li>2nd prize – Cash prize of Rs. 500</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSflVq3DU5xBT00Y6bnc-sRJ-HxT83gkeFD0G7au71M-QbF7IA/viewform?vc=0&c=0&w=1&flr=0" target="_blank">
                        <button class="open-modal-btn1">Register</button>
                     </a>
                    </div>
                </div>
            </div>
        </li>
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="dept/flyhigh.jpg" alt="FLY HIGH"></div>
                <div class="card_content1">
                    <h2 class="card_title1">FLY HIGH </h2>

                    <p class="card_text1">Department of ASE</p>

                    <div class="dept_text_button"><button class="open-modal-btn1">Read More</button>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">

                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                    <h1>FLY HIGH - Event Details</h1>

                                    <h2>Event Preparation:</h2>

                                    <p>Build entry prior to the event.</p>

                                    <h2>Team Size:</h2>

                                    <p>1-3 Students per team</p>

                                    <h2>Entry Fee:</h2>

                                    <p>Rs. 100/-</p>

                                    <h2>Events:</h2>

                                    <ul>
                                        <li>HYDRO ROCKET</li>
                                        <li>GLIDER</li>
                                        <li>HOT AIR BALLOON</li>
                                    </ul>

                                    <center><h2>HYDRO ROCKET</h2></center>

    <p>
        A water rocket is a type of model rocket using water as its reaction mass.
        The water is forced out by a pressurized gas, typically compressed air.
        Like all rocket engines, it operates on the principle of Newton's third law of motion.
    </p>

    <h2>MATERIALS:</h2>
    <ul>
        <li>Two liters plastic soft drink bottle (only be considered).</li>
        <li>Paper or plastic sheet material such as cardboard, Styrofoam, thin plastic sheet, etc.</li>
        <li>String, thread, or ribbon (for parachute lines).</li>
    </ul>

    <h2>GUIDELINES:</h2>
    <ul>
        <li>Rockets must be built by the participating students using only the above listed materials. (SHOULD NOT BE READY MADE).</li>
        <li>Only one two-liter bottle may be filled with water and pressurized. The pressurized bottle itself must not be modified structurally.</li>
        <li>The mouth of the pressurized bottle must be the size of a soft drink bottle mouth to be fitted to the launcher.</li>
        <li>Additional two-liter bottles may be cut and added to the pressurized bottle using tape.</li>
        <li>Fins must not interfere with the mouth of the pressurized bottle so that it can fit on the launcher.</li>
    </ul>

    <!-- GLIDER Event -->
    <center><h2>GLIDER</h2></center>

    <p>
        A glider is a special kind of aircraft that has no engine. There are many different types of gliders.
        Paper airplanes are the simplest gliders to build and fly. Balsa wood or Styrofoam toy gliders are
        an inexpensive vehicle for students to have fun while learning the basics of aerodynamics.
    </p>

    <h2>MATERIALS:</h2>
    <p>Polystyrene, balsa wood, foam, fibre glass, etc.</p>

    <h2>GUIDELINES:</h2>
    <ul>
        <li>Gliders must be built by the participating students using only the above listed materials. (SHOULD NOT BE READY MADE).</li>
        <li>The absolute most important thing that an aircraft needs to fly is to be properly balanced.</li>
        <li>The glider should fly successfully.</li>
        <li>No radio control of the gliders is allowed.</li>
        <li>The gliders will be hand-launched with no power assist (springs, bungee cords, etc.) or any other device by a team member in an indoor facility.</li>
    </ul>

    <!-- HOT AIR BALLOON Event -->
    <center><h2>HOT AIR BALLOON</h2></center>

    <p>
        A hot air balloon is a lighter-than-air aircraft consisting of a bag, called an envelope,
        which contains heated air. Suspended beneath is a wicker basket (in some long-distance
        or high-altitude balloons, a capsule), which carries a source of heat. The heated air inside
        the envelope makes it buoyant, since it has a lower density than the colder air outside the envelope.
    </p>

    <h2>MATERIALS:</h2>
    <p>Aluminium foils, polythene covers, colour papers, light garbage bags, etc. can be used for the balloon. Wax candles can be used for burners.</p>

    <h2>GUIDELINES:</h2>
    <ul>
        <li>Hot air balloons must be built by the participating students using only the above-listed materials. (SHOULD NOT BE READY MADE).</li>
        <li>Participants can also use a sky lamp as a balloon. READY-MADE ARE NOT PERMITTED.</li>
        <li>No radio control of the Hot air balloons is allowed.</li>
        <li>The Hot air balloons must be lifted from the ground on their own.</li>
    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYporvkNVyVCXBdOxHUMeSzDykWOl_t3uDi4axNCqamr44mQ/viewform?usp=sf_link" target="_blank">
                        <button class="open-modal-btn1">Register</button>
                     </a>
                    </div>
                </div>
            </div>
        </li>
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="dept/promptmaster.jpg" alt="PROMPT MASTER"></div>
                <div class="card_content1">
                    <h2 class="card_title1">PROMPT MASTER</h2>
                    <p class="card_text1">Department of AI & DS</p>
                    <div class="dept_text_button"><button class="open-modal-btn1">Read More</button>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">
                                    <h2>LAKSHYA-2K24</h2>
                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                    <h1>Prompt Master Event - AI & DS Department</h1>

                                    <h2>Rounds:</h2>

                                    <ol>
                                        <li>
                                            <strong>Round 1:</strong>
                                            <p>Task: A technical challenge testing participants' prompting skills will
                                                be given to each individual.</p>
                                            <p>Extended to Round 2: Those who qualify will have the opportunity to
                                                complete the entire task in the final round.</p>
                                            <p>Timings: Flexible, but participants should complete within the specified
                                                timeframe.</p>
                                        </li>
                                        <li>
                                            <strong>Round 2: Final Challenge and Innovation</strong>
                                            <p>Task: The challenge is extended from Round 1, providing participants the
                                                chance to demonstrate innovation and creativity in their prompting
                                                skills.</p>
                                        </li>
                                    </ol>

                                    <h2>Rules:</h2>

                                    <ul>
                                        <li>Participants must use only Chat GPT for both rounds.</li>
                                        <li>All work should be completed individually.</li>
                                        <li>Clear guidelines for task completion will be provided at the beginning of
                                            each round.</li>
                                    </ul>

                                    <h2>Entry Fee:</h2>

                                    <p>100/- per participant</p>

                                    <h2>Rewards:</h2>

                                    <p>Top performers will be rewarded.</p>
                                    <ul>
                                        <li>1st place: Cash prize of Rs.1000.</li>
                                        <li>2nd place: Cash prize of Rs.500.</li>
                                    </ul>

                                    <h2>Important Notes:</h2>

                                    <ul>
                                        <li>Ensure you have your mobile device for participation.</li>
                                        <li>Follow the provided guidelines carefully for each round.</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdmpj62uslFxKmsPntC3HfdxwnEtB0bjVWpOkLR9MABODGdJQ/viewform?usp=sf_link
                        " target="_blank">
                        <button class="open-modal-btn1">Register</button>
                     </a>
                    </div>
                </div>
            </div>
        </li>
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="dept/kgf.jpg" alt="WHO IS THE KGF?"></div>
                <div class="card_content1">
                    <h2 class="card_title1">WHO IS THE KGF?</h2>
                    <p class="card_text1">Department of CSE</p>
                    <div class="dept_text_button"><button class="open-modal-btn1">Read More</button>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">
                                    <h2>LAKSHYA-2K24</h2>
                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                    <h1>KGF - King of Genius Coder in Fest</h1>

                                    <h2>Objective:</h2>

                                    <ul>
                                        <li>Coding contest aims to foster learning and growth among participants who are
                                            passionate about programming through healthy competition.</li>
                                        <li>Improves the problem-solving capabilities among all the participants.</li>
                                        <li>Makes participants efficient, focused, and fast.</li>
                                    </ul>

                                    <h2>Test Pattern:</h2>

                                    <table>
                                        <tr>

                                            <th>Number of Problems</th>
                                            <th>Test Duration</th>
                                        </tr>
                                        <tr>

                                            <td>Three Logic building problems with the following language options</td>
                                            <td>90 Minutes</td>
                                        </tr>
                                        <tr>

                                            <td>C / C++/ Java / Python</td>
                                            <td>You can choose any one of the above programming languages.</td>
                                        </tr>
                                    </table>

                                    <ol>
                                        <li>Test will be conducted on an online platform.</li>
                                        <li>Individual participation from any college.</li>
                                        <li>We will provide test login credentials to all the registered participants
                                            during the test.</li>
                                        <li>Systems will be provided in the college (i.e., Block-I, CSE Department), no
                                            need to bring your laptops.</li>
                                        <li>For each and every problem, certain test cases will be provided, to get full
                                            marks all test cases should be passed.</li>
                                        <li>All the logic-building problems carry equal marks.</li>
                                        <li>The candidates who will solve more problems within less span of time will be
                                            awarded as winners.</li>
                                    </ol>

                                    <h2>Rules & Regulations:</h2>

                                    <ol>
                                        <li>Test will be conducted in full-screen mode, tab switches not allowed. If any
                                            violations during the test, it will be automatically submitted.</li>
                                        <li>No cell phones or other secondary devices in the room or test area.</li>
                                        <li>No use of additional applications or internet.</li>
                                        <li>Don’t speak with your friends or others during the exam.</li>
                                        <li>No other devices in view during this exam.</li>
                                        <li>Argument with test observers in any form will lead to the disqualification
                                            of the test.</li>
                                    </ol>

                                    <h2>Rules & Eligibility:</h2>

                                    <p>All regular students with a valid identity card of their respective Educational
                                        Institutes/Colleges are eligible to participate in the event.</p>
                                        <h2>Entry Fee:</h2>

                                    <p>100/- per participant</p>
                                    <h2>REWARDS:</h2>
                                    <p>Top 2 members will be awarded</p>
                                    <ul>
                                        <li>1st prize – Cash prize of Rs. 1000</li>
                                        <li>2nd prize – Cash prize of Rs. 500</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <a href="https://forms.gle/bV6qBohrah6f8ZZTA" target="_blank">
           <button class="open-modal-btn1">Register</button>
        </a>
                    </div>
                </div>
            </div>
        </li>
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="dept/codecollage.jpg" alt="CODE COLLAGE"></div>
                <div class="card_content1">
                    <h2 class="card_title1">CODE COLLAGE</h2>
                    <p class="card_text1">Department of CSE (AI & ML)</p>
                    <div class="dept_text_button"><button class="open-modal-btn1">Read More</button>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">
                                    <h2>LAKSHYA-2K24</h2>
                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                    <h1>Code Collage - Department of CSE (AI&ML)</h1>

                                    <h2>Aim:</h2>

                                    <p>Sharpen coding skills by sorting shuffled code snippets.</p>

                                    <h2>Event Details:</h2>

                                    <p>The participants will be presented with a pre-written code in C/C++/Python/Java
                                        that has been disassembled into segments. Their main task is to carefully put
                                        together the shuffled code pieces of the given programming language in the right
                                        order to reveal the correct answer to the given question.</p>

                                    <h2>Levels:</h2>

                                    <p>Total 3 levels from Easy to Hard.</p>

                                    <ol>
                                        <li>Points will be awarded based on the Complexity of the question.</li>
                                        <li>Event will be conducted on the Online Platform.</li>
                                        <li>Participants are cordially invited to exhibit their prowess in programming
                                            within the distinguished span of 45 minutes.</li>
                                    </ol>

                                    <h2>Rules:</h2>

                                    <ol>
                                        <li>No cell phones or other smart devices in the room or test area.</li>
                                        <li>No use of additional applications.</li>
                                        <li>The participants who complete the task in the shortest duration will be
                                            bestowed with the cash prize.</li>
                                    </ol>

                                    <h2>Entry Fee:</h2>

                                    <p>100/- per head</p>
                                    <h2>REWARDS:</h2>
                                    <p>Top 2 members will be awarded</p>
                                    <ul>
                                        <li>1st prize – Cash prize of Rs. 1000</li>
                                        <li>2nd prize – Cash prize of Rs. 500</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="https://forms.gle/tKUX3QSpvx5HHjQt8" target="_blank">
                        <button class="open-modal-btn1">Register</button>
                     </a>
                    </div>
                </div>
            </div>
        </li>
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="dept/artexpo.jpg" alt="ART EXPO"></div>
                <div class="card_content1">
                    <h2 class="card_title1">ART EXPO</h2>
                    <p class="card_text1">Department of EEE</p>
                    <div class="dept_text_button"><button class="open-modal-btn1">Read More</button>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">
                                    <h2>LAKSHYA-2K24</h2>
                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                    <h1>ART EXPO (ELECTRICAL AND ELECTRONICS ENGINEERING)</h1>

                                    <h2>AIM:</h2>
                                    <p>To show your art skills (Art Exhibition and Spot Painting)</p>

                                    <h2>TEAM SIZE:</h2>
                                    <p>1 (Art Exhibition) & 2 (Spot Painting)</p>

                                    <h2>VENUE:</h2>
                                    <p>Department of Electrical and Electronics Engineering (Block-2)</p>

                                    <h2>EVENT DESCRIPTION:</h2>

                                    <h3>For participation in Art Exhibition (Brush / Brushless)</h3>
                                    <ul>
                                        <li>Participant must carry their previously drawn Art to the event spot.</li>
                                        <li>The Art should not be a photocopy.</li>
                                    </ul>

                                    <h3>For participation in Spot Painting (Only Brushless)</h3>
                                    <ul>
                                        <li>Participants will be given a maximum of 1 hour for finishing the art.</li>
                                        <li>The event organizers will provide only the chart.</li>
                                        <li>The remaining essential tools must be carried by participants only.</li>
                                        <li>Note: The art must be drawn by hands or by cotton, etc.</li>
                                    </ul>

                                    <h2>ENTRY FEE:</h2>
                                    <p>Rs.100 per Team</p>

                                    <h2>REWARDS:</h2>
                                    <p>Top 2 members will be awarded</p>
                                    <ul>
                                        <h2>Spot Painting</h2>
                                        <li>1st prize – Cash prize of Rs. 1000</li>
                                        <li>2nd prize – Cash prize of Rs. 500</li>
                                        <h2>Art Exhibition</h2>
                                        <li>1st prize – Cash prize of Rs. 1000</li>
                                        <li>2nd prize – Cash prize of Rs. 500</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="https://forms.gle/WEGe5GHRcnijoE8QA" target="_blank">
                        <button class="open-modal-btn1">Register</button>
                     </a>
                    </div>
                </div>
            </div>
        </li>
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="dept/codebingo.jpg" alt="CODE BINGO "></div>
                <div class="card_content1">
                    <h2 class="card_title1">CODE BINGO </h2>
                    <p class="card_text1">Department of IT</p>
                    <div class="dept_text_button"><button class="open-modal-btn1">Read More</button>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">
                                    <h2>LAKSHYA-2K24</h2>
                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                    <h1>Code Bingo - Department of IT</h1>

                                    <h2>Aim:</h2>

                                    <p>A Real-Time Challenge to test the students Coding/Computational Thinking.</p>

                                    <h2>How To Play:</h2>
                                    <p> -We will give 25 min time and 25 questions where each question will be a segment of code that will only be displayed for a minute.
                                    <br/>-⁠And also participants will be given a bingo sheet(Consists of 1-25 numbers in a random order).
                                    <br/>-⁠Participants need to solve the given segment of code and mark it on the sheet.
                                    <br/>-⁠Who ever got the bingo(A line Strike which may be Horizontally, Vertically, Diagonal) will be qualified.</p>

                                    <h2>Sessions:</h2>

                                    <p>Based on the capacity of the participants, 2 Sessions will be conducted, and
                                        winners will be declared based on correctness, time conservation, and solving
                                        capability.</p>

                                    <h2>Rules:</h2>

                                    <ol>
                                        <li>No External Tools</li>
                                        <li>One-Minute Limit</li>
                                        <li>Numeric Output</li>
                                        <li>Valid Bingo Declaration</li>
                                    </ol>

                                    <h2>Entry Fee:</h2>

                                    <p>100/- per head</p>

                                    <h2>Rewards:</h2>

                                    <p>Top 2 members will get the Rewards</p>

                                    <ul>
                                        <li>1st member wins a cash prize of Rs.1000.</li>
                                        <li>2nd member will receive a cash prize of Rs.500.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="https://forms.gle/etorESjV7fZc7k47A" target="_blank">
                        <button class="open-modal-btn1">Register</button>
                     </a>
                    </div>
                </div>
            </div>
        </li>
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="dept/yanthrora.jpg" alt="YANTHRORA "></div>
                <div class="card_content1">
                    <h2 class="card_title1">YANTHRORA </h2>
                    <p class="card_text1">Department of MECH</p>
                    <div class="dept_text_button">
                        <button class="open-modal-btn1">Read More</button>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScMVTonPzSFt2WJ05cz__BQB3BLCZ7xs3cSWzKUEEybv3w99A/viewform?usp=sf_link" target="_blank">
                        <button class="open-modal-btn1">Register</button>
                     </a>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">
                                    <h2>LAKSHYA-2K24</h2>
                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                    <h1>YANTHRORA (ROBO SPRINT) - GUIDELINES AND OBJECTIVES</h1>

                                    <h2>OBJECTIVE:</h2>

                                    <ul>
                                        <li>The robots built by given dimensions and specifications will be allowed for
                                            the game.</li>
                                        <li>If participants fail to get their own robot, the organizers shall provide a
                                            kit. Note that the same robot will be given to other participants falling
                                            into the same criteria. Hence, it is highly recommended to make your own
                                            kit.</li>
                                        <li>The rounds will be decided according to groups participated.</li>
                                        <li>The robot which gains maximum points will be the winner.</li>
                                    </ul>

                                    <h2>RULES & REGULATION:</h2>

                                    <ul>
                                        <li>Each team should not consist of more than 2 members.</li>
                                        <li>Both members from the same college are not mandatory.</li>
                                        <li>The robot should follow the robot specifications provided. Any deviation
                                            from the mentioned specifications will lead to disqualification.</li>
                                        <li>No test practice will be allowed on the main arena.</li>
                                        <li>Terminals for charging the battery will be provided in the college.</li>
                                        <li>The arena may be subjected to change before the commencement of any round.
                                        </li>
                                        <li>If the Robot crosses a checkpoint and moves off track, then the Robot would
                                            be placed back on the previous checkpoint crossed.</li>
                                        <li>During the gameplay, if any part of a robot is
                                            destructed/dismantled/damaged, the participant will be given a timeout to
                                            repair at an expense of a penalty, while the next participant will be called
                                            for play.</li>
                                        <li>The decision of the judges will be final and abiding. Argument with judges
                                            in any form will lead to the disqualification of the team.</li>
                                    </ul>

                                    <h2>ELIGIBILITY:</h2>

                                    <p>All regular students with a valid identity card of their respective Educational
                                        Institutes are eligible to participate in the event.</p>

                                    <h2>ROBOT SPECIFICATIONS:</h2>

                                    <ul>
                                        <li>Lego kits are strictly not allowed in any form.</li>
                                        <li>The L X B X H should not exceed 25 X 25 X 25 cms.</li>
                                        <li>The net weight of the robot should not exceed 3 kg.</li>
                                        <li>However, a tolerance of 5% is acceptable with the permission of the judge.
                                        </li>
                                        <li>Power source should be on board (i.e., on the robot body placed in the
                                            arena).</li>
                                        <li>Wired or wireless robots are allowed to use.</li>
                                        <li>If RF (Wireless) controller is used, dual frequency is a must to avoid RF
                                            jamming. The dual frequency should be such that it can be switched to either
                                            frequency just before the start of the run.</li>
                                        <li>The length of the wire (for wired bots) should be long enough to cover the
                                            whole track (around 17m or more), and the wire should remain slack during
                                            the complete run.</li>
                                        <li>The maximum allowed voltage to power the robot is 24V.</li>
                                    </ul>
                                    <h2>Entry Fee:</h2>

                                    <p>100/- per head</p>
                                    <h2>REWARDS:</h2>
                                    <p>Top 2 members will be awarded</p>
                                    <ul>
                                        <li>1st prize – Cash prize of Rs. 1000</li>
                                        <li>2nd prize – Cash prize of Rs. 500</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </li>
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="dept/bullsvsbears.jpg" alt="BULLS VS BEARS"></div>
                <div class="card_content1">
                    <h2 class="card_title1">BULLS VS BEARS</h2>
                    <p class="card_text1">Department of MBA</p>
                    <div class="dept_text_button"><button class="open-modal-btn1">Read More</button>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">
                                    <h2>LAKSHYA-2K24</h2>
                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                    <h1>BULLS VS BEARS - Stock Market Game</h1>

                                    <p>A Stock market game is an event that attempts to reproduce or duplicate some or
                                        all features of a live stock market on a computer so that a player may practice
                                        trading stocks without financial risk. Stock market game is a simulated trading
                                        process in which would-be investors can practice investing without committing
                                        real money. This is done by the manipulation of imaginary money and investment
                                        positions that behave in a manner similar to the real markets. New investors can
                                        practice making fortunes time and time again before actually committing
                                        financially. Stock market game is often used for educational purposes.</p>

                                    <h2>Rules:</h2>

                                    <ul>
                                        <li>Registration fee is Rs. 200 per team</li>
                                        <li>Team consists of a maximum of 2 members</li>
                                        <li>1st round is preliminary test</li>
                                        <li>2nd round is financial IQ</li>
                                        <li>3rd round is online trading</li>
                                    </ul>

                                    <h2>Guidelines:</h2>

                                    <ul>
                                        <li>Top 2 Teams will be awarded with Certificates & Cash prizes</li>
                                        <li>Certificate of Participation will be provided for every registered member
                                        </li>
                                        <li>The decision of the judges will be final</li>
                                    </ul>
                                    <h2>Entry Fee:</h2>

                                    <p>200/- per team</p>
                                    <h2>REWARDS:</h2>
                                    <p>Top 2 members will be awarded</p>
                                    <ul>
                                        <li>1st prize – Cash prize of Rs. 2000</li>
                                        <li>2nd prize – Cash prize of Rs. 1000</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdRbRNxXnJEPwJ6uxpPhUqQdkHMvSq1pOQdcM__lnv3qqxvXw/viewform?usp=sf_link " target="_blank">
                        <button class="open-modal-btn1">Register</button>
                     </a>
                    </div>
                </div>
            </div>
        </li>




    </ul>
</div>
<center><button class="button-85" id="mobile_button" role="button" onclick="navigateTo('culturals')">More Events</button></center>
            `);
            break;
        case 'culturals':
            content.push(`
<div class="dept-container">
    <section>
        <div class="wrapper">
            <svg>
                <text x="50%" y="50%" text-anchor="middle">
                    Club Events
                </text>
            </svg>
        </div>
    </section>
    <ul class="cards1">
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="culturals/solodance.png" alt="solodance"></div>
                <div class="card_content1">
                    <h2 class="card_title1">SOLO DANCE</h2>
                    <p class="card_text1">Organized by Kruthi - The Finearts & Cultural Club</p>
                    <div class="dept_text_button">
                        <button class="open-modal-btn1">Read More</button>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">
                                    <h2>LAKSHYA-2K24</h2>
                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                <center><h1>SOLO DANCE</h1></center>

                                <h2>FORMAT:</h2>
                                <p>INDIVIDUAL EVENT</p>
                                <h2>DESCRIPTION:</h2>
                                <p>FOLK, PATRIOTIC, DEVOTIONAL, CLASSICAL, SEMI-CLASSICAL, WESTERN</p>
                                <h2>TIME LIMIT:</h2>
                                <p>MAXIMUM OF 4 MINUTES PER PARTICIPANT.</p>
                                <h2>REGISTRATION FEE:</h2>
                                <p>250/-</p>
                                
                                <h2>NOTE:</h2>
                                <ul>
                                  <li>SCREENING WILL BE DONE BEFORE THE EVENT</li>
                                  <li>PARTICIPANTS SHOULD UPLOAD A VIDEO OF DURATION 4 MINS MINIMUM FOR SCREENING</li>
                                  <li>AFTER SELECTION WE WILL SEND A CONFIRMATION MAIL REGARDING YOUR PARTICIPATION, THEN PAYMENT CAN BE COMPLETED</li>
                                  <li>SELECTED PARTICIPANTS ARE INFORMED TO ATTEND THE VENUE AT THE TIME OF THE EVENT</li>
                                  <li>WINNERS WILL BE ALLOTTED WITH A POOL PRIZE AND CERTIFICATE</li>
                                  <li>PARTICIPATION CERTIFICATE WILL BE ISSUED</li>
                                </ul>
                                
                                
                                </div>
                            </div>
                        </div>
                        <a href="https://forms.gle/DdCxV9ZuRm3uQUut8" target="_blank">
                        <button class="open-modal-btn1">Register</button>
                     </a>
                    </div>
                </div>
            </div>
        </li>
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="culturals/groupdance.jpg" alt="groupdance"></div>
                <div class="card_content1">
                    <h2 class="card_title1">GROUP DANCE</h2>
                    <p class="card_text1">Organized by Kruthi - The Finearts & Cultural Club</p>
                    <div class="dept_text_button"><button class="open-modal-btn1">Read More</button>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">
                                    <h2>LAKSHYA-2K24</h2>
                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                <center><h1>GROUP DANCE</h1></center>
                                <h2>FORMAT:</h2>
                                <p>GROUP EVENT (2 TO 6 MEMBERS)</p>
                                <h2>DESCRIPTION:</h2>
                                <p>FOLK, PATRIOTIC, DEVOTIONAL, CLASSICAL, SEMI-CLASSICAL, WESTERN</p>
                                <h2>TIME LIMIT:</h2>
                                <p>MAXIMUM OF 5 MINUTES PER GROUP.</p>
                                <h2>REGISTRATION FEE:</h2>
                                <p>500/-</p>

                                <h2>NOTE:</h2>
                                <ul>
                                <li>SCREENING WILL BE DONE BEFORE THE EVENT</li>
                                <li>PARTICIPANTS SHOULD UPLOAD A VIDEO OF DURATION 4 MINS MINIMUM FOR SCREENING</li>
                                <li>AFTER SELECTION WE WILL SEND A CONFIRMATION MAIL REGARDING YOUR PARTICIPATION, THEN PAYMENT CAN BE COMPLETED</li>
                                <li>SELECTED PARTICIPANTS ARE INFORMED TO ATTEND THE VENUE AT THE TIME OF THE EVENT</li>
                                <li>WINNERS WILL BE ALLOTTED WITH A POOL PRIZE AND CERTIFICATE</li>
                                <li>PARTICIPATION CERTIFICATE WILL BE ISSUED</li>
                                </ul>

                                </div>
                            </div>
                        </div>
                        <a href="https://forms.gle/DdCxV9ZuRm3uQUut8" target="_blank">
                        <button class="open-modal-btn1">Register</button>
                     </a>
                    </div>
                </div>
            </div>
        </li>
        
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="culturals/singing.jpg" alt="singing"></div>
                <div class="card_content1">
                    <h2 class="card_title1">SINGING</h2>
                    <p class="card_text1">Organized by Kruthi - The Finearts & Cultural Club</p>
                    <div class="dept_text_button"><button class="open-modal-btn1">Read More</button>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">
                                    <h2>LAKSHYA-2K24</h2>
                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                <center><h1>SINGING</h1></center>
                                <h2>FORMAT:</h2>
                                <p>INDIVIDUAL EVENT</p>
                                <h2>DESCRIPTION:</h2>
                                <p>FOLK, PATRIOTIC, DEVOTIONAL, CLASSICAL, SEMI-CLASSICAL, WESTERN</p>
                                <h2>TIME LIMIT:</h2>
                                <p>MAXIMUM OF 3 MINUTES PER PARTICIPANT.</p>
                                <h2>REGISTRATION FEE:</h2>
                                <p>100/-</p>

                                <h2>NOTE:</h2>
                                <ul>
                                <li>SCREENING WILL BE DONE BEFORE THE EVENT</li>
                                <li>PARTICIPANTS SHOULD UPLOAD A VIDEO OF DURATION 4 MINS MINIMUM FOR SCREENING</li>
                                <li>AFTER SELECTION WE WILL SEND A CONFIRMATION MAIL REGARDING YOUR PARTICIPATION, THEN PAYMENT CAN BE COMPLETED</li>
                                <li>SELECTED PARTICIPANTS ARE INFORMED TO ATTEND THE VENUE AT THE TIME OF THE EVENT</li>
                                <li>WINNERS WILL BE ALLOTTED WITH A POOL PRIZE AND CERTIFICATE</li>
                                <li>PARTICIPATION CERTIFICATE WILL BE ISSUED</li>
                                </ul>

                                </div>
                            </div>
                        </div>
                        <a href="https://forms.gle/DdCxV9ZuRm3uQUut8" target="_blank">
                        <button class="open-modal-btn1">Register</button>
                     </a>
                    </div>
                </div>
            </div>
        </li>
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="culturals/instrument.jpg" alt="instrument"></div>
                <div class="card_content1">
                    <h2 class="card_title1">INSTRUMENT PLAY(SOLO)</h2>
                    <p class="card_text1">Organized by Kruthi - The Finearts & Cultural Club</p>
                    <div class="dept_text_button"><button class="open-modal-btn1">Read More</button>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">
                                    <h2>LAKSHYA-2K24</h2>
                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                <center><h1>INSTRUMENT PLAY</h1></center>
                                <h2>FORMAT:</h2>
                                <p>INDIVIDUAL EVENT</p>
                                <h2>DESCRIPTION:</h2>
                                <p>PIANO, GUITAR, DRUMS, VIOLIN, FLUTE</p>
                                <h2>TIME LIMIT:</h2>
                                <p>MAXIMUM OF 5 MINUTES PER PARTICIPANT.</p>
                                <h2>REGISTRATION FEE:</h2>
                                <p>250/-</p>

                                <h2>NOTE:</h2>
                                <ul>
                                <li>SCREENING WILL BE DONE BEFORE THE EVENT</li>
                                <li>PARTICIPANTS SHOULD UPLOAD A VIDEO OF DURATION 4 MINS MINIMUM FOR SCREENING</li>
                                <li>AFTER SELECTION WE WILL SEND A CONFIRMATION MAIL REGARDING YOUR PARTICIPATION, THEN PAYMENT CAN BE COMPLETED</li>
                                <li>SELECTED PARTICIPANTS ARE INFORMED TO ATTEND THE VENUE AT THE TIME OF THE EVENT</li>
                                <li>WINNERS WILL BE ALLOTTED WITH A POOL PRIZE AND CERTIFICATE</li>
                                <li>PARTICIPATION CERTIFICATE WILL BE ISSUED</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <a href="https://forms.gle/DdCxV9ZuRm3uQUut8" target="_blank">
                        <button class="open-modal-btn1">Register</button>
                     </a>
                    </div>
                </div>
            </div>
        </li>
        <li class="cards_item1">
            <div class="card1">
                <div class="card_image1"><img src="culturals/instrumentgroup.jpg" alt="instrumentgroup"></div>
                <div class="card_content1">
                    <h2 class="card_title1">INSTRUMENT PLAY(GROUP)</h2>
                    <p class="card_text1">Organized by Kruthi - The Finearts & Cultural Club</p>
                    <div class="dept_text_button"><button class="open-modal-btn1">Read More</button>
                        <div class="modal-overlay1">
                            <div class="modal1">
                                <div class="modal-header1">
                                    <h2>LAKSHYA-2K24</h2>
                                    <button class="close-modal-btn1">&times;</button>
                                </div>
                                <div class="modal-content1">
                                <center><h1>INSTRUMENT PLAY</h1></center>
                                <h2>FORMAT:</h2>
                                <p>GROUP EVENT (2 TO 6 MEMBERS)</p>
                                <h2>DESCRIPTION:</h2>
                                <p>PIANO, GUITAR, DRUMS, VIOLIN, FLUTE</p>
                                <h2>TIME LIMIT:</h2>
                                <p>MAXIMUM OF 10 MINUTES PER GROUP.</p>
                                <h2>REGISTRATION FEE:</h2>
                                <p>500/-</p>

                                <h2>NOTE:</h2>
                                <ul>
                                <li>SCREENING WILL BE DONE BEFORE THE EVENT</li>
                                <li>PARTICIPANTS SHOULD UPLOAD A VIDEO OF DURATION 4 MINS MINIMUM FOR SCREENING</li>
                                <li>AFTER SELECTION WE WILL SEND A CONFIRMATION MAIL REGARDING YOUR PARTICIPATION, THEN PAYMENT CAN BE COMPLETED</li>
                                <li>SELECTED PARTICIPANTS ARE INFORMED TO ATTEND THE VENUE AT THE TIME OF THE EVENT</li>
                                <li>WINNERS WILL BE ALLOTTED WITH A POOL PRIZE AND CERTIFICATE</li>
                                <li>PARTICIPATION CERTIFICATE WILL BE ISSUED</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <a href="https://forms.gle/DdCxV9ZuRm3uQUut8" target="_blank">
                        <button class="open-modal-btn1">Register</button>
                     </a>
                    </div>
                </div>
            </div>
        </li>
        <li class="cards_item1">
        <div class="card1">
            <div class="card_image1"><img src="culturals/imagitales_odyssey.jpg" alt="imagitales_odyssey"></div>
            <div class="card_content1">
                <h2 class="card_title1">IMAGETALES ODYSSEY</h2>
                <p class="card_text1">Organized by Spoorthi - The Literary Club</p>
                <div class="dept_text_button">
                    <button class="open-modal-btn1">Read More</button>
                    <div class="modal-overlay1">
                        <div class="modal1">
                            <div class="modal-header1">
                                <h2>LAKSHYA-2K24</h2>
                                <button class="close-modal-btn1">&times;</button>
                            </div>
                            <div class="modal-content1">
                            <h1>IMAGETALES ODYSSEY</h1>
                            <h2>FORMAT:</h2>
                            <p> INDIVIDUAL EVENT</p>
                            <h2>TASK:</h2>
                            <p> PARTICIPANTS MUST FORMULATE A CREATIVE STORY USING 15 IMAGES.</p>
                            <h2>TIME LIMIT:</h2>
                            <p> MAXIMUM OF 20 MINUTES PER PARTICIPANT.</p>
                            <h2>EVENT START TIME:</h2>
                            <p> 10:00 AM</p>
                            <h2>EVENT END TIME:</h2>
                            <p> 11:30 AM</p>
                            <h2>GROUPING:</h2>
                            <p> AS PARTICIPANTS ACCUMULATE, THEY WILL BE DIVIDED INTO GROUPS. EACH GROUP WILL RECEIVE A DIFFERENT SET OF IMAGES.</p>
                            <h2>EVALUATION CRITERIA:</h2>
                            <p> CREATIVITY, COHERENCE, AND THE ABILITY TO CONNECT AND INCORPORATE ALL 15 IMAGES.</p>
                            <p><strong><h2>NOTE:</h2></strong></p>
                            <ul>
                              <li>THE REGISTRATION FEE WILL BE RS 100</li>
                              <li>CANDIDATES CAN PARTICIPATE IN BOTH EVENTS</li>
                              <li>WINNERS WILL BE AWARDED WITH A POOL PRIZE AND CERTIFICATE</li>
                              <li>PARTICIPANTS ARE REQUIRED TO ATTEND THE VENUE AT THE TIME OF THE EVENT</li>
                              <li>A PARTICIPATION CERTIFICATE WILL BE ISSUED</li>
                            </ul>
                            
                            </div>
                        </div>
                    </div>
                    <a href="https://forms.gle/LmE1po5tKHm4Y9Dr7" target="_blank">
                    <button class="open-modal-btn1">Register</button>
                 </a>
                </div>
            </div>
        </div>
    </li>
    <li class="cards_item1">
        <div class="card1">
            <div class="card_image1"><img src="culturals/verbocraft_marvel.png" alt="verbocraft_marvel"></div>
            <div class="card_content1">
                <h2 class="card_title1">VERBOCRAFT MARVEL</h2>
                <p class="card_text1">Organized by Spoorthi - The Literary Club</p>
                <div class="dept_text_button"><button class="open-modal-btn1">Read More</button>
                    <div class="modal-overlay1">
                        <div class="modal1">
                            <div class="modal-header1">
                                <h2>LAKSHYA-2K24</h2>
                                <button class="close-modal-btn1">&times;</button>
                            </div>
                            <div class="modal-content1">
                            <h1>VERBOCRAFT MARVEL</h1>
                            <h2>FORMAT:</h2>
                            <p> BASIC SPELL BEE COMPETITION.</p>
                            <h2>SCORING:</h2>
                            <p> POINTS ARE AWARDED TO PARTICIPANTS WHO PROVIDE THE CORRECT SPELLINGS FIRST.</p>
                            <h2>ROUND STRUCTURE:</h2>
                            <p> THE COMPETITION PROCEEDS IN ROUNDS UNTIL A WINNER AND A RUNNER-UP ARE DETERMINED.</p>
                            <h2>COMPETITION START TIME:</h2>
                            <p> 11:00 AM.</p>
                            <h2>PARTICIPANT SELECTION:</h2> 
                            <p>OPEN TO ALL PARTICIPANTS INTERESTED IN SHOWCASING THEIR SPELLING SKILLS.</p>
                            
                           <h2>NOTE:</h2>
                            <ul>
                              <li>THE REGISTRATION FEE WILL BE RS 100</li>
                              <li>CANDIDATES CAN PARTICIPATE IN BOTH EVENTS</li>
                              <li>WINNERS WILL BE AWARDED WITH A POOL PRIZE AND CERTIFICATE</li>
                              <li>PARTICIPANTS ARE REQUIRED TO ATTEND THE VENUE AT THE TIME OF THE EVENT</li>
                              <li>A PARTICIPATION CERTIFICATE WILL BE ISSUED</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <a href="https://forms.gle/LmE1po5tKHm4Y9Dr7" target="_blank">
                    <button class="open-modal-btn1">Register</button>
                 </a>
                </div>
            </div>
        </div>
    </li>
    <li class="cards_item1">
    <div class="card1">
        <div class="card_image1"><img src="culturals/bobi.jpg" alt="verbocraft_marvel"></div>
        <div class="card_content1">
            <h2 class="card_title1">BRANCH OUT& BUZZ IN</h2>
            <p class="card_text1">Organized by Prakruthi - The Environmental Club</p>
            <div class="dept_text_button"><button class="open-modal-btn1">Read More</button>
                <div class="modal-overlay1">
                    <div class="modal1">
                        <div class="modal-header1">
                            <h2>LAKSHYA-2K24</h2>
                            <button class="close-modal-btn1">&times;</button>
                        </div>
                        <div class="modal-content1">
                        <h1>BRANCH OUT& BUZZ IN</h1>
                        <h2>Format:</h2>
                        <p>Individual or Group</p>
                        <h2>Event Start Time:</h2>
                        <p>10:00 AM</p>
                        <h2>Event End Time:</h2>
                        <p>12:30PM</p>
                        <h2>Rounds:</h2>
                        <p><strong>Round 1: Tree Selfie Quest</strong></p>
                        <p>Participants will embark on a quest to locate and capture a selfie 
                        with a designated tree with in less time, randomly assigned to them via
                        slips with their scientific names. These trees will be strategically
                        placed within the campus, encouraging exploration and engagement with nature.
                        </p>
                        <p><strong>Round 2: Environmental Quiz Showdown</strong></p>
                        <p>The top 10 participants from Round 1 will advance to Round 2, where
                        they will face an environmental quiz designed to test their knowledge
                        and awareness of environmental issues and sustainability practices.</p>
                        <h2>Registration Fee</h2>
                        <p>INDIVIDUAL: ₹ 39/-
                        <br/>DUO: ₹ 69/-<br/>
                        TRIO: ₹  99/-</p>
                        <h2>Rewards and Recognition:</h2>
                        <strong>First Place:</strong>Cash prize and a winner's certificate for the top group.<br/>
                        <strong> Second Place:</strong>Cash prize and a runner-up certificate for the second-ranked group.<br/>
                        <strong>Certificates:</strong>
                        Every participant will receive a certificate of participation,
                        acknowledging their contribution to the EcoExplorer Challenge.
                        </p>
                        <h2>Note:</h2>
                        <p>-Individual registrations can be taken<br/>
                        -ROUND2 starts at 2:00pm</p>
                        <br/>
                        <h3>Join us in the The Branch out & Buzz in Challenge to win prizes, 
                        showcase your environmental knowledge, and contribute to a sustainable future!</h3>
                        </div>
                    </div>
                </div>
                <a href="https://forms.gle/vQuDZ8tvsCPyJGHz5" target="_blank">
                <button class="open-modal-btn1">Register</button>
             </a>
            </div>
        </div>
    </div>
</li>
<li class="cards_item1">
<div class="card1">
    <div class="card_image1"><img src="culturals/techee.jpg" alt="solodance"></div>
    <div class="card_content1">
        <h2 class="card_title1">TECHEEE</h2>
        <p class="card_text1">Organized by EEE - Green energy club and E-Yantra</p>
        <div class="dept_text_button">
            <button class="open-modal-btn1">Read More</button>
            <div class="modal-overlay1">
                <div class="modal1">
                    <div class="modal-header1">
                        <h2>LAKSHYA-2K24</h2>
                        <button class="close-modal-btn1">&times;</button>
                    </div>
                    <div class="modal-content1">
                    <center><h1>TECHEEE</h1></center>

                    <h2>Team Size:</h2>
                    <p>2</p>
                    <h2>VENUE:</h2>
                    <p>Department of Electrical and Electronics Engineering (Block- 2)</p>
                    <h2>DESCRIPTION:</h2>
                    <h3>Round-1:CIRCUIT DEBUGGER</h3>
                    <p>Where we give an error circuit, who identifies and corrects the error first will become
                    winner (qualify for 2nd round).</p>
                    <h3>Round-2:CIRCUIT BLENDER</h3>
                    <p>Where we give circuits and components, who finishes first will become the winner of
                    the event.</p>
                    <h2>REGISTRATION FEE:</h2>
                    <p>100/- per team</p>
                    <h2>REWARDS:</h2>
                    <p><strong>First Place:</strong>Cash Prize of Rs.1500/<br/>
                    <strong> Second Place:</strong>Cash Prize of Rs.1000/-<br/>
                    </div>
                </div>
            </div>
            <a href="https://forms.gle/pfyPnYpyfXf6RWai7    " target="_blank">
            <button class="open-modal-btn1">Register</button>
         </a>
        </div>
    </div>
</div>
</li>
</ul>
    </ul>
</div>
            `);
            break;
        case 'patrons':
            content.push(`
            <div class="patrons">
            <section>
        <div class="wrapper">
        <svg>
            <text x="50%" y="50%" text-anchor="middle">
                Committee
            </text>
        </svg>
        </div>
      </section>
            <div class="co-container">
              <div class="department-list" id='CP' onclick="toggleDetails('CP')">
                <h2>Cheif Patrons</h2>
                <div class="arrow">&#9660;</div>
              </div>
              <div class="details" id="CPDetails">
                 <img src="patrons/2.png" alt="cheif-patron">
                 <img src="patrons/1.png" alt="cheif-patron">
                 <img src="patrons/3.png" alt="cheif-patron">
              </div>
              <div class="department-list" id='P' onclick="toggleDetails('P')">
                <h2>Patrons</h2>
                <div class="arrow">&#9660;</div>
              </div>
              <div class="details" id="PDetails">
                <img src="patrons/4.png" alt="patron">
                <img src="patrons/5.png" alt="patron">
                <img src="patrons/6.png" alt="patron">
              </div>
              <div class="department-list" id='Conveners' onclick="toggleDetails('Conveners')">
                <h2>Conveners</h2>
                <div class="arrow">&#9660;</div>
              </div>
              <div class="details" id="ConvenersDetails">
                <img src="patrons/7.png" alt="Convener">
                <img src="patrons/8.png" alt="Convener">
              </div>
              <!--Departments-->
        
              <!--ECE-->
              <div class="department-list" id='ECE' onclick="toggleDetails('ECE')">
                <h2>Electronics and Communications Engineering</h2>
                <div class="arrow">&#9660;</div>
              </div>
              <div class="details" id="ECEDetails">
                <img src="patrons/9.png" alt="Faculty-coord">
                <img src="patrons/10.png" alt="Student-coord">
              </div>
              <!--Civil-->
              <div class="department-list" id='civil' onclick="toggleDetails('civil')">
                <h2>Civil Engineering</h2>
                <div class="arrow">&#9660;</div>
              </div>
              <div class="details" id="civilDetails">
                <img src="patrons/11.png" alt="Faculty-cord">
                <img src="patrons/12.png" alt="Student-coord">
              </div>
              <!--ASE-->
              <div class="department-list" id='ASE' onclick="toggleDetails('ASE')">
                <h2>Aerospace Engineering</h2>
                <div class="arrow">&#9660;</div>
              </div>
              <div class="details" id="ASEDetails">
                <img src="patrons/13.png" alt="Faculty-coord">
                <img src="patrons/14.png" alt="Student-coord">
              </div>
              <!--AIDS-->
              <div class="department-list" id='AIDS' onclick="toggleDetails('AIDS')">
                <h2>Artificial Intelligence & Data Science</h2>
                <div class="arrow">&#9660;</div>
              </div>
              <div class="details" id="AIDSDetails">
                <img src="patrons/15.png" alt="Faculty-coord">
                <img src="patrons/16.png" alt="Student-coord">
              </div>
              <!--CSE-->
              <div class="department-list" id='computerScience' onclick="toggleDetails('computerScience')">
                <h2>Computer Science Engineering</h2>
                <div class="arrow">&#9660;</div>
              </div>
              <div class="details" id="computerScienceDetails">
                <img src="patrons/17.png" alt="Faculty-coord">
                <img src="patrons/18.png" alt="Student-coord">
              </div>
              <!--CSM-->
              <div class="department-list" id='CSM' onclick="toggleDetails('CSM')">
                <h2>Computer Science Engineering(AI&ML)</h2>
                <div class="arrow">&#9660;</div>
              </div>
              <div class="details" id="CSMDetails">
                <img src="patrons/19.png" alt="Faculty-coord">
                <img src="patrons/20.png" alt="Student-coord">
              </div>
              <!--EEE-->
              <div class="department-list" id='electricalEngineering' onclick="toggleDetails('electricalEngineering')">
                <h2>Electrical and Electronics Engineering</h2>
                <div class="arrow">&#9660;</div>
              </div>
              <div class="details" id="electricalEngineeringDetails">
                <img src="patrons/21.png" alt="Faculty-coord">
                <img src="patrons/22.png" alt="Student-coord">
              </div>
              <!--IT-->
              <div class="department-list" id='IT' onclick="toggleDetails('IT')">
                <h2>Information Technology</h2>
                <div class="arrow">&#9660;</div>
              </div>
              <div class="details" id="ITDetails">
                <img src="patrons/23.png" alt="Faculty-coord">
                <img src="patrons/24.png" alt="Student-coord">
              </div>
              <!--Mech-->
              <div class="department-list" id='MechEngineering' onclick="toggleDetails('MechEngineering')">
                <h2>Mechanical Engineering</h2>
                <div class="arrow">&#9660;</div>
              </div>
              <div class="details" id="MechEngineeringDetails">
                <img src="patrons/25.png" alt="Faculty-coord">
                <img src="patrons/26.png" alt="Student-coord">
              </div>
              <!--MBA-->
              <div class="department-list" id='MBA' onclick="toggleDetails('MBA')">
                <h2>Master of Business Administration</h2>
                <div class="arrow">&#9660;</div>
              </div>
              <div class="details" id="MBADetails">
                <img src="patrons/27.png" alt="Faculty-coord">
                <img src="patrons/28.jpg" alt="Student-coord">
              </div>
              <!--Website Developers-->
              <div class="department-list" id='WD' onclick="toggleDetails('WD')">
                <h2>Website Developers</h2>
                <div class="arrow">&#9660;</div>
              </div>
              <div class="details" id="WDDetails">
                <img src="patrons/29.png" alt="Developer">
                <img src="patrons/30.png" alt="Developer">
                <img src="patrons/31.png" alt="Developer">
              </div>
            </div>
          </div>
            `)
            break;
        default:
            content = ["<h2>Page Not Found</h2><p>The requested page could not be found.</p>"];
            break;
    }

    // Update the main content
    document.querySelector('main').innerHTML = content.join('');
}
