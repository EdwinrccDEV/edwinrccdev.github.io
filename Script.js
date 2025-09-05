
function textType(texting, time, idele) {
    document.addEventListener("DOMContentLoaded", function() {
        const text = texting; // Replace with your title
        const titleElem = document.getElementById(idele);
        titleElem.textContent = "";
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                titleElem.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, time); // typing speed in ms
            }
        }
        typeWriter();
});
}

textType("Edwin's Hub", 100, "title");
textType("Just a Random Person.", 50, "sub");
textType("My Digital World is Right Here.", 50, "sub2");
textType("Edwin's Hub.", 50, "maint");
