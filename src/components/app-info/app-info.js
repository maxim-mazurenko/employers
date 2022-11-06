import "./app-info.css";

const AppInfo = (props) => {
  return (
    <div className="app-info">
      <h1>Учет компании в компании N</h1>
      <h2>Общие число сотрудников: {props.count}</h2>
      <h2>Премию получат: {props.increased}</h2>
    </div>
  );
};

export default AppInfo;
