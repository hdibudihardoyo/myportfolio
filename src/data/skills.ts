import {
  type IconType,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiFigma,
  SiTailwindcss,
  SiPython,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
        {skill: 'bootstrap',icon: SiBootstrap,},
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        {
          skill: 'python',
          icon: SiPython,
        },
      ],
    },
    {
      field: 'UI / UX',
      skills: [
        {
          skill: 'figma',
          icon: SiFigma,
        },
      ],
    },
  ]

export default SKILLS
