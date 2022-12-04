function closeDialog() {
  const d = document.getElementById("test");
  d?.toggleAttribute("open");
}

export default function Dialog({
  children,
  ...props
}: {
  children: React.ReactNode;
  props: any;
}) {
  return (
    <dialog {...props}>
      {children}
      <button onClick={closeDialog} className="float-right pt-8">
        Dismiss
      </button>
    </dialog>
  );
}
