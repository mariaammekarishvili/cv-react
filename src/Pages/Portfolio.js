import * as React from "react";

const Portfolio = () => {
    return(
        <div className={'page'}>
            <div className={'prt'}>
                <h2 className={'title'}>ჩემი პროექტების სანახავად შეგიძლიათ გადახვიდეთ შემდგომ ლინკებზე</h2>
                <a href={'https://github.com/mariaammekarishvili'} className={'g-link'}>https://github.com/mariaammekarishvili</a>
                <a href={'https://gitlab.com/mariaammekarishvili'} className={'g-link'}>https://gitlab.com/mariaammekarishvili</a>
                <h2 className={'title'}>რეაქტის დავალებები შეგიძლია იხილოთ</h2>
                <a href={'https://github.com/mariaammekarishvili/React-BTU'} className={'g-link'}>https://github.com/mariaammekarishvili/React-BTU</a>
                <h2 className={'title'}>API</h2>
                <a href={'https://github.com/mariaammekarishvili/react-pokedex'} className={'g-link'}>https://github.com/mariaammekarishvili/react-pokedex</a>
            </div>
        </div>
    )
}

export default Portfolio