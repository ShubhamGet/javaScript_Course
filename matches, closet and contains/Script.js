let id1 = document.getElementById("id1")
console.log(id1);
console.log(id1.matches(".box"))
// elem.matches, it check if element matches the given CSS selector

// elem.closest, it look for the nearest ancestor that matches the given CSS-selector. the elem itself is also checked 
console.log(sp1.closest("#box"));

// elem.contains, it return true if elemB is inside elemA or when elemA==elemB
console.log(id1.contains(sp1));