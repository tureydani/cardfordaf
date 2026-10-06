/**
 * All editable copy for the card lives here.
 * Change `recipientName` or anything inside `messages` — nothing else needs to be touched.
 *
 * Spanish is the primary language. English lines are small, playful accents
 * (subtitles, captions) — not translations of the Spanish line above them.
 */

export const recipientName = "Dafne";

export const messages = {
  cover: {
    title: "Tengo algo para ti 🌻",
    subtitle: "Pero tienes que abrirlo.",
    hint: "A tiny surprise.",
    button: "Abrir",
  },
  intro: {
    line1: "Por si no te regalaron flores amarillas...",
    line2: "no podía dejar pasar la oportunidad.",
    hint: "I had an idea.",
  },
  growing: {
    label: "Cultivando algo...",
    hint: "Please wait... I'm doing science.",
  },
  reveal: {
    line1: "Te hice unas. 🌻",
    line2: "No son naturales...",
    line3: "pero sí las hice pensando en ti.",
    hint: "100% handmade. 0% natural.",
  },
  medical: {
    title: "RECOMENDACIÓN MÉDICA",
    hint: "Doctor's orders.",
    patient: `Paciente: ${recipientName}`,
    items: ["🌻 Una dosis de flores", "☕ Un café", "📚 Un pequeño descanso del estudio", "😌 Una sonrisa"],
    posologyTitle: "Posología:",
    posologyText: "Tomar cuando el día esté demasiado pesado.",
    posologyHint: "Do not overthink it.",
  },
  final: {
    title: "Tratamiento completado.",
    titleHint: "Prescription completed.",
    line2: "Espero que al menos te haya sacado una sonrisa.",
    ps: "P.D. El tratamiento podría requerir un café. ☕",
    psHint: "Terms and conditions may apply.",
    replay: "Repetir 🌻",
  },
};

export type Messages = typeof messages;
