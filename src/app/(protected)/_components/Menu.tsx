import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/images/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "client"],
      },
      {
        icon: "/images/clients.png",
        label: "Clients",
        href: "/list/clients",
        visible: ["admin"],
      },
      {
        icon: "/images/documents.png",
        label: "Documents",
        href: "/list/documents",
        visible: ["admin", "client"],
      },
      {
        icon: "/images/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "client"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/images/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "client"],
      },
      {
        icon: "/images/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "client"],
      },
      {
        icon: "/images/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "client"],
      },
    ],
  },
];

const Menu = () => {
  const role = "admin";
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
