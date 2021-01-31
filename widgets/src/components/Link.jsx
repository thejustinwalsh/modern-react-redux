const Link = ({ className, href, children }) => {
  const onClick = (ev) => {
    if (ev.metaKey || ev.ctrlKey) return;
    ev.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
