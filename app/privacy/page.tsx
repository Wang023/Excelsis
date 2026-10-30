export const metadata = { title: "Privacy policy" };
export default function Page() {
  return (
    <>
      <section className="page-intro">
        <div className="eyebrow muted">YOUR INFORMATION</div>
        <h1>Privacy, with clarity.</h1>
        <p>How this website handles your enquiry.</p>
      </section>
      <div className="article-body">
        <h2>What we collect</h2>
        <p>
          The enquiry form collects your name, work email, practice name,
          selected service interest, and any website or goals you choose to
          provide. Please do not submit patient records or medical information.
        </p>
        <h2>How information is used</h2>
        <p>
          Information is collected with your consent to assess and respond to
          your request. It is not used to book a clinical appointment. This
          version stores enquiries in a local file on the website server. No
          email, CRM, calendar integration, advertising pixels, or analytics are
          configured.
        </p>
        <h2>Storage and your choices</h2>
        <p>
          Access to submissions is limited to the server operator. You can
          request access, correction, or deletion through the organisation
          operating this website. Before public launch, the operator must
          provide a verified privacy contact, its legal identity, and a defined
          retention period. This policy must be updated when integrations or
          data handling change.
        </p>
        <h2>Cookies</h2>
        <p>
          This website does not intentionally set advertising or analytics
          cookies. Essential hosting infrastructure may process technical
          request data.
        </p>
      </div>
    </>
  );
}
