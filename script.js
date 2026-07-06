document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");

    envelope.addEventListener("click", () => {
        if (!envelope.classList.contains("open")) {
            envelope.classList.add("open");
        }
    });

    letter.addEventListener("click", (e) => {
        e.stopPropagation(); 
        
        if (!envelope.classList.contains("open")) return; 

        if (!envelope.classList.contains("letter-out")) {
            envelope.classList.add("letter-out");
        } else {
            envelope.classList.toggle("page-flipped");
        }
    });
});
