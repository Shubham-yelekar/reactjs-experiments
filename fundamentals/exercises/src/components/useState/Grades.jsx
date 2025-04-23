import React from "react";

const Grades = () => {
  return (
    <div>
      <Table />
    </div>
  );
};

function Table() {
  function handleClick(e) {
    console.log(e.target.textContent);
  }

  return (
    <table>
      <thead>
        <tr>
          <td>Subjects</td>
          <td>Marks</td>
          <td>Grades</td>
        </tr>
      </thead>
      <tbody onClick={handleClick}>
        <tr>
          <td>Math</td>
          <td>65</td>
          <td>C</td>
        </tr>
        <tr>
          <td>English</td>
          <td>80</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>95</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Art</td>
          <td>50</td>
          <td>D</td>
        </tr>
        <tr>
          <td>History</td>
          <td>78</td>
          <td>B</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Grades;
