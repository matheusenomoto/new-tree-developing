import './home.css';
import {
    homebusiness,
    htmlimage,
    businessdevelopmentsolutions,
} from '../img/appimages';


function Home() {


    return (
        <div class='main-home'>
            <h2>Conhecendo a <span>tree developing</span></h2>

            <div class='single-introduction'>
                <img class='single-introduction-img' alt='business' src={homebusiness}/>
                <div class='single-introduction-text'>
                    <p>A tree developing é uma empresa voltada para atender as necessidades individuais de cada um. Com foco em conhecer o seu cliente para então propor as melhores soluções e tecnologias.</p>
                    <p>Muitos dos processos do dia a dia já podem ser automatizados para melhorar a performance de um indivíduo, equipe ou empresa. As tarefas recorrentes acabam bloqueando a visão de como melhorar os resultados desejados e a melhor solução pode ser automatizar o seu trabalho.</p>
                </div>
            </div>

            <div class='single-introduction'>
                <img class='single-introduction-img' alt='business' src={htmlimage}/>
                <div class='single-introduction-text'>
                    <p>Websites, WebApps, Ferramentas para automação, Apps e Data Science são algumas das soluções que a tree pode oferecer para ajudar na sua performance. Tornar os seus resultados algo mais fácil de se alcançar é o nosso principal objetivo.</p>
                    <p>Atendimento individual é o que queremos para nossos clientes, queremos que todo o desenvolvimento seja feito pensando no melhor que a aplicação pode entregar ao usuário.</p>
                </div>
            </div>

            <div class='single-introduction'>
                <img class='single-introduction-img' alt='business' src={businessdevelopmentsolutions}/>
                <div class='single-introduction-text'>
                    <p>Escolha o que deseja melhorar e nos permita ajudá-lo através da tecnologia que podemos entregar a você.</p>
                    <p>Entre em contato com a <a href="/contact">tree developing</a> para que a gente ajude suas ideias à serem transformadas em verdadeiras estratégias vencedoras.</p>
                </div>
            </div>

        </div>
    )

}

export default Home;