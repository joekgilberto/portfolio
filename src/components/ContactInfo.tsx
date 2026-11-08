interface ContactInfoProps {
  label: string;
  value: string;
  link: string;
  newTab?: boolean;
}

export default function ContactInfo({
  label,
  value,
  link,
  newTab = true,
}: ContactInfoProps) {
  return (
    <div className="flex w-full border-2 border-green-950 rounded-lg shadow-md hover:[&_a]:decoration-current">
      <p className="w-21 shrink-0 bg-green-900 px-2 py-1 rounded-s-[10px] border-e-2 border-green-950">
        {label}
      </p>
      <p className="w-full min-w-0 break-all bg-green-800 px-2 py-1 rounded-e-[10px]">
        <a
          href={link}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
          className="underline decoration-2 decoration-transparent underline-offset-4 cursor-pointer"
        >
          {value}
        </a>
      </p>
    </div>
  );
}
