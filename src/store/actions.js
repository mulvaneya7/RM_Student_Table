import { SubmissionError } from 'redux-form';

export function addStudent() {
    return (dispatch, getState) => {
      const form = getState().form;
      //Error if grade is not a possible grade
      const possibles = ['A', 'B', 'C', 'D', 'F'];
      if(!possibles.includes(form.StudentForm.values.math) ||
          !possibles.includes(form.StudentForm.values.history) ||
          !possibles.includes(form.StudentForm.values.science) ||
          !possibles.includes(form.StudentForm.values.english)) {
            throw new SubmissionError({_error: 'One or more incorrect grade submissions'})
          }

      const student = {
        _id: Math.random().toString(36).substr(2, 9),
        name: form.StudentForm.values.name,
        grades: [
          "Math - " + form.StudentForm.values.math,
          "History - " + form.StudentForm.values.history,
          "Science - " + form.StudentForm.values.science,
          "English - " + form.StudentForm.values.english
        ]
      };
      dispatch({
        type: 'ADD_STUDENT',
        student,
      });
    }
  }