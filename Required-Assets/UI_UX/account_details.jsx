import React from "react";
import "./style.css";

export const AccountD = () => {
  return (
    <div className="account-d">
      <div className="div-row-fluid">
        <div className="div-help-sm">
          <div className="heading-link">Account</div>
          <div className="list">
            <div className="item-link">
              <div className="text-wrapper">Account Details</div>
            </div>
            <div className="item-link-addresses">Preferences(survey)</div>
            <div className="item-link-logout">Logout</div>
          </div>
        </div>
        <div className="form">
          <div className="heading-account">Account Details</div>
          <div className="div">Edit your preferences below.</div>
          <div className="heading-account-2">Account Information</div>
          <div className="label-first-name">First name</div>
          <div className="input">
            <div className="pseudo">
              <div className="text-wrapper-2">Lu</div>
            </div>
          </div>
          <div className="label-last-name">Last name</div>
          <div className="pseudo-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Min Kha</div>
            </div>
          </div>
          <div className="label-email-address">Email address</div>
          <div className="input-2">
            <div className="pseudo-2">
              <div className="text-wrapper-3">luminkha1994@gmail.com</div>
            </div>
          </div>
          <div className="heading-account-3">Account Password</div>
          <div className="label-old-password">Old password</div>
          <div className="input-3" />
          <div className="div-span">
            <div className="text-wrapper-4">New password</div>
            <div className="div-password">
              <div className="overlap-group">
                <div className="button-show">Show</div>
              </div>
            </div>
          </div>
          <div className="button">
            <div className="save-changes">SAVE CHANGES</div>
          </div>
          <div className="div-2">
            <div className="div-shipping-address">
              <div className="text-wrapper-4">SHIPPING ADDRESS</div>
            </div>
            <div className="div-hd-dccfc">
              <div className="div-address-form-row">
                <div className="div-address-form">
                  <div className="div-address-form-2">
                    <div className="label">
                      <div className="text-wrapper-4">Street Address</div>
                    </div>
                    <div className="input-4">
                      <div className="pseudo-3">
                        <p className="text-wrapper-5">Block 1X Cantonment Road, Unit#XX-XX</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-address-form">
                  <div className="div-address-form-3">
                    <div className="label-2">
                      <div className="text-wrapper-4">Company (optional)</div>
                    </div>
                    <div className="input-5" />
                  </div>
                </div>
              </div>
              <div className="div-address-form-row">
                <div className="div-address-form">
                  <div className="div-address-form-3">
                    <div className="label-3">
                      <div className="text-wrapper-4">City</div>
                    </div>
                    <div className="input-6">
                      <div className="pseudo-4">
                        <div className="text-wrapper-5">Singapore</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-address-form">
                  <div className="div-address-form-2">
                    <div className="ZIP-or-postal-code-wrapper">
                      <div className="text-wrapper-4">Zip Or Postal Code</div>
                    </div>
                    <div className="input-4">
                      <div className="pseudo-5">
                        <div className="text-wrapper-2">999999</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-address-form-row">
                <div className="div-address-form">
                  <div className="div-address-form-4">
                    <div className="country-region-wrapper">
                      <div className="text-wrapper-4">Country/region</div>
                    </div>
                    <div className="options-wrapper">
                      <div className="options">
                        <div className="pseudo-6">
                          <div className="text-wrapper-6">Singapore</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-address-form-5" />
              </div>
              <div className="div-address-form-6">
                <div className="label-4">
                  <div className="text-wrapper-4">Phone</div>
                </div>
                <div className="input-4">
                  <div className="pseudo-7">
                    <div className="text-wrapper-2">12345678</div>
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
