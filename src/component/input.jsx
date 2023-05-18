export default function Input(props) {
  return (
  <> 
    <label>{props.Label}</label>
   <input type="text" name={props.name} onChange={props.fun}/><br />
  </>
  );
}
