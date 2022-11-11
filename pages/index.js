import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
    const estilosHomePage = {
        // backgroundColor: "red" 
    }

    //console.log(config.playlists)

    return (

        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>

    )

}

export default HomePage

/**function Menu() {
    return (
        <div>
            Menu
        </div>
    )
}*/

const StyledHeader = styled.div`
   img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-top: 65px;
    margin-left: 28px;

    .userInfo {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
}
   }
`

function Header() {
    return (
        <StyledHeader>
            {/**<img src="banner" />*/}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div style={{
                    display: "inline-flex",
                    flexDirection: "column",
                    position: "relative",
                    bottom: "40px",
                    marginLeft: "10px",
                }}>

                    <h2>
                        {config.nome}
                    </h2>
                    <p>
                        {config.cargo}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {
    // props - abreviação de propriedades 
    //console.log("Dentro do componente", props.playlists)
    // Object.keys() - serve para colocar na tela a informação que tem dentro do props 
    const playlistsName = Object.keys(props.playlists)

    return (
        <StyledTimeline>
            {playlistsName.map(function (playlistName) {
                const videos = props.playlists[playlistName]
                console.log(videos)

                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map(function (video) {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.titulo}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            }
            )}
        </StyledTimeline>
    )
}