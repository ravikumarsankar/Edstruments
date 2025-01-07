import React from "react";
import { Field } from "formik";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const Comments = ()=>{
    return(
       
                  <div className="comments-container">
                    <div className="comments-label">Comments</div>
                    <div className="comment-field">
                    <Field name="comments" as="textarea" placeholder="Add a comments and use @Name to tag someone" className='comments-area' />
                    <SendOutlinedIcon className="comments-icon"/>
                    </div>
                
                  </div>
                 
               
    )
}
export default Comments;