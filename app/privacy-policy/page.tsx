import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import {
  LegalIntro,
  LegalSection,
  LegalSubheading,
  LegalP,
  LegalList,
  LegalEmailLink,
} from "@/components/legal/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Befikra Partner",
  description:
    "How Befikra collects, uses, stores, and protects your information when you use our website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="April 3, 2026">
      <LegalIntro>
        <p className="mb-4">
          This Privacy Policy explains how Befikra (&ldquo;Befikra&rdquo;,
          &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects,
          uses, stores, and protects your information when you use our website,
          applications, and services (collectively, the &ldquo;Services&rdquo;).
        </p>
        <p>
          By accessing or using Befikra, you agree to the terms outlined in
          this Privacy Policy.
        </p>
      </LegalIntro>

      <LegalSection number={1} title="Information We Collect" showDivider={false}>
        <LegalP>
          We collect information necessary to operate, improve, and secure our
          Services.
        </LegalP>
        <LegalSubheading>A. Information You Provide</LegalSubheading>
        <LegalP>
          This includes information you voluntarily provide when creating an
          account, using the platform, or contacting support:
        </LegalP>
        <LegalList
          items={[
            "Name, email address, and phone number",
            "Business name, organization details, and profile information",
            "Account login credentials",
            "Payment and billing information",
            "Customer, booking, and operational data entered into the platform",
            "Messages, enquiries, and support communications",
          ]}
        />
        <LegalSubheading>B. Information Collected Automatically</LegalSubheading>
        <LegalP>
          When you use Befikra, certain information is collected automatically,
          including:
        </LegalP>
        <LegalList
          items={[
            "IP address and browser type",
            "Device type, operating system, and usage activity",
            "Pages visited, features used, and interaction behavior",
            "Access times and session information",
            "Cookies and similar tracking technologies",
          ]}
        />
        <LegalP>
          This information helps improve platform performance, security, and
          usability.
        </LegalP>
      </LegalSection>

      <LegalSection number={2} title="How We Use Your Information">
        <LegalP>We use collected information to:</LegalP>
        <LegalList
          items={[
            "Provide, operate, and maintain Befikra Services",
            "Enable lead management, bookings, payments, and communication features",
            "Improve platform functionality, performance, and user experience",
            "Respond to support requests and user enquiries",
            "Send important service updates, alerts, and notifications",
            "Monitor platform usage and prevent misuse, fraud, or unauthorized access",
            "Enhance automation, analytics, and AI-powered features",
          ]}
        />
        <LegalP>
          We do not use your data for unrelated purposes without your consent.
        </LegalP>
      </LegalSection>

      <LegalSection number={3} title="Sharing Of Information">
        <LegalP>
          We do not sell, rent, or trade your personal information.
        </LegalP>
        <LegalP>We may share information only in the following situations:</LegalP>
        <LegalList
          items={[
            "With trusted third-party service providers, such as payment processors, hosting providers, messaging services, and analytics providers",
            "When required by law, legal process, or regulatory authorities",
            "To protect the rights, safety, security, and integrity of Befikra and its users",
            "To provide integrations you have explicitly enabled (such as WhatsApp, Instagram, email, or payment providers)",
          ]}
        />
        <LegalP>
          All service providers are contractually obligated to protect your data.
        </LegalP>
      </LegalSection>

      <LegalSection number={4} title="Data Security">
        <LegalP>
          Befikra uses industry-standard security measures to protect your data,
          including:
        </LegalP>
        <LegalList
          items={[
            "Secure data storage and encryption practices",
            "Access controls and authentication systems",
            "Monitoring and protection against unauthorized access",
          ]}
        />
        <LegalP>
          However, no internet-based system can guarantee complete security, and
          users are encouraged to use secure passwords and maintain account
          confidentiality.
        </LegalP>
      </LegalSection>

      <LegalSection number={5} title="Cookies And Tracking Technologies">
        <LegalP>Befikra uses cookies and similar technologies to:</LegalP>
        <LegalList
          items={[
            "Improve website and platform functionality",
            "Understand user behavior and usage patterns",
            "Personalize user experience",
            "Maintain login sessions and preferences",
          ]}
        />
        <LegalP>
          You may control cookie settings through your browser preferences.
          Disabling cookies may affect certain platform features.
        </LegalP>
      </LegalSection>

      <LegalSection number={6} title="Data Retention">
        <LegalP>We retain data only for as long as necessary to:</LegalP>
        <LegalList
          items={[
            "Provide and maintain our Services",
            "Comply with legal and regulatory requirements",
            "Resolve disputes and enforce agreements",
            "Improve system performance and reliability",
          ]}
        />
        <LegalP>
          Users may request deletion of their data, subject to legal and
          operational requirements.
        </LegalP>
      </LegalSection>

      <LegalSection number={7} title="Your Rights And Control">
        <LegalP>You have the right to:</LegalP>
        <LegalList
          items={[
            "Access the personal information associated with your account",
            "Update or correct your information",
            "Request deletion of your account and associated data",
            "Control communication preferences",
            "Request clarification about how your data is used",
          ]}
        />
        <LegalP>
          To exercise these rights, contact us at <LegalEmailLink />
        </LegalP>
      </LegalSection>

      <LegalSection number={8} title="Third-Party Integrations And Links">
        <LegalP>Befikra may integrate with or link to third-party services such as:</LegalP>
        <LegalList
          items={[
            "WhatsApp",
            "Instagram",
            "Email providers",
            "Payment gateways",
            "Analytics tools",
          ]}
        />
        <LegalP>
          These services operate under their own privacy policies, and Befikra
          is not responsible for their practices. We only access and use data
          necessary to provide requested integrations.
        </LegalP>
      </LegalSection>

      <LegalSection number={9} title="Children's Privacy">
        <LegalP>
          Befikra is intended for use by businesses and individuals aged 18 and
          above.
        </LegalP>
        <LegalP>
          We do not knowingly collect personal information from individuals under
          the age of 18. If such data is discovered, it will be removed promptly.
        </LegalP>
      </LegalSection>

      <LegalSection number={10} title="Changes To This Privacy Policy">
        <LegalP>
          We may update this Privacy Policy periodically to reflect changes in
          services, legal requirements, or platform functionality.
        </LegalP>
        <LegalP>
          Updated versions will be posted on this page with the revised date.
          Continued use of Befikra constitutes acceptance of the updated policy.
        </LegalP>
      </LegalSection>

      <LegalSection number={11} title="Contact Information">
        <LegalP>
          If you have questions about this Privacy Policy or your data, please
          contact:
        </LegalP>
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          <strong className="font-semibold text-gray-800">Befikra Support</strong>
          <br />
          Email: <LegalEmailLink />
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
