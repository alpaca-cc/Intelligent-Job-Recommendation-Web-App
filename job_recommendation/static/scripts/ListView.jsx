import React, { Component } from 'react'
import { List, Item, Segment, SegmentGroup, Card, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

var $ = require('jquery');

var titleColor = '#1c396a';
var listViewStyle=
    {
        width: '50%',
        margin: 'auto',
        backgroundColor: 'white'
    };

class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultList: [],
            noResult: true
        };
    }

    componentWillMount() {
        if (this.props.location.state != undefined) {
            this.setState({resultList: this.props.location.state.resultList})
            if (this.props.location.state.resultList != undefined) {
                this.setState({noResult: this.props.location.state.resultList.length === 0})
            }
        }
    }

    render() {
        // console.log(this.props.location.state)


        // call server......
        // getPythonHello() {
        //     $.get(window.location.href + 'hello', (data) => {
        //         console.log(data);
        //         this.personaliseGreeting(data);
        //     });
        // }
        let resultList = [
                {
                    "job_location": "Seattle, WA",
                    "comp_name": "Amazon.com",
                    "job_link": "http://www.indeed.com/rc/clk?jk=5d33473dd00f6cc6&fccid=fe2d21eef233e94a&vjs=3",
                    "details": " Amazon Web Services (AWS), a subsidiary of Amazon.com, is seeking a talented, self-directed Software Development Engineer 2 to build AWS Digital Marketing Platform systems from the ground up. This job is a unique opportunity to play a key role in an exciting, fast growing business. We're a growing team looking for exceptional software engineers to build products and services that leverage personalized web and email experiences. As a Software Development Engineer 2, you will create new services and tools that will benefit our customers and provide a key foundation to effectively manage and automate global digital campaigns. The ideal candidate will have a passion for innovative customer experiences, and a focus on building highly scalable and efficient systems.  Amazon is uniquely positioned to leverage our culture of customer obsession to build unique customer experiences and high impact features, changing the way advertisers and merchandisers manage their campaigns. Amazon is a place where builders can build. We hire innovators and offer them an environment where they can invent new, exciting solutions for our customers.  Do you thrive in a start-up like environment where ingenuity, teamwork, and delivering rock solid, customer focused solutions is paramount? Do you like to simplify complex problems, creating high quality solutions? Do you have a strong sense of ownership, bias for action, creativity, and ingenuity? Do you want to join a team to jumpstart your career? If you answered yes to these questions, apply to this job to learn more. Basic Qualifications 3+ years professional software development experience. 1+ years experience building complex software systems that have been successfully delivered to customers. 1+ years experience working in large Distributed Systems, large data, and queueing systems. Proficiency in at least one modern programming language such as C, C++, C#, Java. Bachelor’s degree in Computer Science, Computer Engineering, or related technical discipline (or the equivalent). Computer science fundamentals in object-oriented design, data structures, algorithms, problem-solving, and complexity. Coding practices including design documentation, unit testing, peer code-reviews, and a preference for Agile methods. Preferred Qualifications Masters Degree in Computer Science, Computer Engineering, or related technical discipline. Proficiency using modern web development technologies and techniques, including Node.js, HTML5, CSS, JavaScript, etc. AWS product experience and development on the AWS platform. Comfortable with the Linux command line and Git Sharp logical abilities and proven design skills. Ability to work with a team of experienced engineers, reaching a common technical goal.  2 hours ago   -  save job  -                  original job           Apply On Company Site   Other jobs you may like   Software Development Engineer  Amazon.com - \t\t\t\t\tSeattle, WA 2 hours ago   Software Engineer - Foundational Services  Qualtrics - \t\t\t\t\tSeattle, WA 15 hours ago   Software Engineer - Rewards & Loyalty  Twitch - \t\t\t\t\tSeattle, WA 11 hours ago   Software Engineer  Booking.com - \t\t\t\t\tBellevue, WA 20 hours ago       Software Development Engineer jobs in Seattle, WA   Jobs at Amazon.com in Seattle, WA   Software Development Engineer salaries in Seattle, WA  ",
                    "id": 0,
                    "job_title": "Software Development Engineer"
                },
                {
                    "job_location": "Bellevue, WA",
                    "comp_name": "Donnelley Financial Solutions",
                    "job_link": "http://www.indeed.com/rc/clk?jk=b4f372cc92610fab&fccid=593c70c81444bec2&vjs=3",
                    "details": " Job Description  Position Summary Are you bored? Do you want to be challenged on a daily basis? Do you want to pioneer in using new technology?  We are looking for highly motivated people with proven problem-solving skills in a fast paced environment. The ideal candidate is a continuous learner with a proven track record at shipping awesome software. We are building multi-tenant distributed systems that are used throughout the world and need your help.  Responsibilities Design, code, test, and operation of online services and applications. Collaborate in person and online to ensure solutions are simple and deliver value. Drive improvements to efficiency, quality, and velocity of the team. Mentor engineering staff  Required Skills: Bachelor's Degree in Computer Science, Information Systems, Engineering or equivalent experience Strong experience with agile techniques such as Test-Driven Development, Pair Programming, Continuous Delivery, or Domain Driven Design. Strong experience using a distributed version control system (DVCS) such as GIT. Demonstrable experience with designing and developing web based UI and UX (HTML and CSS) Demonstrable experience with functional and object-oriented languages such as C#, Go, Haskell, SmallTalk, Python, and Erlang/Elixir Demonstrable experience with Distributed Architectures Must have excellent oral and written communication skills  Bonus Skills: Experience with various DevOps technologies (Kubernetes, Docker, Jenkins, Azure, etc) Experience with Javascript frameworks such as ReactJS/AngularJS/Elm  1 hour ago   -  save job  -                  original job           Apply On Company Site   Other jobs you may like   Software Engineer (Build), Lumberyard  Amazon.com - \t\t\t\t\tSeattle, WA 2 hours ago   Software Development Engineer  Amazon.com - \t\t\t\t\tSeattle, WA 2 hours ago   Associate Software Engineer  Donnelley Financial Solutions - \t\t\t\t\tBellevue, WA 1 hour ago   Software Engineer  Ramp Group - \t\t\t\t\tBellevue, WA 12 hours ago   Easily apply        Software Engineer jobs in Bellevue, WA   Jobs at Donnelley Financial Solutions in Bellevue, WA   Software Engineer salaries in Bellevue, WA  ",
                    "id": 1,
                    "job_title": "Software Engineer"
                },
                {
                    "job_location": "Durham, NC",
                    "comp_name": "CREE",
                    "job_link": "http://www.indeed.com/rc/clk?jk=b3ca4dbfcde1278d&fccid=c1ecaee24c0b08e0&vjs=3",
                    "details": " Job Description Summary: Responsibilities include designing and programming PC-based and PLC-based control systems and developing monitoring and maintenance systems using Visual Studio .NET and SQL. The engineer will be required to implement these systems in the plant and provide required support as needed. This includes multiple functions relating to the development and integration of software systems to improve tool performance and efficiency and to collect data from and monitor plant floor manufacturing processes. This will require the engineer to analyze a situation, develop a design specification that addresses the requirements, design and implement the solution, and document the design for ongoing support. The candidate will be required to coordinate the installation and startup of systems or system upgrades and the training of plant associates.  Shift: 1st Shift, Non-Manufacturing  Responsibilities Designing coding and troubleshooting of plant automation and data collection systems. Design, program and install new electrical control systems and/or upgrade existing systems using the latest technology available. Providing technical support in maintenance of existing control systems. Minimum Requirements Bachelor’s Degree in Computer Science, Electrical Engineering or equivalent technical degree. 0-3 years experience in programming Visual Studio.NET, JavaScript, SQL etc. 0-3 years experience with PCs, PLCs, I/O, sensors and process controls Candidate must be a US Citizen or Permanent Resident (Green Card holder) Preferred Qualifications Working knowledge of AutoCAD (AutoCAD Electrical preferred) Knowledge of the semiconductor industry Good communications skills Experience leading and participating in a cross-functional support team environment, sharing knowledge and experiences with other team members in support of team responsibilities Ability to interact with customers from a broad range of computer, control, and mechanical component experience and skill levels in a friendly, open-minded manner Overview Since our beginning 30 years ago, we have introduced innovative and disruptive solutions that enable a more efficient, productive and safer world. We continue our leadership in developing market-leading lighting-class LEDs, lighting products and semiconductor products for power and radio frequency (RF) applications. We believe in unlocking the power and potential of technology, enabling the world to do more with less. We aim to transform the way people experience light and are also leading the innovation of Power/RF products that move us toward a more energy efficient future.  Be part of our future and have a direct impact while working for an organization that provides a place to work alongside brilliant people, a competitive total rewards package, and a problem solving culture. We invite you to submit an application if you feel we would be a good fit.  We are an equal opportunity employer and all qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, national origin, disability status, protected veteran status, or any other characteristic protected by law.  2 hours ago   -  save job  -                  original job           Apply On Company Site   Other jobs you may like   Software Engineer 1 (1802905)  Q2 Solutions - \t\t\t\t\tResearch Triangle Park, NC 6 days ago   Software Engineer 1  IQVIA - \t\t\t\t\tResearch Triangle Park, NC 6 days ago   Software Engineer 1 (1802905)  QuintilesIMS - \t\t\t\t\tResearch Triangle Park, NC 6 days ago   Software Engineer (5)  Atlantic Talent Acquisition Consultants, Inc. (ATAC) - \t\t\t\t\tRaleigh-Durham, NC 16 hours ago   Easily apply    Software Engineer  LFS - \t\t\t\t\tRaleigh-Durham, NC 5 hours ago   Easily apply        Software Engineer jobs in Durham, NC   Jobs at CREE in Durham, NC   Software Engineer salaries in Durham, NC  ",
                    "id": 2,
                    "job_title": "Software Engineer"
                }
        ];
        // console.log(this.props.location.state.resultList.length);

        if (this.state.noResult) {
            return (
                <div className="ResultList" style={{position: 'relative 50% 50%', transform: 'translate(40%,50%)'}}>
                    <List ordered={true}>
                        <List.Content><h3>Sorry, No Job Found</h3></List.Content>
                    </List>
                </div>
            )
        }

        // let jobsList = this.props.location.state.resultList;
        let resultListItems = this.state.resultList.map((result, idx) => {
            return (
                <Card style={{padding:20}} key={idx}>
                    <h5><a href={result.job_link} target="_blank">{result.job_title}</a></h5>
                    <div>{result.comp_name}</div>
                    <div>{result.job_location}</div>
                </Card>
            )


        });

        return(
            <div style={listViewStyle}>
                <h1 style={{textAlign: 'center', color: titleColor}}>Recommended Jobs</h1>
                <div>{resultListItems}</div>
            </div>



        )
    }
}

ListView.propTypes = {
    resultList: PropTypes.object
};

export default ListView