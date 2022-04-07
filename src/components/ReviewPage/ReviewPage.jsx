import classes from './ReviewPage.module.css';

const ReviewPage = () => {
  return (
    <div className='ReviewPage container text-center'>
      {/*리뷰페이지 네브바 */}
      <section className='Navbar container'></section>

      {/*리뷰 리스트 */}
      <section className='ReviewList container'>
        <div className='ReviewItem row card'>
          <div className='card-body row'>
            <div className='MenuImg col-3'>
              <img
                className={classes.cardImg}
                class='card-img'
                src='https://cdn.imweb.me/upload/S2017041358eed92818b4f/59fc0ee9bc7c3.jpg'
                alt='메뉴사진'
              />
            </div>
            <div className='ReviewInfo col mt-3 p-0'>
              <div className='Metadata row'>
                <div className='NickName col-4'>
                  <h5>nickname</h5>
                </div>
                <div className='Rating col-4 text-warning'>
                  <i class='fa fa-star '></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                </div>
                <div className='Date col-4'>
                  <h5>2022.12.12</h5>
                </div>
              </div>
              <div className='ReviewText row mt-4 p-2'>
                <h6>
                  맛잇어요어어앙너링러ㅏㄹ니ㅓ랑너리ㅏㅇㄴ러니ㅏㅓㅇㄴㄹ니ㅏ
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*페이징 처리*/}
      <section className='Pages container'>
        <div className='page text-center'>
          <ul class='pagination'>
            <li class='page-item disabled'>
              <a class='page-link' href='#'>
                &laquo;
              </a>
            </li>
            <li class='page-item active'>
              <a class='page-link' href='#'>
                1
              </a>
            </li>
            <li class='page-item'>
              <a class='page-link' href='#'>
                2
              </a>
            </li>
            <li class='page-item'>
              <a class='page-link' href='#'>
                3
              </a>
            </li>
            <li class='page-item'>
              <a class='page-link' href='#'>
                &raquo;
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ReviewPage;
