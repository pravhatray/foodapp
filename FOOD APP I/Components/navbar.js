function navbar(){
   return `
   <h3><a href="index.html">Home</a></h3>
        <div>
            <input type="search" id="search" placeholder="Search" oninput="debounceFunction(main,1000)">
            <button id="search">Search</button>
        </div>
        <div>
            <h3><a href="MakeMea.html">Make Meal</a></h3>
        </div>
        <div id="logSig">
            <h3><a href="login.html">log in</a></h3>
            <h3><a href="SignUp.html">Sign Up</a></h3>
        </div>
        `
}

export default navbar;