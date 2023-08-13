import React from "react";
import "./style.css";

export const BagDiv = () => {
  return (
    <div className="bag-div">
      <div className="div-s-row">
        <div className="div-s-column" />
        <div className="div-cart-items-wrapper">
          <div className="div-cart-items">
            <div className="text-wrapper">SHOPPING BAG</div>
            <div className="div-cart-items-table">
              <div className="div">
                <div className="item-wrapper">
                  <div className="item">ITEM</div>
                </div>
                <div className="total-wrapper">
                  <div className="total">TOTAL</div>
                </div>
              </div>
              <div className="list">
                <div className="item-2">
                  <div className="div-s-column-2">
                    <div className="converse-black-jack" />
                    <div className="div-cart-item">
                      <div className="div-hd-ebbf">
                        <div className="link-converse">CONVERSE</div>
                        <p className="p">Black Jack Purcell First In Class OX Sneakers</p>
                        <div className="link-wrapper">
                          <div className="link">
                            <div className="span-s-text">
                              <div className="text-wrapper">SIZE: US 8.5</div>
                            </div>
                            <img
                              className="div-cart-item-edit"
                              alt="Div cart item edit"
                              src="div-cart-item-edit-size-open-arrow.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="link-move-to-wrapper">
                        <div className="link-move-to">Move to Wishlist</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-s-column-3">
                    <div className="div-cart-item-price">
                      <div className="text-wrapper-2">$65.00 USD</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-3">Remove</div>
                    </div>
                  </div>
                </div>
                <div className="item-2">
                  <div className="div-s-column-4">
                    <div className="converse-white-chuck" />
                    <div className="div-cart-item">
                      <div className="div-hd-a">
                        <div className="link-converse">CONVERSE</div>
                        <p className="p">White Chuck Taylor All Star Sneakers</p>
                        <div className="div-s-row-2">
                          <div className="link">
                            <div className="size-US-wrapper">
                              <div className="text-wrapper">SIZE: US 9</div>
                            </div>
                            <img className="div-cart-item-edit" alt="Div cart item edit" src="image.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="div-s-row-3">
                        <div className="link-move-to">Move to Wishlist</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-s-column-5">
                    <div className="div-cart-item-price-2">
                      <div className="text-wrapper-2">$75.00 USD</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-3">Remove</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-cart-items-total">
                <div className="div-s-row-4">
                  <div className="div-s-column-6">
                    <div className="text-wrapper">Total</div>
                  </div>
                  <div className="div-s-column-7">
                    <div className="text-wrapper-2">$140.00 USD</div>
                  </div>
                </div>
                <div className="div-shipping">
                  <div className="div-s-column-8">
                    <div className="text-wrapper">Shipping estimate</div>
                  </div>
                  <div className="div-s-column-9">
                    <div className="text-wrapper-4">Calculated at Checkout</div>
                  </div>
                </div>
                <div className="div-s-row-5">
                  <div className="div-s-column-10">
                    <div className="text-wrapper">Duties and taxes</div>
                  </div>
                  <div className="div-s-column-11">
                    <div className="text-wrapper-2">Included</div>
                  </div>
                </div>
                <div className="div-s-row-6">
                  <div className="div-s-column-12">
                    <div className="text-wrapper-5">Order Total</div>
                  </div>
                  <div className="div-s-column-13">
                    <div className="text-wrapper-6">$140.00 USD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-s-column-14" />
        <div className="div-hd-f-wrapper">
          <div className="div-hd-f">
            <div className="div-cart-logout">
              <div className="logged-in-as">LOGGED IN AS</div>
              <div className="overlap-group">
                <div className="text-wrapper-7">luminkha1994@gmail.com</div>
                <div className="text-wrapper-8">Not your account?</div>
                <p className="link-sign-in-as">Sign in as another user.</p>
              </div>
            </div>
            <div className="button">
              <div className="proceed-to-checkout-wrapper">
                <div className="proceed-to-checkout">PROCEED TO CHECKOUT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
