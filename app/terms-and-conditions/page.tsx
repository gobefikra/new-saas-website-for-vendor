import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import {
  LegalIntro,
  LegalSection,
  LegalP,
  LegalList,
  LegalEmailLink,
} from "@/components/legal/LegalContent";

export const metadata: Metadata = {
  title: "Terms & Conditions - Befikra Partner",
  description:
    "Terms and conditions governing your access to and use of Befikra's website, applications, and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions" lastUpdated="April 3, 2026">
      <LegalIntro>
        <p className="mb-4">
          <strong className="font-semibold text-gray-800">Welcome to Befikra.</strong>
        </p>
        <p className="mb-4">
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to
          and use of Befikra&apos;s website, applications, and services
          (collectively, the &ldquo;Services&rdquo;).
        </p>
        <p>
          By accessing or using Befikra, you agree to comply with and be bound
          by these Terms. If you do not agree, please do not use the Services.
        </p>
      </LegalIntro>

      <LegalSection number={1} title="About Befikra" showDivider={false}>
        <LegalP>
          Befikra is a technology platform that provides CRM, automation, AI,
          booking, and operational tools to help experience-based businesses
          manage leads, customer communication, bookings, payments, analytics,
          and operations.
        </LegalP>
        <LegalP>
          Befikra provides software and infrastructure tools only. Befikra does
          not own, operate, organize, or conduct any travel, adventure, or
          experience services listed or managed through the platform.
        </LegalP>
      </LegalSection>

      <LegalSection number={2} title="Eligibility">
        <LegalP>To use Befikra, you must:</LegalP>
        <LegalList
          items={[
            "Be at least 18 years old",
            "Have the authority to represent yourself or your business",
            "Provide accurate, complete, and updated information during registration and usage",
          ]}
        />
        <LegalP>
          Befikra reserves the right to suspend accounts that provide false or
          incomplete information.
        </LegalP>
      </LegalSection>

      <LegalSection number={3} title="User Responsibilities">
        <LegalP>By using Befikra, you agree to:</LegalP>
        <LegalList
          items={[
            "Provide accurate event, experience, pricing, and operational details",
            "Manage and fulfil bookings created through the platform",
            "Comply with all applicable laws, safety regulations, and business requirements",
            "Communicate clearly and responsibly with customers",
          ]}
        />
        <LegalP>
          Befikra is not responsible for the execution, safety, quality, or
          delivery of any experiences or services managed using the platform.
        </LegalP>
      </LegalSection>

      <LegalSection number={4} title="Acceptable Use">
        <LegalP>You agree not to:</LegalP>
        <LegalList
          items={[
            "Misuse, disrupt, or interfere with the platform or its services",
            "Upload false, misleading, illegal, or harmful content",
            "Attempt unauthorized access to systems, accounts, or data",
            "Use Befikra for fraudulent, unlawful, or abusive activities",
          ]}
        />
        <LegalP>
          Befikra reserves the right to suspend or terminate accounts that
          violate these Terms.
        </LegalP>
      </LegalSection>

      <LegalSection number={5} title="Bookings And Payments">
        <LegalList
          items={[
            "Befikra provides tools to manage bookings and payment collection",
            "Payments are processed through secure third-party payment providers",
            "Befikra does not directly handle or control payment processing systems",
            "Befikra is not responsible for payment failures caused by third-party providers",
          ]}
        />
        <LegalP>
          Users are responsible for managing their own payment policies,
          collections, and customer financial interactions.
        </LegalP>
      </LegalSection>

      <LegalSection number={6} title="Pricing And Subscription">
        <LegalList
          items={[
            "Subscription plans, features, and pricing are clearly communicated on the website or during onboarding",
            "Befikra may update pricing or plans with prior notice",
            "Any applicable charges will be communicated transparently",
          ]}
        />
      </LegalSection>

      <LegalSection number={7} title="Cancellations And Refunds">
        <LegalList
          items={[
            "Cancellation and refund policies are defined and managed by the business using Befikra",
            "Befikra only provides tools to display and manage these policies",
            "Befikra does not guarantee refunds unless required by law",
          ]}
        />
      </LegalSection>

      <LegalSection number={8} title="Intellectual Property">
        <LegalP>
          All software, platform design, branding, trademarks, and content
          related to Befikra are owned by Befikra.
        </LegalP>
        <LegalP>
          Users retain ownership of their own uploaded content but grant Befikra
          permission to use, display, and process such content for service
          delivery and platform functionality.
        </LegalP>
      </LegalSection>

      <LegalSection number={9} title="Data And Privacy">
        <LegalP>
          Your use of Befikra is governed by our{" "}
          <Link
            href="/privacy-policy"
            className="text-emerald-600 hover:underline font-medium"
          >
            Privacy Policy
          </Link>
          .
        </LegalP>
        <LegalP>
          By using the platform, you consent to the collection, storage, and
          processing of data necessary for providing services, improving
          performance, and ensuring platform functionality.
        </LegalP>
      </LegalSection>

      <LegalSection number={10} title="Limitation Of Liability">
        <LegalP>Befikra shall not be liable for:</LegalP>
        <LegalList
          items={[
            "Any indirect, incidental, or consequential damages",
            "Business losses, revenue losses, or operational interruptions",
            "Disputes between businesses and their customers",
            "Losses caused by misuse of the platform",
          ]}
        />
        <LegalP>
          The platform is provided on an &ldquo;as-is&rdquo; and
          &ldquo;as-available&rdquo; basis.
        </LegalP>
      </LegalSection>

      <LegalSection number={11} title="Suspension And Termination">
        <LegalP>Befikra may suspend or terminate access if:</LegalP>
        <LegalList
          items={[
            "These Terms are violated",
            "Required by law or legal authority",
            "Continued use poses security, operational, or compliance risks",
          ]}
        />
        <LegalP>Users may also discontinue use of the platform at any time.</LegalP>
      </LegalSection>

      <LegalSection number={12} title="Modifications To Terms">
        <LegalP>Befikra may update these Terms periodically.</LegalP>
        <LegalP>
          Continued use of the platform after updates constitutes acceptance of
          the revised Terms.
        </LegalP>
      </LegalSection>

      <LegalSection number={13} title="Governing Law">
        <LegalP>
          These Terms shall be governed by and interpreted in accordance with the
          laws of India.
        </LegalP>
        <LegalP>
          Any disputes shall be subject to the exclusive jurisdiction of courts
          located in India.
        </LegalP>
      </LegalSection>

      <LegalSection number={14} title="Contact Information">
        <LegalP>
          For questions, support, or legal inquiries, please contact:
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
