const Avatar = (props)=>{
    const{user,showinfo,children} = props
    return<div className="flex">
        {children}
        <h1>{user.name}</h1>
        <img className="" src=""></img>
        <button className="btn btn-" onclick={showinfo}>A Nhon!</button>
    </div>
}
export default Avatar