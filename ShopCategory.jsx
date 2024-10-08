
import  React,{useContext}  from 'react';
import './css/shopCategory.css';
import { ShopContext } from '../Context/shopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from "../Components/Item/Item";
import all_product from '../Components/Assets/all_product';
import Footer from '../Components/Footer/Footer';


const ShopCategory =(props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className='shop-category' >
     <img className='shopcategory-banner' src={props.banner} alt="" />
     <div className="shopcategory-indexsort">
      <p>
        <span>
          Showing 1-12 
        </span>    out of 36 product
      </p>
    <div className='shopcategory-sort'>
      Sort by <img src={dropdown_icon} alt="" />
    </div>
     </div>
     <div className="shopcategory-products">
      {all_product.map((item,i)=>
      {
        if (props.category===item.category)
        {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}   />
        }
        else{
          return null;
        }

      })}
     </div>
     <div className="shopcategory-loadmore">
      Explore more
     </div>
    </div>
  );
}

export default ShopCategory;