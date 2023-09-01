import React from "react";
function RuleTable({ rules }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rank</th>
          <th>Date</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {rules.map((item, index) => (
          <tr key={index}>
            <td className={item.rank.toLowerCase()}>{item.rule}</td>
            <td className={item.rank.toLowerCase()}>{item.rank}</td>
            <td className={item.rank.toLowerCase()}>{item.date}</td>
            <td className={item.rank.toLowerCase()}>{item.Message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


export default RuleTable;