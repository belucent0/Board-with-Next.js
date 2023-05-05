import {age, name} from "./data";
import {pole} from "./pole";

export default function Cart() {
    let cart = ['토마토', '파스타']
    return (
      <div>
        <h4 className="title">Cart</h4>
        <div className="cart-item">
        <p>상품명 {age}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
        <CartItem item={cart[0]} />
        <CartItem item={cart[1]}/>
        <Banner content='롯데카드'/>
        <Banner content='현대카드'/>
        <Button color='blue'/>
      </div>
    );
}

function CartItem(props){
    return (
      <div className="cart-item">
        <p>{props.item}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    );
}

function Banner(props){
    return <h5>{props.content} 결제 행사중</h5>
}

function Button(props){
    return <button style={{ background: props.color }}>버튼색상</button>
}