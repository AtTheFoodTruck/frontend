import React from "react";
import styled from "styled-components";

const SectionTop = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  /* margin-top: 15%; */
  top: 30%;
  left: 30%;
`;
const SaveButton = styled.button`
  width: 40%;
`;
const SaveDiv = styled.div`
  margin-left: 37%;
`;
const CheckButton = styled.button`
  margin-left: 15px;
`;
const InputSize = styled.input`
  margin-right: 50px;
`;

//TODO. 중복체크, 확인 버튼 배치
//TODO. 유효성검사, 수정버튼 처리

const UserInfoConfig = () => {
  return (
    <>
      <SectionTop class="page-section" id="contact">
        <div class="container">
          {/* <!-- Contact Section Heading--> */}
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-5">
            INFO EDITING
          </h2>
          {/* <!-- Contact Section Form--> */}
          <div class="row justify-content-center">
            <div class="col-lg-8 col-xl-7">
              {/* <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!--> */}
              <form
                id="contactForm"
                data-sb-form-api-token="API_TOKEN"
                className="container"
              >
                {/* <!-- Name input--> */}
                <div class="form-floating mb-2 row ">
                  <input
                    class="form-control  col"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label htmlFor="name">Nickname</label>
                  <CheckButton className="btn btn-primary btn-lg col-auto">
                    중복확인
                  </CheckButton>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    Plz Check Name
                  </div>
                </div>
                {/* <!-- password input--> */}
                <div class="form-floating mb-3 row">
                  <input
                    class="form-control "
                    id="password"
                    type="password"
                    placeholder="name@example.com"
                    data-sb-validations="required,password"
                  />
                  <label htmlFor="password">Password</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="password:required"
                  >
                    Plz Check Password
                  </div>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="password:password"
                  >
                    Plz Check Password
                  </div>
                </div>
                {/* <!-- Password Check input--> */}
                <div class="form-floating mb-3 row">
                  <input
                    class="form-control col-auto"
                    id="asswordCheck"
                    type="password"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label htmlFor="passwordCheck">Password Check</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>

                {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>
                {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                {/* <!-- Submit Button--> */}
                <SaveDiv>
                  <SaveButton
                    className="btn btn-primary btn-lg mt-5"
                    id="submitButton"
                    type="submit"
                  >
                    SAVE
                  </SaveButton>
                </SaveDiv>
              </form>
            </div>
          </div>
        </div>
      </SectionTop>
    </>
  );
};

export default UserInfoConfig;
