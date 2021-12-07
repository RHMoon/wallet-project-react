import React from "react";
import WalletDetail from "../../components/WalletDetail/WalletDetail.component";

return(
    <div>
        <h1>Wallets</h1>
        <select id="dropdown" value={selects} onChange={onSelected}>
                <option value="0">user 1</option>
                <option value="1">user 2</option>
                <option value="2">user 3</option>
        </select>
        <WalletDetail />
        
        {/* <WalletDetail data={customer[parseInt(selects)]}/>   */}
        {/* <DisplayTransaction data={customer[parseInt(selects)].walletList[0]}/> */}
    </div>
)

export default WalletPage;