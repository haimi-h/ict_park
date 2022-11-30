import React from "react";

function CommentBox () {
    return (
        <div className="comment-box">
            
        <form>
        
        <label>
            <div className="comment-header">
            <h3>Leave a comment</h3>
            <i class="fas fa-comment fa-9x"></i>
            </div>
        <input type="text" placeholder="Enter your name"/>
        <div className="comment">
        <input type="text" placeholder="Enter your comment here..."/>
        <button className="submit-btn">Submit</button>
        </div>
          </label>
        
       
      
      </form>
      </div>
     
    )
}

export default CommentBox;