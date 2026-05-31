import "./FilterBar.css";
function FilterBar({ current, onChange }) {
  return (
    <div className="filter-bar">
      {["all", "active", "done"].map((f) => (
        <button
          className={current === f ? "active" : ""}
          key={f}
          onClick={() => onChange(f)}
          style={{ fontWeight: current === f ? "bold" : "normal" }}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
