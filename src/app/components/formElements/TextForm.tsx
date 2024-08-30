export default function TextForm({name,component_id,placeholder,isPassword}:{name:string;component_id:string,placeholder:string,isPassword:boolean}) : JSX.Element {
  return (
    <input type={isPassword ? "password" : "text" } name={name} id={component_id} required placeholder={placeholder} className="p-1 rounded-sm"></input>
  )
}