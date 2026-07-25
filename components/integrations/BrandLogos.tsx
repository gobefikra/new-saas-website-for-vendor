import {
  SiGoogleads,
  SiHubspot,
  SiMeta,
  SiZoho,
} from "react-icons/si";
import { MdWebhook } from "react-icons/md";

type LogoProps = { className?: string; id?: string };

export function WhatsAppLogo({ className = "h-11 w-11" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#25D366"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

export function InstagramLogo({ className = "h-11 w-11", id = "ig" }: LogoProps) {
  const gradId = `ig-grad-${id}`;
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FD5949" />
          <stop offset="50%" stopColor="#D6249F" />
          <stop offset="100%" stopColor="#285AEB" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradId})`}
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    </svg>
  );
}

/** Official multicolor Gmail "M" mark */
export function GmailLogo({ className = "h-11 w-11" }: LogoProps) {
  return (
    <svg className={className} viewBox="52 42 88 66" aria-hidden>
      <path fill="#4285F4" d="M58 108h14V74L52 59v43c0 3.3 2.7 6 6 6z" />
      <path fill="#34A853" d="M120 108h14c3.3 0 6-2.7 6-6V59l-20 15v34z" />
      <path fill="#FBBC04" d="M120 48v26l20-15v-8c0-7.4-8.5-11.7-14.4-7.2L120 48z" />
      <path fill="#EA4335" d="M72 74V48l24 18 24-18v26L96 92 72 74z" />
      <path
        fill="#C5221F"
        d="M52 48v8l20 15V48l-5.6-4.2C60.5 39.3 52 43.6 52 51v-3z"
      />
    </svg>
  );
}

export function MetaLogo({ className = "h-11 w-11" }: LogoProps) {
  return <SiMeta className={className} color="#0081FB" aria-hidden />;
}

export function GoogleAdsLogo({ className = "h-11 w-11" }: LogoProps) {
  return <SiGoogleads className={className} color="#4285F4" aria-hidden />;
}

export function HubSpotLogo({ className = "h-11 w-11" }: LogoProps) {
  return <SiHubspot className={className} color="#FF7A59" aria-hidden />;
}

export function ZohoLogo({ className = "h-11 w-11" }: LogoProps) {
  return <SiZoho className={className} color="#226DB4" aria-hidden />;
}

export function WebhooksLogo({ className = "h-11 w-11" }: LogoProps) {
  return <MdWebhook className={className} color="#E34F26" aria-hidden />;
}

export function MyLinkrLogo({ className = "h-11 w-11" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect width="24" height="24" rx="6" fill="#10B981" />
      <g
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        transform="translate(3 3) scale(0.75)"
      >
        <path d="M9 17H7A5 5 0 0 1 7 7h2" />
        <path d="M15 7h2a5 5 0 0 1 0 10h-2" />
        <path d="M8 12h8" />
      </g>
    </svg>
  );
}

export function WebsiteLogo({ className = "h-11 w-11" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="#0F172A" strokeWidth="1.75" />
      <path
        d="M2.5 12h19M12 2.5c2.5 2.7 3.8 5.9 3.8 9.5S14.5 18.8 12 21.5C9.5 18.8 8.2 15.6 8.2 12S9.5 5.2 12 2.5z"
        stroke="#0F172A"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}
