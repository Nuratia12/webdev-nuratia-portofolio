document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");
    const h2List = document.querySelectorAll("h2");
    const headerSubtitle = header.querySelector("p");

    const themeBtn = document.getElementById("toggleTheme");
    const greetBtn = document.getElementById("greetBtn");
    const greetingText = document.getElementById("greeting");

    const textTitle = "Selamat datang di blog pribadi aku, aku NURATIA ><";
    let index = 0;
    let modeAnimasi = false;

    function ketikJudul() {
        if (index < textTitle.length) {
            title.textContent += textTitle.charAt(index);
            index++;
            setTimeout(ketikJudul, 60);
        }
    }


    title.textContent = "Can You Touch Me?";


    header.addEventListener("click", () => {


        nav.classList.toggle("show-nav");

        if (modeAnimasi) {
            modeAnimasi = false;

            title.textContent = "Touch Again :(";
            if (headerSubtitle) headerSubtitle.style.display = "block";

            console.log("Header diklik → kembali ke mode normal");
            return;
        }


        modeAnimasi = true;
        index = 0;

        if (headerSubtitle) headerSubtitle.style.display = "none";

        title.textContent = "";
        ketikJudul();

        console.log("Header diklik → animasi mengetik mulai");
    });



    let fontToggled = false;

    document.addEventListener("keydown", (event) => {
        if (event.key === "f") {

            fontToggled = !fontToggled;

            h2List.forEach(h2 => {
                h2.style.fontSize = fontToggled ? "28px" : "";
            });

            console.log("Tombol F ditekan → ukuran H2 berubah");
        }
    });


    if (themeBtn) {
        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            console.log("Tombol Tema diklik");

            themeBtn.innerText =
                document.body.classList.contains("dark-mode")
                ? "Ubah ke Light Mode"
                : "Ubah ke Dark Mode";
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "d") {
            document.body.classList.toggle("dark-mode");
            console.log("Keyboard 'D' → Toggle Dark Mode");
        }
    });

    if (greetBtn) {
        greetBtn.addEventListener("click", () => {

            console.log("Tombol Sapa diklik");

            let nama = prompt("Siapa nama kamu?");

            if (nama && nama.trim() !== "") {
                greetingText.innerText =`Halo, ${nama}! 👋`;
            } else {
                greetingText.innerText = "Halo, pengunjung!";
            }
        });
    }

    header.addEventListener("mouseover", () => {
        header.style.backgroundColor = "#0049c7";
    });

    header.addEventListener("mouseout", () => {
        header.style.backgroundColor = "";
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            document.body.style.background =
                "linear-gradient(135deg, #0066ff, #0049c7, #003b8e)";
        } else {
            document.body.style.background = "";
        }
    });

});