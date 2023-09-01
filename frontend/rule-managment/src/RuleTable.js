import React from "react";
function RuleTable({ rules }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Level</th>
          <th>Date</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {rules.map((item, index) => (
          <tr key={index}>
            <td className={item.level.toLowerCase()}>{item.rule}</td>
            <td className={item.level.toLowerCase()}>{item.level}</td>
            <td className={item.level.toLowerCase()}>{item.date}</td>
            <td className={item.level.toLowerCase()}>{item.Message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


export default RuleTable;
