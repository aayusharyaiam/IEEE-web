import React, { Children, cloneElement, isValidElement } from 'react';
import { ArrowUpRight } from 'lucide-react';

/** Wrap every word in a mask so useReveal can raise them one by one. */
const splitWords = (text, keyPrefix) =>
  text.split(/(\s+)/).map((part, i) =>
    /^\s+$/.test(part) || part === '' ? (
      part
    ) : (
      <span className="word" key={`${keyPrefix}-${i}`}>
        <span className="word__inner">{part}</span>
      </span>
    ),
  );

const splitChildren = (children, prefix = 'w') =>
  Children.map(children, (child, i) => {
    if (typeof child === 'string' || typeof child === 'number') return splitWords(String(child), `${prefix}${i}`);
    if (isValidElement(child) && child.props.children != null) {
      return cloneElement(child, undefined, splitChildren(child.props.children, `${prefix}${i}-`));
    }
    return child;
  });

/**
 * Headline whose words rise into place on scroll. Accepts plain text plus
 * inline elements such as <em> (the copper accent) and <br />.
 */
export const SplitText = ({ as = 'h2', className = '', children, delay, ...rest }) => {
  const Tag = as;
  return (
    <Tag className={className} data-split="" data-reveal-delay={delay} {...rest}>
      {splitChildren(children)}
    </Tag>
  );
};

/** Mono index + drawing rule + serif heading — the notebook section header. */
export const SectionHead = ({ index, label, title, children, align = 'left', className = '', titleAs = 'h2' }) => (
  <header className={`section-head ${align === 'center' ? 'text-center justify-items-center' : ''} ${className}`}>
    <div className={`section-head__meta w-full ${align === 'center' ? 'max-w-[520px]' : ''}`}>
      <span className="label" data-reveal>
        {index && <span className="label-index">[{index}]</span>} {label}
      </span>
      <span className="rule" data-rule="" aria-hidden="true" />
    </div>
    <SplitText as={titleAs} className="display-lg max-w-[18ch]">{title}</SplitText>
    {children}
  </header>
);

/** Arrow used inside .btn — rotates to point outward on hover. */
export const BtnArrow = () => <ArrowUpRight size={16} strokeWidth={1.75} className="btn-arrow rotate-45" aria-hidden="true" />;

/** Infinite marquee; content is duplicated so the loop is seamless. */
export const Ticker = ({ items, className = '' }) => {
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3 px-8 whitespace-nowrap">
          <span className="label !text-copper">{item.label}</span>
          <span className="small">{item.text}</span>
          <span className="ml-8 h-1 w-1 rounded-full bg-current opacity-40" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`ticker ${className}`}>
      <div className="ticker__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
};
