import styled from "styled-components";

const Section = styled.section`
    
    display: flex;
    justify-content: space-around;
    padding: 40px;
    flex-wrap: wrap;
    h1{
        font-size: 24px;
    }
    .educacao, .educacao__online, .comunidade{
        display: flex;
        flex-direction: column;
        gap: 24px;
        span{
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .title{
            font-size: 20px;
            color: #858585;
        }
    }
    @media(max-width: 1024px){
       .educacao, .educacao__online, .comunidade{
            span{
                p{
                    display: none;
                }
            }
       }
    }
    @media(max-width: 764px){
        .educacao, .educacao__online, .comunidade{
            display: none;
        }
    }
`

export default function Rodape() {
    return (
        <Section>
            <h1>Grupo Alura</h1>
            <div className="educacao">
                <p className="title">EDUCAÇÃO</p>
                <span>
                    <img src="/src/assets/educacao/Ellipse1.png" alt="" />
                    <p>Caelum</p>
                </span>
                <span>
                    <img src="/src/assets/educacao/Ellipse2.png" alt="" />
                    <p>Casa do Código</p>
                </span>
            </div>
            <div className="educacao__online">
                <p className="title">EDUCAÇÃO ONLINE</p>
                <span>
                    <img src="/src/assets/educacao_online/alura.png" alt="" />
                    <p>Alura</p>
                </span>
                <span>
                    <img src="/src/assets/educacao_online/alura_empresas.png" alt="" />
                    <p>Alura Para Empresas</p>
                </span>            
                <span>
                    <img src="/src/assets/educacao_online/alura.png" alt="" />
                    <p>Alura LATAM</p>
                </span>
                <span>
                    <img src="/src/assets/educacao_online/alura_start.png" alt="" />
                    <p>Alura Start</p>
                </span>
                <span>
                    <img src="/src/assets/educacao_online/music_dot.png" alt="" />
                    <p>MusicaDot</p>
                </span>
                <span>
                    <img src="/src/assets/educacao_online/alura_linguas.png" alt="" />
                    <p>Alura Lingua</p>
                </span>
                <span>
                    <img src="/src/assets/educacao_online/pm3.png" alt="" />
                    <p>PM3</p>
                </span>
            </div>
            <div className="comunidade">
                <p className="title">COMUNIDADE</p>
                <span>
                    <img src="/src/assets/comunidade/hipster_tech.png" alt="" />
                    <p>Hipsters ponto Tech</p>
                </span>
                <span>
                    <img src="/src/assets/comunidade/scuba_dev.png" alt="" />
                    <p>Scuba Dev</p>
                </span>            
                <span>
                    <img src="/src/assets/comunidade/layers_tech.png" alt="" />
                    <p>Layers ponto Tech</p>
                </span>
                <span>
                    <img src="/src/assets/comunidade/likeaboss.png" alt="" />
                    <p>Like a Boss</p>
                </span>
                <span>
                    <img src="/src/assets/comunidade/carreira_sem_fronteiras.png" alt="" />
                    <p>Carreira sem Fronteira</p>
                </span>
                <span>
                    <img src="/src/assets/comunidade/hipster_jobs.png" alt="" />
                    <p>Hipsters ponto Jobs</p>
                </span>
                <span>
                    <img src="/src/assets/comunidade/guj.png" alt="" />
                    <p>GUJ</p>
                </span>
            </div>
        </Section>
    )
}