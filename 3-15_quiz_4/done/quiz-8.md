8. Write a component that render a list of students infomation.

const student = [xxx]


return student.map((ele, index) => {
  return (<li key={index}>{ele.name}</li>);
})
