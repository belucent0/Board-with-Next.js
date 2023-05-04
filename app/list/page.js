export default function List() {
    let products = ['토마토', '파스타', '코코넛']

    return (
        <div>
            <h4 className="title">상품목록</h4>
            {
                products.map((v, i)=>{
                    return (
                      <div className="food" key={i}>
                        <img src={`/food${i}.png`} className="food-img"/>
                        <h4>{v} 40000원</h4>
                      </div>
                    );

                })
            }
        </div>
    )
}