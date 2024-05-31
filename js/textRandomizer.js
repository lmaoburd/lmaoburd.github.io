document.addEventListener('DOMContentLoaded', function() {
    const phrases = [
        "\"I'd want to be born once more as myself, but more talented.\"",
        "\"It's over 9000!\"",
        "\"Since I'm a contrarian, I don't want to go along with what everyone else thinks.\"",
        "\"The role of my manga is to be a work of entertainment through and through. I dare say I don't care even if [my works] have left nothing behind, as long as they have entertained their readers.\""
    ];

    const phraseElement = document.getElementById('phrase');
    const randomIndex = Math.floor(Math.random() * phrases.length);
    phraseElement.textContent = phrases[randomIndex];
});
