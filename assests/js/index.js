

document.querySelectorAll('.cards').forEach((card, idx) => {
  const imagensOriginais = [
    "/assests/image/message-question-black.png",
    "/assests/image/user-language-black.png",
    "/assests/image/translate-black.png"
  ];
  const imagensHover = [
    "/assests/image/message-question-white.png",
    "/assests/image/user-language-white.png",
    "/assests/image/translate-white.png"
  ];

  const img = card.querySelector('img');
  card.addEventListener('mouseenter', () => {
    img.src = imagensHover[idx];
  });
  card.addEventListener('mouseleave', () => {
    img.src = imagensOriginais[idx];
  });
});


document.querySelectorAll('.cards').forEach((card, idx) => {
  const urls = [
    "./pages/pronuncia.html",
    "traducao.html",
    "sabeNome.html"
  ];

  card.addEventListener('click', () => {
    window.location.href = urls[idx];
  });
})