import Reveal from "./Reveal";

type Props = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ label, title, description, align = "left" }: Props) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <span className="section-label">{label}</span>
      <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
