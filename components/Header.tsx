import { Avatar, IconButton } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
function Header({ fps, basePath }: { fps: number, basePath: string }): JSX.Element {
  return (
    <div className="header">
      <div className="header-item lg-screen" style={{ justifyContent: "flex-start" }}>
        <Avatar
          alt="3939mmd"
          src={`${basePath}/logo.png`}
          sx={{
            width: 36,
            height: 36,
            marginRight: ".5rem",
            transition: "transform 2s ease-in-out",
            "&:hover": {
              transform: "rotate(360deg)",
            },
          }}
        />
      </div>

      <div className="header-item lg-screen">
        <p>FPS: {fps}</p>
      </div>
      <div className="header-item lg-screen" style={{ justifyContent: "flex-end" }}>
        <a href="https://github.com/hiltonchiang/mmd" target="_blank">
          <IconButton>
            <FontAwesomeIcon icon={faGithub} color="white" size="sm" />
          </IconButton>
        </a>
      </div>
    </div>
  )
}

export default Header
