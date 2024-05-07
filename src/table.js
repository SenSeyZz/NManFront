import React from 'react';
import styles from "./table.module.css"

const Table = ({ data, onInputChange }) => {
  console.log(data);
  return (
    <table className={styles.customTable}>
      <thead>
      <tr>
          <th>First name</th>
          <th>Birth Year</th>
          <th>Nationality</th>
          <th>Boobs</th>
          <th>Ass</th>
          <th>BJ quality</th>
          <th>Intelligence</th>
          <th>Where you met</th>
          <th>Quality of the sex</th>
          <th>Complicity</th>
          <th>Special physical trait</th>
          <th>Global grade</th>
        
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td><input type="text" value={item.first_name} onChange={(e) => onInputChange(index, 'first_name', e.target.value)} /></td>
            <td><input type="number" value={item.birth_year} onChange={(e) => onInputChange(index, "birth_year", e.target.value)}  /></td>
            <td><input type="text" value={item.nationality} onChange={(e) => onInputChange(index, "nationality", e.target.value)}  /></td>
            <td><input type="number" value={item.boobs} onChange={(e) => onInputChange(index, "boobs", e.target.value)}  /></td>
            <td><input type="number" value={item.ass} onChange={(e) => onInputChange(index, "ass", e.target.value)}  /></td>
            <td><input type="number" value={item.bj_quality} onChange={(e) => onInputChange(index, "bj_quality", e.target.value)}  /></td>
            <td><input type="number" value={item.intelligence} onChange={(e) => onInputChange(index, "intelligence", e.target.value)}  /></td>
            <td><input type="text" value={item.where_you_met} onChange={(e) => onInputChange(index, "where_you_met", e.target.value)}  /></td>
            <td><input type="number" value={item.quality_of_the_sex} onChange={(e) => onInputChange(index, "quality_of_the_sex", e.target.value)}  /></td>
            <td><input type="number" value={item.complicity} onChange={(e) => onInputChange(index, "complicity", e.target.value)}  /></td>
            <td><input type="text" value={item.special_physical_trait} onChange={(e) => onInputChange(index, "special_physical_trait", e.target.value)}  /></td>
            <td><input type="number" value={item.global_grade} onChange={(e) => onInputChange(index, "global_grade", e.target.value)}  /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;