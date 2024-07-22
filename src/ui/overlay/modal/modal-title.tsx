export const ModalTitle = (props: { children: React.ReactNode }) => (
  <h2
    className="my-0 text-xl font-semibold leading-6 text-gray-900"
    slot="title"
  >
    {props.children}
  </h2>
);
