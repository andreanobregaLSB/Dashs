import type { HTMLAttributes, ReactNode } from "react";

type Tone = "success" | "warning" | "danger" | "neutral";

export function SurfaceCard({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`surface-card ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="section-header">
      <div>
        <p className="section-header__eyebrow">{eyebrow}</p>
        <h2 className="section-header__title">{title}</h2>
        <p className="section-header__description">{description}</p>
      </div>
      {action ? <div className="section-header__action">{action}</div> : null}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-title">
      <p className="section-title__eyebrow">{eyebrow}</p>
      <h2 className="section-title__title">{title}</h2>
      <p className="section-title__description">{description}</p>
    </div>
  );
}

export function StatCard({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <SurfaceCard className="stat-card">
      <span className="stat-card__label">{label}</span>
      <strong className="stat-card__value">{value}</strong>
      <span className="stat-card__delta">{delta}</span>
    </SurfaceCard>
  );
}

export function StatusBadge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span className={`badge badge--${tone}`}>
      {children}
    </span>
  );
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="progress">
      <div className="progress__bar" style={{ width: `${value}%` }} />
      <span className="progress__label">{value}%</span>
    </div>
  );
}
