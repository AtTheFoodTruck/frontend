const CartItem = () => {
  return (
    <>
      <span className='menuimage'>
        <div class='card border-primary mb-3' style='max-width: 20rem;'>
          <div class='card-body'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NYC-Diner-Bacon-Cheeseburger.jpg/220px-NYC-Diner-Bacon-Cheeseburger.jpg'
              alt='동적으로 받아와야함'
            ></img>
          </div>
        </div>
      </span>
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
    </>
  );
};

export default CartItem;
