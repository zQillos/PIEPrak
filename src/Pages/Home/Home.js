import React from "react";
import './Home.css'
import '../../reset.css'
import '../../index.css'
import '../../media.css'

function Home() {
    return (
        <>
        <div className="Cont">
            <div className="header-main">
                <div className="header-main-title">
                    <h1>Explore, Buy and Sell the <span>Best NFTs!</span></h1>
                    <div className="header-main-btns">
                        <button className='header-up-btn'>Explore</button>
                        <button className='header-up-btn'>Create</button>
                    </div>
                    <div className="headmedia">
                        <div className="header-item header-item0">
                            <div className="header-item-img">
                                <div className="header-item-img-up">
                                    <div>
                                        <p>Current bid</p>
                                        <span>0.99 ETH</span>
                                    </div>
                                    <div>
                                        <p>Ends in</p>
                                        <span>25 hrs</span>
                                    </div>
                                </div>
                                <div className="header-item-img-down">
                                    <div>
                                        <p>Artist</p>
                                        <span>@wzard</span>
                                    </div>
                                    <button className='header-up-btn'>Start Bid</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="header-main-counts">
                        <div>
                            <p>32k+<span>Artworks</span></p>
                        </div>
                        <div>
                            <p>20k+<span>Auctions</span></p>
                        </div>
                        <div>
                            <p>12k+<span>Creators</span></p>
                        </div>
                    </div>
                </div>
                <div className="header-item">
                    <div className="header-item-img">
                        <div className="header-item-img-up">
                            <div>
                                <p>Current bid</p>
                                <span>0.99 ETH</span>
                            </div>
                            <div>
                                <p>Ends in</p>
                                <span>25 hrs</span>
                            </div>
                        </div>
                        <div className="header-item-img-down">
                            <div>
                                <p>Artist</p>
                                <span>@wzard</span>
                            </div>
                            <button className='header-up-btn'>Start Bid</button>
                        </div>
                    </div>
                </div>
                <button className='header-main-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="314" height="314" viewBox="0 0 314 314" fill="none">
                        <g filter="url(#filter0_bd_5_726)">
                        <circle cx="157" cy="143" r="78" fill="#6D5B72" fill-opacity="0.4" shape-rendering="crispEdges"/>
                        </g>
                        <path d="M155.94 166.061C156.526 166.646 157.475 166.646 158.061 166.061L167.607 156.515C168.193 155.929 168.193 154.979 167.607 154.393C167.021 153.808 166.072 153.808 165.486 154.393L157 162.879L148.515 154.393C147.929 153.808 146.98 153.808 146.394 154.393C145.808 154.979 145.808 155.929 146.394 156.515L155.94 166.061ZM155.5 120L155.5 165L158.5 165L158.5 120L155.5 120Z" fill="#D2CECE"/>
                        <defs>
                        <filter id="filter0_bd_5_726" x="0.000488281" y="0" width="314" height="314" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="20"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5_726"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="14"/>
                            <feGaussianBlur stdDeviation="39.5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.52549 0 0 0 0 0.0745098 0 0 0 0 0.647059 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="effect1_backgroundBlur_5_726" result="effect2_dropShadow_5_726"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_5_726" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                </button>
            </div>
            <div className="titles">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="149" height="33" viewBox="0 0 149 33" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5964 28.8397C12.7574 28.8397 13.8302 28.6255 14.8471 28.2224C14.8558 28.2425 16.9256 31.5057 16.9554 31.5284C15.0818 32.5502 13.1237 33 10.983 33C4.61949 33 0.000488281 28.7452 0.000488281 21.953C0.000488281 15.1116 4.85541 10.8568 10.983 10.8568C13.1646 10.8568 14.8843 11.3368 16.6165 12.2767C16.4253 12.5993 14.6422 15.671 14.636 15.6836C13.6087 15.2688 12.5121 15.0592 11.4064 15.0662C7.6355 15.0662 4.71385 17.5054 4.71385 21.953C4.71385 26.1611 7.54113 28.8397 11.5964 28.8397ZM27.6462 10.8568C33.9154 10.8568 38.44 15.3535 38.44 21.953C38.44 28.5046 33.9154 33 27.6462 33C21.4254 33 16.9008 28.5058 16.9008 21.953C16.9008 15.3535 21.4254 10.8568 27.6462 10.8568ZM27.6462 14.9226C24.1596 14.9226 21.6129 17.6491 21.6129 21.953C21.6129 26.2103 24.1584 28.9355 27.6474 28.9355C31.2296 28.9355 33.7279 26.2103 33.7279 21.953C33.7279 17.6491 31.2296 14.9226 27.6462 14.9226ZM41.4101 32.5225V11.3343H46.075V32.5225H41.4101ZM40.7967 4.8293C40.7967 3.20399 42.165 1.91383 43.7196 1.91383C45.2754 1.91383 46.6412 3.20399 46.6412 4.83056C46.6412 6.505 45.2754 7.8443 43.7196 7.8443C42.165 7.8443 40.7967 6.505 40.7967 4.83056V4.8293ZM50.1464 12.6749C53.0681 11.5271 56.6528 10.8568 59.7147 10.8568C65.0415 10.8568 68.435 12.913 68.435 18.8913V32.5225H63.8159V19.3222C63.8159 16.2619 61.9311 15.1607 59.3373 15.1607C57.6871 15.1607 56.0394 15.4001 54.8126 15.7831V32.5225H50.1464V12.6749ZM72.3425 0H77.0074V11.9101C77.997 11.3834 79.9291 10.8568 81.7667 10.8568C87.8012 10.8568 92.3246 14.7777 92.3246 21.5699C92.3246 28.4088 87.8484 33 80.119 33C77.4679 32.9922 74.8376 32.5234 72.3425 31.6141V0ZM77.0074 28.5058C77.9027 28.7918 79.081 28.9342 80.2593 28.9342C84.5481 28.9342 87.6125 26.5441 87.6125 21.6644C87.6125 17.552 84.738 15.1128 81.203 15.1128C79.3653 15.1128 77.9498 15.5916 77.0062 16.1182L77.0074 28.5058ZM105.804 18.3168C105.804 16.0212 104.107 14.9704 101.797 14.9704C99.3934 14.9704 97.5086 15.6873 95.7653 16.6915V12.5778C97.6029 11.5271 99.9584 10.8568 102.552 10.8568C107.123 10.8568 110.375 12.7694 110.375 18.0774V32.0916C108.396 32.617 105.569 32.9534 103.213 32.9534C97.7917 32.9534 93.832 31.2789 93.832 26.4963C93.832 22.1924 97.4601 20.0883 103.493 20.0883H105.803L105.804 18.3168ZM105.804 23.2431H103.825C100.572 23.2431 98.451 24.2007 98.451 26.3526C98.451 28.5525 100.431 29.413 103.259 29.413C103.966 29.413 104.956 29.3172 105.804 29.1736V23.2431ZM113.768 26.7835C115.701 28.2652 118.01 29.1736 120.131 29.1736C122.205 29.1736 123.572 28.4567 123.572 26.7835C123.572 25.0599 122.347 24.4388 119.661 23.7219C115.324 22.7177 113.485 20.9488 113.485 17.266C113.485 12.9609 116.691 10.8568 120.933 10.8568C123.289 10.8568 125.174 11.3834 126.917 12.4821V16.8351C125.08 15.4971 123.289 14.6832 121.074 14.6832C119.048 14.6832 117.964 15.6873 117.964 17.0745C117.964 18.4604 118.858 19.1786 121.263 19.8464C126.025 20.8997 128.097 22.719 128.097 26.5441C128.097 30.9917 124.751 33 120.226 33C117.775 33 115.324 32.3322 113.769 31.2789L113.768 26.7835ZM134.484 23.005V23.1008C134.767 26.878 137.971 28.9342 141.223 28.9342C144.098 28.9342 146.173 28.2652 148.246 26.878V31.0408C146.361 32.3789 143.579 33 140.895 33C134.39 33 129.96 28.7918 129.96 22.0966C129.96 15.3535 134.294 10.858 140.046 10.858C146.125 10.858 149 14.8268 149 20.6124V23.0063L134.484 23.005ZM144.616 19.9434C144.523 16.6424 142.921 14.8268 139.904 14.8268C137.217 14.8268 135.238 16.7406 134.626 19.9446L144.616 19.9434Z" fill="#896E6E"/>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="309" height="24" viewBox="0 0 309 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M78.7752 18.25C80.6048 18.25 82.2819 17.45 83.4508 16.25C83.7049 15.95 84.264 15.4 84.2132 15.5L88.1265 19.65C85.8903 22.3 82.536 24 78.7243 24C71.965 24 66.527 18.65 66.527 12C66.527 5.35 71.965 0 78.7243 0C82.3327 0 85.5854 1.55 87.8215 4L83.9082 8.15L82.9934 7.25C81.8753 6.25 80.4015 5.65 78.7752 5.65C75.2684 5.65 72.3715 8.45 72.3715 11.95C72.3715 15.4 75.2176 18.25 78.7752 18.25ZM229.311 23.6C231.141 23.6 232.411 22.35 232.411 20.55C232.411 18.8 231.141 17.6 229.311 17.55C227.532 17.55 226.262 18.8 226.262 20.55C226.262 22.35 227.532 23.6 229.311 23.6ZM129.75 16.35C128.581 17.55 126.904 18.35 125.074 18.35C121.517 18.35 118.671 15.5 118.671 12.05C118.671 8.55 121.568 5.75 125.074 5.75C126.701 5.75 128.174 6.35 129.293 7.35L130.207 8.25L134.172 4C131.935 1.55 128.683 0 125.074 0C118.315 0 112.877 5.35 112.877 12C112.877 18.65 118.315 24 125.074 24C128.886 24 132.24 22.3 134.476 19.65L130.563 15.5C130.563 15.5 130.004 16.05 129.75 16.35ZM246.438 18.25C248.268 18.25 249.945 17.45 251.114 16.25C251.368 15.95 251.927 15.4 251.876 15.5L255.789 19.65C253.553 22.3 250.199 24 246.387 24C239.628 24 234.19 18.65 234.19 12C234.19 5.35 239.628 0 246.387 0C249.996 0 253.248 1.55 255.485 4L251.571 8.15L250.656 7.25C249.538 6.25 248.064 5.65 246.438 5.65C242.931 5.65 240.035 8.45 240.035 11.95C240.035 15.4 242.881 18.25 246.438 18.25ZM16.4669 11.5C18.5507 10.6 20.0753 9.05 20.0753 6.35V6.3C20.0753 4.7 19.5163 3.5 18.5507 2.6C17.1784 1.2 15.1456 0.5 12.1979 0.5H0.000488281V23.5H12.2487C17.8391 23.5 21.0918 21.1 21.0918 17.15V17.1C21.0918 13.95 19.313 12.4 16.4669 11.5ZM6.50575 5.6H10.724C12.6553 5.6 13.6717 6.3 13.6717 7.55V7.6C13.6717 8.95 12.5536 9.6 10.5715 9.6H6.50575V5.6ZM14.6373 16.3C14.6373 17.65 13.5192 18.4 11.5372 18.4H6.50575V14.15H11.4355C13.6209 14.15 14.5865 14.95 14.5865 16.2V16.3H14.6373ZM23.1247 0.5H29.6299V17.95H40.1502V23.5H23.1247V0.5ZM152.366 9.1H144.031V0.5H137.526V23.55L144.031 23.5V14.75H152.366V23.5H158.871V0.5H152.366V9.1ZM171.628 0.5H177.828L187.738 23.5H180.826L179.149 19.4H170.205L168.527 23.5H161.768L171.628 0.5ZM174.626 8L172.034 14.5H177.218L174.626 8ZM197.14 0.5H190.635V23.55H197.14V0.5ZM215.945 12.7V0.55H222.45V23.55H216.707L206.695 10.9V23.55H200.19V0.5L206.288 0.55L215.945 12.7ZM112.979 0.5H105.304L97.2237 9.85V0.5H90.7184V23.55H97.2237V17.6L99.6123 15L106.168 23.55H113.893L103.831 10.4L112.979 0.5ZM40.6584 12C40.6584 5.35 46.0964 0 52.8558 0C59.5643 0 65.0531 5.35 65.0531 12C65.0531 18.65 59.6151 24 52.8558 24C46.0964 24 40.6584 18.65 40.6584 12ZM46.4521 12C46.4521 15.45 49.2982 18.3 52.8558 18.3C56.4133 18.3 59.2594 15.5 59.2594 12C59.2594 8.55 56.4133 5.7 52.8558 5.7C49.349 5.7 46.4521 8.5 46.4521 12ZM268.546 0C261.787 0 256.349 5.35 256.349 12C256.349 18.65 261.787 24 268.546 24C275.305 24 280.743 18.65 280.743 12C280.743 5.35 275.305 0 268.546 0ZM268.546 18.3C264.988 18.3 262.142 15.45 262.142 12C262.142 8.5 265.039 5.7 268.546 5.7C272.103 5.7 274.95 8.55 274.95 12C275 15.5 272.103 18.3 268.546 18.3ZM302.902 9.85L298.226 21.15H293.703L289.027 9.85V23.45H282.929V0.5H290.349L295.99 13.2L301.631 0.5H309.001V23.45H302.902V9.85Z" fill="#896E6E"/>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="204" height="41" viewBox="0 0 204 41" fill="none">
                    <g clip-path="url(#clip0_132_137)">
                        <path d="M12.4783 17.2277L20.4025 9.26799L28.33 17.2342L32.9382 12.6002L20.4025 0L7.86682 12.597L12.4783 17.2277Z" fill="#896E6E"/>
                        <path d="M-0.00109863 20.501L4.60868 15.8687L9.21845 20.501L4.60868 25.1333L-0.00109863 20.501Z" fill="#896E6E"/>
                        <path d="M12.4781 23.7718L20.4024 31.7348L28.3298 23.7686L32.9413 28.3961L32.9381 28.3993L20.4024 40.9995L7.86667 28.4058L7.86023 28.3993L12.4781 23.7718Z" fill="#896E6E"/>
                        <path d="M31.5787 20.502L36.1885 15.8696L40.7983 20.502L36.1885 25.1343L31.5787 20.502Z" fill="#896E6E"/>
                        <path d="M25.0784 20.4989L20.4025 15.7969L16.9447 19.2716L16.5451 19.6699L15.7265 20.4924L15.7201 20.4989L15.7265 20.5086L20.4025 25.2041L25.0784 20.5021L25.0816 20.4989H25.0784Z" fill="#896E6E"/>
                        <path d="M47.9906 9.93457H58.0192C60.507 9.93457 62.3889 10.5822 63.6651 11.8775C64.1459 12.356 64.5249 12.9277 64.7791 13.5578C65.0334 14.188 65.1576 14.8635 65.1442 15.5433V15.6048C65.1529 16.1617 65.0757 16.7167 64.9154 17.2499C64.7726 17.7089 64.5654 18.1451 64.2999 18.5452C64.0524 18.9225 63.753 19.2627 63.4105 19.5555C63.0759 19.8449 62.7093 20.0949 62.318 20.3003C63.4464 20.6953 64.4611 21.3625 65.2731 22.2433C65.9907 23.0637 66.3494 24.1971 66.3494 25.6435V25.705C66.3698 26.6084 66.1742 27.5035 65.7791 28.3151C65.3961 29.0629 64.8348 29.7038 64.1452 30.1804C63.3656 30.7056 62.4976 31.0841 61.5833 31.2976C60.4971 31.5564 59.3836 31.6815 58.2673 31.67H47.9906V9.93457ZM57.0137 18.7233C57.8814 18.7654 58.7448 18.5778 59.5176 18.1793C59.819 18.0024 60.0651 17.7442 60.228 17.434C60.3909 17.1238 60.4641 16.774 60.4393 16.4241V16.3626C60.4553 16.0402 60.3901 15.719 60.2498 15.4287C60.1096 15.1383 59.8988 14.8882 59.6369 14.7013C59.1019 14.3192 58.3296 14.1282 57.3199 14.1282H52.6278V18.7233H57.0137ZM58.2802 27.4829C59.1446 27.5315 60.005 27.3328 60.7616 26.9097C61.0563 26.7194 61.2948 26.4532 61.4524 26.1388C61.6099 25.8245 61.6807 25.4734 61.6574 25.1222V25.0606C61.669 24.7268 61.599 24.3952 61.4535 24.0948C61.308 23.7945 61.0914 23.5346 60.8228 23.3379C60.2685 22.9061 59.3726 22.6902 58.1352 22.6902H52.6278V27.4829H58.2802Z" fill="#896E6E"/>
                        <path d="M72.3241 9.93457H77.0838V31.6765H72.3241V9.93457Z" fill="#896E6E"/>
                        <path d="M84.2863 9.93457H88.6754L98.8199 23.3152V9.93457H103.518V31.6765H99.4676L88.9912 17.8554V31.6765H84.2863V9.93457Z" fill="#896E6E"/>
                        <path d="M117.93 9.7793H122.312L131.584 31.6766H126.614L124.636 26.7998H115.487L113.508 31.6766H108.655L117.93 9.7793ZM122.937 22.577L120.057 15.524L117.188 22.577H122.937Z" fill="#896E6E"/>
                        <path d="M136.73 9.93457H141.119L151.257 23.3152V9.93457H155.956V31.6765H151.905L141.428 17.8554V31.6765H136.73V9.93457Z" fill="#896E6E"/>
                        <path d="M173.087 32.0589C171.57 32.0719 170.066 31.7768 168.665 31.191C167.347 30.644 166.151 29.8372 165.147 28.8183C164.144 27.7995 163.353 26.5891 162.823 25.2585C162.263 23.8667 161.979 22.3783 161.988 20.8771V20.8156C161.963 17.8565 163.096 15.006 165.143 12.8785C166.15 11.8393 167.356 11.0153 168.688 10.4563C170.137 9.85317 171.692 9.55239 173.261 9.57221C174.188 9.56525 175.114 9.64876 176.026 9.82156C176.805 9.96976 177.568 10.1987 178.301 10.5048C178.966 10.7861 179.598 11.1402 180.186 11.5605C180.76 11.9705 181.299 12.4276 181.797 12.9271L178.771 16.4374C177.998 15.7206 177.13 15.1137 176.193 14.6337C175.272 14.1912 174.262 13.9695 173.241 13.986C172.392 13.9769 171.55 14.1495 170.773 14.4923C169.995 14.8351 169.298 15.3403 168.73 15.9743C168.166 16.6067 167.724 17.3392 167.428 18.1342C167.117 18.9744 166.961 19.8643 166.967 20.7605V20.822C166.964 21.717 167.12 22.6053 167.428 23.445C167.721 24.2429 168.158 24.9796 168.717 25.6179C169.281 26.2598 169.976 26.7724 170.754 27.1211C171.532 27.4697 172.376 27.6462 173.228 27.6386C174.314 27.673 175.39 27.4383 176.364 26.9554C177.291 26.4478 178.148 25.8207 178.913 25.0901L181.942 28.1665C181.407 28.7498 180.829 29.2911 180.212 29.7856C179.605 30.2673 178.947 30.679 178.249 31.0129C177.505 31.3647 176.722 31.6246 175.916 31.7869C174.985 31.9745 174.036 32.0657 173.087 32.0589Z" fill="#896E6E"/>
                        <path d="M187.559 9.93457H203.843V14.1897H192.241V18.6002H202.457V22.8554H192.257V27.4213H204.004V31.6765H187.569L187.559 9.93457Z" fill="#896E6E"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_132_137">
                        <rect width="204" height="41" fill="white" transform="translate(0.000488281)"/>
                        </clipPath>
                    </defs>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="178" height="29" viewBox="0 0 178 29" fill="none">
                        <g clip-path="url(#clip0_132_152)">
                        <path d="M15.136 0.532227H31.7694C31.7593 0.74813 31.6832 0.956064 31.5512 1.12902C30.9881 2.0767 30.4813 3.06307 29.9281 4.01075C29.1454 5.37149 28.4134 6.7571 27.6181 8.11231C27.1141 9.08762 26.5454 10.0325 26.0077 10.9913C22.7756 10.9913 19.5435 10.9913 16.3115 10.9913C16.1425 10.9913 15.975 10.9996 15.8061 11.0092C15.6653 11.3739 15.4316 11.6931 15.243 12.0357C14.9967 12.428 14.7968 12.8466 14.5532 13.2389C14.2956 13.7666 13.9395 14.2391 13.6805 14.7654C13.1455 15.6565 12.6458 16.5613 12.1222 17.462C11.576 18.383 11.042 19.3169 10.5202 20.2637C10.2994 20.5992 10.0959 20.9455 9.91066 21.3011C8.81688 23.1689 7.7583 25.0532 6.66311 26.9195C6.57022 27.1202 6.44785 27.3063 6.29992 27.4721C4.42769 27.4597 2.55545 27.4721 0.68322 27.4721C0.452626 27.4764 0.223399 27.508 0.000488281 27.5661C0.000488281 27.0577 0.346781 26.6502 0.580459 26.2233C0.861998 25.65 1.23785 25.1181 1.5208 24.5434C3.76466 20.6035 5.9846 16.6497 8.22143 12.7071C8.7282 11.8505 9.16318 10.9761 9.67276 10.1362C10.309 9.03098 10.9017 7.90095 11.5647 6.80821C11.7759 6.35095 12.0602 5.93236 12.2925 5.48615C13.1174 4.04529 13.9268 2.59613 14.7489 1.15527C14.8464 0.930244 14.9768 0.720361 15.136 0.532227Z" fill="#896E6E"/>
                        <path d="M34.4101 6.33304C35.5179 4.43353 36.5878 2.51329 37.7111 0.62207H43.7191C43.8067 0.626415 43.8935 0.639844 43.9782 0.662133C43.7783 0.959147 43.6108 1.27412 43.4348 1.58357C41.9858 4.13559 40.541 6.68899 39.1005 9.24378C38.4952 10.284 37.9321 11.3477 37.3184 12.3825L37.2578 12.4032L37.2466 12.533C34.4218 17.5063 31.6064 22.4833 28.8004 27.4639C23.285 27.4694 17.7692 27.4694 12.2529 27.4639C12.5668 26.8201 12.9385 26.2054 13.2876 25.5796C14.8586 22.7448 16.4704 19.9349 18.0188 17.1002C21.4076 17.0946 24.7964 17.0946 28.1852 17.1002C30.2785 13.5222 32.3267 9.91655 34.4044 6.33304H34.4101Z" fill="#896E6E"/>
                        <path d="M96.415 0.548828V27.7913H101.225V8.63453L109.999 21.2514L118.703 8.33475V27.7913H123.654V0.548828H118.329L110.034 13.1243L101.647 0.548828H96.415Z" fill="#896E6E"/>
                        <path d="M73.9155 7.57422H77ъъ.0589V28.0199H73.9155V7.57422Z" fill="#896E6E"/>
                        <path d="M73.6455 0H77.3295V3.43017H73.6455V0Z" fill="#896E6E"/>
                        <path d="M83.0658 1.71582H86.35V7.5746H92.8254V10.4301H86.35V22.5759C86.3443 23.0439 86.455 23.5062 86.6723 23.9228C87.2284 24.9589 88.7388 26.1884 92.8254 24.7517V27.3986C92.8254 27.3986 89.095 29.4708 85.7165 27.5837C85.7165 27.5837 84.0385 26.8847 83.3333 24.5251C83.1501 23.8931 83.06 23.2385 83.0658 22.5814V10.3845L80.2969 10.4301V7.5746H83.0883L83.0658 1.71582Z" fill="#896E6E"/>
                        <path d="M128.721 0.548828V27.975H149.602V23.5543H133.813V16.2782H147.725V11.9266H133.789V4.99714H149.438V0.548828H128.721Z" fill="#896E6E"/>
                        <path d="M151.561 0.548828H157.509L164.336 10.1776L171.11 0.548828H177.057L167.344 13.9242L177.663 27.9515H171.398L164.36 17.7066L156.981 27.975H151.033L161.204 14.0457L151.561 0.548828Z" fill="#896E6E"/>
                        <path d="M64.2952 13.7454C64.2952 13.7454 68.8941 12.0421 68.6126 7.13788C68.6126 7.13788 68.5746 2.42156 63.1634 0.965503C62.2637 0.728929 61.3357 0.611842 60.4043 0.617375H47.4268L47.462 27.8598H61.4333C61.4333 27.8598 69.6092 27.6871 70.185 20.5381C70.185 20.5381 70.7706 15.5413 64.2952 13.7454ZM50.7813 3.43003H59.0642C65.5621 3.40793 65.3749 7.89768 65.3749 7.89768C65.472 13.0201 59.509 12.9165 59.509 12.9165H50.7813V3.43003ZM60.9167 24.9809H50.7813V15.4957H60.4719C66.9698 15.4722 66.7826 19.962 66.7826 19.962C66.8797 25.0845 60.9167 24.9809 60.9167 24.9809Z" fill="#896E6E"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_132_152">
                            <rect width="177.662" height="28.3766" fill="white" transform="translate(0.000488281)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
          <div className="LiveAuctions">
              <div className="LATitles">
                  <h2>Live Auctions</h2>
              </div>
              <div className="LAArrows">
                  <button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                      <g opacity="0.25" clip-path="url(#clip0_132_584)">
                          <path d="M27.0005 54C19.8396 54 12.9721 51.1554 7.9086 46.0919C2.84512 41.0284 0.00048596 34.1608 0.000485647 27C0.000485334 19.8392 2.84512 12.9716 7.9086 7.90812C12.9721 2.84464 19.8396 1.49322e-06 27.0005 1.18021e-06C34.1613 8.67197e-07 41.0289 2.84464 46.0924 7.90812C51.1559 12.9716 54.0005 19.8392 54.0005 27C54.0005 34.1608 51.1559 41.0284 46.0924 46.0919C41.0289 51.1554 34.1613 54 27.0005 54ZM38.813 28.6875C39.2605 28.6875 39.6898 28.5097 40.0062 28.1932C40.3227 27.8768 40.5005 27.4476 40.5005 27C40.5005 26.5524 40.3227 26.1232 40.0062 25.8068C39.6898 25.4903 39.2605 25.3125 38.813 25.3125L19.2616 25.3125L26.5077 18.0698C26.8246 17.7529 27.0026 17.3231 27.0026 16.875C27.0026 16.4269 26.8246 15.9971 26.5077 15.6803C26.1909 15.3634 25.7611 15.1854 25.313 15.1854C24.8649 15.1854 24.4351 15.3634 24.1182 15.6803L13.9932 25.8053C13.8361 25.962 13.7114 26.1482 13.6263 26.3532C13.5413 26.5583 13.4975 26.778 13.4975 27C13.4975 27.222 13.5413 27.4417 13.6263 27.6468C13.7114 27.8518 13.8361 28.038 13.9932 28.1948L24.1182 38.3198C24.4351 38.6366 24.8649 38.8146 25.313 38.8146C25.7611 38.8146 26.1909 38.6366 26.5077 38.3198C26.8246 38.0029 27.0026 37.5731 27.0026 37.125C27.0026 36.6769 26.8246 36.2471 26.5077 35.9302L19.2616 28.6875L38.813 28.6875Z" fill="#F5FBF2"/>
                      </g>
                      <defs>
                          <clipPath id="clip0_132_584">
                              <rect width="54" height="54" fill="white" transform="translate(54.0005) rotate(90)"/>
                          </clipPath>
                      </defs>
                  </svg>
                  </button>
                  <button>
                     <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                      <g clip-path="url(#clip0_132_581)">
                          <path d="M27.0005 -1.18021e-06C34.1613 -1.49322e-06 41.0289 2.84463 46.0924 7.90811C51.1559 12.9716 54.0005 19.8392 54.0005 27C54.0005 34.1608 51.1559 41.0284 46.0924 46.0919C41.0289 51.1554 34.1613 54 27.0005 54C19.8396 54 12.9721 51.1554 7.90861 46.0919C2.84512 41.0284 0.000487414 34.1608 0.000487101 27C0.000486788 19.8392 2.84512 12.9716 7.9086 7.90812C12.9721 2.84463 19.8396 -8.67197e-07 27.0005 -1.18021e-06ZM15.188 25.3125C14.7404 25.3125 14.3112 25.4903 13.9947 25.8068C13.6783 26.1232 13.5005 26.5524 13.5005 27C13.5005 27.4476 13.6783 27.8768 13.9947 28.1932C14.3112 28.5097 14.7404 28.6875 15.188 28.6875L34.7394 28.6875L27.4932 35.9302C27.1764 36.2471 26.9984 36.6769 26.9984 37.125C26.9984 37.5731 27.1764 38.0029 27.4932 38.3197C27.8101 38.6366 28.2399 38.8146 28.688 38.8146C29.1361 38.8146 29.5659 38.6366 29.8827 38.3197L40.0077 28.1947C40.1649 28.038 40.2896 27.8518 40.3746 27.6468C40.4597 27.4417 40.5035 27.222 40.5035 27C40.5035 26.778 40.4597 26.5583 40.3746 26.3532C40.2896 26.1482 40.1649 25.962 40.0077 25.8052L29.8827 15.6802C29.5659 15.3634 29.1361 15.1854 28.688 15.1854C28.2399 15.1854 27.8101 15.3634 27.4932 15.6802C27.1764 15.9971 26.9984 16.4269 26.9984 16.875C26.9984 17.3231 27.1764 17.7529 27.4932 18.0698L34.7394 25.3125L15.188 25.3125Z" fill="#F5FBF2"/>
                      </g>
                      <defs>
                          <clipPath id="clip0_132_581">
                              <rect width="54" height="54" fill="white" transform="translate(0.000488281 54) rotate(-90)"/>
                          </clipPath>
                      </defs>
                      </svg>
                  </button>
              </div>
              <div className="LACards">
                  <div className="LACard">
                      <img className='LACard0-img' src="/img/card0.jpg" alt="card"/>
                      <div className='LACards-profile-wrapper'>
                          <div className='LACards-profile-left'>
                              <img src="/img/Profile0.svg" alt="profile"/>
                              <div className='LACards-profile-left-name'>
                                  <p>Virtual Art</p>
                                  <span>by @wzard</span>
                              </div>
                          </div>
                          <div className='LACards-profile-rigth'>
                              <img src="/img/heart.svg" alt="heart"/>
                              <p>92</p>
                          </div>
                      </div>
                      <div className='LACards-profile-dec'>
                          <p>Current Bid</p>
                          <span>4.89 ETH</span>
                      </div>
                      <button className='header-up-btn'>Place a bid</button>
                  </div>
                  <div className="LACard">
                      <img className='LACard0-img' src="/img/card0.jpg" alt="card"/>
                      <div className='LACards-profile-wrapper'>
                          <div className='LACards-profile-left'>
                              <img src="/img/Profile0.svg" alt="profile"/>
                              <div className='LACards-profile-left-name'>
                                  <p>Virtual Art</p>
                                  <span>by @wzard</span>
                              </div>
                          </div>
                          <div className='LACards-profile-rigth'>
                              <img src="/img/heart.svg" alt="heart"/>
                              <p>92</p>
                          </div>
                      </div>
                      <div className='LACards-profile-dec'>
                          <p>Current Bid</p>
                          <span>4.89 ETH</span>
                      </div>
                      <button className='header-up-btn'>Place a bid</button>
                  </div>
                  <div className="LACard">
                      <img className='LACard0-img' src="/img/card0.jpg" alt="card"/>
                      <div className='LACards-profile-wrapper'>
                          <div className='LACards-profile-left'>
                              <img src="/img/Profile0.svg" alt="profile"/>
                              <div className='LACards-profile-left-name'>
                                  <p>Virtual Art</p>
                                  <span>by @wzard</span>
                              </div>
                          </div>
                          <div className='LACards-profile-rigth'>
                              <img src="/img/heart.svg" alt="heart"/>
                              <p>92</p>
                          </div>
                      </div>
                      <div className='LACards-profile-dec'>
                          <p>Current Bid</p>
                          <span>4.89 ETH</span>
                      </div>
                      <button className='header-up-btn'>Place a bid</button>
                  </div>
              </div>
              <div className='LABtn'>
                  <button className='header-up-btn'>View All</button>
              </div>
          </div>
          <div className="HowItWorks">
              <h2>How it works</h2>
              <div className="HowItWorks-blocks-wrapper">
                  <div className="HowItWorks-block">
                      <div className='HowItWorks-block-img'>
                          <img className='HowItWorks-block-img1' src="/img/HowItWorks-block0.svg" alt="block"/>
                      </div>
                      <p>Set up your wallet</p>
                  </div>
                  <img src="/img/Vector.svg" alt="Vector" className="vectorhorizon"/>
                  <img src="/img/Vector1.png" className="vector"/>
                  <div className="HowItWorks-block">
                      <div className='HowItWorks-block-img'>
                          <img className='HowItWorks-block-img0' src="/img/HowItWorks-block1.svg" alt="block"/>
                      </div>
                      <p>Create your collection</p>
                  </div>
                  <img src="/img/Vector.svg" alt="Vector" className="vectorhorizon"/>
                  <img src="/img/Vector2.png" className="vector"/>
                  <div className="HowItWorks-block">
                      <div className='HowItWorks-block-img'>
                          <img className='HowItWorks-block-img2' src="/img/HowItWorks-block2.svg" alt="block"/>
                      </div>
                      <p>Add your NFTs</p>
                  </div>
                  <img src="/img/Vector.svg" alt="Vector" className="vectorhorizon"/>
                  <img src="/img/Vector3.png"  className="vector"/>
                  <div className="HowItWorks-block">
                      <div className='HowItWorks-block-img'>
                          <img className='HowItWorks-block-img1' src="/img/HowItWorks-block3.svg" alt="block"/>
                      </div>
                      <p>List them for sale</p>
                  </div>
              </div>
          </div>
          <div className="PopularCollections">
              <div className="PopularCollections-Title">
                  <h2>Popular Collections</h2>
              </div>
              <div className="PopularCollections-blocks-wrapper">
                  <div className="PopularCollections-block">
                      <img src="/img/popularCollectionsBlock0.jpg" alt="Block"/>
                      <div className="PopularCollections-profile">
                          <div className='PopularCollections-user'>
                              <img src="/img/User.svg" alt="User"/>
                              <p>@wzard</p>
                          </div>
                          <span>ERC-721</span>
                      </div>
                  </div>
                  <div className="PopularCollections-block">
                      <img src="/img/popularCollectionsBlock1.jpg" alt="Block"/>
                      <div className="PopularCollections-profile">
                          <div className='PopularCollections-user'>
                              <img src="/img/User.svg" alt="User"/>
                              <p>@wzard</p>
                          </div>
                          <span>ERC-721</span>
                      </div>
                  </div>
                  <div className="PopularCollections-block">
                      <img src="/img/popularCollectionsBlock0.jpg" alt="Block"/>
                      <div className="PopularCollections-profile">
                          <div className='PopularCollections-user'>
                              <img src="/img/User.svg" alt="User"/>
                              <p>@wzard</p>
                          </div>
                          <span>ERC-721</span>
                      </div>
                  </div>
                  <div className='PopularCollections-arrow'>
                      <button>
                          <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                          <g clip-path="url(#clip0_132_581)">
                              <path d="M27.0005 -1.18021e-06C34.1613 -1.49322e-06 41.0289 2.84463 46.0924 7.90811C51.1559 12.9716 54.0005 19.8392 54.0005 27C54.0005 34.1608 51.1559 41.0284 46.0924 46.0919C41.0289 51.1554 34.1613 54 27.0005 54C19.8396 54 12.9721 51.1554 7.90861 46.0919C2.84512 41.0284 0.000487414 34.1608 0.000487101 27C0.000486788 19.8392 2.84512 12.9716 7.9086 7.90812C12.9721 2.84463 19.8396 -8.67197e-07 27.0005 -1.18021e-06ZM15.188 25.3125C14.7404 25.3125 14.3112 25.4903 13.9947 25.8068C13.6783 26.1232 13.5005 26.5524 13.5005 27C13.5005 27.4476 13.6783 27.8768 13.9947 28.1932C14.3112 28.5097 14.7404 28.6875 15.188 28.6875L34.7394 28.6875L27.4932 35.9302C27.1764 36.2471 26.9984 36.6769 26.9984 37.125C26.9984 37.5731 27.1764 38.0029 27.4932 38.3197C27.8101 38.6366 28.2399 38.8146 28.688 38.8146C29.1361 38.8146 29.5659 38.6366 29.8827 38.3197L40.0077 28.1947C40.1649 28.038 40.2896 27.8518 40.3746 27.6468C40.4597 27.4417 40.5035 27.222 40.5035 27C40.5035 26.778 40.4597 26.5583 40.3746 26.3532C40.2896 26.1482 40.1649 25.962 40.0077 25.8052L29.8827 15.6802C29.5659 15.3634 29.1361 15.1854 28.688 15.1854C28.2399 15.1854 27.8101 15.3634 27.4932 15.6802C27.1764 15.9971 26.9984 16.4269 26.9984 16.875C26.9984 17.3231 27.1764 17.7529 27.4932 18.0698L34.7394 25.3125L15.188 25.3125Z" fill="#F5FBF2"/>
                          </g>
                          <defs>
                              <clipPath id="clip0_132_581">
                                  <rect width="54" height="54" fill="white" transform="translate(0.000488281 54) rotate(-90)"/>
                              </clipPath>
                          </defs>
                      </svg>
                      </button>
                  </div>
              </div>
              <div className='PopularCollections-btn'>
                  <button className='header-up-btn'>View All</button>
              </div>
          </div>
          <div className="Categories">
              <div className="Categories-Title">
                  <h2>Explore By Categories</h2>
              </div>
              <div className="Categories-blocks-wrapper">
                  <div className="Categories-block">
                      <div className="Categories-block-img">
                          <img src="/img/Categories-block0.png" alt="block"/>
                          <button className='header-up-btn'>Place a Bid</button>
                      </div>
                      <div className="Categories-prophile">
                          <div className="Categories-user">
                              <img src="/img/User1.svg" alt="user"/>
                              <div className='Categories-user-name'>
                                  <p>Virtual Art</p>
                                  <span>by @wzard</span>
                              </div>
                          </div>
                          <div className='Categories-prophile-dec'>
                              <img src="/img/heart.svg" alt="heart"/>
                              <span>92</span>
                          </div>
                      </div>
                      <div className="Categories-dec">
                          <span>Current Bid</span>
                          <p>4.89 ETH</p>
                      </div>
                  </div>
                  <div className="Categories-block">
                      <div className="Categories-block-img">
                          <img src="/img/Categories-block1.png" alt="block"/>
                          <button className='header-up-btn'>Place a Bid</button>
                      </div>
                      <div className="Categories-prophile">
                          <div className="Categories-user">
                              <img src="/img/User1.svg" alt="user"/>
                              <div className='Categories-user-name'>
                                  <p>Virtual Art</p>
                                  <span>by @wzard</span>
                              </div>
                          </div>
                          <div className='Categories-prophile-dec'>
                              <img src="/img/heart.svg" alt="heart"/>
                              <span>92</span>
                          </div>
                      </div>
                      <div className="Categories-dec">
                          <span>Current Bid</span>
                          <p>4.89 ETH</p>
                      </div>
                  </div>
                  <div className="Categories-block">
                      <div className="Categories-block-img">
                          <img src="/img/Categories-block2.png" alt="block"/>
                          <button className='header-up-btn'>Place a Bid</button>
                      </div>
                      <div className="Categories-prophile">
                          <div className="Categories-user">
                              <img src="/img/User1.svg" alt="user"/>
                              <div className='Categories-user-name'>
                                  <p>Virtual Art</p>
                                  <span>by @wzard</span>
                              </div>
                          </div>
                          <div className='Categories-prophile-dec'>
                              <img src="/img/heart.svg" alt="heart"/>
                              <span>92</span>
                          </div>
                      </div>
                      <div className="Categories-dec">
                          <span>Current Bid</span>
                          <p>4.89 ETH</p>
                      </div>
                  </div>
                  <div className="Categories-block">
                      <div className="Categories-block-img">
                          <img src="/img/Categories-block0.png" alt="block"/>
                          <button className='header-up-btn'>Place a Bid</button>
                      </div>
                      <div className="Categories-prophile">
                          <div className="Categories-user">
                              <img src="/img/User1.svg" alt="user"/>
                              <div className='Categories-user-name'>
                                  <p>Virtual Art</p>
                                  <span>by @wzard</span>
                              </div>
                          </div>
                          <div className='Categories-prophile-dec'>
                              <img src="/img/heart.svg" alt="heart"/>
                              <span>92</span>
                          </div>
                      </div>
                      <div className="Categories-dec">
                          <span>Current Bid</span>
                          <p>4.89 ETH</p>
                      </div>
                  </div>
              </div>
              <div className='Categories-btn'>
                  <button className='header-up-btn'>View All</button>
              </div>
          </div>
          <div className="TopCreators">
              <div className="TopCreators-Title">
                  <h2>Top Creators</h2>
              </div>
              <div className="TC-cards-wrapper">
                  <div className="TC-card">
                      <div className='TC-card-profile'>
                          <img src="/img/Profile0.svg" alt="user"/>
                          <div className='TC-card-profile-name'>
                              <p>Wzard Dee</p>
                              <span>4.89 ETH</span>
                          </div>
                      </div>
                      <div className='TC-card-profile-right'>
                          <p>33</p>
                          <span>Items</span>
                      </div>
                  </div>
                  <div className="TC-card">
                      <div className='TC-card-profile'>
                          <img src="/img/User.svg" alt="user"/>
                          <div className='TC-card-profile-name'>
                              <p>Wzard Dee</p>
                              <span>4.89 ETH</span>
                          </div>
                      </div>
                      <div className='TC-card-profile-right'>
                          <p>33</p>
                          <span>Items</span>
                      </div>
                  </div>
                  <div className="TC-card">
                      <div className='TC-card-profile'>
                          <img src="/img/User1.svg" alt="user"/>
                          <div className='TC-card-profile-name'>
                              <p>Wzard Dee</p>
                              <span>4.89 ETH</span>
                          </div>
                      </div>
                      <div className='TC-card-profile-right'>
                          <p>33</p>
                          <span>Items</span>
                      </div>
                  </div>
                  <div className="TC-card">
                      <div className='TC-card-profile'>
                          <img className='circle' src="/img/User2.png" alt="user"/>
                          <div className='TC-card-profile-name'>
                              <p>Wzard Dee</p>
                              <span>4.89 ETH</span>
                          </div>
                      </div>
                      <div className='TC-card-profile-right'>
                          <p>33</p>
                          <span>Items</span>
                      </div>
                  </div>
              </div>
              <div className='Categories-btn'>
                  <button className='header-up-btn'>View All</button>
              </div>
          </div>
        </div>
        <div className="Search">
        <h2>Ready for Next NFT Drop?</h2>
        <div className='Search-line-wrapper'>
            <div className='Search-line'>vziben77@gmail.com</div>
            <button className='header-up-btn'>Subscribe</button>
        </div>
    </div>
    </>
    );
}
export { Home }