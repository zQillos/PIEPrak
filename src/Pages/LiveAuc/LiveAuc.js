import React from "react";
import './Liveauc.css'
import '../../reset.css'
import '../../index.css'
import '../../media.css'


function LiveAuc() {
    return (
        <div className="footer-1-dec bg-dec" style={{lineHeight:1.5}}>
            <p><span><b>What is an NFT auction?</b></span> 
            An NFT auction is a sort of public sale wherein NFTs are put up for auction online. Generally, this kind of auction occurs in NFT-related secondary markets. This process involves several buyers who compete for a single NFT piece by placing bids. Such an auction aims to maximize the seller's financial rewards while allowing free and fair competition among bidders.
            <span><b>Is it better to sell at a fixed price or at an auction?</b></span>
            Both auction and fixed pricing are viable options for selling NFTs. Fixed pricing is preferable if one cannot tolerate price fluctuations and wants to have a specified price for their NFTs. It may, however, take longer to get it sold. Alternatively, if you are immune to price fluctuations and want to sell the NFT within a specific period, you can go for an auction.</p>
        </div>
    );
}

export { LiveAuc }