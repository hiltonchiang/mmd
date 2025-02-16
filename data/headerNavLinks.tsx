import { faBone, faFilm, faPanorama, faShirt, faUser } from "@fortawesome/free-solid-svg-icons"

const headerNavLinks = [
  { href: '/', title: 'Capture', tab:'motion', icon:{}, tip:"Capture Motion" },
  { href: '/blog', title: 'Models', tab: 'model', icon:{faUser}, tip:"Select Models" },
  { href: '/tags', title: 'Materials', tab: 'material', icon:{faShirt}, tip:"Select Materials" },
  { href: '/projects', title: 'Backgrounds', tab:'background', icon:{faPanorama}, tip:"Select Backgrounds" },
  { href: '/chronicle', title: 'Skeletons', tab:'skeleton', icon:{faBone}, tip:"Select Skeletons" },
  { href: '/about', title: 'VMDs',tab:'animation', icon:{faFilm}, tip:"Select Animation" },
]

export default headerNavLinks
