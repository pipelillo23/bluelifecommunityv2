// Pequeño script para manejar el botón "Unirse".
// Reemplaza DISCORD_INVITE_URL por tu enlace real de invitación.
const DISCORD_INVITE_URL = "https://discord.gg/REPLACE";

document.getElementById('year').textContent = new Date().getFullYear();

function openInvite() {
  window.open(DISCORD_INVITE_URL, '_blank');
}

document.getElementById('joinHero').addEventListener('click', openInvite);
document.getElementById('joinTop').addEventListener('click', openInvite);
document.getElementById('discordInvite').addEventListener('click', (e) => {
  e.preventDefault();
  openInvite();
});