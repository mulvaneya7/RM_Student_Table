import StudentData from '../store/students.json';

//const testStudent = {name: "Test", math: "A", history: "B", science:"C", english: "D"};

const initialState = {
    students: StudentData.data
}

const reducer = (state = initialState, action) => {
    if(action.type === "ADD_STUDENT"){
        return {
            ...state,
            students: state.students.concat(action.student)
        }
    }
    return state;

}

export default reducer;