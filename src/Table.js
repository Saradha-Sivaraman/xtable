import React from 'react';

function Table({ articles }) {
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((val, key) => (
            <tr key={key}>
              <td >{val.date}</td>
              <td >{val.views}</td>
              <td >{val.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
