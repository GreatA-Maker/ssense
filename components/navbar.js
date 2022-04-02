function navbar() {
	return `<div id="navbar">
    <div id="left">
        <div><a href="menswear.html">MENSWEAR</a></div>
        <div><a href="#">WOMENSWEAR</a></div>
        <div>EVERYTHING ELSE</div>
        <div>SEARCH</div>
    </div>
    <a href="index.html"
        ><div id="logo">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Ssense_logo.svg/1200px-Ssense_logo.svg.png"
                width="120px"
                alt="SSENSE"
            /></div
    ></a>
    <div id="right">
        <div>ENGLISH</div>
        <div><a href="login.html">LOGIN</a></div>
        <div>WISHLIST</div>
        <div>
            <a href="cart.html">SHOPPING BAG(<span>0</span>)</a>
        </div>
    </div>
</div>`;
}

export default navbar;
