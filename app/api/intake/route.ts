import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const voornaam = (data?.voornaam ?? "").toString().trim();
    const achternaam = (data?.achternaam ?? "").toString().trim();
    const email = (data?.email ?? "").toString().trim();
    const telefoon = (data?.telefoon ?? "").toString().trim();
    const bedrijf = (data?.bedrijf ?? "").toString().trim();
    const bericht = (data?.bericht ?? "").toString().trim();
    const overigToelichting = (data?.overigToelichting ?? "").toString().trim();
    const diensten = Array.isArray(data?.diensten) ? data.diensten : [];

    if (!voornaam || !achternaam || !email) {
      return new Response(
        JSON.stringify({ success: false, message: "Ontbrekende velden." }),
        { status: 400 }
      );
    }

    const safe = {
      voornaam: escapeHtml(voornaam),
      achternaam: escapeHtml(achternaam),
      email: escapeHtml(email),
      telefoon: escapeHtml(telefoon || "-"),
      bedrijf: escapeHtml(bedrijf || "-"),
      bericht: escapeHtml(bericht || "-").replaceAll("\n", "<br/>"),
      overigToelichting: escapeHtml(overigToelichting || ""),
      diensten: diensten.map((d: any) => escapeHtml(String(d))).join(", ") || "-",
    };

    // Mail naar jou
    await resend.emails.send({
      from: "ThreatZero <contact@threatzero.nl>",
      to: ["contact@threatzero.nl"],
      replyTo: email,
      subject: "Nieuwe intake aanvraag (ThreatZero)",
      html: `
        <h2>Nieuwe intake aanvraag</h2>
        <p><strong>Naam:</strong> ${safe.voornaam} ${safe.achternaam}</p>
        <p><strong>E-mail:</strong> ${safe.email}</p>
        <p><strong>Telefoon:</strong> ${safe.telefoon}</p>
        <p><strong>Bedrijf:</strong> ${safe.bedrijf}</p>
        <p><strong>Diensten:</strong> ${safe.diensten}</p>
        ${
          safe.overigToelichting
            ? `<p><strong>Overig:</strong> ${safe.overigToelichting}</p>`
            : ""
        }
        <p><strong>Bericht:</strong><br/>${safe.bericht}</p>
      `,
    });

    // Bevestiging naar klant
    await resend.emails.send({
      from: "ThreatZero <contact@threatzero.nl>",
      to: [email],
      subject: "Bevestiging: we hebben je aanvraag ontvangen",
      html: `
        <p>Hi ${safe.voornaam},</p>
        <p>Bedankt voor je aanvraag. We nemen binnen <strong>1 werkdag</strong> contact met je op.</p>
        <p><strong>Samenvatting</strong></p>
        <ul>
          <li><strong>Naam:</strong> ${safe.voornaam} ${safe.achternaam}</li>
          <li><strong>Bedrijf:</strong> ${safe.bedrijf}</li>
          <li><strong>Diensten:</strong> ${safe.diensten}</li>
        </ul>
        <p>Je kunt antwoorden op deze e-mail als je iets wilt toevoegen.</p>
        <p>— ThreatZero</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ success: false, message: "Server error." }),
      { status: 500 }
    );
  }
}
