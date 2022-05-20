let students = [
    { name: 'Adhonys', gender: 'm', score: 76 },
    { name: 'Kandora', gender: 'f', score: 78 },
    { name: 'George', gender: 'm', score: 80 },
    { name: 'Naxiell', gender: 'f', score: 82 },
    { name: 'Daniel', gender: 'm', score: 84 },
    { name: 'Manuel', gender: 'm', score: 86 },
    { name: 'Carlos', gender: 'm', score: 88 },
    { name: 'Cesar', gender: 'm', score: 90 },
    { name: 'Ean', gender: 'm', score: 92 },
    { name: 'Jose', gender: 'm', score: 94 },
    { name: 'Leandro', gender: 'm', score: 96 },
    { name: 'Wilber', gender: 'm', score: 98 },
    { name: 'Milton', gender: 'm', score: 100 }];

const Student = (props) => {
    return React.createElement("div", {className:"student-card"}, [
        React.createElement("h3", {}, props.name),
        React.createElement("h4", {}, props.gender),
        React.createElement("h4", {}, props.score)
    ]);
}

let studentList=[];
students.forEach((student, index) => {
    studentList.push(React.createElement(Student, student));
});

const App = () => {
    return React.createElement (
        "div",
        null,
        [
            React.createElement("h2", {}, "Alterna Student List"),            
            React.createElement(Student, { name: 'Adhonys', gender: 'm', score: 76 }),
            React.createElement(Student, { name: 'Kandora', gender: 'f', score: 78 }),
            React.createElement(Student, { name: 'George', gender: 'm', score: 80 }),
            React.createElement(Student, { name: 'Naxiell', gender: 'f', score: 82 }),
            React.createElement(Student, { name: 'Daniel', gender: 'm', score: 84 }),
            //React.createElement("div", {}, studentList)
            // students.forEach(student => {
            //     React.createElement(Student, student);
            // }),
        ]
        );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));