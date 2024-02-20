import { memo } from "react";

const Button = memo(function Button ({ icon, size = 30, click }) {
    return (
      <button className="button" onClick={()=>click()}>
        <span className="material-icons" style={{ fontSize: `${size}px`, fontWeight: 'bold' }}>
          {icon}
        </span>
      </button>
    );
})

export default Button