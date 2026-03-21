import { cn } from "@/lib/utils";

type IconProps = React.SVGProps<SVGSVGElement> & { className?: string };

function strokeIcon(
  paths: React.ReactNode,
  { className, ...props }: IconProps = {}
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-[1em] shrink-0", className)}
      aria-hidden
      {...props}
    >
      {paths}
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>,
    props
  );
}

export function IconX(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M18 6 6 18M6 6l12 12" />
    </>,
    props
  );
}

export function IconFacebook(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </>,
    props
  );
}

export function IconTwitter(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.6-18 11 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 2-1.2 2-1.2z" />
    </>,
    props
  );
}

export function IconLinkedin(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>,
    props
  );
}

export function IconArrowUpRight(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M7 17 17 7M7 7h10v10" />
    </>,
    props
  );
}

export function IconArrowRight(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </>,
    props
  );
}

export function IconArrowUp(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </>,
    props
  );
}

export function IconAutomation(props: IconProps) {
  return strokeIcon(
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M9 9h6M9 12h4M9 15h6" />
      <circle cx="17" cy="7" r="2" />
    </>,
    props
  );
}

export function IconLayers(props: IconProps) {
  return strokeIcon(
    <>
      <path d="m12.83 2.18 8 3.33a1 1 0 0 1 0 1.84l-8 3.33a2 2 0 0 1-.83 0l-8-3.33a1 1 0 0 1 0-1.84l8-3.33a2 2 0 0 1 .83 0Z" />
      <path d="M3.27 12.27 12 15.5l8.73-3.23M3.27 16.27 12 19.5l8.73-3.23" />
    </>,
    props
  );
}

export function IconChart(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M3 3v18h18" />
      <path d="M7 16v-5M12 16V8M17 16v-9" />
    </>,
    props
  );
}

export function IconMail(props: IconProps) {
  return strokeIcon(
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>,
    props
  );
}

export function IconPhone(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.44 12.44 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </>,
    props
  );
}

export function IconClock(props: IconProps) {
  return strokeIcon(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>,
    props
  );
}

export function IconCheckCircle(props: IconProps) {
  return strokeIcon(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </>,
    props
  );
}

export function IconHome(props: IconProps) {
  return strokeIcon(
    <>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </>,
    props
  );
}

export function IconAlertTriangle(props: IconProps) {
  return strokeIcon(
    <>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4M12 17h.01" />
    </>,
    props
  );
}

export function IconBrain(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    </>,
    props
  );
}

export function IconTrendingUp(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
      <path d="M16 7h6v6" />
    </>,
    props
  );
}

export function IconBuilding(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12h12M10 6v4M14 6v4M10 14v4M14 14v4" />
    </>,
    props
  );
}

export function IconLayoutGrid(props: IconProps) {
  return strokeIcon(
    <>
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </>,
    props
  );
}

export function IconSettings(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </>,
    props
  );
}

export function IconDownload(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5M12 15V3" />
    </>,
    props
  );
}

export function IconShare(props: IconProps) {
  return strokeIcon(
    <>
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M16 6 12 2 8 6M12 2v15" />
    </>,
    props
  );
}
