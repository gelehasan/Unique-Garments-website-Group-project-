import React from "react";
import "./checkout.css";

export const Checkout = () => {
  return (
    <div className="checkout">
      <div className="form">
        <div className="div-checkout-main">
          <div className="text-wrapper">CHECKOUT</div>
          <div className="div">
            <div className="div-shipping-address">
              <div className="text-wrapper-2">SHIPPING ADDRESS</div>
            </div>
            <div className="div-hd-dccfc">
              <div className="div-address-form-row">
                <div className="div-address-form">
                  <div className="div-address-form-2">
                    <div className="label">
                      <div className="text-wrapper-2">First Name</div>
                    </div>
                    <div className="input">
                      <div className="pseudo">
                        <div className="text-wrapper-3">Lu</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-address-form">
                  <div className="div-address-form-2">
                    <div className="last-name-wrapper">
                      <div className="text-wrapper-2">Last Name</div>
                    </div>
                    <div className="pseudo-wrapper">
                      <div className="div-wrapper">
                        <div className="text-wrapper-3">Min Kha</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-address-form-row">
                <div className="div-address-form">
                  <div className="div-address-form-3">
                    <div className="street-address-wrapper">
                      <div className="text-wrapper-2">Street Address</div>
                    </div>
                    <div className="pseudo-wrapper">
                      <div className="pseudo-2">
                        <p className="text-wrapper-3">Block 1X Cantonment Road, Unit#XX-XX</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-address-form">
                  <div className="div-address-form-2">
                    <div className="label-2">
                      <div className="text-wrapper-2">Company (optional)</div>
                    </div>
                    <div className="input-2" />
                  </div>
                </div>
              </div>
              <div className="div-address-form-row">
                <div className="div-address-form">
                  <div className="div-address-form-2">
                    <div className="label-3">
                      <div className="text-wrapper-2">City</div>
                    </div>
                    <div className="input">
                      <div className="pseudo-3">
                        <div className="text-wrapper-3">Singapore</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-address-form">
                  <div className="div-address-form-3">
                    <div className="ZIP-or-postal-code-wrapper">
                      <div className="text-wrapper-2">Zip Or Postal Code</div>
                    </div>
                    <div className="pseudo-wrapper">
                      <div className="pseudo-4">
                        <div className="text-wrapper-4">999999</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-address-form-row">
                <div className="div-address-form">
                  <div className="div-address-form-4">
                    <div className="country-region-wrapper">
                      <div className="text-wrapper-2">Country/region</div>
                    </div>
                    <div className="options-wrapper">
                      <div className="options">
                        <div className="pseudo-5">
                          <div className="text-wrapper-5">Singapore</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-address-form-5" />
              </div>
              <div className="div-address-form-6">
                <div className="label-4">
                  <div className="text-wrapper-2">Phone</div>
                </div>
                <div className="pseudo-wrapper">
                  <div className="pseudo-6">
                    <div className="text-wrapper-4">12345678</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-shipping-method">
            <div className="shipping-method-wrapper">
              <div className="text-wrapper-2">SHIPPING METHOD</div>
            </div>
            <div className="div-shipping-options">
              <div className="label-wrapper">
                <div className="label-5" />
              </div>
              <div className="div-hd-fba">
                <p className="text-wrapper-6">$27.00 USD | 5 - 7 days | Express</p>
              </div>
            </div>
          </div>
          <div className="div-hd-afebd">
            <div className="div-creditcard">
              <div className="div-card-details">
                <div className="text-wrapper-2">CARD DETAILS</div>
              </div>
              <div className="div-checkout-stripe">
                <div className="div-s-row">
                  <div className="div-s-column">
                    <div className="text-wrapper-7">Card number</div>
                    <div className="div-2">
                      <div className="form-2">
                        <img className="SVG" alt="Svg" src="SVG.svg" />
                        <div className="input-credit-or">
                          <div className="text-wrapper-8">1234 1234 1234 1234</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-s-column">
                    <div className="text-wrapper-7">Expiration date</div>
                    <div className="form-input-credit-or-wrapper">
                      <div className="form-input-credit-or">
                        <div className="pseudo-7">
                          <div className="text-wrapper-8">MM / YY</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-s-row-2">
                  <div className="div-s-column">
                    <div className="text-wrapper-7">Cardholder’s name</div>
                    <div className="div-2" />
                  </div>
                  <div className="div-s-column">
                    <div className="text-wrapper-7">Security code</div>
                    <div className="form-input-credit-or-wrapper">
                      <div className="form-input-credit-or">
                        <div className="pseudo-8">
                          <div className="text-wrapper-8">CVC</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-small">
          <div className="div-order-summary">
            <p className="text-wrapper-6">ORDER SUMMARY - (2) ITEMS</p>
          </div>
          <div className="div-hd-ec">
            <div className="div-order-summary-2">
              <div className="text-wrapper-6">COUNTRY/REGION: SINGAPORE / USD</div>
            </div>
            <div className="div-order-summary-3">
              <div className="div-order-summary-4">
                <div className="div-order-summary-5">
                  <div className="div-hd">
                    <div className="text-wrapper-6">Subtotal</div>
                  </div>
                  <div className="div-hd-b">
                    <div className="text-wrapper-6">Shipping total</div>
                  </div>
                </div>
                <div className="div-order-summary-6">
                  <div className="div-hd-ffd">
                    <div className="text-wrapper-9">$140.00</div>
                  </div>
                  <div className="div-order-summary-7">
                    <div className="text-wrapper-9">$27.00</div>
                  </div>
                </div>
              </div>
              <div className="div-3">
                <div className="div-hd-ffefaf">
                  <div className="text-wrapper-6">Order total (USD)</div>
                </div>
                <div className="div-hd-ddbfc">
                  <div className="text-wrapper-9">$167.00</div>
                </div>
              </div>
            </div>
            <div className="button">
              <div className="span-s-text">
                <div className="place-order">PLACE ORDER</div>
              </div>
            </div>
            <div className="div-s-row-3">
              <div className="div-3">
                <div className="black-jack-purcell" />
                <div className="div-shopping-item">
                  <div className="div-shopping-item-2">
                    <div className="overlap-group">
                      <div className="converse-wrapper">
                        <div className="converse">CONVERSE</div>
                      </div>
                      <div className="p">
                        <p className="text-wrapper-10">
                          Black Jack Purcell First In Class
                          <br />
                          OX Sneakers
                        </p>
                      </div>
                    </div>
                    <div className="p-shopping-item">
                      <div className="text-wrapper-6">Size: US 8.5</div>
                      <div className="text-wrapper-11">Only 1 remaining</div>
                    </div>
                  </div>
                  <div className="div-shopping-item-3">
                    <div className="text-wrapper-12">$65.00 USD</div>
                  </div>
                </div>
              </div>
              <div className="div-3">
                <div className="white-chuck-taylor" />
                <div className="div-shopping-item">
                  <div className="div-shopping-item-2">
                    <div className="overlap-group">
                      <div className="converse-wrapper">
                        <div className="converse">CONVERSE</div>
                      </div>
                      <div className="p-hd-d">
                        <p className="text-wrapper-10">
                          White Chuck Taylor All Star
                          <br />
                          Sneakers
                        </p>
                      </div>
                    </div>
                    <div className="p-shopping-item-2">
                      <div className="text-wrapper-6">Size: US 9</div>
                      <div className="text-wrapper-11">Only 1 remaining</div>
                    </div>
                  </div>
                  <div className="div-shopping-item-4">
                    <div className="text-wrapper-12">$75.00 USD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
