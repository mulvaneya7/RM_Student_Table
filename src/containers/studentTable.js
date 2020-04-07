import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table} from 'react-bootstrap';

//Calculation Function
//Calculate GPA from an Array of grades
const calcGPA = (arr) => {
    const possibles = ['A', 'B', 'C', 'D', 'F'],
        gradepoints = [4,3,2,1,0];
    let letters = [...arr];
    let totalGradepoints = 0;
    
    letters.map((letter, pos) => {
        return totalGradepoints += gradepoints[possibles.indexOf(letter.substr(letter.length-1, 1))];
    })

    return (totalGradepoints/letters.length).toFixed(2)
}

//Calculate Function
//Find the highest GPA in the class
const findH = list => {
    let highest = -1;
    list.forEach(element => {
        if(calcGPA(element.grades) > highest) {
            highest = calcGPA(element.grades);
        }
    });
    return highest;
}

//Calculate Function
//Find the lowest GPA in the class
const findL = list => {
    let lowest = 4
    list.forEach(element => {
        if(calcGPA(element.grades) < lowest) {
            lowest = calcGPA(element.grades);
        }
    });
    return lowest;
}

//custom styles for the best and worst students
const best = {
    backgroundColor: "green"
}

const worst = {
    backgroundColor: "red"
}


class StudentTable extends Component {
    constructor (props) {
        super(props);
        this.renderStudents = this.renderStudents.bind(this);
        this.setRowStyle = this.setRowStyle.bind(this);
    }

    //Set Row Style based on GPA
    setRowStyle = (gpa) => {
        let highest = findH(this.props.studentList);
        let lowest = findL(this.props.studentList);
        if(gpa === highest){
            return best
        }
        else if(gpa === lowest){
            return worst
        }
        else {
            return {
                backgroundColor: "white"
            }
        }

    }

    //Render Student rows from redux store
    renderStudents = (studentDetail, index) => {
        return (
            <tr key={studentDetail._id} style={this.setRowStyle(calcGPA(studentDetail.grades))}>
                <td>{studentDetail.name}</td>
                {studentDetail.grades.map((grade, index2) => {
                    return (
                        <td>{grade.substr(grade.length-1, 1)}</td>
                    )
                })}
                <td>{calcGPA(studentDetail.grades)}</td>
            </tr>
        )
    }

    render() {
        return(
    
        <div className="StudentTable">
            <Table bordered hover>
                <thead>
                    <tr style={{backgroundColor: "grey"}}>
                    <th>Name</th>
                    <th>Math</th>
                    <th>History</th>
                    <th>Science</th>
                    <th>English</th>
                    <th>GPA</th>
                    </tr>
                </thead>
                
                <tbody>
                    {this.props.studentList.map(this.renderStudents)}
                </tbody>
            </Table>
          
        </div>
        )}}
    

const mapStateToProps = state => {
    return {
        studentList: state.table.students
    }
}
  
export default connect(mapStateToProps)(StudentTable)

