import './FilterState.css';

let FilterState = (props) => {

    function onFilterValueChanged(event) {
        props.filterValueSelected(event.target.value);
    }

    return (
    <div className="filter-area">
        <select name="isState" onChange={onFilterValueChanged}>
            <option value="">
              -- select a State --
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Assam">Assam</option>
          </select>
    </div>)
}

export default FilterState;