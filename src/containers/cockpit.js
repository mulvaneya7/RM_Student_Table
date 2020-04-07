import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentForm from '../StudentForm/StudentForm';
import StudentTable from './studentTable';
import { addStudent } from '../store/actions';

class Cockpit extends Component {
    render() {
        return (
            <div>
                <StudentForm {...this.props}/>
                <StudentTable  {...this.props}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addStudent: () => dispatch(addStudent()),
  });

export default connect(
    () => ({}),
    mapDispatchToProps,
)(Cockpit);
