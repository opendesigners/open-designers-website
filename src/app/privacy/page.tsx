import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy`,
  openGraph: {
    title: `Privacy`,
  },
};

const Privacy = () => {
  return (
    <>
      <Navbar />

      <div>
        <section className="container mx-auto px-4 py-10 lg:py-20">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[#0C0C0C] text-[2.5rem] lg:text-[4rem] font-[400] mt-2">
              Privacy Policy
            </h1>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-10 lg:pb-20">
          <div className="font-light lg:w-[1000px] mx-auto text-lg">
            <h2 className="text-[1rem] lg:text-[1.5rem] font-[400] tracking-[0.5px]!">
              This Privacy Policy describes how OpenDesigners (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects
              your personal information when you visit our website and engage
              with our services.
            </h2>

            <ul className="mt-8 list-[square]">
              <strong className="underline">Information We Collect</strong>

              <p>
                We may collect personal information when you interact with our
                Site and services, including but not limited to:
              </p>

              <div className="space-y-4 pl-10 mt-2">
                <li>
                  Contact information such as name, email address, and phone
                  number.
                </li>

                <li>
                  Information you provide when you enroll in our courses,
                  participate in forums, or submit inquiries.
                </li>

                <li>
                  Usage data, including IP addresses, browser types, and device
                  identifiers.
                </li>

                <li>Payment information (if applicable).</li>
              </div>
            </ul>

            <ul className="mt-8 list-[square]">
              <strong className="underline">How We Use Your Information</strong>
              <p>
                We may use the personal information we collect for the following
                purposes:
              </p>

              <div className="space-y-4 pl-10 mt-2">
                <li>To provide you with access to our courses and services.</li>
                <li>
                  To respond to your inquiries and provide customer support.
                </li>
                <li>
                  To personalize your learning experience and improve our
                  courses.
                </li>
                <li>
                  To send you updates, promotions, and important information.
                </li>
              </div>
            </ul>

            <div className="mt-8">
              <strong className="underline">Sharing Your Information</strong>

              <p>
                We do not sell, trade, or rent your personal information to
                third parties. However, we may share your information with
                trusted service providers who assist us in delivering our
                services, under strict confidentiality agreements.
              </p>
            </div>

            <div className="mt-8">
              <strong className="underline">Security</strong>

              <p>
                We are committed to protecting your personal information and use
                industry-standard security measures to safeguard it from
                unauthorized access, disclosure, alteration, or destruction.
              </p>
            </div>

            <div className="mt-8">
              <strong className="underline">Cookies</strong>

              <p>
                We may use cookies to enhance your experience on our Site. You
                can manage your cookie preferences through your browser
                settings.
              </p>
            </div>

            <div className="mt-8">
              <strong className="underline">
                Changes to This Privacy Policy
              </strong>

              <p>
                We may update this Privacy Policy to reflect changes in our
                practices or for legal and regulatory reasons. We will notify
                you of any changes by posting the updated Privacy Policy on this
                page.
              </p>
            </div>

            <div className="mt-8">
              <strong className="underline">Contact Us</strong>

              <p>
                If you have any questions or concerns about this Privacy Policy
                or wish to exercise your data rights, please contact us at{" "}
                <a
                  href={`mailto:support@open-designers.org`}
                  className="underline"
                >
                  support@open-designers.org
                </a>
              </p>
            </div>

            <div className="mt-8">
              <i>Last updated: June, 2025</i>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;
