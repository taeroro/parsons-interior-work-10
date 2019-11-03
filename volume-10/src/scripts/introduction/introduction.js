import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './../../styles/main.css';
import Footer from './../footer/footer';

class Introduction extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="body-wrapper">
        <header className="home">
          <img src="http://parsonsinteriorwork.org/wp-content/uploads/2016/04/00Cover-Home.jpg" alt="pic" />

          <div className="left-nav">
            <div className="nav-controls" data-direction="l"></div>
          </div>

          <div className="right-nav">
            <div className="nav-controls" data-direction="r"></div>
          </div>

          <div className="main-wrapper">
            <div className="header-wrapper">
              <div className="gap"></div>
              <div className="header-container">
                <p className="school-name">Parsons School of Design</p>
                <p className="edition-name">Just<br/>Spaces</p>
                <p className="edition-info"><span>Work IX</span> | AAS Interior Design
              </p>
            </div>
            <div className="gap"></div>
          </div>
        </div>

        <div className="bottom-nav">
          <a href="#dean-letter-section">
            <div className="nav-controls"></div>
          </a>
        </div>
      </header>

      <section id="dean-letter-section">
        <div className="main-wrapper">
          <div className="row-1">
            <div className="gap"></div>
            <div className="section-header">
              <p>Letter from the</p>
              <p>Dean</p>
              <p>BRIAN MCGRATH</p>
            </div>
            <div className="gap"></div>
            <div className="text-block"><p>Work 9:  Just Spaces is the ninth volume of the interior design journal founded and edited by Professor Johanne Woodcock, the Director of the Associates of Applied Science in Interior Design (AAS ID) program at Parsons School of Design. AAS ID draws most of its students from other professions and disciplines looking for the greater challenges and rewards in the creative field of interior design. With a focus on rigorous career preparation, Professor Woodcock skillfully curates a series of thematic studios each year, sending graduates into the profession with new questions and areas of inquiry.</p></div>
            <div className="gap"></div>
            <div className="text-block"><p>The work series captures and archives the history of these yearly inventions, which have become important milestones in the century long tradition of interiors at Parsons. The timely theme of just spaces resonates in two directions whether we read just as an adverb or an adjective. As an adverb, just spaces refers to the informal, everyday back ground quality of interiors that are simply no more than what they are. As an adjective interior design is position as a design field based in ethically right and fair practices available for all.</p></div>
            <div className="gap"></div>
          </div>
          <div className="row-2">
            <div className="gap"></div>
            <div className="slider">
              <div className="slider-content">
                <img src="../img/header-background.png" alt="pic" />
              </div>
              <div className="slider-controls"><ul></ul></div>
            </div>
            <div className="gap"></div>
            <div className="text-block">The School of Constructed Environments comprises four disciplines—Interior Design, Architecture, Lighting and Product/Industrial Design--that are part of the rich intellectual context of The New School.  The social, performative and political questions posed by the design projects and critical essays in this volume both inform and are informed by the wide array of Parsons and New School degree programs in Design, Performing Arts, Social Research, the Humanities and Public Policy. The New School has always been at the forefront of creative action-based research in the context of new societal challenges – both in the everyday, but also working towards a more equitable and just society. Work 9: Just Spaces is an important part of the global vision and impact of Parsons and The New School.</div>
            <div className="gap"></div>
          </div>
        </div>
      </section>
      <section id="director-letter-section">
        <div className="main-wrapper">
          <div className="gap"></div>
          <div className="column-1">
            <div className="section-header">
              <p>Letter from the</p>
              <p>Director</p>
              <p>Johanne Woodcock</p>
            </div>
            <div className="text-block">
              <p>New materials and new methods allow us to reconsider the design of interior spaces from innovative points of view. In this new era, we also understand that all layers of society are relevant and essential in creating meaningful space. In the projects highlighted in this volume we celebrate this diversity of references and replace expressions of hierarchy within a design with more socially inclusive signifiers.</p>
              <p>This is the ninth edition of Work; the annual publication that presents the accomplishments of a group of students, faculty and alumni of the Parsons AAS Interior Design Program, and it is also our inaugural online volume. In Work 9 we celebrate space--"just spaces"--which is where the designer begins the process.  Work 9 concerns our students' development of languages that articulate meaningful environments.</p><p>The designs exhibited in Work 9 presented students with the complex conditions of specific design problems that demanded a range of solutions. For example, in projects for local restaurants for sites across the United States students were encouraged to include references related to local communities, such as Detroit's "ribbon farms" and a bridge connecting El Paso, Texas with Ciudad Juarez, Mexico.</p><p>And in response to recent migrant crises, students developed designs developed for refugee welcome centers in Calais, France and a pier site on the West Side of Manhattan. The students were to consider the diversity of cultures inevitably involved in these spaces, and how the space could respond to them.</p><p>Students in the AAS Interior Design program begin with "just space" and end with sophisticated concepts for living accommodations, retail environments, and community centers in a process that challenges assumptions of all varieties and encourages innovation both in materials and methods.</p>
            </div>
          </div>
          <div className="gap"></div>
          <div className="column-2">
            <div className="slider">
              <div className="slider-content">
                <img src="../img/header-background.png" alt="pic" />
              </div>
              <div className="slider-controls"><ul></ul></div>
            </div>
            <div className="text-block">
              <p>Robert Kirkbride, Associate Dean of the Parsons School of Constructed Environments, is the author of the open-access, multimedia book Architecture and Memory: The Renaissance Studioli of Federico da Montefeltro (2008, Columbia University Press), a close examination of the Gubbio and Urbino Studioli, "memory chambers" that were constructed for the Duke of Urbino. In "Ornament and the Mind," his essay for Work 9, Prof. Kirkbride further reflects on these important ideas.</p><p>Work 9 featured faculty Anne Nixon is principal of the architecture/design firm Brooklyn Office LLC.  She leads studios whose students’ work has frequently been showcased in this series. Anne Nixon’s own work, and the work emerging from her firm, demonstrate her broad and deep exploration of materials and design innovation.</p><p>Work 9’s featured alumna, Daun Curry, is principal of Daun Curry Interiors, where she celebrates the possibilities of color and design.  A 2002 graduate of the program, she has already garnered a distinguished roster of clients and inspiring built interiors.</p><p>I hope you enjoy the work of our SCE students, faculty and alumni showcased here in Work 9. We are pleased that this online edition of Work will reach an even broader community of interest.</p>
            </div>
          </div>
          <div className="gap"></div>
        </div>
      </section>
      <section id="awards-section" >
        <div className="main-wrapper">
          <div className="label">
            <p>Awards & </p>
            <p>Recogni&shy;tions</p>
          </div>
          <div className="awards-panel">
            <div className="award-winners">
              <p ><span>Pedro Barillas</span> | IIDA Student Award</p>
              <p ><span>Pedro Barillas</span> | IIDA Student Award</p>
              <p ><span>Pedro Barillas</span> | IIDA Student Award</p>
              <p ><span>Ana Paula de Alba</span> | Hospitality Magazine Student Design Award</p>
              <p><span>Ana Paula de Alba</span> | IIDA Awards, Honorable Mention</p>
              <div className="readmore">
                <a href="">See All The Awards</a>
                <a className="arrow-right" href="#"> </a>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    );
  }
}

export default withRouter(Introduction);
