import React, {useState} from "react";
import ReactDOM  from "react-dom";
import {useNavigate} from 'react-router-dom';
import './homepage.css';
import Homepageheader from "./homepageheader";
import news from "./news.svg";
import messenger from "./fbmessenger.svg";
import tv from "./tv.svg";
import shop from "./shop.svg";
import cal from "./calendar.svg";
import flag from "./flag.svg";
import group from "./group.svg";
import drop from "./caret.svg";
import like from "./like.png";
import like2 from "./like.svg";
import comment from "./comment.svg";
import share from "./share.svg";
import Modal from "./modal";
import mainimg from "./mainimg.jpg";

function Homepage(){
    const navigate = useNavigate();
    // console.log(localStorage.getItem("islogin"));
// ....
    // navigate('/homepage');
    // const Logout = () =>{
    //     localStorage.setItem("islogin", false);
    //     navigate('/');
    // }
// ....

    const [modal, showModal] = useState(false);
    return(

         

        <div className="home">
        
            <Homepageheader />
            <div className="sides">
                <div className="leftbody">
                    <div style={{paddingLeft:"20px", fontWeight:"bold", fontSize:"17px", paddingTop:"20px"}}>
                    <img src = {news} style={{verticalAlign:"middle", maxHeight: "23px", marginTop: "9px", backgroundColor:"ghostwhite"}}/>
                    
                    <span style = {{verticalAlign:"middle", marginTop:"10px"}}>&nbsp;Newsfeed&nbsp;&nbsp;&nbsp;...</span>
                    </div>

                    <div style={{paddingLeft:"20px", fontWeight:"bold", fontSize:"17px", paddingTop:"20px"}}>
                    <img src = {messenger} style={{verticalAlign:"middle", maxHeight: "23px", marginTop: "9px", backgroundColor:"ghostwhite"}}/>
                    
                    <span style = {{verticalAlign:"middle", marginTop:"10px"}}>&nbsp;Messenger</span>
                    </div>



                    <div style={{paddingLeft:"20px", fontWeight:"bold", fontSize:"17px", paddingTop:"20px"}}>
                    <img src = {tv} style={{verticalAlign:"middle", maxHeight: "23px", marginTop: "9px", backgroundColor:"ghostwhite"}}/>
                    
                    <span style = {{verticalAlign:"middle", marginTop:"10px"}}>&nbsp;Watch</span>
                    </div>

                    <div style={{paddingLeft:"20px", fontWeight:"bold", fontSize:"17px", paddingTop:"20px"}}>
                    <img src = {cal} style={{verticalAlign:"middle", maxHeight: "23px", marginTop: "9px", backgroundColor:"ghostwhite"}}/>
                    
                    <span style = {{verticalAlign:"middle", marginTop:"10px"}}>&nbsp;Marketplace</span>
                    </div>

                    <div style={{paddingLeft:"20px", fontWeight:"bold", fontSize:"17px", paddingTop:"20px"}}><u>Explore</u></div>

                    <div style={{paddingLeft:"20px", fontWeight:"bold", fontSize:"17px", paddingTop:"20px"}}>
                    <img src = {shop} style={{verticalAlign:"middle", maxHeight: "23px", marginTop: "9px", backgroundColor:"ghostwhite"}}/>
                    
                    <span style = {{verticalAlign:"middle", marginTop:"10px"}}>&nbsp;Events</span>
                    </div>

                    <div style={{paddingLeft:"20px", fontWeight:"bold", fontSize:"17px", paddingTop:"20px"}}>
                    <img src = {flag} style={{verticalAlign:"middle", maxHeight: "23px", marginTop: "9px", backgroundColor:"ghostwhite"}}/>
                    
                    <span style = {{verticalAlign:"middle", marginTop:"10px"}}>&nbsp;Pages</span>
                    </div>

                    <div style={{paddingLeft:"20px", fontWeight:"bold", fontSize:"17px", paddingTop:"20px"}}>
                    <img src = {group} style={{verticalAlign:"middle", maxHeight: "23px", marginTop: "9px", backgroundColor:"ghostwhite"}}/>
                    
                    <span style = {{verticalAlign:"middle", marginTop:"10px"}}>&nbsp;Groups</span>
                    </div>

                    <div style={{paddingLeft:"20px", fontWeight:"bold", fontSize:"17px", paddingTop:"20px"}}>
                    <img src = {drop} style={{verticalAlign:"middle", maxHeight: "23px", marginTop: "9px", backgroundColor:"ghostwhite"}}/>
                    
                    <span style = {{verticalAlign:"middle", marginTop:"10px", color: "blue"}}>&nbsp;See more...</span>
                    </div>

                    <div style={{paddingLeft:"20px", fontWeight:"bold", fontSize:"17px", paddingTop:"20px"}}>
                    
                    
                    <span style = {{verticalAlign:"middle", marginTop:"10px", color: "blue"}}>Ad . Group . Page</span>
                    <br />
                    <span style = {{verticalAlign:"middle", marginTop:"10px", color: "blue"}}>Event . Fundraiser</span>
                    </div>
                    
                    
                </div>
                <div className="body">
                    <div>
                        <button onClick={() => showModal(true)}>
                        <img src = {mainimg}  style={{height:"400px", marginTop:"10px"}}/></button>
                        <div>
                        <span>
                        <br />
                        <img src = {like} style ={{height:"30px", borderRadius:"25px", backgroundColor:"blue", padding:"5px"}} />
                        &nbsp;&nbsp;<u>Virat Kohli and 255 others</u>
                        </span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>29 comments</u></span>
                        <br />
                        
                        <div style={{backgroundColor:"white"}}>
                        <button style={{border:"none" , width:"150px", height:"50px",backgroundColor:"white"}}>
                        <img src = {like2} style ={{height:"30px"}} />Like
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button style={{border:"none" , width:"150px", height:"50px",backgroundColor:"white"}}>
                        <img src = {comment} style ={{height:"30px"}} />Comment
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button style={{border:"none" , width:"150px", height:"50px" ,backgroundColor:"white"}}>
                        <img src = {share} style ={{height:"30px"}} />Share 
                        </button>
                        </div>
                        
                        </div>
                    </div>


                        
                </div>
                <div className="rightbody">
                    
                </div>
            </div>
            {modal && <Modal showModal = {showModal}/>}
        </div>
    );
}

export default Homepage;