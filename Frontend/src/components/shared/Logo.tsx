import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div style={{
        display: 'flex',
        marginRight: "auto" ,
        alignItems: "center",
    }}>
        <Link to={"/"}>
            <img 
                src="Logo.png" 
                alt="Logo" 
                width={"90px"} 
                height={"90px"} 
            />
        </Link>
    </div>
  )
}

export default Logo;