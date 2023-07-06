import './magaineStyle.css';


const Magazine = ()=>{
const imgUrl= "https://images.unsplash.com/photo-1533030374172-511ecb583653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
    return(
        <div className='magazineContainer'>
            <img src={imgUrl}/>
        </div>
    )
}

export default Magazine;