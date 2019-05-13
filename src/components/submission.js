import React, {Component} from 'react';
import styled from 'styled-components';


const Flexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;


const Card = styled(Flexbox)`
  padding: 1rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  border-radius: 4px;
`;

class Status extends Component{

    

    state = {
        form: {}
    }

    componentWillMount(){
        this.setState({form: JSON.parse(localStorage.getItem('form'))});
    }

    render(){
    
        const listStyling = {
            'list-style-type': 'none'
        }
        
        return (
            <div>
            <Card>
            <h1> Your Form Is Submitted</h1>
            </Card>
            <Card>
            <h2>Please see your data here</h2>
            </Card>
            <ul style={listStyling}>
        {
            Object.keys(this.state.form).map( fieldName => {
            return (
                <Card>
                <li>{fieldName} - {this.state.form[fieldName]}</li>
                </Card>
            )
        })
        }
        </ul>
        </div>
        )

        
    

    }

}



export default Status;