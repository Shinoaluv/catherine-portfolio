import { ArrowUpRight, FileText } from 'lucide-react';
import { evidenceLinks } from '../evidenceLinks';

// Only allow web links and same-site paths; never execute a pasted URL as code.
function usableUrl(value) {
  const url = typeof value === 'string' ? value.trim() : '';
  if (url.startsWith('/') && !url.startsWith('//') && !url.includes('\\')) return url;
  try {
    const parsed = new URL(url);
    return ['https:', 'http:'].includes(parsed.protocol) ? parsed.href : null;
  } catch { return null; }
}

export function EvidenceLinks({ entry }) {
  const links = evidenceLinks[entry] || [{ label: 'View details', url: '' }];
  return <div className="evidence-links" role="group" aria-label={`Links for ${entry}`}>
    {links.map((link, index) => {
      const href = usableUrl(link.url);
      const label = link.label || 'View details';
      const content = <><FileText size={16} aria-hidden="true"/>{label}<ArrowUpRight size={15} aria-hidden="true"/></>;
      return href ? <a className="evidence-button" key={index} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} — ${entry} (opens in a new tab)`}>{content}</a> : <button type="button" className="evidence-button" key={index} disabled aria-label={`${label} — ${entry}`}>{content}</button>;
    })}
  </div>;
}
