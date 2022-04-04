import classes from './CartItem.module.css';
const CartItem = () => {
  return (
    <ul class='list-group'>
      <li class='list-group-item d-flex justify-content-between align-items-center'>
        Cras justo odio
        <span class='badge bg-primary rounded-pill'>14</span>
      </li>

      {/* <span className={classes.Menuimage}>
        <div className='card border-primary mb-3'>
          <div class='card-body'>
            <img
              src='https://blog.kakaocdn.net/dn/kAZgq/btqQzRFyXuO/Dg2fSKaU4ykGl88lxKC9zk/img.jpg'
              alt='동적으로 받아와야함'
            ></img>
          </div>
        </div>
      </span> */}
      <span className='menuName'>pasta(동적으로 받아오ㅏ야함)</span>
      <span>
        <div class='btn-group' role='group' aria-label='Basic example'>
          <button type='button' class='btn btn-secondary'>
            -
          </button>
          <button type='button' class='btn btn-secondary disabled'>
            0
          </button>
          <button type='button' class='btn btn-secondary'>
            +
          </button>
        </div>
      </span>
      <span className='MenuPrice'>3,000 데이터받아오기</span>
    </ul>
  );
};

export default CartItem;
