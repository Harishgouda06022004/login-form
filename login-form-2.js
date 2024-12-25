import React, {useState} from "react"
const LoginForm=()=>{
    const [formData, setFormData]=useState({email:"",password:""})
    const [error,setError]=useState("")
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!formData.email || formData.password){
            setError("please fill Data Details")
            return
        }
        setError("");
        console.log("Form-submitted:",formData)
    };
    return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>LoginForm</h2>
        <form onSubmit={handleSubmit}>
            <div style={{marginBottom:"15px"}}>
                <label htmlFor="email" style={{display:"block",marginBottom:"5px"}}>Email</label>
                <input
                 type="email"
                 id="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                style={{ width: "100%", padding: "15px", margin: "0 5px", boxSizing: "border-box",borderRadius:"15px",border:"2px solid black" }}
                />                  
            </div>
            <div style={{marginBottom:"15px"}}>
                <label htmlFor="password" style={{display:"block",marginBottom:"5px"}}>Password</label>
                <input 
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{width:"100%",padding:"15px",margin:"0 5px",boxSizing:"border-box",borderRadius:"15px",border:"2px solid black"}}
                />
            </div>
            {error && <p style={{color:"red"}}>{error}</p>}
            <button style={{backgroundColor:"green",height:"50px",width:"100px",borderRadius:"8px"}}>Submit</button>
        </form>
    </div>
    
    )
}
export default LoginForm
