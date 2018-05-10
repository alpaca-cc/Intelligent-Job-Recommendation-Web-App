// App.jsx
import React from "react";
import ReactDOM from 'react-dom';
<script src="https://unpkg.com/styled-components/dist/styled-components.min.js"></script>

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
     color: 'black',
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
	 color: 'brown',
	 margin: 'auto',
};
var selectStyles=
{
	 alignSelf: 'center',
	 justifyContent: 'center',
	 textAlign: 'center',
	 backgroundColor: 'white',
	 width: 1000,
	 height: 50,
	 paddingTop: 10,
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
}
var galaxy=
{
	width: 1000,
	height: 300,
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
	paddingTop:60,
	fontFamily: 'Helvetica',
	fontSize: 20,
};
/* 
var fixedwidth= 
 {  		
     width: 976,
     margin: auto,  		
 };
*/
export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			searchText: '',
			searchResults: [],
			colorResult:true,
		}
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

    render() 
	{
		let bgColor=this.state.colorResult?"white":"red"
        return (

	<div class="container">
			
			<style>{'body { background-color: pink;}'}</style>
				{/*<style>{'backgroundImage: `url("images/universe.jpg")`;'}</style>*/}
				
				<div class="fixedwidth">
				
					<h1 style={headerStyles}>Intelligent Job Recommendation System</h1>
					<div id="job">
					
						<p style={jobStyles}>CS410 text information system</p>
					</div>
					
					<div class="option" style={selectStyles}>
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
					<div id="search" style={searchStyles}>
						
						<input type="text" style={searchFont} placeholder="Search" / >
						<button style={{backgroundColor: bgColor,cursor: 'pointer',fontFamily: 'Helvetica',fontSize:20}} onMouseOver={this.onMouseover.bind(this)} onMouseOut={this.onMouseover.bind(this)}>Start</button>
						
					</div>
					
					<form style={galaxy}>
						<p style={resumeStyle}>Upload your resume below</p>
						<input type="file" id="uploadFile" name="file"/>
					</form>
					<div class="galaxy" style={galaxy}>
					</div>
				
				</div>
				
			</div>
			
        )
    }

}
