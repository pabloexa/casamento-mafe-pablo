/* ═══════════════════════════════════════════════════════════════
   Biblioteca do site: componentes, ícones, pássaros e modelos.
   Usada pelo site (index.html) e pelo painel (painel.html).
   Ícones de linha: Lucide (lucide.dev), licença ISC.
   ═══════════════════════════════════════════════════════════════ */
(function(){
'use strict';
const ICONES = {"heart":["Coração","<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/>"],"gem":["Aliança","<path d=\"M6 3h12l4 6-10 13L2 9Z\"/><path d=\"M11 3 8 9l4 13 4-13-3-6\"/><path d=\"M2 9h20\"/>"],"wine":["Vinho","<path d=\"M8 22h8\"/><path d=\"M7 10h10\"/><path d=\"M12 15v7\"/><path d=\"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z\"/>"],"martini":["Drink","<path d=\"M8 22h8\"/><path d=\"M12 11v11\"/><path d=\"m19 3-7 8-7-8Z\"/>"],"glass-water":["Água","<path d=\"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z\"/><path d=\"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0\"/>"],"party-popper":["Festa","<path d=\"M5.8 11.3 2 22l10.7-3.79\"/><path d=\"M4 3h.01\"/><path d=\"M22 8h.01\"/><path d=\"M15 2h.01\"/><path d=\"M22 20h.01\"/><path d=\"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10\"/><path d=\"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17\"/><path d=\"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7\"/><path d=\"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z\"/>"],"music":["Música","<path d=\"M9 18V5l12-2v13\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/>"],"mic-vocal":["Microfone","<path d=\"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12\"/><path d=\"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5\"/><circle cx=\"16\" cy=\"7\" r=\"5\"/>"],"cake":["Bolo","<path d=\"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8\"/><path d=\"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1\"/><path d=\"M2 21h20\"/><path d=\"M7 8v3\"/><path d=\"M12 8v3\"/><path d=\"M17 8v3\"/><path d=\"M7 4h.01\"/><path d=\"M12 4h.01\"/><path d=\"M17 4h.01\"/>"],"utensils-crossed":["Jantar","<path d=\"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8\"/><path d=\"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7\"/><path d=\"m2.1 21.8 6.4-6.3\"/><path d=\"m19 5-7 7\"/>"],"coffee":["Café","<path d=\"M10 2v2\"/><path d=\"M14 2v2\"/><path d=\"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1\"/><path d=\"M6 2v2\"/>"],"church":["Igreja","<path d=\"M10 9h4\"/><path d=\"M12 7v5\"/><path d=\"M14 22v-4a2 2 0 0 0-4 0v4\"/><path d=\"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22\"/><path d=\"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7\"/>"],"sparkles":["Brilho","<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\"/><path d=\"M20 3v4\"/><path d=\"M22 5h-4\"/><path d=\"M4 17v2\"/><path d=\"M5 18H3\"/>"],"star":["Estrela","<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"/>"],"flower-2":["Flor","<path d=\"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1\"/><circle cx=\"12\" cy=\"8\" r=\"2\"/><path d=\"M12 10v12\"/><path d=\"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z\"/><path d=\"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z\"/>"],"leaf":["Folha","<path d=\"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z\"/><path d=\"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12\"/>"],"trees":["Árvores","<path d=\"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z\"/><path d=\"M7 16v6\"/><path d=\"M13 19v3\"/><path d=\"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5\"/>"],"sun":["Sol","<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2\"/><path d=\"M12 20v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"m17.66 17.66 1.41 1.41\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"m6.34 17.66-1.41 1.41\"/><path d=\"m19.07 4.93-1.41 1.41\"/>"],"cloud-sun":["Tempo","<path d=\"M12 2v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"M20 12h2\"/><path d=\"m19.07 4.93-1.41 1.41\"/><path d=\"M15.947 12.65a4 4 0 0 0-5.925-4.128\"/><path d=\"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z\"/>"],"umbrella":["Guarda-chuva","<path d=\"M22 12a10.06 10.06 1 0 0-20 0Z\"/><path d=\"M12 12v8a2 2 0 0 0 4 0\"/><path d=\"M12 2v1\"/>"],"flame":["Fogueira","<path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\"/>"],"tent":["Ao ar livre","<path d=\"M3.5 21 14 3\"/><path d=\"M20.5 21 10 3\"/><path d=\"M15.5 21 12 15l-3.5 6\"/><path d=\"M2 21h20\"/>"],"shirt":["Traje","<path d=\"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z\"/>"],"camera":["Fotos","<path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z\"/><circle cx=\"12\" cy=\"13\" r=\"3\"/>"],"gift":["Presente","<rect x=\"3\" y=\"8\" width=\"18\" height=\"4\" rx=\"1\"/><path d=\"M12 8v13\"/><path d=\"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7\"/><path d=\"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5\"/>"],"heart-handshake":["Carinho","<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/><path d=\"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66\"/><path d=\"m18 15-2-2\"/><path d=\"m15 18-2-2\"/>"],"hand-heart":["Gratidão","<path d=\"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16\"/><path d=\"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9\"/><path d=\"m2 15 6 6\"/><path d=\"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z\"/>"],"clock":["Horário","<circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/>"],"calendar-heart":["Data","<path d=\"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7\"/><path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><path d=\"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z\"/>"],"map-pin":["Local","<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/>"],"car":["Carro","<path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2\"/><circle cx=\"7\" cy=\"17\" r=\"2\"/><path d=\"M9 17h6\"/><circle cx=\"17\" cy=\"17\" r=\"2\"/>"],"square-parking":["Estacionamento","<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 17V7h4a3 3 0 0 1 0 6H9\"/>"],"bus":["Ônibus","<path d=\"M8 6v6\"/><path d=\"M15 6v6\"/><path d=\"M2 12h19.6\"/><path d=\"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/><path d=\"M9 18h5\"/><circle cx=\"16\" cy=\"18\" r=\"2\"/>"],"plane":["Viagem","<path d=\"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z\"/>"],"hotel":["Hotel","<path d=\"M10 22v-6.57\"/><path d=\"M12 11h.01\"/><path d=\"M12 7h.01\"/><path d=\"M14 15.43V22\"/><path d=\"M15 16a5 5 0 0 0-6 0\"/><path d=\"M16 11h.01\"/><path d=\"M16 7h.01\"/><path d=\"M8 11h.01\"/><path d=\"M8 7h.01\"/><rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\"/>"],"bed-double":["Hospedagem","<path d=\"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8\"/><path d=\"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4\"/><path d=\"M12 4v6\"/><path d=\"M2 18h20\"/>"],"key":["Chave","<path d=\"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4\"/><path d=\"m21 2-9.6 9.6\"/><circle cx=\"7.5\" cy=\"15.5\" r=\"5.5\"/>"],"baby":["Crianças","<path d=\"M9 12h.01\"/><path d=\"M15 12h.01\"/><path d=\"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5\"/><path d=\"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1\"/>"],"dog":["Pets","<path d=\"M11.25 16.25h1.5L12 17z\"/><path d=\"M16 14v.5\"/><path d=\"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309\"/><path d=\"M8 14v.5\"/><path d=\"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5\"/>"],"footprints":["Caminho","<path d=\"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z\"/><path d=\"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z\"/><path d=\"M16 17h4\"/><path d=\"M4 13h4\"/>"],"phone":["Telefone","<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"/>"],"mail":["E-mail","<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/>"]};

/* Desenhos da identidade visual (existem em azul e creme) */
const ARTES = { 'andorinha':'Andorinha', 'beija-flor-1':'Beija-flor 1', 'beija-flor-2':'Beija-flor 2', 'arvore':'Árvore', 'monograma':'Monograma' };
const VOOS = { f1:'Voo suave', f2:'Planar', f3:'Pairar (beija-flor)', f4:'Voo em círculo', cross:'Atravessar a tela', parado:'Parado' };

/* ── utilidades ── */
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt = s => esc(s).replace(/\*([^*]+)\*/g, '<em>$1</em>').replace(/\n/g, '<br>');
const paras = s => String(s || '').split(/\n\s*\n/).filter(p => p.trim()).map(p => `<p>${fmt(p.trim())}</p>`).join('');
const safeUrl = u => /^(https?:|mailto:|tel:)/i.test(String(u||'').trim()) ? String(u).trim() : '';
const imgUrl = u => /^(data:image\/|https?:|assets\/|fotos\/)/i.test(String(u||'')) ? String(u) : '';
const num = (v, d) => { const n = parseFloat(v); return isNaN(n) ? d : n; };
const pick = (v, ok, d) => ok.includes(v) ? v : d;

/* Ícone de linha (i:nome), desenho da identidade (assets/…) ou imagem enviada */
function arte(v, alt=''){
  v = String(v || '');
  if (v.startsWith('i:')){ const i = ICONES[v.slice(2)]; return i ? `<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i[1]}</svg>` : ''; }
  const u = imgUrl(v); return u ? `<img src="${esc(u)}" alt="${esc(alt)}" loading="lazy">` : '';
}
const artePadrao = (nome, cor) => `assets/${ARTES[nome] ? nome : 'andorinha'}-${cor === 'creme' ? 'creme' : 'azul'}.png`;

/* ═════════ Pássaros e enfeites ═════════ */
const P = (arte, cor, voo, tamanho, x, y, extra={}) => Object.assign({ arte, cor, voo, tamanho, x, y }, extra);
const ENFEITES_PADRAO = {
  capa: [ P('andorinha','azul','f1',72,12,40,{xm:5,ym:64}), P('beija-flor-1','azul','f2',54,80,33,{xm:80,ym:21}), P('beija-flor-2','azul','f3',46,60,70,{xm:64,ym:76}), P('andorinha','azul','f4',40,24,16,{xm:10,ym:14}) ],
  contagem: [ P('andorinha','creme','cross',46,0,18), P('beija-flor-1','creme','cross',34,0,62) ],
  convite: [ P('beija-flor-2','azul','f2',52,86,9,{xm:82,ym:4}) ],
  nos: [ P('beija-flor-1','azul','f3',46,7,8) ],
  local: [ P('andorinha','azul','f2',62,42,12,{xm:76,ym:5}), P('beija-flor-1','azul','f1',46,36,20,{xm:64,ym:10}), P('beija-flor-2','azul','f3',40,6,30,{xm:12,ym:14}) ],
  programacao: [ P('andorinha','azul','f4',50,86,8,{xm:82,ym:3}) ],
  menu: [ P('beija-flor-1','azul','f1',54,14,12,{xm:8,ym:5}) ],
  detalhes: [],
  presentes: [ P('beija-flor-2','azul','f3',46,9,6,{xm:5,ym:3}), P('andorinha','azul','f2',40,86,10,{xm:84,ym:6}) ],
  confirmar: [ P('andorinha','creme','f1',62,7,12), P('beija-flor-1','creme','f3',46,88,80) ],
  rodape: [ P('andorinha','creme','f2',50,16,18), P('beija-flor-2','creme','f3',40,80,28) ]
};
function enfeitesHtml(lista, sec){
  return `<div class="enf-layer">${(lista || []).map((e, i) => {
    const src = imgUrl(e.imagem) || artePadrao(e.arte, e.cor);
    const voo = pick(e.voo, Object.keys(VOOS), 'f1');
    let st = `--x:${num(e.x,10)}%;--y:${num(e.y,10)}%;--s:${Math.max(10, Math.min(400, num(e.tamanho,50)))};--d:${(-i * 1.7).toFixed(1)}s;`;
    if (e.xm !== undefined && e.xm !== '' && e.xm !== null) st += `--xm:${num(e.xm,10)}%;`;
    if (e.ym !== undefined && e.ym !== '' && e.ym !== null) st += `--ym:${num(e.ym,10)}%;`;
    return `<div class="bird enf ${voo}${e.soPc ? ' so-pc' : ''}" style="${st}" data-enf="${esc(sec)}:${i}"><span class="flip${e.espelhar ? ' on' : ''}"><img src="${esc(src)}" alt="" draggable="false"></span></div>`;
  }).join('')}</div>`;
}

/* ═════════ Campos (o painel monta os formulários a partir disto) ═════════ */
const T = (k, l, x={}) => ({ k, l, ...x });
const A = (k, l, x={}) => ({ k, l, t:'area', ...x });
const SEL = (k, l, opcoes, x={}) => ({ k, l, t:'select', opcoes, ...x });
const ALINHAR = SEL('alinhar', 'Alinhamento', [['centro','Centralizado'],['esquerda','À esquerda']]);
const resumo = (...ks) => it => ks.map(k => String(it[k] || '').replace(/\*/g, '').split('\n')[0]);

/* ═════════ Componentes ═════════ */
const BLOCOS = {
  titulo: { nome:'Título', desc:'Frase pequena e um título grande, como os das seções.', icone:'i:sparkles',
    novo:{ eyebrow:'Frase pequena', titulo:'Novo *título*', alinhar:'centro' }, resumo:resumo('titulo','eyebrow'),
    campos:[ T('eyebrow','Frase pequena'), T('titulo','Título', {dica:'Entre *asteriscos* fica em itálico.'}), ALINHAR ],
    html:b => `<div class="blk blk-titulo al-${pick(b.alinhar,['centro','esquerda'],'centro')}">${b.eyebrow ? `<div class="eyebrow reveal">${fmt(b.eyebrow)}</div>` : ''}<h2 class="reveal d1">${fmt(b.titulo)}</h2></div>` },

  texto: { nome:'Texto', desc:'Um ou mais parágrafos. Pode ser normal ou em destaque (itálico grande).', icone:'i:mail',
    novo:{ texto:'Escreva aqui.', estilo:'normal', alinhar:'centro' }, resumo:resumo('texto'),
    campos:[ A('texto','Texto', {rows:5, dica:'Linha em branco separa parágrafos. Entre *asteriscos* fica em itálico.'}), SEL('estilo','Estilo', [['normal','Normal'],['destaque','Destaque (itálico grande)']]), ALINHAR ],
    html:b => `<div class="blk blk-texto reveal est-${pick(b.estilo,['normal','destaque'],'normal')} al-${pick(b.alinhar,['centro','esquerda'],'centro')}">${paras(b.texto)}</div>` },

  imagem: { nome:'Imagem', desc:'Uma foto ou desenho, em arco, redondo ou com cantos arredondados.', icone:'i:camera',
    novo:{ imagem:'', formato:'arco', tamanho:'media', legenda:'' }, resumo:it => [it.legenda || 'Imagem', it.imagem ? '' : 'sem imagem ainda'], thumb:it => it.imagem,
    campos:[ { k:'imagem', l:'Imagem', t:'imagem', max:1600 }, SEL('formato','Formato', [['arco','Arco'],['redonda','Redonda'],['arredondada','Cantos arredondados']]),
      SEL('tamanho','Tamanho', [['pequena','Pequena'],['media','Média'],['grande','Grande']]), T('legenda','Legenda (opcional)') ],
    html:b => imgUrl(b.imagem) ? `<figure class="blk blk-img reveal f-${pick(b.formato,['arco','redonda','arredondada'],'arco')} t-${pick(b.tamanho,['pequena','media','grande'],'media')}"><div class="frame">${arte(b.imagem, b.legenda)}</div>${b.legenda ? `<figcaption>${fmt(b.legenda)}</figcaption>` : ''}</figure>` : '' },

  galeria: { nome:'Galeria de fotos', desc:'Várias fotos lado a lado, com legenda.', icone:'i:camera',
    novo:{ formato:'arco', fotos:[{ imagem:'', legenda:'' }] }, resumo:it => [`${(it.fotos||[]).length} foto(s)`],
    campos:[ SEL('formato','Formato das fotos', [['arco','Arco'],['redonda','Redonda'],['arredondada','Cantos arredondados']]),
      { k:'fotos', l:'Fotos', t:'lista', item:'foto', novo:{ imagem:'', legenda:'' }, resumo:resumo('legenda'), thumb:it => it.imagem,
        campos:[ { k:'imagem', l:'Foto', t:'imagem', max:1600 }, T('legenda','Legenda') ] } ],
    html:b => { const f = (b.fotos||[]).filter(x => imgUrl(x.imagem)); return f.length ? `<div class="blk gallery g-${pick(b.formato,['arco','redonda','arredondada'],'arco')}">${f.map((x,i) => `<figure class="reveal d${i%3}"><div class="frame">${arte(x.imagem, x.legenda)}</div>${x.legenda ? `<figcaption>${fmt(x.legenda)}</figcaption>` : ''}</figure>`).join('')}</div>` : ''; } },

  cartoes: { nome:'Cartões com ícone', desc:'Cartões com ícone, título, texto e um botão opcional. Bom para hospedagem, dicas, padrinhos.', icone:'i:star',
    novo:{ itens:[{ icone:'i:heart', titulo:'Título', texto:'Texto do cartão.', link:'', botao:'' }] }, resumo:it => [`${(it.itens||[]).length} cartão(ões)`, (it.itens||[]).map(x => x.titulo).join(', ')],
    campos:[ { k:'itens', l:'Cartões', t:'lista', item:'cartão', novo:{ icone:'i:heart', titulo:'Título', texto:'', link:'', botao:'' }, resumo:resumo('titulo','texto'), thumb:it => it.icone, icon:true,
      campos:[ { k:'icone', l:'Ícone', t:'icone' }, T('titulo','Título'), A('texto','Texto', {rows:3}), T('link','Link do botão (opcional)', {t:'url'}), T('botao','Texto do botão', {dica:'Se deixar em branco e tiver link, aparece “Saiba mais”.'}) ] } ],
    html:b => `<div class="blk details">${(b.itens||[]).map((x,n) => `<div class="detail reveal d${n%4}">${arte(x.icone) ? `<div class="ico">${arte(x.icone)}</div>` : ''}<h3>${fmt(x.titulo)}</h3>${x.texto ? `<p>${fmt(x.texto)}</p>` : ''}${safeUrl(x.link) ? `<a class="btn" href="${esc(safeUrl(x.link))}" target="_blank" rel="noopener">${esc(x.botao || 'Saiba mais')}</a>` : ''}</div>`).join('')}</div>` },

  linha: { nome:'Linha do tempo', desc:'Momentos em ordem, com data ou horário. Boa para contar a história de vocês.', icone:'i:clock',
    novo:{ itens:[{ hora:'2019', titulo:'O primeiro encontro', texto:'' }] }, resumo:it => [`${(it.itens||[]).length} momento(s)`],
    campos:[ { k:'itens', l:'Momentos', t:'lista', item:'momento', novo:{ hora:'', titulo:'Novo momento', texto:'' }, resumo:resumo('hora','titulo'),
      campos:[ T('hora','Data ou horário'), T('titulo','Título'), A('texto','Texto', {rows:2}) ] } ],
    html:b => `<div class="blk timeline">${(b.itens||[]).map(i => `<div class="item reveal"><div class="time">${fmt(i.hora)}</div><div class="dot"></div><div class="what"><h3>${fmt(i.titulo)}</h3>${i.texto ? `<p>${fmt(i.texto)}</p>` : ''}</div></div>`).join('')}</div>` },

  botoes: { nome:'Botões', desc:'Um ou mais botões com link (ex.: playlist, álbum de fotos, hotel).', icone:'i:map-pin',
    novo:{ itens:[{ texto:'Abrir', link:'', estilo:'cheio' }] }, resumo:it => [(it.itens||[]).map(x => x.texto).join(' · ') || 'Botões'],
    campos:[ { k:'itens', l:'Botões', t:'lista', item:'botão', novo:{ texto:'Novo botão', link:'', estilo:'contorno' }, resumo:resumo('texto','link'),
      campos:[ T('texto','Texto do botão'), T('link','Link', {t:'url'}), SEL('estilo','Estilo', [['cheio','Azul cheio'],['contorno','Só contorno']]) ] } ],
    html:b => `<div class="blk blk-botoes reveal">${(b.itens||[]).filter(x => safeUrl(x.link)).map(x => `<a class="btn${x.estilo === 'cheio' ? ' solid' : ''}" href="${esc(safeUrl(x.link))}" target="_blank" rel="noopener">${esc(x.texto || 'Abrir')}</a>`).join('')}</div>` },

  citacao: { nome:'Citação', desc:'Uma frase especial em destaque, com autor.', icone:'i:heart-handshake',
    novo:{ texto:'O amor é paciente, o amor é bondoso.', autor:'1 Coríntios 13' }, resumo:resumo('texto','autor'),
    campos:[ A('texto','Frase', {rows:3}), T('autor','Autor (opcional)') ],
    html:b => `<blockquote class="blk blk-cit reveal"><p>${fmt(b.texto)}</p>${b.autor ? `<cite>${fmt(b.autor)}</cite>` : ''}</blockquote>` },

  perguntas: { nome:'Perguntas e respostas', desc:'Lista de perguntas que abrem ao clicar. Ótima para dúvidas frequentes.', icone:'i:sparkles',
    novo:{ itens:[{ pergunta:'Posso levar crianças?', resposta:'' }] }, resumo:it => [`${(it.itens||[]).length} pergunta(s)`],
    campos:[ { k:'itens', l:'Perguntas', t:'lista', item:'pergunta', novo:{ pergunta:'Nova pergunta?', resposta:'' }, resumo:resumo('pergunta','resposta'),
      campos:[ T('pergunta','Pergunta'), A('resposta','Resposta', {rows:3}) ] } ],
    html:b => `<div class="blk blk-faq">${(b.itens||[]).map(x => `<details class="reveal"><summary>${fmt(x.pergunta)}</summary><div>${paras(x.resposta)}</div></details>`).join('')}</div>` },

  divisor: { nome:'Divisor com desenho', desc:'Uma linha com um desenho no meio, para separar partes.', icone:'i:leaf',
    novo:{ icone:'assets/beija-flor-1-azul.png' }, resumo:() => ['Divisor'], thumb:it => it.icone, icon:true,
    campos:[ { k:'icone', l:'Desenho', t:'icone' } ],
    html:b => `<div class="blk blk-div reveal"><span></span><div class="art">${arte(b.icone)}</div><span></span></div>` },

  video: { nome:'Vídeo do YouTube', desc:'Cole o link de um vídeo do YouTube.', icone:'i:camera',
    novo:{ link:'', legenda:'' }, resumo:resumo('legenda','link'),
    campos:[ T('link','Link do YouTube', {t:'url', dica:'Ex.: https://www.youtube.com/watch?v=…'}), T('legenda','Legenda (opcional)') ],
    html:b => { const m = String(b.link||'').match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/); return m ? `<figure class="blk blk-video reveal"><div class="vf"><iframe src="https://www.youtube-nocookie.com/embed/${m[1]}" title="Vídeo" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div>${b.legenda ? `<figcaption>${fmt(b.legenda)}</figcaption>` : ''}</figure>` : ''; } },

  espaco: { nome:'Espaço', desc:'Um respiro em branco entre componentes.', icone:'i:footprints',
    novo:{ altura:'media' }, resumo:it => ['Espaço ' + ({pequena:'pequeno',media:'médio',grande:'grande'}[it.altura] || '')],
    campos:[ SEL('altura','Tamanho', [['pequena','Pequeno'],['media','Médio'],['grande','Grande']]) ],
    html:b => `<div class="blk blk-esp h-${pick(b.altura,['pequena','media','grande'],'media')}"></div>` },
};
function blocosHtml(lista){
  return (lista || []).map(b => { const d = BLOCOS[b && b.tipo]; try { return d ? d.html(b) : ''; } catch(e){ return ''; } }).join('');
}
const novoBloco = tipo => Object.assign({ tipo }, JSON.parse(JSON.stringify(BLOCOS[tipo].novo)));

/* ═════════ Modelos de seção nova ═════════ */
const B = (tipo, x) => Object.assign(novoBloco(tipo), x);
const MODELOS = [
  { id:'branco', nome:'Em branco', desc:'Só um título. Monte com os componentes que quiser.', icone:'i:sparkles', menu:'Nova seção',
    dados:() => ({ fundo:'auto', blocos:[ B('titulo', { eyebrow:'Nova seção', titulo:'*Título* da seção' }) ] }) },
  { id:'historia', nome:'Nossa história', desc:'Título, texto e uma linha do tempo do casal.', icone:'i:heart', menu:'Nossa história',
    dados:() => ({ fundo:'auto', blocos:[ B('titulo', { eyebrow:'Desde o começo', titulo:'*Nossa* história' }), B('texto', { texto:'Conte aqui como vocês se conheceram.', estilo:'destaque' }),
      B('linha', { itens:[ { hora:'Ano', titulo:'O primeiro encontro', texto:'' }, { hora:'Ano', titulo:'O namoro', texto:'' }, { hora:'Ano', titulo:'O pedido', texto:'' } ] }) ] }) },
  { id:'hospedagem', nome:'Hospedagem', desc:'Cartões de hotéis com botão para reservar.', icone:'i:hotel', menu:'Hospedagem',
    dados:() => ({ fundo:'auto', blocos:[ B('titulo', { eyebrow:'Para quem vem de fora', titulo:'*Onde* ficar' }), B('texto', { texto:'Separamos algumas opções perto da Chácara Bela Vista.' }),
      B('cartoes', { itens:[ { icone:'i:hotel', titulo:'Nome do hotel', texto:'Distância e observações.', link:'', botao:'Ver hotel' }, { icone:'i:bed-double', titulo:'Nome do hotel', texto:'Distância e observações.', link:'', botao:'Ver hotel' } ] }) ] }) },
  { id:'faq', nome:'Perguntas frequentes', desc:'Respostas para as dúvidas mais comuns dos convidados.', icone:'i:sparkles', menu:'Dúvidas',
    dados:() => ({ fundo:'auto', blocos:[ B('titulo', { eyebrow:'Ficou com dúvida?', titulo:'*Perguntas* frequentes' }),
      B('perguntas', { itens:[ { pergunta:'Posso levar crianças?', resposta:'' }, { pergunta:'O local tem estacionamento?', resposta:'Sim, o local tem estacionamento amplo.' }, { pergunta:'Qual é o traje?', resposta:'Esporte fino.' }, { pergunta:'Até quando devo confirmar presença?', resposta:'Até 30 de abril de 2027.' } ] }) ] }) },
  { id:'padrinhos', nome:'Padrinhos', desc:'Fotos redondas com o nome de cada padrinho.', icone:'i:heart-handshake', menu:'Padrinhos',
    dados:() => ({ fundo:'auto', blocos:[ B('titulo', { eyebrow:'Quem está com a gente', titulo:'*Nossos* padrinhos' }), B('galeria', { formato:'redonda', fotos:[ { imagem:'', legenda:'Nome e Nome' } ] }) ] }) },
  { id:'recado', nome:'Recado especial', desc:'Fundo azul com uma citação e um divisor.', icone:'i:hand-heart', menu:'Recado',
    dados:() => ({ fundo:'azul', blocos:[ B('divisor', { icone:'assets/beija-flor-2-creme.png' }), B('citacao', { texto:'Escreva aqui uma frase especial para os convidados.', autor:'Mafe & Pablo' }) ] }) },
];

window.MP = { ICONES, ARTES, VOOS, ENFEITES_PADRAO, BLOCOS, MODELOS, enfeitesHtml, blocosHtml, novoBloco, arte, artePadrao, esc, fmt, paras, safeUrl, imgUrl };
})();
