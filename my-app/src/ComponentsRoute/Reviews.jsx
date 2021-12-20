import React from "react";
import { Link, NavLink, Navigate, Outlet } from "react-router-dom";



const reviewsData = [
          { 
            id : "01",
            title: 'Reviews #1',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
          },
          {
            id : "02",
            title: 'Reviews #2',
            content: ` Impedit autem esse nostrum quasi, fugiat a aut error cumque
            quidem maiores doloremque est numquam praesentium eos voluptatem amet!
            Repudiandae, mollitia id reprehenderit a ab odit!`
          },
          {
            id : "03",
            title: 'Reviews #3',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
            quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
            dolor ut sequi minus iste? Quas?`
          }
        ]; 

function Reviews (){  
  
    return (
      <div>
        <h1>Reviews</h1>
          {reviewsData.map(({ title, content, id }) => ( 
          <div key={id} className="reviewItem">             
            <nav>
              <Link to ='/reviews/reviewsItem/' className ='reviews'>{title}</Link>              
            </nav>
            <div  className="content">              
              {content}
            </div>
          </div>))}
      </div>        
  
  )
          }  

export default Reviews 

