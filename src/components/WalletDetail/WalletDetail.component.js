import React, { useState } from "react";

import DisplayTransaction from "../DisplayTransaction/DisplayTransaction.component";

import "./WalletDetail.css";


const WalletDetail = (props) => {
  const {
    data = {},
    isLoading,
    selects,
    onSelected,
    selectWallets,
    onSelectedWallet
  } = props;

  const renderWalletOption = (walletList) => {
    return (
      <select id="dropdown" value={selectWallets} onChange={onSelectedWallet}>
        {
          walletList.map((item) => (
            <option value={`${item.walletId - 1}`}>{item.walletName}</option>
          ))
        }
      </select>
    )
  }

  return (
    <>
      {
        isLoading ? (<p>Loading</p>) : (
          <>
            <select id="dropdown" value={selects} onChange={onSelected}>
              {
                data.map((item) => (
                  <option value={`${item.customerId - 1}`}>Customer {item.customerId}</option>
                ))
              }
            </select>
            {/* {renderWalletOption(data[parseInt(selects)].walletList)} */}
            <div className="display-padding">

              <div className="wallet-container w3-container w3-white w3-round-xlarge">
                <h1>Wallet Detail</h1>
                <table>
                  <tr>
                    <td>Wallet Name</td>
                    <td>:</td>
                    <td>{data[parseInt(selects)].walletList[selectWallets].walletName}</td>
                  </tr>
                  <tr>
                    <td>Amount</td>
                    <td>:</td>
                    <td>{data[parseInt(selects)].walletList[selectWallets].ballance}</td>
                  </tr>
                  <tr>
                    <td>Create At</td>
                    <td>:</td>
                    <td>{data[parseInt(selects)].walletList[selectWallets].createdAt}</td>
                  </tr>
                </table>
              </div>

              {
                Object.keys(data[parseInt(selects)].walletList[selectWallets].transactionHistory).length === 0
                  ? <p className="no-trans">NO TRANSACTION HISTORY</p>
                  : <DisplayTransaction
                    data={data[parseInt(selects)].walletList[selectWallets].transactionHistory}
                  />
              }

            </div>
          </>
        )
      }
    </>

  )
}

export default WalletDetail;