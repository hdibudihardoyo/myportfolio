import {
  IconType,
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiMedium,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'hdibudihardoyo@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/hdibudihardoyo',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/hdibudihardoyo',
    },
    {
      icon: SiInstagram,
      href: 'https://www.instagram.com/hdibudihardoyo',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
