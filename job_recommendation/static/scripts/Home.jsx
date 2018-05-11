// App.jsx
import React from "react";
import ReactDOM from 'react-dom';
import { withRouter, router } from 'react-router';
import { Link } from 'react-router-dom'
import 'whatwg-fetch'

import ListView from "./ListView.jsx";
// import Main from "./Main.jsx";


<script src="https://unpkg.com/styled-components/dist/styled-components.min.js"></script>

var textColor = '#434555';
var titleColor = '#1c396a';

var backgroundPicture=
{
	backgroundImage: "url('images/universe.jpg')",
	height: '100%',
	width: '100%',
};
var headerStyles = 
{
	 alignSelf: 'center',
	 fontFamily: 'Helvetica',
	 justifyContent: 'center',
	 backgroundColor: 'white',
	 textAlign: 'center',
	 width: 1000,
     fontSize: 40,
     color: titleColor,
	 margin:'auto',
};
var jobStyles=
{
	 alignSelf: 'center',
	 fontFamily: 'freesans',
	 justifyContent: 'center',
	 backgroundColor: 'white',
	 textAlign: 'center',
	 width: 1000,
	 fontSize: 30,
	 color: textColor,
	 margin: 'auto',
	paddingBottom:30
};
var selectStyles=
{
	 alignSelf: 'center',
	 justifyContent: 'center',
	 textAlign: 'center',
	 backgroundColor: 'white',
	 width: 1000,
	 // height: 50,
	 padding: 20,
	 margin: 'auto',
};
var selectFont=
{
	 cursor: 'pointer',
	 fontFamily: ' Arial',
	 fontSize: 25,
};
var searchStyles=
{
	 alignSelf: 'center',
	 justifyContent: 'center',
	 textAlign: 'center',
	 backgroundColor: 'white',
	 width: 1000,
	 height: 60,
	 paddingTop: 10,
	 margin: 'auto',	
};
var searchFont=
{
	fontFamily: 'Helvetica',
	fontSize: 20,
};

var content=
    {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex'

    };


var galaxy=
{
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
	width: 1000,
	height: 200,
	margin: 'auto',
	backgroundColor:'white',
};
var solar_system=
{
	backgroundColor: 'green',
	width:1000,
	height:1000,	
};
var resumeStyle=
{
	paddingRight:10,
	fontFamily: 'Helvetica',
	fontSize: 20,
};
var rowDisplay=
    {
    	display:'flex',
		direction: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',

        alignSelf: 'center',
		width: 1000,
		margin: 'auto',
    	backgroundColor: 'white'
    };
/*
var fixedwidth=
 {
     width: 976,
     margin: auto,
 };
*/

var myCard={padding:50,
    color: textColor};
    

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			searchResults: [],
			colorResult:true,
			redirect: false
		};
        this.setRedirect = this.setRedirect.bind(this);
    }
	onChange(e) 
	{
        this.setState({searchText: e.target.value});
    }
	onMouseover(e)
	{
		this.setState({colorResult: !this.state.colorResult});
	}
	getResults() 
	{
        calltodb(searchText).then(e => 
		{
            this.setState({searchResults: e.value})
        });
    }

    redirect(data) {
        // console.log(data)
        // console.log(data[0])
        this.props.history.push({
            pathname: '/jobs',
            state: {
                resultList: data
            }
        })
    }
 
    setRedirect() {
        var selected = document.querySelector('select').selectedOptions[0].value
        // console.log(selected)
        var input = document.querySelector('input[type="file"]')

		var form = new FormData()
		form.append('file', input.files[0])
		form.append('area', selected)

		// const request = async () => {
		// 	const response = await fetch('/get_recommendation', {
		// 		method: 'post',
		// 		body: form
		// 	});
		// 	const status = await response.status
		// 	console.log(status);
		// 	// this.setState({
		// 	// 	redirect: true
        //     // })
        //     this.props.history.push({
        //         pathname: '/jobs',
        //         state: {
        //           id: 7,
        //           color: 'green'
        //         }
        //     })
		// }
		
        // request();

        fetch('/get_recommendation', {
            method: 'post',
            body: form
        })
        .then(response => response.json())
        .then((data, redirect) => {
            // console.log(data)
            this.redirect(data)
        }).catch(function(error) {
            console.log('request failed', error)
        })

    };

    render()
	{
		let bgColor=this.state.colorResult?"white":"grey";
		if (this.state.redirect) {
			return (
				<ListView style={{color: textColor}}/>
			);
		}
        return (

            <div style={{ backgroundColor: '#9FABC7', height:'100%', width:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {/*<style>{'body { background-color: #9FABC7}'}</style>*/}
                <div className="container Card" style={myCard}>
				<div className="fixedwidth">
                        <h1 style={headerStyles}>Intelligent Job Recommendation System</h1>
                        <div id="job">
                            <p style={jobStyles}>CS410 text information system</p>
                        </div>

                        <div className="option" style={selectStyles}>
                            <select style={selectFont}>
                                <option value ="EE">Electrical Engineering</option>
                                <option value ="CH">Chemistry</option>
                                <option value ="SP">Software Programming</option>
                                <option value ="ME">Mechanical Engineering</option>
                                <option value ="BU">Business</option>
                                <option value ="MA">Management</option>
                                <option value="MK">Marketing</option>
                                <option value="AD">Advertising</option>
                                <option value="ART">Arts</option>
                                <option value="PM">Product Manager</option>
                            </select>
                        </div>

                        <form style={rowDisplay}>
                            <p style={resumeStyle}>Select your resume: </p>
                            <input type="file" id="uploadFile" name="file"/>
                        </form>

                        <div id="search" style={searchStyles}>
                            <button style={{backgroundColor: bgColor,cursor: 'pointer',fontFamily: 'Helvetica',fontSize:20,marginTop:50}} onMouseOver={this.onMouseover.bind(this)} onMouseOut={this.onMouseover.bind(this)} onClick={this.setRedirect}>
                                Upload and Get Recommendation
                                {/* <Link to='/jobs'>Upload and Recommend</Link> */}
                            </button>
                        </div>
                    </div>
				</div>
        	</div>

        )
    }

}

export default withRouter(Home)