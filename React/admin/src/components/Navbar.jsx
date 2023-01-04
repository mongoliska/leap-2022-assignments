import NavbarDropdown from './Navbar/NavbarDropdown';
import NavbarMenu from './Navbar/NavbarMenu';
import NavbarWrapper from './Navbar/NavbarWrapper';

export default function Navbar() {
  const menuItems = [
    { label: 'Home', link: '#' },
    { label: 'Articles', link: '#' },
    { label: 'Feedback', link: '#' },
    { label: 'Files', link: '#' },
  ];
  const dropdownItems = [
    { label: 'Profile', link: '#' },
    { label: 'Inbox', link: '#' },
    { label: 'Settings', link: '#' },
    { label: '---', link: '#' },
    { label: 'Sign out', link: '#' },
  ];

  return (
    <NavbarWrapper>
      <NavbarMenu title="Admin" items={menuItems} />
      <NavbarDropdown items={dropdownItems} img="https://avatars.githubusercontent.com/u/81268891?s=200&v=4" />
    </NavbarWrapper>
  );
}
