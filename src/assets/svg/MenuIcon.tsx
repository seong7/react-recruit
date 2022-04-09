// @ts-ignore
export const MenuIcon = ({ height }) => (
  <i
    className="dds-icon"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'fit-content',
      minWidth: '16px',
      height: `${height ?? 'fit-content'}`,
    }}
  >
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="icon__fill"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3H20C21.103 3 22 3.897 22 5V19C22 20.103 21.103 21 20 21H12H10H4C2.897 21 2 20.103 2 19V5C2 3.897 2.897 3 4 3ZM4 7V19H10V7H4ZM12 7V19H20.002L20 5V7H12ZM8 10H6V12H8V10ZM8 14H6V16H8V14Z"
        fill="#767679"
      />
    </svg>
  </i>
);
