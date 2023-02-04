import { useEffect } from "react";

function LogInForm() {

  
  return (
    <div>
      <form>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password..." />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}
export default LogInForm;
