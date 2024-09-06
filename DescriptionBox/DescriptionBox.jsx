
import  React  from 'react';
import { Footer } from 'rsuite';
import './DescriptionBox.css'


const DescriptionBox =() => {
  return (
    <div className='descriptionbox' >
        <div className="descriptionbox-navigator">
           <div className="descriptionbox-nav-box">
            Decription</div> 
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews (122) </div> 
        <div className="descriptionbox-description">
            <p>
                an e-commers website
            </p>
            <p>
                Done by Venkat Sai
            </p>

        </div>
    </div>
  );
}

export default DescriptionBox;