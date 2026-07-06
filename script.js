document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");

    // Click lần 1: Mở nắp bì thư
    envelope.addEventListener("click", () => {
        if (!envelope.classList.contains("open")) {
            envelope.classList.add("open");
        }
    });

    // Click lần 2: Bấm vào lá thư để lấy ra
    letter.addEventListener("click", (e) => {
        e.stopPropagation(); // Ngăn sự kiện click lan ra bì thư bên ngoài
        
        if (!envelope.classList.contains("open")) return; // Chưa mở nắp thì không lấy thư được

        if (!envelope.classList.contains("letter-out")) {
            envelope.classList.add("letter-out");
        } else {
            // Click lần 3 trở đi: Lật trang qua lại
            envelope.classList.toggle("page-flipped");
        }
    });
});
